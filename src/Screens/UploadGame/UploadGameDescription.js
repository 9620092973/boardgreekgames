
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Platform
} from "react-native";
import React from "react";
import styles from "../../Styles/UploadGameStyles/UploadGameDescriptionStyleSheet";
import { LinearGradient } from "expo-linear-gradient";
import { CustomTouchableIcon } from  "../../Components/Header/CustomTouchableIcon"
import { FontAwesome, AntDesign, EvilIcons,Ionicons } from "@expo/vector-icons";


export default class UploadGameDescription extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      upload: ""
    };
    this.UploadButton = this.UploadButton.bind(this);
  }

  componentDidMount() {
    
  }

  UploadButton() {
    if (this.state.upload.length >= 4) {
      this.props.navigation.navigate("GameExtends", {
        GameName: this.props.navigation.state.params.GameName,
        selected_minimum_player: this.props.navigation.state.params
          .selected_minimum_player,
        selected_maximum_player: this.props.navigation.state.params
          .selected_maximum_player,
        selected_min_time: this.props.navigation.state.params.selected_min_time,
        selected_max_time: this.props.navigation.state.params.selected_max_time,
        selected_Age_item: this.props.navigation.state.params.selected_Age_item,
        selected_year: this.props.navigation.state.params.selected_year,
        Designing: this.props.navigation.state.params.Designing,
        game_Publisher: this.props.navigation.state.params.game_Publisher,
        Game_artist: this.props.navigation.state.params.Game_artist,
        Categorie: this.props.navigation.state.params.Categorie,
        Mechanisims: this.props.navigation.state.params.Mechanisims,
        upload: this.state.upload,
        gameImages: this.props.navigation.state.params.gameImages
      });
    }
  }

  render() {
    return (
      <View style={styles.loginView}>
        <Text style={styles.labelTwoText}>Game Description</Text>
        <View style={{ marginTop: 25, marginLeft: 10 }}>
          <TextInput
            style={styles.TextInputStyleClass}
            underlineColorAndroid="transparent"
            placeholderTextColor={"#9E9E9E"}
            numberOfLines={50}
            multiline={true}
            placeholder={"Leave a message"}
            onChangeText={upload => this.setState({ upload })}
          />
        </View>
        {this.state.upload.length < 4 && (
          <TouchableOpacity
            onPress={this.UploadButton}
            style={styles.buttonButton}>
            <Text style={styles.buttonButtonText}>Next</Text>
          </TouchableOpacity>
        )}
        {this.state.upload.length >= 4 && (
          <TouchableOpacity
            onPress={this.UploadButton}
            style={styles.categoriSuccessButton}>
            <Text style={styles.categoriButtonText}>Next</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}
