// import bakeryIcon from '../assets/bakeryIcon.svg'
// import drinkIcon from '../assets/drinkIcon.svg'
// import fruitIcon from '../assets/fruitIcon.svg'
// import meatIcon from '../assets/meatIcon.svg'
// import vegetableIcon from '../assets/vegetableIcon.svg'

// import { ReactSVG } from 'react-svg'

import CategoryEnum from '../enums/CategoryEnum'

function CategoryInput() {
  return (
    <div className='mt-2 rounded-md shadow-sm inset-y-0 right-0 flex items-center'>
      <label
        htmlFor='category'
        className='block text-sm font-medium leading-6 text-gray-100'
      >
        Categoria
      </label>
      <select
        id='category'
        name='category'
        className='h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm'
      >
        <option>Selecione a Categoria</option>

        <option value={CategoryEnum.padaria}>Padaria</option>
        <option value={CategoryEnum.legume}>Legume</option>
        <option value={CategoryEnum.carne}>Carne</option>
        <option value={CategoryEnum.fruta}>Fruta</option>
        <option value={CategoryEnum.bebida}>Bebida</option>
      </select>
    </div>
  )
}

export default CategoryInput
