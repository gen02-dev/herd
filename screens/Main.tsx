import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Navigation from '../types';
import { useWalletConnect } from '../WalletConnect';
import { useMoralis } from 'react-moralis';
import { enableMoralisViaWalletConnect } from '../enableMoralisViaMoralis';
import { useNFTBalance } from '../hooks/useNFTBalance';
import { useMoralisDapp } from '../providers/MoralisDappProvider';
import { ethers, providers } from 'ethers';
import { EtherscanProvider } from '@ethersproject/providers';

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
	const { NFTBalance, isLoading } = useNFTBalance();

	async function getEns(address) {}

	useEffect(() => {
		console.log(isAuthenticated);
		if (user?.get('accounts').length) {
			console.log(getEns(user.get('accounts')[0]));
			setAccount(user.get('accounts')[0]);
		} else {
			setAccount('');
		}
		if (!isLoading && NFTBalance.length) {
			// console.log(JSON.stringify(NFTBalance[0]));
		}
	}, [user?.get('accounts'), isAuthenticated, NFTBalance, isLoading]);

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
				onPress={() => {
					setAccount('Loading');

					authenticate({ connector })
						.then(() => {
							if (authError) {
								console.log(authError.message);
							} else {
								if (isAuthenticated) {
									console.log('Auth');
								}
							}
						})
						.catch(() => {});
				}}
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
					logout().then(() => console.log(user?.get('accounts')[0]));
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
