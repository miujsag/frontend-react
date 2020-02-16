import React from 'react'
import './Checkbox.css'

export default function Checkbox ({type, id, name, onChange}) {
  return (
    <div>
      <input type="checkbox" value={id} 
            name={type} id={`${type}-${id}`}
            onChange={onChange} />
      <label htmlFor={`${type}-${id}`}>{name}</label>
    </div>
  )
}