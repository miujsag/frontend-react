import React from 'react';
import articles from './data/articles'
import sites from './data/sites'
import categories from './data/categories'
import rates from './data/rates'
import weather from './data/weather'
import day from './data/day'

import Header from './components/Header/Header.js'
import Aside from './components/Aside/Aside.js'
import Articles from './components/Articles/Articles.js'

export default function App () {
  return (
    <div>
      <Header categories={categories}
              day={day}
              weather={weather}
              rates={rates} />
      <div className="inline">
        <Aside sites={sites} />
        <main>
          <Articles articles={articles} />
        </main>
      </div>
    </div>
  )
}
