import { StyleSheet, Text, View } from "react-native";

export default function QuoteDetail() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={styles.text}>Hello Quote Detail!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'DMSerifText-Italic',
    fontSize: 48,
  }
});
