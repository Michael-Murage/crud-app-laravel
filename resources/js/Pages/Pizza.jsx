import React from 'react'
import Loading from './Loading'
import { Inertia } from '@inertiajs/inertia'
import useImgFormat from './hooks/format'

function Pizza({ piz }) {
    const format = useImgFormat();
	const loadPizza = (id) =>{
		Inertia.visit(`pizza/${id}`, {method: 'get'})
	}
	try {
		return (
			<div onClick={()=>loadPizza(piz.id)} className="row my-3 bg-light pizza-cont" data-toggle="tooltip" data-placement="top">
				<div className='col col-lg-9 col-md-9 col-sm-7'>
					{piz.image ? <img src={`${piz.image}${format}`} alt={piz.name}/> : <Loading/>}
				</div>
				<div className='col col-lg-3 col-md-3 col-sm-5 pizza-div'>
					<p className='pizza-desc'>{piz.name} pizza</p>
					{/* <button className="btn btn-warning btn-sm"><RiShoppingCart2Line/></button> */}
				</div>
			</div>
		)
	} catch (error) {
		console.log(error);
		return <Loading/>
	}
	
}

export default Pizza