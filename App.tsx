import React from 'react';
import AppLoading from 'expo-app-loading';
import { useState } from 'react';
import * as Font from 'expo-font';
import { useMoralis } from 'react-moralis';
import SignIn from './screens/SignIn';
import RootNavigator from './routes/BottomBarNavigator';

const fetchFonts = () => {
	return Font.loadAsync({
		pacifico: require('./assets/fonts/Pacifico-Regular.ttf'),
	});
};

export default function App() {
	const [initFonts, setInitFonts] = useState<boolean>(false);
	const { isAuthenticated } = useMoralis();

	if (!initFonts) {
		return (
			<AppLoading
				startAsync={fetchFonts}
				onFinish={() => setInitFonts(true)}
				onError={console.log}
			/>
		);
	}

	return isAuthenticated ? <RootNavigator /> : <SignIn />;
}
