import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { Grayscale } from 'react-native-color-matrix-image-filters';


interface progressProps {
  text: any
}

const ProgressCard = ({ text }: progressProps) => {
  return (
    <View style={styles.container}>

      <View style={{ flex: 0.8, justifyContent: 'center', alignItems: 'center' }}>

        <Image style={{ height: 10, width: 10, tintColor: '#CAC9CF' }} source={require('../assets/images/ball.png')} />
        <Image style={{ height: 90, width: 3, tintColor: '#CAC9CF' }} source={require('../assets/images/vline.png')} />

      </View>


      <View style={{ flex: 8 }}>

        <Text style={styles.textStyle}>{text}</Text>

        <View style={styles.innerContainer}>

          <Pressable style={[styles.btnStyle, { borderTopStartRadius: 20, borderBottomStartRadius: 20 }]}>
            <Image style={styles.checkImg} source={require('../assets/images/check.png')} resizeMode='contain' />
          </Pressable>

          <Pressable style={styles.btnStyle}>
            <Image style={styles.checkImg} source={require('../assets/images/check.png')} resizeMode='contain' />
          </Pressable>

          <Pressable style={styles.btnStyle}>
            <Image style={styles.checkImg} source={require('../assets/images/check.png')} resizeMode='contain' />
          </Pressable>

          <Pressable style={styles.btnStyle}>
            <Image style={styles.checkImg} source={require('../assets/images/check.png')} resizeMode='contain' />
          </Pressable>

          <Pressable style={styles.btnStyle}>
            <Image style={styles.checkImg} source={require('../assets/images/check.png')} resizeMode='contain' />
          </Pressable>

          <Pressable style={styles.btnStyle}>
            <Image style={styles.checkImg} source={require('../assets/images/check.png')} resizeMode='contain' />
          </Pressable>

          <Pressable style={[styles.btnStyle, { borderTopEndRadius: 20, borderBottomEndRadius: 20 }]}>
            <Image style={styles.checkImg} source={require('../assets/images/check.png')} resizeMode='contain' />
          </Pressable>

          <Grayscale>
            <Image style={{ height: 36, width: 40, marginHorizontal: 10 }} source={require('../assets/images/trophy.png')} resizeMode='contain' />
          </Grayscale>


        </View>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flexDirection: 'row',
    overflow: 'hidden',
    paddingHorizontal: 10,
  },

  textStyle: {
    fontFamily: 'Lato-Black',
    color: 'black',
    marginTop: 10
  },

  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    paddingHorizontal: 20,
    overflow: 'hidden',
  },

  btnStyle: {
    height: 30,
    width: 34,
    backgroundColor: '#CAC9CF',
    marginHorizontal: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  checkImg: {
    height: 10,
    width: 10
  }

})

export default ProgressCard