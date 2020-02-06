import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';


class Cardview extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render(){
        const { name, company_name, ph, email } = this.props;

        return(
            <View style={styles.container}>
                <Text style={styles.text}>{name}</Text>                
                <Text style={styles.text}>{company_name}</Text>
                <Text style={styles.text}>{ph}</Text>
                <Text style={styles.text}>{email}</Text>
            </View>
        )
    }
}

export default Cardview;