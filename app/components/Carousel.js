import React from "react";
import {View, FlatList, Image, StyleSheet} from "react-native";
import { Dimensions } from "react-native";


const Carousel = ({data, renderItem}) => {
    const { width } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.id ? item.id.toString() : index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width * 0.75}
        snapToAlignment="start"
        decelerationRate="fast"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 6,
    height: 300,
  },
});

export default Carousel;