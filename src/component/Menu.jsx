import { menusObjs } from './hooks/menusData.js'
const Menu = () => {
  return (
    <>
      <div>
        <div>
          <button>All</button>
          <button>vegetables</button>
          <button>fruits</button>
          <button>grain</button>
        </div>
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
      </div>
    </>
  )
}

export default Menu
