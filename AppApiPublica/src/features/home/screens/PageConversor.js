import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import HomeCambio from "../components/homeCambio";

export default function PageConversor({ route }) {
  const { moeda, valor, rates } = route.params;

  if (!rates || !moeda) {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <Text style={styles.title}>Nenhuma conversão disponível</Text>
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }

  const baseRate = rates[moeda] || 1;

  const convertedArray = Object.entries(rates).map(([destino, taxa]) => ({
    id: destino,
    title: `${moeda} → ${destino}`,
    body: `Taxa: ${((1 / baseRate) * taxa).toFixed(4)} ${destino}`,
  }));

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text style={styles.title}>Conversões de {moeda}</Text>

          <FlatList
            data={convertedArray}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <HomeCambio title={item.title} body={item.body} />
            )}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#3e8fd1ff",
  },
  container: {
    padding: 16,
    backgroundColor: "#001E36",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#E5E9ED",
  },
});
