import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  StatusBar,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
 import styles from "../Styles/HomeStyles/HomepageStyleSheet";
import React from "react"
import { Video } from 'expo-av';

export const RenderUGCOverlay = (props) => {
  const { projectedObject, index, navigateToProductPage } = props
  const defaultImage = require("../../assets/Image/ABCme.jpeg")
  const image = projectedObject.images.length > 0 ? {uri: projectedObject.images[0]} : defaultImage
 
  let imageFormats = ["png", "jpg", "jpeg", "bmp", "gif", "webp", "psd"];
  let videoFormats = ["mp4","m4a","m4v","f4v","f4a","m4b","m4r","f4b","mov","3gp","3gp2","3g2","3gpp","3gpp2","ogg","oga","ogv","ogx", "wmv","wma","asf*","webm","flv","AVI*","QuickTime*","HDV*","OP1a*","OP-Atom*","ts","MPEG-2 PS","MPEG-2 TS*","WAV","Broadcast","WAV*","LXF","GXF*","VOB*"];
  const fileType = projectedObject.images[0] != undefined ? projectedObject.images[0].split('.').pop() : ''
  console.log("[RenderUGCOverlay] fileType : "+fileType)
 
  let ugcStyle = { marginRight: 15 }
  if(index == 0) {  ugcStyle = {...ugcStyle, marginLeft: 15 } }
  return (
    <View key={index} style={ugcStyle}>
      <TouchableOpacity>
      {imageFormats.includes(fileType) &&
        <ImageBackground
          source={image}
          style={styles.imageEightImage}
          imageStyle={{ borderRadius: 4 }}
        >
        </ImageBackground>
      }
      {videoFormats.includes(fileType) &&
       <Video
        source={image}
        isMuted={false}
        rate={1.0}
        resizeMode="cover"
        isLooping
        style={[
          styles.imageEightImage,
          { borderRadius:4 }
        ]}
        shouldPlay
       // useNativeControls={true}
       />
      }
      </TouchableOpacity>
    </View>)
}