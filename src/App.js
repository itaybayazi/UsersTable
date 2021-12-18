import './App.css';
//import MyTable from './table/Table';
import React, { useMemo, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
//import { Link } from '@mui/material';
import PersonDetails from './person/personDetails';
import MainPage from './mainPage';



function App() {
  return (
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/:presion" component={ PersonDetails } />
          </Switch>
  )
}

export default (withRouter(App));
