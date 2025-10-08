import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { getCambio } from "../service/homeService";
import HomeCambio from "../components/homeCambio";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function PageHome({ navigation }) {
  const [cambio, setCambio] = useState([]);

  async function fetchCambio() {
    try {
      const data = await getCambio();
      setCambio(data);
      console.log("Respota da api abaixc:");
      console.log(data);

      await AsyncStorage.setItem("@cambio", JSON.stringify(data));
    } catch (error) {
      console.error("Erro ao buscar dados ou salvar dados:", error);
    }
  }

  useEffect(() => {
    async function loadCambio() {
      try {
        const jsonValue = await AsyncStorage.getItem("@cambio");
        if (jsonValue != null) {
          const savedData = JSON.parse(jsonValue);
          setCambio(savedData);
          console.log("Dados carregados do AsyncStorage:", savedData);
        } else {
          // se não tiver nada, buscar da API
          fetchCambio();
        }
      } catch (error) {
        console.error("Erro ao carregar dados do AsyncStorage:", error);
      }
    }

    loadCambio();
  }, []);

  const ratesArray = Object.entries(cambio?.conversion_rates || {}).map(
    ([moeda, valor]) => ({
      id: moeda,
      title: moeda,
      body: `1 ${cambio?.base_code || "USD"} = ${valor} ${moeda}`,
    })
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Cotações</Text>
        <Button title="Carregar cotação" onPress={fetchCambio} />

        <FlatList
          data={ratesArray}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("PageConversor", {
                  moeda: item.title,
                  valor: item.body,
                  rates: cambio.conversion_rates,
                })
              }
            >
              <HomeCambio title={item.title} body={item.body} />
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 12, color: "#000" },
});
