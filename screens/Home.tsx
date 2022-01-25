import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from '../types';
import { useMoralis } from 'react-moralis';
import FAB from 'react-native-fab';
import { FontAwesome5 } from '@expo/vector-icons';
// import { enableMoralisViaWalletConnect } from '../enableMoralisViaMoralis';

export default function Home({ navigation }) {
	return (
		<View style={styles.container}>
			<Text>This is the Home</Text>
			<FAB
				buttonColor='#973EF5'
				iconTextColor='white'
				onClickAction={() => navigation.navigate('Create a Herd', {})}
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
