import { TextInput, Text, TouchableOpacity, Image, View, Alert,AsyncStorage } from "react-native"
import React from "react"
import styles from "../../Styles/LoginPageStyles/LoginStyleSheet.js"
import { LoginUsers, socialLogin, socialLoginFB } from '../../Networks/LoginScreenCalls';
import { AntDesign, Ionicons, EvilIcons } from '@expo/vector-icons'
import { _storeData } from '../../Networks/LoginScreenCalls'
import { TextInputLayout } from 'rn-textinputlayout';
import * as Expo from 'expo';
import FacebookAndGoogleLogin from "../../Components/ReUsableComponent/facebookAndGoogleLogin";
import PasswordInputText from 'react-native-hide-show-password-input';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { loggedOutScreen }  from '../../Redux/Actions';
import { productLink } from '../../Networks/DiscoveryCalls'
import * as Types from '../../Redux/Actions/types'
import { CustomTouchableIcon } from  "../../Components/Header/CustomTouchableIcon"

 class Login extends React.Component {

	static navigationOptions = ({ navigation }) => ({
		headerTitle: (<View style={{
			justifyContent: "center",

			marginRight: 30,
			alignItems: "center", flex: 1
		}}>
			<Text style={{
				fontWeight: 'bold', fontSize: 18
			}}> Welcome Back</Text>

		</View>),
		headerLeft: (
			<View style={{marginLeft:8,marginRight:10}}>
          <CustomTouchableIcon
            onPress={() => {
              navigation.navigate("Landing");
            }}
          >
            <Ionicons name="ios-arrow-back" size={25} color={"#000"} />
          </CustomTouchableIcon>
          </View>
        ),
		headerStyle: {
			shadowColor: 'transparent',
			elevation: 0,
		},
		headerTitleStyle: {
		},
		headerBackTitle: ' ',
		headerTintColor: '#000',
	})
	
	constructor(props) {
		super(props);
		this.state = {
			hide: true,
			password: '',
			username: '',
			user_id: '',
			productData:'',
			visibleModal: null,
			
		}                            
		this.LoginIn = this.LoginIn.bind(this)
		this.FBlogIn = this.FBlogIn.bind(this)
		this.GooglelogIn = this.GooglelogIn.bind(this)
		this.SocialLogindata = this.SocialLogindata.bind(this)
		this.socialLogindataFB = this.socialLogindataFB.bind(this)
		this.renderPassword = this.renderPassword.bind(this)
		this.productGameData = this.productGameData.bind(this)
		this.navigateToNextScreen = this.navigateToNextScreen.bind(this)
	}

	renderPassword() {
		this.setState({
			hide: !this.state.hide
		})
	}

	SocialLogindata(googleResponseData) {
		//Google login integration url
		const { accessToken, accessTokenExpirationDate,
			idToken, email, familyName, givenName, id, name } = googleResponseData;
		socialLogin("google", googleResponseData.accessToken, googleResponseData.accessTokenExpirationDate, googleResponseData.idToken, googleResponseData.user.email, googleResponseData.user.familyName, googleResponseData.user.givenName, googleResponseData.user.id, googleResponseData.user.name)
			.then(response => {
				
				if (response.status == 200) {
					this.navigateToNextScreen()
					Alert.alert('Sucessfully Login')
				}
			}).catch((error) => {

				Alert.alert('Login Failed Please try again');
				console.log("failed to login", error.message);
			});
	}

	socialLogindataFB(fbResponse, token) {
		// Facebook login integration url  
		const { url } = fbResponse
		socialLoginFB(fbResponse.url, token).then(response => {
			
			if (response.status == 200) {
				this.navigateToNextScreen()
				Alert.alert('Sucessfully Login')
			}
		}).catch((error) => {
			alert('Login Failed Please try again ');
			console.log("failed to login fb", error.message);
		});
	}

	// Storing user token
	async storeToken(authObject, username) {
		if (authObject !== null) {
			// Store user in Async
			_storeData(authObject, username);
		}
		return true;
	}

	// Storing Username
	async storeUsername(uname) {
		try {
			await AsyncStorage.setItem("username", uname);//ACCESS_TOKEN = username
		} catch (error) {
			console.log(error)
		}
	}

	navigateToNextScreen() {
		const { gameId, screenName, gameData } = this.props
		this.props.loggedOutScreen(Types.LAST_LOGGEDOUT_SCREEN)
		if(screenName != "Login" && gameId  ) {
			this.props.navigation.navigate(screenName, { game_id: gameId, })
		} else {
			this.props.navigation.navigate("HomePage",{loginUser:"loginuser"})
		}
	}

	LoginIn() {
		// Login integration url
		const { username, password } = this.state;
		LoginUsers(username, password).then(response => {
			if (response.status == 200) {
				
				if (response.data.user_status) {
					this.storeToken(response.data)
					this.storeUsername(this.state.username)
					this.setState({
						user_id: response.data.user_id,
						username: this.state.username,	 
					})
					this.navigateToNextScreen()
				}
			}
		}).catch((error) => {
			console.log("failed to login", error.message);
			if(error.message == "Request failed with status code 401" ){
				Alert.alert("Please enter valid username and password")
			}
			throw new Error(error);
		});
			
	}

	async  FBlogIn() {
		//Face book login into the app
		try {
			const {
				type,
				token,
			} = await Expo.Facebook.logInWithReadPermissionsAsync('2032522483449944', {
				permissions: ['public_profile', 'email'],
			});
			if (type === 'success') {
				// Get the user's name using Facebook's Graph API
				const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,about,picture,birthday,hometown,first_name,last_name`);
				const jsonFB = JSON.stringify(await response.json())
				
				this.socialLogindataFB(response, token)
			} else {
				Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`)
			}
		} catch ({ error }) {
			Alert.alert(`Facebook Login Error: ${message}`);
		}
	}
	async  GooglelogIn() {
		// Google login into the app
		const clientId = '656965400486-h723qh179jea8mhnsjja3v2bge01gerg.apps.googleusercontent.com'
		try {
			const result = await Expo.Google.logInAsync({
				clientId: clientId,
				scpoes: ['profile', 'email']
			});
			if (result.type === 'success') {
				this.SocialLogindata(result)
				
				return result
			}
		} catch (error) { 
			
			return ({ error: true })
		}
	}

	productGameData(){
		
		if(this.props.gameId || this.props.screenName){
			productLink(this.props.gameId).then((response) => {
				
				this.props.navigation.navigate(this.props.screenName,{productData:response.data,game_id:this.props.gameId})
			})
			.catch((error) => {
				console.log('Product link error', error.message)
			})
		}
	}
   
	componentDidMount() {
		this.productGameData()
		this.props.navigation.setParams({
			onGroupPressed: this.onGroupPressed,
		})
	}

	displayModal = () => {
		this.setState({ isModalVisible: !this.state.isModalVisible });
	}
	
	setModalVisible(visible) {
		this.setState({isModalVisible: visible});
	}
	
	render() {
		return (
			<View style={styles.Loginmainview}>
				<View style={styles.NormLoginview}>
					<View
						style={styles.signUpFieldsView}>
							<TextInputLayout
								focusColor={'#B9B6B5'}
				 			>
						<TextInput autoCapitalize = 'none'
							autoCorrect={false}
							placeholder="Username or Email"
							style={styles.yourNicknameTextInput}
							onChangeText={(username) => this.setState({ username })}
						/></TextInputLayout>
						
						<PasswordInputText autoCapitalize = 'none'
							autoCorrect={false}
							tintColor = '#B9B6B5'
							secureTextEntry={this.state.hide}
							onChangeText={(password) => this.setState({ password })}
						/>
					</View>
					<View style={styles.Forgotpassview}>
						<TouchableOpacity
							onPress={() => { this.props.navigation.navigate("Email") }}
							style={styles.forgotYourPasswordButton}>
							<Text
								style={styles.forgotYourPasswordButtonText}>Forgot your password?</Text>
						</TouchableOpacity>

					</View>

					{(this.state.username == '' || this.state.password == '') &&

						<TouchableOpacity
							onPress={ this.LoginIn}
							style={styles.loginButton}>
							<Text
								style={styles.loginButtonText}>Login</Text>
						</TouchableOpacity>}
					{(this.state.username != '' && this.state.password != '') &&
						<TouchableOpacity
							onPress={this.LoginIn}
							style={styles.loginSuccessButton}>
							<Text
								style={styles.loginButtonText}>Login</Text>
						</TouchableOpacity>}
				</View>
				<View style={styles.SocialLoginview}>
					<View>
						<FacebookAndGoogleLogin 
							title={"One-tap sign in"} 
							navigateToNextScreen={this.navigateToNextScreen}
							navigation={this.props.navigation}
							isLoginScreen={true}/>
					</View>
				</View>
			</View>
		)
	}
}


const mapStateToProps = state => ({
	gameId: state.loggedOutReducer.game_id,
	screenName: state.loggedOutReducer.screen_name,
	gameData: state.GameIDReducer.gameData
})

const mapDispatchToProps = dispatch => (
	bindActionCreators({
		loggedOutScreen,
	}, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Login)
