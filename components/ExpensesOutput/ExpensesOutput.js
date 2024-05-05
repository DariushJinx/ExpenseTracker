import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scaling";
import { GlobalStyles } from "../../constants/styles";

export default function ExpensesOutput({ expenses, expensesPeriod, fallbackText }) {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>;

  if(expensesPeriod.length > 0){
    content = <ExpensesList expenses={expenses} />
  }

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: horizontalScale(24),
    paddingTop: verticalScale(24),
    paddingBottom: verticalScale(0),
    backgroundColor: GlobalStyles.colors.primary700,
  },
  infoText: {
    color: "white",
    fontSize: scaleFontSize(16),
    textAlign: "center",
    marginTop: verticalScale(32),
  },
});
