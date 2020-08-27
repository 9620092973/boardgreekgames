import React from 'react'
import { View, Text, TouchableOpacity, Platform } from 'react-native'

import {
  EvilIcons,
  Ionicons,
} from "@expo/vector-icons"
import { LinearGradient } from "expo-linear-gradient";
import { CustomTouchableIcon } from "../Components/Header/CustomTouchableIcon.js"

export const NavigationScanOptions = (options, screenName) => {
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
            marginLeft:5
          }}>
          {screenName}
        </Text>
      </View>
    ),
    headerRight: (
      <View style={{marginRight:10}}>
        <CustomTouchableIcon
          onPress={() => {
            navigation.navigate("Search");
          }}
        >
          <EvilIcons name="search" size={28} color={"white"} />
        </CustomTouchableIcon>
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
    //   navigation.state.params.onTabFocus();
    //   defaultHandler();
    // }
  }
}
