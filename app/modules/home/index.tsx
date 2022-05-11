import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

interface HomeInterface {
  navigation: any;
}

const Home = (props: HomeInterface) => {
  const {navigate} = props.navigation;
  const onSellerClick = () => {
    navigate('Sellers');
  };
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={onSellerClick}>
        <Text style={styles.text}>Sellers</Text>
      </Pressable>
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    position: 'absolute',
    backgroundColor: '#0C0F25',
  },
  text: {
    fontSize: 25,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 75,
    borderRadius: 10,
    margin: 10,
    backgroundColor: '#ED655E',
  },
});
