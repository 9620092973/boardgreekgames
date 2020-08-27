import React from "react"
import {StyleSheet, Platform,} from "react-native"
import { TouchableHighlight } from "react-native-gesture-handler";

export const CustomTouchableIcon = ({onPress , children })=>{
    return(
        <TouchableHighlight
            underlayColor="rgba(216,216,216,0.4)"
            style = {styles.iconStyle}
            onPress={onPress}>
            {children}
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    iconStyle:{
            marginBottom:Platform.OS === 'ios' ? 5 : null, 
            borderRadius: 50,
            paddingVertical: Platform.OS === 'ios' ? 6: 10,  
            paddingHorizontal:Platform.OS === 'ios' ? 15: 18,
           
        }
})