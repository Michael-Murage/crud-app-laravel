import React, { useState } from 'react'
import Datalist from './tools/Datalist'

function NewPizza(props) {
	const [data, setData] = useState({
		name: '',
		image: '',
		ingredients: '',
        user: props.user
	})

	const handleChange = (e)=>{
		setData({...data, [e.target.name]: e.target.value})
	}

	const handleSubmit = (e) =>{
		e.preventDefault()
		fetch("/api/pizzas",{
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		})
		.then(res => {
                if(res.ok) {
                    res.json().then(mes => console.log(mes))
                    setData({
                        name: '',
		                image: '',
		                ingredients: ''
                    })
                }
                else{
                    res.json().then(err => toast(err.message))
                }
            }
        )
		.catch(err => console.log(err))
		.finally(()=>{
			alert('Pizza added successfully 😊')
		})

	}

	return (
		<form className='my-3 container' onSubmit={handleSubmit} >
			<div className="form-outline mb-4 mt-2">
				<label className="form-label" htmlFor='name'>Flavour</label>
    		    <input name='name'  type="text" className="form-control" onChange={handleChange} value={data?.name} />

  		    </div>

  		    <div className="form-outline mb-4">
                <Datalist label={'Image URL'}
                    name="image"
                    handler={handleChange}
                    val={data?.image}
                    lister='images'
                    state={['Cheese', 'Veggie', 'Pepperoni', 'Meat', 'Margherita', 'BBQ', 'Hawaiian', 'Buffalo', 'Supreme', 'The-Works']}
                    className="w-full border-gray-300"
                />
  		    </div>
  		    <div className="form-outline mb-4">
				<label className="form-label" htmlFor='ingredients'>Ingedients</label>
    		    <textarea name='ingredients' onChange={handleChange} value={data?.ingredients} className='form-control' rows='2'/>
  		    </div>
  		
			<input className='btn btn-success btn-sm my-2' type='submit' />
		</form>
	)
}

export default NewPizza