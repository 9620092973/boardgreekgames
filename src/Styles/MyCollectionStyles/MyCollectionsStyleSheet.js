//
//  MyCollectionsStyleSheet.js
//  ScanRelatedScreens
//
//  Created by Supernova.
//  Copyright Â© 2018 Supernova. All rights reserved.
//

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  MainContainer: {
    // Setting up View inside content in Vertically center.
    justifyContent: "center",
    flex: 1,
    //margin: 8,
    width: "100%"
  },

  GameImage: {
    // Setting up View inside content in Vertically center.
    justifyContent: "flex-start",
    padding: 8,
    paddingLeft: 8,
    flex: 1
  },

  DltImage: {
    // Setting up View inside content in Vertically center.
    justifyContent: "center",
    padding: 5,
    paddingRight: 8
  },

  imageViewContainer: {
    // margin: 10,
    padding: 10,
    width: 60,
    height: 60
  },

  imageViewDlt: {
    // marginRight: 25,
    width: 15,
    height: 20
  },

  textViewContainer: {
    textAlignVertical: "center",
    flex: 4,
    padding: 15
  },
  separatorView: {
    backgroundColor: "black",
    opacity: 0.1,
    height: 1,
    marginRight: 5,
    marginTop: 1
  },
  historyText:{
    textAlign: "center",
    fontSize: 23,
    color: "#ddd",
    fontWeight: "bold"
  }
});

export default styles;
