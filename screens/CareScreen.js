import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function ({ navigation }) {
	return (
		<View style={styles.container}>
		  <Text style={styles.paragraph}>
			Todo List
		  </Text>
		  <Card>
			<Text>Asset here</Text>
		  </Card>
		</View>
	  );
	}
	
	const styles = StyleSheet.create({
	  container: {
		flex: 1,
		justifyContent: 'center',
		paddingTop: Constants.statusBarHeight,
		backgroundColor: '#ecf0f1',
		padding: 8,
	  },
	  paragraph: {
		margin: 24,
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
	  }
	});