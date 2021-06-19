import React from 'react';
import { View, Text } from 'react-native';

export default function ({ navigation }) {
	return (
			<View
				style={{
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Text>This is the settings tab</Text>
			</View>
	
	);
}