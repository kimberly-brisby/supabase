import { useState } from 'react'
import MainLayout from "./layouts/MainLayout.jsx";
import TaskList from "./components/TaskList.jsx";


export default function App() {

  return (
    <MainLayout>
      <TaskList />
    </MainLayout>
  );

}