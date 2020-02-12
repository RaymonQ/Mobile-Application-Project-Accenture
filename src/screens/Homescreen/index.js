import React from 'react';
import { Text, Button, View, ImageBackground, Image } from 'react-native';

import styles from './styles';
import SCREEN_NAMES from '../../navigation/screen-names';

import { LinearGradient } from 'expo-linear-gradient';

class Homescreen extends React.PureComponent {
    constructor(props) {
        super(props);
        const { navigate } = props.navigation;
        this.navigate = navigate;
    }

    render() {
        
        return (

            <View style={styles.container}>    
                    
                <LinearGradient
                    colors={['royalblue', '#3b5998', '#192f6a']}
                    style={{ padding: 15, alignItems: 'center', borderRadius: 5 }}>

                        <View style={styles.iconCon}>
                            <Image source={require('../icons/digi1.png')}
                                    style={styles.iconss}
                            />
                        </View>

                        <View style={styles.hbutton}>         
                            <Button title="Sign Up" onPress={() => this.navigate(SCREEN_NAMES.signup)}
                                color='royalblue'
                            />
                            <Text></Text>
                            <Button title="Login" onPress={() => this.navigate(SCREEN_NAMES.login)}
                                color='royalblue'
                            />
                        </View>    

                </LinearGradient>

            </View> 
        )
    }
}

export default Homescreen;