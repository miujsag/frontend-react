import React from 'react';
import articles from './data/articles'
import sites from './data/sites'
import categories from './data/categories'
import rates from './data/rates'
import weather from './data/weather'
import day from './data/day'

import {getCurrentDate, getLastWeeksDate} from './utils/date'
import Header from './components/Header/Header.js'
import Aside from './components/Aside/Aside.js'
import Articles from './components/Articles/Articles.js'
import SearchModal from './components/SearchModal/SearchModal.js'


export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      articles,
      weather,
      rates,
      day,
      sites: sites,
      categories: categories,
      isSidebarOpen: true,
      isMobileMenuOpen: false,
      isMobileSearchOpen: false,
      from: getLastWeeksDate(),
      to: getCurrentDate(),
      search: ''
    }

    this.toggleSidebar = this.toggleSidebar.bind(this)
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this)
    this.toggleMobileSearch = this.toggleMobileSearch.bind(this)
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
    this.handleDateChange = this.handleDateChange.bind(this)
    this.handleInputChange = this.handleInputChange(this)
  }

  handleCheckboxChange (event) {
    this.setState({checked: event.target.checked})
  }

  handleDateChange (event) {
    this.setState({from: event.target.value})
  }

  handleInputChange (event) {
    const {name, target} = event
    console.log({name, target})
    this.setState({[name]: target})
  }

  toggleSidebar () {
    console.log('toggle')
    console.log(this.state.isSidebarOpen)
    this.setState({isSidebarOpen: !this.state.isSidebarOpen})
  }

  toggleMobileMenu () {
    this.setState({isMobileMenuOpen: !this.state.isMobileMenuOpen})
  }

  toggleMobileSearch () {
    this.setState({isMobileSearchOpen: !this.state.isMobileSearchOpen})
  }

  render () {
    const {articles, weather, rates, day, sites, categories, isSidebarOpen, isMobileMenuOpen, isMobileSearchOpen, from, to, search} = this.state
    console.log({from, to })
    return (
      <div>
        <Header
          categories={categories}
          day={day}
          weather={weather}
          rates={rates}
          search={search}
          from={from}
          to={from}
          isMobileMenuOpen={isMobileMenuOpen}
          isMobileSearchOpen={isMobileSearchOpen}
          handleCheckboxChange={this.handleCheckboxChange}
          handleInputChange={this.handleInputChange}
          handleDateChange={this.handleDateChange}
          toggleSidebar={this.toggleSidebar}
          toggleMobileMenu={this.toggleMobileMenu}
          toggleMobileSearch={this.toggleMobileSearch}
        />
        <div className="inline">
          <Aside
            categories={categories}
            sites={sites}
            day={day}
            weather={weather}
            rates={rates}
            isMobileMenuOpen={isMobileMenuOpen}
            isSidebarOpen={isSidebarOpen}
            toggleMobileMenu={this.toggleMobileMenu}
            handleCheckboxChange={this.handleCheckboxChange}
          />
          <Articles
            articles={articles} 
            isSidebarOpen={isSidebarOpen}
          />
        </div>
        <SearchModal
          from={from}
          to={to}
          search={search}
          isMobileSearchOpen={isMobileSearchOpen}
          toggleMobileSearch={this.toggleMobileSearch}
          handleInputChange={this.handleInputChange}
          handleDateChange={this.handleDateChange}
        />
      </div>
    )
  }
}
