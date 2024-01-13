import { View, Text, ScrollView,Image, TouchableOpacity, TextInput,KeyboardAvoidingView,Button } from 'react-native'
import React,{useLayoutEffect,useState} from 'react'
import { useRoute,useNavigation  } from '@react-navigation/native';
import {ChevronLeftIcon } from 'react-native-heroicons/outline';
import { Formik } from 'formik';

const MaintananceScreen = () => {
  const navigation = useNavigation(); 
  const {
    params:{
      title,
    }
  } = useRoute();

  useLayoutEffect(() => {navigation.setOptions({
    headerShown:false
  })},[]);

  return (
    <ScrollView>
      <View className='relative flex-1'>
        <Image
          source={require('../assets/cover/vistors.png')}
          className="w-full h-60 bg-gray-100 p-4 mt-4 "
        />
        <TouchableOpacity onPress={navigation.goBack} className='absolute top-14 left-5 p-2 rounded-md bg-white'>
          <ChevronLeftIcon size={20} color='#213555'/>
        </TouchableOpacity>
      </View>
      <View className="bg-white rounded-t-3xl">
        <View className='px-3 mt-3'>
          <Text className='text-[#213555] text-2xl font-extrabold'>Visitor's Assistance</Text>
        </View>
        {/* Formik */}
        <Formik
          initialValues={{guestName:'',cnic:'',no_guest:'',vehicle_num:''}}
          onSubmit={(values,{resetForm})=>{
              console.log(values)
              resetForm({values:''})
          }}
        >
          {(props)=>(
            <KeyboardAvoidingView>
              {/* Guest Name */}
            <View className='px-3 mt-3 bg-white'>
              <Text className="text-[#213555]  text-2xl font-bold">What's your guest name</Text>
              <Text className='text-sm mb-2'>Enter the name of anyone member</Text>
              <TextInput className='border border-[#213555] rounded-xl p-1.5 my-2 bg-[#F4EEEE] '
              placeholder='Enter your guest Name'
              onChangeText={props.handleChange('guestName')}
              value={props.values.guestName} 
              />
              {/* CNIC Guest */}
              <Text className="text-[#213555]  text-2xl font-bold">Guest CNIC number</Text>
              <Text>Enter Guest CNIC Number</Text>
              <TextInput className='border border-[#213555] rounded-xl p-1.5 my-2 bg-[#F4EEEE] '
              placeholder='xxxxx-xxxxxxx-x'
              onChangeText={props.handleChange('cnic')}
              value={props.values.cnic} 
              keyboardType='numeric'
              />
              {/* Guest Coming*/}
              <Text className="text-[#213555]  text-2xl font-bold">How Many Guest are Coming</Text>
              <Text>Enter Number of Guests</Text>
              <TextInput className='border border-[#213555] rounded-xl p-1.5 my-2 bg-[#F4EEEE] '
              placeholder='Enter Number of Guest'
              onChangeText={props.handleChange('no_guest')}
              value={props.values.no_guest} 
              keyboardType='numeric'
              />

              {/* Description */}
              <View>
              <Text className="text-[#213555]  text-2xl font-bold">Guest Vehicle Number</Text>
              <Text>Enter guest vehicle number</Text>
              <TextInput className='border border-[#213555] rounded-xl p-1.5 my-2 bg-[#F4EEEE] '
              placeholder='eg: KHI-548'
              onChangeText={props.handleChange('vehicle_num')}
              value={props.values.vehicle_num} 
              />
              </View>
              <View className='mt-10'>
              <Button title='Generate QR Code' color='#213555' onPress={props.handleSubmit} />
              </View>
            </View>

            </KeyboardAvoidingView>
          )}
        </Formik>
      </View>
    </ScrollView>
  )
}

export default MaintananceScreen