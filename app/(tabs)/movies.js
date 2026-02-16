import React,  {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import { Button } from 'react-native-paper';
import { Link } from 'expo-router';
import { fetchTopRatedMovies, fetchTrendingMovies } from '../../utils/api';
import Carousel from '../components/Carousel';
import MovieCard from '../components/MovieCard';

export default function MoviesScreen() {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const loadTopRatedMovies = async () => {
      try {
        const movies = await fetchTopRatedMovies();
        const trending = await fetchTrendingMovies();
        setTopRatedMovies(movies);
        setTrendingMovies(trending);
      } catch (error) {
        console.error('Error fetching top rated movies:', error);
      }
    };

    loadTopRatedMovies();
  }, []);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.headerText}>Movies</Text>
      <View style={styles.carouselHeader}>
         <Text style={styles.title}>Top Rated Movies</Text>
        <Link href="/search" asChild>
          <Button
            mode="contained"
            style={styles.searchButton}
            labelStyle={styles.searchButtonLabel}
          >
            see more
          </Button>
          </Link>
        </View>
        <Carousel data={topRatedMovies} renderItem={({ item }) => (
            <MovieCard movie={item} onPress={() => console.log(item.title)} />
        )} />

        <View style={styles.carouselHeader}>
         <Text style={styles.title}>Trending Movies</Text>
        <Link href="/search" asChild>
          <Button
            mode="contained"
            style={styles.searchButton}
            labelStyle={styles.searchButtonLabel}
          >
            see more
          </Button>
        </Link>
      </View>
      <Carousel data={trendingMovies} renderItem={({ item }) => (
          <MovieCard movie={item} onPress={() => console.log(item.title)} />
      )} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
    headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    marginTop: 16,
  },
  title : {
    fontSize: 16,
    fontWeight: "semi-bold",
    marginBottom: 14,
    paddingTop: 8,
  },
  carouselHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 6
  },
  searchButton: {
  backgroundColor: "#55878A",
  marginLeft: 8,
  borderRadius: 20, // Buttons usually look better with a slight curve
},
searchButtonLabel: {
  color: '#ffffff',
  fontSize: 12,
  fontWeight: "bold",
}
});
