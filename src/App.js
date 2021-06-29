import { UsersTile } from './UsersTile';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { UserDetails } from './UserDetails';
import React, { useEffect, useState } from 'react';
import { getUsers } from './api/api';
export const UserContext = React.createContext();
function App() {
  const [users, setUsers] = useState([]);
    useEffect(() => {
      getUsers().then(userData => setUsers(userData));
    }, [])
  
  return (
    
    <div>
      <Router>
        <Switch>
        <UserContext.Provider value={users}>
          <Route exact={true} path="/">
              <UsersTile  />
          </Route>
          <Route path="/userdetails/:email">
              <UserDetails  />
          </Route>
          </UserContext.Provider>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
