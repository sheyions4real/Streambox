import {Card, Text} from 'react-native-paper';
import { TouchableOpacity, StyleSheet, View } from 'react-native';

export default function TvShowCard({ show, onPress }) {
    //console.log('TvShowCard received show:', show);
  return (
    <TouchableOpacity onPress={onPress} style={styles.cardContainer}>
      <View style={styles.shadowContainer}>
        <Card style={styles.card}>
          <Card.Cover source={{ uri: `https://image.tmdb.org/t/p/original/${show.poster_path}` }} 
             style={styles.cover} 
          />
          <Card.Content style={styles.content}>
            <Text variant='titleSmall' style={styles.title}>{show.name}</Text>

            <Text variant='bodyMedium' style={styles.paragraph}>
                Rating: {show.vote_average}
            </Text>
          </Card.Content>
        </Card>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: 225, // Fixed width
    margin: 8,
    borderRadius: 8,
    //backgroundColor: 'black', // Ensure background is transparent for shadow
  },
  shadowContainer: {
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
    height: 350, // Fixed height
    backgroundColor: 'green',
  },
  cover: {
    width: '100%',
    height: 200, // Fixed height for the cover
  },
  content: {
    paddingVertical: 8,
    width: '100%',
     alignItems: 'center', // Center content horizontally
     height: 150, // Fixed height for content area

  },
  title: {
    fontSize: 16,
    fontWeight: 'semi-bold',
    textAlign: 'center', // Centered text
  },
  paragraph: {
    fontSize: 14,
    textAlign: 'center', // Centered text
    color: 'gray',
  },
});

