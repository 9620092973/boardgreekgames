import React from "react";
import styles from "../../Styles/MyCollectionStyles/MyCollectionsStyleSheet";
import {
  Image,
  Text,
  View,
  Platform,
  TouchableOpacity,
  ScrollView,
  AsyncStorage,
  TouchableHighlight,
  Alert
} from "react-native";
import { productLink } from "../../Networks/DiscoveryCalls";
import { FontAwesome, AntDesign, EvilIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import CameraRollPicker from "react-native-camera-roll-picker";

export default class ScanHistory extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ScanHistoryData: []
    };
    this.historyContent = this.historyContent.bind(this);
    this.deleteGameAlert = this.deleteGameAlert.bind(this);
    this.renderDeleteGameFromCollection = this.renderDeleteGameFromCollection.bind(this);
    //this.navigateToProductPage = this.navigateToProductPage.bind(this);
  }

  async componentDidMount() {
    const scannedData = JSON.parse(await AsyncStorage.getItem('ScanHistoryJS'));
    if (scannedData) {
      this.setState({ ScanHistoryData: scannedData })
    }
  }

  deleteGameAlert(game_id) {
    Alert.alert(
      "Do you want to Delete",
      "This will remove this item from your collection",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "Delete",
          onPress: () => this.renderDeleteGameFromCollection(game_id)
        }
      ]
    );
  }

    async renderDeleteGameFromCollection(game_id) {
      let storedData;
      try {
        storedData = JSON.parse(await AsyncStorage.getItem('ScanHistoryJS'))
        console.log("stored data is",storedData)
        for(i=0;i<storedData.length;i++){
          if(game_id==storedData[i].id){  
            storedData.splice(i, 1); 
          }
        }      
      } catch(error) {
        console.log('[Scan] Storage Error')
      }
     this.setState({ ScanHistoryData: storedData })
      await AsyncStorage.setItem('ScanHistoryJS', JSON.stringify(storedData))
      }

  // navigateToProductPage(game_id) {
  //   console.log(game_id,"dataaaaaaaaaaaaaaaaaaaaaaaa")
  //   productLink(game_id)
  //     .then(response => {
  //       if (response.status == 200) {
  //         this.props.navigation.navigate("GameInfo", {
  //           productData: response.data,
  //           game_id: game_id
  //         });
  //       }
  //     })
  //     .catch(error => {
  //       console.log("error", error.message);
  //     });
  // }

  historyContent(items, index) {
    //console.log(items,"scanHistoryGamesssssssssssssssssssssssssss")
    let card_image =
      items.card_image && items.card_image.length
        ? { uri: items.card_image[0] }
        : require("../../../assets/Image/ABCme.jpeg");

    return (
      <View>
        <TouchableOpacity
          // onPress={() => {
          //   this.navigateToProductPage(items.id);
          // }}
          >
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={styles.GameImage}>
              <Image source={card_image} style={styles.imageViewContainer} />
            </View>
            <View style={styles.textViewContainer}>
              <Text>
                {items.name}
                <Text style={{ color: "#rgba(204, 202, 208, 0.95)" }}>
                  {" "}
                  ({items.year_published})
                </Text>
              </Text>
              <Text style={{ marginTop: 2 }}>
                {items.minimum_players}-{items.maximum_players} Players
              </Text>
            </View>

            <View style={styles.DltImage}>
              {/* delete icon */}
              <TouchableHighlight
                onPress={() => {
                  this.deleteGameAlert(items.id);
                }}
                underlayColor="rgba(0,0,0,0.08)"
                style={{
                  padding: 15,
                  borderRadius: 25,
                  backgroundColor: "white"
                }}
              >
                <Image
                  source={require("../../../assets/Image/delet.png")}
                  style={styles.imageViewDlt}
                />
              </TouchableHighlight>
            </View>
          </View>
          <View style={styles.separatorView} />
        </TouchableOpacity>
      </View>
    );
  }
  render() {
    return (
      <View style={styles.MainContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {this.state.ScanHistoryData &&
            this.state.ScanHistoryData.length > 0 ? (
              this.state.ScanHistoryData.map(this.historyContent)
            ) : (
              <View style={{ paddingVertical: 20 }}>
                <Text style={styles.historyText}>
                  Sorry, there is no scan history.
              </Text>
              </View>
            )}
        </ScrollView>
      </View>
    );
  }
}






