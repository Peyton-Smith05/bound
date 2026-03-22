import { StyleSheet, Text, View } from "react-native";

export default function QuotesDetail() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={styles.text}>Hello Quotes Detail!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'DMSerifText-Italic',
    fontSize: 48,
  }
});
