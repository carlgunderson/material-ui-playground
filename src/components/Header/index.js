import React from 'react'
import { useDispatch } from 'react-redux'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import Badge from '@material-ui/core/Badge'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MailIcon from '@material-ui/icons/Mail'
import NotificationsIcon from '@material-ui/icons/Notifications'

import { openDrawer } from '../../redux/actions'
import useStyles from './styles'

const Header = () => {
	const dispatch = useDispatch()
	const toggleDrawer = () => dispatch(openDrawer())
	const classes = useStyles()
	const [anchorEl, setAnchorEl] = React.useState(null)

	const isMenuOpen = Boolean(anchorEl)

	const handleMenuClose = () => setAnchorEl(null)

	return (
		<div className={ classes.grow }>
			<AppBar position='static' classes={{ colorPrimary: classes.bg }}>
				<Toolbar>
					<IconButton
						edge='start'
						className={ classes.menuButton }
						color='inherit'
						aria-label='Open drawer'
						onClick={ toggleDrawer }
					>
						<MenuIcon />
					</IconButton>
					<Typography variant='h6' noWrap>App</Typography>
					<div className={ classes.search }>
						<div className={ classes.searchIcon }>
							<SearchIcon />
						</div>
						<InputBase
							placeholder='Search…'
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput,
							}}
						/>
					</div>
					<div className={ classes.grow } />
					<div className={ classes.flexContainer }>
						<IconButton color='inherit'>
							<Badge badgeContent={ 4 } color='secondary'>
								<MailIcon />
							</Badge>
						</IconButton>
						<IconButton color='inherit'>
							<Badge badgeContent={ 17 } color='secondary'>
								<NotificationsIcon />
							</Badge>
						</IconButton>
						<IconButton
							edge='end'
							aria-owns={ isMenuOpen ? 'material-appbar' : undefined }
							aria-haspopup='true'
							onClick={ e => setAnchorEl(e.currentTarget) }
							color='inherit'
						>
							<AccountCircle />
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
			<Menu
				anchorEl={ anchorEl }
				anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
				transformOrigin={{ vertical: 'top', horizontal: 'right' }}
				open={ isMenuOpen }
				onClose={ handleMenuClose }
			>
				<MenuItem onClick={ handleMenuClose }>Profile</MenuItem>
				<MenuItem onClick={ handleMenuClose }>My account</MenuItem>
			</Menu>
		</div>
	)
}

export default Header