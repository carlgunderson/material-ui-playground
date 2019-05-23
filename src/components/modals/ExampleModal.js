import React from 'react'

const ExampleModal = ({ data }) => (
	<div>
		<h4>Modal props for ExampleModal</h4>
		<p>{ data.dataPoint1.toString() }<br />{ data.dataPoint2.toString() }</p>
	</div>
)

export default ExampleModal