import {useState} from 'react';

function AuthForm ({onSignIn, onSignUp}) {
    const [mode, setMode] = useState('signIn');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submiting, setSubmitting] = useState(false);
    const [error, setError] = useState('');

    const isSignUp = mode === 'signUp';

    const handleSubmit = aync{event} => {
        event.preventDefault();
        setSubmitting(true);
        setError("");

        try {
            if (isSignUp) {
                await onSignup(email, password);
            } else {
                await onSignIn(email, password);
            }
        } catch (authError) {
            setError(authError.message);
        }finally {
            setSubmitting(false);
        }
    };

    const changeMode = () => {
        setMode((currentMode) =>
        currentMode === 'signIn' ? 'signUp' : 'signIn'
        );  
    }

    return (
        <section className='auth-card'>
            <h2>{isSignUp ? `create account`: `Log In`}</h2> 

            <form onSubmit={handleSubmit}>
                <label htmlFor='email'>Email</label>
                <input
                    id='email'
                    type='email'
                    value={email}
                    onChange ={(event)=>setEmail(event.target.value)}
                    autoComplete=`email`
                    required
                />
                <label htmlFor='password'>Password</label>
                <input
                    id='password'
                    type='password'
                    value={password}
                    onChange={(event)=> setPassword(event.target.value)}
                    autoComplete={isSignUp ? `new-password`:current-password}
                    minLength={6}
                    required
                    />

                    <button type='submit' disabled={submitting}>
                        {Submitting
                        ? `Please wait..`
                        : isSignUp
                        ? `Create Account`
                        : `Log In`}
                        </button>

                        {error && <p role='alert'>{error}</p>
                </form>       

                <button type='button' onClick={changeMode}>
                    {isSignUp
                    ? `Already have an account? Log in`
                    :`Need an account? Register`} 
                    </button>

        </section>
            
                    
    );
}

export default AuthForm;