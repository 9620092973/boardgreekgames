//
// ForgetPassword1
// FORGETPASSWORD1
//
// Created by Supernova.
// Copyright © 2018 Supernova. All rights reserved.
//

import { View, Image, TextInput, TouchableOpacity, Text,Alert } from "react-native"
import React from "react"
import styles from "../../Styles/ForgetPassword/EmailStyleSheet.css"
import { TextInputLayout } from 'rn-textinputlayout'
import { authForgotPassword } from '../../Networks/LoginScreenCalls'
import { AntDesign, EvilIcons,Ionicons } from '@expo/vector-icons'
import { CustomTouchableIcon } from  "../../Components/Header/CustomTouchableIcon"

import { withNavigation } from "react-navigation";

class Email extends React.Component {

static navigationOptions = ({ navigation }) => ({
	headerTitle: (<View style={{
	flex: 1
	}}>
		<Text style={{
			fontWeight: 'bold', fontSize: 18
		}}> Reset Password </Text>

	</View>),
	headerLeft: (
             <View style={{marginLeft:8,marginRight:10 }}>
          <CustomTouchableIcon
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Ionicons name="ios-arrow-back" size={25} color={"#000"} />
          </CustomTouchableIcon>
          </View>
        ),
	headerStyle: {
		shadowColor: 'transparent',
		elevation: 0
	},
	headerTitleStyle: {
	},
	headerBackTitle: ' ',
	headerTintColor: '#000',
})

constructor(props){
    super(props);
    this.state = {
		email:'',
		emailValidate: '',
		hidePassword: true,
		confirmhidePassword:true,
		email:'',
		Newpassword:'',
		ConfirmPassword:'',
		otp:'',
		emailValidate: '',
		showOTP:false,
		code_length:0,
    }
	this.renderForgotPassword = this.renderForgotPassword.bind(this);
	// this.renderOTP = this.renderOTP.bind(this);
	this.validateEmail = this.validateEmail.bind(this);
	this.OnOTPChange = this.OnOTPChange.bind(this);
}


validateEmail(email) {
	let alpha_numeric = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,4}$/
	this.setState({
		email: email,
		isNextButtonPressed: false,
	})
	if (email == "") {
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


renderForgotPassword(){
    authForgotPassword(this.state.email)
    .then(response => {

        if(response.status == 200){
			Alert.alert('An OTP sent to your registered email id')

			this.props.navigation.navigate('NewPwd',{email:this.state.email})
			this.setState({
				showOTP:true,
			}) 
		} else if (response.status == 400){
			Alert.alert('Please enter registered email id')	
        }
    }).catch((error)=> {
        console.log("email not found",error.message);
    });
} 

OnOTPChange(code){

if(code.length==4){
	this.setState({
		code_length: 4, otp: code
	})
}
}

render() {
    return (
            <View
                style={styles.viewThreeView}>
              
					<View>
                    <Text style={styles.labelTwoText}>
					Please enter your registered email address,so we will send OTP to your email{"\n"} </Text>
                    <TextInputLayout focusColor={'#B9B6B5'}>
					<TextInput
                        autoCorrect={false}
                        style={styles.textFieldTextInput}
                        autoCapitalize='none'  
                        placeholder={'Email'}
                        placeholderTextColor={'#7F7F7F'}
                        underlineColorAndroid='transparent'
                        value={this.state.email}
						inputStyle={{color:'#000'}}
						onChangeText={this.validateEmail}
                        // onChangeText={(email) =>this.setState({email}) }
                    /></TextInputLayout>
			<View
				style={styles.separatorView} />
			{this.state.isNextButtonPressed && <Text style={{ color: 'red', fontSize: 13, marginLeft: 20, marginTop: 0 }}>
				{this.state.emailValidate}
			</Text>}
			{(this.state.email == '' || this.state.emailValidate != '') && <TouchableOpacity
				onPress={this.renderForgotPassword}
				style={styles.buttonButton}>
				<Text
					style={styles.buttonThreeButtonText}>Send OTP</Text>
			</TouchableOpacity>}
			{this.state.email != '' && this.state.emailValidate == '' && <TouchableOpacity
				onPress={this.renderForgotPassword}
				style={styles.buttonSuccessButton}>
				<Text
					style={styles.buttonThreeButtonText} style={{ color: "white" }}>Send OTP</Text>
			</TouchableOpacity>}
            </View>
			 </View>
			 
    )
  }
}

export default withNavigation(Email)
