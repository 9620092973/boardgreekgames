import React from "react";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../../Styles/HomeStyles/HomepageStyleSheet";
import DiscoveryMode from "./DiscoveryMode.js"

/* Please test the other screens before doing modifications here
 * HomePage, Profile
 */

export const NavigationHeader = (props) => (
    <View style={{ height: 110 }}>
        {NavigatingOptions(props)}
    </View>
)

const NavigatingOptions = (props) => {
    switch(props.parentName) {
        case "HomePage":
            // Cards navigation of the Discovery and HotOrNot Mode
            return (
                <DiscoveryMode 
                    renderDiscoveryMode = {props.renderDiscoveryMode}
                    renderHotOrNot = {props.renderHotOrNot}
                />
            )
        
        case "Profile":
            // Profile Image
            return (
                <View 
                    style={{
                        position: 'absolute',
                        top: 20,
                        left: "50%",
                        transform: [
                            { translateX: -50 }
                        ]
                    }}
                >
                    {props.Component()}
                </View>
            )
    }
} 

{/* Navigation Linear gradient

    <View style={styles.naviHeader}>
    <LinearGradient
        style={{
            height: 70,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50
        }}
        colors={["#001a33", "#004f99"]}
        start={{
        x: 0,
        y: 0
    }}
        end={{
        x: 1,
        y: 0
    }}>
    </LinearGradient>                       
</View> */}