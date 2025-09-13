import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';
import { COLORS } from '../../config/Constants';

interface InputProps extends TextInputProps {
  width?: string | number;
}

export const Input: React.FC<InputProps> = ({ width = '80%', style, ...props }) => {
  return (
    <TextInput
      style={[styles.input, { width }, style]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderColor: COLORS.PRIMARY,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#f9f9f9',
  },
});