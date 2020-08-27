import React from 'react';
import { View,Image} from 'react-native';
import {
    FontAwesome
  } from "@expo/vector-icons";

//Component to display profile picture
export default class ProfilePhoto extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      image:null,
    }; 
}

componentWillReceiveProps(props){
  if(props.profileImage!=this.props.profileImage){
    this.setState({
      image:props.profileImage
    })
  }
}

    render(){
        return(
            <View>
                  <View
                     style = {this.props.style}> 
                     {!this.props.profileImage ? 
                      <FontAwesome
                        name="user"
                        color={"#ccc"}
                        size= {this.props.size}
                        style={this.props.styleIcon}
                      />
                      :
                      <Image source={{uri:this.state.image}}
                      style = {this.props.style}
                        />
                     }
                    </View>
            </View>
        );
    }
}
