import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
        container: {
          flex: 1,
          // justifyContent: 'center',
        },
        SortbyHeading: {
          backgroundColor: "#F3F3F3",
          flexDirection:'row',
          justifyContent: "flex-start",
          paddingBottom:14,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        },
        modalContent: {
          backgroundColor: 'white',
          padding: 2,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          borderColor: 'rgba(0, 0, 0, 0.1)',
        },
        bottomModal: {
          justifyContent: 'flex-end',
          margin: 0
        },
        hrLine: {
          borderWidth: 0.2,
          marginTop: 8,
          marginBottom: 8,
          borderColor: "black",
          borderStyle: "solid",
          height: 0.5
        },
        sortbytext:{
          fontWeight:"bold",
          fontSize:20,
          paddingHorizontal:20,
          paddingTop:5
        },
        populartext:{
          fontSize:18,
          paddingTop:5,
          paddingHorizontal:20,
          justifyContent:"flex-start",
        },
        sortbyNewtext:{
          fontSize:18,
          paddingHorizontal:20
        },
        sortbyOldtext:{
          fontSize:18,
          paddingHorizontal:20,
          paddingBottom:20
        },
        sortbyoptions:{
          justifyContent:"flex-start",
        },
        shop: {
          backgroundColor: "#159CDA",
          textAlign: "center",
          fontSize: 14,
          padding: "4%",
          paddingTop: "1%",
          paddingBottom: "1%",
          borderRadius: Platform.OS === "ios" ? 5 : 5,
          color: "#fff"
        },
      });
      export default styles