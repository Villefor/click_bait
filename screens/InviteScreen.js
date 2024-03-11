import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { RadioButton } from '../components/RadioButton';
import { useNavigation } from "@react-navigation/native";
import { ShareButton } from '../components/ShareButton';

const InviteScreen = () => {

  const navigation = useNavigation();

  const handleSignUp = () => {
    navigation.navigate("Menu");
  };

  return (
    <LinearGradient
      colors={['rgba(8, 2, 74, 1)', 'rgba(0, 0, 0, 1)']}
      style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Convide</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.welcomeText}>Parabéns você chegou na sua última tarefa! </Text>
      <Text style={styles.error}>Convide 3 amigos com seu link de cadastro para estar fazendo o desbloqueio da sua bonificação!</Text>
      <View style={styles.inputContainer}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>+ R$ valor</Text>
          <Text style={styles.label}>Total ganho na data do repasse</Text>
        </View>

        <View style={styles.labelContainer}>
          <Text style={styles.label}>+ R$ valor</Text>
          <Text style={styles.label}>Convites pedentes</Text>
        </View>
      </View>
      <ShareButton />
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
    marginBottom: 20,
  },
  button: {
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
  inviteContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: '5%',
  },
  buttons: {
    backgroundColor: 'rgba(39, 32, 126, 1)',
    borderRadius: 32,
    paddingHorizontal: '10%',
    paddingVertical: '4%',
    flex: 1,
    marginHorizontal: '1%',
    alignItems: 'center',
  },
  welcomeText: {
    color: 'white',
    marginBottom: '5%',
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
  error: {
    color: 'rgba(224, 224, 224, 1)',
    marginBottom: '10%',
    textAlign: 'center',
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
  shareButtonText: {
    color: 'white',
    marginRight: 10,
    fontSize: 18,
  },
});

export default InviteScreen;
