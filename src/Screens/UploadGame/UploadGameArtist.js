
import {
  Text,
  TouchableOpacity,
  TextInput,
  View,
  Platform
} from "react-native";
import styles from "../../Styles/UploadGameStyles/UploadGameArtistStyleSheet";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { TextInputLayout } from "rn-textinputlayout";
import { FontAwesome, AntDesign, EvilIcons,Ionicons } from "@expo/vector-icons";
import { CustomTouchableIcon } from  "../../Components/Header/CustomTouchableIcon"


export default class UploadGameArtist extends React.Component {
  

  constructor(props) {
    super(props);
    this.state = {
      ArtistGame: "",
      Game_artist: []
    };
    this.ArtistGameNavigation = this.ArtistGameNavigation.bind(this);
  }

  componentDidMount() {}

  onButtonTwoPressed = () => {};
  ArtistGameNavigation() {
    if (this.state.ArtistGame.length >= 4) {
      this.props.navigation.navigate("UploadGameCategories", {
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
        Game_artist: this.state.Game_artist,
        gameImages: this.props.navigation.state.params.gameImages
      });
      let ArtistGame = this.state.ArtistGame;
      let Game_artist = this.state.Game_artist;
      Game_artist.push(ArtistGame);
      this.setState({ Game_artist: Game_artist }, () => {
      });
    }
  }
  render() {
    return (
      <View style={styles.messagesView}>
        <Text style={styles.labelTwoText}>Artist</Text>
        <View styles={styles.signUpFieldsView}>
          <TextInputLayout
            style={{
              marginStart: 20,
              marginEnd: 20
            }}>
            <TextInput
              autoCapitalize="none"
              multiline={true}
              //returnKeyType="next"
              placeholder={"Artist name"}
              onChangeText={ArtistGame => this.setState({ ArtistGame })}
              style={styles.textFieldTextInput}
            />
          </TextInputLayout>
        </View>
        <View style={{ marginTop: 20 }}>
          <TouchableOpacity
            onPress={this.onButtonTwoPressed}
            style={styles.buttonTwoButton}
          >
            <Text style={styles.buttonTwoButtonText}>+ Add</Text>
          </TouchableOpacity>
        </View>

        {this.state.ArtistGame.length < 4 && (
          <TouchableOpacity
            onPress={this.ArtistGameNavigation}
            style={styles.buttonButton}
          >
            <Text style={styles.buttonButtonText}>Next</Text>
          </TouchableOpacity>
        )}
        {this.state.ArtistGame.length >= 4 && (
          <TouchableOpacity
            onPress={this.ArtistGameNavigation}
            style={styles.GameDesignSuccessButton}
          >
            <Text style={styles.GameDesignButtonText}>Next</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}
