
import React from "react"
import { View, Image, Text, TextInput, TouchableOpacity, Button, ScrollView, ImageBackground, StatusBar } from "react-native"
import styles from "../../Styles/GameInfoStyles/GameInfoStyleSheet";
import { _TrendingGame } from '../../Networks/ReUsableCalls'
import { AntDesign, MaterialIcons, EvilIcons,FontAwesome } from '@expo/vector-icons';
import { productLink } from '../../Networks/DiscoveryCalls';
import { LinearGradient } from 'expo';
 

export default class UgcFeedImage extends React.Component {

    constructor(props) {
		super(props)
		this.state = {
            productData: "",
			game_id: this.props.game_id,
		 
		}
		 
		this.navigateToProductPage = this.navigateToProductPage.bind(this);
	 
		// this.updateParentComponent = this.updateParentComponent.bind(this); 
    }
    
    componentDidMount() {
       this.navigateToProductPage(this.state.game_id)
	}

 

	 
	navigateToProductPage(game_id) {
		productLink(game_id).then((response) => {

			if (response.status == 200) {
				 this.setState({productData: response.data, game_id: game_id})  
			}
		})
			.catch((error) => {
				console.log('@Error [UGCFeedImage]', error.message)
			})
    }
    


    render(){
		let card_image = this.state.productData.card_image[0] ? { uri: this.state.productData.card_image[0] } : require('../../../assets/Image/ABCme.jpeg')
        return (

            <View
					pointerEvents="box-none"
					style={{
						height: 184,
					}}>

					<ImageBackground
						source={card_image}
						style={styles.gameimageImage} >
						<View style={{ flex: 1, justifyContent: "flex-end" }}>
							<LinearGradient
								colors={['rgba(52, 52, 52, 0)', '#0F0E0E']}
								style={{ flex: 1, justifyContent: "flex-end" }}
								start={{ x: 0, y: 0 }}
								end={{ x: 0, y: 1 }}
							>

								<View style={{ flexDirection: "row", marginBottom: 25 }}>

									<View style={{
										flex: 1, flexDirection: "row", marginLeft: 15,
										justifyContent: "flex-start", alignItems: "flex-start"
									}}>

										<TouchableOpacity onPress={() => { this.props.navigation.navigate("GameImages") }}
											style={{ flexDirection: "row", flex: 1, alignItems: "center", }}>
											<FontAwesome name='camera' size={18} color={"#fff"} style={{ fontWeight: 'bold' }} />
											<Text
												style={styles.labelFourText}>12</Text>
										</TouchableOpacity>
										<TouchableOpacity onPress={() => { this.props.navigation.navigate("GameVideos") }}
											style={{ flexDirection: 'row', flex: 1, alignItems: "center" }}>
											<AntDesign name='playcircleo' size={18} color={"#fff"} style={{ fontWeight: 'bold' }} />
											<Text
												style={styles.labelThreeText}>5</Text>
										</TouchableOpacity>
									</View>

									<View style={{ flex: 1 }}></View>

								</View>
							</LinearGradient>
						</View>
					</ImageBackground>
				</View>
        )

            
        
    }
}