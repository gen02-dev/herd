import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Navigation from '../types';
// import { useWalletConnect } from '@walletconnect/react-native-dapp';
import { useWalletConnect } from '../WalletConnect';
import { useMoralis } from 'react-moralis';
import { enableMoralisViaWalletConnect } from '../enableMoralisViaMoralis';

export default function Main({ navigation }: any) {
	const {
		web3,
		Moralis,
		user,
		authenticate,
		authError,
		isAuthenticated,
		logout,
	} = useMoralis();
	const connector = useWalletConnect();
	const [account, setAccount] = useState('');

	async function authAccount() {
		await authenticate({ connector });

		if (authError) {
			console.log(authError);
		} else {
			if (isAuthenticated) {
				setAccount(user?.get('accounts')[0]);
				console.log('LO');
			}
		}
	}

	return (
		<View style={styles.container}>
			<Text style={styles.textContent}>This is the Main {account} </Text>
			<Button
				onPress={() => {
					(navigation as Navigation).navigate('Second Page');
				}}
				title='Go to Second Page'
			/>
			<Button
				onPress={
					() => authAccount()
					// setAccount('Loading');
					// authenticate({ connector })
					// 	.then(() => {
					// 		console.log(isAuthenticated, JSON.stringify(authError));
					// 		if (authError) {
					// 			console.log(authError.message);
					// 	} else {
					// 		if (isAuthenticated) {
					// 			setAccount(user?.get('accounts')[0]);
					// 			console.log('LO');
					// 		}
					// 	}
					// })
					// 	.catch(() => {});
				}
				title='CONNECT'
			/>
			<Button
				onPress={async () => {
					// connector.sendTransaction({
					//   from: connector.accounts[0],
					//   to: "0x083196134f3a49fe441cb0ae6a702f9ecb2bb14d",
					//   value: "10000000000000000"
					// })
				}}
				title='SEND'
			/>
			<Button
				onPress={() => {
					logout().then(console.log(user?.get('accounts')[0]));
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
		fontFamily: 'bank-gothic-light',
	},
});
