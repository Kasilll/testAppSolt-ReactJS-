import React from 'react'
import Box from '@material-ui/core/Box'
import Item from './component/Item'

const people = Array(100)
	.fill(
		{
			name: 'Peter',
			sername: 'Gardner'
		},
		0,
		20
	)
	.fill(
		{
			name: 'Curtis',
			sername: 'Young'
		},
		20,
		40
	)
	.fill(
		{
			name: 'Vasya',
			sername: 'Pupkin'
		},
		40,
		60
	)
	.fill(
		{
			name: 'William',
			sername: 'Chambers'
		},
		60,
		80
	)
	.fill(
		{
			name: 'Donald',
			sername: 'Tate'
		},
		80,
		100
	)

function App() {
	const [ data, setData ] = React.useState(people)
	const [ currentDataShow, setCurrentData ] = React.useState(20)

	function scrollHandler(e) {
		if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
			setCurrentData(currentDataShow + 20)
		}
	}
	React.useEffect(() => {
		document.addEventListener('scroll', scrollHandler)
		return function() {
			document.removeEventListener('scroll', scrollHandler)
		}
	})

	return (
		<div>
			{data.slice(0, 20).map((e, i) => <Item person={e} />)}
			{currentDataShow > 20 ? data.slice(20, 40).map((e, ind) => <Item delay={ind - 0.9} person={e} />) : ''}
			{currentDataShow > 40 ? data.slice(40, 60).map((e, ind) => <Item delay={ind - 0.9} person={e} />) : ''}
			{currentDataShow > 60 ? data.slice(60, 80).map((e, ind) => <Item delay={ind - 0.9} person={e} />) : ''}
			{currentDataShow > 80 ? data.slice(80, 100).map((e, ind) => <Item delay={ind - 0.9} person={e} />) : ''}
		</div>
	)
}

export default App
