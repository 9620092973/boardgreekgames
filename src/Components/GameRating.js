import {
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import Image from "react-native-remote-svg";
import React from "react";
import styles from "../Styles/GameInfoStyles/GameInfoStyleSheet";
import { AverageRateGame } from "../Networks/ProductPageCalls";
import * as Progress from 'react-native-progress';
import GameRateModal from './GameRateModal.js'

 export default class GameRating extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      productData: [],
      game_rating: "",
       modalVisible: null,
       Average_rategame:[],
       oneCount:'',
       twoCount:'',
       threeCount:'',
       fourCount:''
    };
    
    this.renderRateModal = this.renderRateModal.bind(this);
    this.AverageRating = this.AverageRating.bind(this);
  }
    componentDidMount(){
      this.AverageRating()
    }

  //Rate game modal 
  renderRateModal(visible) {
    if (this.props.navigation_from == "WelcomePage") {
      this.props.setModalVisible(true);
    }
    else{
      this.setState({
        modalVisible: visible,
      })
    }
  }

  AverageRating(){
    AverageRateGame(this.props.game_id).then((response) => {
      const { oneCount,twoCount,threeCount,fourCount} = response.data;
      const total = oneCount+twoCount+threeCount+fourCount;
      let oneProcess = Math.round(oneCount/total * 100) / 100;
      let twoProcess = Math.round(twoCount/total * 100) / 100;
      let threeProcess = Math.round(threeCount/total * 100) / 100;
      let fourProcess = Math.round(fourCount/total * 100) / 100;

      this.setState({Average_rategame:response.data,
                      oneCount:oneProcess,
                      twoCount:twoProcess,
                      threeCount:threeProcess,
                      fourCount:fourProcess
      }) 
    })
    .catch(error => {
      console.log("@Error [GameInfo] GameRating",error.message)
    })
  }

  render() {  
    return (
      <View style={styles.welcomeView}>
        <View style={styles.ratingView}>
            <View>
              <View style={{ flexDirection: "row",justifyContent:'space-between',padding:15}}>
                <Text style={styles.labelNineText}>Average Rating</Text>
                    <TouchableOpacity style={styles.RateButton}
                      onPress={() => {this.renderRateModal(1)}}>
                      <Text style={styles.RateText}>Rate this Game</Text>
                    </TouchableOpacity>
              </View>
             <View style={styles.averageView}>
                   <AverageColor 
                     count = {this.state.oneCount}
                     image= {require("../../assets/Image/sad_red.png")}
                     color={"red"}
                     style={styles.imageEightImage}
                   />
                   <AverageColor 
                     count = {this.state.twoCount}
                     image= {require("../../assets/Image/nutrl_yellow.png")}
                     color={'#FFC300'}
                     style={styles.imageSevenImage}
                   />
                    <AverageColor 
                     count = {this.state.threeCount}
                     image= {require("../../assets/Image/happy_green.png")}
                     color={'#1DF46B'}
                     style={styles.imageNineImage}
                   />
                    <AverageColor 
                     count = {this.state.fourCount}
                     image= {require("../../assets/Image/ratelove_green.png")}
                     color={'green'}
                     style={styles.imageFiveImage}
                   />
              </View>
            </View>
          </View>
          <View style={styles.viewThreeView} /> 
          {this.state.modalVisible == 1 && 
            <View>
              <GameRateModal 
                modalVisible = {this.state.modalVisible}
                renderRateModal = {this.renderRateModal}
                game_rating = {this.props.game_rating}
                navigation_from={this.props.navigation_from}
                setModalVisible={this.props.setModalVisible}
                fetchProductData={this.props.fetchProductData}
                AverageRating = {this.AverageRating}
                game_id = {this.props.game_id}

              />
            </View>
          }
      </View>
    );
  }
}

class  AverageColor extends React.Component{
  render(){
   let count = Math.round(this.props.count*100) ? Math.round(this.props.count*100) : 0
    let progressCount = this.props.count ? this.props.count : 0  

    return(
          <View>
              <Image
                source={this.props.image}
                style={this.props.style}
              />
        
            <Progress.Bar progress={progressCount} width={50} height={3.5} 
                        style={{marginTop:10}} color={this.props.color} borderColor={"#eee"}
                        unfilledColor={"#ddd"} borderRadius={3}
             />
            <Text style={{fontSize:12,padding:5}}>{count}%</Text>
          </View>

      )
  }
}


