import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import Booking from '../modules/booking';
import Home from '../modules/home';
// import Home from '../modules/home/index';
import Login from '../modules/login';
import Registration from '../modules/registration';
import SellerList from '../modules/seller';
import Slots from '../modules/seller/components/slots';
import Splash from '../modules/splash';

const Stack = createNativeStackNavigator();

const Routes = () => {
  const [splash, setSplashFlag] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setSplashFlag(false);
    }, 3000);
  }, []);
  return (
    <NavigationContainer>
      {splash && <Splash />}
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="dashboard"
          component={Home}
          options={{headerShown: false}}
          // options={{
          //   headerRight: () => (
          //     // <SearchOutlined />
          //   ),
          // }}
        />
        <Stack.Screen
          name="Sellers"
          component={SellerList}
          options={{headerShown: true}}
          // options={{
          //   headerRight: () => (
          //     // <SearchOutlined />
          //   ),
          // }}
        />
        <Stack.Screen
          name="Availiable Slots"
          component={Slots}
          options={{headerShown: true}}
          // options={{
          //   headerRight: () => (
          //     // <SearchOutlined />
          //   ),
          // }}
        />
        <Stack.Screen
          name="Book Appointment"
          component={Booking}
          options={{headerShown: false}}
          // options={{
          //   headerRight: () => (
          //     // <SearchOutlined />
          //   ),
          // }}
        />
        <Stack.Screen
          name="Registration"
          component={Registration}
          options={{headerShown: false}}
          // options={{
          //   headerRight: () => (
          //     // <SearchOutlined />
          //   ),
          // }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

const styles = StyleSheet.create({
  // icon: {
  //   color: "#ED655E",
  //   backgroundColor: "#FFE6E4",
  //   borderRadius: 10,
  //   margin: 0,
  // },
});
