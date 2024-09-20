import { View, Text, Image, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams, useRouter } from 'expo-router'
import { listingTypes } from '@/types/listingTypes';
import listingData from '@/data/destinations.json';
import { Feather, FontAwesome5, Ionicons } from '@expo/vector-icons';
import colors from '@/content/colors';

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
        <Image source={{ uri: listing.image }} style={styles.image} />
        <View style={styles.contentWrapper}>
          <Text style={styles.listingName}>{listing.name}</Text>
          <View style={styles.listingLocationWrapper}>
            <FontAwesome5 name="map-marker-alt" size={18} color={colors.primaryColor} />
            <Text style={styles.listingLocationText} >{listing.location}</Text>
          </View>

          <View style={styles.highlightWrapper}>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.HighlightIcons}>
                <Ionicons name="time" size={18} color={colors.primaryColor} />
              </View>
            </View>
          </View>
        </View>
      </View>
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

  },
  HighlightIcons: {

  }
})