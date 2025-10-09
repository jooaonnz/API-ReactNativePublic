import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import PageHome from "../../home/screens/PageHome";

export default function PageInfo({ navigation }) {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            <View style={styles.container2}>
              <Text style={styles.title}>
                Bem-vindo ao conversor de Câmbio!
              </Text>
              <Text style={styles.text1}>
                Com esse app é possível ver a cotação real de mais 150 moedas,
                através de uma API
              </Text>
              <View style={styles.infoContainer}>
                <Text style={styles.texts}>
                  Lista de moedas ao abrir o app, você verá uma lista com suas
                  taxas em relação ao USD (Dólar Americano).
                </Text>
                <Text style={styles.texts}>
                  Selecionando qualquer moeda da lista para acessar a tela de
                  conversão.
                </Text>
                <Text style={styles.texts}>
                  Tela de conversão você verá todas as moedas disponíveis e
                  quanto vale 1 unidade da moeda selecionada em relação às
                  outras.
                </Text>
                <Text style={styles.texts}>
                  Atualização automática O app busca os valores mais recentes da
                  API de câmbio sempre que você abre o app. Mesmo sem internet,
                  os últimos valores salvos serão exibidos graças ao
                  armazenamento local.
                </Text>
              </View>

              <TouchableOpacity
                style={styles.botao}
                onPress={() => navigation.navigate("PageHome")}
              >
                <Text style={styles.botaoText}>Ver moedas</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#3e8fd1ff",
  },
  scrollView: {
    backgroundColor: "#001E36",
  },
  container2: {
    padding: 20,
    margin: 20,
    marginTop: 40,
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#00152A",
    backgroundColor: "#1768A8",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#00152A",
  },
  text1: {
    fontSize: 20,
    color: "#00152A",
  },
  infoContainer: {
    gap: 20,
  },
  texts: {
    color: "#00152A",
    fontSize: 16,
    gap: 20,
  },
  botao: {
    borderWidth: 1,
    margin: 10,
    padding: 10,
    paddingHorizontal: 40,
    borderRadius: 10,
    backgroundColor: "#001E36",
    borderColor: "#00152A",
  },
  botaoText: {
    color: "#E5E9ED",
    fontSize: 20,
  },
});
