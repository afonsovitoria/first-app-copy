import React from 'react';
import {StyleSheets, Text, TextInput, TouchableOpacity, TouchableNativeFeedback, Alert, Button, ScrollView, Image, View } from 'react-native';
import styles, {version} from './styles/styles';
import strings from './strings/strings';
import Agradecimento from './components/Agradecimento';




export default class App extends React.Component {
 
constructor(props){
     super(props)
     this.state ={
         text: ""
     }
 }
    
  render() {
    return (
      <View style={styles.masterContainer}>
        <View style={{flex: 1}}>
            
            <TextInput
                style={{height:40}}
                placeholder="Type here to translate!"
                onChangeText={(text) => this.setState({text})}
             />
                              
            <Text style={{padding: 10, fontSize: 42}}>
                {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
            </Text>
            <View style={styles.buttonStyle}>
                <Button
                onPress={() => {Alert.alert('You tapped the button!');
                }} 
                title="Press Me"
                />
            </View>
            <TouchableOpacity 
                onPress={() => {Alert.alert('You tapped the button!');
                }}>
                <Text>Press Me Touchable</Text></TouchableOpacity>
            
            <TouchableNativeFeedback onPress={() => {}}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>
                        {Platform.OS === 'android' ? 'é um android' : 'não é um android'}
                        {Platform.OS === 'ios' ? 'é um ios' : 'não é um ios'}
                    </Text>
                </View>
            </TouchableNativeFeedback>
        </View> 
        <View style={{flex: 2, backgroundColor:'#eee'}}>
        
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.textStyle}>{version}Open up App.js to start working on your app!</Text>
                    <Text style={[styles.textStyle, styles.textRed]}>Changes you make will automatically reload.</Text>
                    <Text>Shake your phone to open the developer menu.  </Text>
                    <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}} style={{width:100, height:100}}/>
                    <Agradecimento pessoa="Jorge"/>
                    <Agradecimento pessoa="Tiago"/>
                    <Agradecimento pessoa="Mariana"/>
                    <Agradecimento pessoa="Xavier"/>
                    
                    <Text>{strings.pt.goodbye}!</Text>
                </View>
            </ScrollView>
        </View>
    </View>
        
    );
  }
}




