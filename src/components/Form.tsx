import ItemInput from './ItemInput'
import QuantityInput from './QuantityInput'
import CategoryInput from './CategoryInput'
import {Dispatch, SetStateAction} from 'react'
import MeasureEnum from '../enums/MeasureEnum'
import CategoryEnum from '../enums/CategoryEnum'

interface IProps {
  setItem: Dispatch<SetStateAction<string>>
  setQuantity: Dispatch<SetStateAction<string>>
  setMeasure: Dispatch<SetStateAction<MeasureEnum>>
  setCategory: Dispatch<SetStateAction<CategoryEnum>>
}

function Form({setItem, setQuantity, setMeasure, setCategory}: IProps) {
  return (
    <form>
      <ItemInput setItem={setItem} />
      <QuantityInput setQuantity={setQuantity} setMeasure={setMeasure} />
      <CategoryInput setCategory={setCategory} />
    </form>
  )
}

export default Form
