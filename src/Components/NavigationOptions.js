import React from 'react'
import { View, Text, TouchableOpacity, Platform } from 'react-native'

import {
    EvilIcons,
    Ionicons,
  } from "@expo/vector-icons"
import { LinearGradient } from "expo-linear-gradient";

export const NavigationOptions = (options, screenName, category) => {
  const { navigation } = options
  let { routeName } = navigation.state;

  return {
    headerTitle: (
      <View style={{flex:2, marginBottom: Platform === "ios" ? 10 : 25 }}>
        <Text
          style={{
            color: "#fff",
            position: "absolute",
            // right: Platform.OS === "ios" ? 130 : null,
            left: Platform.OS === "ios" ? 0 : null,
            fontWeight: "bold",
            fontSize: 17
          }}>
          {screenName}
        </Text>
      </View>
    ),
    headerLeft: (
      <View style={{flex:0.5}}>
      <TouchableOpacity
        style={{ marginLeft: 20 }}
        onPress={() => {
          navigation.navigate("GameInfo");
        }}>
        <Ionicons name="ios-arrow-back" size={28} color={"white"} />
      </TouchableOpacity>
      </View>
    ),
    headerRight: (
      <View
        style={{
          flex:1,
          marginRight: 20,
          flexDirection: "row",
          alignItems: "center"
        }} >
        <TouchableOpacity onPress={() => navigation.navigate("WriteReview", { category: category, lastScreen: routeName })}>
          <Ionicons name="ios-add" size={28} color={"white"} />
        </TouchableOpacity>
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
    headerTintColor: "white",
    tabBarOnPress: ({ navigation, defaultHandler }) => {
      navigation.state.params.onTabFocus();
      defaultHandler();
    }
  }
}
