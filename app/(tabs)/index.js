import { useState, useEffect } from 'react';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import  {Text, View, StyleSheet, ScrollView} from 'react-native';
import { Button } from 'react-native-paper';
import { Link } from 'expo-router';
import Carousel from '../components/Carousel';
import { Dimensions } from 'react-native';
import MovieCard from '../components/MovieCard';
import TvShowCard from '../components/TvShowCard';
import { useRouter } from 'expo-router';
import FullCard from '../components/FullCard';


// import fetchMovies from '../utils/fetchMovies';
import { fetchPopularMovies, fetchPopularTvShows } from '../../utils/api';


function HomeScreen() {
   const insets = useSafeAreaInsets();
   const router = useRouter();

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
        <MovieCard movie={item} onPress={() => router.push(`/details/${item.id}?type=movie`)} />
    );

     const rendershowItem = ({ item }) => (
        <TvShowCard show={item} onPress={() => router.push(`/details/${item.id}?type=tv`)} />
    );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
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

      <View style={styles.fullCardContainer}>
        <FullCard movie={{ title: 'Breaking Bad', 
           poster_path: 'https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg', vote_average: 9.5 }} 
           onPress={() => router.push(`/details/1?type=tv`)} />
      </View>
    </ScrollView>
    </SafeAreaView>
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
fullCardContainer: {
    marginBottom: 12,
    width: '100%',
    alignItems: 'center', // Center the card horizontally
    justifyContent: 'center', // Center the card vertically
  },
});

export default HomeScreen;