import React, { Component } from 'react';
import { Text, TextInput, View, Alert, Button, AsyncStorage } from 'react-native';

import styles from './styles';

import { NavigationActions } from 'react-navigation';
import { StackActions } from 'react-navigation';

class Signup extends React.PureComponent {
    constructor(props) {
        super(props);
        const { navigate } = props.navigation;
        this.navigate = navigate;

        this.state = {
            email: '',
            pass: '',
          };
    }

    postSign = async (email, pass) => {
        
        const options = {
            method: 'POST',
            body: JSON.stringify(
                {
                    User: email,
                    Password: pass,
                }
            )
        }
        
        fetch("https://thvvnupw5a.execute-api.ap-southeast-2.amazonaws.com/prod/signup", options).then(res=>res.json()).then(json=>console.log(json));
    }
    
    onLogin = () => {
        const { email, pass } = this.state;
        if (email == "" || pass == "") {
            Alert.alert("Invalid Details")
            return
        }

        Alert.alert('You Signed UP!', `${email}, ${pass}!`);

        this.postSign(email, pass);
        AsyncStorage.setItem('User', email);

        this.props.navigation.dispatch(
            StackActions.reset({
            index: 0,
            key: null,
            actions: [NavigationActions.navigate({ routeName: "wallet" })]
            })
        )
        return  
    }
    
    render(){

        return(

            <View style = {styles.container}>


                <View style = {styles.move}>

                    <View style = {styles.fontt}>
                        <Text style={styles.fontt}>Sign Up</Text>
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
                        <Button style={styles.buuh}
                        title={'SUBMIT'}
                        onPress={this.onLogin.bind(this)}
                        color='royalblue'
                        />
                    </View>

                </View>

            </View>
        );
    }
}

export default Signup;