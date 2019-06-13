import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import theme from '../../utils/themeUtil'
import Drawer from '../Drawer'
import Footer from '../Footer'
import Header from '../Header'
import HomePage from '../HomePage'
import JobsPage from '../JobsPage'
import Modal from '../common/Modal'
import MusicPage from '../MusicPage'
import Snackbar from '../Snackbar'

const App = () => (
	<Router>
		<ThemeProvider theme={ theme }>
			<CssBaseline />
			<Header />
			<main style={{ width: '100vw', height: 'calc(100vh - 64px)', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f7f7f7' }}>
				<Switch>
					<Route exact path='/' component={ HomePage } />
					<Route path='/jobs' component={ JobsPage } />
					<Route path='/music' component={ MusicPage } />
				</Switch>
			</main>
			<Footer />
			<Drawer />
			<Modal />
			<Snackbar />
		</ThemeProvider>
	</Router>
)

export default App