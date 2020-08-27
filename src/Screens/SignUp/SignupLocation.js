//
//  Signup5
//  SignUp2
//
//  Created by Supernova.
//  Copyright © 2018 S7works. All rights reserved.
//

import { Image, TouchableOpacity, View, TextInput, Text, Alert } from "react-native"
import React from "react"
import styles from '../../Styles/SignUp/SignupLocationStyleSheet';
import { TextInputLayout } from 'rn-textinputlayout';
import { CustomTouchableIcon } from  "../../Components/Header/CustomTouchableIcon"
import { AntDesign, EvilIcons,Ionicons } from '@expo/vector-icons'

export default class Signup5 extends React.Component { 

	static navigationOptions = ({ navigation}) => ({
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
              navigation.goback();
            }}
          >
            <Ionicons name="ios-arrow-back" size={25} color={"#000"} />
          </CustomTouchableIcon>
          </View>
        ),
		headerStyle:{
			shadowColor: 'transparent',
            elevation: 0
		},
		headerBackTitle: ' ',
		headerTintColor: '#000',
	})

	constructor(props) {
		super(props)
		this.state = {
			items: [
					{label: 'Afghanistan',value: 'AF'},
					{label: 'Åland Islands',value: 'AX'},
					{label: 'Albania',value: 'AL'},
					{label: "Algeria",value:"DZ"},
					{label: "American Samoa",value:"AS" },
					{label: "Andorra",value:"AD" },
					{label: "Angola",value:"AO" },
					{label: "Anguilla",value:"AI" },
					{label: "Antarctica",value:"AQ" },
					{label: "Antigua and Barbuda",value:"AG" },
					{label: "Argentina",value:"AR" },
					{label: "Armenia",value:"AM" },
					{label: "Aruba",value:"Aw" },
					{label: "Australia",value:"AU" },
					{label: "Austria",value:"AT" },
					{label: "Azerbaijan",value:"AZ" },
					{label: "Bahamas",value:"BS" },
					{label: "Bahrain",value:"BH" },
					{label: "Bangladesh",value:"BD" },
					{label: "Barbados",value:"BB" },
					{label: "Belarus",value:"BY" },
					{label: "Belgium",value:"BE" },
					{label: "Belize",value:"BZ" },
					{label: "Benin",value:"BJ" },
					{label: "Bermuda",value:"BM" },
					{label: "Bhutan",value:"BT" },
					{label: "Bolivia, Plurinational State of",value:"BO" },
					{label: "Bonaire, Sint Eustatius and Saba",value:"BQ" },
					{label: "Bosnia and Herzegovina",value:"BA" },
					{label: "Botswana",value:"BW" },
					{label: "Bouvet Island",value:"BV" },
					{label: "Brazil",value:"BR" },
					{label: "British Indian Ocean Territory",value:"IO" },
					{label: "Brunei Darussalam",value:"BN" },
					{label: "Bulgaria",value:"BG" },
					{label: "Burkina Faso",value:"BF" },
					{label: "Burundi",value:"BI" },
					{label: "Cambodia",value:"KH" },
					{label: "Cameroon",value:"CM" },
					{label: "Canada",value:"CA" },
					{label: "Cape Verde",value:"CV" },
					{label: "Cayman Islands",value:"KY" },
					{label: "Central African Republic",value:"CF" },
					{label: "Chad",value:"TD" },
					{label: "Chile",value:"CL" },
					{label: "China",value:"CN" },
					{label: "Christmas Island",value:"CX" },
					{label: "Cocos (Keeling) Islands",value:"CC" },
					{label: "Colombia",value:"CO" },
					{label: "Comoros",value:"KM" },
					{label: "Congo",value:"CG" },
					{label: "Cook Islands",value:"CK" },
					{label: "Costa Rica",value:"CR" },
					{label: "Côte d'Ivoire",value:"CI" },
					{label: "Croatia",value:"HR" },
					{label: "Cuba",value:"CU" },
					{label: "Curaçao",value:"CW" },
					{label: "Cyprus",value:"CY" },
					{label: "Czech Republic",value:"CZ" },
					{label:"Denmark",value:"DK",},
					{label:'Djibouti',value:"DJ"},
					{label:"Dominica",value:"DM"},
					{label:"Dominican Republic",value:"DO"},
					{label:"Ecuador",value:"EC"},
					{label:'Egypt', value:"EG"},
					{label:"El Salvador",value:"SV"},
					{label:"Equatorial Guinea",value:"GQ"},
					{label:"Eritrea", value:"ER"},
					{label:"Estonia", value:"EE"},
					{label:"Ethiopia",value:"ET"},
					{label:"Falkland Islands",value:"FK",},
					{label:"Faroe Islands",value:"FO",},
					{value:"FJ",label:"Fiji"},
					{value:"FI",label:"Finland"},
					{value:"FR",label:"France"},
					{value:"GF",label:"French Guiana"},
					{value:"PF",label:"French Polynesia"},
					{value:"TF",label:"French Southern Territories"},
					{value:"GA",label:"Gabon"},
					{value:"GM",label:"Gambia"},
					{value:"GE",label:"Georgia"},
					{value:"DE",label:"Germany"},
					{value:"GH",label:"Ghana"},
					{value:"GI",label:"Gibraltar"},
					{value:"GR",label:"Greece"},
					{value:"GL",label:"Greenland"},
					{value:"GD",label:"Grenada"},
					{value:"GP",label:"Guadeloupe"},
					{value:"GU",label:"Guam"},
					{value:"GT",label:"Guatemala"},
					{value:"GG",label:"Guernsey"},
					{value:"GN",label:"Guinea"},
					{value:"GW",label:"Guinea-Bissau"},
					{value:"GY",label:"Guyana"},
					{value:"HT",label:"Haiti"},
					{value:"HM",label:"Heard Island and McDonald Islands"},
					{value:"VA",label:"Holy See (Vatican City State)"},
					{value:"HN",label:"Honduras"},
					{value:"HK",label:"Hong Kong"},
					{value:"HU",label:"Hungary"},
					{value:"IS",label:"Iceland"},
					{value:"IN",label:"India"},
					{value:"ID",label:"Indonesia"},
					{value:"IR",label:"Iran, Islamic Republic of"},
					{value:"IQ",label:"Iraq"},
					{value:"IE",label:"Ireland"},
					{value:"IM",label:"Isle of Man"},
					{value:"IL",label:"Israel"},
					{value:"IT",label:"Italy"},
					{value:"JM",label:"Jamaica"},
					{value:"JP",label:"Japan"},
					{value:"JE",label:"Jersey"},
					{value:"JO",label:"Jordan"},
					{value:"KZ",label:"Kazakhstan"},
					{value:"KE",label:"Kenya"},
					{value:"KI",label:"Kiribati"},
					{value:"KP",label:"Korea, Democratic People's Republic of"},
					{value:"KR",label:"Korea, Republic of"},
					{value:"KW",label:"Kuwait"},
					{value:"KG",label:"Kyrgyzstan"},
					{value:"LA",label:"Lao People's Democratic Republic"},
					{value:"LV",label:"Latvia"},
					{value:"LB",label:"Lebanon"},
					{value:"LS",label:"Lesotho"},
					{value:"LR",label:"Liberia"},
					{value:"LY",label:"Libya"},
					{value:"LI",label:"Liechtenstein"},
					{value:"LT",label:"Lithuania"},
					{value:"LU",label:"Luxembourg"},
					{value:"MO",label:"Macao"},
					{value:"MK",label:"Macedonia, the former Yugoslav Republic of"},
					{value:"MG",label:"Madagascar"},
					{value:"MW",label:"Malawi"},
					{value:"MY",label:"Malaysia"},
					{value:"MV",label:"Maldives"},
					{value:"ML",label:"Mali"},
					{value:"MT",label:"Malta"},
					{value:"MH",label:"Marshall Islands"},
					{value:"MQ",label:"Martinique"},
					{value:"MR",label:"Mauritania"},
					{value:"MU",label:"Mauritius"},
					{value:"YT",label:"Mayotte"},
					{value:"MX",label:"Mexico"},
					{value:"FM",label:"Micronesia, Federated States of"},
					{value:"MD",label:"Moldova, Republic of"},
					{value:"MC",label:"Monaco"},
					{value:"MN",label:"Mongolia"},
					{value:"ME",label:"Montenegro"},
					{value:"MS",label:"Montserrat"},
					{value:"MA",label:"Morocco"},
					{value:"MZ",label:"Mozambique"},
					{value:"MM",label:"Myanmar"},
					{value:"NA",label:"Namibia"},
					{value:"NR",label:"Nauru"},
					{value:"NP",label:"Nepal"},
					{value:"NL",label:"Netherlands"},
					{value:"NC",label:"New Caledonia"},
					{value:"NZ",label:"New Zealand"},
					{value:"NI",label:"Nicaragua"},
					{value:"NE",label:"Niger"},
					{value:"NG",label:"Nigeria"},
					{value:"NU",label:"Niue"},
					{value:"NF",label:"Norfolk Island"},
					{value:"MP",label:"Northern Mariana Islands"},
					{value:"NO",label:"Norway"},
					{value:"OM",label:"Oman"},
					{value:"PK",label:"Pakistan"},
					{value:"PW",label:"Palau"},
					{value:"PS",label:"Palestinian Territory, Occupied"},
					{value:"PA",label:"Panama"},
					{value:"PG",label:"Papua New Guinea"},
					{value:"PY",label:"Paraguay"},
					{value:"PE",label:"Peru"},
					{value:"PH",label:"Philippines"},
					{value:"PN",label:"Pitcairn"},
					{value:"PL",label:"Poland"},
					{value:"PT",label:"Portugal"},
					{value:"PR",label:"Puerto Rico"},
					{value:"QA",label:"Qatar"},
					{value:"RE",label:"Réunion"},
					{value:"RO",label:"Romania"},
					{value:"RU",label:"Russian Federation"},
					{value:"RW",label:"Rwanda"},
					{value:"BL",label:"Saint Barthélemy"},
					{value:"SH",label:"Saint Helena, Ascension and Tristan da Cunha"},
					{value:"KN",label:"Saint Kitts and Nevis"},
					{value:"LC",label:"Saint Lucia"},
					{value:"MF",label:"Saint Martin (French part)"},
					{value:"PM",label:"Saint Pierre and Miquelon"},
					{value:"VC",label:"Saint Vincent and the Grenadines"},
					{value:"WS",label:"Samoa"},
					{value:"SM",label:"San Marino"},
					{value:"ST",label:"Sao Tome and Principe"},
					{value:"SA",label:"Saudi Arabia"},
					{value:"SN",label:"Senegal"},
					{value:"RS",label:"Serbia"},
					{value:"SC",label:"Seychelles"},
					{value:"SL",label:"Sierra Leone"},
					{value:"SG",label:"Singapore"},
					{value:"SX",label:"Sint Maarten (Dutch part)"},
					{value:"SK",label:"Slovakia"},
					{value:"SI",label:"Slovenia"},
					{value:"SB",label:"Solomon Islands"},
					{value:"SO",label:"Somalia"},
					{value:"ZA",label:"South Africa"},
					{value:"GS",label:"South Georgia and the South Sandwich Islands"},
					{value:"SS",label:"South Sudan"},
					{value:"ES",label:"Spain"},
					{value:"LK",label:"Sri Lanka"},
					{value:"SD",label:"Sudan"},
					{value:"SR",label:"Suriname"},
					{value:"SJ",label:"Svalbard and Jan Mayen"},
					{value:"SZ",label:"Swaziland"},
					{value:"SE",label:"Sweden"},
					{value:"CH",label:"Switzerland"},
					{value:"SY",label:"Syrian Arab Republic"},
					{value:"TW",label:"Taiwan, Province of China"},
					{value:"TJ",label:"Tajikistan"},
					{value:"TZ",label:"Tanzania, United Republic of"},
					{value:"TH",label:"Thailand"},
					{value:"TL",label:"Timor-Leste"},
					{value:"TG",label:"Togo"},
					{value:"TK",label:"Tokelau"},
					{value:"TO",label:"Tonga"},
					{value:"TT",label:"Trinidad and Tobago"},
					{value:"TN",label:"Tunisia"},
					{value:"TR",label:"Turkey"},
					{value:"TM",label:"Turkmenistan"},
					{value:"TC",label:"Turks and Caicos Islands"},
					{value:"TV",label:"Tuvalu"},
					{value:"UG",label:"Uganda"},
					{value:"UA",label:"Ukraine"},
					{value:"AE",label:"United Arab Emirates"},
					{value:"GB",label:"United Kingdom"},
					{value:"US",label:"United States"},
					{value:"UM",label:"United States Minor Outlying Islands"},
					{value:"UY",label:"Uruguay"},
					{value:"UZ",label:"Uzbekistan"},
					{value:"VU",label:"Vanuatu"},
					{value:"VE",label:"Venezuela, Bolivarian Republic of"},
					{value:"VN",label:"Viet Nam"},
					{value:"VG",label:"Virgin Islands, British"},
					{value:"VI",label:"Virgin Islands, U.S."},
					{value:"WF",label:"Wallis and Futuna"},
					{value:"EH",label:"Western Sahara"},
					{value:"YE",label:"Yemen"},
					{value:"ZM",label:"Zambia"},
					{value:"ZW",label:"Zimbabwe"},   
				], 
				State:'',
				country:'',
		}
		this.navigationToFinalPage = this.navigationToFinalPage.bind(this);
	}

	componentDidMount() {
	
		this.props.navigation.setParams({
			onItemPressed: this.onItemPressed,
		})
	}

	

	navigationToFinalPage(){
		
		 if(this.state.State.length >= 4 && this.state.country != ''){
			 this.props.navigation.navigate('Signup6',{
				 Usrname:this.props.navigation.state.params.Usrname,
				 firstName:this.props.navigation.state.params.firstName,
				 lastName:this.props.navigation.state.params.lastName,
				 male_checked:this.props.navigation.state.params.male_checked,
				 female_checked:this.props.navigation.state.params.female_checked,
				 others_checked:this.props.navigation.state.params.others_checked,
				 email:this.props.navigation.state.params.email,
				 date:this.props.navigation.state.params.date,
				 State:this.state.State,
				 country:this.state.country,
			 })
		 }
		 else{
			Alert.alert('State name should contain atleast 4 letters or select any one of the countries');
		 }
	}

	render() {
	
		return <View
				style={styles.profileView}>
				<Text
					style={styles.labelText}>What’s your location?</Text>
				<View
					pointerEvents="box-none"
					style={{
						alignSelf: "stretch",
						height: 111,
						marginTop: 30,
					}}>
					
					<View
						 style 
						 = {{ marginLeft: 20,
							marginRight: 20,backgroundColor: "white",
							borderRadius: 2,
							alignSelf: "stretch",}}> 
					{/* Selectcountry picker */}
					<Dropdown
						label='Select country'
						data={this.state.items}
						itemCount={6}
						onChangeText={(value) => {
                            this.setState({
                                country: value,
                            });
                        }}
     				   />
						{/* <View
							style={styles.separatorView}/> */}
							<TextInputLayout
                  				  focusColor={'#B9B6B5'}>
							<TextInput autoCapitalize = 'none'
									autoCorrect={true}
									placeholder="State"
									style={styles.yourNicknameTextInput}
									value={this.state.State}
									onChangeText={(State) => this.setState({State})}/>
							</TextInputLayout>
						{/* <View
							style={styles.separatorView}/> */}
							
					 
					</View>
					 
				</View>
				{(this.state.State.length < 4 || this.state.country == '' || this.state.country == null)&&<TouchableOpacity
					onPress={this.navigationToFinalPage}
					style={styles.buttonThreeButton}>
					<Text
						style={styles.buttonThreeButtonText}>Next</Text>
                </TouchableOpacity>}
                {this.state.State.length >= 4 && this.state.country != '' &&this.state.country != null&&<TouchableOpacity
					onPress={this.navigationToFinalPage}
					style={styles.buttonThreeSuccessButton}>
					<Text
						style={styles.buttonThreeButtonText} style = {{color :"white"}}>Next</Text>
				</TouchableOpacity>}
			</View>
	}
}
