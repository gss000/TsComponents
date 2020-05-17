import React from 'react';
import {
  BrowserRouter,
  // HashRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Hello from './pages/Hello/Hello';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path='/hello' component={Hello}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
