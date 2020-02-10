import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
      flex: 1,
      //justifyContent: 'center',
  },

  test: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    
  },
  logg: {
    flex: 1,
    //flexDirection: 'row-reverse',
    borderColor: "transparent",

    borderRadius: 0,
    borderWidth: 5,
    

  },
  scrol: {
    flex:1,
    marginTop: 10,
    alignSelf: 'center',
  }
 
});

export default styles;