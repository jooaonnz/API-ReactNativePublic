import React, { useEffect, useState } from "react";
import { Text, View, FlatList, StyleSheet, Button } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { getCambio } from "../service/homeService";
import HomeCambio from "../components/homeCambio";

export default function PageHome({ navigation }) {
  const [cambio, setCambio] = useState([]);

  async function fetchCambio() {
    const data = await getCambio();
    setCambio(data);
    console.log("Respota da api abaixc:");
    console.log(data);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.container2}>
            <Text style={styles.text}>Olá mundo</Text>
            <Button onPress={fetchCambio} title="Fazer request" />
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
