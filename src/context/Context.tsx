import { createContext } from "react";
import IItem from "../interfaces/IItem";
import { ChangeEvent } from "react";

interface IContext {
  handleItemInput: (event: ChangeEvent<HTMLInputElement>) => void;
  handleQuantityInput: (event: ChangeEvent<HTMLInputElement>) => void;
  handleMeasureSelect: (event: ChangeEvent<HTMLSelectElement>) => void;
  handleCategorySelect: (event: ChangeEvent<HTMLSelectElement>) => void;
  itemList: IItem[];
}

const initialContextValue: IContext = {
  handleItemInput: () => {},
  handleQuantityInput: () => {},
  handleMeasureSelect: () => {},
  handleCategorySelect: () => {},
  itemList: [],
};

const Context = createContext<IContext>(initialContextValue);

export default Context;
