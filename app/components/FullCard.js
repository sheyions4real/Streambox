import {Card, Text} from 'react-native-paper';
import { TouchableOpacity, StyleSheet, View } from 'react-native';

export default function FullCard({ movie, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.cardContainer}>
      <View style={styles.shadowContainer}>
        <Card style={styles.card}>
          <Card.Cover 
            title={movie.title}
            source={{ uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}` }} 
             style={styles.cover} 
          />
          <Card.Content style={styles.content}>
            <Text variant='titleSmall' style={styles.title}>{movie.title}</Text>

            <Text variant='bodyMedium' style={styles.paragraph}>
                Rating: {movie.vote_average}
            </Text>
          </Card.Content>
        </Card>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%', // Fixed width
    margin: 8,
    borderRadius: 8,
    backgroundColor: 'black', // Ensure background is transparent for shadow
  },
  shadowContainer: {
    backgroundColor: 'red',
    borderRadius: 8,
    shadowColor: '#666', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.25, // Shadow opacity
    elevation: 3, // Adjust shadow elevation
  },
  card: {
    flex: 1,
    borderRadius: 8,
    width: '100%', // Fixed width
    height: 300, // Fixed height
    backgroundColor: 'green',
  },
  cover: {
    width: '100%',
    height: 300, // Fixed height for the cover
  },
  content: {
    position: 'absolute',
    bottom: 0, // Position content below the cover
    left: 0,
     right: 0,
     backgroundColor: 'rgba(6, 6, 6, 0.6)', // Semi-transparent background for readability
    paddingVertical: 8,
     alignItems: 'flex-start', // Center content horizontally
     borderBottomEndRadius: 8,
     borderBottomStartRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'semi-bold',
    textAlign: 'center', // Centered text
    color: 'white',
  },
  paragraph: {
    fontSize: 14,
    textAlign: 'center', // Centered text
    color: 'white',
  },
});

