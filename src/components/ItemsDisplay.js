import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import {
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  Button,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";

function ItemsDisplay({ itemsToDisplay, setCurrItems }) {
  const removeItem = (itemToRemove) => {
    console.log("i am gonna remove", itemToRemove);

    const updatedItems = itemsToDisplay.filter(function (item) {
      return item.name != itemToRemove.name;
    });
    {setCurrItems(updatedItems)};
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemDetail}>
      <Text> {item.name}</Text>
      <TouchableOpacity onPress={() => removeItem(item)}>
        <Entypo name="cross" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.displayContainer}>
      <FlatList
        data={itemsToDisplay}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  displayContainer: {
    paddingVertical: 40,
  },
  itemDetail: {
    flexDirection: "row",
    padding: 7,
    justifyContent: "space-between",
    marginHorizontal: 45,
    fontWeight: "bold",
    borderWidth : 1
  },
});

export default ItemsDisplay;
