import React from 'react'
import { Formik, Form } from 'formik'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import AddIcon from '@material-ui/icons/AddBox'
import * as Yup from 'yup'

import Button from '../common/Button'
import TextInput from '../common/TextInput'

const ExampleForm = ({  }) => {

	const handleReset = () => {
		console.log('Resetting')
	}

	const handleSubmit = (values, actions) => {
		console.log('submitting', values, actions)
		// Call some Redux/API method
	}

	return (
		<Formik // Call some Redux/API method to get data for initial values
			initialValues={{ companyDisplayName: '', website1: '', emailDomain1: '', mainPhone: '' }}
			validationSchema={ ExampleFormSchema }
			onSubmit={ (values, actions) => handleSubmit(values, actions) }
			onReset={ () => handleReset() }
			render={ ({ values, errors, touched, isSubmitting, isValidating, submitCount, dirty, isValid, initialValues, validateOnChange, validateOnBlur, }) => (
				<Form>
					<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5em' }}>
						<Typography variant='h6'><strong>Basic Information</strong></Typography>
						<Button
							type='submit'
							size='small'
							color='secondary'
							onClick={ () => {} }
							children='Save'
						/>
					</div>
					<Grid container spacing={ 7 }>
						<Grid item xs={ 6 }>
							<TextInput field fullWidth label='Company Display Name' onChange={ () => {} } short name='companyDisplayName' />
						</Grid>
						<Grid item xs={ 6 }>
							<Button color='secondary' variant='outlined' children='Company Names' onClick={ () => {} } />
						</Grid>
						<Grid item xs={ 6 } style={{ paddingTop: '0px' }}>
							<Typography gutterBottom><strong>Websites</strong></Typography>
							<TextInput field fullWidth label='Website 1' onChange={ () => {} } short name='website1' />
						</Grid>
						<Grid item xs={ 6 } style={{ paddingTop: '0px' }}>
							<Typography gutterBottom><strong>Email Domains</strong></Typography>
							<TextInput field fullWidth label='Email Domain 1' onChange={ () => {} } short name='emailDomain1' />
						</Grid>
						<Grid item xs={ 5 }>
							<Typography style={{ whiteSpace: 'nowrap' }}>Main Phone</Typography>
						</Grid>
						<Grid item xs={ 7 }>
							<TextInput field fullWidth short name='mainPhone' onChange={ () => {} } />
						</Grid>
						<Grid item xs={ 5 }>
							<Typography style={{ whiteSpace: 'nowrap' }}>Customer Service</Typography>
						</Grid>
						<Grid item xs={ 7 }>
							<TextInput field fullWidth short name='customerServicePhone' onChange={ () => {} } />
						</Grid>
					</Grid>
				</Form>
			)}
		/>
	)
}

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const ExampleFormSchema = Yup.object().shape({
	companyDisplayName: Yup.string()
		.required('Required'),
	website1: Yup.string()
		.required('Required'),
	emailDomain1: Yup.string()
		.email('Invalid email')
		.required('Required'),
	mainPhone: Yup.string()
		.matches(phoneRegExp, 'Phone number invalid')
})

export default ExampleForm