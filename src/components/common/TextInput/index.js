import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'formik'
import { TextField as FormikMuiTextField } from 'formik-material-ui'
import { makeStyles } from '@material-ui/core/styles'
import MuiTextField from '@material-ui/core/TextField'

const useStyles = makeStyles(theme => ({
	shortInput: {
		paddingTop: '10.5px',
		paddingBottom: '10.5px',
	},
	shortInputLabel: {
		transform: 'translate(14px, 12px) scale(1)',
	},
}))

const TextInput = ({
	field,
	inputProps,
	label,
	name,
	onChange,
	placeholder = '',
	short,
	type = 'text',
	variant = 'outlined',
	...props
}) => {
	const classes = useStyles()

	return field
		? <Field
				component={ FormikMuiTextField }
				name={ name }
				label={ label }
				type={ type }
				placeholder={ placeholder }
				onChange={ onChange }
				variant={ variant }
				InputProps={{
					...inputProps,
					classes: {
						input: short && !props.multiline ? classes.shortInput : null,
						multiline: short && props.multiline ? classes.shortInput : null,
					}
				}}
				InputLabelProps={{
					classes: {
						root: short ? classes.shortInputLabel : null,
					}
				}}
				{ ...props }
			/>
		: <MuiTextField
				{ ...props }
				name={ name }
				label={ label }
				type={ type }
				placeholder={ placeholder }
				onChange={ onChange }
				variant={ variant }
				InputProps={{
					...inputProps,
					classes: {
						input: short && !props.multiline ? classes.shortInput : null,
						multiline: short && props.multiline ? classes.shortInput : null,
					}
				}}
				InputLabelProps={{
					classes: {
						root: short ? classes.shortInputLabel : null,
					}
				}}
			/>
}

TextInput.propTypes = {
	label: PropTypes.string,
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	short: PropTypes.bool,
	type: PropTypes.string,
	value: PropTypes.string,
	variant: PropTypes.oneOf(['filled', 'outlined', 'standard']),
}

export default TextInput