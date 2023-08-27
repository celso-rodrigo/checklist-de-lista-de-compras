import Item from "./components/Item"
import CategoryEnum from "./enums/CategoryEnum"

function App() {
  return (
    <div className="font-inter">
      <h1 className='text-3xl font-bold text-center mt-10'>Hello, world! 👋</h1>
      <Item
        itemBought={false}
        itemName="Banana"
        itemQuantity={2}
        itemQuantityUnity="unidades"
        category={CategoryEnum.legume}
      />
    </div>
  )
}

export default App
