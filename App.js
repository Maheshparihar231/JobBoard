import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import JobStackScreen from './pages/jobstack';
import CourseStackScreen from './pages/coursestack';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { FontAwesome, Entypo,Ionicons} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'All Jobs') {
              return <Entypo name="briefcase" size={24} color={color} />;
            } else if (route.name === 'All Course') {
              return <FontAwesome name="graduation-cap" size={24} color={color} /> 
            }            
          },
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'white',
          headerShown: false,
          tabBarStyle:{
            backgroundColor: '#000000',
          },
          tabBarLabelStyle:{
            color:'#ffffff'
          },
        })}
        // screenOptions={
        //   {
        //     
        //     
        
        //   }}
        >
        <Tab.Screen 
          name="All Jobs" 
          component={JobStackScreen} 
          // options={{
          //   tabBarIcon:({})=>(
          //     <Entypo name="briefcase" size={24} color="white" />
          // )}}
        />
        <Tab.Screen 
          name="All Course" 
          component={CourseStackScreen} 
          // options={{
          //   tabBarIcon:({})=>(
          //     <FontAwesome name="graduation-cap" size={24} color="white" />
          // )}}
        />
      </Tab.Navigator>
      {/* <StatusBar style="light" /> */}
    </NavigationContainer>
  );
}