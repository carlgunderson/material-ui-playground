import React from 'react'
import { useDispatch } from 'react-redux'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Fade from '@material-ui/core/Fade'

import { showModal, showSnackbar } from '../../redux/actions'
import Button from '../common/Button'
import Link from '../common/Link'

const HomePage = ({}) => {
	const dispatch = useDispatch()
	const showExampleModal = () => dispatch(showModal('example', { dataPoint1: true, dataPoint2: false }))
	const showSnackbarDemo = () => dispatch(showSnackbar())

	return (
		<Fade in>
			<Container>
				<div style={{ textAlign: 'center' }}>
					<nav style={{ marginBottom: '3em', cursor: 'default' }}>
						<Typography display='inline'>
							<Link to='/' nav exact activeStyle={{ color: 'green' }}>Home</Link>
						</Typography>
						&nbsp;|&nbsp;
						<Typography display='inline'>
							<Link to='/jobs' nav>Jobs</Link>
						</Typography>
						&nbsp;|&nbsp;
						<Typography display='inline'>
							<Link to='/music' nav>Music</Link>
						</Typography>
					</nav>
					<Button color='secondary' onClick={ showExampleModal }>Show example modal</Button>
					<Button variant='text' onClick={ showSnackbarDemo }>Show snackbar</Button>
				</div>
			</Container>
		</Fade>
	)
}

export default HomePage