import { Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scaling";
import { GlobalStyles } from "../../constants/styles";
import { getFormattedDate } from "../../uitls/date";

export default function ExpenseItem({ id, description, amount, date }) {
  const navigation = useNavigation();
  function expensePressHandler() {
    navigation.navigate("ManageExpense", {
      expenseId: id,
    });
  }

  return (
    <Pressable onPress={expensePressHandler} style={({ pressed }) => pressed && styles.pressed}>
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>{description}</Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  expenseItem: {
    paddingHorizontal: horizontalScale(12),
    paddingVertical: verticalScale(12),
    marginVertical: verticalScale(8),
    backgroundColor: GlobalStyles.colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  description: {
    fontSize: scaleFontSize(16),
    marginBottom: verticalScale(4),
    fontWeight: "bold",
  },
  amountContainer: {
    paddingHorizontal: horizontalScale(12),
    paddingVertical: verticalScale(4),
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    minWidth: horizontalScale(80),
  },
  amount: {
    color: GlobalStyles.colors.primary500,
    fontWeight: "bold",
  },
});
