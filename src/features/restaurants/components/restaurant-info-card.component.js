import React from "react";
import { StyleSheet, Text } from "react-native";
import styled from "styled-components/native";
import { Card } from "react-native-paper";

const Title = styled.Text`
  padding: 16px;
  color: red;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Retaurant",
    icon,
    photos = [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqftwqsOag_1dJT-Obq4j5Rw0OPBzdP7Qnmt11kHQ1vGZyb92EtacVNfaD0sNiuw3jAXs&usqp=CAU",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
  cover: { padding: 20, backgroundColor: "white" },
  
});
