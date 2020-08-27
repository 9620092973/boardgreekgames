import { StyleSheet, Platform } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
      // PAGE CONTENT STYLES
      silverPDFContainer: {
        flexDirection:"row",
        flex:1
          
      },
      silverPDFText:{
        borderRadius: 2,
        borderWidth: 0.8,
        borderColor: '#1a8cff',
        left:10,
        fontSize: 13,
        fontWeight: "bold"
      },
      ScreenContent: {
        paddingTop: "3%",
        paddingLeft: "3%",
        paddingRight: "3%"
      },
      SilverRiverBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        flex: 1,
        paddingTop: "1%",
        paddingBottom: "1%"
      },
     
      hrLine: {
        backgroundColor: "white",
        borderWidth: 0.5,
        // marginTop: "2%",
        // marginBottom: "2%",
        borderColor: "rgba(192, 192, 192, 0.79)",
        borderStyle: "solid",
        height: 1
      },
      listBox: {
        flexDirection: "row",
        justifyContent: "flex-start",
        paddingBottom: "2%",
        paddingTop: 0
      },

      NameAndTime: {
        color: "rgba(0, 0, 0, 0.7)",
        fontSize: 14,
        fontWeight: "400",
        paddingTop: "2%",
        paddingBottom: "2%"
      },
      Numbers: {
        color: "rgba(0, 0, 0, 0.7)",
        fontSize: 14,
        paddingLeft: "6%",
        fontWeight: "400"
      },
    
      // silver short , high level strategy
      silverHighContainer: {
        paddingTop: "2%",
        paddingBottom: "2%"
      },
    
      LikeCommentShare: {
        justifyContent: "space-between",
        flexDirection: "row"
      },
      LikeComment: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "40%"
      },
      LikeBox: {
        flexDirection: "row",
        alignItems: "center"
      },
      CommentBox: {
        flexDirection: "row",
        alignItems: "center"
      },

      silverhighText: {
        color: "#000",
        fontSize: 18,
        fontWeight: "500"
      },
      silverVersionText: {
        fontSize: 14,
        fontWeight: "500"
      },
      TitleText: {
        color: "#000",
        fontSize: 16,
        fontWeight: "500"
      },
    
      // shivu (photos post screenstyles)
      GameImage: {
        backgroundColor: "transparent",
        width: wp("100%"),
        height: hp("100%"),
        marginLeft: 10,
        marginBottom: 15,
        borderRadius: 7,
        alignItems: "flex-start"
      },
      imageBorder: {
        width: wp("44 %"),
        height: hp("18%")
      },
      gamename: {
        position: "absolute",
        bottom: "2%",
        left: "30%"
      },
      ImagesText: {
        fontSize: 16,
        fontWeight: "500",
        justifyContent: "flex-end",
        left: 15,
        alignContent: "center"
      },
      Button: {
        marginLeft: "50%",
        marginBottom: 30,
        width: 90,
        height: 50
      },
      profileImage: {
        width: wp("46%"),
        height: hp("20%"),
        borderRadius: 10
      },
    
      Imageheading: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#000",
        textAlign: "left",
        marginTop:10
      },
      borderline: {
        backgroundColor: "white",
        borderWidth: 0.5,
        borderColor: "rgba(192, 192, 192, 0.79)"
      },
      borderline1: {
        backgroundColor: "white",
        borderWidth: 0.5,
        borderColor: "rgba(192, 192, 192, 0.79)",
        bottom: 30
      },
      LikeCommentugc: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start"
      },
      // fullImageView: {
      //   width: wp("46%")
      // },
      profileNumbers: {
        color: "rgba(0, 0, 0, 0.7)",
        fontSize: 14,
        paddingLeft: "3%",
        fontWeight: "400"
      },
      Fullpost: {
        flex:1,
        position: 'relative',
        paddingRight: "2%",
        paddingLeft: "2%"
      },
    
      //comment styles
      comment_btn:{
        position: "absolute",
        bottom: "10%",
        left: "30%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        width: "40%",
        backgroundColor: "#159CDA"
      },
      comment_text:{
        color: "#fff",
        textAlign: "center",
        padding: "4%",
        paddingLeft: "2%",
        paddingRight: "2%"
      },
    
      comment_box:{
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        padding: 0,
        paddingTop: "1%",
        paddingBottom: "1%"
      },

});

export default styles;
