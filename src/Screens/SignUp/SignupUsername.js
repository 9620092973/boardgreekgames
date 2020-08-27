import React from 'react';
import { View, Text, TextInput, ScrollView, KeyboardAvoidingView, Platform, TouchableOpacity, Image, Alert } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Picker } from 'react-native-elements';
import styles from '../../Styles/SignUp/SignupUsernameStyleSheet'
import FacebookAndGoogleLogin from '../../Components/ReUsableComponent/facebookAndGoogleLogin';
import { AntDesign, EvilIcons, Ionicons } from '@expo/vector-icons'
import { TextInputLayout } from 'rn-textinputlayout';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { CustomTouchableIcon } from  "../../Components/Header/CustomTouchableIcon"

export default class Signup extends React.Component {
    
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
        headerBackTitle: '',
        headerTintColor: '#000',
    })
    constructor(props) {
        super(props);
        this.state = {
         
            Usrname: '',

        }
        this.renderPassword = this.renderPassword.bind(this);
        this.renderRegistration = this.renderRegistration.bind(this);
    }

    renderPassword() {
        this.setState({
            hide: !this.state.hide
        })
    }

    // Registarion page 1 
    renderRegistration() {
        let username_length = this.state.Usrname.length;
        if (username_length >= 4) {
            this.props.navigation.navigate('Signup1', {
                Usrname: this.state.Usrname
            })
        }
        else {
            Alert.alert('User name should contain atleast 4 letters');
        }

    }

    render() {
        return (
           
            <View
                style={styles.signupView}>
                
                <Text
                    style={styles.labelText}>Choose a username</Text>
                <View
                    style={styles.signUpFieldsView}>

                    <TextInputLayout
                    focusColor={'#B9B6B5'}
                        style={{  
                            }}>
                        <TextInput autoCapitalize = 'none'
                            autoCorrect={false}
                            placeholder="Username"
                            style={styles.yourNicknameTextInput}
                            onChangeText={(Usrname) => this.setState({ Usrname })}
                        />
                        </TextInputLayout>

                        
                        {(this.state.Usrname.length < 4) && <TouchableOpacity
                    onPress={this.renderRegistration}
                    style={styles.signUpButton}><Text
                        style={styles.signUpButtonText}>Next</Text>
                </TouchableOpacity>
                }

                {this.state.Usrname.length >= 4 && <TouchableOpacity
                    onPress={this.renderRegistration}
                    style={styles.signUpSuccessButton}><Text
                        style={styles.signUpButtonText} style = {{color :"white"}}>Next</Text>
                </TouchableOpacity>}

                <View style={styles.socialIcons}>
                    <FacebookAndGoogleLogin
                        title={"One-tap sign in"}
                        navigation={this.props.navigation}/>
                </View>
                </View>
               
               
                
              
               
            </View>
        )
    }
}
