import React from "react";
import {View,Text,Image,TouchableOpacity,Platform,StyleSheet} from 'react-native';
import {MaterialIcons,EvilIcons,Ionicons} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { CustomTouchableIcon } from  "../Header/CustomTouchableIcon"

export default class TopBar extends React.Component{

    constructor(props){
        super(props);
        this.backNavigation = this.backNavigation.bind(this)
    }

    backNavigation(){
        if(Platform.OS === 'ios'){
            return(
                <View>
                     <Ionicons name='ios-arrow-back' size={28} color={"white"}/>
                </View>
            )
        }
        else {
            return(
                <View>
                     <MaterialIcons name='arrow-back' size={28} color={"white"}/>
                </View>
            )
        }
    }

    render(){
        return(
            <View style={styles.header_row}>
                 {/* <LinearGradient
                    colors={["#001a33", "#004f99"]}
                    style={{alignItems:'center',
                            paddingTop:Platform.OS === "android" ? 35 : 28,
                            paddingBottom:Platform.OS === "android" ? 5 : 5, 
                            paddingHorizontal:Platform.OS === "android" ? 10 : 10,
                            flex: 1, flexDirection:'row' }}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}>
      
                   <View style={{justifyContent:'space-between',width:'100%',flexDirection:'row',marginLeft:10}}>
                       <View style={{justifyContent:'flex-start',flexDirection:'row'}}>
                        <TouchableOpacity onPress={() => { this.props.navigation.goBack()}}>
                            {this.backNavigation()}
                            </TouchableOpacity>
                        <Text style={styles.header_text}>
                            {this.props.title}
                        </Text>
                       
                      </View>
                    </View>
                    </LinearGradient> */}
                    <LinearGradient
                    colors={["transparent", "#transparent"]}
                    style={{ 
                    alignItems:'center', flex:1,flexDirection:'row' }}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}>
                     <CustomTouchableIcon onPress={()=>this.props.navigation.goBack()}>
            <Ionicons name="ios-arrow-back" size={25} color={"white"} />
        </CustomTouchableIcon>
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 17,
            marginLeft:5,
          }}>
          Profile
        </Text>
        </LinearGradient>
          </View>
        )
    }
}

const styles = StyleSheet.create({

    header_row:{
        width: "100%",
        flexDirection:'row',
        zIndex: 1,
        alignItems:'center',
    },
    header_text:{
         color: "#fff",
          left: 15,
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 17
    },
    profile_bg:{
        width:'100%',
        overflow:'hidden',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50, 
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    
    }
})
