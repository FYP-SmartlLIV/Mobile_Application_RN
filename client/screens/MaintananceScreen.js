import { View, Text, ScrollView,Image, TouchableOpacity, TextInput,KeyboardAvoidingView,Button } from 'react-native'
import React,{useLayoutEffect,useState} from 'react'
import { useRoute,useNavigation  } from '@react-navigation/native';
import {ChevronLeftIcon } from 'react-native-heroicons/outline';
import { Formik } from 'formik';
import { SelectList } from 'react-native-dropdown-select-list'
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
  // Drop down variables
  const data = [
    {key:'1', value:'Cleaning'},
    {key:'2', value:'Electricity'},
    {key:'3', value:'Savrage'},
    {key:'4', value:'Water'},
    {key:'5', value:'--Others--'},]
  const [selected,setSelected] = useState('')
  return (
    <ScrollView>
      <View className='relative flex-1'>
        <Image
          source={require('../assets/cover/maintanance.png')}
          className="w-full h-60 bg-gray-100 p-4 mt-4 "
        />
        <TouchableOpacity onPress={navigation.goBack} className='absolute top-14 left-5 p-2 rounded-md bg-white'>
          <ChevronLeftIcon size={20} color='#213555'/>
        </TouchableOpacity>
      </View>
      <View className="bg-white rounded-t-3xl">
        <View className='px-3 mt-3'>
          <Text className='text-[#213555] text-2xl font-extrabold'>Post Complain</Text>
          <Text className='text-[#777777] text-center my-4 mx-4 text-base'>We Apologies that you have a complain for us
            But we will make sure to resolve it as soon as possible  </Text>
        </View>
        {/* Form */}
        <Formik
          initialValues={{Address:'',phoneInput:'',Description:'',type:''}}
          onSubmit={(values,{resetForm})=>{
              console.log(values)

              resetForm({values:''})
          }}
        >
          {(props)=>(
            <KeyboardAvoidingView>
            <View className='px-3 mt-3 bg-white'>
              <Text className="text-[#213555]  text-2xl font-bold">What is your Address?</Text>
              <TextInput className='border border-[#213555] rounded-xl p-1.5 my-2 bg-[#F4EEEE] '
              placeholder='Enter your current Address'
              onChangeText={props.handleChange('Address')}
              value={props.values.Address} 
              />
              <Text className="text-[#213555]  text-2xl font-bold">What's your Phone Number?</Text>
              <TextInput className='border border-[#213555] rounded-xl p-1.5 my-2 bg-[#F4EEEE] '
              placeholder='03xx-xxxxxxx'
              onChangeText={props.handleChange('phoneInput')}
              value={props.values.phoneInput} 
              keyboardType='numeric'
              />
              {/* Type Box */}
              <View className='my-3'>
              <Text className="text-[#213555]  text-2xl font-bold">Complain Type</Text>
                <SelectList 
                setSelected={(val) => setSelected(val)}
                data={data}
                save='value'
                onChangeText={props.handleChange('type')}
                value={props.values.val} 
                />
              </View>
              

              {/* Description */}
              <View>
              <Text className="text-[#213555]  text-2xl font-bold">Description</Text>
              <TextInput className='border border-[#213555] rounded-xl  bg-[#F4EEEE] h-36 '
              placeholder='Please give us some details about your issue...'
              onChangeText={props.handleChange('Description')}
              value={props.values.Description} 
              multiline
              style={{textAlignVertical:'top'}}
              />
              </View>
              <View className='mx-3 my-4 '>
              <Button title='Post' color='#213555' onPress={props.handleSubmit} />
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