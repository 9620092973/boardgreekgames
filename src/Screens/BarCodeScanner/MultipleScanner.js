import { Text, View, TouchableOpacity, Platform, Alert, Dimensions, AsyncStorage } from "react-native";
import React from "react";
import styles from "../../Styles/BarCodeScannerStyles/ScanStyleSheet";
import { isbnVideoScanner, FetchIsbn } from "../../Networks/ISBNCalls";
import { _retrieveData } from "../../Networks/LoginScreenCalls";
import {
  discoveryMode,
  productLink,
  GameLike
} from "../../Networks/DiscoveryCalls";
import { Constants } from "expo-constants";
import * as Permissions from "expo-permissions";
import { BarCodeScanner } from "expo-barcode-scanner";
import {
  FontAwesome,
  AntDesign,
  EvilIcons,
  Ionicons
} from "@expo/vector-icons";
import Image from "react-native-remote-svg";
import { Container, Content, Input, Footer, FooterTab } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import { CustomTouchableIcon } from "../../Components/Header/CustomTouchableIcon";

export default class MultipleScanner extends React.Component {

 static navigationOptions = ({ navigation }) => ({
    headerTitle: (
      <View style={{ marginBottom: 20 }}>
        <Text
          style={{
            color: "#fff",
            position: "absolute",
            right: Platform.OS === "ios" ? 10  : null,
            fontWeight: "bold",
            fontSize: 17
          }} >
         Multiple Scan Game
        </Text>
      </View>
    ),
    headerRight: (
      <TouchableOpacity style={{ marginRight: 20 }}>
        <EvilIcons name="search" size={28} color={"white"} />
      </TouchableOpacity>
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
  });

  constructor(props) {
    super(props);

    this.state = {
      hasCameraPermission: null,
      game_id: "",
      user_id: "",
      productData: [],
      focusedScreen: false,
      scanCount:0,
      storedData: [],
    };
    this.FetchIsbn = this.FetchIsbn.bind(this);
    this.storeArray = this.storeArray.bind(this);
    this.deleteAllScannedGames = this.deleteAllScannedGames.bind(this);
  }

  componentDidMount() {
    this._requestCameraPermission();
  }

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === "granted"
    });
  };

  _handleBarCodeRead = data => {
    Alert.alert("Scan successful!", JSON.stringify(data));
  };

  storeArray(gameData) {
    let storedData = this.state.storedData
    if(storedData && storedData.length == 0 || !storedData.find(data => data.id == gameData.id)) {
      storedData.push(gameData)
      this.setState({storedData: storedData})
    }

    //Store the scanned game data in asyncstorage for scanhistory
    this.storeDataAsyncStorage(gameData) 
  }

  async storeDataAsyncStorage(gameData) {
    let storedData;
    try {
      storedData = JSON.parse(await AsyncStorage.getItem('ScanHistoryJS'))
    } catch(error) {
      console.log('[Scan] Storage Error In MultipleScanner')
    }

    if(!storedData) {
      await AsyncStorage.setItem('ScanHistoryJS', JSON.stringify([gameData]))
    } else if(!storedData.find(data => data.id == gameData.id)) {
      storedData.push(gameData)
      return await AsyncStorage.setItem('ScanHistoryJS', JSON.stringify(storedData));
    }
  }

  deleteAllScannedGames(){
    this.setState({storedData: []})
  }

  navigateToProductPage = game_id => {
    productLink(game_id)
      .then(async (response) => {
        if (response.status == 200) {
          // store before saving
          this.storeArray(response.data)
        }      
      })
      .catch(error => {
        console.log("Product link error new", error.message);
      });
  };

  handleBarCodeScanned = ({ type, data }) => {
    this.setState({ 
        scanned: true,
        scanCount: this.state.scanCount + 1 

    });
    this.FetchIsbn(data);
  };

  FetchIsbn(data) {
     if(data[0] == '0' && Platform.OS === "ios"){
          data = data.slice(1,data.length)
        }
    FetchIsbn(data)
      .then(response => {
        console.log("ISBN GET DATA", response.data);
        this.setState(
          {
            game_id: response.data.id
          },
          () => {
            this.navigateToProductPage(this.state.game_id);
          });
      })
      .catch(error => {
        console.log("[error] Game", error.message);
      });
  }

  render() {
    const { height, width } = Dimensions.get('window');
    const maskRowHeight = (height - 100) / 20;
    const maskColWidth = (width - 250) / 2;
     const { hasCameraPermission, scanned } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View style={styles.welcomeView}>


        <View style={styles.icons}>
            <Text style={[styles.image1Image,{color:"#fff",fontSize:20}]}>Scan: {this.state.storedData.length}</Text>
            <TouchableOpacity onPress = {() => {this.props.navigation.navigate("MultipleScanGame", {storedData: this.state.storedData, deleteAllScannedGames: this.deleteAllScannedGames})}}>

              <AntDesign
                name="closecircleo"
                size={25}
                color={"white"}
                style={styles.image2Image}
              />
            </TouchableOpacity>
        </View>
         <View style={styles.lableView}>
            <Text
              style={styles.labelText}>
              {`Move your device slowly until the code gets \ninto focus`}</Text>
          </View>
        <View
          style={{
            //flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}>
            <BarCodeScanner
              onBarCodeScanned={this.handleBarCodeScanned}
              style={styles.video_scanner}>
              <View style={styles.maskOutter}>
                <View style={[{ flex: 15 }, styles.maskRow, styles.maskFrame]} />
                 <View style={[{ flex: 20 }, styles.maskCenter]}>
                   <View style={[{ width: maskColWidth }, styles.maskFrame]} />
                   <View style={styles.maskInner} />
                  <View style={[{ width: maskColWidth }, styles.maskFrame]} />
                </View>
                 <View style={[{ flex: maskRowHeight }, styles.maskRow, styles.maskFrame]} />
              </View>
            </BarCodeScanner>    
        </View>
      </View>
    );
  }
}
