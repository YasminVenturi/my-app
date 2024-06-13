import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from "react-native";

export default function NewsScreen() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyBBU9MK6RSazmzi-FOQoGZvleKnv3WD6W8")
      .then((response) => response.json())
      .then((data) => setBooks(data.items))
      .catch((error) => console.error(error));
  }, []);

  return (
    <SafeAreaView style={styles.safecontainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <FlatList
          data={books}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.bookContainer}>
              <Image
                source={{ uri: item.volumeInfo.imageLinks?.thumbnail }}
                style={styles.thumbnail}
              />
              <View style={styles.bookDetails}>
                <Text style={styles.title}>{item.volumeInfo.title}</Text>
                <Text style={styles.description}>{item.volumeInfo.description}</Text>
              </View>
            </View>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safecontainer: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  bookContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  thumbnail: {
    width: 100,
    height: 150,
    marginRight: 10,
    borderRadius: 5,
  },
  bookDetails: {
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
  description: {
    color: "#666",
  },
});
