import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './utils/registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './store/reducers';
import sagas from './store/sagas';
import './styles/global';


const sagaMiddleware = createSagaMiddleware();
const useReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const middleware = applyMiddleware(sagaMiddleware);
const store = createStore(reducers, useReduxDevTools, middleware);


for (const saga of Object.values(sagas)) {
	sagaMiddleware.run(saga);
}


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root')
);


registerServiceWorker();