import { View } from "react-native";
import ToDoList from "./ToDoList";
import ToDoForm from "./toDoForm";

export default function Page() {
  return (
    <View>
      <ToDoList></ToDoList>
      <ToDoForm></ToDoForm>
    </View>
  );
}
