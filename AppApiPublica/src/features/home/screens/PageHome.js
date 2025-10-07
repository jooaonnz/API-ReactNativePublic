import React, { useEffect, useState } from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import getCambio from "../service/homeService";
import HomeCambio from "../components/homeCambio";

export default function PageHome({ navigation }) {
  const [cambio, setCambio] = useState([]);

  useEffect(() => {
    async function fetchCambio() {
      const data = await getCambio();
      setCambio(data);
    }

    fetchCambio();
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.container2}>
            <Text style={styles.text}>Olá mundo</Text>
            <FlatList
              data={cambio}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <HomeCambio title={item.title} body={item.body} />
              )}
            />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {},
  text: {
    color: "#000",
  },
});

/*
 Api pública de câmbio
    https://www.exchangerate-api.com/docs/free?ref=freepublicapis.com

 Site com apis disponível
    https://www.freepublicapis.com/tags/public-data

*/
