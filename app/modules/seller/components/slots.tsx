import {isEmpty} from 'lodash';
import React, {useEffect, useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import ReactNativeCalendarStrip from 'react-native-calendar-strip';
import {Text} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../store/rootReducer';

interface SlotsInterface {
  navigation: {navigate: any};
  userId: string;
  route: any;
}
interface SlotType {
  startAt: string;
  date: string;
  available: boolean;
  endAt: string;
  slotId: string;
  sessionDuration:string
}

const Slots = (props: SlotsInterface) => {
  const {sellerId} = props.route.params;
  const {navigate} = props.navigation;

  const dispatch = useDispatch();

  const slotDetailList = useSelector(
    (state: RootState) => state.sellerReducre.slotList,
  );
  const jwtToken = useSelector((state: RootState) => state.login.jwtToken);

  const [selectedSlotTime, setSelectedSlotTime] = useState('');
  const [bookingFlag, setBookingFlag] = useState(false);
  const [slotList, setSlotList] = useState(slotDetailList) as any; //Array<SlotType>;
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState('');
  const [sessionDuration, setSessionDuration] = useState('');
  const [endAt, setEndAt] = useState('');

  // if (!isEmpty(slotDetailList)) {
  if (slotDetailList !== slotList) {
    setSlotList(slotDetailList) as Array<SlotType>;
  }
  // }

  useEffect(() => {
    dispatch({
      type: 'GET_SLOT_LIST_REQ',
      payload: {selectedDate: selectedDate, userId: sellerId, token: jwtToken},
    });
  }, []);

  const generateSlotOfSelectedDate = (selectedDate: any) => {
    setSelectedDate(new Date(selectedDate));

    dispatch({
      type: 'GET_SLOT_LIST_REQ',
      payload: {
        selectedDate: new Date(selectedDate),
        userId: sellerId,
        token: jwtToken,
      },
    });
  };

  const createBooking = () => {
    navigate('Book Appointment', {
      selectedSlot: selectedSlotTime,
      selectedDate: selectedDate,
      slotId: selectedSlot,
      userId: sellerId,
      endAt:endAt,
      sessionDuration:sessionDuration
    });
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ReactNativeCalendarStrip
        scrollable
        selectedDate={new Date()}
        style={{height: 100, paddingBottom: 10}}
        calendarColor={'#12173E'}
        calendarHeaderStyle={{color: '#FFFF', padding: 5}}
        dateNumberStyle={styles.dateNumberStyle}
        dateNameStyle={styles.dateNameStyle}
        highlightDateNumberStyle={styles.highlightDateNumberStyle}
        highlightDateNameStyle={styles.highlightDateNameStyle}
        onDateSelected={generateSlotOfSelectedDate}
      />
      <Text style={styles.text}>Free slots </Text>

      <ScrollView>
        <View style={styles.row}>
          {slotList.map((value: SlotType) => (
            <TouchableOpacity
              key={value.startAt}
              onPress={() => {
                setSelectedSlotTime(value.startAt);
                setBookingFlag(true);
                setSelectedSlot(value.slotId);
                setSessionDuration(value.sessionDuration);
                setEndAt(value.endAt)
              }}
              style={[
                styles.button,
                selectedSlotTime == value.startAt && styles.selected,
              ]}
              // disabled={!value.available}
              >
              <Text
                style={[
                  styles.buttonLabel,
                  selectedSlotTime === value.startAt && styles.selectedLabel,
                ]}>
                {value.startAt.toUpperCase()}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <TouchableOpacity
        activeOpacity={0.7}
        key="appointment"
        disabled={!bookingFlag}
        style={styles.touchableOpacityStyle}>
        <Pressable disabled={!bookingFlag} onPress={createBooking}>
          <Text
            style={
              bookingFlag
                ? styles.floatingButtonStyle
                : styles.disablefloatingButtonStyle
            }>
            Book Appointment
          </Text>
        </Pressable>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Slots;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  dateNumberStyle: {color: 'gray', fontSize: 25, fontWeight: '100'},
  dateNameStyle: {color: 'gray', fontSize: 12},
  highlightDateNumberStyle: {color: 'white', fontSize: 25},
  highlightDateNameStyle: {color: 'white'},

  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    padding: 20,
    margin: 15,
    borderRadius: 4,
    backgroundColor: '#F9F6F2',
    marginHorizontal: '2%',
    marginBottom: 6,
    minWidth: '45%',
    textAlign: 'center',
  },
  selected: {
    backgroundColor: '#ED655E',
    borderWidth: 0,
    color: '#ffff',
  },
  buttonLabel: {
    fontSize: 20,
    fontWeight: '500',
    color: 'coral',
    textAlign: 'center',
  },
  selectedLabel: {
    color: 'white',
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
  text: {fontSize: 25, marginHorizontal: '5%', marginVertical: '5%'},
  touchableOpacityStyle: {
    position: 'absolute',
    width: '65%',
    height: 100,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    right: 10,
    bottom: 15,
  },
  disablefloatingButtonStyle: {
    width: '100%',
    height: 50,
    color: 'white',
    fontSize: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#323440',
  },
  floatingButtonStyle: {
    width: '100%',
    height: 50,
    color: 'white',
    fontSize: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#12173E',
  },
});
