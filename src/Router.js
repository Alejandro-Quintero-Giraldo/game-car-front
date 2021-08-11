import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import nombreComponente from 'ruta'


export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" componente={nombreComponente}/>
            </Switch>
        </BrowserRouter>
    );
}
