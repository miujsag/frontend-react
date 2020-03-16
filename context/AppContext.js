import React from 'react'
import {getCurrentDate, getLastWeeksDate} from '../utils/date'

const AppContext = React.createContext()

class AppProvider extends React.Component {
  state = {
    from: getLastWeeksDate(),
    to: getCurrentDate(),
    search: '',

    handleDateChange: (date) => {
      this.setState({from: date})
    },

    handleInputChange: (event) => {
      const {name, target} = event
      
      this.setState({[name]: target})
    }
  }

  render () {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

