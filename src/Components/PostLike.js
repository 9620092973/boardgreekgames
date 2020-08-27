/**
 * Component Name: PostLike.js
 *
 * Purpose: To display the likes for Posted Games
 */
import React, { Component } from "react";
import { Text, View } from "react-native";
import styles from "../Styles/UjcfeedTabsstyles/ujcfeedTabsstyle";

import { AntDesign } from "@expo/vector-icons";

const PostLike = props => {
  return (
    <View style={styles.LikeBox}>
      <AntDesign name="like1" size={14} color={"rgba(0, 0, 0, 0.7)"} />
      <Text style={styles.Numbers}>{props.feedItem.likes}</Text>
    </View>
  );
};
export default PostLike;
