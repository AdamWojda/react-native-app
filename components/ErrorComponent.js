import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ErrorComponent = ({ route }) => {
  const styles = StyleSheet.create({
    errorMessage: {
      flex: 1,
      textAlign: 'center',
      padding: 20,
      fontSize: 20,
    }
  });
  return (
    <Text style={styles.errorMessage}>{route.params.message}</Text>
  );
};

export default ErrorComponent;
