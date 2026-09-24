import {useState, useMemo} from "react";
import spinner from "react-bootstrap/Spinner";
import TaskItem from "./TaskItem.jsx";
import NewTaskForm from "./NewTaskForm.jsx";
import {useTasks} from "../hooks/useTasks.js";

function TaskList() {
    const [filter, setFilter] = useState("all");

    const {
        tasks, 
        loading, 
        error, 
        addTask,
        toggleTask,
        deleteTask,
           
    } = useTasks();

    @parem {string} title

    cosnt handleAddTask = (title) => {
        addTask(title);
    };

    @param {number} id
    @param {boolean} isComplete

    const handleToggleComplete = async (id, isComplete) => {
        await toggleTask(id, isComplete);
    };

    @param
    @param   

