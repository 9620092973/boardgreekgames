import styles from "../../Styles/UploadGameStyles/GameExtendsStyleSheet";
import {
  TextInput,
  Text,
  TouchableOpacity,
  View,
  Platform,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import React from "react";
import { UploadGames } from "../../Networks/UploadGamesCalls";
import { LinearGradient } from "expo-linear-gradient";
import { CustomTouchableIcon } from  "../../Components/Header/CustomTouchableIcon"
import { FontAwesome, AntDesign, EvilIcons,Ionicons } from "@expo/vector-icons";
export default class UploadGame extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      Barcode_ID: "",
      Expands: "",
      Expansion: "",
      Integrated_with: "",
      Contains: "",
      Contained_in: "",
      Reimplemented_by: "",
      Reimplements: "",
      Family: "",
      Note_to_admin: "",
      Video_game_adaption: ""
    };
    this.GameExtends = this.GameExtends.bind(this);
  }

  GameExtends() {
    if (
      this.state.Barcode_ID &&
      this.state.Expands &&
      this.state.Expansion &&
      this.state.Integrated_with &&
      this.state.Contains &&
      this.state.Contained_in &&
      this.state.Reimplemented_by &&
      this.state.Reimplements &&
      this.state.Family &&
      this.state.Note_to_admin &&
      this.state.Video_game_adaption
    )
      UploadGames(
        this.props.navigation.state.params.GameName,
        this.props.navigation.state.params.selected_minimum_player,
        this.props.navigation.state.params.selected_maximum_player,
        this.props.navigation.state.params.selected_min_time,
        this.props.navigation.state.params.selected_max_time,
        this.props.navigation.state.params.selected_Age_item,
        this.props.navigation.state.params.selected_year,
        this.props.navigation.state.params.Designing,
        this.props.navigation.state.params.game_Publisher,
        this.props.navigation.state.params.Game_artist,
        this.props.navigation.state.params.Categorie,
        this.props.navigation.state.params.Mechanisims,
        this.props.navigation.state.params.upload,
        this.state.Barcode_ID,
        this.state.Expands,
        this.state.Expansion,
        this.state.Integrated_with,
        this.state.Contains,
        this.state.Contained_in,
        this.state.Reimplemented_by,
        this.state.Reimplements,
        this.state.Family,
        this.state.Note_to_admin,
        this.state.Video_game_adaption,
        this.props.navigation.state.params.gameImages
      )
        .then(response => {
          console.log("@Success [GameExtends]")
          this.props.navigation.navigate("AddGameFinish");
        })
        .catch(error => {
          console.log("@Error [GameExtends]", error.message);
        });
  }

  render() {
    return (
      <View style={styles.welcomeView}>
        <View
          pointerEvents="box-none"
          style={{
            marginTop: 15
          }}>
          <Text style={styles.labelText}>Mandatory fields </Text>
          <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
            <ScrollView>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Barcode ID"
                onChangeText={Barcode_ID => this.setState({ Barcode_ID })}
                style={styles.textFieldTwoTextInput}
              />
              <View style={styles.viewThreeView} />
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Expansion"
                onChangeText={Expansion => this.setState({ Expansion })}
                style={styles.textFieldTextInput}
              />
              <View style={styles.viewTwelveView} />
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Expands"
                onChangeText={Expands => this.setState({ Expands })}
                style={styles.textFieldTwoTextInput}
              />
              <View style={styles.viewThreeView} />
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Integrated with"
                onChangeText={Integrated_with =>
                  this.setState({ Integrated_with })
                }
                style={styles.textFieldTenTextInput}
              />
              <View style={styles.viewElevenView} />
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Contains"
                onChangeText={Contains => this.setState({ Contains })}
                style={styles.textFieldNineTextInput}
              />
              <View style={styles.viewTenView} />
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Contained in"
                onChangeText={Contained_in => this.setState({ Contained_in })}
                style={styles.textFieldEightTextInput}
              />
              <View style={styles.viewNineView} />
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Reimplemented by"
                onChangeText={Reimplemented_by =>
                  this.setState({ Reimplemented_by })
                }
                style={styles.textFieldSevenTextInput}
              />
              <View style={styles.viewEightView} />
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Reimplements"
                onChangeText={Reimplements => this.setState({ Reimplements })}
                style={styles.textFieldSixTextInput}
              />
              <View style={styles.viewSevenView} />
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Family"
                onChangeText={Family => this.setState({ Family })}
                style={styles.textFieldFiveTextInput}
              />
              <View style={styles.viewSixView} />
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Note to admin"
                onChangeText={Note_to_admin => this.setState({ Note_to_admin })}
                style={styles.textFieldFourTextInput}
              />
              <View style={styles.viewFiveView} />
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Video game adaption"
                //keyboardType={"number-pad"}
                onChangeText={Video_game_adaption =>
                  this.setState({ Video_game_adaption })
                }
                style={styles.textFieldThreeTextInput}
              />
              <View style={styles.viewFourView} />
              <View style={{ paddingBottom: 100 }}>
                {(this.state.Barcode_ID ==""||
                  this.state.Expands == "" ||
                  this.state.Expansion == "" ||
                  this.state.Integrated_with == "" ||
                  this.state.Contains == "" ||
                  this.state.Contained_in == "" ||
                  this.state.Reimplemented_by == "" ||
                  this.state.Reimplements == "" ||
                  this.state.Family == "" ||
                  this.state.Note_to_admin == "" ||
                  this.state.Video_game_adaption == "") && (
                  <TouchableOpacity
                    style={styles.buttonButton}
                    onPress={this.GameExtends}
                  >
                    <Text style={styles.buttonButtonText}>Upload</Text>
                  </TouchableOpacity>
                )}
                {this.state.Barcode_ID != "" &&
                  this.state.Expands != "" &&
                  this.state.Expansion != "" &&
                  this.state.Integrated_with != "" &&
                  this.state.Contains != "" &&
                  this.state.Contained_in != "" &&
                  this.state.Reimplemented_by != "" &&
                  this.state.Reimplements != "" &&
                  this.state.Family != "" &&
                  this.state.Note_to_admin != "" &&
                  this.state.Video_game_adaption != "" && (
                    <TouchableOpacity
                      style={styles.buttonButtonExtends}
                      onPress={this.GameExtends}>
                      <Text style={styles.buttonButtonExtendsText}>Upload</Text>
                    </TouchableOpacity>
                  )}
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </View>
    );
  }
}
