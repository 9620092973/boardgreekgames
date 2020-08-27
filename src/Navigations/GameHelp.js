import React from "react";
import Image from "react-native-remote-svg";
import {
  createBottomTabNavigator
} from "react-navigation";
// import {
//   RuleStack,
//   FAQStack,
//   ErrataStack
// } from "./SinglePostModal";
import RulesScreen from "../Screens/RulesScreen";
import ErrataScreen from "../Screens/ErrataScreen";
import FAQScreen from "../Screens/FAQScreen";
import Rules3 from "../../assets/Image/Rules3.svg";
import FAQ from "../../assets/Image/FAQ.svg";
import Errata from "../../assets/Image/Errata.svg";


export const GameHelp = createBottomTabNavigator(
  {
    // Bottom tab navigation screens
    Rules: {
      screen: RulesScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) =>
          <Rules3 fill={tintColor}
          />
      }
    },
    FAQ: {
      screen: FAQScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) =>
          <FAQ fill={tintColor}
          />
      }
    },
    Errata: {
      screen: ErrataScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) =>
          <Errata fill={tintColor}
          />
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "#159CDA",
      inactiveTintColor: "black",
      labelStyle: {
        fontSize: 12
      },
      style: {}
    },
    initialRouteName: "Rules",
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarOnPress: ({ navigation, defaultHandler }) => {
        defaultHandler();
      }
    })
  }
);
