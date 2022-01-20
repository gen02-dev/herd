import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from '../types';
import { useMoralis } from 'react-moralis';
// import { enableMoralisViaWalletConnect } from '../enableMoralisViaMoralis';

export default function Home() {
	return (
		<View style={styles.container}>
			<Text>This is the Home</Text>
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
