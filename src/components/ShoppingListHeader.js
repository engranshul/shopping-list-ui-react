import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

function ShoppingListHeader() {
  return (
    <View style={styles.container}>
      <Text>Shopping List</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
    height : 50,
    alignItems : "center",
    justifyContent : "center"
  },
});

export default ShoppingListHeader;
