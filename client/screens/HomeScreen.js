import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import React, { useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import NoticeBoard from "../components/NoticeBoard";
import Features from "../components/Features";
import CustomPress from "../Ui/CustomPress";
import {  DrawerActions } from '@react-navigation/drawer';
const HomeScreen = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const currentTime = new Date().getHours();
  return (
    <SafeAreaView className=" bg-[#0b8793]">
      <View className="m-4 mx-4">
        <View className="flex-row">
          {/* header */}
          <Image
            source={require("../assets/cover/logo.png")}
            style={styles.logo}
          />
          <View className="flex-1"></View>
          <View className="mt-1 flex-row">
            <CustomPress onPress={()=>navigation.navigate('Profile')} >
              <Ionicons name="person-circle" size={40} color="white" />
            </CustomPress>
            <CustomPress onPress={()=>navigation.openDrawer()}>
              <Ionicons name="notifications" size={40} color="white" />
            </CustomPress>
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
      <ScrollView
        className="bg-gray-100 "
        contentContainerStyle={{
          paddingBottom: 100,
          backgroundColor: "",
        }}
      >
        {/* NoticeBoard */}
        <NoticeBoard />
        {/* Features */}
        <Features />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  logo: {
    resizeMode: "contain",
    width: 100,
    height: 50,
  },
});
{
  /* <View className='flex-row items-center'>
              <View className='flex-1 '>
                {currentTime < 12?<Text  className=' text-3xl text-[#213555] font-bold' >Good Morning</Text>:currentTime <12 && currentTime <18?<Text className='text-3xl text-[#213555]' >Good Evening</Text>:<Text className='text-3xl text-[#213555]'> Good Night
                </Text>}
              </View>
              <BellIcon size={35} color='#213555'/>
              <Cog8ToothIcon size={35} color='#213555'/>
              </View> */
}
