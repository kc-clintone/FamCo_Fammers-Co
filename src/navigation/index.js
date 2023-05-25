import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';

// screens
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import Post from '../screens/Post/Post';
import Explore from '../screens/Explore/Explore';
import MenuScreen from '../screens/MenuScreen/MenuScreen';
import Feedback from '../screens/MenuScreen/ScreenItems/Feedback';
import Tools from '../screens/MenuScreen/ScreenItems/Tools';
import Settings from '../screens/MenuScreen/ScreenItems/Settings';
import Notifications from '../screens/MenuScreen/ScreenItems/Notifications';

// other imports
import { EvilIcons, Ionicons } from '@expo/vector-icons';
import PostDetailScreen from '../screens/PostDetail/PostDetailScreen';
import { useUserAuthContext } from '../../contexts/UserAuthContext';

// Stack screen creator
const Stack = createNativeStackNavigator();
//Main navigator
const RootNavigation = () => {
	// get user from context and store it in authenticatedUser variable
	const { user } = useUserAuthContext();
	// authUser
	const authenticatedUser = user;

	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
			initialRouteName='Homescreen'
		>
			{authenticatedUser ? (
				<>
					<Stack.Screen name='FamCo' component={DefaultTabs} />
					<Stack.Screen
						name='Root'
						component={Root}
						options={{
							headerShown: false,
							title: '',
						}}
					/>
				</>
			) : (
				<>
					{/* authentication screens */}

					<Stack.Screen name='SignIn' component={SignInScreen} />
					<Stack.Screen name='SignUp' component={SignUpScreen} />
					<Stack.Screen name='ConfirmEmail' component={ConfirmEmailScreen} />
					<Stack.Screen
						name='ForgotPassword'
						component={ForgotPasswordScreen}
					/>
					<Stack.Screen name='NewPassword' component={NewPasswordScreen} />
				</>
			)}
		</Stack.Navigator>
	);
};

// other screens
const StackScreen = createNativeStackNavigator();
//Main navigator
const Root = () => {
	const navigation = useNavigation();
	return (
		<StackScreen.Navigator screenOptions={{ headerShown: true }}>
			<StackScreen.Screen
				name='Settings'
				component={Settings}
				options={{
					title: 'App settings',
					headerLeft: () => (
						<EvilIcons
							name='close'
							style={{ fontSize: 30, marginLeft: 15 }}
							onPress={() => navigation.goBack()}
						/>
					),
				}}
			/>
			<StackScreen.Screen
				name='Notification'
				component={Notifications}
				options={{
					title: 'Notifications & Support',
					headerLeft: () => (
						<EvilIcons
							name='close'
							style={{ fontSize: 30, marginLeft: 15 }}
							onPress={() => navigation.goBack()}
						/>
					),
				}}
			/>
			<StackScreen.Screen
				name='Tools'
				component={Tools}
				options={{
					title: 'Data collection tools',
					headerLeft: () => (
						<EvilIcons
							name='close'
							style={{ fontSize: 30, marginLeft: 15 }}
							onPress={() => navigation.goBack()}
						/>
					),
				}}
			/>
			<StackScreen.Screen
				name='Feedback'
				component={Feedback}
				options={{
					title: 'Send a feedback',
					headerLeft: () => (
						<EvilIcons
							name='close'
							style={{ fontSize: 30, marginLeft: 15 }}
							onPress={() => navigation.goBack()}
						/>
					),
				}}
			/>
			<StackScreen.Screen
				name='Postdetail'
				component={PostDetailScreen}
				options={{
					title: '',
				}}
			/>
		</StackScreen.Navigator>
	);
};

// TabScreens
const Tab = createBottomTabNavigator();
const DefaultTabs = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarHideOnKeyboard: true,
				headerShown: true,
				tabBarLabelStyle: {
					fontSize: 17,
					fontWeight: '500',
				},
				tabBarStyle: {
					height: 56,
					backgroundColor: '#fff',
				},
			}}
		>
			<Tab.Screen
				name='Homescreen'
				component={HomeScreen}
				options={{
					tabBarActiveBackgroundColor: '#e3e3e3',
					tabBarActiveTintColor: '#051F20',
					tabBarLabel: 'Home',
					tabBarIcon: ({ color }) => (
						<Ionicons name='ios-home' size={32} color={color} />
					),
				}}
			/>

			<Tab.Screen
				name='Post'
				options={{
					tabBarActiveBackgroundColor: '#e3e3e3',
					tabBarActiveTintColor: '#051F20',
					title: 'Make a report',
					tabBarIcon: ({ color }) => (
						<EvilIcons name='plus' size={32} color={color} />
					),
					tabBarLabel: 'Post',
				}}
				component={Post}
			/>

			<Tab.Screen
				name='Explore'
				options={{
					tabBarActiveBackgroundColor: '#e3e3e3',
					tabBarActiveTintColor: '#051F20',
					title: 'Explore',
					tabBarIcon: ({ color }) => (
						<Ionicons name='ios-search' size={32} color={color} />
					),
				}}
				component={Explore}
			/>

			<Tab.Screen
				name='Profile'
				options={{
					tabBarActiveBackgroundColor: '#e3e3e3',
					tabBarActiveTintColor: '#051F20',
					title: 'Profile',
					tabBarIcon: ({ color }) => (
						<Ionicons name='ios-person' size={32} color={color} />
					),
				}}
				component={MenuScreen}
			/>
		</Tab.Navigator>
	);
};

export default RootNavigation;
