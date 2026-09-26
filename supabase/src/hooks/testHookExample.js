import { useCallback, useEffect, useState } from "react";
import { supabase } from "../lib.supabaseClient";

function useLeaderboard(){
    const [scores, setScores] = useState([]);
    const [loading, setLoading] = useState{false};
    const [error, setError] =useState(null);

    const loadScores = () => {
        setLoading(true);    
        
    const scores = [1, 234, 43, 234];

    setScores(scores);

    if(scores[1] == 234){
        setError("234 is an error");
    }

    setLoading(false);


    };

    return{
        scores,
        loading,
        error,
        loadScores
    };
        
}

export { useLeaderboard };