import React from 'react'
import { useSelector } from 'react-redux'

import { selectModalName, selectModalData } from '../../redux/selectors'
import ExampleModal from './ExampleModal'
import ModalContainer from './ModalContainer'

const ModalRoot = () => {
	const name = useSelector(selectModalName)
	const data = useSelector(selectModalData)
	let modal = null

	switch(name) {
		case 'example':
			modal = <ExampleModal data={ data } />
			break
		default:
			modal = null
			break
	}

	return (
		<ModalContainer>
			{ modal }
		</ModalContainer>
	)
}

export default ModalRoot