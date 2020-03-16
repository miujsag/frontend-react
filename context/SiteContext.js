import React from 'react'
import sites from '../data/sites'

export const SiteContext = React.createContext()

export class SiteProvider extends React.Component {
  state = {
    sites: []
  }

  loadData = () => {
    const modifiedSites = sites.map(site => {
      site.checked = site.state === 'selected' ? true : false

      return site
    })
    
    this.setState({
      sites: modifiedSites
    })
  }

  handleChange = (event) => {
    const siteId = event.target.id.split('-')[1]
    const modifiedSites = [...this.state.sites]
    const siteIndex = modifiedSites.findIndex(site => site.id === parseInt(siteId))

    modifiedSites[siteIndex].checked = !modifiedSites[siteIndex].checked
    
    this.setState({sites: modifiedSites})
  }

  toggleAll = () => {
    console.log('toggleAll')
    const {sites} = this.state
    const isAllChecked = sites.every(site => site.checked)
    const toggledSites = this.state.sites.map(site => ({
      ...site,
      checked: !isAllChecked
    }))

    this.setState({
      sites: toggledSites
    })
  }

  componentDidMount () {
    this.loadData()
  }

  render () {
    return (
      <SiteContext.Provider value={{
        state: this.state,
        handleChange: this.handleChange,
        toggleAll: this.toggleAll
      }}>
        {this.props.children}
      </SiteContext.Provider>
    )
  }
}