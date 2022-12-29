import { StatusBar } from 'expo-status-bar';
import { Background } from './src/Components/Background'

import { Login } from './src/screens/Login'
import { Feed } from './src/screens/Feed'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from 'react-native';

import FeedIcon from "./src/assets/rank.png"
import BtnMore from "./src/assets/btnMore.png"
import ProfileIcon from "./src/assets/user.png"

import WalletIcon from "./src/assets/wallet.png"
import CryptoIcon from "./src/assets/crypto.png"

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Background>
          <StatusBar
            backgroundColor='transparent'
            translucent
          />
     
          <Tab.Navigator 
            screenOptions={{
              headerShown: false, 
              tabBarStyle:{
                backgroundColor:"#211D28", 
                borderTopWidth:0.5, 
                borderTopColor:"#513965", 
                height:64, 
                display:'flex', 
                justifyContent:"center", 
                alignItems:"center", 

              }
            }}
          
          >
            {/* <Tab.Screen name="Login" component={Login} options={{tabBarStyle:{display:'none'}, tabBarIconStyle: {display:'none'}, tabBarLabelStyle:{display:'none'}}} /> */}
            <Tab.Screen 
              name="Crypto" 
              component={Feed} 
              options={{ 
                tabBarLabelStyle:{display:'none'}, 
                tabBarIcon:() => {
                  return <Image source={CryptoIcon}/>
              }
            }} />
            
            <Tab.Screen 
              name="Wallet" 
              component={Feed} 
              options={{ 
                tabBarLabelStyle:{display:'none'}, 
                tabBarIcon:() => {
                  return <Image source={WalletIcon}/>
              }
             }} />

            <Tab.Screen 
              name="More" 
              component={Feed} 
              options={{ 
                tabBarLabelStyle:{display:'none'}, 
                tabBarIcon:() => {
                  return <Image source={BtnMore} style={{marginTop:-10, width:75, height:75}}/>
              }
             }} />

            <Tab.Screen 
              name="Feed" 
              component={Feed} 
              options={{ 
                tabBarLabelStyle:{display:'none'}, 
                tabBarIcon:() => {
                  return <Image source={FeedIcon}/>
              }
             }} />

          <Tab.Screen 
              name="Profile" 
              component={Feed} 
              options={{ 
                tabBarLabelStyle:{display:'none'}, 
                tabBarIcon:() => {
                  return <Image source={ProfileIcon}/>
              }
             }} />


          </Tab.Navigator>
      </Background>
    </NavigationContainer>
  );
}

