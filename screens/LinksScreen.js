import React from 'react';
import { ScrollView, StyleSheet, Image, Text, View } from 'react-native';
import { WebBrowser } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import Touchable from 'react-native-platform-touchable';


export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Routes',
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <View>
            <Text style={styles.optionsTitleText}>
              Check Nearby Route Information Here:
            </Text>

            <Touchable
              style={styles.option}
              background={Touchable.Ripple('#ccc', false)}
              onPress={this._handlePress2}>
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.optionIconContainer}>
                  <Image
                    source={require('../assets/images/2-line2x.png')}
                    fadeDuration={0}
                    style={{ width: 20, height: 20 }}
                  />
                </View>
                <View style={styles.optionTextContainer}>
                  <Text style={styles.optionText}>
                    Train Route Information
                  </Text>
                </View>
              </View>
            </Touchable>

            <Touchable
              style={styles.option}
              background={Touchable.Ripple('#ccc', false)}
              onPress={this._handlePress4}>
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.optionIconContainer}>
                  <Image
                    source={require('../assets/images/4-line2x.png')}
                    resizeMode="contain"
                    fadeDuration={0}
                    style={{ width: 20, height: 20, marginTop: 1 }}
                  />
                </View>
                <View style={styles.optionTextContainer}>
                  <Text style={styles.optionText}>
                     Train Route Information
                  </Text>
                </View>
              </View>
            </Touchable>

            <Touchable
              background={Touchable.Ripple('#ccc', false)}
              style={styles.option}
              onPress={this._handlePress5}>
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.optionIconContainer}>
                  <Image
                    source={require('../assets/images/5-line2x.png')}
                    fadeDuration={0}
                    style={{ width: 20, height: 20 }}
                  />
                </View>
                <View style={styles.optionTextContainer}>
                  <Text style={styles.optionText}>
                     Train Route Information
              </Text>
                </View>
              </View>
            </Touchable>

            <Touchable
              style={styles.option}
              background={Touchable.Ripple('#ccc', false)}
              onPress={this._handlePress6}>
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.optionIconContainer}>
                  <Image
                    source={require('../assets/images/exp6-line2x.png')}
                    fadeDuration={0}
                    style={{ width: 20, height: 20 }}
                  />
                  <Image
                    source={require('../assets/images/6-line2x.png')}
                    fadeDuration={0}
                    style={{ width: 20, height: 20 }}
                  />
                </View>
                <View style={styles.optionTextContainer}>
                  <Text style={styles.optionText}>
                     Train Route Information
              </Text>
                </View>
              </View>
            </Touchable>

          </View>
        </ScrollView>
      </View>
    );
  }

  _handlePress2 = () => {
    WebBrowser.openBrowserAsync('http://web.mta.info/nyct/service/pdf/t2cur.pdf');
  };

  _handlePress4 = () => {
    WebBrowser.openBrowserAsync('http://web.mta.info/nyct/service/pdf/t4cur.pdf');
  };

  _handlePress5 = () => {
    WebBrowser.openBrowserAsync('http://web.mta.info/nyct/service/pdf/t5cur.pdf');
  };

  _handlePress6 = () => {
    WebBrowser.openBrowserAsync('http://web.mta.info/nyct/service/pdf/t6cur.pdf');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
  optionsTitleText: {
    fontSize: 16,
    marginLeft: 15,
    marginTop: 9,
    marginBottom: 12,
  },
  optionIconContainer: {
    marginRight: 9,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EDEDED',
  },
  optionText: {
    fontSize: 15,
    marginTop: 1,
  },
});


// export default class LinksScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Links',
//   };

//   render() {
//     return (
//       <ScrollView style={styles.container}>
//         {/* Go ahead and delete ExpoLinksView and replace it with your
//            * content, we just wanted to provide you with some helpful links */}
//         <ExpoLinksView />
//       </ScrollView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 15,
//     backgroundColor: '#fff',
//   },
// });