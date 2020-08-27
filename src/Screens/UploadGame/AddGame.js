
import {
  TouchableOpacity,
  View,
  Text,
  Platform,
  ScrollView,
  Button
} from "react-native";
import Image from "react-native-remote-svg";
import React from "react";
import styles from "../../Styles/UploadGameStyles/AddGameStyleSheet";
import { FontAwesome, AntDesign, EvilIcons,Ionicons } from "@expo/vector-icons";
import { Container, Content, Input, Footer, FooterTab } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import { CustomTouchableIcon } from  "../../Components/Header/CustomTouchableIcon"

export default class AddGame extends React.Component {
    static navigationOptions = ({ navigation }) => ({
     headerLeft: (
      <View style={{ flexDirection: "row", alignItems: "center",marginLeft:8,marginRight:10 }}>

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
          Add Game
        </Text>
      </View>
    ),
    headerBackground: (
      <LinearGradient 
        colors={["#001a33", "#004f99"]}
        style={{ flex: 1}}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}/>
    ),
  });

  constructor(props) {
    super(props);
    this.state = {
      not_Now: false,
      Add_Now: false
    };
  }

  componentDidMount() {}
 
  render() {
    return (
      <View style={styles.welcomeView}>
        <ScrollView>
          <View style={styles.gameImage}>
            <Image
              source={require("../../../assets/Image/AddGame.png")}
              style={styles.imageImage}
            />
          </View>

          <View style={styles.gameTextView}>
            <Text style={styles.gameText}>
              This game is not in the data base
            </Text>
            <Text style={styles.baseGame}>
              Want to Add this game in our {"\n"}data base
            </Text>
          </View>

          <View style={styles.gameView}>
            <View style={styles.GameView1}>
              <TouchableOpacity
                style={styles.TouchGame}
                onPress={() => {
                  this.props.navigation.navigate("HomePage");
                }}
              >
                <Text style={styles.Notnow}>
                  Not now
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{flex: 1,padding: 15}}>
              <TouchableOpacity
                style={styles.upload}
                onPress={() => {
                  this.props.navigation.navigate("UploadGameImage");
                }}
              >
                <Text style={styles.addGame}>
                  Add now
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
