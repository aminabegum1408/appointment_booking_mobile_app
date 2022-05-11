import React from "react";
import { ImageBackground, StyleSheet, Image, Dimensions } from "react-native";
import images from "../../images";

const Splash = () => {
  return (
    <ImageBackground source={images.background} style={styles.container}>
      <Image source={images.logo} style={styles.logo}></Image>
    </ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  logo: {
    height: 70,
    width: 250,
  },
});
