import React from 'react';
import './App.css';
import {Route,Routes} from  'react-router-dom';
import Authentication from 'views/Authentication';
import { AUTH_PATH } from 'constant';

function App() {
  return (
    <Route path ={AUTH_PATH }  element={Authentication}/>
  );
}

export default App;
