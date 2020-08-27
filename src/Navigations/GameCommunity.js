import React from "react";
import { Image } from "react-native";
import {
  createBottomTabNavigator,
} from "react-navigation";
import ReviewScreen from "../Screens/ReviewScreen";
import StrategyScreen from "../Screens/StrategyScreen";
import TutorialScreen from "../Screens/TutorialScreen";
import PhotoScreen from "../Screens/PhotoScreen"
import ModandTipScreen from "../Screens/ModandTipScreen"

import Review from "../../assets/Image/Review.svg";
import Strategy from "../../assets/Image/Strategy.svg";
import Photo from "../../assets/Image/Photo.svg";
import Tutorial from "../../assets/Image/Tutorial.svg";
import Tips from "../../assets/Image/Tips.svg";


export const GameCommunity = createBottomTabNavigator(
  {
    // Bottom tab navigation screens
    Reviews: {
      screen: ReviewScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) =>
          <Review fill={tintColor}
          />
      }
    },
    Strategy: {
      screen: StrategyScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) =>
          <Strategy fill={tintColor}
          />
      }
    },
    Media: {
      screen: PhotoScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) =>
          <Photo fill={tintColor}
          />
      }
    },
    Tutorials: {
      screen: TutorialScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) =>
          <Tutorial fill={tintColor}
          />
      }
    },
    "Mods/Tips": {
      screen: ModandTipScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) =>
          <Tips fill={tintColor}
          />
      }
    },
  },
  {
    tabBarOptions: {
      scrollEnabled: true,
      activeTintColor: "#159CDA",
      inactiveTintColor: "black",
      labelStyle: {
        fontSize: 12
      },
      style: {}
    },
    initialRouteName: "Reviews",
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarOnPress: ({ navigation, defaultHandler }) => {
        defaultHandler();
      }
    })
  }
);
