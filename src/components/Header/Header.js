import React from 'react'
import {WidgetContext} from '../../context/WidgetContext'
import Day from '../widgets/Day/Day.js'
import Weather from '../widgets/Weather/Weather.js'
import Rates from '../widgets/Rates/Rates.js'
import Categories from '../Categories/Categories.js'
import './Header.css'

export default function Header ({isMobileMenuOpen, handleInputChange, toggleMobileMenu, toggleMobileSearch, toggleSidebar}) {
  
  return (
    <header>
      <div className="main-header inline">
        <button type="button" name="open-menu"
                className={`mobile-show menu-button ${isMobileMenuOpen ? ' active' : ''}`}
                onClick={toggleMobileMenu}
        >
          <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 1.5H22" stroke="#ED4568" strokeWidth="3" strokeLinecap="square"></path>
            <path d="M2 9.5H14" stroke="#ED4568" strokeWidth="3" strokeLinecap="square"></path>
            <path d="M2 17.5H19" stroke="#ED4568" strokeWidth="3" strokeLinecap="square"></path>
          </svg>
          menü
        </button>
        <h1>
          <a href="/" aria-label="Főoldal">
          <svg className="mobile-hide" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67.71 14.85">
              <title>Asset 4</title>
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <g>
                    <g>
                      <polygon fill="#ED4568" points="14.85 12.32 7.49 12.32 7.49 4.95 4.95 4.95 4.95 12.32 4.95 14.85 7.49 14.85 14.85 14.85 17.39 14.85 17.39 4.95 14.85 4.95 14.85 12.32"></polygon>
                      <polygon fill="#ED4568" points="19.8 0 12.44 0 9.9 0 2.53 0 0 0 0 9.9 2.53 9.9 2.53 2.53 9.9 2.53 9.9 9.9 12.44 9.9 12.44 2.53 19.8 2.53 19.8 9.9 22.34 9.9 22.34 2.53 22.34 0 19.8 0"></polygon>
                    </g>
                    <g>
                      <path fill="#fff" d="M28.79,4.35H30l2.3,4.18,2.25-4.18h1.24v7H34.46V6.93L33,9.61a1.32,1.32,0,0,1-.3.39.66.66,0,0,1-.36.11h-.38L30.15,6.93v4.46H28.79Z"></path>
                      <path fill="#fff" d="M37.67,5.67a.78.78,0,0,1-.24-.6.78.78,0,0,1,.24-.6.85.85,0,0,1,.63-.22.84.84,0,0,1,.62.22.78.78,0,0,1,.24.6.78.78,0,0,1-.24.6,1,1,0,0,1-1.25,0Zm-.06.7H39v5H37.61Z"></path>
                      <path fill="#fff" d="M41.15,10.93a2,2,0,0,1-.48-1.41V6.37H42V9.54a.8.8,0,0,0,.17.54.54.54,0,0,0,.43.2h.59a.83.83,0,0,0,.6-.27,1.55,1.55,0,0,0,.38-.73V6.37h1.37v5H44.31v-.64a1.78,1.78,0,0,1-.57.52,1.29,1.29,0,0,1-.64.2h-.67A1.65,1.65,0,0,1,41.15,10.93Zm2.32-7.07H45L43.79,5.68H42.48Z"></path>
                      <path fill="#fff" d="M46.12,12.22h.63a.6.6,0,0,0,.53-.23,1.29,1.29,0,0,0,.17-.73V6.37h1.37v4.84a2.34,2.34,0,0,1-.5,1.65,2.06,2.06,0,0,1-1.57.53h-.63Zm1.39-6.55a.78.78,0,0,1-.24-.6.78.78,0,0,1,.24-.6.86.86,0,0,1,.63-.22.84.84,0,0,1,.62.22.78.78,0,0,1,.24.6.78.78,0,0,1-.24.6.85.85,0,0,1-.62.23A.87.87,0,0,1,47.51,5.67Z"></path>
                      <path fill="#fff" d="M50.88,11a1.6,1.6,0,0,1-.55-1.27h1.35a.57.57,0,0,0,.18.44.72.72,0,0,0,.49.16h.91q.6,0,.6-.33V9.82a.24.24,0,0,0-.1-.19.67.67,0,0,0-.27-.11l-1.74-.3a1.86,1.86,0,0,1-1-.44A1.06,1.06,0,0,1,50.42,8V7.66a1.16,1.16,0,0,1,.53-1,2.58,2.58,0,0,1,1.47-.36h.79a2,2,0,0,1,1.36.45,1.46,1.46,0,0,1,.52,1.18H53.74a.43.43,0,0,0-.15-.35.52.52,0,0,0-.38-.13h-.77c-.43,0-.65.1-.65.3V7.9a.25.25,0,0,0,.08.18.45.45,0,0,0,.25.11L54,8.52a1.83,1.83,0,0,1,.93.43,1,1,0,0,1,.35.74v.36a1.21,1.21,0,0,1-.54,1,2.47,2.47,0,0,1-1.43.38h-.91A2.17,2.17,0,0,1,50.88,11Z"></path>
                      <path fill="#fff" d="M56.82,11.08a1.28,1.28,0,0,1-.48-1V9.67a1.22,1.22,0,0,1,.5-1,2.1,2.1,0,0,1,1.33-.39h.61a2.26,2.26,0,0,1,.56.07,2.83,2.83,0,0,1,.56.19V8a.55.55,0,0,0-.17-.41.63.63,0,0,0-.44-.15h-.86a.69.69,0,0,0-.45.13.4.4,0,0,0-.18.35H56.48A1.46,1.46,0,0,1,57,6.74a2.14,2.14,0,0,1,1.42-.45h.86a2.07,2.07,0,0,1,1.43.47A1.53,1.53,0,0,1,61.27,8v3.39H60v-.6a1.8,1.8,0,0,1-.6.49,1.38,1.38,0,0,1-.69.19h-.62A2,2,0,0,1,56.82,11.08Zm2-.66a1.14,1.14,0,0,0,.66-.19,1.07,1.07,0,0,0,.43-.51V9.55a1.17,1.17,0,0,0-.45-.19,2.37,2.37,0,0,0-.61-.07h-.63a.65.65,0,0,0-.4.12.39.39,0,0,0-.15.32V10a.37.37,0,0,0,.17.31.74.74,0,0,0,.44.12Zm.41-6.56h1.51L59.55,5.68H58.24Z"></path>
                      <path fill="#fff" d="M63.39,13a1.66,1.66,0,0,1-.59-1.2h1.34a.57.57,0,0,0,.18.36.64.64,0,0,0,.41.14h.9a.62.62,0,0,0,.51-.26,1.09,1.09,0,0,0,.2-.67v-.47a1.75,1.75,0,0,1-.49.35,1.29,1.29,0,0,1-.55.13h-.69a2,2,0,0,1-1.48-.54,1.93,1.93,0,0,1-.56-1.43v-1a2.11,2.11,0,0,1,.27-1.08,1.75,1.75,0,0,1,.73-.72,2.15,2.15,0,0,1,1.09-.26h.58a1.47,1.47,0,0,1,.67.16,1.59,1.59,0,0,1,.53.42v-.5h1.27v5a2.29,2.29,0,0,1-.26,1.1,1.83,1.83,0,0,1-.73.73,2.17,2.17,0,0,1-1.09.26h-.9A2,2,0,0,1,63.39,13Zm2-2.78A.81.81,0,0,0,66,9.88a1.53,1.53,0,0,0,.3-.83v-.7a1.07,1.07,0,0,0-.27-.64.79.79,0,0,0-.59-.24h-.7a.78.78,0,0,0-.61.27,1.08,1.08,0,0,0-.23.71v.83a1,1,0,0,0,.21.66.68.68,0,0,0,.55.25Z"></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </a>
        </h1>
        <button type="button" className="mobile-show mobile-search-button"
                name="open-search" onClick={toggleMobileSearch}>
          keresés
          <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>1494187154_11_Search</title>
            <desc>Created using Figma</desc>
            <use xlinkHref="#a" fill="#ED4568" />
            <defs>
              <path
                id="a"
                fillRule="evenodd"
                d="M15.56 15.56a1.503 1.503 0 0 1-2.126 0l-2.651-2.652a6.957 6.957 0 0 1-3.771 1.116 7.012 7.012 0 1 1 7.012-7.012c0 1.391-.417 2.68-1.116 3.771l2.652 2.652a1.502 1.502 0 0 1 0 2.125zM7.012 2.003a5.008 5.008 0 1 0 0 10.017 5.008 5.008 0 0 0 0-10.017z"
              />
            </defs>
          </svg>
        </button>
        <div className="widgets inline mobile-hide">
          <WidgetContext.Consumer>
            {context => (
              <React.Fragment>
                <Day day={context.state.day} />
                <div className="divider"></div>
                <Weather weather={context.state.weather} />
                <div className="divider"></div>
                <Rates rates={context.state.rates} />
              </React.Fragment>
            )}
          </WidgetContext.Consumer>
        </div>
      </div>
      <div className="sub-header inline">
        <div className="inline">
          <button className="aside-toggle" type="button" name="toggle-news-sources"
                  onClick={toggleSidebar}>
            Hírek forrásai
            <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M2.31092 0.492081L6.96631 5.23738L11.6217 0.492081L12.9663 1.86266L6.96631 7.97854L0.966309 1.86266L2.31092 0.492081Z" fill="white"></path>
            </svg>
          </button>
          <Categories />
        </div>
        <form className="search-form inline" action="/kereses" method="GET">
          <input type="search" name="search" onChange={handleInputChange} />
          <button type="submit" name="submit-search">keresés</button>
        </form>
      </div>
    </header>
  )
}
