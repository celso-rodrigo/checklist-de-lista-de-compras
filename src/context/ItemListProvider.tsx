import { ReactNode, useState, ChangeEvent, useMemo, useCallback } from "react";
import Context from "./Context";
import MeasureEnum from "../enums/MeasureEnum";
import CategoryEnum from "../enums/CategoryEnum";
import IItem from "../interfaces/IItem";

function ItemListProvider({ children }: { children: ReactNode }) {
  const [item, setItem] = useState('');
  const [quantity, setQuantity] = useState('')
  const [measure, setMeasure] = useState<MeasureEnum>(MeasureEnum.unidade)
  const [category, setCategory] = useState<CategoryEnum>(CategoryEnum.NONE)
  const [itemList, setItemList] = useState<IItem[]>(
    // MOCK
    [{
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


  // INPUT HANDLERS START
  const handleItemInput = useCallback((event: ChangeEvent<HTMLInputElement>): void => {
    const itemInputValue = event.target.value;
    setItem(itemInputValue);
  }, []);

  const handleQuantityInput = useCallback((event: ChangeEvent<HTMLInputElement>): void => {
    const quantityInputValue = event.target.value;
    setQuantity(quantityInputValue);
  }, []);

  const handleMeasureSelect = useCallback((event: ChangeEvent<HTMLSelectElement>): void => {
    const measureSelectValue: MeasureEnum = event.target.value as MeasureEnum;
    setMeasure(measureSelectValue);
  }, []);

    const handleCategorySelect = useCallback((event: ChangeEvent<HTMLSelectElement>): void => {
    const categorySelectValue: CategoryEnum = event.target.value as CategoryEnum;
    setCategory(categorySelectValue);
  }, []);
  // INPUT HANDLERS END

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

  // Aways return a number equal to the highest id + 1
  function generateNewID(): number {
    if (!itemList.length) return 1
    const highestIDObj = itemList.reduce((prev, curr) => (
      prev.id > curr.id ? prev : curr
    ))
    return highestIDObj.id + 1;
  }

  const providerValue = useMemo(() => ({
    handleItemInput,
    handleQuantityInput,
    handleMeasureSelect,
    handleCategorySelect,
    itemList,
  }),
  [
    handleItemInput,
    handleQuantityInput,
    handleMeasureSelect,
    handleCategorySelect,
    itemList,
  ]);

  return (
    <Context.Provider value={providerValue}>
      {children}
    </Context.Provider>
  );
}

export default ItemListProvider;
