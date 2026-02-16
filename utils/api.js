// popular movies
// popular tv shows
// search movies and tv shows
// recommended movies 
// recommended tv shows
// movie details
// similar movies
// similar tv shows
// trending movies
// trending tv shows
// upcoming movies
// upcoming tv shows
// top rated movies
// top rated tv shows

import axios from 'axios';
import config from '../config';

const apiClient = axios.create({
  baseURL: config.Base_URL,
  params: {language: 'en-US', page: '1'},
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${config.access_Token}`,
  },
});


// fetching popular movies
export const fetchPopularMovies = async () => {
  try {
    console.log('Fetching popular movies...');
    const response = await apiClient.get('/movie/popular');
    return response.data.results;
    } catch (error) {
    console.error('Error fetching popular movies:', error);
    throw error;
  }
};

// fetching popular tv shows
export const fetchPopularTvShows = async () => {
  try {
    const response = await apiClient.get('/tv/popular');
    return response.data.results;
    } catch (error) {
    console.error('Error fetching popular tv shows:', error);
    throw error;
  }
};

// fetching top rated movies
export const fetchTopRatedMovies = async () => {
  try {
    const response = await apiClient.get('/movie/top_rated');
    return response.data.results;
  } catch (error) {
    console.error('Error fetching top rated movies:', error);
    throw error;
  }
};

// fetching top rated tv shows
export const fetchTopRatedTvShows = async () => {
  try {
    const response = await apiClient.get('/tv/top_rated');
    return response.data.results;
  } catch (error) {
    console.error('Error fetching top rated TV shows:', error);
    throw error;
  }
};

// fetching recommended movies
export const fetchRecommendedMovies = async (movieId) => {
  try {
    const response = await apiClient.get(`/movie/${movieId}/recommendations`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching recommended movies:', error);
    throw error;
  }
};

// fetching recommended tv shows
export const fetchRecommendedTvShows = async (tvShowId) => {
  try {
    const response = await apiClient.get(`/tv/${tvShowId}/recommendations`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching recommended TV shows:', error);
    throw error;
  }
};

// fetching trending movies
export const fetchTrendingTvShows = async () => {
  try {
    const response = await apiClient.get('/trending/tv/week');
    return response.data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    throw error;
  }
};

// fetching trending tv shows
export const fetchTrendingMovies = async () => {
  try {
    const response = await apiClient.get('/trending/movie/week');
    return response.data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    throw error;
  }
};

// fetching upcoming movies
export const searchMoviesAndTvShows = async (query) => {
  try {
    const response = await apiClient.get('/search/multi', {
      params: { query },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error searching movies and TV shows:', error);
    throw error;
  }
};

// fetching movie details
export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await apiClient.get(`/movie/${movieId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};

// fetching tv show details
export const fetchTvShowDetails = async (tvShowId) => {
  try {
    const response = await apiClient.get(`/tv/${tvShowId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching TV show details:', error);
    throw error;
  }
};


// fetching similar movies
export const fetchSimilarMovies = async (movieId) => {
  try {
    const response = await apiClient.get(`/movie/${movieId}/similar`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching similar movies:', error);
    throw error;
  }
};


// fetching similar tv shows
export const fetchSimilarTvShows = async (tvShowId) => {
  try {
    const response = await apiClient.get(`/tv/${tvShowId}/similar`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching similar TV shows:', error);
    throw error;
  }
};
