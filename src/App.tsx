import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

const HomeScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category='h1'>HOME</Text>
  </Layout>
);

export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <HomeScreen />
  </ApplicationProvider>
);

//////////////////////////////////////////////////////////////////////////////////////
// THIS CODE WORKS FINE:
//////////////////////////////////////////////////////////////////////////////////////
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   }
// });

// export default function App() {
//   return (
//       <View style={styles.container}>
//           <Text>Mapp Native App!</Text>
//       </View>
//   );
// };
//////////////////////////////////////////////////////////////////////////////////////
