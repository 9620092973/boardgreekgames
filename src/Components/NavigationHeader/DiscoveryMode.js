import React, {Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
} from "react-native";
import styles from "../../Styles/HomeStyles/HomepageStyleSheet";

import DiscoveryImage from '../../../assets/Image/DiscoveryImage.svg'
import HotorNotImage from '../../../assets/Image/HotornotImage.svg'

export default class DiscoveryMode extends Component {
    render() {
        return (
        <View style={styles.discoveryView}>
            <DisoveryHotorNotCard 
                renderCard = {this.props.renderDiscoveryMode}
                CardImage = {DiscoveryImage}
                title = "Discovery Mode"
            />
        
            <DisoveryHotorNotCard 
                renderCard = {this.props.renderHotOrNot}
                CardImage = {HotorNotImage}
                title = "Hot or Not"
            />
        </View>
        )
    }
}

// single component Card of the discoverymode and HotOrNot
class  DisoveryHotorNotCard extends React.PureComponent {
    render() {
        const { CardImage, renderCard, title } = this.props;
        return ( 
            <TouchableOpacity onPress={renderCard} 
                style={[styles.viewSevenView, { alignItems: 'center' }]}
            >
                    <CardImage width={50} height={50} />
                <Text style={styles.labelThreeText}>{title}</Text>
            </TouchableOpacity>
        )
    }
}  
