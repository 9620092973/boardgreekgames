import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet,Modal, Button, ImageBackground, Dimensions, Platform } from 'react-native';
import { AntDesign, MaterialIcons, EvilIcons } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';
//import styles from '../../Styles/loggedIn.css'
//import index from '../../constants/index'
import { _TrendingGame } from '../../Networks/ReUsableCalls';
import { productLink } from '../../Networks/DiscoveryCalls';
import { LinearGradient } from 'expo-linear-gradient'
import { Video } from 'expo-av';

class UploadedPhotos extends React.Component {
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
        }
        this.closeActivityIndicator = this.closeActivityIndicator.bind(this);
        this.renderTrendingGames = this.renderTrendingGames.bind(this);
       // this.navigateToProductPage = this.navigateToProductPage.bind(this);
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
        console.log("@Error [UploadedPhotos]", error.message);

    }

    // Treanding Game Response
    renderTrendingGames() { 
        _TrendingGame(this.onSuccess,this.onFailure)    
    }

// Close Loading
closeActivityIndicator = () => setTimeout(() => this.setState({
    animating: false }), 1000)


    // navigateToPhotoPage(game_id) {
    //     productLink(game_id).then((response) => {

    //         if (response.status == 200) {
    //             this.props.navigation.navigate('SinglePostModal', {
    //                 productData: response.data,
    //                 game_id: game_id
    //             })
    //         }
    //     })
    //         .catch((error) => {
    //             console.log("@Error [TrendingGame]", error.message)
    //         })
    // }
    
    

    render() {
        const screenWidth = Math.round(Dimensions.get("window").width);
        var uploadedData = this.props.ViewData;
        let imageFormats = ["png", "jpg", "jpeg", "bmp", "gif", "webp", "psd"];
        let videoFormats = ["mp4","m4a","m4v","f4v","f4a","m4b","m4r","f4b","mov","3gp","3gp2","3g2","3gpp","3gpp2","ogg","oga","ogv","ogx", "wmv","wma","asf*","webm","flv","AVI*","QuickTime*","HDV*","OP1a*","OP-Atom*","ts","MPEG-2 PS","MPEG-2 TS*","WAV","Broadcast","WAV*","LXF","GXF*","VOB*"];
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

                    {uploadedData.map((items, index) => {
                            card_image = items.images[0] ? { uri: items.images[0] } : require('../../../assets/Image/ABCme.jpeg')
                            let content_length = items.images[0] ? items.images[0].length : 0
                            for (let index = 0; index < content_length; index++) {
                                let uri = items.images[index]
                                ? items.images[index]
                                : "../../../assets/Image/stormland.jpg";
                            const uriParts = uri.split(".");
                            const fileType = uriParts[uriParts.length - 1];
                            const singlePhotoStyle = index % 2 == 0 ? { marginRight: 10 } : {};
                        return <View key={index}  style={[
                            { width: screenWidth / 2 - 15},
                            singlePhotoStyle
                          ]}>
                            <View style={{ marginTop: 10, marginLeft: 10 }}>
                                <TouchableOpacity >
                                    {imageFormats.includes(fileType) &&
                                    <ImageBackground
                                        source={card_image}
                                        imageStyle={{ borderRadius: 10}}
                                        style={{ width: screenWidth / 2 - 15, height: screenWidth / 2 - 15, borderRadius:10 }}>
                                    </ImageBackground>
                                    }
                                    {videoFormats.includes(fileType) &&
                                     <Video
                                       source={card_image}
                                       isMuted={false}
                                       rate={1.0}
                                       resizeMode="cover"
                                       isLooping
                                       style={{ width: screenWidth / 2 - 15, height: screenWidth / 2 - 15, borderRadius:10 }}
                                       useNativeControls={true}
                                     />
                                    }
                                    <Text style={styles.cardText}
                                    numberOfLines={1}
                                    maxLength={30} >{items.post_title}</Text>

                                    <View style={styles.LikeCommentugc}>
                                        <TouchableOpacity>
                                            <View style={styles.comment_ugc}>
                                            <AntDesign name="like1" size={15} color="grey" />
                                            <Text style={styles.profileNumbers}>{items.likes}</Text>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <View style={styles.comment_photo_count}>
                                            <MaterialIcons name="mode-comment" size={15} color="grey" />
                                            <Text style={styles.profileNumbers}>
                                                {items.commentCount}
                                            </Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        }
                    })}
                
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    LikeCommentugc: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 6
      },
    comment_ugc: {
        flexDirection: "row",
        alignItems: "center",
        padding: "6%",
        paddingLeft: 0,
        alignSelf: 'flex-start'
      },
    profileNumbers: {
        color: "rgba(0, 0, 0, 0.7)",
        fontSize: 12,
        paddingLeft: "3%",
        fontWeight: "400"
      },
    comment_photo_count: {
        flexDirection: "row",
        alignItems: "center",
        padding: "6%",
        paddingLeft: 0,
        alignSelf: "flex-start"
      },
    cardText: {
        color: "#000",
        fontWeight: 'bold',
        fontSize: 14,
        marginTop: 5,
        marginLeft:5,
        marginBottom:5,
    },
    Image: {
        borderRadius: 10,
      },
})

export default withNavigation(UploadedPhotos);
