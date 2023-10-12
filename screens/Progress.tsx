import { View, Text, StyleSheet, ImageBackground, Image, ScrollView, Pressable } from 'react-native'
import React from 'react'
import ProgressBar from 'react-native-progress-bar-horizontal';
import ProgressCard from '../components/ProgressCard';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';


const Progress = () => {

  const navigation: any = useNavigation();

  const { t } = useTranslation();

  return (

    <>
      <View>
        <ImageBackground style={styles.imgStyle} source={require('../assets/images/gym1.png')}>
          <View style={styles.overlay} />

          <View style={{ flexDirection: 'row', marginTop: 50 }}>
            <Pressable onPress={() => { navigation.goBack() }}>
              <Image style={styles.backBtn} source={require('../assets/images/backBtn.png')} /></Pressable>
            <Text style={styles.textStyle}>{t('7x4 Challenge')}</Text>
          </View>


          <View style={{ marginHorizontal: 20, marginTop: 45 }}>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5 }}>
              <Text style={{ fontSize: 14, color: '#BBF246' }}>27 days left</Text>
              <Text style={{ fontSize: 14, color: '#BBF246' }}>4%</Text>

            </View>



            <View style={{ marginTop: 5 }}>
              <ProgressBar
                progress={0.04}
                fillColor="white"
                unfilledColor="rgba(255, 255, 255, 0.2)"
                height={5}
                borderWidth={0}
              />

            </View>

          </View>
        </ImageBackground>
      </View>

      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <ScrollView contentContainerStyle={{ paddingTop: 20, paddingBottom: 60 }} showsVerticalScrollIndicator={false}>

          <ProgressCard text={'Week 1'} />
          <ProgressCard text={'Week 2'} />
          <ProgressCard text={'Week 3'} />
          <ProgressCard text={'Week 4'} />
          <ProgressCard text={'Week 5'} />
          <ProgressCard text={'Week 6'} />
          <ProgressCard text={'Week 7'} />
          <ProgressCard text={'Week 8'} />
          <ProgressCard text={'Week 9'} />

        </ScrollView>
      </View>

      <Pressable
        style={styles.button} onPress={() => navigation.navigate('ProgressStart')}>
        <Text style={styles.buttonText}>{t('GO!')}</Text>
      </Pressable>
    </>

  )
}

const styles = StyleSheet.create({

  imgStyle: {
    height: 180,
    width: '100%',
  },
  backBtn: {
    height: 28,
    width: 28,
    marginStart: 20,
  },
  textStyle: {
    color: 'white',
    marginStart: 20,
    fontFamily: 'Lato-Regular',
    fontSize: 22,
    textTransform: 'uppercase'

  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Set alpha to 1.0 for full opacity (fully black)
  },
  button: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#006BFF',
    padding: 10,
    borderRadius: 30,
    height: 50,
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    left: 40,
    right: 40

  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Lato-Regular',
    textTransform: 'uppercase'
  },
})

export default Progress