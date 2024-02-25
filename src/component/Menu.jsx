import { menusObjs } from './hooks/menusData.js'
const Menu = () => {
  return (
    <>
      <div>
        {menusObjs.map((menu, index) => {
          return (
            <div key={index}>
              <h1>{menu.name}</h1>
              <p>{menu.category}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Menu
