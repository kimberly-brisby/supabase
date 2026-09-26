import {useEffect, useState} from 'react';
import {supabase} from '../supabaseClient';

function useAuth(){
    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {-
    }, []);

    const signUp = async (email, password) => {
    const {data,  error } = await supabase.auth.signUp({
        eamil,
        password,
    });
   

    if(error) throw error;

    return Data;

};

const signIn = async {} => {
    const { error } = awiat supabase.auth.signInEithPassword({
        email,
        password,
    });

}

return(
    session,
    user:session?.user ?? null,
    loading,
    signUp,
    signIn,
    signOut
);

}

export {useAuth};