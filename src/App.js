import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import Teams from './views/Teams/Teams';
import Players from './views/Players/Players';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/teams">
            <Teams />
          </Route>
          <Route exact path="/players">
            <Players />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
