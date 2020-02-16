import React from 'react'
import Checkbox from '../ui/Checkbox/Checkbox.js'
import './Aside.css'

export default function Aside ({sites}) {
  const siteList = sites.map(site => {
    return (
      <li key={site.id}>
        <Checkbox type={'site'} id={site.id} name={site.name} onChange={() => {}} />
      </li>
    )
  })
  return (
    <aside>
      <ul className="sites checkbox-list">
        <li>
          <button type="button" className="toggle-select-all"
            onChange={() => {}} >
            Összes
          </button>
        </li>
        {siteList}
      </ul>
    </aside>
  )
}
