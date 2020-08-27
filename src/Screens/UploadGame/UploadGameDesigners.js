
import {
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  Platform
} from "react-native";
import React from "react";
import styles from "../../Styles/UploadGameStyles/UploadGameDesignersStyleSheet";
import { LinearGradient } from "expo-linear-gradient";
import { TextInputLayout } from "rn-textinputlayout";
import { CustomTouchableIcon } from  "../../Components/Header/CustomTouchableIcon"
import { FontAwesome, AntDesign, EvilIcons,Ionicons } from "@expo/vector-icons";

export default class UploadGameDesigners extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      Gamedesign: "",
      Designing: []
    };
    this.gameDesignButton = this.gameDesignButton.bind(this);
    this.onChangeTextData = this.onChangeTextData.bind(this);
  }

  componentDidMount(value) {
   
  }

  onChangeTextData(value, index) {
    if (index == "Gamedesign") {
      this.setState(
        {
          Gamedesign: value
        }
      );
    }
  }

  onButtonTwoPressed = () => {};
  gameDesignButton() {
    if (this.state.Gamedesign.length >= 4) {
      this.props.navigation.navigate("UploadGamePublishers", {
        GameName: this.props.navigation.state.params.GameName,
        selected_minimum_player: this.props.navigation.state.params
          .selected_minimum_player,
        selected_maximum_player: this.props.navigation.state.params
          .selected_maximum_player,
        selected_min_time: this.props.navigation.state.params.selected_min_time,
        selected_max_time: this.props.navigation.state.params.selected_max_time,
        selected_Age_item: this.props.navigation.state.params.selected_Age_item,
        selected_year: this.props.navigation.state.params.selected_year,
        Designing: this.state.Designing,
        gameImages: this.props.navigation.state.params.gameImages
      });

      let newtext = this.state.Gamedesign;
      let Design_text = this.state.Designing;
      Design_text.push(newtext);
      this.setState({ Designing: Design_text });
    }
  }

  render() {
    let index = 0;
    return (
      <View style={styles.profileView}>

        <Text style={styles.labelTwoText}>Game designers</Text>

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
              placeholder={"Name of the designer"}
              onChangeText={Gamedesign => this.setState({ Gamedesign })}
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

        {this.state.Gamedesign.length < 4 && (
          <TouchableOpacity
            onPress={this.gameDesignButton}
            style={styles.buttonButton}
          >
            <Text style={styles.buttonButtonText}>Next</Text>
          </TouchableOpacity>
        )}
        {this.state.Gamedesign.length >= 4 && (
          <TouchableOpacity
            onPress={this.gameDesignButton}
            style={styles.GameDesignSuccessButton}
          >
            <Text style={styles.GameDesignButtonText}>Next</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}
