import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

type TodoItem = {
  id: number;
  name: string;
  priorityLevel: string;
  isCompleted: boolean;
  date: number;
};

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<TodoItem[]>([]);

  console.log("This is :   ", todo);

  // this function adds a todo item to the list
  const handleTodoAdd = () => {
    const newTodo = {
      id: Math.random(),
      name: todo,
      priorityLevel: "Medium",
      isCompleted: false,
      date: new Date().getDate(),
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <SafeAreaView
      style={{ backgroundColor: "white", flex: 1, paddingHorizontal: 20 }}
    >
      <TextInput
        value={todo}
        onChangeText={(text) => setTodo(text)}
        placeholder="Enter todo item"
        style={{
          borderWidth: 1,
          padding: 20,
          borderRadius: 10,
          borderColor: "gray",
          fontSize: 18,
        }}
      />

      <TouchableOpacity onPress={() => handleTodoAdd()}>
        <Text
          style={{
            backgroundColor: "#007AFF",
            color: "white",
            padding: 20,
            borderRadius: 10,
            textAlign: "center",
            fontSize: 18,
            marginTop: 20,
          }}
        >
          Add Todo
        </Text>
      </TouchableOpacity>

      <View>
        {todos.map((item) => (
          <View key={item.id}>
            <Text>{item.name}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default TodoList;
