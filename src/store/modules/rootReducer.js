import { combineReducers } from 'redux';

import favorities from './favorities/reducer';
import properties from './properties/reducer';

export default combineReducers({ favorities, properties });
