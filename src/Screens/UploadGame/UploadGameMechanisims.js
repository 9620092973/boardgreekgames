
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Platform
} from "react-native";
import styles from "../../Styles/UploadGameStyles/UploadGameMechanisimsStyleSheet";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { TextInputLayout } from "rn-textinputlayout";
import { CustomTouchableIcon } from  "../../Components/Header/CustomTouchableIcon"
import { FontAwesome, AntDesign, EvilIcons,Ionicons } from "@expo/vector-icons";
export default class UploadGameMechanisims extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      game_mechanisim: "",
      Mechanisims: []
    };
    this.GameMechanisim = this.GameMechanisim.bind(this);
  }

  componentDidMount() {}

  onButtonTwoPressed = () => {};

  GameMechanisim() {
    if (this.state.game_mechanisim.length >= 4) {
      this.props.navigation.navigate("UploadGameDescription", {
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
        Mechanisims: this.state.Mechanisims,
        gameImages: this.props.navigation.state.params.gameImages
      });
      let game_mechanisim = this.state.game_mechanisim;
      let Mechanisims = this.state.Mechanisims;
      Mechanisims.push(game_mechanisim);
      this.setState({ Mechanisims: Mechanisims }, () => {
      });
    }
  }

  render() {
    return (
      <View style={styles.welcomeView}>
        <Text style={styles.labelTwoText}>Game Mechanisims</Text>
        <View styles={styles.signUpFieldsView}>
          <TextInputLayout
            style={{
              marginStart: 20,
              marginEnd: 20
            }}>
            <TextInput
              autoCapitalize="none"
              multiline={true}
              returnKeyType="next"
              placeholder={"Game Mechanisims"}
              onChangeText={game_mechanisim =>
                this.setState({ game_mechanisim })
              }
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
        {this.state.game_mechanisim.length < 4 && (
          <TouchableOpacity
            onPress={this.GameMechanisim}
            style={styles.buttonTwoButton}>
            <Text style={styles.buttonTwoButtonText}>Next</Text>
          </TouchableOpacity>
        )}
        {this.state.game_mechanisim.length >= 4 && (
          <TouchableOpacity
            onPress={this.GameMechanisim}
            style={styles.categoriSuccessButton} >
            <Text style={styles.categoriButtonText}>Next</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}
