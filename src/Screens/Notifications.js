//
//  Notifications
//  ScanRelatedScreens
//
//  Created by Supernova.
//  Copyright © 2018 Supernova. All rights reserved.
//

import React from "react";
import styles from "../Styles/NotificationsStyles/NotificationsStyleSheet";
import {
  Image,
  Text,
  View,
  Platform,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { FontAwesome, AntDesign, EvilIcons, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import CameraRollPicker from "react-native-camera-roll-picker";
import { CustomTouchableIcon } from "../Components/Header/CustomTouchableIcon";

export default class Notifications extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      height: Platform.OS === 'ios' ? 55 : 65
    },
    headerLeft: (
      <View style={{ flexDirection: "row", alignItems: "center",marginLeft:8,marginRight:10 }}>

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
          Notifications
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
    this.state = {
      notificationData: [
        {
          image: require("../../assets/Image/avatar.png"),
          user: "Ponnappa Priya is following you",
          time: "Just now"
        },
        {
          image: require("../../assets/Image/Villains.jpeg"),
          user: "Tarryn Campbell is following you",
          time: "26 minutes ago"
        },
        {
          image: require("../../assets/Image/avatar.png"),
          user: "Ponnappa Priya is following you",
          time: "Just now"
        },
        {
          image: require("../../assets/Image/avatar.png"),
          user: " Ponnappa Priya is following you",
          time: "Just now"
        },
        {
          image: require("../../assets/Image/Villains.jpeg"),
          user: "Tarryn Campbell is following you",
          time: "26 minutes ago"
        },
        {
          image: require("../../assets/Image/avatar.png"),
          user: " Ponnappa Priya is following you",
          time: "Just now"
        },
        {
          image: require("../../assets/Image/avatar.png"),
          user: "Ponnappa Priya is following you",
          time: "Just now"
        },
        {
          image: require("../../assets/Image/Villains.jpeg"),
          user: "Tarryn Campbell is following you",
          time: "26 minutes ago"
        },
        {
          image: require("../../assets/Image/avatar.png"),
          user: "Ponnappa Priya is following you",
          time: "Just now"
        },
        {
          image: require("../../assets/Image/Villains.jpeg"),
          user: "Tarryn Campbell is following you",
          time: "26 minutes ago"
        }
      ]
    };
    this.notificationContent = this.notificationContent.bind(this);
  }

  notificationContent(items, index) {
    return (
      <View key={index}>
        <View style={styles.viewEightView} key={index}>
          <View style={styles.notified_view}>
            <Image source={items.image} style={styles.imageSixImage} />
          </View>
          <View style={styles.notified_text}>
            <Text style={styles.labelTwelveText}>{items.user}</Text>
            <Text style={styles.labelElevenText}>{items.time}</Text>
          </View>
        </View>
        <View style={styles.seperator3View} />
      </View>
    );
  }
  render() {
    return (
      <View style={styles.timelineView}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {this.state.notificationData &&
            this.state.notificationData.length > 0 ? (
              this.state.notificationData.map(this.notificationContent)
            ) : (
              <View style={{ padding: 25 }}>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 23,
                    color: "#ddd",
                    fontWeight: "bold"
                  }}
                >
                  Sorry, there are no notifications.
              </Text>
              </View>
            )}
        </ScrollView>
      </View>
    );
  }
}
