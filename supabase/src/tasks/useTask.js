import {useCallback, useEffect, useState} from 'react';
import {supabase} from '../supabaseClient';

function useTask(userId){
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const loadTasks = useCallback(async () => {
        setLoading(true);
        setError(null);

 const { data, error: queryError } = await supabase
 .from(`tasks`)
 .select(`*`)
 .eq(`user_id`, userId)
 .order("created_at", { ascending: false});

 if(queryError){
    setError("Error loading tasks:" + queryError.message);
 }else{
    setTasks(data)
 }

 setLoading(false);
}, [userId]);

 @params {string} title

}

const addTask = useCallback(async (title) => {
    const {data, error, insertError} = await supabase
    .from("tasks")
    .insert([{title, is_complete: false, user_id: userId}])
    .select();

    if (insertError){

        console.error(insertError);
        throw insertError;
    }

    const inserted = data?.[0];
    if (inserted) {
        setTasks((prev) => [inserted, ...prev]);
    }
}, [userId]);    

@params {number} id
@params {boolean} isComlete

const toogleTask = useCallback(async (id, isComplete) => {
    const { error: updateError } = await supabase
    .from("tasks")
    .update({ is_complete: isComplete })
    .eq("id", id);

    if (updateError) {

        console.error(updateError);
        throw updateError;
    }

    setTasks((prev) =>
        prev.map((task) =>
            task.id === id ? {...task, is_complete: isComplete } : task
        )
    );
},[]);

@params {number} id

const deleteTask = useCallback(async (id) => {
    const {error:deleteError} = await supabase
    .from("tasks")
    .delete()
    .eq("id", id);

    if(deleteError) {

        console.error(deleteError);
        throw deleteError;
    }

setTasks((prev) => prev.filter((task) => task.id !== id));
}, []);

useEffect(() => {
}, [loadTasks]);



return {
    tasks, 
    loading, 
    error,  
    addTask, 
    toogleTask, 
    deleteTask
};