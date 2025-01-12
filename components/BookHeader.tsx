import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Text } from '@/components/Themed';

interface BookHeaderProps {
  image: any;
  title: string;
  author: string;
}

const BookHeader = ({ image, title, author }: BookHeaderProps) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{`by ${author}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  image: {
    width: 35,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 14,
    color: 'gray',
  },
});

export default BookHeader;
