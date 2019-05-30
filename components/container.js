import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Container, Content, Button, Icon } from 'native-base';


import ContentComponent from './content';


export default class ContainerComponent extends React.Component {
    render() {
      return (  
        <Container style={styles.container}>
            <View
                style={styles.subHeading}>
               <Text style={[styles.textBold, styles.last30]}>Last 30 days</Text>
               <Text style={[styles.linkText, styles.textBold]}>Change</Text>
            </View>
            <View
            style={styles.fundViewWrapper}>
                <View style={styles.fundView}><Text style={styles.fundText}>25 Deals Funded</Text></View>
                <View style={styles.fundView}><Text  style={styles.fundText}>$430,000 USD Funded</Text></View>
            </View>
            <ContentComponent/>
        </Container>
    
      );
    }
  }


  const styles = StyleSheet.create({
    subHeading: {
        flexDirection: 'row',
        padding: 15,
        justifyContent : "space-between",
        textAlign: 'left',
        paddingLeft: 20,
        paddingRight: 20,    
    },

    fundViewWrapper :{
        flexDirection: 'row',
        padding: 10,
        justifyContent : "flex-start",
        paddingLeft: 18,
        paddingTop: 0,
    },

    fundView :{
        backgroundColor : "#f1f1f1",
        borderRadius : 50,
        padding : 8,
        marginRight :8,
        paddingLeft: 12,
        paddingRight: 12,
        
    },
    last30 : {
      color: "#253846",
      fontSize : 13,
      letterSpacing: 1,
    },
    fundText : {
      color: "#253846",
      fontSize : 13,
      opacity: 0.7,
      letterSpacing: 1,
    },
    textBold :{
      fontWeight : "bold"
    },
    linkText : {
      color: "#1aacc6",
      borderBottomColor : "#1aacc6",
      borderBottomWidth : 1,
      borderStyle : "dashed",
      letterSpacing: 1,
      fontSize: 13,
    },
    container:{

    }


  });