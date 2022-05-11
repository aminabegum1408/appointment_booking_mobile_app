import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Avatar} from 'react-native-elements';

interface SellerInterface {
  item: any;
  index: number;
  navigation: any;
  checkSellerSelected: any;
  selectedSeller: any;
}

const SellerDetail = (props: SellerInterface) => {
  const {navigate} = props.navigation;
  const useState = React.useState;
  const [selectedSeller, setSelectedSeller] = useState('');
  const onSellerSelect = (id: string) => {
    setSelectedSeller(id);
    props.checkSellerSelected(id);
    navigate('Availiable Slots', {sellerId: id});
  };

  return (
    <View style={{alignContent:"center",justifyContent:"center" }}>
      <TouchableOpacity
        style={[
          props.selectedSeller !== props.item._id
            ? styles.card
            : styles.activeCard,
        ]}
        key={props.index}
        onPress={() => onSellerSelect(props.item._id)}>
        <Avatar
          size="medium"
          rounded
          title={
            props.item.firstName.substring(0, 1).toUpperCase() +
            props.item.lastName.substring(0, 1).toUpperCase()
          }
          titleStyle={{color: '#ED655E'}}
          containerStyle={{backgroundColor: '#ffff', margin: 10}}></Avatar>
        <View key={props.index + 'view'}>
          <Text
            style={[
              props.selectedSeller !== props.item._id
                ? styles.cardTitle
                : styles.activeCardTitle,
            ]}>
            {(
              props.item.firstName +
              ' ' +
              props.item.firstName
            ).toLocaleUpperCase()}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default SellerDetail;

const styles = StyleSheet.create({
  card: {
    padding: 10,
    backgroundColor: '#F9F6F2',
    borderRadius: 10,
    // margin: 5,
    flexDirection: 'row',
    color: 'black',
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal:"2%"
  },
  activeCard: {
    padding: 10,
    backgroundColor: '#ED655E',
    borderRadius: 10,
    margin: 5,
    flexDirection: 'row',
    color: '#FFFF',
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal:"2%"

  },
  cardTitle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'Poppins',
    lineHeight: 20,
    width: 200,
  },
  activeCardTitle: {
    color: '#ffff',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'Poppins',
    lineHeight: 20,
    width: 200,
  },
});
