//
//  UploadGame5
//  Upload game
//
//  Created by S7works.
//  Copyright © 2018 S7works. All rights reserved.
//

import React from "react";
import {
  TextInput,
  TouchableOpacity,
  Image,
  View,
  Text,
  Platform
} from "react-native";
import styles from "../../Styles/UploadGameStyles/UploadGamePublishersStyleSheet";
import { LinearGradient } from "expo-linear-gradient";
import { TextInputLayout } from "rn-textinputlayout";
import { CustomTouchableIcon } from  "../../Components/Header/CustomTouchableIcon"
import { FontAwesome, AntDesign, EvilIcons,Ionicons } from "@expo/vector-icons";

export default class UploadGamePublishers extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Publisher: "",
      game_Publisher: []
    };
    this.PublisherGame = this.PublisherGame.bind(this);
  }

  componentDidMount() {}

  onButtonTwoPressed = () => {};
  PublisherGame() {
    if (this.state.Publisher.length >= 4) {
      this.props.navigation.navigate("UploadGameArtist", {
        GameName: this.props.navigation.state.params.GameName,
        selected_minimum_player: this.props.navigation.state.params
          .selected_minimum_player,
        selected_maximum_player: this.props.navigation.state.params
          .selected_maximum_player,
        selected_min_time: this.props.navigation.state.params.selected_min_time,
        selected_max_time: this.props.navigation.state.params.selected_max_time,
        selected_Age_item: this.props.navigation.state.params.selected_Age_item,
        selected_year: this.props.navigation.state.params.selected_year,
        Designing: this.props.navigation.state.params.Designing,
        game_Publisher: this.state.game_Publisher,
        gameImages: this.props.navigation.state.params.gameImages
      });
      let Publisher = this.state.Publisher;
      let game_Publisher = this.state.game_Publisher;
      game_Publisher.push(Publisher);
      this.setState({ game_Publisher: game_Publisher });
    }
  }

  render() {
    return (
      <View style={styles.profileSettingsView}>
        {/* <View
					pointerEvents="box-none"
					style={{
						height: 90,
					}}>
					<View
						style={styles.viewView}>
						<View
							style={styles.viewTwoView}/>
					</View>
				</View> */}
        <Text style={styles.labelTwoText}>Publishers</Text>

        <View styles={styles.signUpFieldsView}>
          <TextInputLayout
            style={{
              marginStart: 20,
              marginEnd: 20
            }}
          >
            <TextInput
              autoCapitalize="none"
              multiline={true}
              returnKeyType="next"
              placeholder="Publisher name"
              onChangeText={Publisher => this.setState({ Publisher })}
              style={styles.textFieldTextInput}
            />
          </TextInputLayout>
        </View>
        <View style={{ marginTop: 20 }}>
          <TouchableOpacity
            onPress={this.onButtonTwoPressed}
            style={styles.buttonTwoButton}
          >
            <Text style={styles.buttonTwoButtonText}>+ Add</Text>
          </TouchableOpacity>
        </View>

        {this.state.Publisher.length < 4 && (
          <TouchableOpacity
            onPress={this.PublisherGame}
            style={styles.buttonButton}
          >
            <Text style={styles.buttonButtonText}>Next</Text>
          </TouchableOpacity>
        )}
        {this.state.Publisher.length >= 4 && (
          <TouchableOpacity
            onPress={this.PublisherGame}
            style={styles.GameDesignSuccessButton}
          >
            <Text style={styles.GameDesignButtonText}>Next</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}
