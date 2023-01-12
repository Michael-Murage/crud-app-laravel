import { useEffect, useState } from 'react'

const useGetData = (url) => {
	const [data, setData] = useState()
	const [err, setErr] = useState()
	const [load, setLoad] = useState(false)

	const fetcher = async () => {
			setLoad(true)
			try{
				const res = await fetch(url)
				console.log(res);
				if(res.ok){
					let json = await res.json()
					setData(json)
				}else{
					setErr(new Error("Sorry, response failed"))
				}
			} catch (error) {
				setErr(error)
			}
			finally{
				setLoad(false)
			}
	}

	useEffect(()=>{
		fetcher()
	}, [])

	return { data, err, load, setData }
}

export default useGetData
