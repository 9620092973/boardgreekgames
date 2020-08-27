import {
  TextInput,
  TouchableOpacity,
  ScrollView,
  Text,
  View,
  Platform,
  KeyboardAvoidingView
} from "react-native";
import React from "react";
import { GetProfilePic, profileUpdate } from "../../Networks/UserProfileCalls";
import styles from "../../Styles/PersonalInfoStyles/PersonalInfoStyleSheet";
import {
  EvilIcons,
  Entypo,
  MaterialIcons,
  Ionicons
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import CheckBox from "react-native-checkbox";
import DatePicker from "react-native-datepicker";
import { CustomTouchableIcon } from  "../../Components/Header/CustomTouchableIcon"

export default class PersonalInfo extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft:(
      <View style={{flexDirection: "row",justifyContent:'center', flex:1}}>
        <View style={{marginLeft:8,marginRight:10}}>
        <CustomTouchableIcon onPress={()=>navigation.goBack()}>
            <Ionicons name="ios-arrow-back" size={25} color={"white"} />
        </CustomTouchableIcon>
        </View>
        <Text
          style={{
            marginTop:Platform.OS === 'ios' ? 8 : 10,
            color: "#fff",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 17,
            marginLeft:5,
          }}>
          Personal Info
        </Text>
      </View>
    ),
    headerBackground: (
      <LinearGradient 
        colors={["#001a33", "#004f99"]}
        style={{ flex: 1}}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}/>
    ),
  });

  constructor() {
    super();
    this.state = {
      edit_Uname: false,
      new_Uname: "",
      edit_Fname: false,
      new_Fname: "",
      edit_Lname: "",
      new_Lname: "",
      current_username: "",
      current_firstname: "",
      current_lastname: "",
      date_of_birth: "",
      gender_checked: "",
      edit_Sname: "",
      edit_Cname: "",
      stateName: "",
      countryName: "",
      male_checked:false,
      female_checked:false,
      others_checked:false,     
    };
    this.onEditUname = this.onEditUname.bind(this);
    this.onEditFname = this.onEditFname.bind(this);
    this.onEditLname = this.onEditLname.bind(this);
    this.onEditSname = this.onEditSname.bind(this);
    this.onEditCname = this.onEditCname.bind(this);
    this.onMaleChange = this.onMaleChange.bind(this);
    this.onFemaleChange = this.onFemaleChange.bind(this);
    this.onOthersChange = this.onOthersChange.bind(this);
    this.gettingCurrentUser = this.gettingCurrentUser.bind(this);
  }

  componentDidMount() {
    //getting username
    this.gettingCurrentUser();
    const {params} = this.props.navigation.state.params.userID

  }

  onEditUname(type_of_button) {
    this.setState({
      edit_Uname: !this.state.edit_Uname
    });
    if (type_of_button == "cancel_button") {
      this.setState({
        current_username: ""
      });
    }
  }

  onEditFname(type_of_button) {
    this.setState({
      edit_Fname: !this.state.edit_Fname
    });
    if (type_of_button == "cancel_button") {
      this.setState({
        new_Fname: ""
      });
    }
  }

  onEditLname(type_of_button) {
    this.setState({
      edit_Lname: !this.state.edit_Lname
    });
    if (type_of_button == "cancel_button") {
      this.setState({
        edit_Lname: ""
      });
    }
  }

  onEditSname(type_of_button) {
    this.setState({
      edit_Sname: !this.state.edit_Sname
    });
    if (type_of_button == "cancel_button") {
      this.setState({
        edit_Sname: ""
      });
    }
  }

  onEditCname(type_of_button) {
    this.setState({
      edit_Cname: !this.state.edit_Cname
    });
    if (type_of_button == "cancel_button") {
      this.setState({
        edit_Sname: ""
      });
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

  //get user details saved at the time of signing up
  gettingCurrentUser() {
    GetProfilePic()
      .then(response => {
        if(response.data.gender=='Male'){
          this.setState({male_checked:true})
        }
        else if(response.data.gender=='Female'){
          this.setState({female_checked:true})
        }
        else{
          this.setState({others_checked:true})
        }
        this.setState({
          current_username: response.data.username,
          current_firstname: response.data.first_name,
          current_lastname: response.data.last_name,
          date_of_birth: response.data.date_of_birth,
          gender_checked: response.data.gender,
          stateName: response.data.state,
          countryName: response.data.country
        });
      })
      .catch(error => {
        console.log("error message", error.message);
      });
  }

  // edit or update the user's personal information and store to backend
  editPersonalInfo() {
    let gender;
		if (this.state.male_checked) {
			gender = "Male";
		}
		else if (this.state.female_checked) {
			gender = "Female";
		}
		else {
			gender = "Other"
		}
    profileUpdate(this.state.current_username, this.state.current_firstname,this.state.current_lastname, this.state.stateName, this.state.countryName,this.state.date_of_birth, gender).then((response)=>{
      this.props.navigation.navigate("Profile")
    })
    .catch((error)=>{
      console.log("editPersonalInfo error: ",error.message)
    })
  }

  render() {
    return (
      <View
        style={{
          width: "100%",
          height: "100%",
          paddingHorizontal:10,}}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
        <View style={styles.PersonalInfo}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.labelsTopspace}> 
              <Text style={styles.inputLabels}>Username</Text>
            </View>
            <View style={styles.InputFieldView}>
              {this.state.edit_Uname == false && (
                <Text style={styles.textFieldTwoTextInput}>
                  {this.state.current_username}
                </Text>
              )}
              {this.state.edit_Uname == true && (
                <TextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholder="Example UserName"
                  style={styles.InputBox}
                  onChangeText={current_username => this.setState({ current_username })}
                  value={this.state.current_username}/> 
              )}
              
              {this.state.edit_Uname == false && (
                <TouchableOpacity
                  onPress={() => {
                    this.onEditUname("edit_button");
                  }}>
                  <Entypo name="edit" size={20} color={"black"} style={{}} />
                </TouchableOpacity>
              )}
              {this.state.edit_Uname == true && (
                <TouchableOpacity
                  onPress={() => {
                    this.onEditUname("cancel_button");
                  }}>
                  <MaterialIcons
                    name="cancel"
                    size={20}
                    color={"black"}
                    style={{}}/>
                </TouchableOpacity> 
              )}
            </View>

            <Text style={styles.howOthersSee}>
              This is how other user will see you{" "}
            </Text>

            <View style={styles.labelsTopspace}>
              <Text style={styles.inputLabels}>Your name</Text>
            </View>

            <View style={styles.InputFieldView}>
              {this.state.edit_Fname == false && (
                <Text style={styles.textFieldTwoTextInput}>
                  {this.state.current_firstname}
                </Text>
              )}
              {this.state.edit_Fname == true && (
                <TextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholder="Example FirstName"
                  style={styles.InputBox}
                  onChangeText={current_firstname => this.setState({ current_firstname })}
                  value={this.state.current_firstname}/>
              )}
              {this.state.edit_Fname == false && (
                <TouchableOpacity
                  onPress={() => {
                    this.onEditFname("edit_button");
                  }}>
                  <Entypo name="edit" size={20} color={"black"} style={{}} />
                </TouchableOpacity>
              )}
              {this.state.edit_Fname == true && (
                <TouchableOpacity
                  onPress={() => {
                    this.onEditFname("cancel_button");
                  }}>
                  <MaterialIcons
                    name="cancel"
                    size={20}
                    color={"black"}
                    style={{}}/>
                </TouchableOpacity>
              )}
            </View>

            <View style={styles.InputFieldView}>
              {this.state.edit_Lname == false && (
                <Text style={styles.textFieldTwoTextInput}>
                  {this.state.current_lastname}
                </Text>
              )}
              {this.state.edit_Lname == true && (
                <TextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholder="Example LastName"
                  style={styles.InputBox}
                  onChangeText={current_lastname => this.setState({ current_lastname })}
                  value={this.state.current_lastname}
                />
              )}
              {this.state.edit_Lname == false && (
                <TouchableOpacity
                  onPress={() => {
                    this.onEditLname("edit_button");
                  }}>
                  <Entypo name="edit" size={20} color={"black"} style={{}} />
                </TouchableOpacity>
              )}
              {this.state.edit_Lname == true && (
                <TouchableOpacity
                  onPress={() => {
                    this.onEditLname("cancel_button");
                  }}>
                  <MaterialIcons
                    name="cancel"
                    size={20}
                    color={"black"}
                    style={{}}/>
                </TouchableOpacity>
              )}
            </View>

            <View style={styles.labelsTopspace}>
              <Text style={styles.inputLabels}>Gender</Text>
            </View>

            <View style={styles.genderBox}>
              <View style={styles.gender}>
                <CheckBox
                  labelStyle={{color: 'black'}}
                  label="Male"
                  checked ={this.state.male_checked}
                  onChange={this.onMaleChange}/>
              </View>
              <View style={styles.gender}>
                <CheckBox
                  labelStyle={{color: 'black'}}
                  label="Female"
                  checked={this.state.female_checked}
                  onChange={this.onFemaleChange}
                  checkedColor="green"/>
              </View>
              <View style={styles.gender}>
                <CheckBox
                labelStyle={{color: 'black'}}
                  label="Others"
                  checked={this.state.others_checked}
                  onChange={this.onOthersChange}/>
              </View>
            </View>

            <View style={styles.labelsTopspace}>
              <Text style={styles.inputLabels}>Your birthday date</Text>
            </View>

            <View style={styles.datePickerContainer}>
            
               <DatePicker
                style={styles.datePicker}
                date={this.state.date_of_birth}
                mode="date"
                placeholder="Select your birthday date"
                format="YYYY-MM-DD"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'relative',
                    color:"black"
                  },
                  dateInput: {
                    marginLeft: 0,
                    borderWidth: 0,
                    alignItems: 'flex-start'
                  },
                  dateText:{
                    textAlign: 'left',
                    fontSize: 18,
                    color: '#000'
                  }
                }}
                onDateChange={
                  date => {
                  this.setState({ date_of_birth: date });
               }}
              /> 
            </View>

            {/* state and location  */}
            <View style={styles.labelsTopspace}>
              <Text style={styles.inputLabels}>Your location</Text>
            </View>
            <Text style={styles.labelState}>State</Text>
            <View style={styles.InputFieldView}>
              {this.state.edit_Sname == false && (
                <Text style={styles.textFieldTwoTextInput}>
                  {this.state.stateName}
                </Text>
              )}
              {this.state.edit_Sname == true && (
                <TextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholder="Example state"
                  style={styles.InputBox}
                  onChangeText={stateName => this.setState({ stateName })}
                  value={this.state.stateName}/>
              )}
              {this.state.edit_Sname == false && (
                <TouchableOpacity
                  onPress={() => {
                    this.onEditSname("edit_button");
                  }}>
                  <Entypo name="edit" size={20} color={"black"} style={{}} />
                </TouchableOpacity>
              )}
              {this.state.edit_Sname == true && (
                <TouchableOpacity
                  onPress={() => {
                    this.onEditSname("cancel_button");
                  }}>
                  <MaterialIcons
                    name="cancel"
                    size={20}
                    color={"black"}
                    style={{}}/>
                </TouchableOpacity>
              )}
            </View>
            <Text style={styles.labelCountry}>Country</Text>
            <View style={styles.InputFieldView}>
              {this.state.edit_Cname == false && (
                <Text style={styles.textFieldTwoTextInput}>
                  {this.state.countryName}
                </Text>
              )}
              {this.state.edit_Cname == true && (
                <TextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholder="Example country"
                  style={styles.InputBox}
                  onChangeText={countryName => this.setState({ countryName })}
                  value={this.state.countryName}/>
              )}
              {this.state.edit_Cname == false && (
                <TouchableOpacity
                  onPress={() => {
                    this.onEditCname("edit_button");
                  }}>
                  <Entypo name="edit" size={20} color={"black"} style={{}} />
                </TouchableOpacity>
              )}
              {this.state.edit_Cname == true && (
                <TouchableOpacity
                  onPress={() => {
                    this.onEditCname("cancel_button");
                  }}>
                  <MaterialIcons
                    name="cancel"
                    size={20}
                    color={"black"}
                    style={{}}/>
                </TouchableOpacity>
              )}
            </View>
            {/* end */}

            <View style={{ flex: 1, alignSelf: "stretch", marginTop: "5%" }}>
            </View>

            <View style={{ flex: 1, marginTop: "5%" }}>
              <TouchableOpacity
                onPress={this.navigationToFinalPage}
                style={styles.buttonThreeSuccessButton}>
                <Text
                  style={styles.buttonThreeButtonText}
                  style={{ color: "white" }}>
                 Save
                </Text>
              </TouchableOpacity>
            </View>

              <TouchableOpacity onPress={()=> this.editPersonalInfo()}>
                <View  style={styles.buttonThreeButtonText}>
                <Text style={{color:"white"}}>Save</Text>
                </View>
              </TouchableOpacity>
          </ScrollView>
        </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
