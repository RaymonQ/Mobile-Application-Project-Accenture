import React from 'react';
import { Button, View,ImageBackground } from 'react-native';

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
                <Button title="To Sign Up" onPress={() => this.navigate(SCREEN_NAMES.signup)}/>
                <Button title="Login" onPress={() => this.navigate(SCREEN_NAMES.wallet)}/>
            </View>
        )
    }
}

export default Homescreen;