import React from 'react';
import { Text, View, Button, Linking } from 'react-native';

import styles from './styles';


class Cardview extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            deleted: false
        };
    }


    deleteCard = async (idCard) => {
        const options = {
            method: 'DELETE',
            body: JSON.stringify(
                {
                    CardID: idCard,
                }
            )
        }
        fetch("https://thvvnupw5a.execute-api.ap-southeast-2.amazonaws.com/prod/deletecard", options);
        this.setState({deleted: true});

    }

    render(){
        const { name, company_name, ph, email, CardID, Position, Link, Social } = this.props;
        console.log(Link)
        var pressableLink = "";
        const re = /http/;
        if(re.test(Link)){
            pressableLink = Link;
        }else{
            pressableLink = "http://" + Link;
        }
        if(this.state.deleted) return(
            <View></View>
        );
        return(
            <View style={styles.container}>

                <View style={styles.cardLook}>
                    <View style={styles.lhs}>
                        <Text style={styles.textb}>Name: </Text>   
                        <Text style={styles.textb}>{name}</Text> 
                        <Text style={styles.textc}>Position: </Text>  
                        <Text style={styles.textc}>{Position}</Text>
                    </View>
                    <View style={styles.rhs}>
                        <Text style={styles.text}>Company: </Text>
                        <Text style={styles.text}>{company_name}</Text>
                        <Text style={styles.text}>Phone: </Text>
                        <Text style={styles.text}>{ph}</Text>
                        <Text style={styles.text}>Email: </Text>
                        <Text style={styles.text}>{email}</Text>
                        <Text></Text>
                        <Text style={styles.textl}>Website: </Text>
                        <Text style={styles.textl}
                            onPress={() => Linking.openURL(pressableLink)}>
                        {Link}</Text>
                        <Text style={styles.text}>Social Medias: </Text>
                        <Text style={styles.text}>{Social}</Text>
                    </View>
                </View>

                <Button 
                    title="Delete This Card"
                    onPress={() => {this.deleteCard(CardID)} }
                    color='royalblue'
                />
                    
            </View>
        )
    }
}

export default Cardview;