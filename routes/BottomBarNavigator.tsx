import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { sharedStyles, headerStyles } from '../shared/styles';
import Explore from '../screens/Explore';
import Chats from '../screens/Chats';
import HomeStack from './HomeStack';
import Header from '../shared/Header/Header';

//Todo

const BottomTab = createBottomTabNavigator();

export default function RootNavigator() {
	return (
		<NavigationContainer>
			<BottomTab.Navigator
				initialRouteName='Home'
				screenOptions={({ route }) => ({
					tabBarStyle: {
						justifyContent: 'center',
						alignContent: 'space-between',
						paddingTop: 5,
					},
					tabBarHideOnKeyboard: true,
					tabBarIcon: ({ focused }) => {
						switch (route.name) {
							case 'HomeStack':
								return (
									<Ionicons
										name={focused ? 'home-sharp' : 'home-outline'}
										size={30}
										color={focused ? '#F98F07' : 'rgba(0,0,0, .4)'}
									/>
								);
							case 'Explore':
								return (
									<Ionicons
										name={focused ? 'compass-sharp' : 'compass-outline'}
										size={30}
										color={focused ? '#F98F07' : 'rgba(0,0,0, .4)'}
									/>
								);
							case 'Conversations':
								return (
									<Ionicons
										name={focused ? 'chatbubbles-sharp' : 'chatbubbles-outline'}
										size={30}
										color={focused ? '#F98F07' : 'rgba(0,0,0, .4)'}
									/>
								);
							default:
								return null;
						}
					},
					tabBarShowLabel: false,
					headerShown: false,
				})}
			>
				<BottomTab.Screen
					name='Explore'
					component={Explore}
					options={{
						headerShown: true,
						headerTitle: () => (
							<Header
								headerTitle={'Explore'}
								styles={{ headerText: sharedStyles.mainHeaderText }}
							/>
						),
						...headerStyles,
					}}
				/>
				<BottomTab.Screen name='HomeStack' component={HomeStack} />
				<BottomTab.Screen
					name='Conversations'
					component={Chats}
					options={{
						headerShown: true,
						headerTitle: () => (
							<Header
								headerTitle={'Conversations'}
								styles={{ headerText: sharedStyles.mainHeaderText }}
							/>
						),
						...headerStyles,
					}}
				/>
			</BottomTab.Navigator>
		</NavigationContainer>
	);
}
