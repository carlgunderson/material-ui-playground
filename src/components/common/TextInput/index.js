import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import MuiTextField from '@material-ui/core/TextField'

const useStyles = makeStyles(theme => ({
	shortInput: {
		paddingTop: '10.5px',
		paddingBottom: '10.5px',
	},
}))

const TextInput = ({
	inputProps,
	name,
	onChange,
	placeholder = '',
	short,
	type = 'text',
	value,
	variant = 'outlined',
	...props
}) => {
	const classes = useStyles()

	return (
		<MuiTextField
			{ ...props }
			name={ name }
			type={ type }
			placeholder={ placeholder }
			onChange={ onChange }
			value={ value }
			variant={ variant }
			InputProps={{
				...inputProps,
				classes: {
					input: short && !props.multiline ? classes.shortInput : null,
					multiline: short && props.multiline ? classes.shortInput : null,
				}
			}}
		/>
	)
}

TextInput.propTypes = {
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	short: PropTypes.bool,
	type: PropTypes.string,
	value: PropTypes.string,
	variant: PropTypes.oneOf(['filled', 'outlined', 'standard']),
}

export default TextInput