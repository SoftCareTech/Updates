
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import { LinksProvider } from './src/context/LinksProvider';

// REALM
//import { RealmProvider } from "./src/db/RealmApp";

import HomeScreen from './src/screens/HomeScreen'
import WelcomeScreen from './src/screens/WelcomeScreen'
import ShareLinksScreen from './src/screens/ShareLinksScreen'
import LocalAddLinkScreen from './src/screens/LocalAddLinkScreen';
import LocalAddLinkConfigScreen from './src/screens/LocalAddLinkConfigScreen';
import OnlineAddLinksScreen from './src/screens/OnlineAddLinksScreen';



import { Provider as LocalLinksProvider } from './src/context/LocalLinksContext'
import { Provider as OnlineLinksProvider } from './src/context/OnlineLinksContext'





const Stack = createNativeStackNavigator();


function UpdateStack() {
  //initialRouteName='ShareLinks'
  return (
    <Stack.Navigator initialRouteName='Home' >
      <Stack.Screen name="Welcome"
        component={WelcomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Home"
        component={HomeScreen} options={{ headerShown: false }} />

      <Stack.Screen name="ShareLinks"
        component={ShareLinksScreen} options={{ headerShown: false }} />

      <Stack.Screen name="LocalAddLink"
        component={LocalAddLinkScreen} options={{ headerShown: false }} />

      <Stack.Screen name="LocalAddLinkConfig"
        component={LocalAddLinkConfigScreen} options={{ headerShown: false }} />

      <Stack.Screen name="OnlineAddLinks"
        component={OnlineAddLinksScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}



const App = () => (

  <LocalLinksProvider>
    <OnlineLinksProvider>
      <NavigationContainer>
        <UpdateStack />
      </NavigationContainer>
    </OnlineLinksProvider>
  </LocalLinksProvider>



);

export default App 