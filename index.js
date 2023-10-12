/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import DragList from './components/DragList';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Exercise from './screens/Exercise';


AppRegistry.registerComponent(appName, () => App);

