import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet,Modal, Button, ImageBackground, Dimensions, Platform } from 'react-native';
import { AntDesign, MaterialIcons, EvilIcons } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';
//import styles from '../../Styles/loggedIn.css'
//import index from '../../constants/index'
import { _TrendingGame } from '../../Networks/ReUsableCalls';
import { productLink } from '../../Networks/DiscoveryCalls';
import { LinearGradient } from 'expo-linear-gradient'

class TrendingGames extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            game_id: '',
            screenWidth: null,
            responseGame: null,
            isLoading: true,
            image: null,
            animating: true,
            // fullscreenWidth: null,
            // fullscreenHeight: null
        }
        this.closeActivityIndicator = this.closeActivityIndicator.bind(this);
        this.renderTrendingGames = this.renderTrendingGames.bind(this);
        this.navigateToProductPage = this.navigateToProductPage.bind(this);
        this.onSuccess = this.onSuccess.bind(this);
        this.onFailure = this.onFailure.bind(this);
    }

    componentDidMount() {
        const screenWidth = (Math.round(Dimensions.get('window').width) / 2);
        const fullscreenWidth = (Math.round(Dimensions.get('window').width));
        const fullscreenHeight = (Math.round(Dimensions.get('window').height));

        this.setState({
            screen_width: screenWidth,
            full_screen_width: fullscreenWidth,
            full_screen_height: fullscreenHeight
        })
        this.closeActivityIndicator();
        this.renderTrendingGames();
    }

    onSuccess(response){
        if (response) {
                this.setState({
                    isLoading:false,
                   // data: response,
                    responseGame: response
                });
            }


    }
    onFailure(error){
        console.log("@Error [TrendingGame]", error.message);

    }

    // Treanding Game Response
    renderTrendingGames() { 
        _TrendingGame(this.onSuccess,this.onFailure)
            
    }

// Close Loading
closeActivityIndicator = () => setTimeout(() => this.setState({
    animating: false }), 1000)

    navigateToProductPage(game_id) {
        productLink(game_id).then((response) => {

            if (response.status == 200) {
                this.props.navigation.navigate('GameInfo', {
                    productData: response.data,
                    game_id: game_id
                })
            }
        })
            .catch((error) => {
                console.log("@Error [TrendingGame]", error.message)
            })
    }

    navigateToPhotoPage(game_id) {
        productLink(game_id).then((response) => {

            if (response.status == 200) {
                this.props.navigation.navigate('SinglePostModal', {
                    productData: response.data,
                    game_id: game_id
                })
            }
        })
            .catch((error) => {
                console.log("@Error [TrendingGame]", error.message)
            })
    }
    

    render() {
        var trendingData = this.props.ViewData;
        if(!this.state.responseGame){
            return(
                <Modal
            transparent 
            animationType={'fade'}>
              <View style={{height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}}>
                      <Image style={{width:"100%",height:"100%"}} source={require('../../../assets/Image/trending.png')} />
              </View>
              </Modal>
            )     
          }
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}>
                <View style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 0, marginBottom: 10, marginStart: 0 }}>

              
            {trendingData.map((items, index) => {
                let card_image = items.card_image[0] ? { uri: items.card_image[0] } : require('../../../assets/Image/ABCme.jpeg')

                return <View key={index}>
                    <View style={{ marginTop: 10, marginLeft: 10 }}>
                        <TouchableOpacity onPress={() => { this.navigateToProductPage(items.id) }}>
                            <ImageBackground
                                source={card_image}
                                style={{ width: this.state.screen_width - 15, height: this.state.screen_width - 30, borderRadius: 5 }}
                                imageStyle={{ borderRadius: 4 }}>
                                <View style={{ flex: 1, justifyContent: "flex-end" }}>
                                    <LinearGradient
                                        colors={['rgba(52, 52, 52, 0)', '#0F0E0E']}
                                        style={{ flex: 1, justifyContent: "flex-end" }}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 0, y: 1 }}>
                                        <Text style={styles.cardText}>{items.name}</Text>
                                        <Text style={styles.cardTextPlayers}>{items.minimum_players}-{items.maximum_players} Players</Text>
                                    </LinearGradient>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>

                </View>
            })}
                
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    cardText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
        marginLeft: 5,
        marginTop: 5,
        marginBottom:5
    },
    cardTextPlayers: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 12,
        margin: 5
    },
    imageEightImage: {
        backgroundColor: "transparent",
        width: 150,
        height: 130,
        marginLeft: 15,
    }
})
export default withNavigation(TrendingGames);





