import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { RadioButton } from '../components/RadioButton';
import { useNavigation } from "@react-navigation/native";
import { createUser } from "../api/ApiRequests";
import { validateEmail, validateName, validateCPF, validatePassword, validatePhoneNumber, validateTerms } from '../components/Validations';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [cpf, setCPF] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const navigation = useNavigation();

  const handleSignUp = async () => {
    const emailError = validateEmail(email);
    const nameError = validateName(name);
    const CPFError = validateCPF(cpf);
    const passwordError = validatePassword(password);
    const phoneNumberError = validatePhoneNumber(phoneNumber);
    const validateTermsError = validateTerms(agreeToTerms);
  
    const errorMessage = [emailError, nameError, CPFError, passwordError, phoneNumberError, validateTermsError].filter(error => error).join('\n');
  
    if (errorMessage) {
      alert(errorMessage);
    } else {
      try {
        await createUser(email, name, password, cpf);
        navigation.navigate("Login");
      } catch (error) {
        console.error("Error creating user:", error);
        alert("An error occurred during user creation. Please try again later.");
      }
    }
};

  return (
    <LinearGradient
      colors={['rgba(8, 2, 74, 1)', 'rgba(0, 0, 0, 1)']}
      style={styles.container}>
    <ScrollView style={styles.scrollview}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cadastro</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.welcomeText}>Seja bem vindo a ClickBait, inicie o seu cadastro</Text>
      <View style={styles.inputContainer}>

        <View style={styles.labelContainer}>
          <Text style={styles.label}>Nome</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: John Doe"
            onChangeText={(text) => setName(text)}
            value={name}
          />
        </View>

        <View style={styles.labelContainer}>
          <Text style={styles.label}>E-mail</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: janedoe@gmail.com"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
        </View>

        <View style={styles.labelContainer}>
          <Text style={styles.label}>CPF</Text>
          <TextInput
            style={styles.input}
            placeholder="CPF"
            onChangeText={(text) => setCPF(text)}
            value={cpf}
          />
        </View>

        <View style={styles.labelContainer}>
          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Mínimo de 6 caracteres, Ex: 123456"
            onChangeText={(text) => setPassword(text)}
            value={password}
            // secureTextEntry={true}
          />
        </View>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>WhatsApp Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex:(11) 91234-5678"
            onChangeText={(text) => setPhoneNumber(text)}
            value={phoneNumber}
          />
        </View>
      </View>
      <View style={styles.checkboxContainer}>
          <RadioButton selected={agreeToTerms} onPress={() => setAgreeToTerms(!agreeToTerms)} />
      </View>
      <TouchableOpacity onPress={handleSignUp} style={styles.createButton}>
        <Text style={styles.createButtonText}>Criar cadastro</Text>
        <MaterialIcons name="arrow-forward" size={24} color="white" />
      </TouchableOpacity>
      </ScrollView>
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
  scrollview: {
    width: '100%',
  },
  buttonContainer: {
    width: '50%',
    marginBottom: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'rgba(64, 142, 197, 0.3)',
    borderRadius: 32,
    paddingHorizontal: '6%',
    paddingVertical: '4%',
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  welcomeText: {
    color: 'white',
    marginBottom: '20%',
    fontSize: 32,
    fontWeight: 'bold',
  },
  inputContainer: {
    width: '100%',
    justifyContent: 'center',
  },
  labelContainer: {
    marginBottom: 10,
  },
  label: {
    color: 'white',
    marginBottom: '3%',
  },
  input: {
    width: '90%',
    borderWidth: 2,
    borderRadius: 32,
    borderColor: 'rgba(255, 255, 255, 1)',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: 'white',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: '5%',
    marginBottom: 20,
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxText: {
    color: 'white',
    marginLeft: 10,
  },
  createButton: {
    width: '95%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 32,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 1)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  createButtonText: {
    color: 'white',
    marginRight: 10,
  },
});

export default SignUpScreen;
