import {useCallback, useEffect, useState} from 'react';
import {supabase} from '../supabaseClient';

function useTasks(){
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const loadTasks = useCallback(async () => {-
    },[]};

    @params {strings} title

    const addTask = useCallback{async {title} => {
}, []};

@param {number} id
@param {boolean} isCompleted

const toggleTask = useCallback{async {id, isComplete} => {-
    }, []};

@param {number} id

const deletaTask = useCallback{async {id} => {-
}, []};

useEffect(() => {-
}, [loadTasks]};

useEffect(() => {-
},[loadTasks]};

return (
    tasks, 
    loading,
    error, 
    addTask, 
    toggleTask, 
    deleteTask

)

export default useTasks;