import React from "react";
import {
  View,
  ActivityIndicator,
  Dimensions
} from "react-native";
import { _AuthStatus } from "./Networks/LoginScreenCalls";
import {
  createAppContainer,
  createDrawerNavigator,
  createSwitchNavigator,
} from "react-navigation";
import SideMenu from "./Components/Header/sidemenu";

import { AppStack } from "./Navigations/AppStack";
import { WelcomeStack, LoginAuthStack, SignupAuthStack } from "./Navigations/AuthStack";
import { useScreens } from "react-native-screens";
import { _retrieveData, _removeToken } from "./Networks/LoginScreenCalls"
import { ScannerTab } from "./Navigations/ScannerTab.js"

// Optimize memory usage and performance for navigations in expo
// Ref: https://github.com/kmagiera/react-native-screens#usage-in-expo-with-react-navigation-v100
useScreens();

class AuthLoadingScreen extends React.Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const response = await _AuthStatus()
    const authData = await _retrieveData()
    if (authData && authData != {}) {
      await _AuthStatus().then((response) => {
        this.setState({
          authStatus: response.data
        })
      }).catch((error) => {
        console.log("auth status response", error.message)
      })

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.    
      this.props.navigation.navigate(response.data.user_status ? "App" : "Landing");
    } else {
      await _removeToken()
      this.props.navigation.navigate("Landing");
    }


  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }
}

const DrawerAuthStack = createDrawerNavigator(
  {
    AppStack: AppStack
  },
  {
    contentComponent: props => <SideMenu {...props} />,
    drawerPosition: "left",
    drawerWidth: Dimensions.get("window").width - 70
  }
)

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      Landing: WelcomeStack,
      LoginAuth: LoginAuthStack,
      SignupAuth: SignupAuthStack,
      App: DrawerAuthStack,

    },
    {
      initialRouteName: "AuthLoading"
    }
  )
)
