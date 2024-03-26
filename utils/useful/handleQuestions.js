import AsyncStorage from '@react-native-async-storage/async-storage';

export const handleSendQuestionnaire = async (navigation, satisfactionLevel, recommendation, bestApp, instagramProblem, instagramRating) => {
    try {
        if (!satisfactionLevel || !recommendation || !bestApp || !instagramProblem || instagramRating === 0) {
          alert('Please answer all questions');
          return;
        }
        await AsyncStorage.setItem('question', 'true');
        navigation.navigate('Menu');
      } catch (error) {
        console.error('Error storing data:', error);
        return "Por favor, tente novamente";
      }
};