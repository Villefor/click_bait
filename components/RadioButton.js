import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export function RadioButton({ selected, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={[styles.outerCircle, selected && styles.selectedOuterCircle]}>
        {selected && <View style={styles.innerCircle} />}
      </View>
      <Text style={styles.label}>Concordo com os termos</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  outerCircle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  selectedOuterCircle: {
    borderColor: '#000',
  },
  innerCircle: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#000',
  },
  label: {
    color: 'white',
    marginLeft: 10,
  },
});

