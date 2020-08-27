
import { Text, TextInput, View, TouchableOpacity, Alert, Image, AsyncStorage } from "react-native"
import React from "react" 
import Modal from "react-native-modal";
import styles from '../../Styles/SignUp/SignupPwdStyleSheet'
import CheckBox from 'react-native-checkbox';
import { authRegistration } from '../../Networks/RegistrationCalls';
import { AntDesign, EvilIcons, Ionicons } from '@expo/vector-icons'
import PasswordInputText from 'react-native-hide-show-password-input';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { loggedOutScreen }  from '../../Redux/Actions';
import * as Types from '../../Redux/Actions/types'
import { ScrollView } from "react-native-gesture-handler";
import { CustomTouchableIcon } from  "../../Components/Header/CustomTouchableIcon"
   
 class Signup6 extends React.Component {

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
					navigation.navigate("Signup3");
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
			password: '',
			checked: false,
			checkenewletter: false,
			user_id: '',
			hide: true,
			modalVisible: false,
			}
		this.renderAuthRegister = this.renderAuthRegister.bind(this);
		this.renderPassword = this.renderPassword.bind(this);
		this.navigateToNextScreen = this.navigateToNextScreen.bind(this)
	}

	setModalVisible(visible) {
		this.setState({modalVisible: visible});
	  }

	setModalVisible(visible) {
		this.setState({modalVisible: visible});
	  }

	renderPassword() {
		this.setState({
			hide: !this.state.hide
		})
	}

	// Storing Username
	async storeUsername(uname) {
		try {
			await AsyncStorage.setItem("username", uname);//ACCESS_TOKEN = username
		} catch (error) {
			console.log(error.message)
		}
	}

	renderAuthRegister() {
		this.storeUsername(this.props.navigation.state.params.Usrname)
		let gender;
		if (this.props.navigation.state.params.male_checked) {
			gender = "Male";
		}
		else if (this.props.navigation.state.params.female_checked) {
			gender = "Female";
		}
		else {
			gender = "Other"
		}

		if (this.state.password.length >= 4 && this.state.checked ) {
			authRegistration(this.props.navigation.state.params.Usrname,
				this.props.navigation.state.params.firstName,
				this.props.navigation.state.params.lastName,
				this.props.navigation.state.params.email,
				this.state.password,
				this.props.navigation.state.params.date,
				this.props.navigation.state.params.State,
				this.props.navigation.state.params.country,
				gender,
				this.state.checked,
				//this.state.checkenewletter,
				// Boolean("True"),
				// Boolean("True")
			)
				.then((response) => {
					this.setState({
						user_id: response.data.id,
					})
					if (response.status == 201) {
						//this.props.navigation.navigate("HomePage")
						 this.navigateToNextScreen()
						Alert.alert('Successfully Registed')
					}
				})
				.catch((error) => {
					console.log("registration fails", error.message);
					Alert.alert('Registration Failed Please enter valid details')
				})
		}
		else if (this.state.password.length < 4) {
			Alert.alert('password should contain atleast 4 letters');
		}
		else if (!this.state.checkenewletter || !this.state.checked) {
			Alert.alert('Please check Terms & Services , If you want to proceed.');
		}

	}
	navigateToNextScreen() {
		const { gameId, screenName, gameData } = this.props

		this.props.loggedOutScreen(Types.LAST_LOGGEDOUT_SCREEN)
		if(screenName && gameId  ) {
			this.props.navigation.navigate(screenName, { game_id: gameId, })
		} else {
			this.props.navigation.navigate("Login")
		}
	}

	render() {

		return (<View
			style={styles.profileSettingsView}>
			<Text
				style={styles.labelText}>Choose a password{"\n"}</Text>
			<View
				style={styles.signUpFieldsView}>

				<PasswordInputText autoCapitalize = 'none'

							autoCorrect={false}

							tintColor = '#B9B6B5'

							secureTextEntry={this.state.hide}
						    onChangeText={(password) => this.setState({ password })} 
				/>
					
				</View>
				<View style={styles.CheckBox}>
					<View style={{ flexDirection: 'row' }}>
				
						<CheckBox
							style={styles.labelTwoText}
							label='Terms & Services'
							value={this.state.checked}
							onChange={() => this.setState({ checked: !this.state.checked })}
						/>
						<TouchableOpacity onPress={() => {this.setModalVisible(true);}}>
						<EvilIcons name='external-link' size={25} />
						</TouchableOpacity>

						<Modal
							animationType="fade"
							transparent={false}
							backdropOpacity={0.1}
							style={{
								justifyContent: "center",
								margin: 0
							}}
							
							visible={this.state.modalVisible}
							onRequestClose={() => {
								Alert.alert('Modal has been closed.');
							}}>
						<View>			
						<TouchableOpacity style = {{alignItems:'flex-end', marginTop:'7%', marginRight:'5%'}}
            onPress={() => {
							this.setModalVisible(!this.state.modalVisible);
						}}>
						<Text style={{ color:'#515151',fontSize:22, }}>*Close</Text> 
            </TouchableOpacity>
						</View>

						<ScrollView>
						<View style={{ margin:'5%'}}>
                            <Text style={{ color:'#515151',fontSize:15 }}>
								1. Your Acceptance
								</Text>
							<Text style={{ color:'#515151',fontSize:15 }}>
								A. You must be legally able to accept the Terms of Service.
								You affirm that you are either more than 18 years of age, or an emancipated minor, or possess legal parental or guardian consent, and are fully able and competent to enter into the terms, conditions, obligations, affirmations, representations, and warranties set forth in these Terms of Service, and to abide by and comply with these Terms of Service. You affirm that you are over the age of 16, as the Geek Websites are not intended for children under 16. If you are under 16 years of age then you are not permitted to have an account on the Geek Websites.

								B. You must accept these terms to use the Geek Websites.
								All websites maintained by us, i.e., DoubleCritical, LLC and our affiliates (collectively, DoubleCritical), including without limitation all content and functionality available through the DoubleCritical.com, RPGGeek.com, VideoGameGeek.com, and geekdo.com domain names and subdomains, including any website extensions such as widgets and gadgets, and all products, software, applications, and services offered through the websites, shall be collectively referred to as "the Geek Websites". By using and/or visiting the Geek Websites you, the user, signify your agreement to (1) these terms and conditions (the "Terms of Service"), (2) DoubleCritical's privacy policy, available at DoubleCritical.com/privacy, and incorporated herein by reference (the "DoubleCritical Privacy Policy"), and (3) the DoubleCritical Community Rules, available at DoubleCritical.com/community_rules, and incorporated herein by reference (the "DoubleCritical Community Rules"), and any modifications thereto. If you do not agree to the Terms of Service, the DoubleCritical Privacy Policy, and the DoubleCritical Community Rules, then you are not permitted to use and/or visit this Website.

								C. By using the Geek Websites, you indicate to us that you agree to the Terms of Service. We will change these Terms of Service occasionally, so make sure you stay up to date.
								These Terms of Service apply to all users of the Geek Websites. DoubleCritical reserves the right to amend these Terms of Service at any time. DoubleCritical will post a notification of any such modifications in the Official Terms of Service Modification Thread, available at http://www.DoubleCritical.com/thread/509198 (the "Official Modification Thread"). It is your responsibility to either periodically review these Terms of Service for any such modifications or to subscribe to the Official Modification Thread in order to be notified of modifications. Each modification to these Terms of Service shall become effective ten days after a notification of the modification is posted in the Official Modification Thread. Your continued use of the Geek Websites after the modification of these Terms of Service becomes effective following this ten day period signifies your assent to and acceptance of the amended terms and provisions. If you do not agree to an announced changes, you have the option of deleting your account before the end of the 10 day period.
							</Text>
							<Text style={{ color:'#515151',fontSize:15 }}>

								2. We are not responsible for issues you have with third party websites and apps that we may link to. We are responsible for the Geek Websites.
								DoubleCritical may contain links to third party websites that are not owned or controlled by DoubleCritical. Also, DoubleCritical is not affiliated with or responsible for any mobile apps based on the Geek Websites. DoubleCritical has no control over, and--except to the extent required by applicable law--assumes no responsibility for, the content, privacy policies, or practices of any third party websites. In addition, DoubleCritical will not and cannot censor or edit the content of any third party site. Accordingly, we encourage you to be aware when you leave DoubleCritical and to read the terms and conditions and privacy policy of each other website that you visit. By using the Geek Websites, you expressly relieve DoubleCritical from any and all liability arising from your use of any third party website or mobile apps.
								</Text>
								<Text style={{ color:'#515151',fontSize:15 }}>

								3. You are responsible for what happens through your account and we may hold you liable for losses resulting from improper use.
								In order to access some features of the Geek Websites, you will have to create a DoubleCritical account. You may never use another individual's account without permission. When creating your account, you must provide accurate and complete information. You are solely responsible for the activity that occurs on your account, and you must keep your account password secure. You must notify DoubleCritical immediately of any breach of security or unauthorized use of your account. Although DoubleCritical is not liable for your losses caused by any unauthorized use of your account, you may be liable for the losses of DoubleCritical or others due to such unauthorized use.
								</Text>
								<Text style={{ color:'#515151',fontSize:15 }}>

								4. You are responsible for processing and protecting any personal information that you receive from another user or another individual. You will pay us for any damages we suffer if you violate applicable privacy laws.
								As you use the Geek Websites, you may receive or collect personal information as you make trades, message people, sell or buy stuff, or otherwise interact with other people. You MUST protect this personal information with the utmost care and abide by privacy practices as set forth below in Section 6(G). You may not use or disclose it for any purpose other than as allowed by the individual or by applicable law.

								You consent to the collection, processing, and transfer of all your information and customer information by DoubleCritical and our partners as set forth in our Privacy Policy. DoubleCritical may process that personal information as needed to facilitate trades, messages, sales or whichever activity it was given to us for. You can read about how we treat personal information in our Privacy Policy.

								As explained in Section 14 on indemnification, you agree to defend, indemnify and hold us harmless if you violate any applicable privacy laws.

								For purposes of the EUâ€™s General Data Protection Regulation (â€œGDPRâ€), you, the user, are the data controller for any personal information you receive or collect through the Geek Websites, and DoubleCritical and our partners are data processors. This means that you are responsible under the GDPR for what happens to that personal information as it is processed by yourself, DoubleCritical and our partners, and any third parties you allow to process it.
								</Text>
								<Text style={{ color:'#515151',fontSize:15 }}>

								5. DoubleCritical User Submissions
								</Text>
							<Text style={{ color:'#515151',fontSize:15 }}>
								A. Your submissions.
								You may upload and/or may have uploaded forum threads, forum replies, reviews, session reports, GeekLists, photographs, files, hyperlinks, ratings, tags, comments, blog posts, and other visual or textual content to DoubleCritical (the "User Submissions"). You represent and warrant that none of your User Submissions are illegal, obscene, threatening, defamatory, invasive of privacy, infringing of any intellectual property rights, injurious to third parties, or otherwise objectionable to DoubleCritical in its sole discretion, including but not limited to commercial solicitation, mass mailings, political campaigning, chain letters, or any form of "spam" (as determined by DoubleCritical in its sole discretion). DoubleCritical does not provide for any confidentiality with respect to any User Submissions. DoubleCritical reserves the right to remove or delete User Submissions without prior notice.

								B. Don't upload anything that isn't yours without permission, especially personal information.
								You shall not upload User Submissions containing material that is copyrighted, protected by trademark or trade secret, or otherwise subject to third party proprietary rights, including privacy and publicity rights, including privacy and publicity rights, unless you are the owner of such rights or have permissions from their rightful owner to post the material and to grant DoubleCritical all of the licenses granted herein. Do not upload or post any personal information of another person without the express permission of the person it pertains to.

								You shall be solely responsible for all of your User Submissions and the consequences of uploading them.

								C. You own the rights to your User Submissions and give us the right to use them for their purposes in the Geek Websites.
								You represent and warrant that you own or have the necessary licenses, rights, consents, and permissions to use and authorize DoubleCritical to use all patent, trademark, trade secret, copyright, and all other intellectual property rights or other proprietary rights in and to any and all User Submissions, to enable inclusion and use of the User Submissions in the manner contemplated by the Geek Websites and these Terms of Service, such as displaying the User Submission in discussion forums. You grant DoubleCritical the right to use your name and account username in connection with your User Submissions.

								D. You still own your User Submissions, but you grant us a license to it.
								You retain all of your ownership rights in your User Submissions. By uploading User Submissions to DoubleCritical, you hereby grant DoubleCritical a worldwide, non-exclusive, royalty-free, perpetual, sublicenseable, and transferable license to use, reproduce, distribute, adapt, modify, prepare derivative works of, display, and perform the User Submissions in connection with the Geek Websites, website extensions, and the business of DoubleCritical and its successors and affiliates, including without limitation for promoting the Geek Websites in any media formats and through any media channels.

								E. You also grant other users a license to your User Submissions.
								By uploading User Submissions to DoubleCritical, you hereby grant each user of the Geek Websites a non-exclusive license to access your User Submissions through the Geek Websites, and to use, reproduce, distribute, display, and perform such User Submissions as permitted through the functionality of the Geek Websites and under these Terms of Service.

								F. We may keep deleted User Submissions.
								You understand and agree that DoubleCritical may retain, but not display, distribute, or perform, server copies of User Submissions that have been removed or deleted.

								G. Don't upload anything illegal or against our rules.
								You agree that you will not, in connection with User Submissions, submit material that is contrary to applicable local, national, and international laws and regulations, or that is contrary to the DoubleCritical Community Rules, which may be updated from time to time.

								H. We don't endorse or control what users submit.
								DoubleCritical does not endorse any User Submissions or any opinion, recommendation, or advice expressed therein, and DoubleCritical expressly disclaims any and all liability in connection with User Submissions. User Submissions are made available "AS IS." You understand and agree that when using the Geek Websites you will be exposed to User Submissions from a variety of sources and that DoubleCritical is not responsible for the accuracy, usefulness, safety, or intellectual property rights of or relating to such User Submissions. You further understand and agree that you may be exposed to User Submissions that are inaccurate, objectionable, offensive, or indecent, and you agree to waive, and hereby do waive, any legal or equitable rights or remedies you have or may have against DoubleCritical with respect to User Submissions.
								</Text>
								<Text style={{ color:'#515151',fontSize:15 }}>

								6. You must follow our rules when using the Geek Websites, or we can prevent you from further use. See below for some specific rules for our users.
								DoubleCritical hereby grants you permission to access and make personal use of the Geek Websites as set forth in these Terms of Service, but not to download or modify the Geek Websites or any portion of the Geek Websites except with express written consent, provided that:
								</Text>
							<Text style={{ color:'#515151',fontSize:15 }}>
								A. Follow our rules and don't break the law.
								In connection with use of the Geek Websites, you shall abide by these Terms of Service, the DoubleCritical Privacy Policy incorporated herein by reference, the DoubleCritical Community Rules incorporated herein by reference, and all applicable local, state, federal, and international laws and regulations, including but not limited to laws and regulations pertaining to libel, slander, defamation, harassment, invasion of privacy, tort, obscenity, indecency, and copyright or trademark infringement. The violation of applicable laws and/or regulations may give rise to civil and/or criminal penalties.

								B. How not to use the Geek Websites:
								i. Don't slam our servers with "robots" or "spiders".
								You shall not use or launch any automated system, including without limitation "robots," "spiders," or "offline readers," that accesses the Geek Websites in a manner that sends more request messages to the DoubleCritical servers in a given period of time than a human can reasonably produce in the same period by using a conventional online web browser, except as expressly permitted by DoubleCritical.
								ii. Don't systematically collect user data
								You agree not to collect or harvest any personally identifiable information, including but not limited to account names, from the Geek Websites. You may collect user data as needed for trades, sales, or other interactions, in accordance with these Terms of Service.
								iii. Don't use our sites for commercial purposes
								You agree not to use the communication systems provided by the Geek Websites for any commercial solicitation purposes.
								C. Don't make unauthorized changes to the Geek Websites
								You shall not alter or modify any parts of the Geek Websites, including but not limited to DoubleCritical's website extensions or any of its related technologies, except as expressly permitted by DoubleCritical.

								D. Really, don't use the sites for unauthorized commercial purposes:
								You shall not use the Geek Websites for any commercial purposes without the prior written authorization of DoubleCritical. Prohibited commercial uses include without limitation any of the following actions taken without DoubleCritical's express written approval: (i) sale of access to the Website or their related services, such as any website extensions; (ii) use of the Geek Websites or their related services, such as any website extensions or APIs, for the primary purpose of gaining advertising or subscription revenue; (iii) the sale of advertising, on the Geek Websites or any third-party website, targeted to the content of specific User Submissions or DoubleCritical content; and (iv) any use of the Geek Websites or APIs that DoubleCritical finds, in its sole discretion, to use DoubleCritical's resources or User Submissions with the effect of competing with or displacing the market for DoubleCritical, DoubleCritical content, or its User Submissions. Prohibited commercial uses do not include the sale of products such as board games, role-playing games, and video games, through the Marketplace or GeekList functionality, so long as you pay the required commission to DoubleCritical on the gross amount of each such sale generated via the Geek Websites. DoubleCritical reserves the right to terminate any such sales if they are deemed to be "spam" or fraudulent in DoubleCritical's sole discretion.

								E. Don't make unauthorized copies of anything on the site
								You shall not engage in the use, copying, or distribution of any of the User Submissions other than expressly permitted herein, including any use, copying, or distribution of User Submissions of third parties obtained through the Geek Websites for any commercial purposes. You shall not circumvent, disable, or otherwise interfere with security-related features of DoubleCritical or features that prevent or restrict use or copying of any User Submissions or enforce limitations on use of DoubleCritical or the User Submissions therein.

								F. Don't do anything else shady with or on our sites:
								You shall not frame or utilize any framing techniques to enclose any trademark, logo, or other proprietary information (including but not limited to images, text, page layout, or forms) of DoubleCritical without express written consent. You shall not use meta tags or any other hidden text utilizing DoubleCritical's name or trademarks without express written consent. You shall not use a false e-mail address, impersonate any person or entity, or otherwise mislead as to the origin of any User Submissions.

								G. You must abide by proper privacy practices.
								You must establish and agree to maintain and adhere to privacy practices for your store(s) that comply with applicable state, federal, and international laws and regulations.

								H. You must abide by laws that control what sales can take place with persons outside of the U.S.
								United States export control laws govern your use of our services. These laws apply to you and your use of our services regardless of whether you actually reside in the U.S.

								You may not use our services for any purpose that violates export control laws, which may include the sale of products that may be legal to sell in the U.S., but illegal to export. You may not use our services to offer or provide services to end customers with whom U.S. citizens may not do business.

								Additional information about U.S. export laws may be obtained from the United States governmentâ€™s portal to exporting and trade services at the following website: http://www.export.gov/exportcontrols.html.
								</Text>
								<Text style={{ color:'#515151',fontSize:15 }}>

								7. Prohibition Against Rogue Programming
								You shall not upload, post, transmit, or otherwise make available in any way through the Geek Websites any software or other materials that contain a computer virus, Trojan horse, bug, time bomb, worm, or other rogue programming ("Rogue Programming"). DoubleCritical has no obligation to detect the presence of any Rogue Programming. Any download of software, files, or other materials or any other use of the content on DoubleCritical is at your risk. You are advised to take adequate precautions to minimize any loss to your system caused by Rogue Programming, including use of anti-virus programs and proper backup of files.
							</Text>    
                        </View>
						</ScrollView>
						</Modal>
					</View>
				</View>
				<View style={styles.CheckBox}>
					<CheckBox
						style={styles.labelThreeText}
						label='Newsletters Subscription' 
						value={this.state.checkenewletter}
						onChange={() => this.setState({ checkenewletter: !this.state.checkenewletter })}
					/>
				</View>
				{(this.state.password.length < 4 || !this.state.checked ) && <TouchableOpacity
					onPress={this.renderAuthRegister}
					style={styles.buttonThreeButton}>
					<Text
						style={styles.buttonThreeButtonText}>Create Account</Text>
				</TouchableOpacity>}
				{(this.state.password.length >= 4 && this.state.checked ) && <TouchableOpacity
					onPress={this.renderAuthRegister}
					style={styles.buttonThreeSuccessButton}>
					<Text
						style={styles.buttonThreeButtonText} style={{ color: "white" }}>Create Account</Text>
				</TouchableOpacity>}

				<View
					style={{
						flex: 1,
					}} />

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

export default connect(mapStateToProps, mapDispatchToProps)(Signup6)

