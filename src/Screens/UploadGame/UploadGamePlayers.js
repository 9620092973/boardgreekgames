
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform
} from "react-native";
import styles from "../../Styles/UploadGameStyles/UploadGamePlayersStyleSheet";
import React from "react";
import { Dropdown } from "react-native-material-dropdown";
import { LinearGradient } from "expo-linear-gradient";
import { CustomTouchableIcon } from  "../../Components/Header/CustomTouchableIcon"
import { FontAwesome, AntDesign, EvilIcons,Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

export default class UploadGamePlayers extends React.Component {

  constructor() {
    super();
    this.state = {
      min_Player: [],
      max_Player: [],
      Age_items: [],
      min_time: [],
      max_time: [],
      selected_minimum_player: "",
      selected_maximum_player: "",
      selected_min_time: "",
      selected_max_time: "",
      selected_Age_item: "",
      selected_year: ""
    };
    this.PlayerButtonPressed = this.PlayerButtonPressed.bind(this);
    this.PlayerNumber = this.PlayerNumber.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
  }

  componentDidMount() {
    var Age_items = [];
    for (var i = 0; i <= 100; i = i + 1) {
      Age_items.push({ value: i.toString() + "+" });
    }
    this.setState({
      Age_items: Age_items
    });

    var min_Player = [];
    for (var i = 0; i <= 50; i = i + 1) {
      min_Player.push({ value: i.toString() });
    }
    this.setState({
      min_Player: min_Player
    });
    var max_Player = [];
    for (var i = 0; i <= 50; i = i + 1) {
      max_Player.push({ value: i.toString() });
    }
    this.setState({
      max_Player: max_Player
    });
    var min_time = [];
    for (var i = 0; i <= 100; i = i + 1) {
      min_time.push({ value: i.toString() });
    }
    this.setState({
      min_time: min_time
    });
    var max_time = [];
    for (var i = 0; i <= 100; i = i + 1) {
      max_time.push({ value: i.toString() });
    }
    this.setState(
      {
        max_time: max_time
      },
      () => {
      }
    );
  }

  PlayerButtonPressed() {
    if (
      this.state.selected_minimum_player &&
      this.state.selected_maximum_player &&
      (this.state.selected_min_time && this.state.selected_max_time) &&
      this.state.selected_Age_item
    ) {
      this.props.navigation.navigate("UploadGameDesigners", {
        GameName: this.props.navigation.state.params.GameName,
        selected_minimum_player: this.state.selected_minimum_player,
        selected_maximum_player: this.state.selected_maximum_player,
        selected_min_time: this.state.selected_min_time,
        selected_max_time: this.state.selected_max_time,
        selected_Age_item: this.state.selected_Age_item,
        selected_year: this.state.selected_year,
        gameImages: this.props.navigation.state.params.gameImages
      });
    }
  }
  onChangeText(value, selected_item) {
    if (selected_item == "selected_minimum_player") {
      this.setState(
        {
          selected_minimum_player: value
        }
      );
    } else if (selected_item == "selected_maximum_player") {
      this.setState(
        {
          selected_maximum_player: value
        }
      );
    } else if (selected_item == "selected_min_time") {
      this.setState(
        {
          selected_min_time: value
        }
      );
    } else if (selected_item == "selected_max_time") {
      this.setState(
        {
          selected_max_time: value
        }
      );
    } else if (selected_item == "selected_Age_item") {
      this.setState(
        {
          selected_Age_item: value
        }
      );
    }
  }
  PlayerNumber() {
    return (
      <View
        pointerEvents="box-none"
        style={{
          flexDirection: "row"
        }}
      >
        <View style={{ width: 135, marginLeft: 8 }}>
          <Dropdown
            label="Min Player"
            value={this.state.selected_minimum_player}
            data={this.state.min_Player}
            onChangeText={value => {
              this.onChangeText(value, "selected_minimum_player");
            }}
          />
        </View>
        <Text style={styles.labelTwoText}>To</Text>
        <View style={{ width: 135, marginLeft: 8 }}>
          <Dropdown
            label="Max Player"
            data={this.state.max_Player}
            value={this.state.selected_maximum_player}
            onChangeText={value => {
              this.onChangeText(value, "selected_maximum_player");
            }}
          />
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.signupView}>
        <ScrollView>
        <View
          pointerEvents="box-none"
          style={{
           // height: 577
          }}>
          <View
            pointerEvents="box-none"
            style={{
              // position: "absolute",
              // left: 14,
              // right: 19,
              // top: 22,
              // height: 480
            }} >
            <Text style={styles.labelFourText}>Published year</Text>
            <View>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Published year"
                keyboardType={"number-pad"}
                 returnKeyType="done"
                onChangeText={selected_year => this.setState({ selected_year })}
                style={styles.textFieldTextInput}
              />
              <View style={styles.viewTwelveView} />
            </View>
            <Text style={styles.labelFiveText}>No. of Players?</Text>
            <View>{this.PlayerNumber()}</View>
            <Text style={styles.labelThreeText}>Min playing time</Text>
            <View
              pointerEvents="box-none"
              style={{
                flexDirection: "row"
              }} >
              <View style={{ width: 135, marginLeft: 8 }}>
                <Dropdown
                  label="Min"
                  data={this.state.min_time}
                  value={this.state.selected_max_time}
                  onChangeText={value => {
                    this.onChangeText(value, "selected_min_time");
                  }}
                />
              </View>
              <Text style={styles.labelTwoText}>To</Text>
              <View style={{ width: 135, marginLeft: 8 }}>
                <Dropdown
                  label="Max"
                  data={this.state.max_time}
                  value={this.state.selected_max_time}
                  onChangeText={value => {
                    this.onChangeText(value, "selected_max_time");
                  }}
                />
              </View>
            </View>
            <Text style={styles.labelFourText}>Min age</Text>
            <View>
              <Dropdown
                label="Select Age"
                data={this.state.Age_items}
                value={this.state.selected_Age_item}
                onChangeText={value => {
                  this.onChangeText(value, "selected_Age_item");
                }}
              />
            </View>
            {(this.state.selected_year == "" ||
              this.state.selected_year == null ||
              (this.state.selected_minimum_player == "" ||
                this.state.selected_maximum_player == null ||
                this.state.selected_maximum_player == "" ||
                this.state.selected_maximum_player == null) ||
              (this.state.selected_min_time == "" ||
                this.state.selected_min_time == null ||
                this.state.selected_max_time == "" ||
                this.state.selected_max_time == null) ||
              this.state.selected_Age_item == "" ||
              this.state.selected_Age_item == null) && (
              <TouchableOpacity
                onPress={this.PlayerButtonPressed}
                style={styles.buttonButton}>
                <Text style={styles.buttonButtonText}>Next</Text>
              </TouchableOpacity>
            )}
            {this.state.selected_year != "" &&
              this.state.selected_year != null &&
              (this.state.selected_minimum_player != "" &&
                this.state.selected_minimum_player != null &&
                this.state.selected_maximum_player != "" &&
                this.state.selected_maximum_player != null) &&
              (this.state.selected_min_time != "" &&
                this.state.selected_min_time != null &&
                this.state.selected_max_time != "" &&
                this.state.selected_max_time != null) &&
              this.state.selected_Age_item != "" &&
              this.state.selected_Age_item != null && (
                <TouchableOpacity
                  onPress={this.PlayerButtonPressed}
                  style={styles.uploadButton} >
                  <Text style={styles.uploadButtonText}>Next</Text>
                </TouchableOpacity>
              )}
          </View>
        </View>
        </ScrollView>
      </View>
    );
  }
}
