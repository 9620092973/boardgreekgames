//
//  Signup
//  DoubleCritical  
//
//  Created by Supernova.
//  Copyright © 2018 S7Works. All rights reserved.
//

import { Text, TextInput, Image, TouchableOpacity, View, Alert } from "react-native"
import React from "react"
//import styles from "./SignupStyleSheet"
import styles from '../../Styles/SignUp/SignupFnameLnameStyleSheet'
import { AntDesign, EvilIcons, Ionicons } from '@expo/vector-icons'
import { TextInputLayout } from 'rn-textinputlayout';
import { CustomTouchableIcon } from  "../../Components/Header/CustomTouchableIcon"

export default class Signup1 extends React.Component {
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
              navigation.navigate("Signup");
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
			firstName: '',
			lastName: '',
		}
		this.onpressNavigation = this.onpressNavigation.bind(this);
	}

	componentDidMount() {

		this.props.navigation.setParams({
			onGroupPressed: this.onGroupPressed,
			onItemPressed: this.onItemPressed,
		})
	}

	onSignUpPressed = () => {

	}

	onLogInPressed = () => {

	}

	onOneTapSignInPressed = () => {

	}

	onButtonPressed = () => {

	}

	onButtonTwoPressed = () => {

	}

	onGroupPressed = () => {

		this.props.navigation.goBack()
	}

	onItemPressed = () => {

	}
	onpressNavigation() {
		if (this.state.firstName.length >= 4 && this.state.lastName.length >= 4) {
			this.props.navigation.navigate('Signup2', {
				Usrname: this.props.navigation.state.params.Usrname,
				firstName: this.state.firstName,
				lastName: this.state.lastName,
			})
		}
		else {
			Alert.alert('First name and Last name should contain atleast 4 letters');
		}

	}

	render() { 

		return <View
			style={styles.signupView}>
			{/* <Text
					style={styles.signUpText}>Sign up</Text> */}
			<Text
				style={styles.labelText}>What’s your name?</Text>
			<View
				style={styles.signUpFieldsView}>
				<TextInputLayout
				 focusColor={'#B9B6B5'}
					style={{
						
					}}>

					<TextInput autoCapitalize='none'
						autoCorrect={false}
						placeholder="First name"
						style={styles.yourNicknameTextInput}
						onChangeText={(firstName) => this.setState({ firstName })}
					/>
				</TextInputLayout>

				<TextInputLayout
				focusColor={'#B9B6B5'}
					style={{
						//marginTop : 10
					}}>
					<TextInput autoCapitalize='none'
						autoCorrect={false}
						placeholder="Last name"
						style={styles.yourNicknameTextInput}
						onChangeText={(lastName) => this.setState({ lastName })}
					/>
				</TextInputLayout>

			</View>

			{(this.state.firstName.length < 4 || this.state.lastName.length < 4) && <TouchableOpacity
				onPress={this.onpressNavigation}
				style={styles.signUpButton}><Text
					style={styles.signUpButtonText}>Next</Text>
			</TouchableOpacity>
			}

			{(this.state.firstName.length >= 4 && this.state.lastName.length >= 4) && <TouchableOpacity
				onPress={this.onpressNavigation}
				style={styles.signUpSuccessButton}><Text
					style={styles.signUpButtonText} style={{ color: "white" }}>Next</Text>
			</TouchableOpacity>}

		</View>
	}
}
