import {useEffect, useState} from 'react';
import { supabase } from '../supabaseClient';

function useAuth(){
    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);
}

export default useAuth;