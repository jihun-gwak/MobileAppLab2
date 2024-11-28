import { View } from "react-native";
import ToDoList from "./ToDoList";
import ToDoForm from "./toDoForm";
import { useState } from "react";

export default function Page() {
  const toDoList = ["Do laundry", "Go to gym", "Walk dog"];

  const [tasks, setTasks] = useState("");

  const addTask = (taskText) => {
    setTasks([...tasks, taskText]);
  };

  return (
    <View>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
    </View>
  );
}
