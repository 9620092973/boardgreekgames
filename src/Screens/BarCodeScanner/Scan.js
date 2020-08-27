
import { Text, View, TouchableOpacity, Platform, Alert,Dimensions, AsyncStorage,Button } from "react-native";
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
import { withNavigationFocus } from 'react-navigation'


 class Scan extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasCameraPermission: null,
      game_id: "",
      user_id: "",
      productData: [],
      scanned: false,
      scan_type:''

    };
    this.FetchIsbnCode = this.FetchIsbnCode.bind(this);
    this.navigateToProductPage = this.navigateToProductPage.bind(this)
    this.handleBarCodeScanned = this.handleBarCodeScanned.bind(this)
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

  async storeArray(gameData) {
    let storedData;
    try {
      storedData = JSON.parse(await AsyncStorage.getItem('ScanHistoryJS'))
    } catch(error) {
      console.log('[Scan] Storage Error')
    }

    if(!storedData) {
      await AsyncStorage.setItem('ScanHistoryJS', JSON.stringify([gameData]))
    } else if(!storedData.find(data => data.id == gameData.id)) {
      storedData.push(gameData)
      return await AsyncStorage.setItem('ScanHistoryJS', JSON.stringify(storedData));
    }
  }

  navigateToProductPage = game_id => {
    productLink(game_id)
      .then(async (response) => {
        console.log("[Success] ProductData")
        if (response.status == 200) {
          // store before saving
          this.storeArray(response.data)
          this.setState({scanned:false,scan_type:response.data.scan_type},() => {
            console.log("scan type data",this.state.scan_type)
          })

          this.props.navigation.navigate("BarCodeGame", {
            productData: response.data,
            game_id: game_id
          });
        }       
      })
      .catch(error => {
        console.log("[error] productData", error.message);
        this.setState({scanned: false})
      });
  };

  handleBarCodeScanned = ({ type, data }) => {
    //this.setState({scanned: true })
   //alert(`Bar code with type ${type} and data ${data} has been scanned!`);

    if(!this.state.scanned){
      this.setState({ scanned: true });
      this.FetchIsbnCode({type, data}); 
    }
  
  };

  FetchIsbnCode({type, data}) {
    //let type = "UPC"
        if(data[0] == '0' && Platform.OS === "ios"){
          data = data.slice(1,data.length)
        }
        console.log("data1234",data)
    FetchIsbn(data)
      .then(response => {
        console.log("data of response",data)
        if(response.status == 200){
        this.setState(
          {
            game_id: response.data.id
          },
          () => {
            this.navigateToProductPage(this.state.game_id);
          }
        );
        }
      })
      .catch(error => {
        console.log("[error] Game", error.message);
        if(error){
          this.setState({scanned:false})
         this.props.navigation.navigate("AddGame");
        }
      });
  }

  render() {
    const { isFocused } = this.props
    const { height, width } = Dimensions.get('window');
    const maskRowHeight = (height - 200) / 20;
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


      {/* just commented the code it is  useful*/}

        {/* <View style={styles.icons}>
                <Ionicons
                  name="ios-flash-off"
                  size={25}
                  color={"white"}
                  style={styles.image1Image}
                />

                <AntDesign
                  name="questioncircle"
                  size={25}
                  color={"white"}
                  style={styles.image2Image}
                />
              </View>*/}
        <View style={styles.lableView}>
            <Text style={styles.labelText}>
              {`Move your device slowly until the code gets \ninto focus`}
            </Text>
        </View>

        <View
          style={{
            //flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}>
          {isFocused &&
          <BarCodeScanner
            onBarCodeScanned={this.handleBarCodeScanned}
            // barCodeScannerSettings={{
            //           barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr]
            //           }}
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
             </BarCodeScanner> }
        </View>

      </View>
    );    
  }
}
export default withNavigationFocus(Scan)
