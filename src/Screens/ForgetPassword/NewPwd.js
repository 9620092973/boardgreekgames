//
//  Welcome
//  FORGETPASSWORD3
//
//  Created by Supernova.
//  Copyright © 2018 Supernova. All rights reserved.
//

import { Image, Text, TouchableOpacity, Alert, View, TextInput } from "react-native";
import styles from "../../Styles/ForgetPassword/NewPwdStyleSheet.css";
import React from "react";
import { authResetPassword } from '../../Networks/LoginScreenCalls'
import PasswordInputText from 'react-native-hide-show-password-input';
import { CustomTouchableIcon } from  "../../Components/Header/CustomTouchableIcon"
import { AntDesign, EvilIcons,Ionicons } from '@expo/vector-icons'


export default class NewPwd extends React.Component {

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


	constructor() {
		super();
		this.state = {
			hidePassword: true,
			confirmhidePassword: true,
			email: '',
			Newpassword: '',
			ConfirmPassword: '',
			otp: ""

		}
		this.renderResetpassword = this.renderResetpassword.bind(this);
		this.PasswordHide = this.PasswordHide.bind(this);
		this.confirmPasswordHide = this.confirmPasswordHide.bind(this);
	}
	PasswordHide() {
		this.setState({ hidePassword: !this.state.hidePassword });
	}
	confirmPasswordHide() {
		this.setState({ confirmhidePassword: !this.state.confirmhidePassword });
	}
	componentDidMount() {

	}



	renderResetpassword() {
		if(!this.state.otp) {
			Alert.alert("Please enter otp sent to your registered email address");
		}
		else if (this.state.Newpassword !== this.state.ConfirmPassword) {
			Alert.alert("Password don't match");
		}
	
		authResetPassword(this.props.navigation.state.params.email, this.state.Newpassword, parseInt(this.state.otp)).then((response) => {
		
			if (response.status == 200) {
				Alert.alert("Password successfully changed");
				this.props.navigation.navigate("Login")
			} else {
				Alert.alert("Please confirm password with new password or valid otp")
			}
		}).catch((error) => {
				console.log("error Reset Password", error.message);
		})
	}


	render() {

		return (<View
			style={styles.welcomeView}>

			<Text
				style={styles.labelTwoText}>Enter New Password </Text>
			<View style={styles.ForgotFieldsView}>
				<PasswordInputText autoCapitalize='none'
					autoCorrect={false}
					//style={styles.textFieldTwoTextInput}
					label='Enter Otp'
					placeholderTextColor={'black'}
					underlineColorAndroid='transparent'
					inputStyle={{ color: 'black' }}
					borderBottomColor="black"
					onChangeText={(otp) => this.setState({ otp })}
					secureTextEntry={this.state.confirmhidePassword} />

				<PasswordInputText autoCapitalize='none'
					autoCorrect={false}
					//style={styles.textFieldTextInput}
					label='New Password'
					placeholderTextColor={'#7F7F7F'}
					underlineColorAndroid='transparent'
					inputStyle={{ color: '#000' }}
					onChangeText={(Newpassword) => this.setState({ Newpassword })}
					secureTextEntry={this.state.hidePassword} />

				<PasswordInputText autoCapitalize='none'
					autoCorrect={false}
					//style={styles.textFieldTwoTextInput}
					label='Confirm Password'
					placeholderTextColor={'black'}
					underlineColorAndroid='transparent'
					inputStyle={{ color: 'black' }}
					borderBottomColor="black"
					onChangeText={(ConfirmPassword) => this.setState({ ConfirmPassword })}
					secureTextEntry={this.state.confirmhidePassword} />

			</View>
			{(this.state.Newpassword.length < 4 || this.state.ConfirmPassword.length < 4) && <TouchableOpacity
				onPress={this.renderResetpassword}
				style={styles.buttonButton}>
				<Text
					style={styles.buttonButtonText}>Change password</Text>
			</TouchableOpacity>
			}

			{(this.state.Newpassword.length >= 4 && this.state.ConfirmPassword.length >= 4) && <TouchableOpacity
				onPress={this.renderResetpassword}
				style={styles.changeButton}><Text
					style={styles.changeText}>Change password</Text>
			</TouchableOpacity>}
		</View>

		)
	}
}
