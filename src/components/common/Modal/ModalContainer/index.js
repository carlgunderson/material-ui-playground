import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'

import { hideModal } from '../../../redux/actions'
import { selectModalOpen } from '../../../redux/selectors'
import Button from '../../Button'

const ModalContainer = ({ children, title }) => {
	const dispatch = useDispatch()
	const isOpen = useSelector(selectModalOpen)
	const onClose = () => dispatch(hideModal())

	return (
		<Dialog open={ isOpen } onClose={ onClose } aria-labelledby={ title }>
			{ title && <DialogTitle>{ title }</DialogTitle> }
			<DialogContent>
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
	title: PropTypes.string,
}

export default ModalContainer