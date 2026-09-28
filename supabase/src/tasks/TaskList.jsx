import {useState, useMemo} from "react";
import Spinner from "react-bootstrap/Spinner";
import TaskItem from "./TaskItem.jsx";
import NewTaskForm from "./NewTaskForm.jsx";
import { useTasks } from "./useTask.js"

function TaskList(userId) {
    const [filter, setFilter] = useState("all");

    const {
        tasks, 
        loading, 
        error, 
        addTask,
        toggleTask,
        deleteTask,       
    } = useTasks(userId);

    @parem {string} title

    const handleAddTask = (title) => {
        addTask(title);
    };

    @param {number} id
    @param {boolean} isComplete

    const handleToggleComplete = async (id, isComplete) => {
        await toggleTask(id, isComplete);
    };

    @param
    @param   

    export default TaskList;
