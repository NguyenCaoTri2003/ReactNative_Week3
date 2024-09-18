import React, { useState } from 'react'
import { Text, View, StyleSheet, Image, Button, TextInput, TouchableOpacity  } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import TinhTien from './components/TinhTien/tinhtien'
import TaoMK from './components/TuDongTaoMatKhau/taomk'
import Icon from 'react-native-vector-icons/FontAwesome'

function ScreenTinhTien(){
  return (
     <TinhTien />
  );
  
} 

function ScreenTaoMK(){
  return (
     <TaoMK/>
  );
} 

const Tab = createBottomTabNavigator();

export default function App() {
  const [count, setCount] = useState(0)
  return (
    <NavigationContainer>
      <View style={styleC.container}>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              if(route.name === 'Thanh toán')
                iconName = 'dollar'
              else if(route.name === 'Tạo mật khẩu tự động')
                iconName = 'key'
              
              return <Icon name={iconName} color={color} size={20}/>
            },
            tabBarActiveTintColor: '#1972d4',
            tabBarInactiveIintColor: 'gray'
          })}
        >
          <Tab.Screen name= 'Thanh toán' component={ScreenTinhTien}/>
          <Tab.Screen name= 'Tạo mật khẩu tự động' component={ScreenTaoMK}/>
        </Tab.Navigator>
      </View>
    </NavigationContainer>
    
  );
}

const styleC = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
