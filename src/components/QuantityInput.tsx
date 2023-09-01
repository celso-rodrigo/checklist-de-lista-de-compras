import { useContext } from 'react'
import MeasureEnum from '../enums/MeasureEnum'
import Context from '../context/Context'

function QuantityInput() {
  const {handleQuantityInput, handleMeasureSelect} = useContext(Context)

  return (
    <div>
      <label
        htmlFor='quantidade'
        className='block text-sm font-medium leading-6 text-gray-100'
      >
        Quantidade
      </label>
      <div className='relative mt-2 rounded-md shadow-sm'>
        <input
          type='text'
          name='quantidade'
          id='quantidade'
          className='block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          placeholder='0'
          onChange={handleQuantityInput}
        />
        <div className='absolute inset-y-0 right-0 flex items-center'>
          <label htmlFor='measure' className='sr-only'>
            Unidade de Medida
          </label>
          <select
            id='measure'
            name='measure'
            className='block h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm'
            onChange={handleMeasureSelect}
          >
            <option value={MeasureEnum.unidade}>Un.</option>
            <option value={MeasureEnum.litros}>L</option>
            <option value={MeasureEnum.kg}>Kg</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default QuantityInput
