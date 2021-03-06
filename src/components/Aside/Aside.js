import React from 'react'
import Checkbox from '../ui/Checkbox/Checkbox.js'
import Day from '../widgets/Day/Day.js'
import Weather from '../widgets/Weather/Weather.js'
import Rates from '../widgets/Rates/Rates.js'
import './Aside.css'

export default function Aside ({sites, day, weather, rates, categories, toggleMobileMenu, isMobileMenuOpen, isSidebarOpen, handleCheckboxChange}) {
  const siteList = sites.map(site => {
    return (
      <li key={site.id}>
        <Checkbox type={'site'} id={site.id} 
                  name={site.name} onChange={handleCheckboxChange} />
      </li>
    )
  })
  return (
    <aside className={`${isSidebarOpen ? 'active' : ''} ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
      <div className="mobile-show">
        <button type="button" className="close-button"
                name="close-menu" onClick={toggleMobileMenu}>
          <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M7.05217 5.96879C7.44269 5.57827 8.07586 5.57827 8.46638 5.96879L19.0314 16.5338C19.4219 16.9243 19.4219 17.5575 19.0314 17.948L18.9482 18.0312C18.5577 18.4217 17.9245 18.4217 17.534 18.0312L6.96898 7.4662C6.57846 7.07567 6.57846 6.44251 6.96898 6.05198L7.05217 5.96879Z" fill="white"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M6.96883 17.948C6.5783 17.5575 6.5783 16.9243 6.96883 16.5338L17.5338 5.96879C17.9244 5.57827 18.5575 5.57827 18.948 5.96879L19.0312 6.05198C19.4218 6.44251 19.4218 7.07567 19.0312 7.4662L8.46623 18.0312C8.0757 18.4217 7.44254 18.4217 7.05201 18.0312L6.96883 17.948Z" fill="white"></path>
          </svg>
        </button>
        <div className="widgets-container">
          <div className="widgets">
            <Day day={day} />
            <div className="inline">
              <Weather weather={weather} />
              <Rates rates={rates} />
            </div>
          </div>
        <h3>Hírek forrásai</h3> 
        </div>
      </div>
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
