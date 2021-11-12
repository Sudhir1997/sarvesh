import { BrowserRouter as Router, Route } from "react-router-dom";
import App from './App.js';
import Content from './content.js';
export default function RoutingFile(){
  return(
        <Router>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/carousel">
            <Content />
            </Route>
        </Router>
  )
}
