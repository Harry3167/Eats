import React from "react";
import { Searchbar } from "react-native-paper";
import { StyleSheet, View, SafeAreaView } from "react-native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

export const RestaurantsScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.search}>
      <Searchbar placeholder="Search" />
    </View>
    <View style={styles.list}>
      <RestaurantInfoCard />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: {
    backgroundColor: "white",
    padding: 20,
  },
  list: {
    backgroundColor: "blue",
    flex: 1,
    padding: 20,
  },
});
