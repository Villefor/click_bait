import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native';
import { useAppContext, actionTypes } from "../context/context";
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
// import QRCode from 'react-native-qrcode-svg';
// import Clipboard from 'expo-clipboard';

const QrCodeScreen = () => {
  const { state, dispatch } = useAppContext();
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [showQR, setShowQR] = useState(false);

  const navigation = useNavigation();

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(value);
  };

  const handleShowQR = () => {
    setShowQR(true);
  };

  const handleShowCopyPix = () => {
    setShowQR(false);
  };

  return (
    <LinearGradient
      colors={['rgba(8, 2, 74, 1)', 'rgba(0, 0, 0, 1)']}
      style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.titleText}>Depósito Pix</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.pixContainer}>
        <TouchableOpacity onPress={handleShowQR} style={styles.touchable}>
          <Text style={styles.buttonText}>QR Code</Text>
          {showQR && <Image source={require('.././utils/images/paymentBar.png')} style={styles.barImage} />}
        </TouchableOpacity>
        <TouchableOpacity onPress={handleShowCopyPix} style={styles.touchable}>
          <Text style={styles.buttonText}>Pix Copia e Cola</Text>
          {!showQR && <Image source={require('.././utils/images/paymentBar.png')} style={styles.barImage} />}
        </TouchableOpacity>
      </View>
      {showQR ? (
        <View style={styles.qrContainer}>
          {/* <QRCode value="http://awesome.link.qr" size={200} /> */}
        </View>
      ) : (
        <View style={styles.copyContainer}>
          <View style={styles.copyTextContainer}>
            <Text style={styles.copyText}>PIX</Text>
          </View>
          <TouchableOpacity onPress={copyToClipboard} style={styles.copyButton}>
            <Text style={styles.copyButtonText}>Copiar código do pix</Text>
          </TouchableOpacity>
          <Text style={styles.copyButtonText}>Aguarde alguns instantes para que seja feita a confirmação do seu pagamento e liberação das suas tarefas!</Text>
        </View>
      )}
      <TouchableOpacity  style={styles.createButton}>
        <Text style={styles.createButtonText}>Aguardando pagamento</Text>
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
    height: '10%',
  },
  button: {
    backgroundColor: 'rgba(64, 142, 197, 0.3)',
    borderRadius: 32,
    paddingHorizontal: '6%',
    paddingVertical: '5%',
    justifyContent: 'center', 
    alignItems: 'center', 
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
  pixContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: '10%',
    marginBottom: '25%',
  },
  touchable: {
    flex: 1,
    alignItems: 'center',
  },
  barImage: {
    width: '100%',
    height: 5,
    marginTop: 5,
  },
  qrContainer: {
    alignItems: 'center',
    marginTop: '10%',
  },
  copyContainer: {
    width: '100%',
    borderRadius: 10,
    marginTop: '10%',
  },
  copyTextContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 20,
    borderRadius: 16,
    marginBottom: '5%',
  },
  copyText: {
    color: 'rgba(255, 255, 255, 0.54)',
    fontSize: 16,
    textAlign: 'center',
  },
  copyButton: {
    backgroundColor: 'rgba(39, 32, 126, 1)',
    borderRadius: 32,
    paddingVertical: 10,
    marginBottom: '5%',
  },
  copyButtonText: {
    color: 'white',
    fontSize: 16,
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
    marginTop: '50%',
  },
  createButtonText: {
    color: 'white',
    marginRight: 10,
  },
});

export default QrCodeScreen;
