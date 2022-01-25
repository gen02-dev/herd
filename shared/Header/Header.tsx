import React from 'react';
import { Text, View } from 'react-native';

export default function Header({ headerTitle, styles }) {
	return (
		<View>
			<Text style={styles.headerText}>{headerTitle}</Text>
		</View>
	);
}
