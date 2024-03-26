import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
  useColorScheme,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { loginUser } from "../api/ApiRequests";
import { useAppContext, actionTypes } from "../context/context";
import * as SecureStore from "expo-secure-store";


const LoginScreen = () => {
  const { dispatch } = useAppContext();

  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);

      if (email.length < 6 || password.length < 6) {
        Alert.alert(
          "Por favor, seu e-mail e senha devem possuir ao menos 6 caracteres",
        );
        return;
      }

      await loginUser(email, password);

      if (SecureStore.getItemAsync('accessToken')){
        navigation.navigate("Menu");
      }
    } catch (error) {
      console.error("Login failed:", error);
      Alert.alert("Usuários e senha parecem estar incorretos");
    } finally {
      setLoading(false);
    }
  };

  return (
    <LinearGradient
      colors={
        darkMode
          ? ["#0F2027", "#333", "#2C5364"]
          : ['rgba(8, 2, 74, 1)', 'rgba(0, 0, 0, 1)']
      }
      style={styles.container}
    >
      <View
        style={[
          styles.inputContainer,
          {
            shadowColor: darkMode ? "#000" : "#888",
            shadowOpacity: 0.5,
            shadowRadius: 3,
            elevation: 5,
          },
        ]}
      >
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={[
            styles.input,
            {
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              color: darkMode ? "#fff" : "#fff",
            },
          ]}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <View>
        <Text style={styles.label}>Senha</Text>
          <View  style={styles.passwordContainer} >
          <TextInput
            style={[
              styles.passwordInput,
              {
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                color: darkMode ? "#fff" : "#fff",
              },
            ]}
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            style={styles.passwordIcon}
            onPress={() => setShowPassword(!showPassword)}
          >
            <MaterialCommunityIcons
              name={showPassword ? "eye-off" : "eye"}
              size={24}
              color={darkMode ? "#fff" : "#fff"}
            />
          </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: loading ? "#aaa" : "transparent",
              borderWidth: 1,
              borderColor: 'white',
              borderRadius: 32,
              padding: 10,
            },
          ]}
          onPress={handleLogin}
          disabled={loading}
        >
          <Text style={styles.buttonText}>
            {loading ? "Logging in..." : "Login"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: loading ? "#aaa" : "transparent",
              borderWidth: 1,
              borderColor: 'white',
              borderRadius: 32,
              padding: 10,
            },
          ]}
          onPress={() => {
            navigation.navigate("SignUp");
          }}
          disabled={loading}
        >
          <Text style={styles.buttonText}>
            Criar conta
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.darkModeToggle}
        onPress={() => setDarkMode(!darkMode)}
      >
        <MaterialCommunityIcons
          name={darkMode ? "weather-night" : "weather-sunny"}
          size={30}
          color={darkMode ? "#fff" : "white"}
        />
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
    borderRadius: 8,
    padding: 16,
  },
  input: {
    height: 40,
    borderRadius: 4,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    
  },
  passwordInput: {
    flex: 1,
    height: 40,
    borderRadius: 4,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  passwordIcon: {
    padding: 10,
  },
  label: {
    marginBottom: 5,
    color: "#fff",
  },
  button: {
    marginTop: "10%",
    alignItems: "center",
    borderRadius: 4,
    borderWidth: 0,
    justifyContent: "center",
    lineHeight: 1,
    overflow: "hidden",
    paddingLeft: 16,
    paddingRight: 16,
    fontSize: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  darkModeToggle: {
    position: "absolute",
    top: 20,
    right: 20,
    padding: 10,
  },
});

export default LoginScreen;
