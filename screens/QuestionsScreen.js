import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as SecureStore from "expo-secure-store";
import {handleSendQuestionnaire} from '../utils/useful/handleQuestions'
import { useNavigation } from "@react-navigation/native";

const QuestionnaireScreen = () => {
  const [satisfactionLevel, setSatisfactionLevel] = useState('');
  const [recommendation, setRecommendation] = useState('');
  const [bestApp, setBestApp] = useState('');
  const [instagramProblem, setInstagramProblem] = useState('');
  const [instagramRating, setInstagramRating] = useState(0);

  const navigation = useNavigation();

  return (
    <LinearGradient colors={['rgba(8, 2, 74, 1)', 'rgba(0, 0, 0, 1)']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.question}>Qual seu grau de satisfação com o YouTube?</Text>
        <TextInput
          style={styles.input}
          value={satisfactionLevel}
          onChangeText={setSatisfactionLevel}
          placeholder="Grau de satisfação"
        />

        <Text style={styles.question}>Recomendaria a algum amigo(a) seu?</Text>
        <TextInput
          style={styles.input}
          value={recommendation}
          onChangeText={setRecommendation}
          placeholder="Recomendação"
        />

        <Text style={styles.question}>Me informe qual melhor aplicativo que você usa hoje?</Text>
        <TextInput
          style={styles.input}
          value={bestApp}
          onChangeText={setBestApp}
          placeholder="Melhor aplicativo"
        />

        <Text style={styles.question}>Já teve algum problema com o Instagram?</Text>
        <TextInput
          style={styles.input}
          value={instagramProblem}
          onChangeText={setInstagramProblem}
          placeholder="Problema com o Instagram"
        />

        <Text style={styles.question}>Qual nível de indicação do Instagram de 0 a 10?</Text>
        <View style={styles.ratingContainer}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
            <TouchableOpacity
              key={value}
              style={[styles.ratingButton, instagramRating === value && styles.selectedRatingButton]}
              onPress={() => setInstagramRating(value)}
            >
              <Text style={styles.ratingButtonText}>{value}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.createButton} onPress={() => handleSendQuestionnaire (navigation, satisfactionLevel, recommendation, bestApp, instagramProblem, instagramRating)}>
          <Text style={styles.createButtonText}>Enviar Questionário</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  question: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  ratingButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 28,
    paddingVertical: 5,
    paddingHorizontal: '3%',
  },
  selectedRatingButton: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  ratingButtonText: {
    color: 'black',
    fontSize: 18,
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
    marginTop: 20,
  },
  createButtonText: {
    color: 'white',
    marginRight: 10,
  },
});

export default QuestionnaireScreen;
