import { Inertia } from '@inertiajs/inertia'
import { useEffect, useState } from 'react'
import Loading from './Loading'
import Datalist from './tools/Datalist'

function EditPizza({ id }) {
	const [data, setData] = useState({
		name: '',
		ingredients: '',
		image: ''
	})

    const [loadingUpdate, setLoadingUpdate] = useState(false)
    const [loadingDelete, setLoadingDelete] = useState(false)

    const loadDelete = () => {
        setLoadingUpdate(false)
        setLoadingDelete(true)
    }
    const loadUpdate = () => {
        setLoadingUpdate(true)
        setLoadingDelete(false)
    }

	useEffect(()=>{
		fetch(`/api/pizzas/${id}`)
		.then(res=> res.json())
		.then(items=>setData(items))
		// eslint-disable-next-line
	}, [])

	const handleFormSubmission = async (e, func) => {
		e.preventDefault();

		const url = `/api/pizzas/${id}`
		const method = func === 'delete' ? "DELETE" : "PATCH"
        const loader = func === 'delete' ? loadDelete() : loadUpdate()
		

		try {
			const res = await fetch(url, {
				method,
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(data)
			})

			if (res.ok) {
                setData({})
                alert('Pizza edited successfully 😊')
            }
            else{
                const err = await res.json()
                console.log(err.message)
            }

		} catch (error) {
			console.log(error);
		}
		setLoadingDelete(false)
        setLoadingUpdate(false)
        // Inertia.visit('/', {method: 'get'})
	}

	const handleChange = (e)=>{
		setData({...data, [e.target.name]: e.target.value})
	}

	return (
		<form className='card border-none my-3 container'>
			<div className="form-outline mb-4 mt-2">
				<label className="form-label" htmlFor='name'>Flavour</label>
    		    <input name='name'  type="text" className="form-control" onChange={handleChange} value={data?.name} />
  		    </div>

  		<div className="form-outline mb-4">
            <Datalist name={'image'}
                label={'Image Url'}
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
			
            <div className="flex justify-around">
                <div className='update-btn cursor-pointer btn-sm my-2' onClick={(e)=>handleFormSubmission(e, 'update')} >
                    {
                        !loadingUpdate ? 'Update' : <Loading/>
                    }
                </div>
			    <div className='delete-btn cursor-pointer btn-sm my-2' id='bottom' onClick={(e)=>handleFormSubmission(e, 'delete')} >
                    {
                        !loadingDelete ? 'Delete' : <Loading/>
                    }
                </div>
            </div>
			
		</form>
	)
}

export default EditPizza