// import React from 'react';
// import {
//   Image,
//   Platform,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import { WebBrowser } from 'expo';

// import { MonoText } from '../components/StyledText';

// export default class HomeScreen extends React.Component {
//   static navigationOptions = {
//     header: null
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <ScrollView
//           style={styles.container}
//           contentContainerStyle={styles.contentContainer}>
//           <View style={styles.welcomeContainer}>
//             <Image
//               source={}
//               style={styles.welcomeImage}
//             />

//             <View style={styles.getStartedContainer}>
//               {this._maybeRenderDevelopmentModeWarning()}

//               <Text style={styles.getStartedText}>
//                 Get started by opening
//             </Text>

//               <View
//                 style={[
//                   styles.codeHighlightContainer,
//                   styles.homeScreenFilename,
//                 ]}>
//                 <MonoText style={styles.codeHighlightText}>
//                   screens/HomeScreen.js
//               </MonoText>
//               </View>

//               <Text style={styles.getStartedText}>
//                 Change this text and your app will automatically reload.
//             </Text>
//             </View>

//             <View style={styles.helpContainer}>
//               <TouchableOpacity
//                 onPress={this._handleHelpPress}
//                 style={styles.helpLink}>
//                 <Text style={styles.helpLinkText}>
//                   Help, it didn’t automatically reload!
//               </Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </ScrollView>
//       </View>
//     );
//   }
  
// }