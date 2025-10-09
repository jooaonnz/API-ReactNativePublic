import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function HomeCambio({ title, body }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1768A8",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: "#00152A",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  body: {
    fontSize: 14,
    color: "#00152A",
  },
});
