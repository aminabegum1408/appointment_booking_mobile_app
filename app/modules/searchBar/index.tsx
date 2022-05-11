import React from 'react';
import {StyleSheet, TextInput, View, Keyboard, Button, Pressable} from 'react-native';
import { Text } from 'react-native-elements';
import Icons from "react-native-vector-icons/AntDesign";

const SearchBar = ({
  clicked,
  searchPhrase,
  setSearchPhrase,
  setClicked,
}: any) => {
  
  return (
    <View style={styles.container}>
      <View
        style={
          clicked ? styles.searchBar__clicked : styles.searchBar__unclicked
        }>
        {/* search Icon */}
        <Icons
          name="search1"
          size={20}
          color="black"
          style={{marginLeft: 1,paddingLeft:10,paddingRight:20 ,fontSize:15}}
        />
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setClicked(true);
          }}
        />
        {/* cross Icon, depending on whether the search bar is clicked or not */}
        {clicked && (
          <Icons
            name="close"
            size={20}
            color="black"
            style={{paddingLeft: 12,paddingRight:5 ,fontSize:15}}
            onPress={() => {
              setSearchPhrase('');
            }}
          />
        )}
      </View>
      {/* cancel button, depending on whether the search bar is clicked or not */}
      {clicked && (
        <View>
          <Pressable
            // style=
            onPress={() => {
              Keyboard.dismiss();
              setClicked(false);
            }}><Text style={{color:"blue",marginLeft:12}}>Cancel</Text></Pressable>
        </View>
      )}
    </View>
  );
};
export default SearchBar;

// styles
const styles = StyleSheet.create({
  container: {
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  searchBar__unclicked: {
    padding: 5,
    flexDirection: 'row',
    width: '95%',
    backgroundColor: '#d9dbda',
    borderRadius: 15,
    alignItems: 'center',
  },
  searchBar__clicked: {
    paddingLeft: 20,
    paddingRight:20,
    flexDirection: 'row',
    width: '80%',
    backgroundColor: '#d9dbda',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  input: {
    fontSize: 15,
    // marginLeft: 10,
    width: '95%',
    height: 35,
    paddingBottom:0,
    paddingTop:0
    },
});
