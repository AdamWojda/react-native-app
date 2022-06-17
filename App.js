import React, { useState, useEffect } from 'react';
import type {Node} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppContext from './components/AppContext';
import HomeScreen from './components/HomeScreen';
import UserList from './components/UserList';
import SingleUser from './components/SingleUser';

const App: () => Node = () => {
  const [globalUsers, setGlobalUsers] = useState(false);
  const [isOrangeMode, setIsOrangeMode] = useState(false);

  const addIndexToData = (data) => data.map((x, i) => { x.id = i + 1; return x; });

  const updateGlobalUsers = (data) => {
    addIndexToData(data);
    setGlobalUsers(data);
  };

  const getSingleUser = (id) => {
    return globalUsers.find(o => o.id === id)
  };

  const globalContext = {
    users: globalUsers,
    orangeMode: isOrangeMode,
    setIsOrangeMode,
    setGlobalUsers,
    getSingleUser,
    updateGlobalUsers
  };

  const Stack = createNativeStackNavigator();

  const fetchData = async () => {
    const resp = await fetch('https://randomuser.me/api/?results=200&exc=id&nat=gb');
    const data = await resp.json();
    if (data.results) {
      updateGlobalUsers(data.results);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <NavigationContainer>
      <AppContext.Provider value={globalContext}>
          <Stack.Navigator>
            <Stack.Screen
              name='Home'
              component={HomeScreen}
              options={{ title: 'Visionmate Recuitment App' }}
            />
            <Stack.Screen name='UserList' component={UserList} />
            <Stack.Screen name='SingleUser' component={SingleUser} />
          </Stack.Navigator>
      </AppContext.Provider>
    </NavigationContainer>
  );
};

export default App;
