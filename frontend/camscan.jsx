import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, Alert 

} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

export default function App() {
  function Separator() {
    return <View style={styles.separator} />
  }

  function doScan() {
    return alert('You Tapped!')
  }

  let openImagePickerAsync = async () => {
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
  

  return (


    <View style={styles.container}>
      <Text>The Scan App</Text>


      <Separator/>


      <Button
        title = "Click to Scan"
        onPress = {
          openImagePickerAsync
        }
      />
  
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },



});
