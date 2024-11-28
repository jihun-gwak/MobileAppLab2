import { Button } from "react-native";
import React, { useState } from "react";
import ToDoList from "../components/ToDoList";
import ToDoForm from "../components/toDoForm";
import MainLayout from "../layouts/MainLayout";

const HomeScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    setTasks([...tasks, taskText]);
  };

  return (
    <MainLayout>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
      <Button
        title="Go to About"
        onPress={() => navigation.navigate("About")}
      />
    </MainLayout>
  );
};

export default HomeScreen;
