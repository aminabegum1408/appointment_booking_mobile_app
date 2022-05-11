import axios from 'axios';
import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
  ImageBackground,
  ToastAndroid,
} from 'react-native';
import {useDispatch} from 'react-redux';
import images from '../../images';
import {SET_JWT_TOKEN} from '../../redux/Login/actions';

interface LoginProps {
  navigation: any;
}

const Login = (props: LoginProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visibleToast, setvisibleToast] = useState(false);
  const {navigate} = props.navigation;
  const dispatch = useDispatch();

  const onLoginClick = () => {
    let credentialDetail = {
      email: email,
      password: password,
    };
    axios
      .post('http://192.168.100.99:3000/api/auth/login', credentialDetail)
      .then((response: any) => {
        if (response && response.status == 200) {
          dispatch({type: SET_JWT_TOKEN, jwtToken: response.data.data.token});
          setvisibleToast(true);        
          navigate('Sellers');
          
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <ImageBackground source={images.background} style={styles.parentContainer}>
      <View style={styles.mainContainer}>
        <Image style={styles.image} source={images.logo} />

        <StatusBar animated={true} backgroundColor="#ED655E" />
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email."
            placeholderTextColor="#003f5c"
            onChangeText={email => setEmail(email)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password."
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={password => setPassword(password)}
          />
        </View>

        <TouchableOpacity style={styles.loginBtn} onPress={onLoginClick}>
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigate("Registration")}>
          <Text style={styles.create_button}>Create new user?</Text>
        </TouchableOpacity>
        <Toast visible={visibleToast} message="Login Successfull" />
      </View>
    </ImageBackground>
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

const styles = StyleSheet.create({
  parentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  image: {
    marginBottom: 40,
    height: 60,
    width: 225,
  },
  inputView: {
    backgroundColor: '#ffff',
    borderRadius: 30,
    width: '80%',
    height: 45,
    marginBottom: 20,
    alignItems: 'center',
  },

  TextInput: {
    height: 50,
    // flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  create_button: {
    height: 30,
    marginTop: 20,
    color: '#ffff',
    textDecorationLine:"underline",
    textDecorationStyle:"solid"
  },

  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#ED655E',
  },
});
export default Login;
