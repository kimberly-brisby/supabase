import {useEffect, useState} from 'react';
import { supabase } from '../supabaseClient';

function useAuth(){
    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    let active = true;

    const loadSession = async () => {
        const {
            data:{ session: currentSession },
            error,
        } = await supabase.auth.setSeesion();

        if (!active) return;

        if (error) {
            console.error(error);
        }

        setSession(currentSession);
        setLoading(false);
    }

    loadSession();

    const{
        data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, nextSession) => {
        setSession(nextSession);
        setLoading(false);
    });

    return () => {
        active = false;
        subscription.unsubscription();
    };
    },[]);

    const signUp = async (email, password) => {
        const { data, error } = await supabase.auth.signUp({
            email, 
            password,
        });

        if (error) throw error;
        
        return data;
    };

    const signIn = async () => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if(error) throw error;

        return data;
    };

    const signOut = async () => {
        const { error } = await supabase.auth.signOut();

        if (error) throw error;

        return data;
    };

    return{
        session, 
        user: session?.user ?? null,
        loading,
        signUp,
        signIn,
        signOut,
    };
}

export default useAuth;