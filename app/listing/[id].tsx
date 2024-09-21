import { View, Text, Image, Dimensions, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams, useRouter } from 'expo-router'
import { listingTypes } from '@/types/listingTypes';
import listingData from '@/data/destinations.json';
import { Feather, FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import colors from '@/content/colors';
import Animated, { interpolate, SlideInDown, useAnimatedRef, useAnimatedStyle, useScrollViewOffset } from 'react-native-reanimated';
import { transform } from '@babel/core';

const { width } = Dimensions.get('window');
const IMG_HEIGHT = 300;

export default function ListingDetails() {

  const { id } = useLocalSearchParams();

  // const listing : listingTypes = (listingData as listingTypes[]).find(
  //   (item) => item.id === id
  // );

  const listing: listingTypes = (listingData as listingTypes[]).find(
    (item) => item.id === id
  ) as listingTypes;

  const router = useRouter();

  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  const imageAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-IMG_HEIGHT, 0, IMG_HEIGHT],
            [-IMG_HEIGHT / 2, 0, IMG_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-IMG_HEIGHT, 0, IMG_HEIGHT],
            [2, 1, 1]
          ),
        }
      ],
    };
  });
  return (
    <>
      <Stack.Screen options={{
        headerTransparent: true,
        headerTitle: '',
        headerLeft: () => (
          <TouchableOpacity onPress={() => router.back()} style={{
            backgroundColor: "rgba(255,255,255,0.5)",
            borderRadius: 10,
            padding: 4
          }}>
            <View style={{ backgroundColor: colors.white, padding: 6, borderRadius: 10 }}>
              <Feather name='arrow-left' size={20} />
            </View>
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity onPress={() => { }} style={{
            backgroundColor: "rgba(255,255,255,0.5)",
            borderRadius: 10,
            padding: 4
          }}>
            <View style={{ backgroundColor: colors.white, padding: 6, borderRadius: 10 }}>
              <Ionicons name='bookmark-outline' />
            </View>
          </TouchableOpacity>
        )
      }} />
      <View style={styles.container}>
        {/* Image Section */}
        <Animated.ScrollView ref={scrollRef} contentContainerStyle={{ paddingBottom: 150 }}>
          <Animated.Image source={{ uri: listing.image }} style={[styles.image, imageAnimatedStyle]} />

          {/* title and location section */}
          <View style={styles.contentWrapper}>
            <Text style={styles.listingName}>{listing.name}</Text>
            <View style={styles.listingLocationWrapper}>
              <FontAwesome5 name="map-marker-alt" size={18} color={colors.primaryColor} />
              <Text style={styles.listingLocationText} >{listing.location}</Text>
            </View>

            {/* detials section */}
            <View style={styles.highlightWrapper}>
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.HighlightIcons}>
                  <Ionicons name="time" size={18} color={colors.primaryColor} />
                </View>
                <View>
                  <Text style={styles.HighlightTxt} >Duration</Text>
                  <Text style={styles.HighlightVal} >{listing.duration} Days</Text>
                </View>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <View style={styles.HighlightIcons}>
                  <FontAwesome name="users" size={18} color={colors.primaryColor} />
                </View>
                <View>
                  <Text style={styles.HighlightTxt} >Person</Text>
                  <Text style={styles.HighlightVal} >{listing.duration}</Text>
                </View>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <View style={styles.HighlightIcons}>
                  <Ionicons name="star" size={18} color={colors.primaryColor} />
                </View>
                <View>
                  <Text style={styles.HighlightTxt} >Rating</Text>
                  <Text style={styles.HighlightVal} >{listing.rating}</Text>
                </View>
              </View>

            </View>
            {/* Description section */}
            <Text style={styles.listingDetials}>{listing.description}</Text>
          </View>
        </Animated.ScrollView>
      </View>

      {/* Buttons section */}
      <Animated.View style={styles.footer} entering={SlideInDown.delay(200)}>
        <TouchableOpacity onPress={() => { }} style={[styles.footerBtn, styles.footerBookTxt]}>
          <Text style={styles.footerBtnTxt}>Book Now</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { }} style={styles.footerBtn}>
          <Text style={styles.footerBtnTxt}>${listing.price}</Text>
        </TouchableOpacity>
      </Animated.View>
    </>

  )
}

const styles = StyleSheet.create({
  image: {
    width: width,
    height: IMG_HEIGHT
  },
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  contentWrapper: {
    padding: 20,
    backgroundColor: colors.white
  },
  listingName: {
    fontSize: 24,
    fontWeight: '500',
    color: colors.black,
    letterSpacing: 0.5
  },
  listingLocationWrapper: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 10,
    alignItems: 'center'
  },
  listingLocationText: {
    fontSize: 14,
    marginLeft: 5,
    color: colors.black
  },
  highlightWrapper: {
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'space-between'
  },
  HighlightIcons: {
    backgroundColor: '#F4F4F4',
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 8,
    marginRight: 5,
    alignItems: 'center'
  },
  HighlightTxt: {
    fontSize: 12,
    color: '#999'
  },
  HighlightVal: {
    fontSize: 14,
    fontWeight: '600'
  },
  listingDetials: {
    fontSize: 16,
    color: colors.black,
    lineHeight: 25,
    letterSpacing: 0.5
  },
  footer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    padding: 20,
    paddingBottom: 30,
    width: width
  },
  footerBtn: {
    flex: 1,
    backgroundColor: colors.black,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center'
  },
  footerBookTxt: {
    flex: 2,
    backgroundColor: colors.primaryColor,
    marginRight: 20
  },
  footerBtnTxt: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
    textTransform: 'uppercase'
  }
})