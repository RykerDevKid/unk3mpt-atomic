import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import {
  Main,
  Tools,
} from './app/index';

import {
  Navbar,
} from './components/index';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route exact path='/tools' element={<Tools />} />
      </Routes>
    </Router>
  );
}

export default App;