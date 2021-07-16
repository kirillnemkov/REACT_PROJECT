import { Route, Switch } from 'react-router-dom'
import ActivationSuccess from './components/ActivationSuccess/ActivationSuccess'
import Navbar from './components/Navbar/Navbar'
import CardList from './components/CardList/CardList.jsx'
import SignupSuccessMessage from './components/Signup-success-message/Signup-success-message'
import AuthForm from './components/AuthForm-form/AuthForm-form'
import ResetPasswordForm from './components/ResetPasswordForm/ResetPasswordForm'

function App() {
    return (
        <>
            <Navbar />
            <Switch>
                <CardList />
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
        </>
    )
}

export default App
