import { Route, Switch, Redirect } from 'react-router-dom'
import ActivationSuccess from './components/ActivationSuccess/ActivationSuccess'
import SignupSuccessMessage from './components/Signup-success-message/Signup-success-message'
import AuthForm from './components/AuthForm-form/AuthForm-form';
import ResetPasswordForm from './components/ResetPasswordForm/ResetPasswordForm'

function App() {
    return (
        <Switch>
            <Route path="/auth">
                <AuthForm />
            </Route>
            <Route exact path="/activation/success/:link">
                <ActivationSuccess />
            </Route>
            <Route exact path="/resetPassword/:link">
                <ResetPasswordForm />
            </Route>
            <Route exact path="/signUp/success">
                <SignupSuccessMessage />
            </Route>
        </Switch>
    )
}

export default App
