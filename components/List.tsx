import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Text } from '@/components/Themed';
import BookItem from './BookItem';

type ListProps = {
  title: string;
  books: Array<{
    image: string;
    title?: string;
    pageCount?: number;
    order?: number;
  }>;
};

const List: React.FC<ListProps> = ({ title, books }) => {
  return (
    <View style={styles.container}>
      
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        <View style={styles.background}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.bookList}>
            {books.map((book, index) => (
              <BookItem
                key={index}
                image={book.image}
                title={book.title}
                pageCount={book.pageCount}
                order={book.order}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 0,
    overflow: 'visible',
  },
  background: {
    flexDirection: 'column',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 10,
    // Ensures background adjusts based on the content width
    minWidth: '91%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 }, // x = -5, y = 5
    shadowOpacity: 0.2,
    shadowRadius: 5, // blur radius
    elevation: 5, // For Android shadow
    overflow: 'visible',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    marginLeft: 20,
    color: '#333',
  },
  scrollContainer: {
    paddingLeft: 16,
    paddingVertical: 10,
    flexDirection: 'row',
    overflow: 'visible',    
  },
  bookList: {
    flexDirection: 'row',
    overflow: 'visible',

  },
});

export default List;
