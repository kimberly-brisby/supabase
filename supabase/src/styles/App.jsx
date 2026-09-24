import { useState } from 'react'
import MainLayout from "./layouts/MainLayout.jsx";
import TaskList from "./components/TaskList.jsx";
import AuthForm from "./components/AuthForm.jsx";
import { useAuth } from "./hooks/useAuth.jsx";
import './App.css'

export default function App() {

  const {
    session, 
    user,
    loading,
    signUp,
    signIn,
    signOut
  } = useAuth();

  const [signOutError,setSignOutError] = useState(``);

  const handleSignOut = async () => {
    tyy{
      setSignOutError(``);
      await signOUt();
    }catch(error){
      setSignOutError(error.message);
    }

    if(loading){
      return{
        <p>Restoring Session..</p>
      }
    }

  return (
    <MainLayout>
      <TaskList />
    </MainLayout>
  );

//   const button = document.getElementById('testBtn');
//   const result = document.getElementById('result');

//   const supabaseUrl = 'https://your-supabase-url.supabase.co';
//   const supabaseKey = 'sb_publishable_f8pbcJaGy5opNfrTRI7bSw_M1HD_RqW';

//   const supabaseClient = window.supabase.createClient(supabaseUrl, supabaseKey);

//   button.addEventListener('click', async () => {
//     result.innerText = "supabase client successfully connected";
//   });

//   const supabaseURL = 'https://your-supabase-url.supabase.co';
//   const supabaseKey = 'sb_publishable_f8pbcJaGy5opNfrTRI7bSw_M1HD_RqW';

//   const supabaseClient = window.supabase.createClient(supabaseURL, supabaseKey);

//   const signupBtn = document.getElementById('signupBtn');
//   const loginBtn = document.getElementById('loginBtn');
//   const logoutBtn = document.getElementById('logoutBtn');

//   signupBtn.addEventListener('click', async () => {
//     const email = document.getElementById('signupEmail').value;
//     const password = document.getElementById('signupPassword').value;
    
//     const {data, error} = await supabaseClient.auth.signUp({
//       email: email,
//       password: password,
//     });

//     if(erroe){
//       alert(error.message)
//     }else{
//       alert("user registered successfully!")  
//     }

//     loginBtn.addEventListener('click', async () => {
//       const email = document.getElementById('loginEmail').value;
//       const password = document.getElementById('loginPassword').value;
      
//       const {data, error} = await supabaseClient.auth.signInWithPassword({
//         email: email,
//         password: password,
//       });

//       if(error){
//         alert(error.message)
//       }else{
//         document.getElementById("welcome").innerText = "Welcome back" + email;
//       }
// } 
   
