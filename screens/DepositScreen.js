import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { useAppContext, actionTypes } from "../context/context";
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const DepositScreen = () => {
  const { state, dispatch } = useAppContext();
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  const navigation = useNavigation();
  const handleSignUp = () => {
    // Logic to handle sign-up
  };

  const setValues = () => {
    dispatch({ type: actionTypes.SET_VALUES, payload: "newValue" });
  };

  const eraseValues = () => {
    dispatch({ type: actionTypes.SET_VALUES, payload: null });
  };


  const handleAddValue = (amount) => {
    const newValue = +value + amount; // Using unary plus operator
    if (newValue > 999) {
      setError(true);
      return;
    }
    setValue(newValue.toString());
    setError(false);
  };

  const handleResetValue = () => {
    setValue('');
    setError(false);
  };

  return (
    <LinearGradient
      colors={['rgba(8, 2, 74, 1)', 'rgba(0, 0, 0, 1)']}
      style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Depósito rápido</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.header}>Selecione o valor para o seu primeiro depósito.</Text>
      <Text style={styles.amount}>R$ {value}</Text>
      {error && <Text style={styles.error}>Por favor, não exceda o valor de 999 reais</Text>}
      <Text style={styles.error}>Max. R$ 999,99/mês</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={() => handleAddValue(50)} style={styles.buttons}>
          <Text style={styles.buttonText}>+ R$ 50.00</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleAddValue(100)} style={styles.buttons}>
          <Text style={styles.buttonText}>+ R$ 100.00</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleAddValue(700)} style={styles.buttons}>
          <Text style={styles.buttonText}>+ R$ 700.00</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleResetValue} style={styles.input}>
        <Text style={styles.inputText}>Zerar valor</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignUp} style={styles.createButton}>
        <Text style={styles.createButtonText}>Pagar com pix</Text>
        <MaterialIcons name="arrow-forward" size={24} color="white" />
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 20,
  },
  buttonContainer: {
    marginTop: '10%',
    marginBottom: '5%',
    width: '50%',
    height: '6%',
  },
  button: {
    backgroundColor: 'rgba(64, 142, 197, 0.3)',
    borderRadius: 32,
    paddingHorizontal: '6%',
    paddingVertical: '5%',
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '15%',
    textAlign: 'center',
  },
  amount: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '2%',
    textAlign: 'center',
  },
  error: {
    color: 'rgba(224, 224, 224, 1)',
    marginBottom: '10%',
    textAlign: 'center',
  },
  input: {
    fontSize: 16,
    width: '100%',
    borderWidth: 2,
    borderRadius: 32,
    borderColor: 'rgba(255, 255, 255, 1)',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: 'white',
    textAlign: 'center',
    marginBottom: '5%',
  },
  inputText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: '10%',
    marginBottom: '25%',
  },
  buttons: {
    backgroundColor: 'rgba(64, 142, 197, 0.2)',
    borderRadius: 32,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1,
    marginHorizontal: '1%',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  createButton: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 32,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 1)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    marginTop: '5%',
  },
  createButtonText: {
    color: 'white',
    marginRight: 10,
  },
});

export default DepositScreen;
