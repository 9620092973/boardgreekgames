import * as React from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import Modal from "react-native-modal";
import { Entypo } from "@expo/vector-icons";
import { fetchingSearchFilterData } from "../Networks/LandingLoggedinCalls";
import { Dropdown } from "react-native-material-dropdown";
import { Ionicons } from "@expo/vector-icons";

import modal_styles from "../Styles/UploadGameStyles/UploadGamePlayersStyleSheet.js";
import { CustomTouchableIcon } from "./Header/CustomTouchableIcon";
export default class SearchFilterModal extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerBackTitle: null,
    header: null
  });

  constructor(props) {
    super(props);
    this.state = {
      hide_Categories: false,
      category_show: false,
      screenWidth: null,
      screenHeight: null,
      min_Player: [],
      max_Player: [],
      Age_items: [],
      min_time: [],
      max_time: [],
      start_year: [],
      end_year: [],
      selected_minimum_player: "",
      selected_maximum_player: "",
      selected_min_time: "",
      selected_max_time: "",
      selected_Age_item: "",
      selected_start_year: "",
      selected_end_year: ""
    };
    this.fetchSearchFilterData = this.fetchSearchFilterData.bind(this);
    this.FilterIconModalContent = this.FilterIconModalContent.bind(this);
    this.PlayerNumber = this.PlayerNumber.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
  }

  componentDidMount() {
    //Modal dropdowns
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
    this.setState({
      max_time: max_time
    });

    let current_date = new Date();
    let current_year = current_date.getFullYear();
    var start_year = [];
    for (var i = 1700; i <= current_year; i = i + 1) {
      start_year.push({ value: i.toString() });
    }
    this.setState({
      start_year: start_year
    });
    var end_year = [];
    for (var i = 1800; i <= current_year; i = i + 1) {
      end_year.push({ value: i.toString() });
    }
    this.setState({
      end_year: end_year
    });
  }

  fetchSearchFilterData() {
    fetchingSearchFilterData(
      this.state.selected_minimum_player,
      this.state.selected_maximum_player,
      this.state.selected_min_time,
      this.state.selected_max_time,
      this.state.selected_Age_item,
      this.state.selected_start_year,
      this.state.selected_end_year
    )
      .then(response => {
        this.props.filterData(response.data);
        this.props.setModalVisible(!this.props.modalVisible);
      })
      .catch(error => {
        console.log("@Error [SearchFilter]", error.message);
      });
  }

  onChangeText(value, selected_item) {
    if (selected_item == "selected_minimum_player") {
      this.setState({
        selected_minimum_player: value
      });
    } else if (selected_item == "selected_maximum_player") {
      this.setState({
        selected_maximum_player: value
      });
    } else if (selected_item == "selected_min_time") {
      this.setState({
        selected_min_time: value
      });
    } else if (selected_item == "selected_max_time") {
      this.setState({
        selected_max_time: value
      });
    } else if (selected_item == "selected_Age_item") {
      this.setState({
        selected_Age_item: value
      });
    } else if (selected_item == "selected_start_year") {
      this.setState({
        selected_start_year: value
      });
    } else if (selected_item == "selected_end_year") {
      this.setState({
        selected_end_year: value
      });
    }
  }
  PlayerNumber() {
    return (
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <View style={{ width: "45%" }}>
          <Dropdown
            label="Min"
            value={this.state.selected_minimum_player}
            data={this.state.min_Player}
            onChangeText={value => {
              this.onChangeText(value, "selected_minimum_player");
            }}
          />
        </View>
        <View style={{ width: "45%" }}>
          <Dropdown
            label="Max"
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
  FilterIconModalContent() {
    return (
      <View style={modal_styles.signupView}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            right: "2%",
            marginTop: "3%",
            height: 50
          }}
        >
          <TouchableOpacity
            onPress={() => {
              this.props.setModalVisible(!this.props.modalVisible);
            }}
          >
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
             <Ionicons name="ios-close" size={35} color={"black"} />
            <Text
              style={{
                marginLeft:10,
                color: "black",
                fontSize: 18
              }}
            >
             Close
            </Text>
            </View>
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ width: "100%" }}>
          <View style={{flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center"}}>
            <Text style={modal_styles.labelFourText}>Minimum age</Text>
            <View style={{ width: "60%" }}>
              <Dropdown
                label="Select"
                data={this.state.Age_items}
                value={this.state.selected_Age_item}
                onChangeText={value => {
                  this.onChangeText(value, "selected_Age_item");
                }}
              />
             </View> 
            </View>
            <Text style={modal_styles.labelFourText}>Players range</Text>
            <View>{this.PlayerNumber()}</View>

            <Text style={modal_styles.labelFourText}>Playing time range</Text>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <View style={{ width: "45%" }}>
                <Dropdown
                  label="Min"
                  data={this.state.min_time}
                  value={this.state.selected_min_time}
                  onChangeText={value => {
                    this.onChangeText(value, "selected_min_time");
                  }}
                />
              </View>

              <View style={{ width: "45%" }}>
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
            <Text style={modal_styles.labelFourText}>Year published range</Text>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <View style={{ width: "45%" }}>
                <Dropdown
                  label="Select year"
                  data={this.state.start_year}
                  value={this.state.selected_start_year}
                  onChangeText={value => {
                    this.onChangeText(value, "selected_start_year");
                  }}
                />
              </View>
              <View style={{ width: "45%" }}>
                <Dropdown
                  label="Select year"
                  data={this.state.end_year}
                  value={this.state.selected_end_year}
                  onChangeText={value => {
                    this.onChangeText(value, "selected_end_year");
                  }}
                />
              </View>
            </View>

            {/* This part needs to be added in next phase "don't remove this code" */}
            {/* 
            <View
              style={{
                marginTop:20,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  this.props.setModalVisible(!this.props.modalVisible);
                }}
              >
                <Text style={modal_styles.categoryMechanicBox}>
                  Game Category
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.props.setModalVisible(!this.props.modalVisible);
                }}
              >
                <Entypo size={28} name="plus" />
              </TouchableOpacity>
            </View>
            <View
              style={{
                marginTop:20,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <TouchableOpacity>
                <Text style={modal_styles.categoryMechanicBox}>
                  Game Mechanic
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Entypo size={28} name="plus" />
              </TouchableOpacity>
            </View> */}
            <TouchableOpacity
              onPress={this.fetchSearchFilterData}
              style={modal_styles.FilterBtn}
            >
              <Text style={{ fontSize: 16, color: "#fff" }}>Search</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
  render() {
    return (
      <View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.props.modalVisible}
          backdropOpacity={0.1}
          onRequestClose={() => {}}
          style={{
            justifyContent: "center",
            margin: 0
          }}
        >
          {this.FilterIconModalContent()}
        </Modal>
      </View>
    );
  }
}
