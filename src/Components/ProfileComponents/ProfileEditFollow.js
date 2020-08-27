import {
  Image,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  AsyncStorage,
  Dimensions,
  Modal
} from "react-native";
import styles from "../../Styles/MyProfileStyles/MyProfileStyleSheet";
import React from "react";
import { connect } from "react-redux";

//Component for Edit profile button
class ProfileEditFollow extends React.Component {
  constructor(props) {
    super(props);
    this.followEdit = this.followEdit.bind(this);
  }

  //Method to navigate to edit user's personal information
  followEdit() {
    return (
      <View>
        <TouchableOpacity
          style={styles.buttonButton}
          onPress={() => {
            this.props.navigation.navigate("PersonalInfo", {
              userID: this.props.userID
            });
          }}
        >
          <Image
            source={require("../../../assets/Image/baseline-edit-24px.png")}
            style={styles.ImageIconStyle}
            style={{ marginRight: 10 }}
          />

          <Text style={styles.TextStyle}>Edit personal info</Text>
        </TouchableOpacity>
      </View>
    );
    // }
  }
  render() {
    return <View>{this.followEdit()}</View>;
  }
}
const mapStateToProps = state => ({
  userId: state.GameIDReducer.userId
});

export default connect(mapStateToProps)(ProfileEditFollow);
