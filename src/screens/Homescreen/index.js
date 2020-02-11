import React from 'react';
import { Text, Button, View, ImageBackground, Image } from 'react-native';

import styles from './styles';
import SCREEN_NAMES from '../../navigation/screen-names';

class Homescreen extends React.PureComponent {
    constructor(props) {
        super(props);
        const { navigate } = props.navigation;
        this.navigate = navigate;
    }

    render() {
        return (
            <View style={styles.container}>    
                <Image source={require('../icons/digi.png')}
                        style={styles.iconss}
                />

                <View style={styles.hbutton}>         
                    <Button title="To Sign Up" onPress={() => this.navigate(SCREEN_NAMES.signup)}
                        color='royalblue'
                    />
                    <Text></Text>
                    <Button title="Login" onPress={() => this.navigate(SCREEN_NAMES.login)}
                        color='royalblue'
                    />
                </View>    
            </View> 
        )
    }
}

export default Homescreen;