import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Searchbar } from "react-native-paper";
import { createStackNavigator } from '@react-navigation/stack';
import CreateProject from './CreateProject';

function ProjectScreen({ navigation }) {

  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <View style={styles.container}>
      <View style={styles.searchandbutton}>
        <View style={styles.searchbar}>
          <Searchbar placeholder="Search" onChangeText={onChangeSearch} value={searchQuery}/>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate("สร้างโครงการ")}>
            <Text style={{ color: "#FFF" }}>สร้างใหม่</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

function FCreateProject() {
  return (
    <CreateProject/>
  )
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={ProjectScreen} options={{ headerShown: false}}/>
      <Stack.Screen name="สร้างโครงการ" component={FCreateProject} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}

export default function Project() {
  return (
      <MyStack />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchandbutton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 30,
  },
  searchbar: {
    width: "75%",
    padding: 5,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: "25%",
    backgroundColor: "#058AFA",
    borderRadius: 5,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  text2: {
    color: "black",
    fontSize: 18,
    marginHorizontal: 20,
    marginBottom: 10,
    textAlign: "left",
    fontWeight: "bold",
  },
});
