import "./App.css";
import Login from "./pages/loginPage";
import Admin from "./pages/adminpanelPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Router>
    </div>
  );
}

export default App;
