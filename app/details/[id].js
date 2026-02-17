import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { ActivityIndicator } from 'react-native-paper'; // Import the spinner
import { fetchMovieDetails, fetchTvShowDetails, fetchRecommendedMovies, fetchRecommendedTvShows } from '../../utils/api';
import Carousel from '../components/Carousel';
import MovieCard from '../components/MovieCard';
import TvShowCard from '../components/TvShowCard';

export default function MovieDetails() {
  const { id, type } = useLocalSearchParams(); // Gets the ID from the URL
  const [details, setDetails] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true); // Add this

  const router = useRouter();

    useEffect(()=>{
    // Here you would fetch the movie or TV show details using the ID and type
    const loadDetails = async () => {
         setLoading(true);
        try{
            if (type === 'movie') {
                    const [detailsData, recData] = await Promise.all([
                    fetchMovieDetails(id),
                    fetchRecommendedMovies(id)
                ]);
                setDetails(detailsData);
                setRecommendations(recData);

               // console.log('Movie details:', detailsData);
                // console.log('Recommended movies:', recData);
            } else if (type === 'tv') {
                const [detailsData, recData] = await Promise.all([
                    fetchTvShowDetails(id),
                    fetchRecommendedTvShows(id)
                ]);
                setDetails(detailsData);
                setRecommendations(recData);
                // console.log('TV show details:', detailsData);
                // console.log('Recommended TV shows:', recData);
            } else {
                console.warn('Unknown type:', type);
            }
        } catch (error) {
            console.error('Error fetching details:', error);
        }
        finally {
            setLoading(false);
        }
    };

    loadDetails();

  }, [id, type]);

  const renderRecommendationMovie = ({ item }) => (
    <MovieCard movie={item} onPress={() => router.push(`/details/${item.id}?type=movie`)} />
  );

  const renderRecommendationShow = ({ item }) => (
    <TvShowCard show={item} onPress={() => router.push(`/details/${item.id}?type=tv`)} />
  );
// If loading, show a placeholder or spinner
  if (loading) {
    // RENDER LOADING SPINNER
    return (
      <SafeAreaView style={[styles.container, styles.center]}>
        <ActivityIndicator animating={true} color="#55878A" size="large" />
        <Text style={styles.loadingText}>Fetching {type}...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Custom Header with Back Button */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Details</Text>
        <View style={{ width: 40 }}>{/* Spacer to center title */}</View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.imagePlaceholder}>
           <Image
            source={{ uri: details ? `https://image.tmdb.org/t/p/w500${details.poster_path}` : null }}
            style={{ width: '100%', height: '100%', borderRadius: 20 }}
            resizeMode="cover"
          />
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.title}>{details && details.title}</Text>
          <Text style={styles.rating}>⭐ {details && details.vote_average}</Text>
          <Text style={styles.description}>
            {details && details.overview}
          </Text>
        </View>
        {recommendations && recommendations.length > 0 && (
            <View style={styles.infoSection}>
                <Text style={styles.title}>Recommended Movies</Text>
                <Carousel data={recommendations} renderItem={type === 'movie' ? renderRecommendationMovie : renderRecommendationShow} />
            </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    height: 60,
  },
  backButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollContent: {
    padding: 20,
  },
  imagePlaceholder: {
    width: '100%',
    height: 400,
    backgroundColor: '#eee',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  rating: {
    fontSize: 18,
    color: '#55878A',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  infoSection: {
    marginBottom: 30,
  },
});
