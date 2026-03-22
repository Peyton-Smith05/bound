import { StyleSheet, Text, View } from "react-native";

export default function ListsDetail() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={styles.text}>Hello Lists Detail!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'DMSerifText-Italic',
    fontSize: 48,
  }
});
