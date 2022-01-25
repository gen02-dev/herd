import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import CreateHerd from '../screens/CreateHerd';
import Header from '../shared/Header/Header';
import { headerStyles, sharedStyles } from '../shared/styles';

const Stack = createNativeStackNavigator();

export default function HomeStack({ navigation }) {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='Home'
				component={Home}
				options={{
					headerTitle: () => (
						<Header
							headerTitle={'Herd'}
							styles={{ headerText: sharedStyles.mainHeaderText }}
						/>
					),
					...headerStyles,
				}}
			/>
			<Stack.Screen
				name='Create a Herd'
				component={CreateHerd}
				options={{
					headerTitle: () => (
						<Header
							headerTitle={'Create a Herd'}
							styles={{ headerText: sharedStyles.subHeaderText }}
						/>
					),
					...headerStyles,
				}}
			/>
		</Stack.Navigator>
	);
}
