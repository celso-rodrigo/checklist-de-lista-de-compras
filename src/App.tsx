import Header from './components/Header'
import Item from './components/Item'
import CategoryEnum from './enums/CategoryEnum'

function App() {
  return (
    <div className='font-inter'>
      <Header />
      <h1 className='text-gray-100 text-2xl font-bold leading-normal tracking-wide'>
        Lista de Compras
      </h1>
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
