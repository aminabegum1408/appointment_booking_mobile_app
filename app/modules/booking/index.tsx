import React, {useState} from 'react';
import {Pressable, StyleSheet, TextInput, ToastAndroid, View} from 'react-native';
import {Text} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {useForm, Controller, SubmitErrorHandler} from 'react-hook-form';
import {ErrorMessage} from '@hookform/error-message';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/rootReducer';
import {REGEX_CONSTANT} from '../../constants/REGEX';

type FormValues = {
  fullName: string;
  email: string;
  slot: string;
  mobileNo: string;
  address: string;
  street: string;
  zone: string;
  zipcode: string;
  city: string;
};
interface bookAppointmentType {
  route: any;
  navigation: any;
}
const Booking = (props: bookAppointmentType) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: {errors},
  } = useForm();
  const dispatch = useDispatch();
  const [visibleToast, setvisibleToast] = useState(false);
  const {navigate} = props.navigation;

  const {selectedSlot, selectedDate, slotId, userId, sessionDuration, endAt} =
    props.route.params;
  const jwtToken = useSelector((state: RootState) => state.login.jwtToken);

  const onSubmit = (data: any) => {
    data.userId = userId;
    data.slotId = slotId;
    data.endAt = endAt;
    data.sessionDuration = sessionDuration;
    data.token = jwtToken;
    data.status = 'PENDING';
    data.bookingDate = selectedDate;
    dispatch({
      type: 'BOOK_APPOINTMENT_REQ',
      payload: data,
    });
    setvisibleToast(true);
    navigate('Sellers');
  };

  const onError = (errors: any, e: any) => {
    return (
      <ErrorMessage
        errors={errors}
        name={e}
        render={({message}) => (
          <Text
            style={{
              color: 'red',
              fontWeight: 'bold',
              marginBottom: 15,
              marginHorizontal: '5%',
            }}>
            {message + e}
          </Text>
        )}
      />
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.label}> Selected Slot</Text>
        <Controller
          defaultValue={selectedSlot.toUpperCase()}
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
          name="startAt"
          rules={{required: {value: true, message: 'Required'}}}
        />
        {onError(errors, 'startAt')}
        {/* <Text style={styles.label}>Selected Date</Text>
        <Controller
          defaultValue={selectedDate}
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.input}
              placeholder="Enter name"
              autoCapitalize="none"
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
          name="bookingDate"
          rules={{required: {value: true, message: 'Required'}}}
        />
        {onError(errors, 'bookingDate')} */}

        <Text style={styles.text}>Enter booking details</Text>
        <Text style={styles.label}>Full name*</Text>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.input}
              placeholder="Enter name"
              autoCapitalize="none"
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
          name="name"
          rules={{
            required: {value: true, message: 'Required'},
            pattern: {
              value: new RegExp(REGEX_CONSTANT.ONLY_ALPHABETWITHSPACE),
              message: 'Invalid ',
            },
          }}
        />
        {onError(errors, 'name')}
        <Text style={styles.label}>Mobile Number*</Text>

        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.input}
              placeholder="Enter mobile number"
              autoCapitalize="none"
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
          name="mobileNo"
          rules={{
            required: {value: true, message: 'Required'},
            pattern: {
              value: new RegExp(REGEX_CONSTANT.ONLY_NUMBER),
              message: 'Invalid ',
            },
          }}
        />
        {onError(errors, 'mobileNo')}

        <Text style={styles.label}>Email*</Text>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.input}
              placeholder="Enter email"
              autoCapitalize="none"
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
          name="email"
          rules={{
            required: {value: true, message: 'Required'},
            pattern: {
              value: new RegExp(REGEX_CONSTANT.EMAIL),
              message: 'Invalid ',
            },
          }}
        />
        {onError(errors, 'email')}

        <Text style={styles.label}>Address</Text>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.input}
              placeholder="Enter full address"
              autoCapitalize="none"
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
          name="address"
          rules={{required: {value: true, message: 'Required'}}}
        />
        {onError(errors, 'address')}

        <Text style={styles.label}>Description</Text>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.input}
              placeholder="xyz"
              autoCapitalize="none"
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
          name="description"
          rules={{required: {value: true, message: 'Required'}}}
        />
        <Pressable onPress={handleSubmit(onSubmit)}>
          <Text style={styles.bookingButton}>Confirm Booking</Text>
        </Pressable>
      </ScrollView>
      <Toast visible={visibleToast} message="Booking Successfull" />

    </View>
  );
};
const Toast = ({visible, message}: any) => {
  if (visible) {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
    return null;
  }
  return null;
};

export default Booking;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  input: {
    width: 350,
    height: 52,
    backgroundColor: '#F9F6F2',
    margin: 10,
    padding: 5,
    color: 'black',
    borderRadius: 14,
    fontSize: 16,
    fontWeight: '500',
    maxWidth: '90%',
    alignItems: 'center',
  },
  text: {fontSize: 20, marginHorizontal: '5%', marginVertical: '5%'},
  label: {
    marginHorizontal: '5%',
    textAlign: 'left',
    fontSize: 15,
  },
  bookingButton: {
    resizeMode: 'contain',
    width: '100%',
    height: 50,
    color: 'white',
    fontSize: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#ED655E',
    textAlign: 'center',
  },
});
