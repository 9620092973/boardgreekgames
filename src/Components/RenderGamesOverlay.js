//Ramya edited this file

 import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
 import styles from "../Styles/HomeStyles/HomepageStyleSheet";
import React from "react"

export const RenderGamesOverlay = (props) => {
  const defaultImage = require("../../assets/Image/ABCme.jpeg")
  const { projectedObject, index, navigateToProductPage } = props
  let cardImage = projectedObject.card_image[0] ? { uri: projectedObject.card_image[0] } : defaultImage;

  let gameCardstyles = { marginRight: 15 }
  if(index == 0) { gameCardstyles = { ...gameCardstyles, marginLeft: 15 } }
  return (
    <View key={index} style={gameCardstyles}>
      <TouchableOpacity
        onPress={() => {navigateToProductPage(projectedObject.id)}}>
        <ImageBackground
            source={cardImage}
            style={styles.imageEightImage}>
          <View style={{ flex: 1, justifyContent: "flex-end" }}>
            <LinearGradient
                colors={["rgba(52, 52, 52, 0)", "#0F0E0E"]}
                style={{ flex: 1, justifyContent: "flex-end" }}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}>
              <Text style={styles.textProfile}>{projectedObject.name}</Text>
              <Text style={styles.profilePlayer}>
                {projectedObject.minimum_players}-{projectedObject.maximum_players} Players
              </Text>
            </LinearGradient>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  )
}
