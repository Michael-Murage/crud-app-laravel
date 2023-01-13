import Authenticated from '@/Layouts/AuthenticatedLayout'
import React from 'react'
import useGetData from './hooks/getData'
import Restaurant from './Restaurant'

function Restaurants(props) {
	const { data } = useGetData("/api/restaurants")
	
	return (
        <Authenticated
            auth={props.auth}
        >
		<div className='container rests-cont'>
			{(Array.isArray(data) ? data : []).map(rest =>{
				return <div key={rest.id}><Restaurant rest={rest} /></div>
			})
				
			}
			
		</div>
        </Authenticated>
	)
}

export default Restaurants