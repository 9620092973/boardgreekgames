//
//  Signup3
//  SignUp2
//
//  Created by Supernova.
//  Copyright © 2018 S7works. All rights reserved.
//
 
import { TouchableOpacity, TextInput, Image, Text, View, Alert } from "react-native"
// import styles from "./Signup3StyleSheet"
import styles from '../../Styles/SignUp/SignupEmailStyleSheet'
import React from "react"
import { TextInputLayout } from 'rn-textinputlayout';
import { AntDesign, EvilIcons, Ionicons } from '@expo/vector-icons'
import { CustomTouchableIcon } from  "../../Components/Header/CustomTouchableIcon"


export default class Signup3 extends React.Component {

	static navigationOptions = ({ navigation }) => ({
		headerTitle: (<View style={{
				justifyContent: "center",

				marginRight: 30,
				alignItems: "center", flex: 1
		}}> 
				<Text style={{
						fontWeight: 'bold', fontSize: 18

				}}> Sign up </Text>

		</View>),
		headerLeft: (
			<View style={{marginLeft:8}}>
			<CustomTouchableIcon
				onPress={() => {
					navigation.navigate("Signup2");
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
		headerBackTitle: '',
		headerTintColor: '#000',
})
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			emailValidate: '',
		}
		this.navigationToBirthday = this.navigationToBirthday.bind(this);
		this.validateEmail = this.validateEmail.bind(this);
	}

	componentDidMount() {

		this.props.navigation.setParams({
			onGroupPressed: this.onGroupPressed,
		})
	}

	onGroupPressed = () => {

		this.props.navigation.goBack()
	}

	navigationToBirthday() {
		if (this.state.email != '' && this.state.emailValidate == '') {
			this.props.navigation.navigate('Signup4', {
				Usrname: this.props.navigation.state.params.Usrname,
				firstName: this.props.navigation.state.params.firstName,
				lastName: this.props.navigation.state.params.lastName,
				male_checked: this.props.navigation.state.params.male_checked,
				female_checked: this.props.navigation.state.params.female_checked,
				others_checked: this.props.navigation.state.params.others_checked,
				email: this.state.email,
				date: null,
				State: null,
				country: null
				// email:this.props.navigation.state.params.email,
				// password:this.props.navigation.state.params.password,
				// terms_Conditions:this.props.navigation.state.params.terms_Conditions,
				// newsLetter:this.props.navigation.state.params.newsLetter
			})
		}
	    else if(this.state.emailValidate == '' || this.state.email==''){
			Alert.alert("Please enter your Email ID")
		 }
		this.setState({
			isNextButtonPressed: true,
		})
	
	}

	validateEmail(email) {
		let alpha_numeric = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,4}$/
		this.setState({
			email: email,
			isNextButtonPressed: false,
		})
		if (email =='') {
			this.setState({
				emailValidate: "Required email",
			})
		}
		else if (!alpha_numeric.test(email)) {
			this.setState({
				emailValidate: "Email is invalid, only alphanumeric characters are allowed",
			})
		}
		else {
			this.setState({
				emailValidate: "",
			})
		}
	}

	render() {

		return <View
			style={styles.loginView}>
			<Text
				style={styles.labelText}>What’s your Email?</Text>
				
				<View
				style={styles.signUpFieldsView}>

				<TextInputLayout
				focusColor={'#B9B6B5'}
					style={{
					}}>
					<TextInput autoCapitalize='none'
						autoCorrect={false}
						placeholder="Email"
						style={styles.yourNicknameTextInput}
						onChangeText={this.validateEmail} />
				</TextInputLayout>



			</View>
			<View
				style={styles.separatorView} />
			{!this.state.isNextButtonPressed && <Text style={{ color: 'red', fontSize: 13, marginLeft: 20, marginTop: 0 }}>
				{this.state.emailValidate}
			</Text>}
			{(this.state.email == ''  || this.state.emailValidate != '' ) && <TouchableOpacity
				onPress={this.navigationToBirthday}
				style={styles.buttonThreeButton}>
				<Text
					style={styles.buttonThreeButtonText}>Next</Text>
			</TouchableOpacity>}
			{this.state.email != '' && this.state.emailValidate == '' && 
				<TouchableOpacity
					onPress={this.navigationToBirthday}
					style={styles.buttonThreeSuccessButton}>
					<Text
						style={styles.buttonThreeButtonText} style={{ color: "white" }}>Next</Text>
				</TouchableOpacity>}

		</View>

	}
}
