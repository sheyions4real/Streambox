import {View, Text, StyleSheet, Button} from 'react-native';
import { Link } from 'expo-router';
export default function DetailScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detail Screen</Text>
      <Link href="/search" asChild>
        <Button title="Go to Search" />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title : {
    fontSize: 20,
    fontWeight: "bold",
  },
});
