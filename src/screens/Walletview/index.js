import React from 'react';
import { View, ScrollView, Button, AsyncStorage, BackHandler} from 'react-native';

import Cardview from '../Cardview';
import styles from './styles';
import * as ImagePicker from 'expo-image-picker';

import { NavigationActions } from 'react-navigation';
import { StackActions } from 'react-navigation';

class Walletview extends React.PureComponent {

    constructor(props) {
        super(props);
        const { navigate } = props.navigation;
        this.navigate = navigate;
        this.state = {
            getCardResult: [],
            image_location: "",
            asv: this.asy(),
        };
    }
    
    componentDidMount(){

        fetch('https://thvvnupw5a.execute-api.ap-southeast-2.amazonaws.com/prod/getcard'+'?User='+this.state.asv).then(res=>res.json()).then(json=>{
            var cards = [];
            for(var i = 0; i < json.Count; i++){
                cards.push(
                    <Cardview 
                        name={json.Items[i].Name}
                        company_name={json.Items[i].Company}
                        ph={json.Items[i].Phone}
                        email={json.Items[i].Email}
                        key={i}
                        CardID={json.Items[i].CardID}
                        Position={json.Items[i].Position}
                        Link={json.Items[i].Link}
                        Social={json.Items[i].Social}
                    />
                );
            }
            this.setState({getCardResult: cards})
        })
        console.log("done getting cards")
    }

    sendRek = async () => {

        fetch("https://thvvnupw5a.execute-api.ap-southeast-2.amazonaws.com/prod/textreko?Image=" + this.state.image_location).then(res=>res.json()).then(json=>{
            this.postCard(this.state.asv, json.Name, json.Company, json.Email, json.Phone, json.Position, json.Link, json.Social)
        })
        console.log("sendRek")
        return
    }

    openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    
        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }
    
        let pickerResult = await ImagePicker.launchCameraAsync({base64: true});
        if (pickerResult.cancelled === true) {
            alert("Cancelled!");
            return;
        }

        const options = {
            method: 'POST',
            body: JSON.stringify(
                {
                img: pickerResult.base64,
                user: "e",
                }
            ) 
        }
        fetch("https://thvvnupw5a.execute-api.ap-southeast-2.amazonaws.com/prod/uploads3", options).then(res=>res.json()).then(json=>{
            this.setState({image_location: json})
            this.sendRek()
        });
        console.log("Exiting ImagePicker")
    }

    postCard = async (user, name, company, email, phone, position, link, social) => {
        
        const options = {
            method: 'POST',
            body: JSON.stringify(
                {
                    User: user,
                    Name: name,
                    Company: company,
                    Email: email,
                    Phone: phone,
                    Position: position,
                    Link: link,
                    Social: social
                }
            )
        }

        fetch("https://thvvnupw5a.execute-api.ap-southeast-2.amazonaws.com/prod/postcard", options).then(res=>{
            this.componentDidMount()
        });
    }

    logout = () => {
        this.setState({asv: ""})
        this.props.navigation.dispatch(
            StackActions.reset({
            index: 0,
            key: null,
            actions: [NavigationActions.navigate({ routeName: "home" })]
            })
        )
    }

    asy = async () => {
        const value = await AsyncStorage.getItem('User')

        this.setState({asv: value})
        this.componentDidMount()
        console.log("TEST123asy"+this.state.asv)

        return value
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style = {styles.scrol}>
                    {this.state.getCardResult}
                </ScrollView>

                <View style={styles.test}>
                    <View style={styles.logg}>
                        <Button styles={styles.logg}
                            title = "Scan"
                            onPress = {
                                this.openImagePickerAsync
                            }
                            color = 'royalblue'
                        /> 
                    </View>

                    <View style={styles.logg}>
                        <Button 
                            title = "Logout"
                            onPress = {
                                this.logout
                            }
                            color = 'royalblue'
                        />
                    </View>
                </View>
            </View>
        )
    }
}

export default Walletview;