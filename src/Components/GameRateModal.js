import React, { Component } from 'react'
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native'
import Modal from 'react-native-modal'
import Image from "react-native-remote-svg";
import styles from "../Styles/GameInfoStyles/GameInfoStyleSheet";
import {AntDesign} from "@expo/vector-icons";
import { RateGame } from "../Networks/ProductPageCalls";
import HappySmile from "../../assets/Image/HappySmile.svg"
import HappySmileActive from "../../assets/Image/HappySmileActive.svg"
import UnhappySmileActive from "../../assets/Image/UnhappySmileActive.svg"
import UnhappySmile from "../../assets/Image/UnhappySmile"
import LoveSmile from "../../assets/Image/LoveSmile"
import LoveSmileActive from "../../assets/Image/LoveSmileActive"
import SadSmile from "../../assets/Image/SadSmile"
import SadSmileActive from "../../assets/Image/SadSmileActive"


 export default class GameRateModal extends Component {

  constructor(props){
    super(props);
    this.state = {
      game_rating: "",
      game_rateVisible:false,
      modalVisible:false
    }
    this.renderGameRateModal = this.renderGameRateModal.bind(this)
     this.onRatingChange = this.onRatingChange.bind(this);
     this.onPressCloseButton = this.onPressCloseButton.bind(this)
     this.onPressSubmitButton = this.onPressSubmitButton.bind(this)
  }
   componentDidMount(){
      this.setState({
        game_rating:this.props.game_rating
      })
    }

    // Can change given game rate
  onRatingChange(rating) {
      this.setState({
          game_rating: rating,    
        });
  }

  onPressCloseButton() {
    this.props.renderRateModal(null)
  }

   // Post the Game Rate
  onPressSubmitButton(){
    if(this.state.game_rating){
      RateGame(this.props.game_id, this.state.game_rating)
        .then(response => {
          if (response.status == 200) {
            this.props.fetchProductData()
              this.props.AverageRating()
          }
        })
        .catch(error => {
          console.log("@Error [GameInfo] GameRateModal", error.message);
        });
      this.props.renderRateModal()
    }
  }

  renderGameRateModal(){
    return(
      <View style={styles.modalContent}>
         <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={styles.modalHeading}>Rate This Game</Text>
            <TouchableOpacity onPress={this.onPressCloseButton}>
               <AntDesign name='close' size={25} style={{padding:10}}/>
            </TouchableOpacity>
          </View>
          <View style={styles.gameViews}>
              <View style={{marginTop:10}}>
                  {this.state.game_rating != 1 &&(
                    <TouchableOpacity
                      onPress={() => {
                        this.onRatingChange(1);
                      }}>
                      <SadSmile width={40} height={40} />
                      <Text style={styles.bad_text}>Bad</Text>
                    </TouchableOpacity>
                  )}
                  {this.state.game_rating == 1 && (
                    <View>
                     <SadSmileActive width={50} height={50} />
                    <Text style={styles.bad_View}>Bad</Text>
                    </View>
                  )}
              </View>
              <View style={{marginTop:10}}>
                {this.state.game_rating != 2 && (
                  <TouchableOpacity
                    onPress={() => {
                      this.onRatingChange(2);
                    }} >
                     <UnhappySmile width={40} height={40} />
                    <Text style={styles.bad_text}>Okay</Text>
                  </TouchableOpacity>
                )}
                {this.state.game_rating == 2 && (
                  <View>
                   <UnhappySmileActive width={50} height={50} />
                  <Text style={styles.bad_View}>Okay</Text>
                  </View>
                )}
                 
              </View>
              <View style={{marginTop:10}}>
                  {this.state.game_rating != 3 && (
                    <TouchableOpacity
                      onPress={() => {
                        this.onRatingChange(3);
                      }} >
                      <HappySmile width={40} height={40} />
                      <Text style={styles.bad_text}>Good</Text>
                    </TouchableOpacity>
                  )}
                  {this.state.game_rating == 3 && (
                    <View>
                    <HappySmileActive width={50} height={50} />
                    <Text style={styles.bad_View}>Good</Text>
                    </View>
                  )}
              </View>
              <View style={{marginTop:5}}>
                {this.state.game_rating != 4 && (
                  <TouchableOpacity
                    onPress={() => {
                      this.onRatingChange(4);
                    }}>
                    <LoveSmile width={50} height={50} />
                    <Text style={styles.bad_text1}>Great</Text>
                  </TouchableOpacity>
                )}
                {this.state.game_rating == 4 && (
                  <View>
                  <LoveSmileActive width={60} height={60} />
                  <Text style={styles.bad_View1}>Great</Text>
                  </View>
                )}
              </View>
            </View>

           {(this.state.game_rating == "" || this.state.game_rating == undefined)  &&(
            <View style={{justifyContent:'center',alignItems:'center',padding:25}}>
              <TouchableOpacity style={styles.submit_rategame} onPress = {this.onPressSubmitButton}>
                <Text style={styles.submit_text}>Submit</Text>
              </TouchableOpacity>
            </View>
          )}
          {(this.state.game_rating != "" && this.state.game_rating != undefined)&& (
            <View style={{justifyContent:'center',alignItems:'center',padding:30}}>
              <TouchableOpacity style={styles.submit_rate} onPress = {this.onPressSubmitButton}>
                <Text style={styles.submit_text}>Submit</Text>
              </TouchableOpacity>

            </View>
          )}
      </View>
    )
  }
  render(){
    return(
      <View style={styles.gameContainer}>
        <View>
            <Modal 
              isVisible={this.props.modalVisible === 1 }
              onBackdropPress={() => this.onPressCloseButton()}
              >
              {this.renderGameRateModal()}
            </Modal>
        </View> 
      </View>
    )
  }
}

