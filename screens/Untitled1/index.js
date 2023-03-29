import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  YWcMtenC: {
    height: "60%",
    width: "60%",
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777",
    left: "60%",
    top: "60%"
  },
  UOcHYJyc: {
    width: "80%",
    height: "80%",
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    left: "80%",
    top: "80%"
  }
});
export default Untitled1;