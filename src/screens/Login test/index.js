import React, { Component } from 'react';
import { Text, TextInput, View, Alert, Button, AsyncStorage } from 'react-native';

import styles from './styles';
//import Walletview from '../Walletview';

//import SCREEN_NAMES from '../../navigation/screen-names';
//import { getAutoFocusEnabled } from 'expo/build/AR';

import { useNavigation } from '@react-navigation/native';
import { NavigationActions } from 'react-navigation';
import { StackActions } from 'react-navigation';

class Login extends React.PureComponent {
    constructor(props) {
        super(props);
        const { navigate } = props.navigation;
        this.navigate = navigate;

        this.state = {
            email: '',
            pass: '',
            res: 0,
        };
    }

    postLogin = async (email, pass) => {
        const options = {
            method: 'POST',
            body: JSON.stringify(
                {
                    User: email,
                    Password: pass,
                }
            )
        }
      
        //console.log("Enter FETCH")
        //console.log(email, pass)
        fetch("https://thvvnupw5a.execute-api.ap-southeast-2.amazonaws.com/prod/signin", options).then(res=>res.json()).then(json=>{
            //console.log(json)
            if (json == "true") {
                //console.log("TRUEEE")
                this.setState({res: 1});
                //console.log("BOUT TO GO LOGI")
            } else { //console.log("FALSEEE")
                this.setState({res: 0});
                Alert.alert("Invalid Details")
            }
            //console.log("Inside Func RES")
            //console.log(this.state.res)
            return
        })
      //  console.log("Leave FETCH")
      //  console.log(res)
      //  return res
    }

    onLogin = () => {
        //console.log("AAAAAAAAAAAAAAAAAAAAA" + this.start)
        const { email, pass } = this.state;
        this.postLogin(email, pass);
        //console.log(this.state.res)
        return  
    }
    
    /*asy = async () => {
        //console.log("Async and this.state.email is:")
        const value = await AsyncStorage.getItem('User')
       // console.log("TEST" + value)
        //console.log(this.state.email)
    }*/

    render(){
        if (this.state.res == 1) {
            this.setState({res: 0})
            AsyncStorage.setItem('User', this.state.email);
            //this.asy()
            console.log("entering wallet...")

            this.props.navigation.dispatch(
                StackActions.reset({
                index: 0,
                key: null,
                actions: [NavigationActions.navigate({ routeName: "wallet" })]
                })
            )
        }
        return(

            <View style = {styles.container}>
                <View style={styles.fontt}>
                    <Text style={styles.fontt}>Log In</Text>
                </View>
                
                <View style={styles.tput}>
                <TextInput
                    label='Email'
                    value={this.state.email}
                    onChangeText={email => this.setState({email})}
                    placeholder={'Email'}
                   
                />
                <TextInput
                    label='Password'
                    value={this.state.pass}
                    onChangeText={pass => this.setState({pass})}
                    placeholder={'Password'}
                    secureTextEntry={true}
                />
                </View>
                
                <View style={styles.bu}>
                    <Button
                        title={'Login'}
                        //style={styles.input}
                        onPress={this.onLogin.bind(this)}
                        color='royalblue'
                    />
                </View>
            </View>
        );
    }
}

export default Login;