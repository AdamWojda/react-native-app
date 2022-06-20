import React, { useContext } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image
} from 'react-native';
import ErrorComponent from "./ErrorComponent";

const SingleUser = ({ navigation, route }) => {
  const user = route.params.details;
  const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22,
     alignItems: 'center',
     flexDirection: 'column'
    },
    detailsContainer: {
     alignItems: 'center',
     flexDirection: 'column'
    },
    listItemText: {
      padding: 3,
      fontSize: 18
    },
    listItemName: {
      padding: 10,
      fontSize: 38,
      fontWeight: 'bold'
    },
    image: {
      width:264,
      height:264,
      borderWidth:1,
      borderColor:'#181818'
    }
  });

  if (!user) {
    navigation.replace('Error', { message: 'Sorry, this user does not exists.' });
    return null;
  }

  return (
    <>
      <View style={styles.container}>
        <Image source={{uri : user.picture.large}} style={styles.image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.listItemName}>{user.name.first} {user.name.last}</Text>
          <Text style={styles.listItemText}>Username: {user.login.username}</Text>
          <Text style={styles.listItemText}>{user.location.city}</Text>
          <Text style={styles.listItemText}>{user.location.street.name} {user.location.street.number}</Text>
          <Text style={styles.listItemText}>{user.location.postcode}</Text>
        </View>
      </View>
    </>
  );
};

export default SingleUser;
