import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Text } from '@/components/Themed';

interface DynamicScreenProps {
  data: any[];
  renderItem: (item: any, index: number) => JSX.Element;
}

const DynamicListScreen = ({ data, renderItem }: DynamicScreenProps) => {
  return (
    <ScrollView
      style={styles.screenContainer}
      contentContainerStyle={styles.scrollContent}
    >
      {data.map((item, index) => (
        <View key={index} style={styles.itemWrapper}>
          {renderItem(item, index)}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingVertical: 20,
    paddingBottom: 5,
  },
  itemWrapper: {
    marginBottom: 5,
  },
});

export default DynamicListScreen;
