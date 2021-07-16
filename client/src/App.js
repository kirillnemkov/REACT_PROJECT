import { Route, Switch, Redirect } from 'react-router-dom'
import ActivationSuccess from './components/ActivationSuccess/ActivationSuccess'
import SignupSuccessMessage from './components/Signup-success-message/Signup-success-message'
import UserProfile from './components/UserProfile/UserProfile'
import './'


function App() {
    return (
        <>
        <UserProfile />
        <Switch>
            <Route exact path="/activation/success/:link">
                <ActivationSuccess />
            </Route>
            <Route exact path="/signUp/success">
                <SignupSuccessMessage />
            </Route>
        </Switch>
        </>
    )
}

export default App
