import React from 'react'
import PropTypes from 'prop-types'
import MuiButton from '@material-ui/core/Button'

const styles = {
	button: {
		
	},
}

const Button = ({
	children,
	color = 'primary',
	onClick,
	type = 'button',
	value,
	variant = 'contained',
	...props
}) => (
	<MuiButton
		{ ...props }
		type={ type }
		color={ color }
		onClick={ onClick }
		value={ value }
		variant={ variant }
		style={ styles.button }
	>
		{ children }
	</MuiButton>
)

Button.propTypes = {
	children: PropTypes.node,
	color: PropTypes.string,
	onClick: PropTypes.func.isRequired,
	type: PropTypes.string,
	value: PropTypes.string,
	variant: PropTypes.string,
}

export default Button