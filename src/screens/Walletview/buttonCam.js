import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, Alert 

} from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { render } from 'react-dom';

class buttonCam extends React.PureComponent{

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
  }
  render(){
  return (
        <View>
      <Button
        title = "Click to Scan"
        onPress = {
          openImagePickerAsync
        }
      />
      </View>
  )
    }
}

export default buttonCam;
