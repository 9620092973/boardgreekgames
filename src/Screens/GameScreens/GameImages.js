import React from "react";
import { View, ScrollView, Text, Image,TouchableOpacity,Platform } from "react-native"
import { LinearGradient } from "expo-linear-gradient";
import styles from "../../Styles/GameScreenStyles/GameImagesStyleSheet"
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import { GameImageOrVideo } from '../../Networks/GameScreenCalls';
import { CustomTouchableIcon } from "../../Components/Header/CustomTouchableIcon";

export default class GameImages extends React.Component {
	static navigationOptions = ({ navigation}) => ({
		headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
      	},
		headerRight: (
			<View style={{marginRight:10}}>
		    <CustomTouchableIcon onPress={() => {navigation.navigate("Search");}}
		    					style={{marginRight:20}}>
		       <EvilIcons name='search' size={28} color={'white'} />
		    </CustomTouchableIcon>
		    </View>
		),
		headerBackground: (
			<LinearGradient
				colors={['#001a33', '#004f99']}
				style={{ flex: 1 }}
				start={{x: 0, y: 0}}
				end={{x: 1, y: 0}}
			/>  
		),
		headerTintColor: 'white',
		headerLeft: (
        <View style={{ flexDirection: "row", alignItems: "center",marginLeft:8,marginRight:10}}>

          <CustomTouchableIcon onPress={() => navigation.goBack()}>
            <Ionicons name="ios-arrow-back" size={25} color={"white"} />
          </CustomTouchableIcon>

          <Text
            style={{
              marginBottom: Platform.OS === 'ios' ? 4 : null,
              color: "#fff",
              fontWeight: "bold",
              fontSize: 18,

            }}>
            Game Images
          </Text>
        </View>
      ),
	})

	constructor(props) {
		super(props)
		this.state = {
			gameImage:[],
			Image:null
		}
		this.renderGameImage = this.renderGameImage.bind(this)
		this.renderImage = this.renderImage.bind(this)
	}
	componentDidMount(){		
		this.renderGameImage()
	}

	// fetching the game Image data
	renderGameImage(){
		GameImageOrVideo(this.props.navigation.state.params.game_id,"images")
		.then((response) => {

			this.setState({gameImage:response.data.images,
							Image:response.data.images[0]
						})
		}).catch((error)=> {
			console.log("[error] gameImage ",error.message)
		})

	}
	onpressImage = (items) => {	
		this.setState({Image:items})
	}
	renderImage(items,index){				
       return(
		   	<View style={styles.gameImageView}>			
			    <TouchableOpacity 
			    	onPress={() => {this.onpressImage( items)}}>
					<Image
						source={{uri:items}}
						style={styles.imageSixImage}
					/>
				</TouchableOpacity>  
			</View>	
		)					
	}
	render() {
		return (
			<View>
			{this.state.gameImage && this.state.Image ? 
				<View style={styles.profileView}>
			 		<View>
						<Image
							source={{uri:this.state.Image}}
							style={styles.imageSevenImage}/>
					</View>
					<ScrollView horizontal={true}>
						{ this.state.gameImage.map(this.renderImage)}
					</ScrollView>
						
				 </View>
				:
				<View style={{padding:25}}> 
	            	<Text style={styles.NoImages}>Sorry, there are no game images.</Text>
	          	</View>
	      }
			 </View>
		)
		
	}
}
