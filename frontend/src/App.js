import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './containers/Home'
import About from './containers/About'
import Contact from './containers/Contact'

import Signin from './containers/Signin'
import SignUp from './containers/SignUp' 

import './App.css';
import Layout from './hocs/Layout'
import { Provider } from 'react-redux';
import Store from './Store'

const App = () => (
        <Router>
          <Layout>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/signin" element={<Signin />} />
              <Route exact path="/signup" element={<SignUp />} />
            </Routes>
        </Layout>
      </Router> 
);

export default App;
