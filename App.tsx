import React from 'react';
import AppLoading from 'expo-app-loading';
import { useState } from 'react';
import * as Font from 'expo-font';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Main from './screens/Main';
import Second from './screens/Second';

const fetchFonts = () => {
	return Font.loadAsync({
		'bank-gothic-light': require('./assets/fonts/bank-gothic-light-bt.ttf'),
	});
};

export default function App() {
	const [initFonts, setInitFonts] = useState<boolean>(false);

	const Stack = createNativeStackNavigator();

	if (!initFonts) {
		return (
			<AppLoading
				startAsync={fetchFonts}
				onFinish={() => setInitFonts(true)}
				onError={console.log}
			/>
		);
	}

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name='Home Page' component={Main} />
				<Stack.Screen name='Second Page' component={Second} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
