import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Platform,
  StyleSheet
} from "react-native";
import { Ionicons, AntDesign, EvilIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { CustomTouchableIcon } from "../Components/Header/CustomTouchableIcon";
import { connect } from "react-redux";

class GamecomunityHeader extends Component {
  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }
  handleBackButtonClick() {
    this.props.navigation.navigate("GameInfo", {
      game_id: this.props.gameId,
      productData: this.props.gameData
    });
  }
  render() {
    let { routeName } = this.props.navigation.state;
    return (
      <View style={{ flexDirection: "row" }}>
        <LinearGradient
          colors={["#001a33", "#004f99"]}
          style={styles.GradientView}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <View style={styles.communityView}>
            <View style={{ flexDirection: "row", alignItems: "center", marginRight: 10, marginLeft: 8 }}>
              <CustomTouchableIcon onPress={this.handleBackButtonClick}>
                <Ionicons name="ios-arrow-back" size={25} color={"white"} />
              </CustomTouchableIcon>
              <View style={{ marginBottom: Platform.OS === 'ios' ? 5 : null }}>
                <Text style={styles.Title}>{this.props.title}</Text>
              </View>
            </View>

            <View style={styles.searchView}>
              <CustomTouchableIcon
                onPress={() => this.props.navigation.navigate("Search")}
              >
                <EvilIcons name="search" size={28} color={"white"} />
              </CustomTouchableIcon>
              <View style={{ marginRight: 10 }}>
                <CustomTouchableIcon
                  onPress={() =>
                    this.props.navigation.navigate("WriteReview", {
                      category: this.props.category,
                      lastScreen: routeName
                    })
                  }
                >
                  <AntDesign name="plus" size={25} color={"white"} />
                </CustomTouchableIcon>
              </View>
            </View>
          </View>
        </LinearGradient>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  gameId: state.GameIDReducer.gameId,
  gameData: state.GameIDReducer.gameData
});
export default connect(mapStateToProps)(GamecomunityHeader);

const styles = StyleSheet.create({
  GradientView: {
    paddingTop: Platform.OS === "ios" ? 20 : 28,
    flexDirection: "row",
    alignItems: "center"
  },
  communityView: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    height: Platform.OS === "ios" ? 55 : 65
  },
  Title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18
  },
  searchView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center"
  }
});
