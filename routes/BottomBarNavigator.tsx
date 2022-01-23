import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import Home from '../screens/Home';
import Explore from '../screens/Explore';
import Chats from '../screens/Chats';

//Todo

const BottomTab = createBottomTabNavigator();

export default function RootNavigator() {
	return (
		<NavigationContainer>
			<BottomTab.Navigator
				initialRouteName='Home'
				screenOptions={({ route }) => ({
					tabBarStyle: {
						backgroundColor: '#F98F07',
						justifyContent: 'center',
						alignContent: 'space-between',
						paddingTop: 5,
					},
					tabBarHideOnKeyboard: true,
					tabBarIcon: ({ focused }) => {
						switch (route.name) {
							case 'Home':
								return (
									<Ionicons
										name={focused ? 'home-sharp' : 'home-outline'}
										size={30}
										color={'white'}
									/>
								);
							case 'Explore':
								return (
									<Ionicons
										name={focused ? 'compass-sharp' : 'compass-outline'}
										size={30}
										color={'white'}
									/>
								);
							case 'Conversations':
								return (
									<Ionicons
										name={focused ? 'chatbubbles-sharp' : 'chatbubbles-outline'}
										size={30}
										color={'white'}
									/>
								);
							default:
								return null;
						}
					},
					tabBarShowLabel: false,
					headerTitleStyle: { color: 'white' },
					headerStyle: { backgroundColor: '#F98F07' },
				})}
			>
				<BottomTab.Screen name='Explore' component={Explore} />
				<BottomTab.Screen
					name='Home'
					component={Home}
					options={{
						headerTitle: 'Herd',
					}}
				/>
				<BottomTab.Screen name='Conversations' component={Chats} />
			</BottomTab.Navigator>
		</NavigationContainer>
	);
}
