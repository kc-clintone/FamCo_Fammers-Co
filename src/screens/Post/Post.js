import React, { useEffect, useRef, useState } from 'react';
import { Camera, CameraType } from 'expo-camera';
import 'react-native-gesture-handler';
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	StyleSheet,
	Alert,
} from 'react-native';
import PostInput from './PostInput';
import CustomButton from '../../components/CustomButton';
import { EvilIcons } from '@expo/vector-icons';
import { API, graphqlOperation, Storage } from 'aws-amplify';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

import { useUserAuthContext } from '../../../contexts/UserAuthContext';
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { createReport } from '../../graphql/mutations';

export default function Post() {
	// useform config
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm();

	// navigation
	const navigation = useNavigation();
	// post data states
	const [selectedImage, setSelectedImage] = useState(null);
	const [desc, setDesc] = useState(null);

	// contexts
	const { user } = useUserAuthContext();

	// functions
	const onCreateReport = async () => {
		await _createPost();
		setSelectedImage(null);
		setDesc(null);
	};

	// cancel report function
	const cancelPost = () => {
		Alert.alert(
			'Warning',
			'Your post will be cancelled, are you sure you want to continue?',
			[
				{
					text: 'Yes',
					onPress: () => navigation.goBack(),
				},
				{
					text: 'No',
				},
			]
		);
	};
	// create report function
	const _createPost = async () => {
		Alert.alert(
			'Confirm and Post',
			'Your post will be vissible to everyone on this platform, are you sure you want to continue?',
			[
				{
					text: 'Yes',
					onPress: async () => {
						try {
							// user id
							const userId = user.attributes.sub;
							// new report object
							const newReport = {
								description: desc.data,
								postimage: selectedImage,
								userID: userId,
							};
							await API.graphql(
								graphqlOperation(createReport, { input: newReport })
							);
							navigation.navigate('FamCo', {
								screen: 'Homescreen',
							});
						} catch (error) {
							console.log(error);
							Alert.alert(error);
						}
					},
				},
				{
					text: 'No',
				},
			]
		);
	};

	// request permission to pick image
	const _getPermission = async () => {
		const _requestPermission =
			await ImagePicker.requestMediaLibraryPermissionsAsync();
		if (_requestPermission.granted === false) {
			Alert.alert('Permission to access gallery is required!');
			return;
		}
	};

	// request permission to pick image
	const _getCameraPermission = async () => {
		const _cameraPermission = await Camera.requestCameraPermissionsAsync();
		if (_cameraPermission.granted === false) {
			Alert.alert('Permission to access camera is required!');
			return;
		}
	};

	// take a pic
	const _useCamera = async () => {
		try {
			let takenPic = await ImagePicker.launchCameraAsync({
				allowsEditing: true,
				base64: false,
			});
			if (takenPic.cancelled === true) {
				return;
			}
			// updating the state of the image
			setSelectedImage(takenPic.uri);
			bottomSheetRef.current.snapTo(1);
		} catch (e) {
			Alert.alert(e);
		}
	};

	// mount media access permissions once component runs
	useEffect(async () => {
		_getPermission();
		await _getCameraPermission();
		setDesc(control._formValues);
	}, []);

	// get into media library and pick image
	const _getMedia = async () => {
		try {
			let _pickedMedia = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.All,
				allowsEditing: true,
				base64: false,
			});
			if (_pickedMedia.cancelled === true) {
				return;
			}
			// updating the state of the image
			setSelectedImage(_pickedMedia.uri);
			bottomSheetRef.current.snapTo(1);
		} catch (error) {
			Alert.alert(error);
		}
	};
	// bottom sheet popup
	const popup = () => (
		<View
			style={{
				backgroundColor: 'white',
				padding: 16,
				height: 280,
				elevation: 10,
			}}
		>
			<View>
				<View style={{ marginBottom: 30, marginTop: 10 }}>
					<CustomButton
						text={'Take a photo'}
						bgColor='#051F20'
						onPress={_useCamera}
					/>
					<CustomButton
						text={'Pick from library'}
						bgColor='#051F20'
						onPress={_getMedia}
					/>
				</View>

				<CustomButton
					text='Cancel'
					fgColor='#051F20'
					type='TERTIARY'
					onPress={() => bottomSheetRef.current.snapTo(1)}
				/>
			</View>
		</View>
	);
	// bottomsheet setup
	const bottomSheetRef = React.useRef(null);
	const fall = new Animated.Value(1);

	return (
		<>
			<Animated.View
				style={{ opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)) }}
			>
				<View style={{ width: '96%', alignSelf: 'center', marginTop: 10 }}>
					<Text style={{ fontSize: 18, fontWeight: '500' }}>
						To make a report{' '}
					</Text>
					<Text style={{ fontWeight: '200', color: '#304C' }}>
						Select an image from your gallery or take a photo that you wish to
						post, then proceed to shortly describe the issue in the text-field
						provided below. When done, click "Post" button to submit.
					</Text>
					{selectedImage ? (
						<>
							<View style={styles.pickedImageContainer}>
								<Image
									source={{ uri: selectedImage }}
									style={styles.pickedImage}
								/>
							</View>
							<Text
								style={{
									textAlign: 'center',
									justifyContent: 'center',
									marginVertical: 14,
									paddingVertical: 10,
									borderRadius: 8,
									backgroundColor: '#051F20',
									color: 'white',
									fontSize: 16,
									width: '70%',
									alignSelf: 'center',
								}}
								onPress={() => bottomSheetRef.current.snapTo(0)}
							>
								Pick a different image?
							</Text>
						</>
					) : (
						<TouchableOpacity
							style={styles.imageContainer}
							onPress={() => bottomSheetRef.current.snapTo(0)}
						>
							<View style={{ alignItems: 'center', justifyContent: 'center' }}>
								<EvilIcons name='image' size={100} color='black' />
								<Text
									style={{ fontSize: 18, fontWeight: '100', color: 'black' }}
								>
									Add an image
								</Text>
							</View>
						</TouchableOpacity>
					)}

					<Text style={{ fontSize: 20, fontWeight: '500', marginVertical: 4 }}>
						Describe the issue here.
					</Text>

					<View>
						<PostInput
							name='data'
							control={control}
							placeholder='please provide a detailed description of the issue here (minimum of 10 characters and not more than 300 characters)'
							rules={{
								required: 'description is required',
								minLength: {
									value: 10,
									message: 'should be at least 10 characters long',
								},
								maxLength: {
									value: 300,
									message: 'should not be more than 300 characters ',
								},
							}}
						/>
						<CustomButton
							text={'Post Report'}
							bgColor='#051F20'
							onPress={handleSubmit(onCreateReport)}
						/>

						<CustomButton
							text='Cancel post'
							fgColor='#051F20'
							type='TERTIARY'
							onPress={cancelPost}
						/>
					</View>
				</View>
			</Animated.View>

			<BottomSheet
				ref={bottomSheetRef}
				snapPoints={[280, 0]}
				initialSnap={1}
				enabledGestureInteraction={true}
				enabledBottomInitialAnimation={true}
				borderRadius={15}
				callbackNode={fall}
				renderContent={popup}
			/>
		</>
	);
}

// styles
const styles = StyleSheet.create({
	imageContainer: {
		width: '95%',
		height: 230,
		alignSelf: 'center',
		borderRadius: 10,
		borderColor: '#051F20',
		borderWidth: 3,
		borderStyle: 'dashed',
		marginVertical: 20,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#DBECF4',
	},
	pickedImageContainer: {
		width: '95%',
		height: 230,
		alignSelf: 'center',
		marginVertical: 20,
		alignItems: 'center',
		justifyContent: 'center',
	},
	pickedImage: {
		width: '100%',
		height: '100%',
		borderRadius: 10,
	},
	buttonContainer: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: 'transparent',
		margin: 64,
	},
	button: {
		flex: 1,
		alignSelf: 'flex-end',
		alignItems: 'center',
	},
	text: {
		fontSize: 24,
		fontWeight: 'bold',
		color: 'white',
	},
	cameraContainer: {
		flex: 1,
		justifyContent: 'center',
	},
	content: {
		width: '90%',
		alignItems: 'center',
		justifyContent: 'space-between',
		bottom: 10,
	},
});
