import React from "react";
import { Switch, Route } from "react-router-dom";
import CharacterList from "./CharacterList";
import WelcomePage from "./WelcomePage";
import LocationsList from "./LocationsList";



export default function AppRouter() {
    return (
        <div className="ui botom attached segment active tab">
            <Switch>
                <Route path="/" exact component={WelcomePage} />
                <Route path="/ characters" component={CharacterList} />
                <Route path="/ locations" component={LocationsList} />
            </Switch>
        </div>
    );
}