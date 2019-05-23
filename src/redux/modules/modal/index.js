export const SHOW_MODAL = 'SHOW_MODAL'

export const showModal = (name, data) => (dispatch, getState) => {
	dispatch({ type: SHOW_MODAL, name, data })
}

export const HIDE_MODAL = 'HIDE_MODAL'

export const hideModal = () => (dispatch, getState) => {
	dispatch({ type: HIDE_MODAL })
}

const DEFAULT_STATE = {
	data: null,
	isOpen: false,
	name: '',
}

const modalReducer = (state = DEFAULT_STATE, action) => {
	switch(action.type) {
		case SHOW_MODAL:
			return {
				data: action.data,
				isOpen: true,
				name: action.name,
			}
		case HIDE_MODAL:
			return DEFAULT_STATE
		default:
			return state
	}
}

export default modalReducer

export const selectModalName = state => state.modal.name
export const selectModalOpen = state => state.modal.isOpen
export const selectModalData = state => state.modal.data