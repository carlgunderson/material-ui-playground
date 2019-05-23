import React from 'react'
import PropTypes from 'prop-types'
import { Link as RouterLink, NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
	base: {
		color: 'inherit',
		textDecoration: 'none',
		cursor: 'pointer',
	},
	link: {
		color: '#333',
		textDecoration: 'none',
		cursor: 'pointer',

		'&:hover': {
			textDecoration: 'underline',
		},
	},
	active: {

		'&:hover': {
			textDecoration: 'none',
		},
	},
}))

const Link = ({
	actionLink,
	activeStyle,
	children,
	exact = false,
	external = false,
	nav = false,
	onClick,
	target = '_self',
	to,
	unstyled = false,
	...props,
}) => {
	const classes = useStyles()

	return (
		external
		? <a { ...props } href={ to } onClick={ onClick } target={ target } className={ unstyled ? classes.base : classes.link }>
				{ children }
			</a>
		: actionLink
		? <span { ...props } onClick={ onClick } className={ unstyled ? classes.base : classes.link }>
				{ children }
			</span>
		: nav
		? <NavLink
				{ ...props }
				exact
				to={ to }
				onClick={ onClick }
				target={ target }
				className={ unstyled ? classes.base : classes.link }
				activeClassName={ classes.active }
				activeStyle={{ ...activeStyle, fontWeight: 'bold', cursor: 'default' }}
			>
				{ children }
			</NavLink>
		: <RouterLink { ...props } to={ to } onClick={ onClick } target={ target } className={ unstyled ? classes.base : classes.link }>
				{ children }
			</RouterLink>
	)
}

Link.propTypes = {
	actionLink: PropTypes.bool,
	activeStyle: PropTypes.object,
	children: PropTypes.node.isRequired,
	exact: PropTypes.bool,
	external: PropTypes.bool,
	nav: PropTypes.bool,
	onClick: PropTypes.func,
	target: PropTypes.oneOf(['_self', '_blank']),
	to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	unstyled: PropTypes.bool,
}

export default Link