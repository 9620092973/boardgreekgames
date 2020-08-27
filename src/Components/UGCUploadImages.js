import * as React from 'react';
import { Button, Image, View, TouchableOpacity, Text, StyleSheet, Platform, ScrollView, Dimensions } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { GetCameraRollPermissions } from "../Utils"
import * as ImagePicker from 'expo-image-picker';
import Modal from 'react-native-modal';
import { AntDesign } from '@expo/vector-icons'
import VideoComponent from "../Components/VideoComponent";
import { Video } from 'expo-av';

//Do not remove the commented code from this component-needed for later use
export default class UGCUploadImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      images: [],
      pdfName: '',
      mediaModal: false,
      fileType: '',
      iosFileName: '',
      uri: '',
      uploadText: 'Upload Multimedia'
    };
    this._pickImage = this._pickImage.bind(this)
    this.clearImage = this.clearImage.bind(this)
    this.mediaModalVisibility = this.mediaModalVisibility.bind(this)
  }

  renderImage(image) {
    let imageFormats = ["png", "jpg", "jpeg", "bmp", "gif", "webp", "psd"];
    let videoFormats = [
      "mp4",
      "m4a",
      "m4v",
      "f4v",
      "f4a",
      "m4b",
      "m4r",
      "f4b",
      "mov",
      "3gp",
      "3gp2",
      "3g2",
      "3gpp",
      "3gpp2",
      "ogg",
      "oga",
      "ogv",
      "ogx",
      "wmv",
      "wma",
      "asf*",
      "webm",
      "flv",
      "AVI*",
      "QuickTime*",
      "HDV*",
      "OP1a*",
      "OP-Atom*",
      "ts",
      "MPEG-2 PS",
      "MPEG-2 TS*",
      "WAV",
      "Broadcast",
      "WAV*",
      "LXF",
      "GXF*",
      "VOB*"
    ];
    let uri = { uri: image }
    if (imageFormats.includes(this.state.fileType)) {
      return (
        <Image
          source={uri}
          style={{ width: 400, height: 250 }}
        />
      )
    } else if (videoFormats.includes(this.state.fileType)) {
      return (
        <View style={{ flexDirection: "row" }}>
          <Video
            source={uri}
            isMuted={false}
            rate={1.0}
            resizeMode="cover"
            isLooping
            style={{ width: Dimensions.get('window').width, height: 250 }}
            useNativeControls={true}
          />
        </View>
      )
    }
  }

  clearImage() {
    this.setState({
      image: null
    })
  }

  mediaModalVisibility(isVisible) {
    this.setState({ mediaModal: isVisible })
  }

  _renderModalContent = () => (
    <View style={styles.modalContent}>
      <View style={styles.SortbyHeading}>
        <Text style={styles.sortbytext}>Select Multimedia</Text>
        <AntDesign
          name="close"
          size={20}
          style={{ position: 'absolute', right: 2, top: 8 }}
          onPress={() => this.mediaModalVisibility(false)}
        />
      </View>
      <View style={styles.sortbyoptions}>
        <TouchableOpacity onPress={() => { this.storeDocuments('image') }}>
          <Text style={styles.populartext}>Only Images</Text>
        </TouchableOpacity>
        <View style={styles.hrLine} />
        <TouchableOpacity onPress={() => { this.storeDocuments('image/video') }}>
          <Text style={styles.sortbyNewtext}>Images / Videos</Text>
        </TouchableOpacity>
        <View style={styles.hrLine} />
        <TouchableOpacity onPress={() => { this.storeDocuments('documents') }}>
          <Text style={styles.sortbyOldtext}>Pdf</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  render() {
    let { image } = this.state

    return (
      <View>
        <View>
          <TouchableOpacity onPress={this._pickImage}>
            <View style={{ justifyContent: 'flex-end', flexDirection: 'row', marginBottom: 10 }}>
              <Text style={{
                backgroundColor: "#159CDA",
                textAlign: "center",
                fontSize: 14,
                paddingVertical: 5,
                paddingHorizontal: 10,
                borderRadius: 3,
                color: "#fff",
                overflow: 'hidden',
                
              }}>{this.state.uploadText}</Text>
            </View>
          </TouchableOpacity>
          {/* <TouchableOpacity> */}

          <View>
            <View style={styles.image_view}>
              {this.renderImage(image)}
            </View>
          </View>

          {/* <Text style={styles.pdfName}>
          {this.state.pdfName}
        </Text> */}
          {/* </TouchableOpacity> */}

          <Modal
            isVisible={this.state.mediaModal}
            onBackdropPress={() => this.mediaModalVisibility(false)}
            state={styles.bottomModal}
          >
            {this._renderModalContent()}
          </Modal>
        </View>

        <View style={{ marginTop: 20 }}>
          {/* {Platform.OS === 'ios' ? */}
          <Text style={{ color: '#159CDA' }}>
            {this.state.pdfName == '' ?
              this.state.iosFileName
              :
              this.state.pdfName
            }
          </Text>
          {/* : */}
          {/* <Text style={{color:'#159CDA'}}>
            {this.state.pdfName}
            </Text> */}
          {/* } */}
        </View>
      </View>

    )
  }

  _pickImage = async () => {
    await GetCameraRollPermissions();
    //if(Platform.OS == 'ios') {
    if (this.props.category == 'photos') {
      this.storeDocuments('image/video')
    } else {
      this.mediaModalVisibility(true)
    }
    // } else {
    //   this.storeDocuments('documents')
    // }
  }

  async storeDocuments(media) {
    let result;
    if (media == 'image' || media == 'image/video') {
      let mediaType = media == 'image' ? ImagePicker.MediaTypeOptions.Images : ImagePicker.MediaTypeOptions.All
      result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: mediaType,
        allowsEditing: true,
        aspect: [4, 3],
      });
      let fileName = result.name;
      uri = result.uri
      if (typeof fileName === "undefined") {
        var getFilename = uri.split("/");
        imgName = getFilename[getFilename.length - 1];
        this.setState({
          result: result,
          iosFileName: imgName,
          uploadText: 'Upload Another'
        })
      }
    }
    else {
      result = await DocumentPicker.getDocumentAsync({})
      // Write result cancel condition.
      if (!result.cancelled) {
        let pdfName = result.name
        uri = result.uri
        const uriParts = uri.split('.')
        let fileType = uriParts[uriParts.length - 1]
        this.setState({
          pdfName: pdfName,
          uploadText: 'Upload Another'
        })
        // if( fileType == "pdf") {
        //   this.setState({
        //     pdfName: pdfName
        //   })
        // }
        // else {
        //   this.setState({
        //     pdfName: ''
        //   })
        // }
      }
    }
    if (!result.cancelled) {
      let uri = result.uri
      const uriParts = uri.split('.')
      let fileType = uriParts[uriParts.length - 1]
      let images = []
      images = this.state.images
      images.push(result)
      this.setState({
        image: uri,
        images: images,
        fileType: fileType,
        uploadText: 'Upload Another'
      }, () => {
        this.props.setImage(images)
      });
    }
    this.mediaModalVisibility(false)
  };
}

const styles = StyleSheet.create({
  container: {
    height: 240
  },
  image_view: {
    justifyContent: "center",
    alignItems: "center",
  },
  image_cloud: {
    textAlign: "center",
    position: 'absolute',
    top: 50
  },
  text: {
    fontSize: 14,
    color: "rgba(0, 0, 0, 0.3)",
    textAlign: "center",
    position: 'absolute',
    top: 130
  },
  imageStyles: {
    width: 300,
    height: 250
  },
  pdfName: {
    position: 'absolute',
    top: 170,
    left: 40,
    color: "#159CDA",
    textDecorationLine: "underline"
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0
  },
  modalContent: {
    backgroundColor: 'white',
    paddingTop: 5,
  },
  SortbyHeading: {
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: "#f7f7f7",
    flexDirection: 'row',
    justifyContent: "flex-start",
    paddingBottom: 14,
  },
  hrLine: {
    borderBottomWidth: 0.2,
    marginTop: 8,
    marginBottom: 8,
    borderColor: "black",
    height: 5
  },
  sortbytext: {
    marginLeft: 10,
    fontSize: 20,
    marginRight: 10,
    paddingTop: 5
  },
  populartext: {
    marginRight: 20,
    marginLeft: 20,
    fontSize: 18,
    paddingTop: 5,
    justifyContent: "flex-start",
  },
  sortbyNewtext: {
    marginRight: 20,
    marginLeft: 20,
    fontSize: 18,
  },
  sortbyOldtext: {
    marginRight: 20,
    marginLeft: 20,
    fontSize: 18,
    paddingBottom: 20
  },
  sortbyoptions: {
    justifyContent: "flex-start",
  },
  shop: {
    backgroundColor: "#159CDA",
    textAlign: "center",
    fontSize: 14,
    padding: "4%",
    paddingTop: "1%",
    paddingBottom: "1%",
    borderRadius: Platform.OS === "ios" ? 5 : 5,
    color: "#fff"
  },
})