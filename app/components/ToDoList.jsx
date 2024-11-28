import { View, Text, ScrollView, StyleSheet, Pressable } from "react-native";
import React from "react";

const ToDoList = ({ tasks }) => {
  return (
    <View>
      {tasks.length > 0 ? (
        <ScrollView>
          {tasks.map((task, index) => (
            <Pressable key={index}>
              <View style={styles.task}>
                <Text style={styles.taskText}>{task}</Text>
              </View>
            </Pressable>
          ))}
        </ScrollView>
      ) : (
        <Text>No tasks</Text>
      )}
    </View>
  );
};

export default ToDoList;

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  completed: {
    backgroundColor: "#e0e0e0",
  },
});
