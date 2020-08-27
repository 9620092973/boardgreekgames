//
//  SignUp2
//  SignUp2
//
//  Created by Supernova.
//  Copyright © 2018 S7works. All rights reserved.  
//

import { TouchableOpacity, Image, View, Text, Alert,Dimensions } from "react-native";
import React from "react";
import styles from '../../Styles/SignUp/SignupGenderStyleSheet';
import CheckBox from 'react-native-checkbox';
import { AntDesign, EvilIcons, Ionicons } from '@expo/vector-icons'
import { TextInputLayout } from 'rn-textinputlayout'
import { CustomTouchableIcon } from  "../../Components/Header/CustomTouchableIcon"
  

export default class Signup2 extends React.Component {

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
              navigation.navigate("Signup1");
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
            hide:true,
            male_checked:false,
            female_checked:false,
            others_checked:false,
            checkenewletter:false,
			user_id:'',
			checkedColor : "green"
        }
        this.navigationToEmail = this.navigationToEmail.bind(this);
        this.onMaleChange = this.onMaleChange.bind(this);
        this.onFemaleChange = this.onFemaleChange.bind(this);
		this.onOthersChange = this.onOthersChange.bind(this);
		
	}

	navigationToEmail(){
	 if(this.state.male_checked || this.state.female_checked || this.state.others_checked){
		 this.props.navigation.navigate('Signup3',{
			 Usrname:this.props.navigation.state.params.Usrname,
			 firstName:this.props.navigation.state.params.firstName,
			 lastName:this.props.navigation.state.params.lastName,
			 male_checked:this.state.male_checked,
			 female_checked:this.state.female_checked,
			 others_checked:this.state.others_checked,
		 })
	 }
	 else{
		Alert.alert('Please select any one of the choice');
	 }
	}
	onMaleChange(){
		this.setState({
			male_checked:!this.state.male_checked,
			female_checked:false,
			others_checked:false,

		})
	}
	onFemaleChange(){  
	 this.setState({
		 female_checked:!this.state.female_checked,
		 male_checked:false,
		 others_checked:false,
	 })
 	}
	onOthersChange(){
		this.setState({
			female_checked:false,
			male_checked:false,
			others_checked:!this.state.others_checked,
			color : this.state.checkedColor
		})
	}  
	render() {
	
		return <View
				style={styles.welcomeView}> 
				<Text
					style={styles.labelText}>What’s your gender?</Text>
				<View
					 
					style={{
						marginLeft: 25,
						flexDirection: "row",
						 
						
					}}>


						 

					<View style={styles.labelTwoText}>
					<CheckBox
                                label='Male'
                                checked={this.state.male_checked}
                                onChange={this.onMaleChange}        
                    />
					</View>
					<View style={styles.labelTwoText}>

                    <CheckBox
                                label='Female'
                                checked={this.state.female_checked}
								onChange={this.onFemaleChange}
								checkedColor= "green"
								 
                    /> 
					</View> 
				 
				    <View style={styles.labelTwoText}>
                    <CheckBox
                                label='Other'
                                checked={this.state.others_checked} 
								onChange={this.onOthersChange}
								 
                    /> 
					</View>
				</View>
				{(!this.state.male_checked&&!this.state.female_checked&&!this.state.others_checked)&&<TouchableOpacity
                    onPress={this.navigationToEmail}
					style={styles.buttonButton}>
					<Text
						style={styles.buttonButtonText}>Next</Text>
				</TouchableOpacity>}
                {(this.state.male_checked||this.state.female_checked||this.state.others_checked)&&<TouchableOpacity
                    onPress={this.navigationToEmail}
					style={styles.buttonSuccessButton}>
					<Text
						style={styles.buttonButtonText} style = {{color :"white"}}>Next</Text>
				</TouchableOpacity>}

				</View>
			// </View>
	}
}
