import {useCallback, useEffect, useState} from 'react';
import {supabase} from '../supabaseClient';

function useTask(){
    const [tasks, setTasks] = useState([]);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState(null);

    const loadTasks = useCallback(async () => {-
},[]{
    @params {string}title

}

const addTask = useCallback(async (title) => {

},[]);

@params {number} id
@params {boolean} isComlete

const toogleTask = useCallback(async (id, isComplete) => {
},[]);

@params {number} id

const deleteTask = useCallback(async (id) => {
},[]);

useEffect(() => {-
},[loadTasks]);

useEffect[() => {-
},[]);

retutrn {
    tasks, 
    loading, 
    error,  
    addTask, 
    toogleTask, 
    deleteTask
};