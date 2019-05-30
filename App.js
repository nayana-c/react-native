import React from 'react';
import { StyleSheet, Text, View,StatusBar } from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import HeaderComponent from './components/header';
import FooterComponent from './components/footer';
import ContainerComponent from './components/container';
import { Font, Expo } from 'expo';
import { Ionicons } from '@expo/vector-icons';

export default class App extends React.Component {

  state={
    isReady : false
  }

  async componentWillMount() {
    await Font.loadAsync({
      'MaisonNeue-Bold': require('./assets/fonts/MaisonNeue.ttf'),
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.tff')
    });
    this.setState({isReady : true})

  }
  render() {
if( !this.state.isReady){
  return <Expo.AppLoading />
}


    return (
     
   
      <Container style={styles.container}>
        <HeaderComponent/>
         <ContainerComponent/>
        <FooterComponent/>
      </Container>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontFamily: "MaisonNeue-Bold",
    
  },
 
});
