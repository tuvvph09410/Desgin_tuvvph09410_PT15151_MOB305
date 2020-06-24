import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput,StatusBar } from 'react-native';

export default function Login({ navigation }) {

  const [email,setEmail] =useState();
  const [password,setPassword] =useState();
  const buttonLoGin = () => {
    if ((email == 'admin') & (password == 'admin')){
     navigation.navigate('Home')
     }
     else {
       alert('Nhập sai tài khoản hoặc mật khẩu')
     }
  }
  return (
    <View style={styles.container}>
           <View style={styles.content}>
        <View style={styles.logo}>
          <View style={{ flexDirection: 'column', marginRight: 100 }}>
            <TouchableOpacity>
              <Image style={{ width: 15, height: 15, bottom: 15 }}
                source={require('./images/x_logo.png')}
              ></Image>
            </TouchableOpacity>
            <Text style={styles.textlogo}>Create your</Text>
            <Text style={styles.textlogo}>account</Text>
          </View>
          <Image style={styles.imagelogo}
            source={require('./images/group_logo.png')} />

        </View>
        <View style={styles.contentDesgin}>
          <View style={{ width: '90%', flexDirection: 'column', justifyContent: 'center' }}>
            <Text style={styles.text}>Email</Text>

            <TextInput style={styles.textinput}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="blogger41915@gmail.com"
              placeholderTextColor="#1c313a"
              underlineColorAndroid="transparent"
              value={email}
              onChangeText={email => setEmail(email)}
              ></TextInput>
            <Text style={styles.text}>Password</Text>

            <TextInput style={styles.textinput}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="*********"
              secureTextEntry={true}
              placeholderTextColor="#1c313a"
              underlineColorAndroid="transparent"
              value={password}
              autoCapitalize='none'
              onChangeText={password => setPassword(password)}
              ></TextInput>
            <TouchableOpacity>
              <Text style={styles.forfetpass}>Forget Password?</Text>
            </TouchableOpacity>

          </View>
          <TouchableOpacity style={styles.buttonLogin}
            onPress={buttonLoGin}
          >
            <Text style={{ color: '#ffffff', fontSize: 16, textAlign: 'center' }}>Login</Text>
          </TouchableOpacity>
          <Text style={{ color: '#484848', fontSize: 16 }}>Or</Text>
          <View style={{ justifyContent: 'center', margin: 20, flexDirection: 'row', marginTop: '3%', }}>
            <TouchableOpacity>
              <Image style={{ width: 70, height: 50 }}
                source={require('./images/logoG.png')}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={{ width: 70, height: 50 }}
                source={require('./images/logoface.png')}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={{ width: 70, height: 50 }}
                source={require('./images/logotw.png')}
              ></Image>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', }}>
            <Text style={{ marginRight: 30, fontSize: 16, color: '#484848' }}>Don't have an account?</Text>
            <TouchableOpacity>
              <Text style={{ fontSize: 16, color: '#791AE5' }}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#791AE5',
  },
  // header: {
  //   height: 40,
  //   width: '100%',
  //   top: 0,
  //   left: 0,
  //   right: 0,
  //   backgroundColor: '#222455',
  //   justifyContent: 'flex-start'
  // },
  content: {
    flex: 1,
    backgroundColor: '#791AE5',
  },
  logo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  contentDesgin: {

    flex: 3,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textlogo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ffffff'
  },
  imagelogo: {
    width: 150,
    height: 150,
    marginRight: -20
  },
  text: {
    fontSize: 16,
    color: '#99A1B3',
    left: '10%',
    top: "-1%"
  },
  textinput: {
    width:350,
    height: 50,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    paddingHorizontal: 30,
    fontSize: 16,
    elevation: 2,

    shadowColor: '#ffffff',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 5,
    shadowOpacity: 0.75,
    marginBottom: '5%'
  },
  forfetpass: {
    width: '100%',
    fontSize: 16,
    textAlign: 'right',
    right: '8%',
    color: '#484848'
  },
  buttonLogin: {
    marginTop: 15,
    backgroundColor: '#791AE5',
    height: 50,
    width: 120,
    borderRadius: 25,
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: 15,
  },
});
