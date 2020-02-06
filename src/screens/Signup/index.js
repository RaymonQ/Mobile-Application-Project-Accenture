import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';

import styles from './styles';

class Signup extends React.PureComponent {
    constructor(props) {
        super(props);
        const { navigate } = props.navigation;
        this.navigate = navigate;
    }

    render() {
        return (
            <View style = {styles.container}>
            
         </View>
        )
    }
}

export default Signup;