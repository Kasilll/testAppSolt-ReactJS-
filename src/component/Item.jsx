import React from 'react'
import Box from '@material-ui/core/Box'

function Item({ delay, person }) {
	console.log(delay)
	return (
		<Box
			className={delay && 'square'}
			style={delay && { animationDelay:`${delay}00ms` }}
			color="primary.main"
			bgcolor="background.paper"
			fontFamily="h6.fontFamily"
			fontSize={{ xs: 'h6.fontSize', sm: 'h4.fontSize', md: 'h3.fontSize' }}
			p={{ xs: 2, sm: 3, md: 4 }}
		>
			{`${person.name} ${person.sername} ${delay}`}
		</Box>
	)
}

export default Item
