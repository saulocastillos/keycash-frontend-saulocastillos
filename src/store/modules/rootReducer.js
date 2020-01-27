import { combineReducers } from 'redux';

import favorites from './favorites/reducer';
import properties from './properties/reducer';

export default combineReducers({ favorites, properties });
