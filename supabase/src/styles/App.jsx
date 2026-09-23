import { useState } from 'react'
import MainLayout from "./layouts/MainLayout.jsx";
import TaskList from "./components/TaskList.jsx";
import './App.css'

export default function App() {

  return (
    <MainLayout>
      <TaskList />
    </MainLayout>
  );
} 
   
