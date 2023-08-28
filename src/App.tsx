import Header from './components/Header'
import Item from './components/Item'
import CategoryEnum from './enums/CategoryEnum'

function App() {
  return (
    <div className='font-inter'>
      <Header />
      <Item
        itemBought={false}
        itemName='Banana'
        itemQuantity={2}
        itemQuantityUnity='unidades'
        category={CategoryEnum.legume}
      />
    </div>
  )
}

export default App
