import { View, Text, ScrollView, FlatList, StatusBar, ImageBackground, StyleSheet, Image } from 'react-native'
import React, { useTransition } from 'react'
import BestCard from '../components/BestCard'
import PopularCard from '../components/PopularCard';
import ChallengeCard from '../components/ChallengeCard';
import SleepCard from '../components/SleepCard';
import BodyCard from '../components/BodyCard';
import HeaderCard from '../components/HeaderCard';
import { useTranslation } from 'react-i18next';

const Timer = () => {

  const { t } = useTranslation()

  const data = [
    { id: '1', title: 'Belly fat burner' },
    { id: '2', title: 'Lose Fat' },
    { id: '3', title: 'Plank' },
    { id: '4', title: 'Wider Biceps' },
  ];

  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor={'transparent'} />
      <ImageBackground source={require('../assets/images/back.png')} style={styles.imageBackground}>
        <View style={styles.overlay} />

        <View style={styles.contentContainer}>

          <View style={styles.header}>
            <Text style={styles.headerText}>{t('Discover')}</Text>
          </View>

          <ScrollView style={{ flex: 1 }}>

            <HeaderCard />
            <Text style={[styles.textStyle, { marginStart: 20, marginTop: 20 }]}>{t('Best for you')}</Text>

            <FlatList
              style={{ marginTop: 15 }}
              horizontal
              data={data}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <BestCard text={item.title} />}
            />

            <FlatList
              style={{ marginTop: 10 }}
              horizontal
              data={data}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <BestCard text={item.title} />}
            />

            <View style={{ backgroundColor: 'black', marginTop: 30, padding: 5, paddingBottom: 80 }}>
              <Text style={[styles.textStyle, { fontSize: 17, marginStart: 15, marginTop: 20 }]}>{t('Popular Workouts')}</Text>

              <ScrollView horizontal={true} style={{ marginTop: 10 }}>
                <PopularCard />
                <PopularCard />
                <PopularCard />
                <PopularCard />
              </ScrollView>

              <Text style={[styles.textStyle, { fontSize: 17, marginStart: 15, marginTop: 20 }]}>{t('Challenge')}</Text>

              <ScrollView horizontal={true} style={{ marginTop: 10 }}>
                <ChallengeCard />
                <ChallengeCard />
                <ChallengeCard />
                <ChallengeCard />
                <ChallengeCard />
              </ScrollView>

              <Text style={[styles.textStyle, { fontSize: 17, marginStart: 15, marginTop: 20 }]}>{t('Fast workout')}</Text>

              <FlatList
                style={{ marginTop: 15 }}
                horizontal
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <BestCard text={item.title} />}
              />

              <FlatList
                style={{ marginTop: 10 }}
                horizontal
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <BestCard text={item.title} />}
              />

              <Text style={[styles.textStyle, { fontSize: 17, marginStart: 15, marginTop: 20 }]}>{t('Sleep')}</Text>

              <ScrollView horizontal={true} style={{ marginTop: 10 }}>
                <SleepCard />
                <SleepCard />
                <SleepCard />
                <SleepCard />
                <SleepCard />
              </ScrollView>

              <ScrollView horizontal={true} style={{ marginTop: 10 }}>
                <SleepCard />
                <SleepCard />
                <SleepCard />
                <SleepCard />
                <SleepCard />
              </ScrollView>

              <Text style={[styles.textStyle, { fontSize: 17, marginStart: 15, marginTop: 20 }]}>{t('Body focus')}</Text>

              <View style={{ flexDirection: 'row', marginTop: 10, paddingHorizontal: 10 }}>
                <BodyCard />
                <BodyCard />

              </View>


              <View style={{ flexDirection: 'row', marginTop: 10, paddingHorizontal: 10, marginBottom: 10 }}>
                <BodyCard />
                <BodyCard />

              </View>

            </View>

          </ScrollView>

        </View>

      </ImageBackground>






    </View>
  )
}

const styles = StyleSheet.create({

  imageBackground: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#006BFF',
    height: 610,
    opacity: 0.8,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
  },
  contentContainer: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    marginStart: 20,
    marginTop: 50,
    marginBottom: 10,
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    marginStart: 10,
  },
  textStyle: {
    color: 'white',
    fontFamily: 'Lato-Bold',
    fontSize: 16
  }
})

export default Timer