import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Screens
import HomeScreen from 'src/screens/campaign/HomeScreen';
import ProfileScreen from '../app/screens/Profile';
import MyCampaignScreen from '../app/screens/MyCampaign';
import CreateCampaignScreen from '../app/screens/CreateCampaign';
import Details from '../app/screens/Details'; 

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="My Campaigns" component={MyCampaignScreen} />
      <Drawer.Screen name="Create Campaign" component={CreateCampaignScreen} />
      <Drawer.Screen name="Details" component={Details} /> 
    </Drawer.Navigator>
  );
}