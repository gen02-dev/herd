import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FAB from 'react-native-fab';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Explore() {
	return (
		<View style={styles.container}>
			<Text>This is Explore</Text>
			<FAB
				buttonColor='#973EF5'
				iconTextColor='white'
				onClickAction={() => {}}
				visible={true}
				iconTextComponent={<FontAwesome5 name='plus' />}
			/>
			<StatusBar style='auto' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
