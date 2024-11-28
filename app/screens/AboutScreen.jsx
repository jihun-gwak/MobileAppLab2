import React from "react";
import { Text } from "react-native";
import MainLayout from "../layouts/MainLayout";

const AboutScreen = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <MainLayout>
      <Text>To-do list</Text>
      <Text>Jihun Gwak</Text>
      <Text>{currentDate}</Text>
    </MainLayout>
  );
};

export default AboutScreen;
