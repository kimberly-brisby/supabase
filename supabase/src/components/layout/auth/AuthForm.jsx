import { useState } from "react";

function AuthForm({ onSignIn, onSignUp }){
    const [mode, setMode] = useState(`sign-in`);
    const [email, setEmail] = useState(``);
    const [password, setPassword] = useState(``);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(``);

    const isSignUp = mode === `sign-up`;

    const handleSubmit = async (event) => {
        event.preventDefault();
        seySubmitting(true);
        setError(``);

        try{
            if (isSignUp) {
                await onSignUp(email, password);
            }else {
                await onSignIn(email, password);
            }
        }catch (authError) {
            setError(authError.message);
        }finally {
            setSubmitting(false);
        }
    };

    const changeMode = () => {
        setMode((currentMode) =>
            currentMode === `sign-up` ? `sign-in`,
    );
    setError(``);
    };

    return (
        <section className="auth-card">
            <h2>{isSignUp ? `Create account` : `Log in`}</h2>

            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input 
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                autocomplete="email"
                required
                />

                <label htmlFor="password">Password</label>
                <input
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                autocomplete={isSignUp ? `new-password` : `cuurent-password`}
                minLength={6}
                required
                />

                <button type="sumbit" disabled={submitting}>
                    {submitting
                    ? `Please wait..`
                    : isSignUp
                    ? `Create account`
                    : `log in`}
                </button>

                {error && <p role="alert">{error}</p>}
            </form>

            <button type="button" onClick={changeMode}>
                {isSignUp
                ?`Already have an account? Log in`
                : `Need an account? Register`}
            </button>
        </section>
    );
}

export default AuthForm;