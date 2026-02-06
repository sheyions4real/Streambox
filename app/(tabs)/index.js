import  {Text, View, StyleSheet, Button} from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
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
