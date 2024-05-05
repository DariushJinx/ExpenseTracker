import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { horizontalScale, verticalScale } from "../../assets/styles/scaling";

export default function IconButton({ icon, size, color, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => {
        pressed && styles.pressed;
      }}
    >
      <View style={styles.buttonContainer}>
        <Ionicons name={icon} size={size} color={color} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    paddingHorizontal: horizontalScale(6),
    paddingVertical: verticalScale(6),
    marginHorizontal: horizontalScale(8),
    marginVertical: verticalScale(2),
  },
  pressed: {
    opacity: 0.75,
  },
});
