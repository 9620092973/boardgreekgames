//
//  Signup4
//  SignUp2
//
//  Created by Supernova.
//  Copyright © 2018 S7works. All rights reserved.
// 

import { Image, TouchableOpacity, TextInput, View, Text, Alert } from "react-native"
import React from "react"
import styles from '../../Styles/SignUp/SignupBdayStyleSheet';
import DatePicker from 'react-native-datepicker';
import { CustomTouchableIcon } from  "../../Components/Header/CustomTouchableIcon"
import { AntDesign, EvilIcons,Ionicons } from '@expo/vector-icons'


export default class Signup4 extends React.Component {

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

	constructor(props) {
		super(props)
		this.state = {
			date: '',
			currentDate: "",
		}
		this.navigationToLocation = this.navigationToLocation.bind(this);
	}

	componentDidMount() {

		this.props.navigation.setParams({
			onGroupPressed: this.onGroupPressed,
		})


	}

	onOneTapSignInPressed = () => {

	}

	onButtonPressed = () => {

	}

	onButtonTwoPressed = () => {

	}

	onButtonThreePressed = () => {

	}

	onGroupPressed = () => {

		this.props.navigation.goBack()
	}

	navigationToLocation() {

		if (this.state.date != '') {
			this.props.navigation.navigate('Signup5', {
				Usrname: this.props.navigation.state.params.Usrname,
				firstName: this.props.navigation.state.params.firstName,
				lastName: this.props.navigation.state.params.lastName,
				male_checked: this.props.navigation.state.params.male_checked,
				female_checked: this.props.navigation.state.params.female_checked,
				others_checked: this.props.navigation.state.params.others_checked,
				email: this.props.navigation.state.params.email,
				date: this.state.date,

			})


			var date = new Date().getDate(); //Current Date
			var month = new Date().getMonth() + 1; //Current Month
			var year = new Date().getFullYear(); //Current Year

			this.setState({
				//Setting the value of the date time
				currentDate:
					date + '/' + month + '/' + year,
			});
		}

		else {
			Alert.alert('Please select your date of birth');
		}
	}



	render() {

		return <View
			style={styles.signupView}>
			<Text
				style={styles.labelText}>What’s your Birthday?</Text>
			<View
				pointerEvents="box-none"
				style={{
					alignSelf: "stretch",
					height: 30,
					marginTop: 30,
					flexDirection: "row",
					alignItems: "flex-start",
				}}>

				<DatePicker
					style={styles.yourNicknameTextInput}
					date={this.state.date}
					mode="date"
					placeholder="Select your birthday date"
					format="YYYY-MM-DD"
					confirmBtnText="Confirm"
					cancelBtnText="Cancel"
					customStyles={{
						dateInput: {
							marginLeft: 20,
						}

					}}
					onDateChange={(date) => { this.setState({ date: date }) }}
				/>


				 

			</View>

			{this.state.date == '' && <TouchableOpacity
				onPress={this.navigationToLocation}
				style={styles.buttonThreeButton}>
				<Text
					style={styles.buttonThreeButtonText}>Next</Text>
			</TouchableOpacity>}
			{this.state.date != '' && <TouchableOpacity
				onPress={this.navigationToLocation}
				style={styles.buttonThreeSuccessButton}>
				<Text
					style={styles.buttonThreeButtonText} >Next</Text>
			</TouchableOpacity>}
		</View>
	}
}
