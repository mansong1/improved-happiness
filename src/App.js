import Home from './Home';
import GestureRecognition from './GestureRecognition';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"  component={Home} />
        <Route exact path="/gesture-recognition" component={GestureRecognition} />
      </Switch>
    </Router>
  );
}

export default App;