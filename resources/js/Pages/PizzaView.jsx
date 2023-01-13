import Authenticated from '@/Layouts/AuthenticatedLayout'
import { Inertia } from '@inertiajs/inertia'
import React from 'react'
import { GrEdit } from 'react-icons/gr'
import { RiDeleteBin6Line } from 'react-icons/ri'
import useImgFormat from './hooks/format'
import useGetData from './hooks/getData'
import Loading from './Loading'

function PizzaView({ id, auth }) {
	// const {id} = useParams()
	// const navigate = useNavigate()
    const format = useImgFormat()
	const {data, err, load, setData} = useGetData(`/api/pizzas/${id}`)

	try {
		return (
            <Authenticated
                auth={auth}
            >
			<div className="card mx-4 text-center">

			    <div className="align-center">
			        <img className="px-4 w-auto h-40 rounded-20" src={data?.image ? `/${data?.image}${format}` : <Loading/>}
			          alt={data?.name}/>
    
			        {/* <div className="mask rgba-white-slight"></div> */}
            
			    </div>

			    <div className="card-body elegant-color white-text rounded-bottom">

			        {/* <a className="activator waves-effect mr-4"><i className="fas fa-share-alt white-text"></i></a> */}
			        <h4 className="card-title">{data?.name} Pizza</h4>
			        <hr className="hr-light"/>
			        <p className="card-text white-text mb-4"><strong className='mr-3'>Ingredients: </strong>{data?.ingredients}</p>
			    	<div className=' container-fluid text-center flex justify-around'>
                        <div>
                            <button title='edit' className='btn btn-primary btn-sm' onClick={()=> Inertia.visit(`/pizza/${id}/edit`, {method: 'get'})}><GrEdit/></button>
                            <p>Edit</p>
                        </div>
			    		<div>
                            <button title='delete' className='btn btn-danger btn-sm' onClick={()=> Inertia.visit(`/pizza/${id}/edit#bottom`, {method: 'get'})}><RiDeleteBin6Line/></button>
                            <p>Delete</p> 
                        </div>
            
			    		{/* <div></div> */}
			    	</div>
			    </div>

			</div>
            </Authenticated>

		)
	} catch (error) {
		return <Loading/>
	}
	
}

export default PizzaView