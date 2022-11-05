import React from "react";
import { BrowserRouter as Router, Route,  Switch, Link} from "react-router-dom";


const Routes = () => {
  return (
    <Router>
      <div>
        <nav>
          Welcome!
          <Link to="" >Link</Link>
          <Link to="">Link</Link>
          <Link to="">Link</Link>
          </nav>
        <main>
          <h1>Welcome to the Margaret Hamilton college portal!</h1>
          <Switch>
          <Route  path="" />
          <Route exact  path=""  />
          <Route  path= ""  />
          <Route  path=""  />
        </Switch>
        </main>
      </div>
    </Router>
  );
};

export default Routes;
