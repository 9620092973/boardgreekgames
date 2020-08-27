
import { Image, TouchableOpacity, View, Text, ScrollView, AsyncStorage, Dimensions, Modal} from "react-native"
import styles from "../../Styles/MyProfileStyles/MyProfileStyleSheet"
import React from "react"

export default class ProfileFollowing extends React.Component{
    render(){
        return(
           <View>
              <View
					style={{
								width: "100%",
								flexDirection: "row",
								padding: 8,
								justifyContent: "center",
								marginEnd: 50
							}}>
							<View
								style={{flex: 1}}> 
								<Text
									style={styles.labelSevenText}>{this.props.my_followers_count}</Text>
								<Text
									style={styles.labelFourText}>Follower</Text>
							</View>
							<View
								style={{flex: 1}}>
								<Text
									style={styles.labelFiveText}>{this.props.my_followings_count}</Text>
								<Text
									style={styles.labelTwoText}>Following</Text>
							</View>
							<View
								style={{flex: 1}}>
								<Text
									style={styles.labelSixText}>{this.props.my_collection_count}</Text>
								<Text
									style={styles.labelThreeText}>Collections</Text>
							</View>
						</View>
           </View>
        )
    }
}
