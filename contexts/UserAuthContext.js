import { View, ActivityIndicator, Text } from 'react-native';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Auth, Hub } from 'aws-amplify';

const UserAuthContext = createContext({});

const AuthUserProvider = (props) => {
	// tracking user states
	const [user, setUser] = useState(undefined);
	// check if there is a user
	const checkUser = async () => {
		try {
			const authUser = await Auth.currentAuthenticatedUser({
				bypassCache: true,
			});
			setUser(authUser);
		} catch (e) {
			console.log(e);
			setUser(null);
		}
	};
	// rerun checkUser function every time app refreshes or restarts
	useEffect(() => {
		checkUser();
	}, []);
	// a listener to keep checking if a user's signed in(if true, keeps the user signed in)
	useEffect(() => {
		// hub listener
		const listener = (data) => {
			if (data.payload.event === 'signIn' || data.payload.event === 'signOut') {
				checkUser();
			}
		};
		// remove listener
		Hub.listen('auth', listener);
		return () => Hub.remove('auth', listener);
	}, []);

	// preloaded wait skreen
	if (user === undefined) {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<ActivityIndicator size={'large'} color='grey' />
				<Text style={{ marginTop: 2 }}>Please wait..</Text>
			</View>
		);
	}
	// returning the provider
	return (
		<UserAuthContext.Provider value={{ user }}>
			{props.children}
		</UserAuthContext.Provider>
	);
};

export default AuthUserProvider;
export const useUserAuthContext = () => useContext(UserAuthContext);
