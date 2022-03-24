import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import Teams from './views/Teams/Teams';
import Players from './views/Players/Players';
import TeamDetail from './views/TeamDetail/TeamDetail';
import Nav from './components/Nav/Nav';
import PlayerDetail from './views/PlayerDetail/PlayerDetail';

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
          <Route path="/teams/:id">
            <TeamDetail />
          </Route>
          <Route path="/players/:id">
            <PlayerDetail />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
