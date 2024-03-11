import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppProvider } from './context/context';
import LoginScreen from './screens/LoginScreen';
import MenuScreen from './screens/MenuScreen';
import ListScreen from './screens/ListScreen';
import ClickScreen from './screens/ClickScreen';
import SignUpScreen from './screens/SignUpScreen';
import DepositScreen from './screens/DepositScreen';
import QrCodeScreen from './screens/QrCodeScreen';
import InviteScreen from './screens/InviteScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={ClickScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="Deposit" component={DepositScreen} />
          <Stack.Screen name="Payment" component={QrCodeScreen} />
          <Stack.Screen name="Convide" component={InviteScreen} />
          <Stack.Screen name="Menu" component={MenuScreen} />
          <Stack.Screen name="List" component={ListScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
