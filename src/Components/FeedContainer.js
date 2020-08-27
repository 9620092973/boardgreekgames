import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
  Dimensions,
  Platform
} from "react-native";
import styles from "../Styles/UjcfeedTabsstyles/ujcfeedTabsstyle";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import GameHeader from "../Components/GameMainHeader";
import Posts from "../Components/Posts";
import { Video } from 'expo-av';

export default class FeedContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: null,
      count: 1,
      isLoading: true,
      isLoadingMore: false,
      thisComponent:'feedConatiner',
      valueOfUserInput:''
    }
    this.renderFeedItem = this.renderFeedItem.bind(this)
    this.renderPhotoPost = this.renderPhotoPost.bind(this)
    this.renderReportModal = this.renderReportModal.bind(this)
    this.infiniteLoad = this.infiniteLoad.bind(this)
    this.navigateToSinglePostModal = this.navigateToSinglePostModal.bind(this)
  }

  infiniteLoad() {
    this.props.infiniteLoad();
  }

  renderReportModal(visible) {
    this.setState({
      modalVisible: visible
    });
  }

  navigateToSinglePostModal(feedItem) {
    
    this.props.ReviewsDisplay1(feedItem.dataId, "all_reviews_view",feedItem.userId)
  }

  renderFeedItem({ item, index }) {
    const feedItem = item;
    if (this.props.category != "photos") {
      return (
        <Posts
          feedItem={feedItem}
          index={index}
          {...this.props}
        />
      );
    } else if (this.props.category == "photos") {
      return this.renderPhotoPost(feedItem, index);
    }
  }

  renderPhotoPost(PhotoItem, index) {
    const screenWidth = Math.round(Dimensions.get("window").width);
    const screenHeight = Math.round(Dimensions.get("window").height);
    let imageFormats = ["png", "jpg", "jpeg", "bmp", "gif", "webp", "psd"];
    let videoFormats = ["mp4","m4a","m4v","f4v","f4a","m4b","m4r","f4b","mov","3gp","3gp2","3g2","3gpp","3gpp2","ogg","oga","ogv","ogx", "wmv","wma","asf*","webm","flv","AVI*","QuickTime*","HDV*","OP1a*","OP-Atom*","ts","MPEG-2 PS","MPEG-2 TS*","WAV","Broadcast","WAV*","LXF","GXF*","VOB*"];
    const fileType = PhotoItem.images[0]!= undefined ?  PhotoItem.images[0].split('.').pop():''
    let image = PhotoItem.images[0]
      ? { uri: PhotoItem.images[0] }
      : require("../../assets/Image/ABCme.jpeg");
    const singlePhotoStyle = index % 2 == 0 ? { marginRight: 10 } : {};
    return (
      <View
        pointerEvents="box-none"
        style={[
          { width: screenWidth / 2 - 15, paddingLeft: 10, paddingRight: 10 },
          singlePhotoStyle
        ]}
      >
        <TouchableOpacity
          onPress={() => {
            this.props.ReviewsDisplay1(PhotoItem.dataId, "all_reviews_view");
          }}
        >
          {imageFormats.includes(fileType) &&
            
            <Image
              source={image}
              style={[
                styles.profileImage,
                { width: screenWidth / 2 - 15, height: screenWidth / 2 - 15 }
              ]}
            /> 
            }
            {videoFormats.includes(fileType) &&
                <View style={{ flexDirection: "row" }}>
                  <Video
                    source={image}
                    isMuted={false}
                    rate={1.0}
                    resizeMode="cover"
                    isLooping
                    style={[
                      styles.profileImage,
                      { width: screenWidth / 2 - 15, height: screenWidth / 2 - 15 }
                    ]}
                    shouldPlay
                    //useNativeControls={true}
                  />
                </View>
            }
  
        </TouchableOpacity>
        <Text style={styles.Imageheading} numberOfLines={1}
        maxLength={30} >{PhotoItem.post_title}</Text>
        <View style={styles.LikeCommentugc}>
          <TouchableOpacity onPress={() => {
            this.props.ReviewsDisplay1(PhotoItem.dataId, "all_reviews_view");
          }}>
            <View style={styles.comment_ugc}>
              <AntDesign name="like1" size={15} color="grey" />
              <Text style={styles.profileNumbers}>{PhotoItem.likes}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.ReviewsDisplay1(PhotoItem.dataId, "all_reviews_view");
            }}
          >
            <View style={styles.comment_photo_count}>
              <MaterialIcons name="mode-comment" size={15} color="grey" />
              <Text style={styles.profileNumbers}>
                {PhotoItem.commentCount}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  render_FlatList_footer = () => {
    var footer_View = this.state.isLoadingMore ? (
      <View style={{ flex: 1, padding: 10 }}>
        <ActivityIndicator size="large" />
      </View>
    ) : (
      <View></View>
    );
    return footer_View;
  };

  getCardImageSource() {
    const { card_image } = this.props.gameData;
    return card_image && card_image.length
      ? { uri: card_image[0] }
      : require("../../assets/Image/ABCme.jpeg");
  }

  render_FlatList_header = () => {
    var header_View = (
      <View>
        <GameHeader cardImage={this.getCardImageSource()} {...this.props} />
          <View style={[styles.reviewLine]} />
      </View>
    );
    return header_View;
  };

  render() {
    const { category, isLoadingMore } = this.props;
    const { data } = this.props[category] ? this.props[category] : [];
    if (data && data.length > 0) {
      return (
          <View style={{flex:1}}>
            {data.length != 0 ?
            <FlatList
              data={data}
              renderItem={data => this.renderFeedItem(data)}
              numColumns={category == "photos" ? 2 : 1}
              onEndReached={() => {
                this.setState({ isLoadingMore: isLoadingMore }, () => {
                  this.infiniteLoad();
                });
              }}
              onEndReachedThreshold={Platform.OS == "ios" ? 0 : 0.5}
              ListHeaderComponent={this.render_FlatList_header}

              /> : null}
        </View>
      );
    }
    return <Text></Text>;
  }
}
