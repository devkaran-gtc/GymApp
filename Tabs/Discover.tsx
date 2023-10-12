import { View, Text, StyleSheet, Image, Pressable, ScrollView, StatusBar, BackHandler, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import HomeCard from '../components/HomeCard'
import CustomButton from '../components/CustomButton';
import HorizontalListComponent from '../components/HorizontalListComponent';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';



const Discover = () => {

  const { t } = useTranslation();


  const navigation: any = useNavigation();

  const [currentView, setCurrentView] = useState('view1');
  const [getTab, setTab] = useState('7x4 Challenge');

  const images = [require('../assets/images/gym1.png'),
  require('../assets/images/gym2.png'),
  require('../assets/images/gym2.png'),
  require('../assets/images/gym1.png'),
  require('../assets/images/gym2.png'),
  require('../assets/images/gym2.png')];

  const images1 = [require('../assets/images/gym1.png'),
  require('../assets/images/gym1.png'),
  require('../assets/images/gym1.png'),];

  const images2 = [require('../assets/images/gym1.png'),
  require('../assets/images/gym2.png'),
  require('../assets/images/gym1.png'),
  require('../assets/images/gym2.png'),];

  const images3 = [require('../assets/images/gym1.png'),
  require('../assets/images/gym2.png'),];



  useEffect(() => {
    const handleBackButton = () => {
      // Check if the current screen is Discover and handle it accordingly
      if (navigation.isFocused()) {
        // Handle the back button press specific to the Discover screen
        if (Platform.OS === 'android') {
          // Exit the app by mimicking the home button press
          BackHandler.exitApp();
        }
        // Return true to prevent the default back behavior (if any).
        return true;
      }

      // Allow default back behavior for other screens
      return false;
    };

    // Subscribe to the hardware back button event
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);

    // Clean up the event listener when the component unmounts
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, [navigation]);



  const view1Content = (
    <View style={styles.overlay}>

      <View>
        <Text style={{ fontFamily: 'Lato-Regular', color: '#3E3E3E', fontSize: 20, fontWeight: '700' }}>{t('Week Goal')}</Text>
        <Text style={{ fontFamily: 'Lato-Regular', color: '#3E3E3E', fontSize: 10 }}>{t('Set weekly goals for a better body shape')}</Text>
      </View>

      <CustomButton backgroundColor='#006BFF' height={40} width={100} text={t('SET a Goal')} size={11} spacing={0} marginHorizontal={0} marginVertical={0} textColor={'white'} onPress={() => { setCurrentView('view2') }} />


    </View>
  );

  const view2Content = (
    <View style={styles.overlay2}>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 7 }}>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

          <Text style={{ fontFamily: 'Lato-Regular', color: '#3E3E3E', fontSize: 18, fontWeight: '700' }}>{t("Week Goal")}</Text>
          <Image style={{ height: 18, width: 18, marginStart: 10 }} source={require('../assets/images/edit.png')} />

        </View>
        <Text style={{ fontSize: 14, color: '#006BFF', fontFamily: 'Lato-Regular' }}>0/4</Text>
      </View>


      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginTop: 4 }}>

        <Text onPress={() => {
          navigation.navigate('WeeklyGoal')
          setCurrentView('view1')
        }} style={styles.viewtextStyle}>10</Text>

        <Text onPress={() => {
          navigation.navigate('WeeklyGoal')
          setCurrentView('view1')
        }} style={styles.viewtextStyle}>11</Text>

        <Text onPress={() => {
          navigation.navigate('WeeklyGoal')
          setCurrentView('view1')
        }} style={styles.viewtextStyle}>16</Text>

        <Text onPress={() => {
          navigation.navigate('WeeklyGoal')
          setCurrentView('view1')
        }} style={[styles.viewtextStyle, { backgroundColor: '#006BFF', color: 'white' }]}>18</Text>

        <Text onPress={() => {
          navigation.navigate('WeeklyGoal')
          setCurrentView('view1')
        }} style={styles.viewtextStyle}>15</Text>

        <Text onPress={() => {
          navigation.navigate('WeeklyGoal')
          setCurrentView('view1')
        }} style={styles.viewtextStyle}>17</Text>

        <Text onPress={() => {
          navigation.navigate('WeeklyGoal')
          setCurrentView('view1')
        }} style={styles.viewtextStyle}>16</Text>

      </View>

    </View>
  );


  return (

    <View style={styles.container}>
      <View style={styles.upperBox}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20, marginTop: 20 }}>

          <Text style={styles.textStyle}>{t('Home Workout')}</Text>

          <View style={{ flexDirection: 'row' }}>
            <Image style={styles.imageStyle} source={require('../assets/images/searchi.png')} />
            <Image style={styles.imageStyle} source={require('../assets/images/menu.png')} resizeMode='contain' />
          </View>

        </View>



        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', paddingHorizontal: 20 }}>

          <Image style={styles.imgStyle} source={require('../assets/images/dumb.png')} resizeMode='contain' />
          <View>
            <Text style={styles.textStyle2}>{t("WorkOUT")}</Text>
            <Text style={[styles.textStyle2, { fontFamily: 'Lato-Black', fontSize: 18 }]}>5</Text>
          </View>
          <Image style={{ height: 40 }} source={require('../assets/images/line.png')} />


          <Image style={styles.imgStyle} source={require('../assets/images/flame.png')} resizeMode='contain' />
          <View>
            <Text style={styles.textStyle2}>{t("KCAL")}</Text>
            <Text style={[styles.textStyle2, { fontFamily: 'Lato-Black', fontSize: 18 }]}>500</Text>
          </View>
          <Image style={{ height: 40 }} source={require('../assets/images/line.png')} />


          <Image style={styles.imgStyle} source={require('../assets/images/clock.png')} resizeMode='contain' />
          <View>
            <Text style={styles.textStyle2}>{t("MINUTE")}</Text>
            <Text style={[styles.textStyle2, { fontFamily: 'Lato-Black', fontSize: 18 }]}>75</Text>
          </View>
        </View>


      </View>

      <View style={styles.lowerBox}>

        <View style={{ flexDirection: 'row', marginTop: 65 }}>
          <ScrollView contentContainerStyle={{ paddingHorizontal: 20 }} horizontal={true} showsHorizontalScrollIndicator={false}>

            <HorizontalListComponent text={t('7x4 Challenge')} borderRadius={5} backgroundColor={getTab === '7x4 Challenge' ? '#006BFF' : 'white'} textColor={getTab === '7x4 Challenge' ? 'white' : '#484848'} onPress={() => { setTab('7x4 Challenge') }} />
            <HorizontalListComponent text={t('All')} borderRadius={5} backgroundColor={getTab === 'All' ? '#006BFF' : 'white'} textColor={getTab === 'All' ? 'white' : '#484848'} onPress={() => { setTab('All') }} />
            <HorizontalListComponent text={t('Full Body')} borderRadius={5} backgroundColor={getTab === 'Full Body' ? '#006BFF' : 'white'} textColor={getTab === 'Full Body' ? 'white' : '#484848'} onPress={() => { setTab('Full Body') }} />
            <HorizontalListComponent text={t('Yoga')} borderRadius={5} backgroundColor={getTab === 'Yoga' ? '#006BFF' : 'white'} textColor={getTab === 'Yoga' ? 'white' : '#484848'} onPress={() => { setTab('Yoga') }} />
            <HorizontalListComponent text={t('Weight Training')} borderRadius={5} backgroundColor={getTab === 'Weight Training' ? '#006BFF' : 'white'} textColor={getTab === 'Weight Training' ? 'white' : '#484848'} onPress={() => { setTab('Weight Training') }} />

          </ScrollView>
        </View>

        <View style={{ flexDirection: 'column', marginTop: 10, flex: 1 }}>

          <ScrollView contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 10, paddingBottom: 80 }} showsVerticalScrollIndicator={false}>

            {getTab === 'All' && images.map((image, index) =>
              <HomeCard imageSource={image} key={index} />
            )}

            {getTab === '7x4 Challenge' && images1.map((image, index) =>
              <HomeCard imageSource={image} key={index} />
            )}

            {getTab === 'Full Body' && images2.map((image, index) =>
              <HomeCard imageSource={image} key={index} />
            )}

            {getTab === 'Yoga' && images3.map((image, index) =>
              <HomeCard imageSource={image} key={index} />
            )}

            {getTab === 'Weight Training' && images3.map((image, index) =>
              <HomeCard imageSource={image} key={index} />
            )}


          </ScrollView>
        </View>

      </View>


      <View style={styles.overlayContainer}>

        {currentView === 'view1' ? view1Content : null}
        {currentView === 'view2' ? view2Content : null}
      </View>

    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },

  upperBox: {
    flex: 1,
    backgroundColor: 'black',
  },

  lowerBox: {
    flex: 3.6,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },

  overlayContainer: {
    position: 'absolute',
    left: 20,
    right: 20,
    marginTop: 130,
  },

  overlay: {
    backgroundColor: 'white',
    height: 80,
    borderRadius: 15,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    elevation: 10
  },

  overlay2: {
    backgroundColor: 'white',
    height: 80,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 10,
    justifyContent: 'center',
    paddingHorizontal: 8
  },


  textStyle: {
    color: 'white',
    fontSize: 17,
    fontFamily: 'Lato-Regular'
  },

  imageStyle: {
    height: 20,
    width: 20,
    marginLeft: 30
  },

  imgStyle: {
    height: 25,
    width: 35,
  },

  textStyle2: {
    color: 'white',
    fontFamily: 'Lato-Regular',
    fontSize: 10
  },

  btnStyle: {
    backgroundColor: '#006BFF',
    height: 40,
    width: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },

  hListStyle: {

    padding: 12,
    borderRadius: 5,
    color: '#484848',
    fontFamily: 'Lato-Regular',
    textTransform: 'uppercase',
    marginHorizontal: 7,
    borderWidth: 1,
    borderColor: '#E0E0E0'

  },
  viewtextStyle: {
    backgroundColor: '#006BFF1A',
    paddingVertical: 5,
    paddingHorizontal: 9,
    borderRadius: 12,
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  }

})

export default Discover
