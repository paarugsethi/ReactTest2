import { Route, Switch } from "react-router-dom";
import Checkout from "../Components/Checkout";
import Homepage from "../Components/HomePage";

function Routes () {
    return (
        <Switch>
            <Route exact path="/">
                <Homepage/>
            </Route>
            <Route exact path="/checkout">
                <Checkout/>
            </Route>
        </Switch>
    )
}

export default Routes;