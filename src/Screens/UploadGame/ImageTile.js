import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableHighlight,
} from 'react-native';
import { AntDesign } from "@expo/vector-icons";

const { width } = Dimensions.get('window')

class ImageTile extends React.PureComponent {
  constructor(props){
    super(props)
    this.state = {
      isImageSelected: false,
    }
  }

  render() {
    let { item, index, selected, selectImage } = this.props;
    if (!item) return null;
    return (
      <TouchableHighlight
        style={{opacity: selected ? 0.5 : 1}}
        underlayColor='transparent'
        onPress={() => selectImage(index)}
      >
        <View>
          <Image
            style={{width: width/3, height: width/3}}
            source={{uri: item}}
          />
          {selected == true ? <AntDesign
            name="checkcircle"
            size={22}
            color={"#159CDA"}
            style={{position: 'absolute', right: 3, top: 6}}
          /> : null}
        </View>
      </TouchableHighlight>
    )
  }
}
export default ImageTile;