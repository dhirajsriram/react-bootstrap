import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./routes"

const App: React.FC = () => {
  return (
      <React.Suspense fallback="...loading">
      <Router>
      <Switch>
              {routes.map((route:any) => (
                <Route
                  key={route.path}
                  path={route.path}
                  render={(props: any) => (
                    <route.component {...props} />
                  )}
                />
              ))}
            </Switch>
      </Router>
      </React.Suspense>
  );
}

export default App;
