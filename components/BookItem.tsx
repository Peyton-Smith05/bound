// BookItem.tsx
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Text } from '@/components/Themed';

type BookItemProps = {
  image: string;
  title?: string;
  pageCount?: number;
  order?: number;
};

const BookItem: React.FC<BookItemProps> = ({ image, title, pageCount, order }) => {
  return (
    <View style={styles.container}>
      {order !== undefined && (
        <View style={styles.orderBadge}>
          <Text style={styles.orderText}>{order}</Text>
        </View>
      )}
      <Image 
        source={typeof image === 'string' ? { uri: image } : image } 
        style={styles.image} 
      />
      {title ? (
        <Text style={styles.title}>{title}</Text>
      ) : (
        <View style={styles.pageBadge}>
          <Text style={styles.pageText}>{pageCount}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 80,
    margin: 10,
    marginTop: 10,
    marginLeft: 10,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 90,
    borderRadius: 5,
  },
  title: {
    marginTop: 5,
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
    fontWeight: '600',
  },
  pageBadge: {
    marginTop: 5,
    paddingVertical: 2,
    paddingHorizontal: 6,
    backgroundColor: '#333',
    borderRadius: 12,
  },
  pageText: {
    marginHorizontal: 5,
    color: 'white',
    fontSize: 12,
    fontWeight: '900',
  },
  orderBadge: {
    position: 'absolute',
    top: -5,
    left: 0,
    backgroundColor: 'black',
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  orderText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '900',
  },
});

export default BookItem;
