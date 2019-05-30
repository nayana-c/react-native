import React, {Component} from 'react';
import { StyleSheet, Text, View, ListView } from 'react-native';
import { Container, Content, Button, Icon, H2, H3 } from 'native-base';
import PieChartComponent from './chart';


export default class ContentComponent extends React.Component {
    render() {
      return (  
        <Content>
            <View style={styles.wrapper}>
                <H3 style={[styles.textbold, styles.headText]}>Count of Applications</H3>
                <View style = {styles.box}>
                    <View style={styles.chartWrapper}>
                        <PieChartComponent/>
                    </View>
                     
                     <View style ={styles.listcontainer}>
                        <View style ={styles.listwrapper}>
                            <View style={[styles.icons, styles.icon1]}></View>
                            <Text style={[styles.listText, styles.textwrap]}>Pending Credit <Text style={[styles.textbold, styles.nolinespace]}>12</Text></Text> 
                        </View>
                        <View style ={styles.listwrapper}>
                            <View style={[styles.icons, styles.icon2]}></View>
                            <Text style={[styles.listText, styles.textwrap]}>Approved <Text style={[styles.textbold, styles.nolinespace]}>44</Text></Text>
                        </View>
                        <View style ={styles.listwrapper}> 
                            <View style={[styles.icons, styles.icon3]}></View>
                            <Text style={[styles.listText, styles.textwrap]}>Funded <Text style={[styles.textbold, styles.nolinespace]}>12</Text></Text>
                        </View>
                        <View style ={styles.listwrapper}>
                            <View style={[styles.icons, styles.icon4]}></View>
                            <Text style={[styles.listText, styles.textwrap]}>Declined <Text style={[styles.textbold, styles.nolinespace]}>44</Text></Text>
                        </View>
                        <View style ={styles.listwrapper}>
                            <View style={[styles.icons, styles.icon5]}></View>
                            <Text style={[styles.listText, styles.textwrap]}>Cancelled <Text style={[styles.textbold, styles.nolinespace]}>12</Text></Text>
                        </View>

                     </View>
                </View>
            </View>

            <View style={styles.wrapper}>
                <H3 style={[styles.textbold, styles.headText]}>Dollar Value</H3>
                <View style = {styles.box}>
                    <View style={styles.chartWrapper}>
                        <PieChartComponent/>
                    </View>
                     <View style ={styles.listcontainer}>
                        <View style ={styles.listwrapper}>
                            <View style={[styles.icons, styles.icon1]}></View>
                                <Text style={[styles.listText, styles.textwrap]}>Pending Credit <Text style={[styles.textbold, styles.nolinespace]}>$43,000USD</Text></Text> 
                            </View>
                        <View style ={styles.listwrapper}>
                            <View style={[styles.icons, styles.icon2]}></View>
                            <Text style={[styles.listText, styles.textwrap]}>Approved <Text style={[styles.textbold, styles.nolinespace]}>$43,000USD</Text></Text>
                        </View>
                        <View style ={styles.listwrapper}> 
                            <View style={[styles.icons, styles.icon3]}></View>
                            <Text style={[styles.listText, styles.textwrap]}>Funded <Text style={[styles.textbold, styles.nolinespace]}>$43,000USD</Text></Text>
                        </View>
                        <View style ={styles.listwrapper}>
                            <View style={[styles.icons, styles.icon4]}></View>
                            <Text style={[styles.listText, styles.textwrap]}>Declined <Text style={[styles.textbold, styles.nolinespace]}>$43,000USD</Text></Text>
                        </View>
                        <View style ={styles.listwrapper}>
                            <View style={[styles.icons, styles.icon5]}></View>
                                <Text style={[styles.listText, styles.textwrap]}>Cancelled <Text style={[styles.textbold, styles.nolinespace]}>$43,000USD</Text></Text>
                            </View>
                     </View>
                </View>
            </View>
            
        </Content>
    
      );
    }
  }


  const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'column',
        padding: 10, 
        paddingTop: 5,
    },
    box :{
       flexDirection: 'row',
       padding : 10
       
    },
    chartWrapper :{
        flexDirection : 'column',
        width : "50%",
        paddingLeft: 0,
        marginLeft: 0,
    
    },
    listcontainer:{
        flexDirection: 'column',
        width : "50%",
        padding : 10,
        paddingLeft:30,
        paddingTop: 0,
        paddingRight: 0,
    },
    listwrapper:{
        flexDirection: 'row',
        paddingLeft :4,
        paddingBottom: 9,
    },
    icons :{
        width: 17,
        height: 9,
        borderRadius : 9,
        marginTop : 8,
        marginRight : 4
    },
    icon1 : {
        backgroundColor : "#00acc8",
    },
    icon2 : {
        backgroundColor : "#253a48",
    },
    icon3 : {
        backgroundColor : "#ed4d61",
    },
    icon4 : {
        backgroundColor : "#2f535d",
    },
    icon5 : {
        backgroundColor : "#2b979d",
    },
    textbold :{
        fontWeight : "bold"
    },
    listText :{
        fontSize : 14,
        color: "#253846",
        letterSpacing: 0.7,
    },
    textwrap:{
        flex : 1,
        flexWrap:"wrap",
       
    },
    nolinespace : {
        letterSpacing: 0,
    },
    headText:{
        paddingBottom: 20,
        paddingTop : 15,
        color: "#253846",
        letterSpacing: 1,
        paddingLeft:10,
        fontSize: 18,
        
    }


})