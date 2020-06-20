import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './companent/giris/HomeScreen';
import Record from './companent/giris/RecordScreen';
import yassecim from './companent/yas_grupları/yassecim';
import yas23 from './companent/yas_grupları/2_3yas/egitim';
import yas34 from './companent/yas_grupları/3_4yas/egitim';
import yas45 from './companent/yas_grupları/4_5yas/egitim';
import egitimler from './companent/yas_grupları/egitimler';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions=
      {
      {
        headerTransparent:true,
        headerTitle:''
      }
      }>
      <Stack.Screen name="Home" component={HomeScreen} />    
        <Stack.Screen name="Record" component={Record} />     
        <Stack.Screen name="yassecim" component={yassecim} />    
        <Stack.Screen name="yas23" component={yas23} />
        <Stack.Screen name="yas34" component={yas34} />     
        <Stack.Screen name="yas45" component={yas45} />        
        <Stack.Screen name="egitimler" component={egitimler} />        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;