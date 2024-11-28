import { View, StyleSheet, Button, TextInput } from "react-native";
import React, { useState } from "react";

const ToDoForm = ({ addTask }) => {
  const [taskText, setTaskText] = useState("");

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={(text) => setTaskText(text)}
        value={taskText}
      />
      <Button title="Add" onPress={() => addTask(taskText)} />
    </View>
  );
};

export default ToDoForm;
const styles = StyleSheet.create({
  taskText: {
    fontSize: 16,
  },
  form: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});
