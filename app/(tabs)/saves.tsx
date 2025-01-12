import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, ScrollView, StyleSheet } from 'react-native';
import DynamicListScreen from '@/components/DynamicListScreen';
import QuoteCard from '@/components/QuoteCard';
import List from '@/components/List';
import ReviewCard from '@/components/ReviewCard';
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

const quoteData = [
  {
    image: require('@/assets/images/dune.png'),
    title: 'Dune',
    author: 'Frank Herbert',
    quote: 'I must not fear. Fear is the mind-killer. Fear is the little death that brings obliteration. I will face my fear and I will permit it to pass over me and through me.',
  },
  {
    image: require('@/assets/images/dune.png'),
    title: 'Dune',
    author: 'Frank Herbert',
    quote: 'The mystery of life isn’t a problem to solve, but a reality to experience.',
  },
  {
    image: require('@/assets/images/mistborn.png'),
    title: 'Mistborn: The Final Empire',
    author: 'Brandon Sanderson',
    quote: 'You can’t be scared of doing what you think is right, just because someone might not like it.',
  },
  {
    image: require('@/assets/images/mistborn.png'),
    title: 'Mistborn: The Final Empire',
    author: 'Brandon Sanderson',
    quote: 'There’s always another secret.',
  },
  {
    image: require('@/assets/images/wok.png'),
    title: 'The Way of Kings',
    author: 'Brandon Sanderson',
    quote: 'Life before death. Strength before weakness. Journey before destination.',
  },
  {
    image: require('@/assets/images/wok.png'),
    title: 'The Way of Kings',
    author: 'Brandon Sanderson',
    quote: 'Sometimes the prize is not worth the costs. The means by which we achieve victory are as important as the victory itself.',
  },
];

const reviewsData = [
  {
    image: require('@/assets/images/fifty_shades.png'),
    title: 'Fifty Shades of Grey',
    author: 'EL James',
    rating: 2,
    ratingType: 'stars',
    review: 'Methinks the prose lacks the elegance of poetic grace, leaning instead upon wanton fervor.',
  },
  {
    image: require('@/assets/images/mistborn.png'),
    title: 'Mistborn: The Final Empire',
    author: 'Brandon Sanderson',
    rating: 9.8,
    ratingType: 'numeric',
    review: 'One of the greatest tales of true heroism. There will never be a book with such an epic ending.',
  },
];


function ListsScreen() {
  return (
    <DynamicListScreen
      data={mockData}
      renderItem={(item) => <List title={item.title} books={item.books} />}
    />
  );
}

function QuotesScreen() {
  return (
    <DynamicListScreen
      data={quoteData}
      renderItem={(item) => (
        <QuoteCard
          image={item.image}
          title={item.title}
          author={item.author}
          quote={item.quote}
        />
      )}
    />
  );
}

function ReviewsScreen() {
  return (
    <DynamicListScreen
      data={reviewsData}
      renderItem={(item) => (
        <ReviewCard
          image={item.image}
          title={item.title}
          author={item.author}
          rating={item.rating}
          ratingType={item.ratingType}
          review={item.review}
        />
      )}
    />
  );
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
