import { Route, Switch } from "react-router-dom";

function Routes () {
    return (
        <Switch>
            <Route exact path="/">
                <h1>Home</h1>
            </Route>
            <Route exact path="/checkout">
                <h1>Checkout</h1>
            </Route>
        </Switch>
    )
}

export default Routes;