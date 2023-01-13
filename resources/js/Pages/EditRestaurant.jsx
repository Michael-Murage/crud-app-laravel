import { Inertia } from '@inertiajs/inertia'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

function EditRestaurant({ id, auth }) {
	const [data, setData] = useState({
		address: '',
		name: '',
		description: ''
	})

	useEffect(()=>{
		fetch(`/api/restaurants/${id}`)
		.then(res=> res.json())
		.then(items=>setData(items))
	}, [])

	const handleFormSubmission = async (e, func) => {
		e.preventDefault();

		const url = `/api/restaurants/${id}`
		const method = func === 'delete' ? "DELETE" : "PUT"
		

		try {
			const res = await fetch(url, {
				method,
				headers: {
					"Content-Type": "application/json",
                    accept: "application/json"
				},
				body: JSON.stringify(data)
			})

			if (res.ok) {
                setData({})
                Inertia.visit('/restaurant', {method: "get"})
                toast('Restaurant edited successfully 😊')
            }

		} catch (error) {
			console.log(error.message);
		}
		
	}

	const handleChange = (e)=>{
		setData({...data, [e.target.name]: e.target.value})
	}

	return (
		<form className='card my-3 container bg-light'>
			<div className="form-outline mb-4 mt-2">
				<label className="form-label" htmlFor='name'>Name</label>
    		<input name='name'  type="text" className="form-control" onChange={handleChange} value={data?.name} />
  		</div>

  		<div className="form-outline mb-4">
				<label className="form-label" htmlFor='address'>Address</label>
    		<input name='address' onChange={handleChange} value={data?.address} type="text" className="form-control" />
  		</div>
  		
  		<div className="form-outline mb-4">
				<label className="form-label" htmlFor='description'>Description</label>
    		<textarea name='description' onChange={handleChange} value={data?.description} className='form-control' rows='3'/>
  		</div>
			{/* <div className="form-outline mb-4">
				<label className="form-label" htmlFor='pizzas'>Pizzas</label>
				<select class="form-select" aria-label="pizzas">
					{

					}
  				<option selected>Open this select menu</option>
				  <option value="1">One</option>
				  <option value="2">Two</option>
				  <option value="3">Three</option>
				</select>
			</div> */}
			<button className='btn btn-warning btn-sm my-2' onClick={(e)=>handleFormSubmission(e, 'update')} type='submit' >Update</button>
			<button className='btn btn-danger btn-sm my-2' id='bottom' onClick={(e)=>handleFormSubmission(e, 'delete')} type='submit' >Delete</button>
		</form>
	)
}

export default EditRestaurant