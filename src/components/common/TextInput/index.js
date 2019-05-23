import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'

const styles = {
	input: {
		
	},
}

const TextInput = ({
	name,
	onChange,
	placeholder = '',
	type = 'text',
	value,
	variant = 'outlined',
	...props // Acts as a pass-through for any other props that can be attached to the wrapped component, e.g. `maxLength`
}) => (
	<TextField
		{ ...props }
		type={ type }
		placeholder={ placeholder }
		onChange={ onChange }
		value={ value }
		variant={ variant }
		style={ styles.input }
	/>
)

TextInput.propTypes = {
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	type: PropTypes.string,
	value: PropTypes.string,
	variant: PropTypes.string,
}

export default TextInput