import React from 'react'
import day from '../data/day'
import rates from '../data/rates'
import weather from '../data/weather'

export const WidgetContext = React.createContext({
  day,
  rates,
  weather
})

export class WidgetProvider extends React.Component {
  state = {
    day: {},
    weather: {},
    rates: []
  }

  loadData = () => {
    this.setState({
      day,
      rates, weather
    })
  }

  componentDidMount () {
    this.loadData()
  }

  render () {
    return (
      <WidgetContext.Provider value={{
        state: this.state
      }}>
        {this.props.children}
      </WidgetContext.Provider>
    )
  }
}