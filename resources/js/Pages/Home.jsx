import React from 'react'
import useGetData from './hooks/getData'
import Pizza from './Pizza'

function Home() {
	const { data } = useGetData("/api/pizzas")

	return (
		<div>
			{
			(Array.isArray(data) ? data : []).map((piz)=>{
				return(
					<div className='container-fluid text-center' key={piz.id}>
						<Pizza piz={piz}/>
					</div> 
				)
			})
		}
		</div>
	)
}

export default Home