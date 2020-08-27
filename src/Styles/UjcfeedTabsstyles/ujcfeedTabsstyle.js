import { StyleSheet, Platform, Dimensions } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  gameimageImage: {
    resizeMode: "stretch",
    backgroundColor: "transparent",
    height: 200,
    width: wp("100%")
  },
  labelFourText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    marginLeft: "10%"
  },
  labelThreeText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    marginLeft: "10%"
  },
  labelSevenText: {
    color: "rgba(0, 0, 0, 0.67)",
    fontSize: 14,
    fontWeight: "normal",
    backgroundColor: "transparent"
  },
  labelSixText: {
    color: "rgba(0, 0, 0, 0.7)",
    fontSize: 14,
    fontWeight: "normal",
    marginLeft: 40,
    backgroundColor: "transparent"
  },
  labelFiveText: {
    backgroundColor: "transparent",
    color: "rgba(0, 0, 0, 0.7)",
    fontSize: 14,
    fontWeight: "normal",
    marginLeft: 40
  },
  ScreenContent: {
    paddingTop: "8%",
    paddingLeft: "4%",
    paddingRight: "4%"
  },
  SilverRiverBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    paddingTop: "1%",
    paddingBottom: "1%"
  },
  ProfileTitleBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    paddingTop: "2%",
    paddingBottom: Platform === "ios" ? "3%" : "2%"
  },
  TitleandYearBox: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  profileTitle: {
    color: "#000",
    fontSize: 16,
    alignSelf: "flex-start",
    fontWeight: "500",
    textAlign: "left"
  },
  pYear: {
    textAlign: "left",
    color: "#000",
    fontSize: 16,
    fontWeight: "500",
    paddingRight: "2%"
  },
  shop: {
    backgroundColor: "#159CDA",
    textAlign: "center",
    fontSize: 14,
    padding: "4%",
    paddingTop: "1%",
    paddingBottom: "1%",
    borderRadius: Platform.OS === "ios" ? 7 : 5,
    color: "#fff"
  },
  hrLine: {
    backgroundColor: "white",
    borderWidth: 0.5,
    marginTop: 15,
    borderColor: "rgba(192, 192, 192, 0.79)",
  },
  reviewLine: {
    backgroundColor: "white",
    borderWidth: 0.5,
    marginTop: 3,
    borderColor: "rgba(192, 192, 192, 0.79)",
  },
  listBox: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingBottom: 0,
    paddingTop: "2%"
  },
  players: {
    borderRightWidth: Platform.OS === "ios" ? 2 : 1,
    borderColor: "rgba(192, 192, 192, 0.79)",
    color: "rgba(0, 0, 0, 0.7)",
    fontSize: 14,
    fontWeight: "400",
    paddingRight: "2%",
    overflow: 'hidden',
  },
  GameTime: {
    borderRightWidth: 1,
    borderRightColor: "rgba(192, 192, 192, 0.79)",
    color: "rgba(0, 0, 0, 0.7)",
    fontSize: 14,
    fontWeight: "400",
    paddingRight: "2%",
    paddingLeft: "2%"
  },
  GameTimeAge: {
    color: "rgba(0, 0, 0, 0.7)",
    fontSize: 14,
    fontWeight: "400",
    paddingLeft: "2%"
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
  ShareBox: {
    flexDirection: "row",
    textAlign: "center",
    alignItems: "center",
  },
  ShareButtonText: {
    color: "rgba(0, 0, 0, 0.7)",
    fontSize: 14,
    fontWeight: "400",
    paddingLeft: "4%",
    paddingRight: "1%"
  },
  silverhighText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "500"
  },
  TitleText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "500"
  },
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
    borderRadius: 10,
    marginTop: 15,
  },

  Imageheading: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
    textAlign: "left",
    padding: 5,
    alignSelf: 'stretch',
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
    justifyContent: "space-between",
    padding: 6
  },
  profileNumbers: {
    color: "rgba(0, 0, 0, 0.7)",
    fontSize: 12,
    paddingLeft: "3%",
    fontWeight: "400"
  },
  Fullpost: {
    position: "relative",

  },
  //comment styles
  comment_btn: {
    position: "absolute",
    bottom: "3%",
    left: "30%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    width: "40%",
    backgroundColor: "#159CDA"
  },
  comment_text: {
    color: "#fff",
    textAlign: "center",
    padding: "4%",
    paddingLeft: "2%",
    paddingRight: "2%"
  },

  comment_box: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    padding: 0,
    paddingTop: "1%",
    paddingBottom: "1%"
  },
  replay_view: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "3%"
  },
  replay_view1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "75%"
  },
  replay_text: {
    color: "rgba(0, 0, 0, 0.7)",
    fontSize: 14,
    fontWeight: "400",
    paddingLeft: "3%",
    paddingRight: "1%"
  },
  report_text: {
    color: "rgba(0, 0, 0, 0.7)",
    fontSize: 13,
    fontWeight: "400",
    paddingLeft: "1%",
    paddingRight: "2%"
  },
  modal_image_View: {
    borderBottomColor: "rgba(0,0,0,0.3)",
    borderBottomWidth: 1,
    margin: 0,
    paddingVertical: 15,
    fontSize: 20
  },

  game_comment_header: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    padding: 20

  },
  // photos and videos styles
  imageStyle: {
    width: width,
    height: 200,
  },
  comment_count: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "3%"
  },
  count_view: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "75%"
  },
  mode_comment: {
    color: "rgba(0, 0, 0, 0.7)",
    fontSize: 13,
    fontWeight: "400",
    paddingLeft: "4%",
    paddingRight: "1%"
  },
  like_count: {
    color: "rgba(0, 0, 0, 0.7)",
    fontSize: 13,
    paddingLeft: "2%",
    fontWeight: "400"
  },
  replay_Viewcontent: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingLeft: 20

  },
  replay_comment: {
    fontSize: 12,
    paddingTop: "2%",
    paddingLeft: "1%",
    paddingBottom: "2%"
  },

  pro_content: {
    fontSize: 20,
    borderBottomColor: "rgba(0,0,0,0.3)",
    borderBottomWidth: 1,
    paddingVertical: Platform.OS === "ios" ? 80 : 5
  },
  comment_view: {
    backgroundColor: '#fff',
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.3)",
    padding: "2%",
    paddingTop: 0,
    paddingBottom: 0,
    borderRadius: 25,
    marginRight: "3%",
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 5
    },
    shadowOpacity: 1,
    elevation: 1
  },

  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },


  //photo post styles

  photoUser: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 10,
    marginLeft: 10,
    justifyContent: "space-between",

  },
  report_view: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginLeft: 8
  },
  photo_view: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 2,
    paddingTop: "2%",
    paddingBottom: "2%",
    flexWrap: "wrap",

  },
  comment_ugc: {
    flexDirection: "row",
    alignItems: "center",
    padding: "6%",
    paddingLeft: 0,
    alignSelf: 'flex-start'

  },
  comment_photo_count: {
    flexDirection: "row",
    alignItems: "center",
    padding: "6%",
    paddingLeft: 0,
    alignSelf: "flex-start"
  },
  Full_photo_post: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: "wrap",
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  postContainer: {
    backgroundColor: '#fff'
  },
  textarea: {
    backgroundColor: "#fff",
    flex: 0.9,
    padding: 4,
    fontSize: 15
  },

  //game info add collections styling

  add_collection: {
    backgroundColor: "#fff",
    height: 30,
    width: 30,
    borderRadius: 20,
    borderColor: "gray",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10
  },
  collected_view: {
    backgroundColor: "#fff",
    height: 30,
    width: 30,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10
  },
  share: {
    backgroundColor: "#fff",
    height: 30,
    width: 30,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10
  },
  // Feed Itme and corresponding comments and replies view
  feedItemModalView: {
    height: (Dimensions.get('window').height) - 120,
    backgroundColor: 'white',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    marginTop: 9,
  },
  iconStyles: {
    // flex: 1,
    // flexDirection: "row",
    // marginLeft: 15,
    // justifyContent: "flex-start",
    // alignItems: "flex-start"
    flexDirection: "row", alignItems: "center", marginLeft: 8, marginRight: 10
  },
  collectGame: {
    flexDirection: "row",
    right: "3%",
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  icons: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },
  //single modal

  pdf_text: {
    color: "#159CDA",
    textDecorationLine: "underline",
    marginLeft: 15
  },
  user_name: {
    flexDirection: 'column',
    marginLeft: 10,
    justifyContent: 'center'
  },
  title_view: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 15
  },
  post_like: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  post_view: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 20,
    alignItems: 'center',
    marginLeft: 20
  },
  like_icon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  comment_icon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: "20%"
  },
  report: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'flex-end',
    marginRight: 20
  },
  Likephoto: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  photoView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 20,
    alignItems: 'center',
    marginLeft: 20
  },
  likeIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  commentIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: "20%"
  },
  GradientStyle: {
    paddingTop: Platform.OS === "ios" ? 20 : 28,
    flexDirection: "row",
    alignItems: "center"
  },
  headerContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    height: Platform.OS === "ios" ? 55 : 65
  },
  closeModalView: {
    flexDirection: "row",
    height: Platform.OS === "ios" ? 55 : 65
  },
  GradientStyle1: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 20 : 22,
    paddingBottom: Platform.OS === "android" ? 20 : 10,
    paddingHorizontal: Platform.OS === "android" ? 20 : 10,
    flexDirection: 'row', alignItems: 'center'
  },
  modalArrow: {
    alignSelf: 'center',
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10
  },
  screenNamestyle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18
  },
  replyView: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginBottom: 10
  },
  replyImageView: {
    marginHorizontal: 20,
    marginTop: 10,
    justifyContent: 'flex-start'
  },
  commentreplyView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    alignContent: 'center',
    marginRight: 20,
  },
  replyTime: {
    fontSize: 12,
    fontWeight: "400",
    paddingRight: '2%'
  },
  commentReply: {
    fontWeight: "400",
    fontSize: 14,
    paddingTop: "2%",
    paddingBottom: "2%",
    marginRight: 20,
  },
  commentBoxView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginTop: 7,
    marginRight: 20
  },
  commentreplyIcon: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  replyIconView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  replyLikeIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: "20%"
  },
  replyLikeCount: {
    color: "rgba(0, 0, 0, 0.7)",
    fontSize: 14,
    fontWeight: "400",
    paddingLeft: "3%",
    paddingRight: "1%"
  },
  // iconStyle: {
  //   marginBottom: Platform.OS === 'ios' ? 5 : null,
  //   borderRadius: 50,
  //   paddingVertical: Platform.OS === 'ios' ? 6 : 10,
  //   paddingHorizontal: Platform.OS === 'ios' ? 15 : 18,

  // }
});

export default styles;
