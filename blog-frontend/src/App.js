import './App.css';
import Home from "./Home"
import Login from "./Login"
import Blogs from "./Blogs"
import Header from  "./Header"
import Markdown from "./Markdown"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {
  return (
    <Router>
    <div className="container">
      <Header />
      <div className="app">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/blogs" exact>
            <Blogs />
          </Route>
          <Router path="/markdown">
            <Markdown />
          </Router>
        </Switch>
      </div>
    </div>
    </Router>
        
  );
}

export default App;
