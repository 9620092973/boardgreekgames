//
//  SearchFilter
//  Search
//
//  Created by Supernova.
//  Copyright © 2018 Supernova. All rights reserved.
//

import { TextInput, TouchableOpacity, Image, Text, View } from "react-native";
import styles from "../../Styles/SearchStyles/SearchFilterStyleSheet";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default class SearchFilter extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      header: null,
      headerLeft: null,
      headerRight: null
    };
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <View style={styles.messagesView}>
        <View
          pointerEvents="box-none"
          style={{
            height: 96
          }}
        >
          <LinearGradient
            start={{
              x: 0.5,
              y: 0
            }}
            end={{
              x: 0.5,
              y: 1
            }}
            locations={[0, 1]}
            colors={["rgb(12, 143, 235)", "rgb(10, 78, 166)"]}
            style={styles.viewViewLinearGradient}
          >
            <View style={styles.viewView} />
          </LinearGradient>
          <View style={styles.viewTwoView} />
          <View
            pointerEvents="box-none"
            style={{
              position: "absolute",
              left: 20,
              right: 21,
              top: 53,
              height: 40,
              flexDirection: "row",
              alignItems: "flex-start"
            }}
          >
            <Image
              source={require("../../../assets/Image/ABCme.jpeg")}
              style={styles.imageThreeImage}
            />
            <TextInput
              autoCapitalize="none"
              returnKeyType="search"
              autoCorrect={false}
              placeholder="Search for games you like"
              style={styles.textFieldTextInput}
            />
            <Image
              source={require("../../../assets/Image/ABCme.jpeg")}
              style={styles.imageTwoImage}
            />
            <Image
              source={require("../../../assets/Image/ABCme.jpeg")}
              style={styles.imageImage}
            />
          </View>
        </View>
        <View
          pointerEvents="box-none"
          style={{
            height: 639,
            marginTop: 4
          }}
        >
          <View style={styles.viewThreeView} />
          <View
            pointerEvents="box-none"
            style={{
              position: "absolute",
              left: 19,
              right: 8,
              top: 5,
              height: 545
            }}
          >
            <TouchableOpacity style={styles.buttonTwoButton}>
              <Text style={styles.buttonTwoButtonText}>X Close</Text>
            </TouchableOpacity>
            <View
              pointerEvents="box-none"
              style={{
                height: 35,
                marginRight: 18,
                marginTop: 5,
                flexDirection: "row",
                alignItems: "flex-start"
              }}
            >
              <Text style={styles.labelSixText}>Minimum age</Text>
              <View
                style={{
                  flex: 1
                }}
              />
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Select"
                style={styles.textFieldEightTextInput}
              />
              <Image
                source={require("../../../assets/Image/ABCme.jpeg")}
                style={styles.imageTwelveImage}
              />
            </View>
            <View style={styles.viewSevenView} />
            <Text style={styles.labelFiveText}>Players range</Text>
            <View
              pointerEvents="box-none"
              style={{
                height: 35,
                marginRight: 18,
                marginTop: 15,
                flexDirection: "row",
                alignItems: "flex-start"
              }}
            >
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Mim"
                style={styles.textFieldSixTextInput}
              />
              <Image
                source={require("../../../assets/Image/ABCme.jpeg")}
                style={styles.imageFourImage}
              />
              <View
                style={{
                  flex: 1
                }}
              />
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Max"
                style={styles.textFieldFourTextInput}
              />
              <Image
                source={require("../../../assets/Image/ABCme.jpeg")}
                style={styles.imageSevenImage}
              />
            </View>
            <View
              pointerEvents="box-none"
              style={{
                height: 2,
                marginRight: 3,
                flexDirection: "row",
                alignItems: "flex-start"
              }}
            >
              <View style={styles.viewTenView} />
              <View
                style={{
                  flex: 1
                }}
              />
              <View style={styles.viewEightView} />
            </View>
            <Text style={styles.labelFourText}>Players playing range</Text>
            <View
              pointerEvents="box-none"
              style={{
                height: 40,
                marginRight: 18,
                marginTop: 5,
                flexDirection: "row",
                alignItems: "flex-start"
              }}
            >
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Mim"
                style={styles.textFieldSevenTextInput}
              />
              <Image
                source={require("../../../assets/Image/ABCme.jpeg")}
                style={styles.imageFiveImage}
              />
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Max"
                style={styles.textFieldFiveTextInput}
              />
              <Image
                source={require("../../../assets/Image/ABCme.jpeg")}
                style={styles.imageEightImage}
              />
            </View>
            <View
              pointerEvents="box-none"
              style={{
                height: 1,
                flexDirection: "row",
                alignItems: "flex-start"
              }}
            >
              <View style={styles.viewSixView} />
              <View
                style={{
                  flex: 1
                }}
              />
              <View style={styles.viewNineView} />
            </View>
            <Text style={styles.labelText}>Players playing range</Text>
            <View
              pointerEvents="box-none"
              style={{
                height: 35,
                marginRight: 18,
                marginTop: 9,
                flexDirection: "row",
                alignItems: "flex-start"
              }}
            >
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Mim"
                style={styles.textFieldThreeTextInput}
              />
              <Image
                source={require("../../../assets/Image/ABCme.jpeg")}
                style={styles.imageSixImage}
              />
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Max"
                style={styles.textFieldTwoTextInput}
              />
              <Image
                source={require("../../../assets/Image/ABCme.jpeg")}
                style={styles.imageNineImage}
              />
            </View>
            <View
              pointerEvents="box-none"
              style={{
                height: 2,
                flexDirection: "row",
                alignItems: "flex-start"
              }}
            >
              <View style={styles.viewFourView} />
              <View
                style={{
                  flex: 1
                }}
              />
              <View style={styles.viewFiveView} />
            </View>
            <View
              pointerEvents="box-none"
              style={{
                height: 24,
                marginRight: 18,
                marginTop: 32,
                flexDirection: "row",
                alignItems: "flex-start"
              }}
            >
              <Text style={styles.labelTwoText}>Game Category</Text>
              <View
                style={{
                  flex: 1
                }}
              />
              <Image
                source={require("../../../assets/Image/ABCme.jpeg")}
                style={styles.imageTenImage}
              />
            </View>
            <View
              pointerEvents="box-none"
              style={{
                height: 24,
                marginRight: 18,
                marginTop: 19,
                flexDirection: "row",
                alignItems: "flex-start"
              }}
            >
              <Text style={styles.labelThreeText}>Game Mechanic</Text>
              <View
                style={{
                  flex: 1
                }}
              />
              <Image
                source={require("../../../assets/Image/ABCme.jpeg")}
                style={styles.imageElevenImage}
              />
            </View>
            <TouchableOpacity style={styles.buttonButton}>
              <Text style={styles.buttonButtonText}>Search</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
