import React from 'react';
import articles from './data/articles'
import {CategoryProvider} from './context/CategoryContext'
import {WidgetProvider} from './context/WidgetContext'
import {SearchProvider} from './context/SearchContext'
import Header from './components/Header/Header.js'
import Aside from './components/Aside/Aside.js'
import Articles from './components/Articles/Articles.js'
import SearchModal from './components/SearchModal/SearchModal.js'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      articles,
      isSidebarOpen: true,
      isMobileMenuOpen: false,
      isMobileSearchOpen: false,
    }

    this.toggleSidebar = this.toggleSidebar.bind(this)
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this)
    this.toggleMobileSearch = this.toggleMobileSearch.bind(this)
  }

  toggleSidebar () {
    this.setState({isSidebarOpen: !this.state.isSidebarOpen})
  }

  toggleMobileMenu () {
    this.setState({isMobileMenuOpen: !this.state.isMobileMenuOpen})
  }

  toggleMobileSearch () {
    this.setState({isMobileSearchOpen: !this.state.isMobileSearchOpen})
  }

  render () {
    const {articles, isSidebarOpen, isMobileMenuOpen, isMobileSearchOpen, from, to, search} = this.state

    return (
      <div>
        <WidgetProvider>
          <CategoryProvider>
            <SearchProvider>
              <Header
                isMobileMenuOpen={isMobileMenuOpen}
                isMobileSearchOpen={isMobileSearchOpen}
                handleInputChange={this.handleInputChange}
                handleDateChange={this.handleDateChange}
                toggleSidebar={this.toggleSidebar}
                toggleMobileMenu={this.toggleMobileMenu}
                toggleMobileSearch={this.toggleMobileSearch}
              />
              <SearchModal
                isMobileSearchOpen={isMobileSearchOpen}
                toggleMobileSearch={this.toggleMobileSearch}
              />
            </SearchProvider>
            <div className="inline">
              <Aside
                isMobileMenuOpen={isMobileMenuOpen}
                isSidebarOpen={isSidebarOpen}
                toggleMobileMenu={this.toggleMobileMenu}
              />
              <Articles
                articles={articles} 
                isSidebarOpen={isSidebarOpen}
              />
            </div>
          </CategoryProvider>
        </WidgetProvider>
      </div>
    )
  }
}
