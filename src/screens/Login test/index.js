import React, { Component } from 'react';
import { Text, TextInput, View, Alert, Button, AsyncStorage, ImageBackground } from 'react-native';

import styles from './styles';

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
      
        fetch("https://thvvnupw5a.execute-api.ap-southeast-2.amazonaws.com/prod/signin", options).then(res=>res.json()).then(json=>{
            if (json == "true") {
                this.setState({res: 1});
            } else {
                this.setState({res: 0});
                Alert.alert("Invalid Details")
            }
            return
        })
    }

    onLogin = () => {
        const { email, pass } = this.state;
        this.postLogin(email, pass);
        return  
    }

    render(){
        if (this.state.res == 1) {
            this.setState({res: 0})
            AsyncStorage.setItem('User', this.state.email);
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



    
                <View style={styles.move}>
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
                            onPress={this.onLogin.bind(this)}
                            color='royalblue'
                        />
                    </View>
                </View>
            </View>
        );
    }
}

export default Login;