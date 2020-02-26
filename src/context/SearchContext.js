import React from 'react'
import {format} from 'date-fns'
import {getCurrentDate, getLastWeeksDate} from '../utils/date'

export const SearchContext = React.createContext()

export class SearchProvider extends React.Component {
  state = {
    startDate: getLastWeeksDate(),
    endDate: getCurrentDate(),
    query: '',
    orderBy: ''
  }
  
  setStartDate = (date) => {
    console.log(date)
    this.setState({
      startDate: date
    })
  }

  setEndDate = (date) => {
    console.log(date)
    this.setState({
      endDate: date
    })
  }

  handleInputChange = (event) => {
    this.setState({
      query: event.target.value
    })
  }

  render () {
    return (
      <SearchContext.Provider value={{
        state: this.state,
        setStartDate: this.setStartDate,
        setEndDate: this.setEndDate,
        handleInputChange: this.handleInputChange
      }}>
        {this.props.children}
      </SearchContext.Provider>
    )
  }
}