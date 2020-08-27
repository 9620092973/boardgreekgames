import React from 'react'
import { View, Text, TouchableOpacity, Platform } from 'react-native'

import {
  EvilIcons,
  Ionicons,
} from "@expo/vector-icons"
import { LinearGradient } from "expo-linear-gradient";
import { CustomTouchableIcon } from "../Components/Header/CustomTouchableIcon.js"

export const UploadGameNavigation = (options, screenName) => {
  const { navigation } = options
  let { routeName } = navigation.state;

  return {
    headerStyle: {
      height: Platform.OS === 'ios' ? 55 : 65,
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
       
    },
    headerLeft: (
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
    // tabBarOnPress: ({ navigation, defaultHandler }) => {
    //   //navigation.state.params.onTabFocus();
    //   defaultHandler();
    // }
  }
}
