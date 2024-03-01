import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  TextInput,
  FlatList,
} from "react-native";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (!todo) return;
    setTodos([...todos, { id: Date.now(), text: todo }]);
    setTodo("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Todo List in Native</Text>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={(text) => setTodo(text)}
          value={todo}
          placeholder="Enter a task"
          style={styles.input}
        />
        <TouchableOpacity onPress={handleAddTodo}>
          <Text style={styles.button}>Go</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={todos}
          renderItem={({ item }) => <Text>{item.text}</Text>}
          keyExtractor={(item) => item.id.toSring}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#e6f0ff",
  },
  heading: {
    marginVertical: 10,
    fontSize: 30,
    fontWeight: "700",
  },
  inputContainer: {
    flexDirection: "row",
    marginHorizontal: 10,
    alignItems: "center",
  },
  input: {
    flex: 1,
    backgroundColor: "white",
    shadowColor: "black",
    elevation: 10,
    marginRight: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
  },
  button: {
    padding: 13,
    backgroundColor: "white",
    borderRadius: 50,
    elevation: 10,
  },
});
