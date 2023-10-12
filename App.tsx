import { View, Text, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Landing from './screens/Landing';
import Login from './screens/Login';
import Home from './screens/Home';
import Exercise from './screens/Exercise';
import Progress from './screens/Progress';
import ProgressStart from './screens/ProgressStart';
import ProgressAnimation from './screens/ProgressAnimation';
import ExerciseTimer from './screens/ExerciseTimer';
import WeeklyGoal from './screens/WeeklyGoal';
import History from './screens/History';
import Report from './screens/Report';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from 'react-i18next';


export type RootStackParamList = {
  Landing: undefined
  Login: undefined
  Home: undefined
  Exercise: undefined
  Progress: undefined
  ProgressStart: undefined
  ProgressAnimation: undefined
  ExerciseTimer: undefined
  CustomBottomTabNavigator: undefined
  WeeklyGoal: undefined
  History: undefined
  Report: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {

  const [initialRoute, setInitialRoute] = useState<keyof RootStackParamList | null>(null);

  const { t } = useTranslation();

  useEffect(() => {
    retrieveData();
  }, []);

  const retrieveData = async () => {
    try {
      const login = await AsyncStorage.getItem('isLogin');

      if (login === 'true') {
        setInitialRoute('Home');
      } else {
        setInitialRoute('Landing');
      }

    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  };

  if (initialRoute === null) {
    // You can return a loading indicator or any other component here
    return null;
  }

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="black" />
      <Stack.Navigator initialRouteName={initialRoute}>
        <Stack.Screen
          name="Landing"
          component={Landing}
          options={{ title: 'Landing', headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Login', headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home', headerShown: false }}
        />
        <Stack.Screen
          name="Exercise"
          component={Exercise}
          options={{ title: 'Exercise', headerShown: false }}
        />
        <Stack.Screen
          name="Progress"
          component={Progress}
          options={{ title: 'Progress', headerShown: false }}
        />
        <Stack.Screen
          name="ProgressAnimation"
          component={ProgressAnimation}
          options={{ title: 'ProgressAnimation', headerShown: false }}
        />
        <Stack.Screen
          name="ProgressStart"
          component={ProgressStart}
          options={{ title: 'ProgressStart', headerShown: false }}
        />
        <Stack.Screen
          name="ExerciseTimer"
          component={ExerciseTimer}
          options={{ title: 'ExerciseTimer', headerShown: false }}
        />
        <Stack.Screen
          name="WeeklyGoal"
          component={WeeklyGoal}
          options={{ title: 'WeeklyGoal', headerShown: false }}
        />
        <Stack.Screen
          name="History"
          component={History}
          options={{ title: 'History', headerShown: false }}
        />
        <Stack.Screen
          name="Report"
          component={Report}
          options={{ title: 'Report', headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
