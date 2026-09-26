import {useState, useMemo} from "react";
import spinner from "react-bootstrap/Spinner";
import TaskItem from "./TaskItem.jsx";
import NewTaskForm from "./NewTaskForm.jsx";
import {useTasks} from "../hooks/useTasks.js";

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

    cosnt handleAddTask = (title) => {
        addTask(title);
    };

    @param {number} id
    @param {boolean} isComplete

    const handleToggleComplete = async (id, isComplete) => {
        await toggleTask(id, isComplete);
    };

    @param {number} id

    const handleDeleteTask = async (id) => {
        deleteTask(id);

    };

    const totalTasks = useMemo(() => tasks.length, [tasks]);
    const completedTasks = useMemo(()=> tasks.filter((tasks) => tasks.
    is_complete).length, [tasks]);

    const visibleTasks = useMemo(() => tasks.filter(task))
 
      

    export default TaskList;
