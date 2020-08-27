import { StyleSheet, Platform } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      //backgroundColor: 'lightblue',
      //padding: 12,
      //margin: 16,
      //justifyContent: 'center',
      //alignItems: 'center',
      //borderRadius: 4,
      //borderColor: 'rgba(0, 0, 0, 0.1)',
      marginTop: 20,
      marginBottom: 20,
      fontSize: 17,
    },
    buttonView: {
        flexDirection: 'row',
        justifyContent:"flex-end"
    },
    modalContent: {
      backgroundColor: 'white',
      //padding: 22,
      //justifyContent: 'center',
      //alignItems: 'center',
      borderRadius: 4,
      borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    bottomModal: {
      justifyContent: 'flex-end',
      margin: 0,
    },
    modalHeading: {
        fontSize: 25,
        marginLeft: 22,
        marginBottom: 10,
        marginTop: 35,
    },
    radioButtonContent: {
        fontSize: 17,
        marginRight: 10,
        marginLeft: 5,
    },
    modalHorizontalLine: {
        borderTopWidth: 0.4,
        marginTop: 30,
        borderColor: "rgba(192, 192, 192, 0.79)",
    },
    radioButton: {
        marginLeft: 15,
    },
  });

  export default styles;