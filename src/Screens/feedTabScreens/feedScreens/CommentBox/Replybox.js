import React from "react";
import {
  FontAwesome,
  AntDesign,
  EvilIcons,
  MaterialIcons,
  Ionicons,
  Entypo,
  MaterialCommunityIcons
} from "@expo/vector-icons";
//import react in our code.
import {
  Text,
  ImageBackground,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Platform
} from "react-native";
import styles from "../../../../Styles/UjcfeedTabsstyles/ujcfeedTabsstyle";
import { LinearGradient } from "expo-linear-gradient";
import Hyperlink from 'react-native-hyperlink';
import {
  _retrieveData
} from "../../../../Networks/LoginScreenCalls"

import { DisplayFormatedTime } from "../../../../Utils"

export default class Replybox extends React.Component {
  constructor(props){
    super(props);

  }
  async ReplyProfile(reply){
    const { user_id } = await _retrieveData()
    console.log('[Replybox] user id', reply.user_id)
    this.props.navigation.navigate('Profile',
      { profileType: reply.user_id == user_id ? "MyProfile" : "UserProfile",
        userName: reply.user,
        userId: reply.user_id,
        ProfilePic:reply.avatar})

  }

  renderAvatar(avatar) {
    if(avatar) {
      return (
        <Image
          source={{ uri: avatar }}
          style={{ marginTop:5, width: 35, height: 35, borderRadius: 35 / 2 }}
        />  
      )
    } else {
      return (
        <Image
          source={require("../../../../../assets/Image/avatar.png")}
          style={{ marginTop:5, width: 35, height: 35, borderRadius: 35 / 2 }}
        />
      )
    }
  }

  render() {
    return (
      <View>
        {this.props.replies.map((reply, index) => (
          <View key={index}>
            <View style={styles.replay_Viewcontent}>
              <TouchableOpacity onPress={() => this.ReplyProfile(reply)}>
             <View>
               {this.renderAvatar(reply.avatar)}                
             </View>
              </TouchableOpacity>
              <View style={{ width: "80%" }}>
                <View style={{ padding: "3%" }}>
                  {/* <View style={{ }}> */}
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent:"space-between"
                    }}
                  >
                  
                    <Text style={{ fontWeight: "700", fontSize: 14 }}>
                      {reply.user}
                    </Text>
                    <Text style={{ fontSize: 12 , paddingRight:30}}>{DisplayFormatedTime(reply.date_created)}</Text>
                  </View>
                  <Hyperlink linkDefault={ true }
                    linkStyle={{ color: '#344feb' }}>
                  <Text style={styles.replay_comment}>{reply.comment}</Text>
                  </Hyperlink>
                  {/* </View> */}
                </View>
              </View>
            </View>
          </View>
        ))}
      </View>
    );
  }
}

//const mapStateToProps = state => ({
//   reviews_data: state.GameReviewsReducer.reviews_data,
// })

// export default connect(mapStateToProps)(Replybox)
