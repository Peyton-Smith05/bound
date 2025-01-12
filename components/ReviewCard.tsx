import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '@/components/Themed';
import BookHeader from './BookHeader';
import { FontAwesome } from '@expo/vector-icons';

interface ReviewCardProps {
  image: any;
  title: string;
  author: string;
  rating: number;
  ratingType: 'stars' | 'numeric'; // 'stars' or 'numeric'
  review: string;
}

const ReviewCard = ({ image, title, author, rating, ratingType, review }: ReviewCardProps) => {
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
      <View style={styles.starRow}>
        {[...Array(fullStars)].map((_, i) => (
          <FontAwesome key={`full-${i}`} name="star" size={16} color="black" />
        ))}
        {hasHalfStar && <FontAwesome name="star-half" size={16} color="black" />}
        {[...Array(5 - Math.ceil(rating))].map((_, i) => (
          <FontAwesome key={`empty-${i}`} name="star-o" size={16} color="black" />
        ))}
        <Text style={styles.ratingText}>{`${rating.toFixed(1)}/5`}</Text>
      </View>
    );
  };

  return (
    <View style={styles.card}>
      <BookHeader image={image} title={title} author={author} />
      <View style={styles.ratingContainer}>
        {ratingType === 'stars' ? (
          renderStars(rating)
        ) : (
          <Text style={styles.numericRating}>{`${rating.toFixed(1)}/10`}</Text>
        )}
      </View>
      <Text style={styles.reviewText}>{`"${review}"`}</Text>
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
  ratingContainer: {
    marginVertical: 10,
    alignItems: 'center',
  },
  starRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 8,
    fontSize: 14,
    color: 'gray',
  },
  numericRating: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  reviewText: {
    margin: 10,
    fontSize: 14,
    fontStyle: 'italic',
  },
});

export default ReviewCard;
