/**
 * Component Name: PostCreatedTime.js
 * Purpose: To display the Game review posted time
 */
import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "../Styles/UjcfeedTabsstyles/ujcfeedTabsstyle";
import { FontAwesome, AntDesign, MaterialIcons } from "@expo/vector-icons";
import { DisplayFormatedTime } from "../Utils";

export default class PostCreatedTime extends Component {
  constructor(props) {
    super(props);
  }
    
  render() {
    const { feedItem } = this.props;
    return (
      <View>
        <Text style={styles.NameAndTime}>
          {feedItem.user} - {DisplayFormatedTime(feedItem.time)}
        </Text>
      </View>
    );
  }
}
