import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import { onboardingText_1, onboardingText_2 } from '../components/Texts';
import { useNavigation } from "@react-navigation/native";

const ClickScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../utils/images/modal.png')}
      style={{ flex: 1 }}
    >
      {/* Container View */}
      
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(6, 63, 116, 0.4)' }}>
        {/* With Click Bait at top-left */}
        <View
          style={{
            position: 'absolute',
            top: 10,
            left: 10,
            borderWidth: 1,
            borderColor: 'white',
            padding: 25,
            paddingLeft: 40,
            paddingRight: 40,
            borderRadius: 50,
            backgroundColor: 'rgba(0,0,0,0.3)',
          }}
        >
          <Text style={{ color: 'white', fontSize: 16 }}>
            <Text style={{ fontWeight: 'bold' }}>Click</Text> Bait
          </Text>
        </View>

        {/* Bottom View with Text and TouchableOpacity */}
        <View
          style={{
            position: 'absolute',
            bottom: 20,
            width: '100%',
            alignItems: 'center',
            padding: 4
          }}
        >
          <View style={
            {
              padding: 10,
            }
          }>
            <Text style={{ color: 'white', fontSize: 32, fontWeight: 600 }}>{ onboardingText_1 }</Text>
            <Text style={{ color: 'white', fontSize: 16 }}>{ onboardingText_2 }</Text>
          </View>
          <TouchableOpacity
            style={{
              width: '95%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 10,
              borderWidth: 1,
              borderColor: 'white',
              borderRadius: 32,
              padding: 10,
              backgroundColor: 'transparent',
            }}
            onPress={() => {
              navigation.navigate("Login");
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
    </ImageBackground>
  );
};

export default ClickScreen;
