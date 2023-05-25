import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment/moment';
import { API, graphqlOperation } from 'aws-amplify';
import { listUsers } from '../../graphql/queries';

// import moment from 'moment'

export default function SinglePost({ data }) {
	// navigation
	const navigation = useNavigation();

	const [thisUser, setThisUser] = useState(null);

	const getUsers = async () => {
		try {
			const users = await API.graphql(
				graphqlOperation(listUsers, { id: data?.userID })
			);
			setThisUser(users.data);
			console.log(thisUser);
		} catch (e) {
			Alert.alert(e);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<View>
			<View
				style={{
					width: '100%',
					borderBottomColor: 'black',
					borderBottomWidth: 1,
					marginVertical: 3,
				}}
			>
				{/* user details */}
				<View key={data?.id} style={styles.userDetails}>
					<View style={styles.left}>
						<View
							style={{
								width: 50,
								height: 50,
								borderRadius: 30,
								backgroundColor: 'lightblue',
								alignItems: 'center',
								justifyContent: 'center',
								marginRight: 5,
							}}
						>
							<Image
								source={require('../../../assets/images/Logo_1.jpg')}
								alt='image'
								style={styles.profilePic}
							/>
						</View>

						<View>
							<Text style={styles.username}>username</Text>
							<Text style={styles.email}>email address</Text>
						</View>
					</View>
					<View style={styles.right}>
						<Text style={styles.createdAt}>
							{moment(data?.createdAt).fromNow()}
						</Text>
						<Entypo name='dots-three-vertical' style={styles.moreOptions} />
					</View>
				</View>

				{/* image styles */}
				<TouchableOpacity
					onPress={async () =>
						navigation.navigate('Root', {
							screen: 'Postdetail',
							data: await data,
						})
					}
				>
					<View style={styles.imageView}>
						<Image
							source={{ uri: data?.postimage }}
							alt='image'
							style={styles.imageStyles}
						/>
					</View>
				</TouchableOpacity>

				{/* description */}
				<View style={styles.description}>
					<View style={styles.descriptionContent}>
						<Text
							style={{
								fontSize: 14,
								fontWeight: '100',
								marginLeft: 5,
								marginBottom: 5,
							}}
							numberOfLines={2}
						>
							{data?.description}
						</Text>
					</View>
				</View>
			</View>
		</View>
	);
}
// styles
const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: 'white',
	},
	userDetails: {
		flexDirection: 'row',
		width: '96%',
		justifyContent: 'space-between',
		alignItems: 'center',
		alignSelf: 'center',
		marginVertical: 2,
	},
	imageView: {
		width: '100%',
		height: 240,
	},
	imageStyles: {
		width: '100%',
		height: '100%',
	},
	username: {
		fontSize: 18,
		fontWeight: '500',
		marginBottom: 1,
	},
	email: {
		fontSize: 15,
		color: 'grey',
		fontWeight: '300',
	},
	right: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	left: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	profilePic: {
		width: '92%',
		height: '92%',
		borderRadius: 30,
		alignSelf: 'center',
		backgroundColor: 'lightblue',
	},
	createdAt: {
		fontSize: 12,
		marginRight: 10,
		fontWeight: '100',
	},
	moreOptions: {
		fontSize: 20,
		color: 'black',
	},
	descriptionContent: {
		marginVertical: 5,
		width: '96%',
	},
});
