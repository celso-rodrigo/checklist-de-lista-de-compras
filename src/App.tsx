import { useState } from 'react'
import Form from './components/Form'
import Item from './components/Item'
import CategoryEnum from './enums/CategoryEnum'
import MeasureEnum from './enums/MeasureEnum'
import IItem from './interfaces/IItem'

function App() {
  const [item, setItem] = useState('')
  const [quantity, setQuantity] = useState('')
  const [measure, setMeasure] = useState<MeasureEnum>(MeasureEnum.unidade)
  const [category, setCategory] = useState<CategoryEnum>(CategoryEnum.NONE)
  const [itemList, setItemList] = useState<IItem[]>([
    {
      id: 1,
      itemBought: false,
      itemName: 'banana',
      itemQuantity: 8,
      itemMeasure: MeasureEnum.unidade,
      category: CategoryEnum.fruta,
    },
    {
      id: 2,
      itemBought: false,
      itemName: 'Coca',
      itemQuantity: 2,
      itemMeasure: MeasureEnum.litros,
      category: CategoryEnum.bebida,
    },
    {
      id: 3,
      itemBought: true,
      itemName: 'Bife',
      itemQuantity: 2,
      itemMeasure: MeasureEnum.kg,
      category: CategoryEnum.carne,
    },
  ])

  function generateNewID(): number {
    if (!itemList.length) return 1
    const highestIDObj = itemList.reduce((prev, curr) => (
      prev.id > curr.id ? prev : curr
    ))
    return highestIDObj.id + 1;
  }

  function generateItemToList(): IItem {
    return {
      id: generateNewID(),
      itemBought: false,
      itemName: item,
      itemQuantity: Number(quantity),
      itemMeasure: measure,
      category: category,
    }
  }

  return (
    <div
      className='font-inter flex flex-col items-center pt-[88px] gap-6
      min-h-screen bg-gray-600 bg-header bg-no-repeat bg-contain'
    >
      <h1 className='text-gray-100 text-2xl font-bold leading-normal tracking-wide z-10'>
        Lista de Compras
      </h1>

      <Form
        setItem={setItem}
        setQuantity={setQuantity}
        setMeasure={setMeasure}
        setCategory={setCategory}
      />

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
