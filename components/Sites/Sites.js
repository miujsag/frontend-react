import React from 'react'
import Checkbox from '../ui/Checkbox/Checkbox.js'
import {SiteContext} from '../../context/SiteContext'
import './Sites.css'

function SiteList (sites, handleChange) {
  return sites.map(site => {
    return (
      <li className="site" key={site.id}>
        <Checkbox type={'site'} id={site.id}
                  name={site.name} onChange={handleChange}
                  checked={site.checked}
        />
      </li>
    )
  })
}

export default function Sites () {
  return (
    <SiteContext.Consumer>
      {context => (
        <ul className="sites checkbox-list">
          <li>
            <button type="button" className="toggle-sites"
                    onClick={context.toggleAll}>Összes</button>
          </li>
          {SiteList(context.state.sites, context.handleChange)}
        </ul>
      )}
    </SiteContext.Consumer>
  )
}