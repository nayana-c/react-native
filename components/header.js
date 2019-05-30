import React, {Component} from 'react';
import { StyleSheet, Text, View, ListView, Image, StatusBar } from 'react-native';

import { Container, Header, Button, Title, Icon } from 'native-base';

export default class HeaderComponent extends React.Component {
    render() {
      return (  
      

        <View style={[styles.header]}>
        <View style={[styles.container]}>
          <Image
                style={[styles.image, styles.layerImage]}
                source={require('../assets/images/layer1.png')}
              />
          <Text style={styles.headerText}>Hi, Jeffrey!</Text>

          <Image
                style={[styles.image]}
                source={require('../assets/images/settings.png')}
              />
        </View>
      </View>
      );
    }
  }

  const styles = StyleSheet.create({

    header :{
      backgroundColor: '#fff',
      marginTop : 30,
      borderBottomColor : '#efefef',
      borderBottomWidth : 1,
      padding: 8,
    },
    container :{
      flexDirection: 'row', alignItems:'center',  
      padding:10, 
      justifyContent:"space-around",
    },
    headerText : {
      color: '#00acc8',
      fontWeight : 'bold',
      flex: 1,  textAlign: 'left',
      fontSize: 17,
      letterSpacing: 1,
    },
    image :{
      width: 20,
      height: 20,
      resizeMode :'contain'

      },
      layerImage:{
        resizeMode :'contain',
        marginRight : 19
      }
  })