//Account settings screen

import {
  Text,
  TextInput,
  Image,
  Dimensions,
  View,
  Switch,
  ScrollView,
  TouchableOpacity,
  Platform,
  Alert
} from "react-native";
import styles from "../Styles/AccountSettingsStyles/AccountSettingStyleSheet";
import React from "react";
import FacebookAndGoogleLogin from "../Components/ReUsableComponent/facebookAndGoogleLogin";
import {
  FontAwesome,
  AntDesign,
  EvilIcons,
  Entypo,
  MaterialIcons, Ionicons
} from "@expo/vector-icons";
import { Logout, _removeUser } from "../Networks/HeaderCalls";
import { updateEmailPasswordFields } from "../Networks/AccountSettingCalls.js";
import { GetProfilePic } from "../Networks/UserProfileCalls";
import { LinearGradient } from "expo-linear-gradient";
import { CustomTouchableIcon } from "../Components/Header/CustomTouchableIcon";
const { width, height } = Dimensions.get("window");

export default class AccountSetting extends React.Component {
  state = {
    switchValue: false,
    minusIconShow: false
  };

  //Static Header with navigations options
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      height: Platform.OS === 'ios' ? 55 : 65
    },
    headerLeft: (
      <View style={{ flexDirection: "row", alignItems: "center" ,marginLeft:8,marginRight:10}}>

        <CustomTouchableIcon onPress={() => navigation.goBack()}>
          <Ionicons name="ios-arrow-back" size={25} color={"white"} />
        </CustomTouchableIcon>

        <Text
          style={{
            marginBottom: Platform.OS === 'ios' ? 6 : null,
            color: "#fff",
            fontWeight: "bold",
            fontSize: 18,
          }}>
          Account Settings
        </Text>
      </View>
    ),
    headerRight: navigation.state.params && navigation.state.params.headerRight,

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
  });

  constructor() {
    super();
    this.state = {
      new_email: "",
      new_password: "",
      current_email: "",
      switchValueLocation: "",
      switchValueAge: "", 
      emailEditable: false,
      passwordEditable:false,
      emailStatus: 'Change',
      passwordStatus: 'Change',
    };
    this.renderLogout = this.renderLogout.bind(this);
    this.updateEmailAndPassword = this.updateEmailAndPassword.bind(this);
    this.gettingUserMailAndPassword = this.gettingUserMailAndPassword.bind(this);
  }


 emailhandler(){
    //Handler to enable of disable TextInput
      this.setState({ emailEditable: !this.state.emailEditable });
      //Make TextInput Enable/Disable
      this.setState({ 
        emailStatus: this.state.emailEditable ? 'Change':' ' 
           //updating the label of the button
      });
  }

  passwordhandler(){
    //Handler to enable of disable TextInput
      this.setState({ passwordEditable: !this.state.passwordEditable });
      //Make TextInput Enable/Disable
      this.setState({ 
        passwordStatus: this.state.passwordEditable ? 'Change':' ' 
           //updating the label of the button
      });
  }

  componentDidMount() {
    this.gettingUserMailAndPassword();
    this.props.navigation.setParams({
      headerRight: (
        <TouchableOpacity
          onPress={() => {
            this.updateEmailAndPassword();
          }}
          style={{ marginRight: 20 }}
        >
          <Text
            style={{
              fontSize: 17,
              color: "white",
              fontWeight: "bold"
            }}
          >
            Save
          </Text>
        </TouchableOpacity>
      )
    });
  }
  //Logged in user will logout with this function
  renderLogout() {
    console.log("renderLogout");
    Logout().then(response => {
      if (response.status == 200) {
        console.log("response is 200");
        _removeUser();
        this.props.navigation.navigate("Login");
      }
    });
  }

   updateEmailAndPassword() {
    const {current_email, new_password} = this.state;
    if(current_email == '' && current_email.length <  4 ){
      Alert.alert('Please enter correct email');
      return;
    }else if(new_password.length < 4 && new_password.length != 0 ){
      Alert.alert('password should contain atleast 4 letters');
      return;
    }
    updateEmailPasswordFields(current_email, new_password)
      .then(response => {
        Alert.alert("Email and Password are successfully Updated.");
      })
      .catch(error => {
        console.log("update email and password error", error.message);
      });
      }
    // }

  gettingUserMailAndPassword() {
    GetProfilePic()
      .then(response => {
        console.log("response of user profile get method : ", response.data);
        this.setState({
          current_email: response.data.email,
          current_password: response.data.password
        });
     
      })
      .catch(error => {
        console.log("error message", error.message);
      });
  }

  render() {
    const isFocused = this.state;
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start"
        }}
      >
        <View
          style={{
            flex: 2,
            margin: "4%",
            marginTop: "5%",
            marginBottom: "2%"
          }}
        >
          <ScrollView>
            <View style={{ flex: 1 }}>
              <Text style={styles.labelFiveText}>Account</Text>
            </View>

            <View
              style={{
                flex: 1,
                justifyContent: "flex-end"
              }}
            >
              <Text style={styles.emailTwoText}>Email</Text>
                <View  style={{flexDirection:'row', marginTop:3, borderBottomWidth:0.5, borderBottomColor:"grey"}}>
                  <View style={{flex:4}}>
                    <TextInput
                      autoCapitalize="none"
                      autoCorrect={false}
                      placeholder="Email@example.com"
                      style={styles.textFieldTwoTextInput}  
                      editable={this.state.emailEditable}
                      value={this.state.current_email}
                      onChangeText={current_email => this.setState({ current_email })}/>
                  </View>
                  <View style={{ alignSelf:'flex-end', marginRight:5}}>
                    <TouchableOpacity onPress={this.emailhandler.bind(this)}>
                      <Text style={{color: 'grey', marginBottom:2}}>{this.state.emailStatus}</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <Text style={styles.emailText}>Password</Text>
                <View  style={{flexDirection:'row', marginTop:3, borderBottomWidth:0.5, borderBottomColor:"grey"}}>
                  <View style={{flex:4}}>
                    <TextInput
                      autoCapitalize="none"
                      autoCorrect={false}
                      placeholder="******"
                      style={styles.textFieldTwoTextInput}  
                      editable={this.state.passwordEditable}
                      onChangeText={new_password => this.setState({ new_password })}/>
                  </View>
                  <View style={{ alignSelf:'flex-end', marginRight:5}}>
                    <TouchableOpacity onPress={this.passwordhandler.bind(this)}>
                      <Text style={{color: 'grey', marginBottom:2}}>{this.state.passwordStatus}</Text>
                    </TouchableOpacity>
                  </View>
                </View>

        
            </View>
              
            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: "13%"
                }}
              >
                <Text style={styles.labelFourText}>Privacy Setting</Text>

                <CustomTouchableIcon
                  onPress={() =>
                    this.setState({
                      minusIconShow: !this.state.minusIconShow
                    })
                  }
                >
                  {this.state.minusIconShow ? (
                    <EvilIcons
                      size={28}
                      name="minus"
                      color={"rgba(0, 0, 0, 0.41)"}
                    />
                  ) : (
                      <EvilIcons
                        size={28}
                        name="plus"
                        color={"rgba(0, 0, 0, 0.41)"}
                      />
                    )}
                </CustomTouchableIcon>
              </View>
            </View>

           {/* Do be work on it later(based on requirement in next phase) "Don't remove this code" */}
           
            {/* <View style={styles.emailseperatorView} />
            {this.state.minusIconShow ? (
              <View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "flex-end",
                    flexDirection: "row"
                  }}
                >
                  <View style={{ flex: 1 }}>
                    <Text style={styles.textStyle} style={{ marginTop: 20 }}>
                      Don’t show my location
                    </Text>
                  </View>

                  <View
                    style={{
                      flex: 1,
                      alignItems: "flex-end",
                      top: "5%"
                    }}
                  >
                    <Switch
                      value={this.state.switchValueLocation}
                      onValueChange={switchValueLocation =>
                        this.setState({ switchValueLocation })
                      }
                    />
                  </View>
                </View>

                <View
                  style={{
                    flex: 1,
                    justifyContent: "flex-end",
                    flexDirection: "row",
                    marginVertical: Platform == "ios" ? "3%" : "3%"
                  }}
                >
                  <View style={{ flex: 1 }}>
                    <Text style={styles.textStyle} style={{ marginTop: 15 }}>
                      Don't show my age
                    </Text>
                  </View>

                  <View
                    style={{
                      flex: 1,
                      alignItems: "flex-end",
                      top: "5%"
                    }}
                  >
                    <Switch
                      value={this.state.switchValueAge}
                      onValueChange={switchValueAge =>
                        this.setState({ switchValueAge })
                      }
                    />
                  </View>
                </View>
              </View>
            ) : null} */}
          </ScrollView>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: "center"
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "flex-end",
              paddingEnd: "8%",
              paddingStart: "8%"
            }}
          >
            <FacebookAndGoogleLogin
              title={"Sync with"}
              navigation={this.props.navigation}
            />
          </View>

          <View
            style={{
              flex: 1,
              justifyContent: "flex-end",
              marginBottom: "15%"
            }}
          >
            <TouchableOpacity
              onPress={this.renderLogout}
              style={styles.buttonButton}
            >
              <Text style={styles.buttonButtonText}>Log Out</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity></TouchableOpacity>
          <View style={styles.emailseperatorView} />
          <TouchableOpacity>
            <Text style={styles.labelText}>Delete Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

