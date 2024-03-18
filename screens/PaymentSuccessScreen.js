import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import { onSuccessTitle, onSuccessText } from '../components/Texts';
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';

const PaymentSuccessScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../utils/images/success.jpeg')}
      style={{ flex: 1 }}
    >
     <LinearGradient
       colors={['rgba(34, 156, 119, 1)', 'rgba(58, 34, 156, 0.67)']}
       style={styles.linearContainer}>
      
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
        <View
          style={styles.container}
        >
          <View style={styles.textContainer}
          >
            <Text style={{ color: 'white', fontSize: 32, fontWeight: 600 }}>{ onSuccessTitle }</Text>
            <Text style={{ color: 'white', fontSize: 16 }}>{ onSuccessText }</Text>
          </View>
          <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("Invite");
            }}
          >
            <Text style={{ color: 'white', fontSize: 16, marginRight: 5 }}>Começar</Text>
            <MaterialIcons
              style={{
                justifyContent: 'flex-end',
              }}
              name="keyboard-arrow-right"
              size={24}
              color={"white"}
            />
          </TouchableOpacity>
        </View>
        </View>
      </View>
     </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    linearContainer: {
      flex: 1,
      padding: 20,
    },
    container:{
        position: 'absolute',
        width: '100%',
        alignItems: 'center',
        padding: 4
    },
    buttonContainer: {
      marginTop: '40%',
      width: '100%',
      height: '10%',
    },
    button: {
        width: '95%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 32,
        padding: 10,
        backgroundColor: 'transparent',
    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
      fontSize: 18,
    },
    titleText: {
      color: 'white',
      fontSize: 24,
    },
    textContainer: {
      width: '100%',
      marginTop: '100%',
      marginBottom: '10%',
    },
  });

export default PaymentSuccessScreen;
