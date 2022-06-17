import React, { useContext } from 'react';
import AppContext from './AppContext';
import {
  Text,
  StyleSheet,
  View,
  Image,
  Pressable
} from 'react-native';

const UserTile = ({ user, navigation }) => {
  const globalContext = useContext(AppContext);
  const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22,
     alignItems: 'center',
     flexDirection: 'row',
     backgroundColor: globalContext.orangeMode ? 'orange' : 'white'
    },
    item: {
      height: 44,
      padding: 10,
      fontSize: 18
    },
    image: {
      margin:8,
      width:64,
      height:64,
      borderWidth:1,
      borderColor:'#181818',
      resizeMode:'contain'
    }
  });
  return (
    <>
      <Pressable onPress={() =>
         navigation.navigate('SingleUser', { details: user })
       }>
        <View style={styles.container}>
          <Image source={{uri : user.picture.thumbnail}} style={styles.image}></Image>
          <View>
            <Text style={styles.listItemText}>{user.name.first} {user.name.last}</Text>
            <Text style={styles.listItemText}>{user.location.city}</Text>
            <Text style={styles.listItemText}>{user.email}</Text>
          </View>
        </View>
      </Pressable>
    </>
  );
};

export default UserTile;