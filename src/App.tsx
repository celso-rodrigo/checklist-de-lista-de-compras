import { useContext } from 'react'
import Form from './components/Form'
import Item from './components/Item'
import IItem from './interfaces/IItem'
import Context from './context/Context'

function App() {
  const {itemList} = useContext(Context)

  return (
    <div
      className='font-inter flex flex-col items-center pt-[88px] gap-6
      min-h-screen bg-gray-600 bg-header bg-no-repeat bg-contain'
    >
      <h1 className='text-gray-100 text-2xl font-bold leading-normal tracking-wide z-10'>
        Lista de Compras
      </h1>

      <Form />

      <div className='flex flex-col gap-3'>
        {itemList.map((item: IItem) => (
          <Item
            id={item.id}
            key={item.id}
            itemBought={item.itemBought}
            itemName={item.itemName}
            itemQuantity={item.itemQuantity}
            itemMeasure={item.itemMeasure}
            category={item.category}
          />
        ))}
      </div>
    </div>
  )
}

export default App
