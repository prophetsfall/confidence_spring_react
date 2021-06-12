import React from "react"
import { hot } from "react-hot-loader/root"
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import "regenerator-runtime/runtime"
import "../public/style.css"
import NavBar from "./NavBar"

const App = props => {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="grid-container no-bullet">
        <div className="text-center">
          <Switch>
            <Route exact path="/">
              <Redirect to="/confidence" />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App