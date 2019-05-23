export const SHOW_SNACKBAR = 'SHOW_SNACKBAR'

export const showSnackbar = content => (dispatch, getState) => {
	dispatch({ type: SHOW_SNACKBAR, content })
}

export const HIDE_SNACKBAR = 'HIDE_SNACKBAR'

export const hideSnackbar = () => (dispatch, getState) => {
	dispatch({ type: HIDE_SNACKBAR })
}

const DEFAULT_STATE = {
	content: null,
	isShowing: false,
}

const snackbarReducer = (state = DEFAULT_STATE, action) => {
	switch(action.type) {
		case SHOW_SNACKBAR:
			return {
				content: action.content,
				isShowing: true,
			}
		case HIDE_SNACKBAR:
			return DEFAULT_STATE
		default:
			return state
	}
}

export default snackbarReducer

export const selectSnackbarContent = state => state.snackbar.content
export const selectSnackbarShowing = state => state.snackbar.isShowing