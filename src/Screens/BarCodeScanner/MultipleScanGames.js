

import { View, Text, TouchableOpacity, Image, Platform, ScrollView } from "react-native";
import React from "react";
import styles from "../../Styles/BarCodeScannerStyles/MultipleScanGamesStyleSheet";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign, MaterialIcons, EvilIcons, Ionicons } from "@expo/vector-icons";

export default class MultipleScanGames extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      storedData: this.props.navigation.state.params.storedData
    }
    this.deleteAll = this.deleteAll.bind(this)
  }

  componentDidMount() {
  }

  deleteAll() {
    this.props.navigation.state.params.deleteAllScannedGames()
    this.setState({storedData: []})
  }

  historyContent(items, index) {
    let card_image =
        items.card_image && items.card_image.length
          ? { uri: items.card_image[0] }
          : require("../../../assets/Image/ABCme.jpeg");

    return (
      <View>
        <TouchableOpacity>
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

                   </View>
          <View style={styles.separatorView} />
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.state.storedData &&
          this.state.storedData.length > 0 ? (
            <ScrollView showsVerticalScrollIndicator={false}>
            {this.state.storedData.map(this.historyContent)}
            </ScrollView>
          ) : (
            <View style={styles.ImageView}>
              <Image
                source={require("../../../assets/Image/no_game_scanned.png")}
                style={styles.imageImage}
              />
              <Text style={styles.labelText}> No games scanned yet</Text>
            </View>
          )}
        {/* end */}

        <View style={{ width: '100%', position:"absolute", bottom:0}}>
          <View style={styles.separatorView} />
          <View style={styles.ButtonStyles}>
            <View style={styles.deleteButton}>
              <TouchableOpacity onPress={this.deleteAll}>
                <Text style={styles.deleteButtonText}>Delete all</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.scanButton} >
              <TouchableOpacity onPress={() => { this.props.navigation.navigate("MultipleScanner") }}>
                <Text style={styles.scanButtonText}>Scan {'\n'} Barcode</Text>
              </TouchableOpacity>
            </View>
            
          </View>
        </View>
      </View>
    );
  }
}

/*
      It will be used in future.
      <TouchableOpacity style={styles.addcollectionButton}>
        <Text style={styles.addcollectionButtonText}>
          Add to collection all
           </Text>
      </TouchableOpacity>
*/
