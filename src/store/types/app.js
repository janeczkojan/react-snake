import { actionTypeFactory } from '../../utils/store';


const createType = actionTypeFactory('app');

export const CLEAR = createType('clear');
export const SET_NAME = createType('set', 'name');
export const SET_VERSION = createType('set', 'version');
export const SET_ENV = createType('set', 'env');
export const SET_INITIALIZED = createType('set', 'initialized');
export const INIT_APP = createType('init', 'app');