import React from 'react';
import { View, ScrollView, Button 

} from 'react-native';
import Cardview from '../Cardview';
import styles from './styles';

import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

class Walletview extends React.PureComponent {
    constructor(props) {
        super(props);
        const { navigate } = props.navigation;
        this.navigate = navigate;
    }

    openImagePickerAsync = async () => {
        //let permissionResult = 
        //await ImagePicker.requestCameraRollPermissionsAsync();
    
        let permissionResult =
        await ImagePicker.requestCameraPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert("Permission to access camera roll is required!");
          return;
        }
    
        let pickerResult = await ImagePicker.launchCameraAsync();
        console.log(pickerResult);
        //
        options = {
            method: 'POST',
            image: base64(pickerResult.image)
        }
        fetch(URL, options);
    }

    getCards = async () => {
        fetch('https://j560jdfic4.execute-api.ap-southeast-2.amazonaws.com/prod/GetCard?User=test').then(res=>console.log(res));
        /*
        cards = [];
        
        for(var i = 0; i < res.json().length; i++){
            cards.append(
                <Cardview 
                    name={res.json()[i].name}>
                </Cardview>
            );
        }

        return(
            <View>
                {cards}
            </View>
        )
        */
    }

    postCard = async () => {
        
        const options = {
            method: 'POST',
            body: JSON.stringify(
                {
                    name: "test",
                    company_name: "test",
                    ph: "test",
                    email: "test",
                }
            )
        }

        fetch("https://tjuf9w5ov2.execute-api.ap-southeast-2.amazonaws.com/prod/PostCard", options);
    }


    render() {
        return (
            <View style={styles.container}>
                <Button
                    title = "Click to Scan"
                    onPress = {
                    this.openImagePickerAsync
                    }
                /> 
                <Button
                    title = "Delete"
                    onPress = {
                        this.getCards
                    }
                />   
                <Button
                    title = "Logout"
                    onPress = {
                        this.postCard
                    }
                />    
            </View>
        )
    }
}

export default Walletview;