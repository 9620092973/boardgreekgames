//
// Feedback
// DoubleCritical
//
// Created by Supernova.
// Copyright © 2018 Supernova. All rights reserved.
//

import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
  Platform
} from "react-native";
import React from "react";
import styles from "../Styles/FeedbackStyles/FeedbackStyleSheet";
import { RadioGroup } from "react-native-btr";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome, AntDesign, EvilIcons, Ionicons } from "@expo/vector-icons";
import { CustomTouchableIcon } from "../Components/Header/CustomTouchableIcon";

export default class Feedback extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      height: Platform.OS === 'ios' ? 55 : 65
    },
    headerLeft: (
      <View style={{ flexDirection: "row", alignItems: "center",marginLeft:10,marginRight:10 }}>
        <CustomTouchableIcon onPress={() => navigation.goBack()}>
          <Ionicons name="ios-arrow-back" size={25} color={"white"} />
        </CustomTouchableIcon>

        <Text
          style={{
            marginBottom: Platform.OS === 'ios' ? 6 : null,
            color: "#fff",
            fontWeight: "bold",
            fontSize: 18,
          }}>
          Feedback
        </Text>
      </View>
    ),
    headerRight: (
    <View style={{marginRight:10}}>
      <CustomTouchableIcon
        onPress={() => {
          navigation.navigate("Search");
        }}
      >
        <EvilIcons name="search" size={28} color={"white"} />
      </CustomTouchableIcon>
      </View>
    ),
    headerBackground: (
      <LinearGradient
        colors={["#001a33", "#004f99"]}
        style={{ flex: 1 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      />
    ),

    headerBackTitle: null,

    headerTintColor: "white"
  });

  constructor(props) {
    super(props);
    this.onSelect = this.onSelect.bind(this);

    this.state = {
      radioButtons: [
        {
          label: "Login Trouble",
          flexDirection: "row",
          size: 8
        },

        {
          label: "Game Related",
          flexDirection: "row",
          size: 8,
          flexDirection: "row"
        },

        {
          label: "Personal Profile",
          flexDirection: "row",
          size: 8,
          flexDirection: "row"
        },
        {
          label: "Other Issues And Suggestions",
          flexDirection: "row",
          size: 8,
          flexDirection: "row"
        }
      ]
    };
  }

  componentDidMount() { }
  getChecked = value => {
    console.log(value);
  };
  onSelect(index, value) { }
  getChecked = value => {
    console.log(value);
  };
  onSelect(index, value) {
    // this.setState({
    //   text: `Selected index: ${index} , value: ${value}`
    // })
  }

  render() {
    return (
      <View style={styles.FeedbackMainview}>
        <Text
          style={{
            marginTop: 20,
            color: "rgba(0, 0, 0, 0.78)",
            fontSize: 17,
            fontWeight: "bold"
          }}
        >
          Please select the type of the feedback
        </Text>
        <ScrollView>
          <View style={styles.FeedbackRadioBUtton}>
            <View>
              <RadioGroup
                color="#0277BD"
                labelStyle={{ fontSize: 14 }}
                radioButtons={this.state.radioButtons}
                style={{ paddingTop: 20 }}
              />
            </View>

            <Text style={styles.labelSevenText}>
              Please briefly describe the issue
            </Text>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Leave a message"
              multiline={true}
              numberOfLines={5}
              style={styles.textFieldTextInput}
            />
            <View style={styles.viewThreeView} />
            <Text style={styles.labelEightText}>
              Upload screenshots ( optional )
            </Text>
            <TouchableOpacity style={{ marginTop: 20 }}>
              <Image source={require("../../assets/Image/Group762.png")} />
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View style={styles.Feedbacksubmit}>
          <TouchableOpacity style={styles.buttonButton}>
            <Text style={styles.buttonButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
