import * as T from '../types/app';


export const clear = () => ({
	type: T.CLEAR
});


export const setName = (name = null) => ({
	type: T.SET_NAME,
	payload: name
});


export const setVersion = (version = null) => ({
	type: T.SET_VERSION,
	payload: version
});	


export const setEnv = (env = null) => ({
	type: T.SET_ENV,
	payload: env
});


export const setInitialized = (initialized = false) => ({
	type: T.SET_INITIALIZED,
	payload: initialized === true
});


export const initApp = () => ({
	type: T.INIT_APP
});