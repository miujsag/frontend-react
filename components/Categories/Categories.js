import React from 'react'
import Checkbox from '../ui/Checkbox/Checkbox.js'
import {CategoryContext} from '../../context/CategoryContext'
import './Categories.css'

function CategoryList (categories, handleChange) {
  console.log({categories, handleChange})
  return categories.map(category => {
    return (
      <li className="category" key={category.id}>
        <Checkbox type={'category'} id={category.id}
                  name={category.name} onChange={handleChange}
                  checked={category.checked} />
      </li>
    )
  })
}

export default function Categories () {
  return (
    <CategoryContext.Consumer>
      {context => (
        <ul className="categories inline">
          <li>
            <button type="button" className="toggle-categories"
                    onClick={context.toggleAll}>Összes</button>
          </li>
          {CategoryList(context.state.categories, context.handleChange)}
        </ul>
      )}
    </CategoryContext.Consumer>
  )
}