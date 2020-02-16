import React from 'react'
import Day from '../widgets/Day/Day.js'
import Weather from '../widgets/Weather/Weather.js'
import Rates from '../widgets/Rates/Rates.js'
import Checkbox from '../ui/Checkbox/Checkbox.js'
import './Header.css'

export default function Header ({categories, day, weather, rates}) {
  const categoryList = categories.map(category => {
    return (
      <li className="category checkbox-button" key={category.id}>
        <Checkbox type={'category'} id={category.id} name={category.name} onChange={() => {}} />
      </li>
    )
  })
  
  return (
    <header>
      <div className="main-header inline">
        <button type="button" className="mobile-show menu-button" name="open-menu">
          <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 1.5H22" stroke="#ED4568" strokeWidth="3" strokeLinecap="square"/>
            <path d="M2 9.5H14" stroke="#ED4568" strokeWidth="3" strokeLinecap="square"/>
            <path d="M2 17.5H19" stroke="#ED4568" strokeWidth="3" strokeLinecap="square"/>
          </svg>
          menü
        </button>
        <h1>
          <a href="/" aria-label="Főoldal">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67.71 14.85"><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" fill="#ED4568" d="M14.85 12.32H7.49V4.95H4.95v9.9H17.39v-9.9h-2.54v7.37z"/><path class="cls-1" fill="#ED4568" d="M19.8 0H0v9.9h2.53V2.53H9.9V9.9h2.54V2.53h7.36V9.9h2.54V0H19.8z"/><g><path class="cls-1" fill="white" d="M28.79 4.35H30l2.3 4.18 2.25-4.18h1.24v7h-1.33V6.93L33 9.61a1.32 1.32 0 01-.3.39.66.66 0 01-.36.11h-.38l-1.81-3.18v4.46h-1.36zM37.67 5.67a.78.78 0 01-.24-.6.78.78 0 01.24-.6.85.85 0 01.63-.22.84.84 0 01.62.22.78.78 0 01.24.6.78.78 0 01-.24.6 1 1 0 01-1.25 0zm-.06.7H39v5h-1.39zM41.15 10.93a2 2 0 01-.48-1.41V6.37H42v3.17a.8.8 0 00.17.54.54.54 0 00.43.2h.59a.83.83 0 00.6-.27 1.55 1.55 0 00.38-.73V6.37h1.37v5h-1.23v-.64a1.78 1.78 0 01-.57.52 1.29 1.29 0 01-.64.2h-.67a1.65 1.65 0 01-1.28-.52zm2.32-7.07H45l-1.21 1.82h-1.31zM46.12 12.22h.63a.6.6 0 00.53-.23 1.29 1.29 0 00.17-.73V6.37h1.37v4.84a2.34 2.34 0 01-.5 1.65 2.06 2.06 0 01-1.57.53h-.63zm1.39-6.55a.78.78 0 01-.24-.6.78.78 0 01.24-.6.86.86 0 01.63-.22.84.84 0 01.62.22.78.78 0 01.24.6.78.78 0 01-.24.6.85.85 0 01-.62.23.87.87 0 01-.63-.23zM50.88 11a1.6 1.6 0 01-.55-1.27h1.35a.57.57 0 00.18.44.72.72 0 00.49.16h.91q.6 0 .6-.33v-.18a.24.24 0 00-.1-.19.67.67 0 00-.27-.11l-1.74-.3a1.86 1.86 0 01-1-.44 1.06 1.06 0 01-.33-.78v-.34a1.16 1.16 0 01.53-1 2.58 2.58 0 011.47-.36h.79a2 2 0 011.36.45 1.46 1.46 0 01.52 1.18h-1.35a.43.43 0 00-.15-.35.52.52 0 00-.38-.13h-.77c-.43 0-.65.1-.65.3v.15a.25.25 0 00.08.18.45.45 0 00.25.11l1.88.33a1.83 1.83 0 01.93.43 1 1 0 01.35.74v.36a1.21 1.21 0 01-.54 1 2.47 2.47 0 01-1.43.38h-.91a2.17 2.17 0 01-1.52-.43zM56.82 11.08a1.28 1.28 0 01-.48-1v-.41a1.22 1.22 0 01.5-1 2.1 2.1 0 011.33-.39h.61a2.26 2.26 0 01.56.07 2.83 2.83 0 01.56.19V8a.55.55 0 00-.17-.41.63.63 0 00-.44-.15h-.86a.69.69 0 00-.45.13.4.4 0 00-.18.35h-1.32A1.46 1.46 0 0157 6.74a2.14 2.14 0 011.42-.45h.86a2.07 2.07 0 011.43.47A1.53 1.53 0 0161.27 8v3.39H60v-.6a1.8 1.8 0 01-.6.49 1.38 1.38 0 01-.69.19h-.62a2 2 0 01-1.27-.39zm2-.66a1.14 1.14 0 00.66-.19 1.07 1.07 0 00.43-.51v-.17a1.17 1.17 0 00-.45-.19 2.37 2.37 0 00-.61-.07h-.63a.65.65 0 00-.4.12.39.39 0 00-.15.32V10a.37.37 0 00.17.31.74.74 0 00.44.12zm.41-6.56h1.51l-1.19 1.82h-1.31zM63.39 13a1.66 1.66 0 01-.59-1.2h1.34a.57.57 0 00.18.36.64.64 0 00.41.14h.9a.62.62 0 00.51-.26 1.09 1.09 0 00.2-.67v-.47a1.75 1.75 0 01-.49.35 1.29 1.29 0 01-.55.13h-.69a2 2 0 01-1.48-.54 1.93 1.93 0 01-.56-1.43v-1a2.11 2.11 0 01.27-1.08 1.75 1.75 0 01.73-.72 2.15 2.15 0 011.09-.26h.58a1.47 1.47 0 01.67.16 1.59 1.59 0 01.53.42v-.5h1.27v5a2.29 2.29 0 01-.26 1.1 1.83 1.83 0 01-.73.73 2.17 2.17 0 01-1.09.26h-.9a2 2 0 01-1.34-.52zm2-2.78a.81.81 0 00.61-.34 1.53 1.53 0 00.3-.83v-.7a1.07 1.07 0 00-.27-.64.79.79 0 00-.59-.24h-.7a.78.78 0 00-.61.27 1.08 1.08 0 00-.23.71v.83a1 1 0 00.21.66.68.68 0 00.55.25z"/></g></g></g></svg>
            <svg class="mobile-show" xmlns="http://www.w3.org/2000/svg" width="22.34" height="14.85"><g data-name="Layer 2"><g data-name="Layer 1"><path class="cls-1" fill="#ed4568" d="M7.49 4.95H4.95v9.9H17.39v-9.9h-2.54v7.37H7.49z"/><path class="cls-1" fill="#ed4568" d="M9.9 0H0v9.9h2.53V2.53H9.9V9.9h2.54V2.53h7.36V9.9h2.54V0h-9.9z"/></g></g></svg>
          </a>
        </h1>
        <div className="widgets inline mobile-hide">
          <Day day={day} />
          <div className="divider"></div>
          <Weather weather={weather} />
          <div className="divider"></div>
          <Rates rates={rates} />
        </div>
      </div>
      <div className="sub-header inline">
        <div className="inline">
          <button className="aside-toggle" type="button" name="toggle-news-sources">
            Hírek forrásai
          </button>
          <ul className="categories inline">
            <li>
              <button type="button" className="toggle-categories">Összes</button>
            </li>
            {categoryList}
          </ul>
        </div>
        <form className="search-form inline" action="/kereses" method="GET">
          <input type="search" name="search" />
          <input type="hidden" name="from" value="{{getLastWeeksDate}}" />
          <input type="hidden" name="until" value="{{getCurrentDate}}" />
          <button type="submit" name="submit-search">keresés</button>
        </form>
      </div>
    </header>
  )
}
