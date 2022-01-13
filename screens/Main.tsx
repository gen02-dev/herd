import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Navigation from '../types';
import { useWalletConnect } from '@walletconnect/react-native-dapp';
import { getWeb3 } from '../getWeb3';
import { useMoralis } from 'react-moralis';
import { useEffect } from 'react';

export default function Main({ navigation }: any) {
	const connector = useWalletConnect();
	const { isAuthenticated, user, authenticate, authError } = useMoralis();

	return (
		<View style={styles.container}>
			<Text style={styles.textContent}>
				This is the Main {JSON.stringify(isAuthenticated)}
			</Text>
			<Button
				onPress={() => {
					(navigation as Navigation).navigate('Second Page');
				}}
				title='Go to Second Page'
			/>
			<Button
				onPress={() => {
					//Todo use authenticate from useMoralis.
					connector
						.connect()
						.then((connector) =>
							console.log('Account connected ' + connector.accounts[0])
						);
				}}
				title='CONNECT'
			/>
			<Button
				onPress={() => {
					connector.sendTransaction({
						from: connector.accounts[0],
						to: '0x083196134F3a49fe441cB0ae6a702f9ECb2Bb14d',
						value: '10000000000000000',
					});
				}}
				title='SEND'
			/>
			<Button
				onPress={() => {
					connector.killSession();
				}}
				title='DISCONNECT'
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
	textContent: {
		fontWeight: 'bold',
	},
});
