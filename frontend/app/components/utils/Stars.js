import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Stars = ({ nb }) => {
  const totalStars = 5;

  const renderStar = (index) => {
    return <Text key={index} style={styles.star}>{index < nb ? '★' : '☆'}</Text>;
  };

  return (
    <View style={styles.container}>
      {Array.from({ length: totalStars }, (_, index) => renderStar(index))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  star: {
    fontSize: 10,
    color: '#FFD700',
  },
});

export default Stars;
