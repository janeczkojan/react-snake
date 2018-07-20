import { actionTypeFactory } from '../../utils/store';


const createType = actionTypeFactory('game');

export const CLEAR = createType('clear');