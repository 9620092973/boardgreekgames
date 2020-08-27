//
//  UploadGame1
//  Upload game
//
//  Created by S7works.
//  Copyright © 2018 S7works. All rights reserved.
//

import {
  View,
  Text,
  TouchableOpacity,
  Platform
} from "react-native";
import React from "react";
import styles from "../../Styles/UploadGameStyles/UploadGameImageStyleSheet";
import {
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import CameraRollPicker from "react-native-camera-roll-picker";
import { CustomTouchableIcon } from  "../../Components/Header/CustomTouchableIcon"
import { FontAwesome, AntDesign, EvilIcons,Ionicons } from "@expo/vector-icons";
import UploadGameImageIos from './UploadGameImageIos'

export default class UploadGameImage extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const {params = {}} = navigation.state;
    return{ headerLeft: (
      <View style={{ flexDirection: "row", alignItems: "center",marginLeft:8,marginRight:10 }}>

        <CustomTouchableIcon onPress={() => navigation.goBack()}>
          <Ionicons name="ios-arrow-back" size={25} color={"white"} />
        </CustomTouchableIcon>

        <Text
          style={{
            marginBottom: Platform.OS === 'ios' ? 6 : null,
            color: "#fff",
            fontWeight: "bold",
            fontSize: 18,
          }}>
          Upload Game
        </Text>
      </View>
    ),
    headerRight: (
      <TouchableOpacity
        onPress={() => {
        params.handleThis()
          
        }}
        style={{ marginRight: 20, flexDirection: "row" }}
      >
        <MaterialCommunityIcons
          name="camera-enhance"
          size={20}
          color={"white"}
        />
        <Text
          style={{
            fontSize: 17,
            color: "#fff",
            fontWeight: "bold",
            marginLeft: 10
          }}>
          Add
        </Text>
      </TouchableOpacity>
    ),
    headerBackground: (
      <LinearGradient
        colors={["#001a33", "#004f99"]}
        style={{ flex: 1 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      />
    ),
    headerBackTitle: null,
    headerTintColor: "white"
  }};

  constructor(props) {
    super(props);
    this.state = {
      gameImages: []
    }
    this.getSelectedImages = this.getSelectedImages.bind(this)
    this.changeButtonColorHandler=this.changeButtonColorHandler.bind(this);
  }

  componentDidMount() {
    this.props.navigation.setParams({
            handleThis: this.changeButtonColorHandler
        });
  }

  changeButtonColorHandler() {
       this.props.navigation.navigate("UploadGameTitle",{gameImages: this.state.gameImages});
    }

  getSelectedImages(selectedImagesArray, currentSelectedImage) {
    console.log("selectedImagesArray", selectedImagesArray)
    let gameImages = []
    for(let i = 0; i < selectedImagesArray.length; i++) {
      gameImages.push(selectedImagesArray[i].uri)
    }
    this.setState({gameImages:selectedImagesArray},()=>{console.log("this.state.gameImages",this.state.gameImages)})
    // write your code here
  }

  render() {
    return (
      <View style={styles.welcomeView}>
        <View
          pointerEvents="box-none"
          style={{
            height: 67
          }}
        >
          <Text style={styles.labelThreeText}>
            Select Image for display picture
          </Text>
        </View>
        <CameraRollPicker callback={this.getSelectedImages} groupTypes = 'All'/>
      </View>
    );
  }
}


