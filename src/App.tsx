import Item from './components/Item'
import CategoryEnum from './enums/CategoryEnum'

function App() {
  return (
    <div 
      className='font-inter flex flex-col items-center pt-[88px] gap-6
      min-h-screen bg-gray-600 bg-header bg-no-repeat bg-contain'
    >
      <h1 className='text-gray-100 text-2xl font-bold leading-normal tracking-wide z-10'>
        Lista de Compras
      </h1>

      <div
        className='flex flex-col gap-3'
      >
        <Item
          itemBought={false}
          itemName='Banana'
          itemQuantity={2}
          itemQuantityUnity='unidades'
          category={CategoryEnum.fruta}
        />
        <Item
          itemBought={false}
          itemName='Coquinha'
          itemQuantity={2}
          itemQuantityUnity='litros'
          category={CategoryEnum.bebida}
        />
        <Item
          itemBought={true}
          itemName='Linguicinha'
          itemQuantity={1}
          itemQuantityUnity='unidades'
          category={CategoryEnum.carne}
        />
      </div>
    </div>
  )
}

export default App
