import { View, Text, Button } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { useNavigation } from "@react-navigation/native";

function Home() {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View>
        <Text>Home Screen</Text>
        <Button
          title="Go to login"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </SafeAreaView>
  );
}

export default Home;
