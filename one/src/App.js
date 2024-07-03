import React from 'react';
import { BrowserRouter as Router, Routes,Route, Switch } from 'react-router-dom';
import Header from './Hader';
import Home from './Home';
// import Dashboard from './DashBord';
import Profile from './Profile';
import Details from './Details';
import ProfileDetails from './ProfileDetails';
import "./App.css"
function App() {
  return (
    <Router>
      <div>
        <Header />
<Routes>
  <Route path="/" exact element={<Home/>} />
          {/* <Route path="/dashboard" component={<Dashboard/>} /> */}
          <Route path="/profile" element={<Profile/>} />
          <Route path="details" element={<Details/>} >
          
          
          </Route>
          <Route path="details/:id" element={<ProfileDetails/>}></Route>
</Routes>
        
        
      </div>
    </Router>
  );
}

export default App;
