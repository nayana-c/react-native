import React, {Component} from 'react';
import { StyleSheet,  View, Image } from 'react-native';

import { Footer, FooterTab, Button, Icon, Text, StyleProvider } from 'native-base';
import getTheme from '../native-base-theme/components';
import platform from '../native-base-theme/variables/platform';

export default class FooterComponent extends React.Component {
    render() {
      return (  
        <StyleProvider style={getTheme(platform)}>
        <Footer style={styles.footerMain}>
        <FooterTab style={styles.footer}>
          <Button vertical active style={styles.button1}>
          <Image
                style={styles.image}
                
                source={require('../assets/images/home.png')}
              />
            <Text style={styles.footerText} uppercase={false}>Home</Text>
          </Button>
          <Button vertical style={styles.button2}>
          <Image
                style={[styles.image, styles.inactive]}
                source={require('../assets/images/quotes.png')}
              />
            <Text style={[styles.footerText, styles.inactive]} uppercase={false}>Quotes</Text>
          </Button>
          <Button vertical >
          <Image
                style={[styles.image, styles.inactive]}
                source={require('../assets/images/apps.png')}
              />
            <Text style={[styles.footerText, styles.inactive]} uppercase={false}>Applications</Text>
          </Button>
          <Button vertical>
          <Image
                style={[styles.image, styles.inactive]}
                source={require('../assets/images/notification.png')}
              />
            <Text style={[styles.footerText, styles.inactive]} uppercase={false}>Notifications</Text>
          </Button>
        </FooterTab>
       
      </Footer>
      </StyleProvider>
      );
    }
  }


  const styles = StyleSheet.create({
    footerMain :{
      padding :0,
      margin :0,
      
    },
    footer: {
      
        backgroundColor :"#fff",
        padding: 0,
        margin: 0,
    },
    footerText :{
      
      textTransform: 'lowercase',
      fontSize : 10,
      
    },
    
    image :{
      width: 20, 
      height: 20,
      resizeMode : "contain",
    },
    inactive :{
      opacity : 0.4
    }

  });
  