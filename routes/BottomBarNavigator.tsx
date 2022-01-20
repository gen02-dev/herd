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
					tabBarStyle: { backgroundColor: '#F98F07' },
					tabBarHideOnKeyboard: true,
					tabBarActiveTintColor: 'white',
					tabBarInactiveTintColor: '#973EF5',
					tabBarIcon: () => {
						switch (route.name) {
							case 'Home':
								return null;
							case 'Explore':
								return <FontAwesome5 name='compass' size={24} />;
							case 'Conversations':
								return <Ionicons name='md-chatbubble-sharp' size={24} />;
							default:
								return null;
						}
					},
				})}
			>
				<BottomTab.Screen name='Explore' component={Explore} />
				<BottomTab.Screen name='Home' component={Home} />
				<BottomTab.Screen name='Conversations' component={Chats} />
			</BottomTab.Navigator>
		</NavigationContainer>
	);
}
