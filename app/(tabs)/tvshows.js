import { useState, useEffect } from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import { Button } from 'react-native-paper';
import { Link } from 'expo-router';
import FullCard from '../components/FullCard';
import { fetchTopRatedTvShows, fetchTrendingTvShows } from '../../utils/api';
import Carousel from '../components/Carousel';
import TVShowCard from '../components/TvShowCard';
import MovieCard from '../components/MovieCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function TVShowsScreen() {
  const router = useRouter();
  const [topRatedShows, setTopRatedShows] = useState([]);
  const [trendingShows, setTrendingShows] = useState([]);

  useEffect(() => {
    const getTvShows = async () => {
      const topRated = await fetchTopRatedTvShows();
      const trending = await fetchTrendingTvShows();
      setTopRatedShows(topRated);
      setTrendingShows(trending);
    };
    getTvShows();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
        <ScrollView style={styles.container} contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.headerText}>TV Shows</Text>
        <View style={styles.carouselHeader}>
            <Text style={styles.title}>Recommended TV Show</Text>
        </View>
        <View style={styles.fullCardContainer}>
            <FullCard movie={{ title: 'Breaking Bad', 
                poster_path: 'https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg', vote_average: 9.5 }} 
                onPress={() => router.push(`/details/1?type=tv`)} />
            </View>
            <View style={styles.carouselHeader}>
                <Text style={styles.title}>Trending TV Show</Text>
                <Carousel data={trendingShows} renderItem={({ item }) => (
                    <MovieCard movie={item} onPress={() => router.push(`/details/${item.id}?type=tv`)} />
                )} />
            </View>

            <View style={styles.carouselHeader}>
                <Text style={styles.title}>Top Rated TV Show</Text>
                <Carousel data={topRatedShows} renderItem={({ item }) => (
                    <TVShowCard show={item} onPress={() => router.push(`/details/${item.id}?type=tv`)} />
                )} />
            </View>
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 16,
  },
  scrollContainer: {    
    // Layout properties MUST be here
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingBottom: 20, // Good practice for ScrollViews
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  title : {
    fontSize: 16,
    fontWeight: "semi-bold",
  },
  carouselHeader: {
    marginBottom: 12,
  },
  fullCardContainer: {
    marginBottom: 12,
    width: '100%',
    alignItems: 'center', // Center the card horizontally
    justifyContent: 'center', // Center the card vertically
  },
});
