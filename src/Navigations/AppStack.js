
//** All screens after user logged in  **//
import { createStackNavigator } from "react-navigation";

import { _AuthStatus, _retrieveData } from "../Networks/LoginScreenCalls";
import { NavigationScanOptions } from "../Components/NavigationScanOption.js"
import { UploadGameNavigation } from "../Components/UploadGameNavigationHeader"
import { ScannerTab } from './ScannerTab';

import HomePage from "../Screens/Home/Homepage";
import Search from "../Screens/Search/Search";
import SearchFilter from "../Screens/Search/SearchFilter";
import TrendingGames from "../Components/ReUsableComponent/trendingGames";
import ProfileScreen from "../Screens/ProfileScreen";
import UploadGameTitle from "../Screens/UploadGame/UploadGameTitle";
import UploadGameImage from "../Screens/UploadGame/UploadGameImage";
import UploadGamePlayers from "../Screens/UploadGame/UploadGamePlayers";
import UploadGameDesigners from "../Screens/UploadGame/UploadGameDesigners";
import UploadGamePublishers from "../Screens/UploadGame/UploadGamePublishers";
import UploadGameArtist from "../Screens/UploadGame/UploadGameArtist";
import UploadGameCategories from "../Screens/UploadGame/UploadGameCategories";
import UploadGameMechanisims from "../Screens/UploadGame/UploadGameMechanisims";
import UploadGameDescription from "../Screens/UploadGame/UploadGameDescription";
import DiscoveryModeHotOrNot from "../Containers/DiscoveryModeOrHotOrNot";
import GameInfo from "../Screens/GameInfo/GameInfo";
import Collections from "../Screens/Collections";
import Notifications from "../Screens/Notifications";
import AccountSettings from "../Screens/AccountSetting";
import Feedback from "../Screens/Feedback";
import Followings from "../Screens/Following";
import GameImages from "../Screens/GameScreens/GameImages";
import GameVideos from "../Screens/GameScreens/GameVideos";
import PersonalInfo from "../Screens/PersnolInfo/PersonalInfo";
import AddGameFinish from "../Screens/UploadGame/AddGameFinish";
import GameExtends from "../Screens/UploadGame/GameExtends";
import UploadPosts from "../Screens/UploadPosts";
import GenericViewAll from "../Screens/GenericViewAllScreen.js";
import PDF from "../Components/PdfViewer";
import BarCodeGame from "../Screens/BarCodeScanner/BarCodeGame";
import AddGame from "../Screens/UploadGame/AddGame.js"
import MultipleScanGame from '../Screens/BarCodeScanner/MultipleScanGames.js'
import { GameCommunity } from "../Navigations/GameCommunity";
import { GameHelp } from "../Navigations/GameHelp";
import SinglePostModal from "../Components/SinglePost/SinglePostModal";

export const AppStack = createStackNavigator({

      HomePage: { screen: HomePage },
      DiscoveryModeHotOrNot: { screen: DiscoveryModeHotOrNot },

      // Sidebar


      Collections: { screen: Collections },
      Followings: { screen: Followings },
      Notifications: { screen: Notifications },
      AccountSettings: { screen: AccountSettings },
      Feedback: { screen: Feedback },

      TrendingGames: { screen: TrendingGames },
      ViewAll: { screen: GenericViewAll },

      // Barcode scanner stack
      ScannerTab: {
            screen: ScannerTab,
            navigationOptions: (options) => NavigationScanOptions(options, "Scan")
      },
      MultipleScanGame: {
            screen: MultipleScanGame,
            navigationOptions: (options) => NavigationScanOptions(options, "Multiple scan games")
      },
      BarCodeGame: { screen: BarCodeGame },
      AddGame: { screen: AddGame },
      GameExtends: {
            screen: GameExtends,
            navigationOptions: (options) => UploadGameNavigation(options)
      },
      UploadGameTitle: {
            screen: UploadGameTitle,
            navigationOptions: (options) => UploadGameNavigation(options)
      },
      UploadGameImage: { screen: UploadGameImage },
      UploadGamePlayers: {
            screen: UploadGamePlayers,
            navigationOptions: (options) => UploadGameNavigation(options)
      },
      UploadGameDesigners: {
            screen: UploadGameDesigners,
            navigationOptions: (options) => UploadGameNavigation(options)
      },
      UploadGamePublishers: {
            screen: UploadGamePublishers,
            navigationOptions: (options) => UploadGameNavigation(options)
      },
      UploadGameArtist: {
            screen: UploadGameArtist,
            navigationOptions: (options) => UploadGameNavigation(options)
      },
      UploadGameCategories: {
            screen: UploadGameCategories,
            navigationOptions: (options) => UploadGameNavigation(options)
      },
      UploadGameMechanisims: {
            screen: UploadGameMechanisims,
            navigationOptions: (options) => UploadGameNavigation(options)
      },
      UploadGameDescription: {
            screen: UploadGameDescription,
            navigationOptions: (options) => UploadGameNavigation(options)
      },
      AddGameFinish: { screen: AddGameFinish },


      // Search stack
      Search: { screen: Search },
      SearchFilter: { screen: SearchFilter },

      // Keep gameInfo stack last

      GameImages: { screen: GameImages },
      GameVideos: { screen: GameVideos },
      WriteReview: { screen: UploadPosts },
      PDF: { screen: PDF },

      //navigating to previous screen 

      GameInfo: { screen: GameInfo },
      GameFeed: {
            screen: GameCommunity,
            navigationOptions: { header: null }
      },
      RulesandFAQTabs: { screen: GameHelp, navigationOptions: { header: null } },
      SinglePostModal: { screen: SinglePostModal, navigationOptions: { header: null } },
      Profile: { screen: ProfileScreen },
      PersonalInfo: { screen: PersonalInfo },

});

/** {END} **/
