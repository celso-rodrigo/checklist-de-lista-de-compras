import { ReactSVG } from "react-svg";
import menuIcon from "../assets/menuIcon.svg";
import EditMenu from "./EditMenu";
import Tag from "./Tag";
import { useState } from "react";

interface IProps {
  itemBought: boolean;
  itemName: string;
  itemQuantity: number;
  itemQuantityUnity: string;
  category: string;
}

function Item({itemBought, itemName, itemQuantity, itemQuantityUnity, category}: IProps) {
  const [editing, setEditing] = useState(false);

  function toggleEditing() {
    setEditing((prev) => !prev);
  }

  return (
    <div
      className="flex"
    >
      <input
        type="checkbox"
        checked={itemBought}
        onChange={() => console.log("WIP")}
      />
      <p>{itemName}</p>
      <p>{`${itemQuantity} ${itemQuantityUnity}`}</p>
      <Tag
        category={category}
      />
      <button
        type="button"
        onClick={toggleEditing}
      >
        <ReactSVG src={menuIcon} />
      </button>
      {editing && (<EditMenu />)}
    </div>
  )
}

export default Item