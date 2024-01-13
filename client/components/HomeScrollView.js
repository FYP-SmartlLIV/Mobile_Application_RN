import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import NoticeBoard from '../components/NoticeBoard';
import Features from '../components/Features';
const HomeScrollView = () => {
  return (
    <ScrollView className="bg-gray-100 "

              contentContainerStyle={{
                  paddingBottom:100
              }}
            >
              {/* NoticeBoard */}
              <NoticeBoard/>
              {/* Features */}
              <Features/>
            </ScrollView>
)}

export default HomeScrollView

const styles = StyleSheet.create({})