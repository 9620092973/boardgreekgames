import React from "react";
import {
  FontAwesome,
  AntDesign,
  EvilIcons,
  MaterialIcons,
  Ionicons,
  Entypo
} from "@expo/vector-icons";
//import react in our code.
import {
  Text,
  ImageBackground,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  ActivityIndicator,
  FlatList,Modal


} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

export default class NavigationHeader extends React.Component{
  render(){
    return(
       <View style={{flexDirection:'row'}}>
          <LinearGradient
          colors={["#001a33", "#004f99"]}
          style={{ flex: 1,padding:20 }}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
        <TouchableOpacity>
      
            <Ionicons name="ios-arrow-back" size={25} color= "white" style={{position:'absolute',top:5}}/>
            <Text style={{marginLeft:25,fontSize:17,color:"white",fontWeight:'bold',marginTop:7}}>{this.props.screenName}</Text>
            </TouchableOpacity> 
      
                 </LinearGradient>
          </View>
      )
  }
}

