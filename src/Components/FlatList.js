import React, { Component } from 'react'
import {
  Text,
  ImageBackground,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
  ActivityIndicator,
  Dimensions,
  TouchableWithoutFeedback

} from "react-native";
import styles from "../Styles/UjcfeedTabsstyles/ujcfeedTabsstyle";
import {
  FontAwesome,
  AntDesign,
  MaterialIcons,
} from "@expo/vector-icons";
import ReportModal from "../Components/ReUsableComponent/ReportModal"





export default class FlatListComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      
      isLoadingMore: false,
    }
    
    //this.onDidFocus = this.onDidFocus.bind(this)

  }

 renderFeedItem({item, index}) {
    const feedItem = item
    if (this.props.category != "photos") {

      return (
        <TouchableWithoutFeedback onPress={()=>{}}>
        <View style={styles.silverHighContainer}>
          <View key={index} >
            <View style={{ paddingLeft: 15, paddingRight: 15 }}>
              <TouchableOpacity onPress={() => { this.props.ReviewsDisplay1(feedItem.dataId, "all_reviews_view",feedItem.userId) }}>
                <Text style={styles.silverhighText}>
                  {feedItem.post_title}
                </Text>
              </TouchableOpacity>

              <Text style={styles.NameAndTime}>{feedItem.user} - 2 days ago</Text>

              <View style={styles.LikeCommentShare}>
                <View style={styles.LikeComment}>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate("Fullcomment");
                    }} >
                    <View style={styles.CommentBox}>
                      <MaterialIcons
                        name="mode-comment"
                        size={14}
                        color={"rgba(0, 0, 0, 0.7)"}
                      />
                      <Text style={styles.Numbers}>{feedItem.commentCount}</Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <View style={styles.LikeBox}>
                      <AntDesign
                        name="like1"
                        size={14}
                        color={"rgba(0, 0, 0, 0.7)"}
                      />
                      <Text style={styles.Numbers}>{feedItem.likes}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <ReportModal />
              </View>
            </View>
            <View style={styles.hrLine} />
          </View>
        </View>
        </TouchableWithoutFeedback>
      )
    }
    else if (this.props.category == "photos") {
      return this.renderPhotoPost(feedItem, index)
    }
  }

  renderPhotoPost(PhotoItem, index) {
    const screenWidth = (Math.round(Dimensions.get('window').width));
    const screenHeight = (Math.round(Dimensions.get('window').height));
    let image = PhotoItem.images[0] ? { uri: PhotoItem.images[0] } : require('../../assets/Image/ABCme.jpeg')
    const singlePhotoStyle = index%2==0 ? {marginRight: 10} : {}
    return (
        <View
          pointerEvents="box-none"
          style={[{ width: screenWidth/2 - 15 }, singlePhotoStyle]}>
          <TouchableOpacity
            onPress={() => { this.props.ReviewsDisplay1(PhotoItem.dataId, "all_reviews_view") }}>
            <Image
              source={image}
              style={[styles.profileImage, { width: screenWidth/2 - 15, height: screenWidth/2 - 15  }]}
            />
          </TouchableOpacity>

          <Text style={styles.Imageheading}>{PhotoItem.post_title}</Text>

          <View style={styles.LikeCommentugc}>
            <TouchableOpacity>
              <View style={styles.comment_ugc}>
                <AntDesign name="like1" size={15} color="grey" />
                <Text style={styles.profileNumbers}>{PhotoItem.likes}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("Fullcomment");
              }}>
              <View style={styles.comment_photo_count}>
                <MaterialIcons
                  name="mode-comment"
                  size={15}
                  color="grey"
                />
                <Text style={styles.profileNumbers}>{PhotoItem.commentCount}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
    )
  }

  infiniteLoad() {
    this.props.infiniteLoad()
  }

 
render_FlatList_footer = () => {

    var footer_View = (
        this.state.isLoadingMore &&
          <View style={{ flex: 1, padding: 10 }}>
            <ActivityIndicator size="large"/>
          </View>  
    );
 
     return footer_View ;  
  };


  render() {

    const { category } = this.props
    const { data } = this.props[category] ? this.props[category] : []
      return (
       <View style={{flex: 1}}>
            <FlatList
              data={data}
              contentContainerStyle={{overflow: 'hidden',
  backgroundColor: 'white',
  alignItems: 'center',
  width: Dimensions.get('window').width,
  borderWidth: 0,}}
              renderItem={data => this.renderFeedItem(data)  }
          
              onEndReached={() => {
                this.setState({ isLoadingMore: true },
                   () => {
                    this.infiniteLoad()
                  }
                )
              }
              }
                
                onEndReachedThreshold ={2}
              
              ListFooterComponent={this.render_FlatList_footer}
              /> 
              </View>
             
      )
     
    }
    
  

}
