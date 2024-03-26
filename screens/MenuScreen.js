import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAppContext, actionTypes } from "../context/context";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { handleLogout } from "../utils/useful/handleLogout";
import { getData } from "../utils/useful/async_storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

const MenuScreen = () => {

  const navigation = useNavigation();;

  const wasAnswered = AsyncStorage.getItem("question");

  return (
    <LinearGradient
      colors={["rgba(8, 2, 74, 1)", "rgba(0, 0, 0, 1)"]}
      style={styles.container}
    >
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Menu</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.welcomeText}>
        Seja bem vindo a ClickBait, escolha a opção de depósito
      </Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Questionnaire")}
          style={styles.buttons}
        >
          <Text style={styles.buttonText}>Responda as perguntas</Text>
        </TouchableOpacity>
      </View>

      {wasAnswered && (
        <View style={styles.depositContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Deposit")}
            style={styles.buttons}
          >
            <Text style={styles.buttonText}>Depósito pix</Text>
          </TouchableOpacity>
        </View>
      )}

      {wasAnswered && (
        <View style={styles.friendContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Convide")}
            style={styles.buttons}
          >
            <Text style={styles.buttonText}>Indicar amigo</Text>
          </TouchableOpacity>
        </View>
      )}

      <TouchableOpacity
        style={[styles.createButton]}
        onPress={() => handleLogout}
      >
        <Text style={styles.createButtonText}>Sair</Text>
        <MaterialIcons name="arrow-forward" size={24} color="white" />
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 20,
  },
  buttonContainer: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: "rgba(64, 142, 197, 0.3)",
    borderRadius: 32,
    paddingHorizontal: "6%",
    paddingVertical: "4%",
  },
  buttonText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  friendContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: "5%",
  },
  welcomeText: {
    color: "white",
    marginBottom: "20%",
    fontSize: 32,
    fontWeight: "bold",
  },
  inputContainer: {
    width: "100%",
    justifyContent: "center",
  },
  labelContainer: {
    marginBottom: 10,
  },
  label: {
    color: "white",
    marginBottom: "3%",
  },
  input: {
    width: "90%",
    borderWidth: 2,
    borderRadius: 32,
    borderColor: "rgba(255, 255, 255, 1)",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: "white",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: "10%",
  },
  depositContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: "10%",
    marginBottom: "50%",
  },

  buttons: {
    backgroundColor: "rgba(64, 142, 197, 0.2)",
    borderRadius: 32,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1,
    marginHorizontal: "1%",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  createButton: {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 32,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 1)",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  createButtonText: {
    color: "white",
    marginRight: 10,
  },
});

export default MenuScreen;
