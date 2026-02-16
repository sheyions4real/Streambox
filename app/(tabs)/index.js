import { useState, useEffect } from 'react';
import  {Text, View, StyleSheet, ScrollView} from 'react-native';
import { Button } from 'react-native-paper';
import { Link } from 'expo-router';
import Carousel from '../components/Carousel';
import { Dimensions } from 'react-native';
import MovieCard from '../components/MovieCard';
import TvShowCard from '../components/TvShowCard';

// import fetchMovies from '../utils/fetchMovies';
import { fetchPopularMovies, fetchPopularTvShows } from '../../utils/api';


function HomeScreen() {

    const [popularMovies, setPopularMovies] = useState([]);
    const [popularTvShows, setPopularTvShows] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            try {
                const popularMovies = await fetchPopularMovies();
                const popularTvShows = await fetchPopularTvShows();
                setPopularMovies(popularMovies);
                setPopularTvShows(popularTvShows);
            } catch (error) {
                console.error('Error loading data:', error);
            }
        };

        loadData();
    }, []);


    const renderItem = ({ item }) => (
        <MovieCard movie={item} onPress={() => console.log(item.title)} />
    );

     const rendershowItem = ({ item }) => (
        <TvShowCard show={item} onPress={() => console.log(item.title)} />
    );

  return (
    <ScrollView 
        style={styles.container}
        contentContainerStyle={{ alignItems: 'flex-start' }}
        >
        <Text style={styles.headerText}>StreamBox</Text>
      <View style={styles.CarouselHeader}>
        <Text style={styles.title}>Popular Movies</Text>
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
      <Carousel data={popularMovies} renderItem={renderItem} />

     <View style={styles.CarouselHeader}>
        <Text style={styles.title}>Popular Tv Shows</Text>
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
      <Carousel data={popularTvShows} renderItem={rendershowItem} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff'
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  title : {
    fontSize: 16,
    fontWeight: "semi-bold",
    marginBottom: 14,
    paddingTop: 8,
  },
  CarouselHeader: {
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
},

});

export default HomeScreen;