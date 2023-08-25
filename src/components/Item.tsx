import menuIcon from "../assets/menuIcon.svg";
import ITag from "../interfaces/ITag";
import EditMenu from "./EditMenu";
import Tag from "./Tag";
import { useState } from "react";

interface IProps {
  itemBought: boolean;
  itemName: string;
  itemQuantity: number;
  itemQuantityUnity: string;
  tag: ITag;
}

function Item({itemBought, itemName, itemQuantity, itemQuantityUnity, tag}: IProps) {
  const [editing, setEditing] = useState(false);

  function toggleEditing() {
    setEditing((prev) => !prev);
  }

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
        onClick={toggleEditing}
      >
        <img src={menuIcon} alt="Edit menu button" />
      </button>
      {editing && (<EditMenu />)}
    </div>
  )
}

export default Item