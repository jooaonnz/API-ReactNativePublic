import React from "react";
import { View, Text, ScrollView, StyleSheet, Button } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import PageHome from "../../home/screens/PageHome";

export default function PageInfo({ navigation }) {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container1}>
            <Text style={styles.title}>Bem-vindo ao conversor de Câmbio!</Text>
            <Text style={styles.text1}>
              Com esse app é possível ver a cotação real de mais 150 moedas,
              através de uma API
            </Text>
            <View style={styles.infoContainer}>
              <Text style={styles.texts}>
                Lista de moedas Ao abrir o app, você verá uma lista de moedas
                com suas taxas em relação ao USD (Dólar Americano).
              </Text>
              <Text style={styles.texts}>
                Selecionando uma moeda Toque em qualquer moeda da lista para
                acessar a tela de conversão.
              </Text>
              <Text style={styles.texts}>
                Tela de conversão Na tela de conversão, você verá todas as
                moedas disponíveis e quanto vale 1 unidade da moeda selecionada
                em relação às outras.
              </Text>
              <Text style={styles.texts}>
                Atualização automática O app busca os valores mais recentes da
                API de câmbio sempre que você atualiza ou abre o app. Mesmo sem
                internet, os últimos valores salvos serão exibidos graças ao
                armazenamento local.
              </Text>
            </View>

            <Button title="Ver cotação" onPress={PageHome} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  container1: {
    padding: 20,
    margin: 20,
    marginTop: 40,
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 10,
    borderBlockColor: "#000",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  text1: {
    fontSize: 20,
  },
  infoContainer: {
    gap: 20,
  },
  texts: {
    color: "#000",
    fontSize: 16,
    gap: 20,
  },
});
