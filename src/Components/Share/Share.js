import React, { Component } from "react";
import {
  StyleSheet,
  Platform,
  Button,
  Share,
  View,
  Text,
  Linking,
  TouchableOpacity
} from "react-native";
import {Constants} from "expo-constants";
import styles from "../../Styles/GameInfoStyles/GameInfoStyleSheet";

import getGalleryImageAsync from "./GetGalleryAsync";

const b64 =
  "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==";

export default class ShareGame extends Component {
  onShare = async () => {
    const uri = await getGalleryImageAsync(1);

    Share.share(
      {
        title: "Test",
        url: uri,
        message: "https://snack.expo.io/@rajender/share-video-tutorial"
      },
      {
        excludedActivityTypes: [
          "com.apple.UIKit.activity.PostToWeibo",
          "com.apple.UIKit.activity.Print",
          "com.apple.UIKit.activity.CopyToPasteboard",
          "com.apple.UIKit.activity.AssignToContact",
          "com.apple.UIKit.activity.SaveToCameraRoll",
          "com.apple.UIKit.activity.AddToReadingList",
          "com.apple.UIKit.activity.PostToFlickr",
          "com.apple.UIKit.activity.PostToVimeo",
          "com.apple.UIKit.activity.PostToTencentWeibo",
          "com.apple.UIKit.activity.AirDrop",
          "com.apple.UIKit.activity.OpenInIBooks",
          "com.apple.UIKit.activity.MarkupAsPDF",
          "com.apple.reminders.RemindersEditorExtension",
          "com.apple.mobilenotes.SharingExtension",
          "com.apple.mobileslideshow.StreamShareService",
          "com.linkedin.LinkedIn.ShareExtension",
          "pinterest.ShareExtension",
          "com.google.GooglePlus.ShareExtension",
          "com.tumblr.tumblr.Share-With-Tumblr",
          "net.whatsapp.WhatsApp.ShareExtension" //WhatsApp
        ]
      }
    );
  };

  render() {
    return <View />;
  }
}
