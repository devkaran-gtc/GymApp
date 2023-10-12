import { View, Text, ImageBackground, StyleSheet, StatusBar, Image, Button, Pressable, ScrollView, BackHandler } from 'react-native'
import React, { useState } from 'react'
import ExerciseCard from '../components/ExerciseCard'
import { useNavigation, useRoute } from '@react-navigation/native';
import { NestableScrollContainer, NestableDraggableFlatList } from "react-native-draggable-flatlist"
import HeaderCard from '../components/HeaderCard';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useTranslation } from 'react-i18next';

interface ListItem {
  id: string;
  label: string;
}

const Exercise = () => {

  const route = useRoute();
  const value: any = route.params;
  const navigation: any = useNavigation();

  const { t } = useTranslation()

  const [data1, setData1] = useState<ListItem[]>([
    { id: '1', label: 'Item 1' },
    { id: '2', label: 'Item 2' },
    { id: '3', label: 'Item 3' },
    { id: 'A', label: 'Item 4' },
    { id: 'B', label: 'Item 5' },
    { id: 'C', label: 'Item 6' },
    { id: 'X', label: 'Item 7' },
    { id: 'Y', label: 'Item 8' },
    { id: 'Z', label: 'Item 9' },
    { id: 'Q', label: 'Item 10' },
  ]);



  const renderItem = ({ item, index, drag, isActive }: any) => {
    return (
      <ExerciseCard text={item.label} drag={drag} isActive={isActive} />
    );
  };

  const keyExtractor = (item: ListItem) => item.id;



  return (
    <>
      <GestureHandlerRootView>
        <StatusBar translucent backgroundColor='transparent' />
        <View>
          <ImageBackground style={styles.imgStyle} source={value.url}>
            <View style={styles.overlay} />

            <Pressable onPress={() => { navigation.navigate('Home') }}><Image style={styles.backBtn} source={require('../assets/images/backBtn.png')} /></Pressable>
            <Text style={styles.textStyle}>{t('Day 1')}</Text>
            <Text style={[styles.textStyle, { fontSize: 15, marginTop: 7 }]}>{t('FULL BODY')}</Text>
          </ImageBackground>

          <View style={styles.barStyle}>
            <Image style={styles.iconStyle} source={require('../assets/images/clock.png')} resizeMode='contain' />
            <Text style={styles.txtStyle}>{'18  ' + t('Min.')}</Text>

            <Image style={[styles.iconStyle, { marginStart: 20 }]} source={require('../assets/images/dumb.png')} resizeMode='contain' />
            <Text style={styles.txtStyle}>{'16  ' + t('Workouts')}</Text>
          </View>


        </View>
        <NestableScrollContainer contentContainerStyle={{ paddingHorizontal: 15, paddingBottom: 70 }} style={{ height: 560, backgroundColor: 'white' }}>
          <NestableDraggableFlatList
            data={data1}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            onDragEnd={({ data }) => setData1(data)}
          />

        </NestableScrollContainer>


        {/* <View style={{ flex: 1, backgroundColor: 'black' }}> */}

        {/* <ScrollView contentContainerStyle={{ paddingHorizontal: 10, paddingTop: 10, paddingBottom: 60 }} showsVerticalScrollIndicator={false}>

          <ExerciseCard text={'Right Side Crunch'} />
          <ExerciseCard text={'Right Side Crunch'} />
          <ExerciseCard text={'Right Side Crunch'} />
          <ExerciseCard text={'Right Side Crunch'} />
          <ExerciseCard text={'Right Side Crunch'} />
          <ExerciseCard text={'Right Side Crunch'} />
          <ExerciseCard text={'Right Side Crunch'} />
          <ExerciseCard text={'Right Side Crunch'} />
          <ExerciseCard text={'Right Side Crunch'} />
          <ExerciseCard text={'Right Side Crunch'} />

        </ScrollView> */}

        {/* <NestableScrollContainer contentContainerStyle={{ paddingHorizontal: 10, paddingTop: 10, paddingBottom: 60, backgroundColor: 'black' }} showsVerticalScrollIndicator={false}>
          <NestableDraggableFlatList
            data={data1}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            onDragEnd={({ data }) => setData1(data)}
          />

        </NestableScrollContainer> */}

        {/* </View> */}


        <Pressable
          style={styles.button} onPress={() => { navigation.navigate('Progress') }}>
          <Text style={styles.buttonText}>{t('Start')}</Text>
        </Pressable>


      </GestureHandlerRootView>
    </>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  imgStyle: {
    height: 200,
    width: '100%',
  },
  backBtn: {
    height: 28,
    width: 28,
    marginTop: 60,
    marginStart: 20
  },
  textStyle: {
    color: 'white',
    marginStart: 20,
    marginTop: 20,
    fontFamily: 'Lato-Bold',
    fontSize: 22,
    textTransform: 'uppercase'

  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Set alpha to 1.0 for full opacity (fully black)
  },
  barStyle: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    backgroundColor: 'black',
    overflow: 'hidden',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  iconStyle: {
    height: 25,
    width: 25
  },
  txtStyle: {
    color: 'white',
    fontFamily: 'Lato-Regular',
    marginStart: 10
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

export default Exercise