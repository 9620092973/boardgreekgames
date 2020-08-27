/**
 * Component Name: Posts.js
 *
 * Purpose: To display the Game Post Title, Time , LIkes, Comments.
 * And for reporting about Game Post
 */
import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "../Styles/UjcfeedTabsstyles/ujcfeedTabsstyle";
import PostLike from "./PostLike";
import PostComment from "./PostComment";
import PostReport from "../Components/ReUsableComponent/PostReport";
import PostCreatedTime from "./PostCreatedTime";
export default class Posts extends Component {
  render() {
    const { feedItem } = this.props;
    const { index } = this.props;
    return (
      <View style={styles.silverHighContainer}>
        <View key={index}>
          <View style={{ paddingLeft: 15, paddingRight: 15 }}>
            <TouchableOpacity
              onPress={() => {
                this.props.ReviewsDisplay1(
                  feedItem.dataId,
                  "all_reviews_view",
                  feedItem.userId
                );
              }}
            >
              <Text style={styles.silverhighText}>{feedItem.post_title}</Text>
            </TouchableOpacity>
            <PostCreatedTime feedItem={feedItem} />
            <View style={styles.LikeCommentShare}>
              <View style={styles.LikeComment}>
                <TouchableOpacity
                  onPress={() => {
                  this.props.ReviewsDisplay1(
                    feedItem.dataId,
                    "all_reviews_view",
                    feedItem.userId
                  );
                }}
                >
                  <PostComment feedItem={feedItem} />
                </TouchableOpacity>

                <TouchableOpacity 
                 onPress={() => {
                this.props.ReviewsDisplay1(
                  feedItem.dataId,
                  "all_reviews_view",
                  feedItem.userId
                );
              }}
                >
                  <PostLike feedItem={feedItem} />
                </TouchableOpacity>
              </View>
              <PostReport 
                reportButtonView={{
                  textAlign: "center",
                  alignItems: "center",
                }}
                feedItemId = {feedItem.dataId}
                feedType = {"gamepost"}/>
            </View>
          </View>
          <View style={styles.hrLine} />
        </View>
      </View>
    );
  }
}
