import Authenticated from '@/Layouts/AuthenticatedLayout'
import React from 'react'
import useGetData from './hooks/getData'
import Pizza from './Pizza'

function Home(props) {
	const { data } = useGetData("/api/pizzas")

	return (
        <Authenticated
            auth={props.auth}
        >
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
        </Authenticated>
	)
}

export default Home