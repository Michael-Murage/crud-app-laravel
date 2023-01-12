import React from 'react'

function Datalist({ label, val, handler, lister, name, state, className='' }) {
  return (
    <>
        <label className='w-full form-label'>
            {label}
            <input 
                title='Click to edit' 
                type="text" 
                value={val}
                onChange={handler}
                list={lister} 
                name={name}
                className={`block rounded pl-2 form-control ${className}`}
            />
        </label>
        <datalist id={`${lister}`}>
            {
                (Array.isArray(state) ? state : []).map((elem, idx) =>{
                    return <option key={idx} value={`assets/${elem}`}></option>;
                })
            }
        </datalist>
    </>
  )
}

export default Datalist