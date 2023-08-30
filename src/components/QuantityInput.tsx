import MeasureEnum from '../enums/MeasureEnum'
import {Dispatch, SetStateAction} from 'react'

interface IProps {
  setQuantity: Dispatch<SetStateAction<string>>
  setMeasure: Dispatch<SetStateAction<MeasureEnum>>
}

function QuantityInput({setQuantity, setMeasure}: IProps) {
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
          onChange={({target}) => setQuantity(target.value)}
        />
        <div className='absolute inset-y-0 right-0 flex items-center'>
          <label htmlFor='measure' className='sr-only'>
            Unidade de Medida
          </label>
          <select
            id='measure'
            name='measure'
            className='block h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm'
            onChange={({target}) => setMeasure(target.value as MeasureEnum)}
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
