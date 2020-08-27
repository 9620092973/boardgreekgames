import * as React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TouchableHighlight,
  Image,
  ScrollView,
  TextInput,
  Dimensions,
  Platform
} from "react-native";
import { search, CategorySearch } from "../../Networks/LandingLoggedinCalls";
import { productLink } from "../../Networks/DiscoveryCalls";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../../Styles/SearchStyles/SearchStyleSheet";
import SearchFilterModal from "../../Components/SearchFilter";
import { CustomTouchableIcon } from "../../Components/Header/CustomTouchableIcon";

export default class Search extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerBackTitle: null,
    header: null
  });

  constructor(props) {
    super(props);
    this.state = {
      text: "",
      searchData: [],
      game_id: "",
      productData: [],
      search_category: [],
      hide_Categories: false,
      category_show: false,
      modalVisible: false,
      screenWidth: null,
      screenWidth: null,
      screenHeight: null,
      min_Player: [],
      max_Player: [],
      Age_items: [],
      min_time: [],
      max_time: [],
      start_year: [],
      end_year: [],
      selected_minimum_player: "",
      selected_maximum_player: "",
      selected_min_time: "",
      selected_max_time: "",
      selected_Age_item: "",
      selected_start_year: "",
      selected_end_year: ""
    };
    this.catagorySearch = this.catagorySearch.bind(this);
    this.onPressCategories = this.onPressCategories.bind(this);
    this.searchCategories = this.searchCategories.bind(this);
    this.setModalVisible = this.setModalVisible.bind(this);
    this.filterData = this.filterData.bind(this);
  }

  componentDidMount() {
    const screenWidth = Math.round(Dimensions.get("window").width) - 20;
    const screenHeight = Math.round(Dimensions.get("window").width) - 40;
    this.setState({
      screen_width: screenWidth,
      screen_height: screenHeight
    });

    this.setState({
      category_show: true
    });
    this.searchCategories();
  }

  filterData(filterData) {
    this.setState({
      searchData: filterData,
      hide_Categories: true
    });
  }

  updateSearch(text) {
    this.setState({
      text: text
    });
    if (text == "") {
      this.setState({
        hide_Categories: false
      });
    } else {
      this.setState({
        hide_Categories: true
      });
    }
    search(text)
      .then(response => {
        if (response.status == 200) {
          this.setState({ searchData: response.data });
        }
      })
      .catch(error => {
        console.log("Error", error.message);
      });
  }
  selectGamebyDetails() {}
  searchItemOnPress(item) {}
  _keyExtractor = (item, index) => toString(index);

  navigateToProductPage(game_id) {
    productLink(game_id)
      .then(response => {
        this.setState({ productData: response.data });

        if (response.status == 200) {
          this.props.navigation.navigate("GameInfo", {
            productData: response.data,
            game_id: game_id
          });
        }
      })
      .catch(error => {
        console.log("error", error.message);
      });
  }

  renderSearchList() {
    const { searchData } = this.state;

    return (
      <FlatList
        data={searchData}
        keyExtractor={this._keyExtractor}
        renderItem={({ item }) => {
          let card_image = item.card_image[0]
            ? { uri: item.card_image[0] }
            : require("../../../assets/Image/ABCme.jpeg");
          return (
            <TouchableHighlight onPress={() => this.searchItemOnPress(item)}>
              <TouchableOpacity
                onPress={() => {
                  this.navigateToProductPage(item.id);
                }}
              >
                <View style={styles.gameView}>
                  <Image source={card_image} style={styles.GameImage} />
                  <View>
                    <Text style={styles.gameTxt}>
                      {item.name} ({item.year_published})
                    </Text>
                    <Text style={styles.gameTxt}>
                      {" "}
                      {item.minimum_players}-{item.maximum_players} Players
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </TouchableHighlight>
          );
        }}
      />
    );
  }

  searchCategories() {
    CategorySearch()
      .then(response => {
        this.setState({
          search_category: response.data.category_name
        });
      })
      .catch(error => {
        console.log("error of the category search", error.message);
      });
  }

  catagorySearch(items, index) {
    if (!this.state.hide_Categories) {
      const search_category = this.state.search_category.map(data => {
        return (
          <TouchableOpacity
            style={styles.searchCategoryButtons}
            onPress={() => {
              this.onPressCategories(data);
            }}
          >
            <Text style={styles.searchCategoryButtonText}>{data}</Text>
          </TouchableOpacity>  
        );
      });

      return (
        <View style={{ height: "70%" }}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1 }}
          >
            <View style={styles.MainView}>
              <Text style={styles.topSearchCategoryHeading}> 
                Top Search Categories 
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                marginLeft: 20,
                marginRight: 20,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              {search_category}
            </View>
          </ScrollView>
        </View>
      );
    }
  }

  onPressCategories(category_name) {
    this.setState({
      text: category_name,
      hide_Categories: true
    });
    this.updateSearch(category_name);
  }
  setModalVisible() {
    this.setState({ modalVisible: !this.state.modalVisible });
  }

  ListEmptyView = () => {
    return (
      <View style={{ top: "100%" }}>
        <Text
          style={{
            fontSize: 18,
            color: "gray",
            alignSelf: "center",
            sjustifyContent: "center",
            alignContent: "center"
          }}
        >
          Sorry, no games were found.
        </Text>
      </View>
    );
  };

  //Function definitions which are inside modal
  render() {
    return (
      <View>
        <LinearGradient
          colors={["#001a33", "#004f99"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            height: 100,
            width: "100%",
            flexDirection: "row",
            borderBottomWidth: 0
          }}
        >
          <View
            style={{
              borderRadius: 35,
              width: "93%",
              height: 45,
              // marginBottom :50
              marginTop: 45,
              backgroundColor: "white",
              flexDirection: "row",
              marginLeft: 15
            }}
          >
          <View style={{marginTop: Platform.OS === 'ios' ? 5:  null,marginLeft: Platform.OS === 'ios' ? 5:  null}}>
            <CustomTouchableIcon onPress={() => this.props.navigation.goBack()}>
              <Ionicons
                size={25}
                name="ios-arrow-back"
                style={{ color: "#ccc" }}
              />
            </CustomTouchableIcon>
            </View>
            <TextInput
              placeholder="Search For Games You Like .."
              onChangeText={text => this.updateSearch(text)}
              inputStyle={{ backgroundColor: "white" }}
              style={{
                paddingLeft: 8,
                width: 100,
                flex: 0.8,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start"
              }}
              value={this.state.text}
              placeholderTextColor={"#g5g5g5"}
            />
            <CustomTouchableIcon
              onPress={() => {
                this.setModalVisible();
              }}
            >
              <MaterialIcons
                size={25}
                name="filter-list"
                style={{ color: "#ccc" , marginTop:Platform.OS === 'ios' ? 5: null}}
              />
            </CustomTouchableIcon>

            <SearchFilterModal
              modalVisible={this.state.modalVisible}
              setModalVisible={this.setModalVisible}
              renderSearchList={this.renderSearchList}
              searchData={this.state.searchData}
              navigation={this.props.navigation}
              filterData={this.filterData}
            />

            <MaterialIcons
              size={25}
              name="search"
              style={{
                position: "absolute",
                top: 10,
                color: "#ccc",
                left: "85%"
              }}
            />
          </View>
        </LinearGradient>

        {this.catagorySearch()}

        {this.state.searchData && this.state.searchData.length > 0
          ? this.renderSearchList()
          : this.state.hide_Categories
          ? this.ListEmptyView()
          : null}
      </View>
    );
  }
}
