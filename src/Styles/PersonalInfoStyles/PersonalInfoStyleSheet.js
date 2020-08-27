
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  PersonalInfo: {
    padding: "2%",
    flex: 1,
    backgroundColor: "white"
  },
  AcountLabel: {
    color: "black",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left"
  },
  InputFieldView: {
    flexDirection: "row",
    borderBottomColor: "rgba(192, 192, 192, 0.79)",
    borderBottomWidth: 1,
    justifyContent: "space-between",
    paddingVertical:10
  },
  InputBox: {
    alignSelf: "stretch"
  },
  howOthersSee: {
    color: "rgba(0, 0, 0, 0.57)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left"
  },
  inputLabels: {
    fontSize: 18,
    fontWeight: "400",
  },
  genderBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop:20
  },
  gender: {
    color: "rgba(0, 0, 0, 0.59)",
    textAlign: "left"
  },
  datePickerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop:15,
    borderBottomColor: "rgba(192, 192, 192, 0.79)",
    borderBottomWidth: 1
  },
  datePicker: {
    color: "black",
    textAlign: "left",
    alignItems:'flex-start', 
    width: "100%",
    left:0
  },
  labelsTopspace:{
    paddingTop:25
    //paddingVertical:10
  },
  labelState:{
    paddingTop:15,
    color:"rgba(0, 0, 0, 0.41)"
  },

  labelCountry:{
    paddingTop:15,
    color:"rgba(0, 0, 0, 0.41)"

  },
  buttonThreeButtonText:{
    backgroundColor: "#1D365F",
		borderRadius: 30,
    borderWidth: 1,
		borderColor: "rgba(162, 157, 157, 0.65)",
		borderStyle: "solid",
		alignItems: "center",
		justifyContent: "center",
		alignSelf: "stretch",
    height: 52,
    top:0
  },
  
});

export default styles;
