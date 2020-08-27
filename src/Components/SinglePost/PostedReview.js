import React from "react";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { Text, Image, View, TouchableOpacity, ScrollView } from "react-native";
import styles from "../../Styles/UjcfeedTabsstyles/ujcfeedTabsstyle";
import Replybox from "../../Screens/feedTabScreens/feedScreens/CommentBox/Replybox";
import VideoComponent from "../../Components/VideoComponent";
import * as Types from "../../Redux/Actions/types";
import PhotoPostView from "../SinglePost/PhotoPostView";
import { UGCPostLike } from "../../Networks/UGCCalls";
import PostReport from "../../Components/ReUsableComponent/PostReport";
import { _retrieveData } from "../../Networks/LoginScreenCalls";
import { DisplayFormatedTime } from "../../Utils";

export default class PostedReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reply: false,
      modalVisible: false,
      isliked: false,
      likeCounts: this.props.reviews_data.likes
    };

    this.renderImageOrVideo = this.renderImageOrVideo.bind(this);
    this.writeComment = this.writeComment.bind(this);
    this.navigateToPdfPage = this.navigateToPdfPage.bind(this);
    this.postLike = this.postLike.bind(this);
  }


  //rendering Image or Video
  renderImageOrVideo() {
    let imageFormats = ["png", "jpg", "jpeg", "bmp", "gif", "webp", "psd"];
    let videoFormats = [
      "mp4",
      "m4a",
      "m4v",
      "f4v",
      "f4a",
      "m4b",
      "m4r",
      "f4b",
      "mov",
      "3gp",
      "3gp2",
      "3g2",
      "3gpp",
      "3gpp2",
      "ogg",
      "oga",
      "ogv",
      "ogx",
      "wmv",
      "wma",
      "asf*",
      "webm",
      "flv",
      "AVI*",
      "QuickTime*",
      "HDV*",
      "OP1a*",
      "OP-Atom*",
      "ts",
      "MPEG-2 PS",
      "MPEG-2 TS*",
      "WAV",
      "Broadcast",
      "WAV*",
      "LXF",
      "GXF*",
      "VOB*"
    ];
    let imageoRVideoList = [];
    let images = this.props.reviews_data.images
    let images_length = this.props.reviews_data.images ? this.props.reviews_data.images.length : 0
    for (let index = 0; index < images_length; index++) {
      let uri = this.props.reviews_data.images[index]
        ? this.props.reviews_data.images[index]
        : "../../../assets/Image/stormland.jpg";
      const uriParts = uri.split(".");
      const fileType = uriParts[uriParts.length - 1];
      if (imageFormats.includes(fileType)) {
        let url = this.props.reviews_data.images[index]
          ? { uri: this.props.reviews_data.images[index] }
          : require("../../../assets/Image/stormland.jpg");
        imageoRVideoList.push(
          <Image source={url} style={styles.imageStyle} key={index} />);
      } else if (videoFormats.includes(fileType)) {
        imageoRVideoList.push(
          <VideoComponent video_uri={uri} style={styles.imageStyle} key={index} />
        );
      } else if (fileType == "pdf") {
        imageoRVideoList.push(
          <TouchableOpacity
            onPress={() => {
              this.navigateToPdfPage(uri);
            }}
          >
            <Text style={styles.pdf_text}>Pdf link</Text>
          </TouchableOpacity>
        );
      }
    }
    return (
      <View style={{ flexDirection: "row" }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>{imageoRVideoList}</ScrollView>
      </View>
    );
  }

  postLike() {
    UGCPostLike(this.props.dataId)
      .then(response => {
        this.setState({
          isliked: !this.state.isliked
        });
        if (this.state.isliked == true) {
          this.setState({ likeCounts: this.state.likeCounts + 1 });
        } else {
          this.setState({ likeCounts: this.state.likeCounts - 1 });
        }
      })
      .catch(error => {
        console.log("@Error [PostedReview]", error.message);
      });
  }

  writeComment() {
    this.props.ReviewsDisplay1("", "particular_review_view_comment");
    this.props.GameReviewsResponseType(
      Types.GAME_REVIEWS_RESPONSE_TYPE,
      "comment"
    );
  }

  navigateToPdfPage(uri) {
    this.props.navigation.navigate("PDF", { document_uri: uri });
    this.props.handleOpen(false);
    this.setState({
      modalVisible: false
    });
  }

  async HidePopUpMyProfile() {
    const { user_id } = await _retrieveData();
    const { reviews_data, userId } = this.props;

    this.props.navigation.navigate("Profile", {
      userName: reviews_data.user,
      userId: userId,
      profileType: userId == user_id ? "MyProfile" : "UserProfile",
      ProfilePic: reviews_data.avatar
    });
    this.props.handleOpen(false);
    this.setState({
      modalVisible: false
    });
  }



  renderAvatar(avatar) {
    if (avatar) {
      return (
        <Image
          source={{ uri: avatar }}
          style={{ width: 45, height: 45, borderRadius: 45 / 2 }}
        />
      );
    } else {
      return (
        <Image
          source={require("../../../assets/Image/avatar.png")}
          style={{ width: 45, height: 45, borderRadius: 45 / 2 }}
        />
      );
    }
  }

  render() {
    if (this.props.category != "photos") {
      return (
        <View>
          <View style={{ marginHorizontal: 20 }}>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <TouchableOpacity onPress={this.HidePopUpMyProfile.bind(this)}>
                <View style={{ justifyContent: "center" }}>
                  {this.renderAvatar(this.props.reviews_data.avatar)}
                </View>
              </TouchableOpacity>
              <View>
                <View style={styles.user_name}>
                  <Text style={{ fontSize: 16, fontWeight: "500" }}>
                    {this.props.reviews_data.user}
                  </Text>
                  <Text style={{ fontSize: 12, fontWeight: "400" }}>
                    {DisplayFormatedTime(this.props.reviews_data.date)}
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.title_view}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.goBack();
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: "700", marginBottom: 5 }}>
                  {this.props.reviews_data.post_title}
                </Text>
              </TouchableOpacity>
              <Text style={{ marginTop: 1, fontSize: 14, fontWeight: "400" }}>
                {this.props.reviews_data.post_content}
              </Text>
            </View>
          </View>

          <View>
            <View style={{ marginTop: 10 }}>
              {this.props.category != "photos" && this.renderImageOrVideo()}
            </View>
            <View style={styles.post_like}>
              <View style={styles.post_view}>
                <TouchableOpacity onPress={this.postLike}>
                  <View style={styles.like_icon}>
                    <AntDesign
                      name="like1"
                      size={16}
                      color={"rgba(0, 0, 0, 0.7)"}
                    />
                    <Text style={styles.like_count}>
                      {this.state.likeCounts}
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.writeComment}>
                  <View style={styles.comment_icon}>
                    <MaterialIcons
                      name="mode-comment"
                      size={16}
                      color={"rgba(0, 0, 0, 0.7)"}
                    />
                    <Text style={styles.mode_comment}>
                      {this.props.reviews_data.commentCount}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.report}>
                <PostReport
                  reportButtonView={{
                    alignItems: "flex-end",
                  }}
                  feedItemId={this.props.reviews_data.dataId}
                  feedType={"gamepost"} />
              </View>
            </View>
            <View style={{ marginTop: 15 }}>
              {this.state.reply && <Replybox replies={[{}]} />}
            </View>
          </View>
        </View>
      );
    } else if (this.props.category == "photos") {
      return (
        <View>
          <PhotoPostView {...this.props}
            writeComment={this.writeComment}
            userId={this.props.navigation.state.params.userId}
            {...this.props.navigation.state.params.props} />
        </View>
      );
    }
  }
}
