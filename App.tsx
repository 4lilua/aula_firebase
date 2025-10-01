import React, { useEffect, useState } from "react";
import { Text, View, FlatList } from "react-native";
import { db } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import Navigator from './src/navigation/Navigation'

export default function App() {
  return <Navigator />
}