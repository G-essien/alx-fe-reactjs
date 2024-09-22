import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* Add more routes as needed */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
