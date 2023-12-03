import React, { useRef, useEffect, useState } from 'react';
import { View, Image, FlatList, StyleSheet, Dimensions } from 'react-native';

const BannerSlider = () => {
  const flatListRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('forward');

  const banners = [
    { id: '1', image: require('../Images/banner1.png') },
    { id: '2', image: require('../Images/banner2.png') },
    // ... add more banners
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = scrollDirection === 'forward' ? prevIndex + 1 : prevIndex - 1;

        if (nextIndex < 0) {
          // If reached the first banner, change direction to forward
          setScrollDirection('forward');
          return 0;
        } else if (nextIndex >= banners.length) {
          // If reached the last banner, change direction to backward
          setScrollDirection('backward');
          return banners.length - 1;
        } else {
          return nextIndex;
        }
      });

      flatListRef.current?.scrollToIndex({
        animated: true,
        index: currentIndex,
      });
    }, 2000);

    return () => clearInterval(intervalId);
  }, [currentIndex, banners.length, scrollDirection]);

  return (
    <View>
    <FlatList
      ref={flatListRef}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={banners}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.bannerContainer}>
          <Image source={item.image} style={styles.bannerImage} />
        </View>
      )}
      pagingEnabled
      onScrollToIndexFailed={() => {}}
      getItemLayout={(data, index) => ({
        length: Dimensions.get('window').width,
        offset: Dimensions.get('window').width * index,
        index,
      })}
      initialScrollIndex={0}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    width: Dimensions.get('window').width,
  },
  bannerImage: {
    width: Dimensions.get('window').width,
    height: 300,
    borderRadius: 8,
    marginTop: 0,
  },
});

export default BannerSlider;
