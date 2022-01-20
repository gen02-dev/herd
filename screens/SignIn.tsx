import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useWalletConnect } from '../WalletConnect';
import { enableMoralisViaWalletConnect } from '../enableMoralisViaMoralis';
import { useMoralis } from 'react-moralis';

export default function SignIn() {
	const { authenticate, authError } = useMoralis();
	const connector = useWalletConnect();
	// Probably want to store user in some kind of object
	// const [account, setAccount] = useState('');
	// const { NFTBalance, isLoading } = useNFTBalance();

	//Todo
	async function getEns(address) {}

	return (
		<View style={styles.container}>
			<Image style={styles.logo} source={require('../assets/herd.png')} />
			<View style={styles.loginContainer}>
				<TouchableOpacity
					style={styles.loginButton}
					onPress={() => {
						authenticate({ connector })
							.then(() => {
								if (authError) {
									console.log(authError.message);
								}
							})
							.catch(() => {});
					}}
				>
					<Text style={styles.loginButtonText}>Sign-In with Ethereum</Text>
					<View style={styles.iconContainer}>
						<FontAwesome5 name='ethereum' size={32} color='white' />
					</View>
				</TouchableOpacity>
			</View>
			<StatusBar style='auto' />
		</View>
	);
}
//May need to move to global styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	logo: {
		width: 350,
		height: 350,
		marginBottom: 100,
	},
	loginContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		elevation: 2,
		shadowColor: 'rgba(0,0,0, .4)',
		shadowOffset: { height: 2, width: 2 },
		shadowOpacity: 1,
		shadowRadius: 5,
	},
	loginButton: {
		marginTop: 20,
		backgroundColor: '#973EF5',
		flex: 1,
		borderRadius: 50,
		padding: 20,
		marginHorizontal: 25,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
	},
	loginButtonText: {
		color: 'white',
		fontWeight: 'bold',
		letterSpacing: 1,
		fontSize: 25,
	},
	iconContainer: {
		marginLeft: 10,
	},
});
