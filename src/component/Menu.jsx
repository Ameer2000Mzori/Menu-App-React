import react, { useState } from 'react'
import { menusObjs } from './hooks/menusData.js'
import { buttonsData } from './hooks/buttonsData.js'
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
      <div className="flex flex-col text-center items-center justify-center w-[100vw] h-[100vh]">
        <h1 className="text-[4rem] ">MENU</h1>
        <div>
          <h3 className="text-[2rem]">Categories</h3>
          <div className="flex flex-row text-center items-center justify-center gap-2 wrap">
            {buttonsData.map((button, index) => {
              return (
                <button
                  className="w-[75px] h-[40px] bg-zinc-500 text-white"
                  key={index}
                  onClick={(e) => {
                    changeCategory(button.title)
                  }}
                >
                  {button.title}
                </button>
              )
            })}
          </div>
        </div>
        <div>
          {items.map((menu, index) => {
            return (
              <div
                key={index}
                className="flex flex-row text-center items-center justify-evenly w-[350px] h-[50px] bg-green-300"
              >
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
