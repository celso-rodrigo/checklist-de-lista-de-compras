import menuIcon from "../assets/menuIcon.svg";
import ITag from "../interfaces/ITag";
import Tag from "./Tag";

interface IProps {
  itemBought: boolean;
  itemName: string;
  itemQuantity: number;
  itemQuantityUnity: string;
  tag: ITag;
}

function Item({itemBought, itemName, itemQuantity, itemQuantityUnity, tag}: IProps) {
  return (
    <div>
      <input
        type="checkbox"
        checked={itemBought}
        onChange={() => console.log("WIP")}
      />
      <p>{itemName}</p>
      <p>{`${itemQuantity} ${itemQuantityUnity}`}</p>
      <Tag
        icon={tag.icon}
        category={tag.category}
        style="tag"
      />
      <button
        type="button"
      >
        <img src={menuIcon} alt="Edit menu button" />
      </button>
    </div>
  )
}

export default Item