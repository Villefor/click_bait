import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
      console.log('Data stored successfully');
    } catch (error) {
      console.error('Error storing data:', error);
    }
};

const getData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        console.log('Data retrieved successfully:', value);
      } else {
        console.log('No data found for the key:', key);
      }
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  };
  