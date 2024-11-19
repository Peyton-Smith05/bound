import React, { useRef } from 'react';
import { View, TouchableOpacity, StyleSheet, Animated, Dimensions } from 'react-native';
import { Text } from '@/components/Themed'

const SCREEN_WIDTH = Dimensions.get('window').width;

type SavesTabHeaderProps = {
  tabs: string[];
  activeTab: number;
  onTabPress: (index: number) => void;
};

const SavesTabHeader: React.FC<SavesTabHeaderProps> = ({ tabs, activeTab, onTabPress }) => {
  const indicatorPosition = useRef(new Animated.Value(0)).current;

  // Animate the indicator when the active tab changes
  React.useEffect(() => {
    Animated.timing(indicatorPosition, {
      toValue: activeTab * (SCREEN_WIDTH / tabs.length),
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [activeTab]);

  return (
    <View style={styles.tabContainer}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={styles.tab}
          onPress={() => onTabPress(index)}
        >
          <Text
            style={[
              styles.tabText,
              {
                color: activeTab === index ? '#151515' : '#a9a9a9',
                fontWeight: activeTab === index ? 'bold' : 'normal',
              },
            ]}
          >
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
      <Animated.View
        style={[
          styles.indicator,
          {
            left: indicatorPosition,
            width: SCREEN_WIDTH / tabs.length,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    position: 'relative',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  tabText: {
    fontSize: 16,
  },
  indicator: {
    position: 'absolute',
    bottom: 0,
    height: 3,
    backgroundColor: '#151515',
  },
});

export default SavesTabHeader;
