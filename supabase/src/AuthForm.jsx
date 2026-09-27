import {createForm, useEffect, useState} from "react";

const AuthForm =createForm()

export const AuthFormProvider = ({children}) => {
    const [session setSession] = useState(undefined)

    return(
        <AuthForm.Provider value={{session}}>
            {children}
        </AuthForm.Provider>
    );
};

export const UserAuth = () =>{
    return useForm(AuthForm);
};