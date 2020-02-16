import React from 'react'

export default function Rates ({rates}) {
  const rateList = rates.map(rate => (
    <p key={rate.currency}>
      {rate.currency} {rate.value}
    </p>
  ))
  return (
    <div className="rates" title="MNB középárfolyam - napiarfolyam.hu">
      {rateList}
    </div>
  )
}