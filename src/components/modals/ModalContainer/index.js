import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

import { hideModal } from '../../../redux/actions'
import { selectModalOpen } from '../../../redux/selectors'
import Button from '../../common/Button'

const ModalContainer = ({ children }) => {
	const dispatch = useDispatch()
	const isOpen = useSelector(selectModalOpen)
	const onClose = () => dispatch(hideModal())

	return (
		<Dialog open={ isOpen } onClose={ onClose } aria-labelledby='name of modal'>
			<DialogTitle>This is the modal title</DialogTitle>
			<DialogContent>
				<DialogContentText>This is a Material-UI `Dialog`. Lots of different props to pass in and be configured here.</DialogContentText>
				{ children }
			</DialogContent>
			<DialogActions>
				<Button onClick={ onClose }>Disagree</Button>
				<Button color='secondary' onClick={ onClose }>Agree</Button>
			</DialogActions>
		</Dialog>
	)
}

ModalContainer.propTypes = {
	children: PropTypes.node,
}

export default ModalContainer