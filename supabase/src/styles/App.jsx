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
    signOut,
  } = useAuth();

  const [signOutError, setSignOutError] = useState(``);

  const handleSignOut = async () => {
    try{
      setSignOutError(``);

      await SignOut();
    }catch (error) {
      setSignOutError(error.message);
    }
  };

  if(loading){
    return(
      <p>Restoring Session...</p>
    );
  }

  return(
    <MainLayout>
      {!user ? (
        <AuthForm 
        onSignIn={signIn}
        onSignup={signUp}
        />
      ) : (
        <>
        <div className="session-bar">
          <span>Sign in as {user.email}</span>

          <button type='button' onClick={handleSignOut}>
            Log out
          </button>

          {signOutError && <p role='alert'>{signOutError}</p>}
        </div>

        <TaskList userId={user.id} />
        </>
      )}
    </MainLayout>
  );
}
