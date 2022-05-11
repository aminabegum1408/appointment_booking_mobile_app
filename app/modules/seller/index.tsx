import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import ReactNativeCalendarStrip from 'react-native-calendar-strip';
import {useDispatch, useSelector} from 'react-redux';
import SearchBar from '../searchBar';
import SellerDetail from './components/seller';
import {RootState} from '../../store/rootReducer';
import {isEmpty} from 'lodash';

interface SellerInterface {
  navigation: any;
}

const SellerList = (props: SellerInterface) => {
  const dispatch = useDispatch();
  const sellerDetailList = useSelector(
    (state: RootState) => state.sellerReducre.sellerDetails,
  );
  const [searchPhrase, setSearchPhrase] = useState('');
  const [onSearchClicked, setClicked] = useState(false);
  const [sellerDetails, setSellerDetails] = useState(sellerDetailList) as any;
  const [selectedSeller, setSelectedSeller] = useState('') as any;
  const jwtToken = useSelector((state: RootState) => state.login.jwtToken);

  useEffect(() => {
    dispatch({
      type: 'GET_SELLER_DETAIL_LIST_REQ',
      payload: {name: searchPhrase, token: jwtToken},
    });
  }, []);

  if (!isEmpty(sellerDetailList)) {
    if (sellerDetailList !== sellerDetails) {
      setSellerDetails(sellerDetailList);
    }
  }
  const onSearch = (search: string) => {
    dispatch({
      type: 'GET_SELLER_DETAIL_LIST_REQ',
      payload: {name: search, token: jwtToken},
    });
    setSearchPhrase(search);
  };
  const renderCard = ({item, index}: any) => (
    <SellerDetail
      {...props}
      item={item}
      index={index}
      checkSellerSelected={setSelectedSeller}
      selectedSeller={selectedSeller}
    />
  );
  return (
    <View style={styles.container}>
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={onSearch}
        clicked={onSearchClicked}
        setClicked={setClicked}
      />
      <FlatList
        style={{
          width: '100%',
          height: '100%',
        }}
        data={sellerDetails}
        renderItem={renderCard}
        keyExtractor={(item, index) => index.toString()}
        scrollEnabled={true}
      />
    </View>
  );
};
export default SellerList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
