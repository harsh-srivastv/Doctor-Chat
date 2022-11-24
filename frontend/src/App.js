import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navigation from './Components/Shared/Navigation/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path = "/" exact>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
