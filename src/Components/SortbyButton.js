import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet, View, Platform } from 'react-native';
import Modal from 'react-native-modal';
import { AntDesign } from '@expo/vector-icons';


export default class SortbyButton extends Component {
  
  constructor(props) {
      super(props)
      this.state = {
        openSortModal: null,
        sort: 'new'
      };
      this.handleSortModal = this.handleSortModal.bind(this)
  }

  handleSortModal(state) {
   this.setState({ openSortModal: state })
  }

  renderPopular(sortByType){
    const sort = { sort: sortByType }
    this.props.handleSort(sort)
    sort['openSortModal'] = false
    this.setState(sort)
  }
  _renderModalContent = () => (
    <View style={styles.modalContent}>
    <View style={styles.SortbyHeading}>
      <Text style={styles.sortbytext}>Sort By</Text>
      <TouchableOpacity onPress= {() => this.handleSortModal(null)}
        style={{position:'absolute',right:15,top:8}}
      >
      <AntDesign  
          name="close" 
          size={20}  
      />
      </TouchableOpacity>
    </View>
    <View style={styles.sortbyoptions}>
      <TouchableOpacity onPress={()=>{this.renderPopular("popularity")}}>
      <Text  style={styles.populartext}>Popular</Text>
      {this.state.sort=='popularity' && <AntDesign  name="check" size = {20} color="#0acf3f" style={styles.sortPosition}/>}
      </TouchableOpacity>
        <View style={styles.hrLine} />
        <TouchableOpacity onPress={()=>{this.renderPopular("new")}}>
      <Text  style={styles.sortbyNewtext}>Sort by New</Text>
      {this.state.sort=='new' && <AntDesign  name="check" size = {20} color="#0acf3f" style={styles.sortPosition}/>}
      </TouchableOpacity>
        <View style={styles.hrLine} />
        <TouchableOpacity onPress={()=>{this.renderPopular("old")}}>
      <Text style={styles.sortbyOldtext}>Sort by Old</Text>
      {this.state.sort=='old' && <AntDesign  name="check" size = {20} color="#0acf3f" style={styles.sortPosition}/>}
      </TouchableOpacity>
      </View>
    </View>
  );

  render() {
    return (
      <View>
        <TouchableOpacity onPress={()=> this.handleSortModal(1)}>
          <Text style={styles.shop}>Sort by</Text>  
        </TouchableOpacity>
      
        <Modal 
          visible={this.state.openSortModal === 1}
          onBackdropPress={() => this.handleSortModal(null)}
          style={[styles.bottomModal,{backgroundColor: 'rgba(0, 0, 0, 0.5)'}]}>
          {this._renderModalContent()}
        </Modal>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  SortbyHeading: {
    backgroundColor: "#f7f7f7",
    flexDirection:'row',
    justifyContent: "flex-start",
    paddingBottom:14,
},
  modalContent: {
    backgroundColor: 'white',
    padding: 2,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0
  },
  hrLine: {
    borderBottomWidth: 0.6,
    marginTop: 8,
    marginBottom: 8,
    borderColor: "rgba(192, 192, 192, 0.79)",
    height: 5
  },
  sortbytext:{
      fontWeight:"bold",
      fontSize:20,
      paddingHorizontal:20,
      paddingTop:5
    },
  populartext:{
    fontSize:18,
    paddingTop:5,
    paddingHorizontal:20,
    justifyContent:"flex-start",
  },
  sortbyNewtext:{
    fontSize:18,
    paddingHorizontal:20
  },
  sortbyOldtext:{
    fontSize:18,
    paddingHorizontal:20,
    paddingBottom:20
  },
  sortbyoptions:{
    justifyContent:"flex-start",
  },
  shop: {
    backgroundColor: "#159CDA",
    textAlign: "center",
    fontSize: 14,
    padding: "4%",
    paddingTop: "1%",
    paddingBottom: "1%",
    borderRadius: 3,
    overflow: 'hidden',
    color: "#fff"
  },
  sortPosition:{
    position:'absolute',
    right:10,
    top:10
  }
});

