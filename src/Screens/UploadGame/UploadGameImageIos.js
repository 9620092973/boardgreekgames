import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  CameraRoll,
  FlatList,
  Dimensions,
  Button,
  Image,
  TouchableHighlight
} from 'react-native';
import * as FileSystem from 'expo-file-system';
import ImageTile from './ImageTile';
const { width } = Dimensions.get('window')

export default class UploadGameImageIos extends React.Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      selected: {},
      after: null,
      has_next_page: true,
      max: 100
    }
  }

  componentDidMount() {
    this._isMounted = true;
    this.getPhotos()
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  selectImage = (index) => {
    let newSelected = {...this.state.selected};
    if (newSelected[index]) {
      delete newSelected[index];
    } else {
      newSelected[index] = true
    }
    if (Object.keys(newSelected).length > this.state.max) return;
    if (!newSelected) newSelected = {};
    this.setState({ selected: newSelected })
  }

  imageBrowserCallback = (callback) => {
    callback.then((photos) => {
      console.log(photos)
      this.setState({
        imageBrowserOpen: false,
        photos
      })
    }).catch((e) => console.log(e))
  }

  getPhotos = () => {
    console.log("getPhotos one")
    let params = { first: 50, assetType: 'Photos', groupTypes: 'All' };
    if (this.state.after) params.after = this.state.after
    if (!this.state.has_next_page) return
    CameraRoll
      .getPhotos(params)
      .then(this.processPhotos)
      console.log("getPhotos two")
  }

  processPhotos = (r) => {
    console.log("processPhotos two")
    if (this.state.after === r.page_info.end_cursor) return;
    let uris = r.edges.map(i=> i.node).map(i=> i.image).map(i=>i.uri)
    this.setState({
      photos: [...this.state.photos, ...uris],
      after: r.page_info.end_cursor,
      has_next_page: r.page_info.has_next_page
    });
    console.log("processPhotos two")
  }

  getItemLayout = (data,index) => {
    let length = width/4;
    return { length, offset: length * index, index }
  }

  // May be useful in future

  /*prepareCallback = () => {
    console.log("prepareCallback")
    let { selected, photos } = this.state;
    console.log("prepareCallback photos",photos)
    let selectedPhotos = photos.filter((item, index) => {
      console.log("prepareCallback after")
      return(selected[index])
    });
    let files = selectedPhotos
      .map(i => FileSystem.getInfoAsync(i, {md5: true}))
    let callbackResult = Promise
      .all(files)
      .then(imageData=> {
        return imageData.map((data, i) => {
          return {file: selectedPhotos[i], ...data}
        })
      })
    this.imageBrowserCallback(callbackResult)
  }

  renderHeader = () => {
    let selectedCount = Object.keys(this.state.selected).length;
    let headerText = selectedCount + ' Selected';
    if (selectedCount === this.state.max) headerText = headerText + ' (Max)';
    console.log("renderHeader")
    return (
      <View style={styles.header}>
        <Button
          title="Exit"
          onPress={() => this.imageBrowserCallback(Promise.resolve([]))}
        />
        <Text>{headerText}</Text>
        {console.log("renderHeader one")}
        <Button
          title="Choose"
          onPress={() => this.prepareCallback()}
        />
        {console.log("renderHeader two")}
      </View>
    )
  }*/

  renderImageTile = ({item, index}) => {
    let selected = this.state.selected[index] ? true : false
    return(
      <ImageTile
        item={item}
        index={index}
        selected={selected}
        selectImage={this.selectImage}
      />
    )
  }
  renderImages() {
    return(
      <FlatList
        data={this.state.photos}
        numColumns={4}
        renderItem={this.renderImageTile}
        keyExtractor={(_,index) => index}
        onEndReached={()=> {this.getPhotos()}}
        onEndReachedThreshold={0.5}
        ListEmptyComponent={<Text>Loading...</Text>}
        initialNumToRender={24}
        getItemLayout={this.getItemLayout}
      />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        {/*this.renderHeader()*/}
        {this.renderImages()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 50,
    width: width,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginTop: 20
  },
})
