import { Route, Switch, Redirect } from 'react-router-dom'
import ActivationSuccess from './components/ActivationSuccess/ActivationSuccess'
import CardList from './components/CardList/CardList.jsx'
import SignupSuccessMessage from './components/Signup-success-message/Signup-success-message'

function App() {
    return (
      <CardList/>
        // <Switch>
        //     <Route exact path="/activation/success/:link">
        //         <ActivationSuccess />
        //     </Route>
        //     <Route exact path="/signUp/success">
        //         <SignupSuccessMessage />
        //     </Route>
        // </Switch>
    )
}

export default App
