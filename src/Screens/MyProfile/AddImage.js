import * as React from "react";
import { Button, Platform, Image, View, TouchableOpacity } from "react-native";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import {
  User_profile,
  GetProfilePic,
  User_profilePut
} from "../../Networks/UserProfileCalls";
import { _retrieveData } from "../../Networks/LoginScreenCalls";
import { connect } from "react-redux";
import { avatarUploading } from "../../Redux/Actions";
import { bindActionCreators } from "redux";
import * as Types from "../../Redux/Actions/types";
import styles from "../../Styles/MyProfileStyles/MyProfileStyleSheet";
import ProfilePhoto from "../../Components/Header/ProfilePhoto.js";
import { LinearGradient } from "expo-linear-gradient";

class AddImage extends React.Component {
  constructor() {
    super();
    this.state = {
      image: null,
      user_id: "",
      status: false,
      profileImage: ""
    };

    this._pickImage = this._pickImage.bind(this);
    this.userProfilePic = this.userProfilePic.bind(this);
  }

  //method to get  profile image from backend
  userProfilePic() {
    GetProfilePic()
      .then(response => {
        this.setState({
          image: response.data.profile_picture
        });
      })
      .catch(error => {
        console.log("error of the avatar", error.message);
      });
  }

  async componentDidMount() {
    
    this.getPermissionAsync();
    this.userProfilePic();
    const usernameGet = await _retrieveData();
    
    if (usernameGet) {
      this.setState({
        user_id: usernameGet.user_id
      });
    }
  }

  //get permission to access gallery
  getPermissionAsync = async () => {
    if (Platform.os == "android" || Platform.os == "ios") {
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };

  // Image Picker of Post and Put Methods
  async _pickImage() {
    await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3]
    }).then(result => {
      if (!result.cancelled) {
        const file = result.uri;
        this.setState({
          image: file
        });
        if (!this.state.status) {
          User_profile(this.state.user_id, this.state.image)
            .then(response => {
              this.props.avatarUploading(
                Types.AVATAR_UPLOADING,
                this.state.image
              );
            })
            .catch(error => {
              console.log("no uploaded image", error.message);
            });
        }
        
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        {this.props.title == "MyProfile" ?
        <ProfilePhoto
          style={[styles.upload_view]}
          size={70}
          styleIcon={{ position: "absolute", top: 20 }}
          profileImage={this.state.image}
        />
        :
        <ProfilePhoto
        style={[styles.upload_view]}
        size={70}
        styleIcon={{ position: "absolute", top: 20 }}
        profileImage={this.props.ProfilePhoto}
      />
        }
        
        {this.props.title == "MyProfile" && (
          <TouchableOpacity
              style={styles.image_pick}
              onPress={this._pickImage}
          >
            <Image
              source={require("../../../assets/Image/baseline-camera_alt-24px.png")}
              style={{ width: 20, height: 20 }}
            />
          </TouchableOpacity>
        )}
        
      </React.Fragment>
    );
  }
}

//export default AddImage;
const mapStateToProps = state => ({
  avatar: state.avatarReducer.avatar,
  error: state.avatarReducer.error,
  loading: state.avatarReducer.loading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      avatarUploading
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddImage);
