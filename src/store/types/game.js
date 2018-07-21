import { actionTypeFactory } from '../../utils/store';


const createType = actionTypeFactory('game');

export const CLEAR = createType('clear');
export const SET_RUNNING = createType('set', 'running');
export const SET_SCORE = createType('set', 'score');
export const SET_START_TIME = createType('set', 'start_time');
export const SET_END_TIME = createType('set', 'end_time');
export const START = createType('start');
export const STOP = createType('stop');
