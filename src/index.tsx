import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import Hello from './pages/Hello/Hello';

ReactDOM.render(
	<div className="App">
		<BrowserRouter>
			<Switch>
				<Route path="/hello" component={Hello} />
			</Switch>
		</BrowserRouter>
	</div>,
	document.getElementById('root') as HTMLElement
);
registerServiceWorker();
