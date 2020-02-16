import React from 'react'
const {format} = require('date-fns')
const hu = require('date-fns/locale/hu')

function getToday () {
  return format(new Date(), 'YYYY.MM.DD. dddd', {locale: hu})
}

export default function Day ({day}) {
  return (
    <div>
      <p>{getToday(new Date())}</p>
      <p>{day.name} névnapja</p>
      <p className="event">{day.holiday}</p>
    </div>
  )
}