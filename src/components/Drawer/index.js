import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import MuiDrawer from '@material-ui/core/Drawer'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import MailIcon from '@material-ui/icons/Mail'

import { closeDrawer } from '../../redux/actions'
import { selectDrawerOpen } from '../../redux/selectors'
import Link from '../common/Link'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
	},
	drawer: {
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	appBar: {
		marginLeft: drawerWidth,
		[theme.breakpoints.up('sm')]: {
			width: `calc(100% - ${drawerWidth}px)`,
		},
	},
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
}))

const Drawer = () => {
	const dispatch = useDispatch()
	const isOpen = useSelector(selectDrawerOpen)
	const onClose = () => dispatch(closeDrawer())
	// const { container } = props
	const classes = useStyles()

	return (
		<MuiDrawer
			// container={ container }
			variant='temporary'
			open={ isOpen }
			onClose={ onClose }
			classes={{ paper: classes.drawerPaper }}
		>
			<div>
				<div className={ classes.toolbar } />
				<Divider />
				<List>
					<ListItem button>
						<ListItemText primary={ <Link to='/' unstyled style={{ display: 'block' }}>Home</Link> } />
					</ListItem>
					<ListItem button>
						<ListItemText primary={ <Link to='/calculator' unstyled style={{ display: 'block' }}>Calculator</Link> } />
					</ListItem>
					<ListItem button>
						<ListItemText primary={ <Link to='/music' unstyled style={{ display: 'block' }}>Music</Link> } />
					</ListItem>
					<ListItem button>
						<ListItemText primary={ <Link to='/jobs' unstyled style={{ display: 'block' }}>Jobs</Link> } />
					</ListItem>
				</List>
				<Divider />
			</div>
		</MuiDrawer>
	)
}

export default Drawer