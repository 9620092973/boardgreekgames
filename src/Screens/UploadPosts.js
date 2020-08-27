import React from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Platform,
  KeyboardAvoidingView,
  Alert
} from "react-native";
import styles from "../Styles/UjcfeedTabsstyles/ujcfeedTabsstyle";
import { UgcWriteReview } from "../Networks/UGCCalls";
import UGCUploadImage from "../Components/UGCUploadImages";
import { LinearGradient } from "expo-linear-gradient";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ProgressBarStatus from "../Components/ProgressBar.js";
import { progressData } from "../Redux/Actions/index";
import { CustomTouchableIcon } from "../Components/Header/CustomTouchableIcon";

class UploadPosts extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      headerStyle: {
        height: Platform.OS === 'ios' ? 55 : 65
      },
      headerLeft: (
        <View style={{ flexDirection: "row", alignItems: "center",marginLeft:8,marginRight:10 }}>

          <CustomTouchableIcon onPress={() => {
            navigation.navigate(params.lastScreen);
          }}>
            <Ionicons name="ios-arrow-back" size={25} color={"white"} />
          </CustomTouchableIcon>
          {params.lastScreen == 'Photo' ?    
          <Text
            style={{
              marginBottom: Platform.OS === 'ios' ? 6 : null,
              color: "#fff",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 18,

            }}>
              Write Media
          </Text>
          :
            <Text
            style={{
              marginBottom: Platform.OS === 'ios' ? 6 : null,
              color: "#fff",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 18,

            }}>
              Write {params.lastScreen}
          </Text>
          }
        </View>
      ),
      headerRight: (
        <View style={{marginRight:10}}>
          <CustomTouchableIcon onPress={() => params.onShare()}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "400",
                color: "#fff"
              }}
            >
              Share
            </Text>
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
    };
  };

  constructor() {
    super();
    this.state = {
      title: "",
      content: "",
      image: null,
      loading: false,
      uplodingStatusMsg: ""
    };
    this.setImage = this.setImage.bind(this);
    this.onShare = this.onShare.bind(this);
    this.postUgcData = this.postUgcData.bind(this);
  }

  onShare() {
    if (this.state.title == "" || this.state.content == "") {
      Alert.alert("Please write title and content");
    } else if (
      this.props.navigation.state.params.category == "photos" &&
      this.state.image == null
    ) {
      Alert.alert("Please add photo");
    } else {
      this.setState({
        loading: true
      });
      this.postUgcData();
    }
  }

  async postUgcData() {
    if(this.props.navigation.state.params.category == "photo"){
      await this.child.clearImage();
    }
    await UgcWriteReview(
      this.props.gameId,
      this.state.title,
      this.state.content,
      this.state.image,
      this.props.navigation.state.params.category,
      this.props
    )
      .then(response => {
        this.setState({
          loading: false
        });
        this.props.navigation.navigate(
          this.props.navigation.state.params.lastScreen
        );
      })
      .catch(error => {
        console.log("@Error [Uploadposts]", error);
      });
  }

  componentDidMount() {
    this.props.navigation.setParams({
      onShare: this.onShare
    });
  }

  setImage(image) {
    this.setState({
      image: image
    });
  }

  render() {
    let placeholderName = "Type a title for your " + this.props.navigation.state.params.lastScreen;
    return (
      <View style={{ flex: 1 }}>
        {this.state.loading && (
          <ProgressBarStatus loading={this.state.loading} />
        )}
        <View style={{ margin: "3%" }}>
          <KeyboardAvoidingView
            styles={styles.container}
            behavior="padding"
            enabled
          >
            <ScrollView showsVerticalScrollIndicator={false}>
              {/* {this.props.navigation.state.params.lastScreen == "Photo"? */}
              <UGCUploadImage
                setImage={this.setImage}
                ref={instance => {
                  this.child = instance;
                }}
                category={this.props.navigation.state.params.category}
              />
              {/* : 
              null
              }   */}
              <View style={{ flex: 1, marginTop: 10 }}>
                <TextInput
                  placeholder={placeholderName}
                  onChangeText={title => this.setState({ title })}
                  style={styles.modal_image_View}
                />
              </View>
              <View style={{ marginTop: 50, paddingBottom: 120 }}>
                <TextInput
                  placeholder="Type your feed here"
                  onChangeText={content => this.setState({ content })}
                  style={styles.pro_content}
                  multiline={true}
                  numberOfLines={10}
                />
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  gameId: state.GameIDReducer.gameId
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      progressData
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadPosts);
