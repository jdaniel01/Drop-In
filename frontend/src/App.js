import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Home from './components/Home';
import NewEvent from './components/Events/NewEvent';
import About from './components/About';
import Event from './components/Events';
import Location from './components/Locations';
import Profile from './components/Users';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/events/new">
            <NewEvent />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/events/:id">
            <Event/>
          </Route>
          <Route path='/locations/:id'>
            <Location/>
          </Route>
          <Route path='/users/:id'>
            <Profile/>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
