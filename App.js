import React from 'react';
import { StatusBar, Platform } from 'react-native';
import AuthLoadingScreen from './src';
import { Provider } from "react-redux";
import store from './src/Redux/Store/index';
import { AppLoading } from "expo"
import { Asset } from 'expo-asset'
import Sentry from "sentry-expo";
import { AskCameraRollPermissions } from "./src/Utils"


Sentry.config(
  "https://b0b2da1243144e7f83fd23e1c55d7b65@sentry.io/1502574"
).install()

// Image caching Helper
const CacheImages = (images) => (
  images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  })
)

export default class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      isLoadingComplete: false
    };
    this._handleFinishLoading = this._handleFinishLoading.bind(this);
    this._loadResourcesAsync = this._loadResourcesAsync.bind(this);
  }

  async _loadResourcesAsync() {
    await AskCameraRollPermissions();
    
    // cache images before loading
    // static url strings can be added to the array parameter in CacheImages
    const ImageAssets = CacheImages([
      require('./assets/Image/sad_red.png'),
      require('./assets/Image/nutrl_yellow.png'),
      require('./assets/Image/happy_green.png'),
      require('./assets/Image/ratelove_green.png'),
      require('./assets/Image/profile-bg.png'),
      require('./assets/Image/baseline-edit-24px.png'),
      require('./assets/Image/noun_gender_1820716.png'),
      require('./assets/Image/baseline-location_on-24px.png'),
      require('./assets/Image/Amazon.png'),
      require('./assets/Image/Ebay.png'),
      require('./assets/Image/facebook_img.png'),
      require('./assets/Image/google_img.png'),
      require('./assets/Image/trending.png'),
      require('./assets/Image/avatar.png'),
      require('./assets/Image/defaultVideo.png'),
      require('./assets/Image/cloud-icon.png'),
      require('./assets/Image/nope.png'),
      require('./assets/Image/like.png'),
      require('./assets/Image/ugcfeed.png'),
      require('./assets/Image/no_game_scanned.png'),
      require('./assets/Image/delet.png'),
      require('./assets/Image/mycollection.png'),
      require('./assets/Image/Group762.png'),
      require('./assets/Image/modalHeader.png'),
      require('./assets/Image/baseline-camera_alt-24px.png'),
      require('./assets/Image/AddGame.png'),
      require('./assets/Image/barcode_Scan32.png'),
      require('./assets/logoM.png')
    ])

    return Promise.all([ ...ImageAssets ]);
  };

  render() {

      // Set status bar color
      StatusBar.setBarStyle(Platform.OS == 'ios' ? 'dark-content' : 'light-content', true);

      if (!this.state.isLoadingComplete) {
        return (
          <AppLoading
            startAsync={this._loadResourcesAsync}
            onError={this._handleLoadingError}
            onFinish={this._handleFinishLoading}
          />
        );
      } else {
        return (
          <Provider store={store}>
            <AuthLoadingScreen />
          </Provider>
        )
      }
  }

  _handleLoadingError(error) {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading() {
    this.setState({ isLoadingComplete: true });
  };
}
        
  
 
  
