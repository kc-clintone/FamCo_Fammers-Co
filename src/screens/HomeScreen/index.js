import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, Alert, Text } from 'react-native';
import SinglePost from '../../components/SinglePost/SinglePost';

import { API, graphqlOperation } from 'aws-amplify';
import { listReports } from '../../graphql/queries';

const index = () => {
	// TODO: TRANSFER THIS TO A STATE-MANAGER
	// store fetched
	const [reports, setReports] = useState();
	const [loading, setLoading] = useState(false);

	// fetch all data from backend
	const _fetchData = async () => {
		setLoading(true);
		try {
			const _getAllReports = await API.graphql(graphqlOperation(listReports));
			setReports(_getAllReports.data.listReports.items);
		} catch (e) {
			Alert.alert(e);
		} finally {
			setLoading(false);
		}
	};

	// update ui with fetched data
	useEffect(() => {
		_fetchData();
	}, []);

	return (
		<View style={styles.root}>
			<FlatList
				refreshing={loading}
				onRefresh={_fetchData}
				data={reports}
				renderItem={({ item }) => <SinglePost data={item} />}
			/>
		</View>
	);
};

export default index;

// styles
const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: 'white',
	},
});
