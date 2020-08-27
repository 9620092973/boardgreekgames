import React from "react";
import Image from "react-native-remote-svg";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import Scan from '../Screens/BarCodeScanner/Scan.js'
import MultipleScanGame from '../Screens/BarCodeScanner/MultipleScanGames.js'
import ScanHistory from '../Screens/BarCodeScanner/ScanHistory.js'
import MultipleScanner from '../Screens/BarCodeScanner/MultipleScanner.js'
import ScanImage from "../../assets/Image/ScanImage.svg";
import MultipleScanImage from "../../assets/Image/ScanImage.svg";
import HistoryImage from "../../assets/Image/ugcfeed.png";

const ScanIcon = () => <ScanImage width={25} height={25} />;
const MultipleIcon = () => <MultipleScanImage width={25} height={25} />;
const HistoryIcon = () => <Image source={HistoryImage} style={{ marginTop: 5, tintColor: "grey" }} />;

const bottomTabIcon = (options, TabImage) => {
  const { focused, tintColor } = options;
  return <TabImage />;
};

export const MultipleScanStack = createStackNavigator({
    MultipleScanner: {
        screen: MultipleScanner,
    },
    // MultipleScanGame: {
    //     screen: MultipleScanGame,
    //      navigationOptions: {
    //          gesturesEnabled: false,
    //      },
    //   },
    }, {
    headerMode: 'none',
   
});

export const ScannerTab = createBottomTabNavigator(
  {
    // Bottom tab navigation screens
    Scan: {
      screen: Scan,
      navigationOptions: {
        tabBarIcon: options => bottomTabIcon(options, ScanIcon)
      }
    },
    "Multiple Scan": {
      screen: MultipleScanStack,
      navigationOptions: {
        tabBarIcon: options => bottomTabIcon(options, MultipleIcon),
      }
    },
    "History": {
      screen: ScanHistory,
      navigationOptions: {
        tabBarIcon: options => bottomTabIcon(options, HistoryIcon)
      }
    },    
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
    initialRouteName: "Scan",
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarOnPress: ({ navigation, defaultHandler }) => {
        defaultHandler();
      }
    })
  }
);