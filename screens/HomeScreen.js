import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Picker,
  View,
} from 'react-native';
import { connect } from "react-redux";
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import { routes as trainRoutes } from '../assets/trainsRoutes';
// import store from '../store';


/* ---------------------------- Constants --------------------------------------------- */

const routeNames = trainRoutes.filter((route) => {
  return route.GTFSStopID.startsWith('2') || route.GTFSStopID.startsWith('4') || route.GTFSStopID.startsWith('5') || route.GTFSStopID.startsWith('6')
}).map(route => route.StopName).sort();

const times = ['4:00PM', '4:15PM', '4:30PM', '4:45PM', '5:00PM', '5:15PM', '5:30PM', '5:45PM', '6:00PM', '6:15PM', '6:30PM'];
const twoPath = require('../assets/images/2-line2x.png')
const fourPath = require('../assets/images/4-line3x.png')
const fivePath = require('../assets/images/5-line3x.png')
const sixPath = require('../assets/images/6-line2x.png')

/* ------------------------------------- Component --------------------------------------------- */

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'OK, Make it!'
  };

  constructor() {
    super();
    this.state = {
      time: '5:00PM',
      selectedStopName: routeNames[0],
      selectedStop: {},
      stopImage: sixPath,
      showText: false
    }
    this._handlePress = this._handlePress.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={require('../assets/images/ok-make-it-2x.png')}
              style={styles.welcomeImage}
            />
          </View>

          <View>
            <Text style={styles.pickerText}>Select Station</Text>
            <Picker
              selectedValue={this.state.selectedStopName}
              onValueChange={(selectedStopName) => {
                let stopImage;
                let routeNum = trainRoutes.filter((route) => route.StopName === selectedStopName)[0].GTFSStopID[0]
                switch (routeNum) {
                  case '2':
                    stopImage = twoPath;
                    break;

                  case '4':
                    stopImage = fourPath;
                    break;

                  case '5':
                    stopImage = fourPath;
                    break;

                  case '4':
                    stopImage = fourPath;
                    break;

                  default: stopImage = sixPath
                }
                this.setState({
                  selectedStopName,
                  selectedStop: trainRoutes.filter((route) => route.StopName === selectedStopName)[0],
                  stopImage
                })
              }}>
              {
                routeNames.map((routeName) => {
                  return (<Picker.Item
                    key={routeName}
                    label={routeName}
                    value={routeName} />)
                })
              }
            </Picker>

            <Text style={styles.pickerText}>Select Time</Text>
            <Picker
              selectedValue={this.state.time}
              onValueChange={(time) => this.setState({ time })}>
              {
                times.map((time) => {
                  return (<Picker.Item
                    key={time}
                    label={time}
                    value={time} />)
                })
              }
            </Picker>

            <Text style={styles.developmentModeText}>{this.state.selectedStop.StopName}</Text>

            <TouchableOpacity onPress={this._handlePress}>
              <Text style={styles.button}>OK, Make It!</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.welcomeContainer}>
            <Image
              source={this.state.stopImage}
              style={styles.stopImage}
            />
          </View>

          {this.state.showText && <Text style={styles.pickerText}>
          The next train at: {this.state.selectedStopName} will arrive in approximately 4 minutes
        </Text>}

        </ScrollView>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use
          useful development tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handlePress () {
    if (!this.state.showText) return this.setState({showText: true})

  };
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  pickerText: {
    marginBottom: 5,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 15,
    lineHeight: 19,
    textAlign: 'left',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  stopImage: {
    width: 85,
    height: 85,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  button: {
    fontSize: 17,
    backgroundColor: 'black',
    alignItems: 'center',
    color: 'white',
    height: 25,
    lineHeight: 25,
    marginTop: 10,
    textAlign: 'center',
    width: 200
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  }
});

/* ---------------------------- React/Redux --------------------------------------------- */
const FETCH_INFO = 'FETCH_INFO';

const fetch = time => ({ type: FETCH_INFO, time });

export const loadStopInfo = () => {
  return dispatch => {
    axios
      .get("/api/routetime")
      .then(res => dispatch(fetch(res.data)))
      .catch(err => console.error("Failed Loading", err));
  };
};

const mapDispatchToProps = dispatch => ({
  fetchData: () => {
    dispatch(loadStopInfo());
  }
});

export const HomeScreenContainer = connect(mapDispatchToProps)(HomeScreen);
