import React from 'react'
import Item from './component/Item'
import { people } from './component/utils' // здесь храниться сгенерированный массив

function App() {
	const [ data, setData ] = React.useState(people) // все элементы
	const [ animateItem, setAnimateItem ] = React.useState([]) // здесь будут всегда 20 элементов, которые будут появляться с анимацией
	const [ dataShowAnimate, setDataShowAnimate ] = React.useState({
		start: 20,
		end: 40
	})

	function scrollHandler(e) {
		const scrollHeight = e.target.documentElement.scrollHeight
		const scrollTop = e.target.documentElement.scrollTop
		if (scrollHeight - (scrollTop + window.innerHeight) < 100 && people.length >= dataShowAnimate.end) {
			setAnimateItem([...people.slice(dataShowAnimate.start, dataShowAnimate.end) ])
			setDataShowAnimate({
				start: dataShowAnimate.start + 20,
				end: dataShowAnimate.end + 20
			})
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
			{dataShowAnimate.start === 20 ? ( // элементы без анимации
				data.slice(0, 20).map((el, ind) => <Item key={`${ind}_${el}`} person={el} />)
			) : (
				data.slice(0, dataShowAnimate.start - 20).map((el, ind) => <Item key={`${ind}_${el}`} person={el} />)
			)}
			{animateItem[0] && animateItem.map((el, ind) => // слудующие 20 элементов с анимацией
				<Item key={`${ind}_${el}`} delay={(ind + 2) * 1} person={el} />)} 

			{/* можно и так, но это как не очень... :)
			{/* {data.slice(0, 20).map((e) => <Item person={e} />)}
			{currentDataShow > 20 ? data.slice(20, 40).map((e, ind) => <Item delay={ind + 1} person={e} />) : ''}
			{currentDataShow > 40 ? data.slice(40, 60).map((e, ind) => <Item delay={ind + 1} person={e} />) : ''}
			{currentDataShow > 60 ? data.slice(60, 80).map((e, ind) => <Item delay={ind + 1} person={e} />) : ''}
		{currentDataShow > 80 ? data.slice(80, 100).map((e, ind) => <Item delay={ind + 1} person={e} />) : ''} */}
		</div>
	)
}

export default App
