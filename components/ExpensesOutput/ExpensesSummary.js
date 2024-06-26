import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scaling";
import { GlobalStyles } from "../../constants/styles";

export default function ExpensesSummary({ expenses, periodName }) {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.period}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: horizontalScale(8),
    paddingVertical: verticalScale(8),
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  period: {
    fontSize: scaleFontSize(12),
    color: GlobalStyles.colors.primary400,
  },
  sum: {
    fontSize: scaleFontSize(16),
    fontWeight: "bold",
    color: GlobalStyles.colors.primary500,
  },
});
