import { View, Text, StyleSheet } from "react-native";

const Index = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text>Memo App</Text>
          <Text>ログアウト</Text>
        </View>
      </View>
      <View>
        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2024年3月12日 10:00</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2024年3月12日 10:00</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2024年3月12日 10:00</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
      </View>

      <View>
        <Text>+</Text>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
