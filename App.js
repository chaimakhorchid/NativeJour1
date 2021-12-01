import React, { useState} from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Pressable, ActivityIndicator} from 'react-native';

const imageUrl = "https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png"

const App = () => {
  const createTwoButtonAlert = () =>
      alert("Alert")
     
  return (
    <ScrollView  style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.text1}>Hello</Text>
        <Text style={styles.text2}>Bonjour</Text>
        <Text style={styles.text3}>Hola</Text>
        <Image 
        source={{uri: imageUrl}}
        style={styles.image}
        />
        <Image
        style={styles.image}
        source={require('./assets/konexio-logo_1.png')}/>
         <Pressable title={"Alert"} onPress={createTwoButtonAlert} style= {styles.press}>Pressable</Pressable>
         <ActivityIndicator size="large" color="blue" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: "blue",
    padding: 10,
  },

  view: {
    backgroundColor: "white",
  },

  text1: {
    fontSize: 30,
    marginTop : 80,
    marginBottom:80,
  },

  text2: {
    textAlign: "center",
    marginTop : 80,
    marginBottom:80,
  },

  text3: {
    fontWeight : 600,
    marginTop : 80,
    marginBottom:80,
  },
  image: {
    width: 150,
    height: 50,
    margin: 10,
  },
  press: {
    fontSize: 20,
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
    
  }
});
export default App 