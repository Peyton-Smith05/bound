import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '@/components/Themed';
import BookHeader from './BookHeader';

interface QuoteCardProps {
  image: any;
  title: string;
  author: string;
  quote: string;
}

const QuoteCard = ({ image, title, author, quote }: QuoteCardProps) => {
  return (
    <View style={styles.card}>
      <BookHeader image={image} title={title} author={author} />
      <Text style={styles.quote}>{`"${quote}"`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
    marginBottom: 15,
  },
  quote: {
    margin: 10,
    fontSize: 14,
    fontStyle: 'italic',
  },
});

export default QuoteCard;
