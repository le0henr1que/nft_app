import { StatusBar } from 'expo-status-bar';

import { Login } from '../../screens/Login'
import { Feed } from '../../screens/Feed'
import { Wallet } from '../../screens/Wallet'
import { Detail } from '../../screens/Detail'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import FeedIcon from "../../assets/rank.png"
import BtnMore from "../../assets/btnMore.png"
import ProfileIcon from "../../assets/user.png"

import WalletIcon from "../../assets/wallet.png"
import CryptoIcon from "../../assets/crypto.png"

const Tab = createBottomTabNavigator();

interface Props {
    children: React.ReactNode
}

export function TabNavigation({children}:Props) {
  return (
    <NavigationContainer>
     
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
            {/* <Tab.Screen  name="Login" component={Login} options={{tabBarStyle:{display:"none"}, tabBarIconStyle:{display:"none"}, tabBarLabelStyle:{display:"none"}}}/> */}
            <Tab.Screen  name="Detail" component={Detail} options={{ tabBarIconStyle:{display:"none", overflow:"hidden", position:"absolute"},   tabBarLabelStyle:{display:"none"}}}/>

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
              component={Wallet} 
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
   
    </NavigationContainer>
  );
}

