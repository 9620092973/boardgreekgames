import React, { Component } from 'react';
import { View, Dimensions, Platform } from 'react-native';
import { Video } from 'expo-av';

export default class VideoComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        let URI = this.props.video_uri;

        return (

            <Video
                source={{ uri: this.props.video_uri }}
                isMuted={false}
                rate={1.0}
                resizeMode="cover"
                //shouldPlay
                isLooping
                style={{ width: Dimensions.get('window').width, height: 200 }}
                useNativeControls={true}
            />
        );
    }
}

