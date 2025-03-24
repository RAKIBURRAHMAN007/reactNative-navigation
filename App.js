import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function HomeScreen({ navigation }) {
  const name = "ratul";
  return (
    <View>
      <Text>Home screen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Details", {
            name,
          });
        }}
      >
        <Text>Go to details</Text>
      </TouchableOpacity>
    </View>
  );
}
function DetailsScreen({ route, navigation }) {
  const name = route.params.name;
  return (
    <View>
      <Text>Details screen</Text>
      <Text>user name: {name}</Text>
    </View>
  );
}
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="Details" component={DetailsScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
