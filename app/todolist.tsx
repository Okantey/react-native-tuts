import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import * as SecureStore from "expo-secure-store";

type TodoItem = {
  id: number;
  name: string;
  priorityLevel: string;
  isCompleted: boolean;
  date: number;
};

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<TodoItem[]>(() => {
    // function that checks secure store if there are any todos. if there is then it parses it else it just sets it to an empty array
    const storedTodos = SecureStore.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  // this function adds a todo item to the list
  const handleTodoAdd = async () => {
    const newTodo = {
      id: Math.random() * 50,
      name: todo,
      priorityLevel: "Low",
      isCompleted: false,
      date: new Date().getDate(),
    };
    console.log(newTodo);
    // update the existing todos array with the new one
    setTodos([...todos, newTodo]);
    // persist our todos in memory so we can access it later
    await SecureStore.setItemAsync(
      "todos",
      JSON.stringify([...todos, newTodo])
    );
    // clear the input field
    setTodo("");
  };

  // handle priority colors
  const handlePriority = (priority: string) => {
    switch (priority) {
      case "Low":
        return "green";
      case "Medium":
        return "yellow";
      case "High":
        return "red";
    }
  };

  // handle delete function
  const handleDelete = async (id: number) => {
    // returns a new array of todos without the todo item passed to the function
    const filteredTodos = todos.filter((item) => item.id !== id);
    //update the existing todos with the filtered one
    setTodos(filteredTodos);
    // persist the updated todos in memory
    await SecureStore.setItemAsync("todos", JSON.stringify(filteredTodos));
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
          <View
            key={item.id}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginVertical: 10,
            }}
          >
            <View>
              <Text style={{ fontSize: 18, fontWeight: "600" }}>
                {item.name}
              </Text>
              <Text style={{ color: handlePriority(item.priorityLevel) }}>
                {item.priorityLevel}
              </Text>
            </View>

            <Feather
              onPress={() => handleDelete(item.id)}
              name="trash"
              size={24}
              color={"red"}
            />
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default TodoList;
