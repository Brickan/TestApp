/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


 import { Provider } from"mobx-react";  
 import * as React from 'react';
 import { View, Text } from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import pic from './img/doggo.jpg';
 
 //Osäker om dessa imports behövdes för att få saker att funka. fick error code: 500, som jag inte kunde testa på virituell maskin
 /*import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';*/
 
 /*import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 */
 
 
 
 
 /* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
  * LTI update could not be added via codemod *//*
 const Section = ({children, title}): Node => {
   const isDarkMode = useColorScheme() === 'dark';
   return (
     <View style={styles.sectionContainer}>
       <Text
         style={[
           styles.sectionTitle,
           {
             color: isDarkMode ? Colors.white : Colors.black,
           },
         ]}>
         {title}
       </Text>
       <Text
         style={[
           styles.sectionDescription,
           {
             color: isDarkMode ? Colors.light : Colors.dark,
           },
         ]}>
         {children}
       </Text>
     </View>
   );
 };
 */
 
 /*
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });
 */
 /* referenser för appens delar*/
 function HomeScreen({ navigation }) {
   return (
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Text>Home Screen</Text>
       <Button title="Go to details" onPress={() => navigation.navigate('Details')}/>
       <Button title="Go to doggo" onPress={() => navigation.navigate('Dog')} />
     </View>
   );
 }
 
 function DetailsScreen(){
   return(
     <View style={{Flex: 1, alignItems: 'center', justifyContent: 'center'}}>
       <Text>Details Screen</Text>
       <Button title="Go to home" onPress={() => navigation.navigate('Home')}/>
       <Button title="Go to doggo" onPress={() => navigation.navigate('Dog')} />
       
     </View>
   )
 }
 
 function PictureScreen(){
   return(
     <View style={{Flex: 1, alignItems: 'center', justifyContent: 'center'}}>
       <Text>Doggo</Text>
       <img src={pic} alt="doggo"/>
       <Button title="Go to details" onPress={() => navigation.navigate('Details')}/>
       <Button title="Go to home" onPress={() => navigation.navigate('Home')} />
     </View>
   )
 }
 
 const Stack = createNativeStackNavigator();
 
 /* kör själva appen*/
 function App() {
   return (
     <NavigationContainer>{
       /* Rest of your app code */
       /* Provider är ett försök att implementera en inloggningsskärm för att visa global state via Mobx*/ 
       <Provider{...stores}>  
         <Stack.Navigator initialRouteName="Home">
           <Stack.Screen name="Home" component={HomeScreen} />
           <Stack.Screen name="Details" component={DetailsScreen}/>
           <Stack.Screen name="Dog" component={PictureScreen} />
         </Stack.Navigator>
       </Provider>  
       /*Rest of code goes above*/
       }</NavigationContainer>
   );
 }


  //Orginalkod för att implementera en inloggningsskärm för att visa global state via Mobx
/*function App() {  
  return (  
     <Provider{...stores}>  
        <div className="App">  
           <BrowserRouter>  
           <Routes/>  
           </BrowserRouter>  
        </div>  
     </Provider>  
  );  
  }*/  

export default App;
