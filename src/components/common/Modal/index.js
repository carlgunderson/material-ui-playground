import React from 'react'
import { useSelector } from 'react-redux'

import { selectModalName, selectModalData } from '../../redux/selectors'
import ModalContainer from './ModalContainer'
import RedirectContactModal from '../../contact-redirect-queue/modals/RedirectContactModal'

const Modal = () => {
	const name = useSelector(selectModalName)
	const data = useSelector(selectModalData)
	let modal = null

	switch(name) {
		case 'redirect-contact-modal':
			modal = <RedirectContactModal data={ data } />
			break
		default:
			modal = null
			break
	}

	return (
		<ModalContainer title={ data && data.title }>
			{ modal }
		</ModalContainer>
	)
}

export default Modal