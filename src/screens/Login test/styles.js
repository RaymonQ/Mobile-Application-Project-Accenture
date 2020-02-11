import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
      flex: 1,
      fontFamily: 'monospace',
      alignContent: 'center',
      justifyContent: 'center',
      paddingTop: 23,
      alignItems:'center',
      
  },
  tput:{
    alignContent: 'center',
    justifyContent: 'center',
    marginBottom: 18,
  },

  input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
  },
  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText:{
    color: 'white'
  },
  fontt:{
    fontFamily: 'monospace',
    marginBottom: 10,
  },
  bu:{
    alignItems:"center",
  }
  
});

export default styles;