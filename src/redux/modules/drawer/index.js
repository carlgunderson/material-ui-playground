export const OPEN_DRAWER = 'OPEN_DRAWER'

export const openDrawer = () => (dispatch, getState) => {
	dispatch({ type: OPEN_DRAWER })
}

export const CLOSE_DRAWER = 'CLOSE_DRAWER'

export const closeDrawer = () => (dispatch, getState) => {
	dispatch({ type: CLOSE_DRAWER })
}

const DEFAULT_STATE = {
	isOpen: false,
}

const drawerReducer = (state = DEFAULT_STATE, action) => {
	switch(action.type) {
		case OPEN_DRAWER:
			return {
				isOpen: true,
			}
		case CLOSE_DRAWER:
			return DEFAULT_STATE
		default:
			return state
	}
}

export default drawerReducer

export const selectDrawerOpen = state => state.drawer.isOpen
