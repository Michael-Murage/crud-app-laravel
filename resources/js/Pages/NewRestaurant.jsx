import { Inertia } from '@inertiajs/inertia'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

function NewRestaurant(props) {
	const [data, setData] = useState({
		name: '',
		address: '',
		description: '',
        user: props.user
	})

	const handleChange = (e)=>{
		setData({...data, [e.target.name]: e.target.value})
	}

	const handleSubmit = (e) =>{
		e.preventDefault()
		fetch("/api/restaurants",{
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		})
		.then(res => {
            if(res.ok){
                res.json().then(mes => console.log(mes))
                setData({
                    name: '',
		            address: '',
		            description: ''
                })
                toast('Restaurant added successfully 😊')
                Inertia.visit("/restaurant")
            }else{
                res.json().then(err => toast(err.message))
            }
        })
		.catch(err => console.log(err))

	}

	return (
		<form className='my-3 container' onSubmit={handleSubmit}>
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

			<input className='btn btn-success btn-sm my-2' type='submit' />
		</form>
	)
}

export default NewRestaurant