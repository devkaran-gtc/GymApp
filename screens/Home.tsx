import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Discover from '../Tabs/Discover';
import Timer from '../Tabs/Timer';
import Stats from '../Tabs/Stats';
import Profile from '../Tabs/Profile';
import { View, Text, Image, Pressable, StatusBar } from 'react-native';
import Login from './Login';

const CustomTabBar = ({ state, navigation }: any) => {
  const [selectedTab, setSelectedTab] = useState('Discover'); // Default to the 'Work' tab


  const handleTabPress = (name: string) => {

    if (name === 'Work') {
      StatusBar.setBackgroundColor('transparent');
    } else if (name === 'Discover') {
      StatusBar.setBackgroundColor('black');
    } else if (name === 'Stats') {
      StatusBar.setBackgroundColor('black');
    } else {
      StatusBar.setBackgroundColor('#006BFF');
    }

    navigation.navigate(name);
    setSelectedTab(name);


  };

  return (
    <View style={{ position: 'absolute', flexDirection: 'row', backgroundColor: 'black', justifyContent: 'space-evenly', bottom: 10, left: 10, right: 10, height: 70, alignItems: 'center', overflow: 'hidden', marginHorizontal: 10, borderRadius: 40 }}>
      {state.routes.map(({ name, key }: any) => {
        let iconSource;

        if (name === 'Work') {
          iconSource = require('../assets/images/timer.png');
        } else if (name === 'Discover') {
          iconSource = require('../assets/images/discover.png');
        } else if (name === 'Stats') {
          iconSource = require('../assets/images/stats.png');
        } else {
          iconSource = require('../assets/images/profile.png');
        }

        const isTabSelected = selectedTab === name;

        return (
          <Pressable
            key={key}
            onPress={() => {
              handleTabPress(name)
            }}
            style={{ flexDirection: 'row', backgroundColor: isTabSelected ? '#006BFF' : 'black', padding: 12, borderRadius: 30 }}>
            <Image style={{ height: 18, width: 18 }} source={iconSource} resizeMode='contain' />
            {isTabSelected && <Text style={{ color: 'white', marginStart: 8, fontFamily: 'Lato-Bold' }}>{name}</Text>}
          </Pressable>
        );
      })}
    </View >
  );
};

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName='Discover'
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen
        name="Work"
        component={Timer}
      />
      <Tab.Screen
        name="Discover"
        component={Discover}
      />
      <Tab.Screen
        name="Stats"
        component={Stats}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
      />

    </Tab.Navigator>
  );
}

export default Home;
