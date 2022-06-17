import React, { useContext, useState } from 'react';
import AppContext from './AppContext';
import UserTile from './UserTile';
import { Button, FlatList, TextInput } from 'react-native';

const UserList = ({ navigation }) => {
  const globalContext = useContext(AppContext);
  const [searchText, setSearchText] = useState();

  // Filter out searched keyword.
  const searchFilteredData = searchText
    ? globalContext.users.filter((x) =>
        x.name.first.toLowerCase().includes(searchText.toLowerCase()) ||
        x.location.city.toLowerCase().includes(searchText.toLowerCase())
      )
    : globalContext.users;

  return (
  <>
    <TextInput
        placeholder='Search by first name or city...'
        onChangeText={(text) => {
          setSearchText(text);
        }}
        value={searchText}
    />
    <Button
      title='Go for Orange!'
      onPress={() =>
        globalContext.setIsOrangeMode(!globalContext.orangeMode)
      }
    />
    <FlatList
        data={searchFilteredData}
        renderItem={({item}) => <UserTile user={item} navigation={navigation} />}
      />
  </>
  );
};

export default UserList;