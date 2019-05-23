import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MuiSnackbar from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'

import { hideSnackbar } from '../../redux/actions'
import { selectSnackbarContent, selectSnackbarShowing } from '../../redux/selectors'

const Snackbar = () => {
	const dispatch = useDispatch()
	const content = useSelector(selectSnackbarContent)
	const isShowing = useSelector(selectSnackbarShowing)
	const handleClose = () => dispatch(hideSnackbar())

	return (
		<MuiSnackbar
			anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
			open={ isShowing }
			autoHideDuration={ 5000 }
			onClose={ handleClose }
		>
			<SnackbarContent message={ content } />
		</MuiSnackbar>
	)
}

export default Snackbar