import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Accueil from './pages/Accueil';
import Organigrames from './pages/Organigrames';
import Partenaires from './pages/Partenaires';
import Communes from './pages/Communes';
import NoMatch from './pages/NoMatch';

import './App.css';

function App() {
  return (
   <React.Fragment>
    <Router>
        <Routes>
            <Route exact path="/" element={<Accueil/>}/>
            <Route  path="/organigrames" element={<Organigrames/>}/>
            <Route  path="/partenaires" element={<Partenaires/>}/>
            <Route  path="/communes" element={<Communes/>}/>
            <Route element={NoMatch}/>
        </Routes>
      </Router>
   </React.Fragment>
);
}

export default App;
