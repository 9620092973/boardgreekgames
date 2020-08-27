//Ramya edited this file

import React from 'react';
import {TouchableOpacity,Text,ScrollView,View,Alert,Platform,Linking,ImageBackground,Image,StatusBar} from "react-native";
import Modal from "react-native-modal";
import styles from "../../Styles/GameInfoStyles/GameInfoStyleSheet";
import { FontAwesome, AntDesign, EvilIcons, } from "@expo/vector-icons";

export default class GameInfoShopbutton extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			  visibleModal: null,
		}
	}
  visibleRequiredModal(){
     if (this.props.navigation_from == "WelcomePage") {
      this.props.setModalVisible(true);
    } else {
      this.setState({ visibleModal: "bottom" }) 
    }
  }
  // links of the Amazon and Ebay 
	 renderModalContent = () => (
      <View style={styles.content}>
        <Text style={styles.modal_txt}>
          Available this game on
        </Text>
        <AntDesign
          name="close"
          size={23}
          style={{ position: "absolute", right: 10, top: 25 }}
          onPress={() => this.setState({ visibleModal: null })}
        />
        <View style={styles.modal_links}>
          {this.props.Amazonlink ? 
          <TouchableOpacity
            onPress={() => Linking.openURL(this.props.Amazonlink)}
          >
            <Image
              style={{ marginRight: 35 }}
              source={require("../../../assets/Image/Amazon.png")}
            />
          </TouchableOpacity> : null }
          {this.props.Ebaylink ? 
          <TouchableOpacity
            onPress={() => Linking.openURL(this.props.Ebaylink)}
          >
            <Image source={require("../../../assets/Image/Ebay.png")} />
          </TouchableOpacity> : null }
        </View>
      </View>
    );
	render(){
		return (
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.modal_visible}
            onPress={() => this.visibleRequiredModal()}>
            <Text style={styles.shop_btn}>
              Shop
            </Text>
          </TouchableOpacity>
          <Modal
            isVisible={this.state.visibleModal === "bottom"  }
            backdropOpacity={0.5}
            style={styles.bottomModal}
            onBackdropPress={() => this.setState({ visibleModal: null })}
          >
            {this.renderModalContent()}
          </Modal>
        </View>
      );
	}
}