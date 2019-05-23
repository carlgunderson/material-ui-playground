import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Fade from '@material-ui/core/Fade'

import { requireArtist } from '../../redux/actions'
import Button from '../common/Button'
import Link from '../common/Link'
import TextInput from '../common/TextInput'

const MusicPage = ({}) => {
	const dispatch = useDispatch()
	const getArtist = artist => dispatch(requireArtist(artist))

	const [artist, setArtist] = useState('')
	const artistData = useSelector(state => state.music.artists[artist])

	return (
		<Fade in>
			<Container>
				<Grid container spacing={ 2 }>
					<Grid item xs={ 12 }>
						<div style={{ textAlign: 'center' }}>
							<nav style={{ marginBottom: '3em', cursor: 'default' }}>
								<Link to='/' nav exact activeStyle={{ color: 'green' }}>Home</Link>
								&nbsp;|&nbsp;
								<Link to='/jobs' nav>Jobs</Link>
								&nbsp;|&nbsp;
								<Link to='/music' nav>Music</Link>
							</nav>
							<p>Current artist: { artist || 'none' }</p>
							<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
								<TextInput
									name='artist'
									placeholder='Search for an artist'
									onChange={ e => setArtist(e.target.value) }
									// Props can be passed without being explicitly defined in the component
									maxLength={ 40 }
								/>
								<span style={{ marginLeft: '1em' }}>
									<Button onClick={ () => getArtist(artist) }>Get artist</Button>
								</span>
							</div>
							{
								artistData && <p>{ artistData.primaryGenreName }</p>
							}
						</div>
					</Grid>
				</Grid>
			</Container>
		</Fade>
	)
}

export default MusicPage