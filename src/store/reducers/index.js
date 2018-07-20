import { combineReducers } from 'redux';
import gameReducer from './game';


const reducers = combineReducers({
	game: gameReducer
});


export default reducers;