import react, { useState } from 'react'
import { menusObjs } from './hooks/menusData.js'
const Menu = () => {
  const [items, setItems] = useState(menusObjs)

  const changeCategory = (val) => {
    console.log(val)
    if (val === 'All') return setItems(menusObjs)
    const newItems = menusObjs.filter((item) => item.category === val)
    console.log(newItems)
    setItems(newItems)
  }

  return (
    <>
      <div>
        <div>
          <button
            onClick={(e) => {
              changeCategory(e.target.textContent)
            }}
          >
            All
          </button>
          <button
            onClick={(e) => {
              changeCategory(e.target.textContent)
            }}
          >
            Vegetables
          </button>
          <button
            onClick={(e) => {
              changeCategory(e.target.textContent)
            }}
          >
            fruits
          </button>
          <button
            onClick={(e) => {
              changeCategory(e.target.textContent)
            }}
          >
            grain
          </button>
        </div>
        <div>
          {items.map((menu, index) => {
            return (
              <div key={index}>
                <h1>{menu.name}</h1>
                <p>{menu.category}</p>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Menu
