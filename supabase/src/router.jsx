import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import signup from "./components/signUp";
import signIn from "./components/signIn";
import signOut from "./components/signOut";
import dashboard from "./components/dashboard";

export const router = createBrowserRouter([
    {path:"/", element:<App />},
     {path:"/signUp", element:<signUp/>},
      {path:"/signIn", element:<signIn />},
       {path:"/signOut", element:<signOut />},
       {path:"/dashboard", element:<dashboard />},
]);