import { Image, TouchableOpacity, View, Text, ScrollView, AsyncStorage, Dimensions, Modal} from "react-native"
import styles from "../../Styles/MyProfileStyles/MyProfileStyleSheet"
import React from "react"
import { connect } from "react-redux";
import { Following, followingStatus, unFollowUser } from "../../Networks/Following"

 class UserFollowButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            follow: false
        }
        this.folloUser = this.folloUser.bind(this)
    }

    async componentDidMount() {
        const { userId } = this.props;
        followingStatus(userId).then(response => {
            this.setState({ follow: response.data.follow })
        }) 
    }

    folloUser() {
        const { follow } = this.state;
        const { userId } = this.props;
        if(!follow) {
            Following(userId).then(response => {
                followingStatus(userId).then(response => {
                    this.setState({ follow: response.data.follow })
                }) 
            }).catch(error => {
                console.log('@Error [Profile] UserDetails', error)
            }) 
        } else {
            unFollowUser(userId).then(response => {
                followingStatus(userId).then(response => {
                    this.setState({ follow: response.data.follow })
                })
            })
        }

    }

    userFollow(){
        const { follow } = this.state;
        // if(this.props.user_id){
            return(
                <View>
                  {!follow && 
                  <TouchableOpacity
							style={[styles.buttonButton,{backgroundColor: "rgb(8, 67, 159)"}]}
                            onPress={this.folloUser}>
                            
							<Text
								style={{color: 'white', fontSize: 18}}>Follow</Text>
                  </TouchableOpacity>}
                  
                  {follow && 
                  <TouchableOpacity
                  style={[styles.buttonButton,{backgroundColor: "rgb(8, 67, 159)"}]}
                  onPress={this.folloUser}>
                  
                  <Text
                      style={{color: 'white', fontSize: 18}}>UnFollow</Text>
                    </TouchableOpacity>
                  }
                </View>
            )
        // }
    }
    render(){
        return(
           <View>
              {this.userFollow()}
           </View>
        )
    }
}

  export default (UserFollowButton);