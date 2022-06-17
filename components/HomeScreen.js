import React, { useContext } from 'react';
import { Button } from 'react-native';
import AppContext from './AppContext';

const HomeScreen = ({ navigation }) => {
  const globalContext = useContext(AppContext);
  return (
  <>
    <Button
      title='Users List'
      onPress={() =>
        navigation.navigate('UserList')
      }
    />
    <Button
      title='Randomize User'
      onPress={() =>
        navigation.navigate('SingleUser', { details: globalContext.getSingleUser(Math.floor(Math.random() * 200)) })
      }
    />
  </>
  );
};

export default HomeScreen;