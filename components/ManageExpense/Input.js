import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scaling";
import { GlobalStyles } from "../../constants/styles";

export default function Input({ label, invalid, textInputConfig, style }) {
  let inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  if (invalid) {
    inputStyles.push(styles.inputInvalid);
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>{label}</Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: horizontalScale(4),
    marginVertical: verticalScale(8),
  },
  label: {
    fontSize: scaleFontSize(12),
    color: GlobalStyles.colors.primary100,
    marginBottom: verticalScale(4),
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    paddingHorizontal: horizontalScale(6),
    paddingVertical: verticalScale(6),
    borderRadius: 6,
    fontSize: scaleFontSize(18),
    color: GlobalStyles.colors.primary700,
  },
  inputMultiline: {
    minHeight: verticalScale(100),
    textAlignVertical: "top",
  },
  invalidLabel: {
    color: GlobalStyles.colors.error500,
  },
  invalidInput: {
    backgroundColor: GlobalStyles.colors.error500,
    borderColor: GlobalStyles.colors.error500,
  },
});
