//Dependencies
import React from 'react';
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

//Routes
import AppRoutes from './routes'
const app=document.getElementById('app');

render(
<Router basename='/jogo'>
  <AppRoutes/>
</Router>  ,app);
