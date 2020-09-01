import React, { useState } from "react";
import { View, TextInput, StyleSheet, ScrollView, Button,Alert } from "react-native";

function AddItem({ newItemToAdd, setNewItem, currItems, setCurrItems }) {
  const validateItemToBeAdded = () => {
    newItemToAdd.length > 0
      ? setCurrItems({ id: currItems[currItems.length-1].id + 1, name: newItemToAdd })
      : Alert.alert("Error","Invalid Input");
    setNewItem(""); 
  };
  return (
    <View style={styles.buttonContainer}>
      <Button
        title="Add Item"
        color="#841584"
        onPress={() =>validateItemToBeAdded()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: 50,
  },
});

export default AddItem;
