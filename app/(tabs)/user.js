import {View, Text, StyleSheet, Button} from 'react-native';
import { Link } from 'expo-router';
export default function UserScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Screen</Text>
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
