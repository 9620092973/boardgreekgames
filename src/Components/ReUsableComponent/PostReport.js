import React, { Component } from "react";
import { Text, TouchableOpacity, StyleSheet,Platform, View } from "react-native";
import Modal from "react-native-modal";
import styles from "../../Styles/ReportModalStyles/ReportModalStyles";
import feedStyles from "../../Styles/UjcfeedTabsstyles/ujcfeedTabsstyle";
import { RadioGroup, RadioButton } from "react-native-flexi-radio-button";
import { MaterialIcons } from "@expo/vector-icons";
import { UGCReport } from '../../Networks/UGCCalls';

export default class PostReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      color: "rgba(0, 0, 0, 0.3)",
      modalVisible: null,
      reportContent: '',
      feedItemId: ''
    };
    this.renderRadioButton = this.renderRadioButton.bind(this);
    this.renderModalContent = this.renderModalContent.bind(this);
    this.onPressReportButton = this.onPressReportButton.bind(this);
    this.reportModalVisibility = this.reportModalVisibility.bind(this);
  }

  renderRadioButton() {
    let radioButtonContent = [
      "Sexually Explicit Content",
      "Harassment",
      "Copyright/Trademark Infringement",
      "Others"
    ];

    let key = {key}
    let radioButtonsList = [];

    for (let index = 0; index < radioButtonContent.length; index++) {
      radioButtonsList.push(
        <RadioButton key={key}
          value={radioButtonContent[index]}
          style={styles.radioButton}
        >
          <Text style={styles.radioButtonContent}>
            {radioButtonContent[index]}
          </Text>
        </RadioButton>
      );
    }
    return radioButtonsList;
  }

  renderModalContent() {
    return (
      <View style={styles.modalContent}>
        <Text style={styles.modalHeading}>Report Comment</Text>
        <View>
          <RadioGroup
            color="black"
            onSelect={(index, value) => this.onSelect(index, value)}
          >
            {this.renderRadioButton()}
          </RadioGroup>
        </View>
        <View style={styles.modalHorizontalLine} />
        <View style={styles.buttonView}>
          <TouchableOpacity onPress={() => this.reportModalVisibility(null)}>
            <View style={styles.button}>
              <Text
                style={{
                  color: "rgb(10, 186, 239)",
                  marginRight: 15
                }}
              >
                CANCEL
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onPressReportButton}>
            <View style={styles.button}>
              <Text
                style={{
                  color: this.state.color,
                  marginRight: 15
                }}
              >
                REPORT
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  reportModalVisibility(modalVisible) {
    this.setState({ modalVisible: modalVisible });
  }

  // onPressReportButton() {}
  onPressReportButton() {
    const { feedItemId, feedType } = this.props
    
    UGCReport(feedItemId,  feedType, this.state.reportContent, this.onSuccessReport, this.onFailureReport)
    this.reportModalVisibility(null)

  }

  onSuccessReport(data) {
    console.log("[Report] Success:",data)
  }

  onFailureReport(error) {
    console.log("[Report] error:",error.message)
  }

  onSelect(index, value) {
    console.log("[onSelect] value",value)
    this.setState({
      color: "rgb(10, 186, 239)",
      reportContent: value
    });
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.reportModalVisibility(1);
          }}
          style={[this.props.reportButtonView, {flexDirection: "row"}]}
        >
          <MaterialIcons name="report" size={14} color={"rgba(0, 0, 0, 0.7)"} />
          <Text style={feedStyles.ShareButtonText}>Report</Text>
        </TouchableOpacity>
        <View>
          <Modal isVisible={this.state.modalVisible === 1}
          onBackdropPress={() => this.setState({ modalVisible: null })}
          >
            {this.renderModalContent()}
          </Modal>
        </View>
      </View>
    );
  }
}
