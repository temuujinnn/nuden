import "./App.css";
import Login from "../loginPage";
import Admin from "../adminpanelPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route exact path="/">
          <Login />
        </Route>
      </Router>
    </div>
  );
}

export default App;
