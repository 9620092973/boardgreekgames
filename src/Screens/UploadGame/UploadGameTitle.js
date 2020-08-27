
import {
  TextInput,
  Text,
  Image,
  TouchableOpacity,
  View,
  Platform
} from "react-native";
import React from "react";
import styles from "../../Styles/UploadGameStyles/UploadGameTitleStyleSheet";
import { LinearGradient } from "expo-linear-gradient";
import { TextInputLayout } from "rn-textinputlayout";
import { CustomTouchableIcon } from  "../../Components/Header/CustomTouchableIcon"
import { FontAwesome, AntDesign, EvilIcons,Ionicons } from "@expo/vector-icons";

export default class UploadGameTitle extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      GameName: ""
    };
    this.GameUploadName = this.GameUploadName.bind(this);
  }

  componentDidMount() {
    console.log("this.props.nav",this.props.navigation.state.params.gameImages)
  }
  GameUploadName() {
    if (this.state.GameName.length >= 4) {
      this.props.navigation.navigate("UploadGamePlayers", {
        GameName: this.state.GameName,
        gameImages: this.props.navigation.state.params.gameImages
      });
    
    }
  }

  render() {
    return (
      <View style={styles.loginView}>
        <Text style={styles.labelTwoText}>What’s the title of this game?</Text>

        <View style={styles.uploadeText}>
          <TextInputLayout style={{}}>
            <TextInput
              autoCapitalize="none"
              multiline={true}
              placeholder={"Name of the game"}
              onChangeText={GameName => this.setState({ GameName })}
              style={styles.textFieldTextInput}
            />
          </TextInputLayout>
        </View>
        {this.state.GameName.length < 4 && (
          <TouchableOpacity
            onPress={this.GameUploadName}
            style={styles.buttonButton}
          >
            <Text style={styles.buttonButtonText}>Next</Text>
          </TouchableOpacity>
        )}
        {this.state.GameName.length >= 4 && (
          <TouchableOpacity
            onPress={this.GameUploadName}
            style={styles.GameSuccessButton}
          >
            <Text style={styles.GameButtonText}>Next</Text>
          </TouchableOpacity>
        )}

      </View>
    );
  }
}
