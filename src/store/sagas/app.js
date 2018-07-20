import { put, takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import appConfig from '../../config/app.json';
import * as appTypes from '../types/app';
import * as appActions from '../actions/app';
import * as gameActions from '../actions/game';


function* initApp(action) {
	yield put(appActions.clear());
	yield put(gameActions.clear());

	yield put(appActions.setEnv(appConfig.env));
	yield put(appActions.setName(appConfig.name));
	yield put(appActions.setVersion(appConfig.version));

	if (!!appConfig.delayLoading && appConfig.delayLoading > 0) {
		yield delay(appConfig.delayLoading)
	}

	yield put(appActions.setInitialized(true));
}


function* saga() {
	yield takeEvery(appTypes.INIT_APP, initApp);
}


export default saga;