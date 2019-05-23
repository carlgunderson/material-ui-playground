import { combineReducers } from 'redux'

import drawerReducer from './modules/drawer'
import hackerNewsReducer from './modules/hackerNews'
import modalReducer from './modules/modal'
import musicReducer from './modules/music'
import snackbarReducer from './modules/snackbar'

export default combineReducers({
	drawer: drawerReducer,
	hackerNews: hackerNewsReducer,
	modal: modalReducer,
	music: musicReducer,
	snackbar: snackbarReducer,
})