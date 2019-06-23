/**
 * @format
 */

import {AppRegistry} from 'react-native';
import BackgroundFetch from 'react-native-background-fetch';

import App from './App';
import {name as appName} from './app.json';

const MyHeadlessTask = async () => {
  console.log('[BackgroundFetch HeadlessTask] start');
  BackgroundFetch.finish();
};

AppRegistry.registerComponent(appName, () => App);

// Register your BackgroundFetch HeadlessTask
BackgroundFetch.registerHeadlessTask(MyHeadlessTask);
