import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import List from '../../components/List';
import { Text } from '@/components/Themed'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Mock data for lists
const mockData = [
  {
    title: 'Reading',
    books: [
      { image: require('../../assets/images/elon.png'), pageCount: 419 },
      { image: require('@/assets/images/mistborn.png'), pageCount: 1015 },
      { image: require('@/assets/images/dune.png'), pageCount: 103 },
    ],
  },
  {
    title: 'Read',
    books: [
      { image: require('@/assets/images/dune.png'), title: 'Dune' },
      { image: require('@/assets/images/god_emperor_of_dune.png'), title: 'God Emperor of Dune' },
      { image: require('@/assets/images/deathly_hallows.png'), title: 'Deathly Hallows' },
    ],
  },
  {
    title: 'Best Fantasy OAT',
    books: [
      { image: require('@/assets/images/dune.png'), title: 'Dune', order: 1 },
      { image: require('@/assets/images/wok.png'), title: 'God Emperor of Dune', order: 2 },
      { image: require('@/assets/images/deathly_hallows.png'), title: 'Deathly Hallows', order: 3 },
      { image: require('@/assets/images/dune.png'), title: 'Dune', order: 4 },
      { image: require('@/assets/images/wok.png'), title: 'God Emperor of Dune', order: 5 },
      { image: require('@/assets/images/deathly_hallows.png'), title: 'Deathly Hallows', order: 6 },
    ],
  },
  {
    title: 'Best Fantasy OAT',
    books: [
      { image: require('@/assets/images/dune.png'), title: 'Dune', order: 1 },
      { image: require('@/assets/images/wok.png'), title: 'God Emperor of Dune', order: 2 },
      { image: require('@/assets/images/deathly_hallows.png'), title: 'Deathly Hallows', order: 3 },
    ],
  },
];

// Screens for each top tab
function PostsScreen() {
  return <View style={styles.placeholder}><Text>Posts Content</Text></View>;
}

function ListsScreen() {
  return (
    <ScrollView
      style={styles.screenContainer}
      contentContainerStyle={styles.scrollContent}
    >
      {mockData.map((list, index) => (
        <View key={index} style={styles.listWrapper}>
          <List title={list.title} books={list.books} />
        </View>
      ))}
    </ScrollView>
  );
}

function QuotesScreen() {
  return <View style={styles.placeholder}><Text>Quotes Content</Text></View>;
}

function ReviewsScreen() {
  return <View style={styles.placeholder}><Text>Reviews Content</Text></View>;
}

// Create top tab navigator
const TopTab = createMaterialTopTabNavigator();

export default function SavesScreen() {
  const insets = useSafeAreaInsets();
  return (
    <View style={{flex:1, paddingTop: insets.top, backgroundColor: '#fff'}}>
     
      <TopTab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: {
            fontFamily: 'Figtree',
            fontSize: 18,
            fontWeight: '600', 
          },
          tabBarIndicatorStyle: { 
            backgroundColor: 'black', 
            height: 3, 
            borderRadius: 2, 
          },
          tabBarStyle: { 
            backgroundColor: '#fff', 
            elevation: 4 
          }, 
        }}
      >
        <TopTab.Screen name="Lists" component={ListsScreen} />
        <TopTab.Screen name="Quotes" component={QuotesScreen} />
        <TopTab.Screen name="Reviews" component={ReviewsScreen} />
      </TopTab.Navigator>
  
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 0,
  },
  scrollContent: {
    paddingVertical: 10,
    paddingBottom: 20,
  },
  listWrapper: {
    marginBottom: 0,
  },
  placeholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
