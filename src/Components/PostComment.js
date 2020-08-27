import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "../Styles/UjcfeedTabsstyles/ujcfeedTabsstyle";

import { FontAwesome, AntDesign, MaterialIcons } from "@expo/vector-icons";
function PostComment(props) {
  return (
    <View style={styles.CommentBox}>
      <MaterialIcons
        name="mode-comment"
        size={14}
        color={"rgba(0, 0, 0, 0.7)"}
      />
      <Text style={styles.Numbers}>{props.feedItem.commentCount}</Text>
    </View>
  );
}
export default PostComment;
