import { View, Text ,StyleSheet} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import React from 'react'

const NoticeBoard = () => {
  return (
    <View className="mb-4">
      <LinearGradient style={styles.board} colors={['#0b0c4b','#0b8793']}>
    <View className=" rounded-2xl items-center justify-center my-4 h-48  mx-4 shadow-2xl">
        <Text className='text-center font-semibold text-xl p-2 text-white'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        </Text>
    </View>
    </LinearGradient>
    <Text className="text-center text-sm text-black">Notice board updates you with recent Activities
    happening Around you</Text>
    </View>
    
  )
}

export default NoticeBoard

const styles = StyleSheet.create({
  board:{
    margin:18,
    borderRadius:12,
    elevation:4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: 'hidden'
  }
})