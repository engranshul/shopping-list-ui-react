import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ShoppingListHeader from "../components/ShoppingListHeader";
import ItemInput from "../components/ItemInput";
import AddItem from "../components/AddItem";
import ItemsDisplay from "../components/ItemsDisplay";

function HomeScreen() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Milk",
    },
    {
      id: 2,
      name: "Eggs",
    },
    {
      id: 3,
      name: "Bread",
    },
    {
      id: 4,
      name: "Juice",
    },
  ]);

  return (
    <View>
      <ShoppingListHeader />
      <ItemInput
        newItemToAdd={newItem}
        setNewItem={(input) => setNewItem(input)}
      />
      <AddItem
        newItemToAdd={newItem}
        setNewItem = {(updatedValue)=>setNewItem(updatedValue)}
        currItems={items}
        setCurrItems={(newOne) => setItems([...items, newOne])}
      />
      <ItemsDisplay itemsToDisplay={items} setCurrItems={(updatedItems)=>setItems(updatedItems)} />
    </View>
  );
}

StyleSheet.create({});

export default HomeScreen;
