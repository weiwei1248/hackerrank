/******
 purpose:
 useState property not update after filter or sort

 data:
 array = [3,2,4,1,5]
*****/

//child
const UpdateProperty = ({array}) => {
	return (
		{array.map((item,index) => {
			return(`<p id=${index}>${item}</p>`)
		})}
	)
}

//parent
const App = ({array}) => {
	const [currentArr, setCurrentArr] = useState(array);

	const desc = () => {
		const newArr = array.sort().reverse();
		//use spread operator to clone
		setCurrentArr([...newArr]);
		//usestate callback to make it sycr
		setCurrentArr(prev => [...newArr])
		//if push
		setCurrentArr(prev => [...prev,...newArr])
	}

	return (
		<div onClick={() => desc()}>
			<UpdateProperty array={currentArr}/>
		</div>
	)
}
