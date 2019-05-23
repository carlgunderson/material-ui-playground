import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Fade from '@material-ui/core/Fade'

import { fetchJobIds } from '../../redux/actions'
import { selectJobIds, selectHackerNewsProcessing } from '../../redux/selectors'
import Link from '../common/Link'

const JobsPage = ({}) => {
	const dispatch = useDispatch()
	const getJobIds = () => dispatch(fetchJobIds())

	useEffect(() => {
		getJobIds()
			.then(res => console.log('got some job IDs', res))
	}, [])

	const jobIds = useSelector(selectJobIds)
	const hnProcessing = useSelector(selectHackerNewsProcessing)

	return (
		<Fade in>
			<Container>
				<div style={{ textAlign: 'center' }}>
					<nav style={{ marginBottom: '3em', cursor: 'default' }}>
						<Link to='/' nav exact activeStyle={{ color: 'green' }}>Home</Link>
						&nbsp;|&nbsp;
						<Link to='/jobs' nav>Jobs</Link>
						&nbsp;|&nbsp;
						<Link to='/music' nav>Music</Link>
					</nav>
					{
						hnProcessing &&
						<Typography variant='subtitle1'>Processing async request</Typography>
					}
					{
						jobIds &&
						<Typography>Jobs data loaded.<br />{ JSON.stringify(jobIds, null, 2) }</Typography>
					}
				</div>
			</Container>
		</Fade>
	)
}

export default JobsPage