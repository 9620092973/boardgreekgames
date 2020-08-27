
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform
} from "react-native";
import styles from "../../Styles/UploadGameStyles/UploadGameCategoriesStyleSheet";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { TextInputLayout } from "rn-textinputlayout";
import { CustomTouchableIcon } from  "../../Components/Header/CustomTouchableIcon"
import { FontAwesome, AntDesign, EvilIcons,Ionicons } from "@expo/vector-icons";


export default class UploadGameCategories extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      categorie_game: "",
      Categorie: []
    };
    this.categorieGame = this.categorieGame.bind(this);
  }

  componentDidMount() {}

  categorieGame() {
    if (this.state.categorie_game.length >= 4) {
      this.props.navigation.navigate("UploadGameMechanisims", {
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
        Categorie: this.state.Categorie,
        gameImages: this.props.navigation.state.params.gameImages
      });
      let categorie_game = this.state.categorie_game;
      let Categorie = this.state.Categorie;
      Categorie.push(categorie_game);
      this.setState({ Categorie: Categorie }, () => {
      });
    }
  }

  onButtonTwoPressed = () => {};

  render() {
    return (
      <View style={styles.eventDetailView}>
       
        <Text style={styles.labelTwoText}>Game categories</Text>
        <View styles={styles.signUpFieldsView}>
          <TextInputLayout
            style={{
              marginStart: 20,
              marginEnd: 20
            }}
          >
            <TextInput
              autoCapitalize="none"
              multiline={true}
              returnKeyType="next"
              placeholder="Categories"
              onChangeText={categorie_game => this.setState({ categorie_game })}
              style={styles.textFieldTextInput}
            />
          </TextInputLayout>
        </View>
        <View style={{ marginTop: 20 }}>
          <TouchableOpacity
            onPress={this.onButtonTwoPressed}
            style={styles.buttonTwoButtonadd}
          >
            <Text style={styles.buttonTwoButtonTextadd}>+ Add</Text>
          </TouchableOpacity>
        </View>

        {this.state.categorie_game.length < 4 && (
          <TouchableOpacity
            onPress={this.categorieGame}
            style={styles.buttonTwoButton}
          >
            <Text style={styles.buttonTwoButtonText}>Next</Text>
          </TouchableOpacity>
        )}
        {this.state.categorie_game.length >= 4 && (
          <TouchableOpacity
            onPress={this.categorieGame}
            style={styles.categoriSuccessButton}
          >
            <Text style={styles.categoriButtonText}>Next</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}
