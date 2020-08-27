import React, { Component } from 'react';
import { View, StyleSheet,TouchableOpacity } from 'react-native';
import * as Expo from 'expo';
import { WebView } from 'react-native-webview';
import { FontAwesome } from '@expo/vector-icons';

export default class PDF  extends Component {

    static navigationOptions = ({ navigation}) => ({                 
        header: null
    })

  constructor(props) {
      super(props);
  }

  componentWillMount() {
      Expo.ScreenOrientation.allowAsync(Expo.ScreenOrientation.Orientation.PORTRAIT);
  }
  
  render() {
    // document uri
    let URI = this.props.navigation.state.params.document_uri;
    return (
      <View style={styles.pdfContainer}>
        <WebView 
          bounces={false}
          scrollEnabled={false} 
          source={{ uri: `http://docs.google.com/gview?embedded=true&url=${URI}` }} />
           <View style={{position:"absolute",top:10,bottom:0,right:0,left:10,height:40,width:40,backgroundColor:"#353839"}}>
           <TouchableOpacity
                onPress={() => this.props.navigation.navigate("GameFeed")}>
                   <FontAwesome name="times-circle" size={25} style={{color:"#fff",padding:8,}}/>
          </TouchableOpacity>
          </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    pdfContainer: {
       flex:1 
    },
})
