
import { TouchableOpacity, Image, View, Text, Platform } from "react-native";
import React from "react";
import styles from "../../Styles/UploadGameStyles/AddGameFinishStyleSheet";
import { LinearGradient } from "expo-linear-gradient";
import { CustomTouchableIcon } from  "../../Components/Header/CustomTouchableIcon"
import { FontAwesome, AntDesign, EvilIcons,Ionicons } from "@expo/vector-icons";
export default class AddGameFinish extends React.Component {
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
           Game
        </Text>
      </View>
    ),
    headerRight: (
        <View style={{marginRight:10}}>
        <CustomTouchableIcon
          onPress={() => {
            navigation.navigate("Search");
          }}
        >
          <EvilIcons name="search" size={28} color={"white"} />
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

    headerTintColor: "white"
  });

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  onButtonPressed = () => {};

  render() {
    return (
      <View style={styles.welcomeView}>
        <Image
          source={require("../../../assets/Image/barcode_Scan32.png")}
          style={styles.imageImage}
        />
        <Text style={styles.labelText}>Thank you</Text>
        <Text style={styles.FinishText}>
          Lorem Ipsum is simply dummy text of the {"\n"} printing and
          typesetting industry
        </Text>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("HomePage");
          }}
          style={styles.buttonButton}>
          <Text style={styles.buttonButtonText}>Done</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
