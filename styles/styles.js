import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    textStyle:{
        fontSize:26,
        textAlign: "center"
    },
    textRed: {
        color: "#F00",
    },
    
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
  },

  masterContainer: {
    flex: 1,
    backgroundColor:'#f00',
    paddingTop:30,
},
    
 
  buttonStyle:{
    width: 200,
    
    
    
},
    
  
  
});

export default styles
export const version = 1;


//ao exportar o ficheiro no app.js o styles escrito pode ser outro nome 'stylesheets' etc...no entanto é sempre melhor usar o mesmo nome.
