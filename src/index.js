import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './utils/registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './store/reducers';
import sagas from './store/sagas';
import 'bootstrap/dist/css/bootstrap.min.css';


const sagaMiddleware = createSagaMiddleware();
const useReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const middleware = applyMiddleware(sagaMiddleware);
const store = createStore(reducers, useReduxDevTools, middleware);


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root')
);


for (const saga of sagas) {
	sagaMiddleware.run(saga);
}


registerServiceWorker();
