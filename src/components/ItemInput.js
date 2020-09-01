import React, { useState } from "react";
import { View, TextInput, StyleSheet, ScrollView } from "react-native";

function ItemInput({ newItemToAdd, setNewItem }) {
  return (
    <View>
      <TextInput
        placeholder=" Provide item to add in shopping list"
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginHorizontal: 50,
          marginVertical: 20,
        }}
        value={newItemToAdd}
        onChangeText={(text) => setNewItem(text)}
      />
    </View>
  );
}

export default ItemInput;
