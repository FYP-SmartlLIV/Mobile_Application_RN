import { StyleSheet, Text, View,KeyboardAvoidingView,Image } from 'react-native'
import React from 'react'
import { Button } from "@rneui/base";
import { Input } from "@rneui/themed";
const Profile = () => {
  return (
    <KeyboardAvoidingView behaviour="padding" style={styles.container}>
     
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1200px-User-avatar.svg.png",
        }}
        style={{ width: 200, height: 200 }}
      />
      <View style={styles.inputContainer}>
        <Input placeholder="Name" autoFocus type="text" />
        <Input placeholder="Update Phone Number" type="text" />
        <Button
          containerStyle={styles.button}
          
          title="Edit"
        />
      </View>
    </KeyboardAvoidingView>
  );
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  inputContainer:{
    width:300
  },
  button: {
    width: 200,
    marginTop: 10,
    marginLeft:50
  },
})