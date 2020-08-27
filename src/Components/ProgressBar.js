import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from "react-native";
import Modal from 'react-native-modal';
import { connect } from "react-redux";
import * as Progress from 'react-native-progress';

const screenWidth = Dimensions.get('window').width

class ProgressBarStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading:this.props.loading
    }; 
  }

  renderModalContent = () => {
    const { progressData, progressDataInPercentage } = this.props
    return(
      <View style={styles.modalContent}>
        <Text style={{fontSize: 20, marginBottom: 30}}>
          {(this.props.progressMessage == '' || this.props.progressMessage == undefined) ? 'Upload failed, because of internal error':this.props.progressMessage}
        </Text>
        <Progress.Bar progress={Number(progressData)} width={screenWidth-100} color = '#000' thickness={7} unfilledColor='gray'/>
        <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', padding: 10, backgroundColor: '#159CDA', borderRadius: 5, marginTop: 30}} onPress={()=>this.setState({loading: false})}>
          <Text style={{color: 'white'}}>Cancel</Text>
        </TouchableOpacity>
    </View>
    )
  };
  
  componentWillReceiveProps(props){
    if(props.loading!=this.props.loading){
      this.setState({
        loading:props.loading
      })
    }
  }

  render() {
    return (
      <View >
        <Modal isVisible={this.state.loading}>
          {this.renderModalContent()}
        </Modal>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  progressData: state.ProgressDataReducer.progressData,
  progressDataInPercentage: state.ProgressDataReducer.progressDataInPercentage,
  progressMessage: state.ProgressDataReducer.progressMessage
});

export default connect(mapStateToProps)(ProgressBarStatus);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


