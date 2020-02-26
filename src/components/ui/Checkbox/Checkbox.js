import React from 'react'
import './Checkbox.css'

export default function Checkbox ({type, id, name, checked, onChange}) {
  return (
    <div className="checkbox-button">
      <input type="checkbox" value={id} 
            name={type} id={`${type}-${id}`}
            onChange={onChange}
            checked={checked} />
      <label htmlFor={`${type}-${id}`}>{name}</label>
    </div>
  )
}