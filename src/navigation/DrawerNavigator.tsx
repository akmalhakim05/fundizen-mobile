import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Screens
import HomeScreen from '../screens/campaign/HomeScreen';
import ProfileScreen from '../screens/profile/Profile';
import MyCampaignScreen from '../screens/campaign/MyCampaignScreen';
import CreateCampaignScreen from '../screens/campaign/CreateCampaign';
import Details from '../screens/campaign/CampaignDetailsScreen'; 

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