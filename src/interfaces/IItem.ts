import CategoryEnum from "../enums/CategoryEnum";

interface IItem {
  id: number;
  itemBought: boolean;
  itemName: string;
  itemQuantity: number;
  itemMeasure: string;
  category: CategoryEnum;
}

export default IItem