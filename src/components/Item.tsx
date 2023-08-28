import { ReactSVG } from "react-svg";
import menuIcon from "../assets/menuIcon.svg";
import EditMenu from "./EditMenu";
import Tag from "./Tag";
import { useState } from "react";
import CategoryEnum from "../enums/CategoryEnum";
import Checkbox from "./Checkbox";

interface IProps {
  itemBought: boolean;
  itemName: string;
  itemQuantity: number;
  itemQuantityUnity: string;
  category: CategoryEnum;
}

function Item({itemBought, itemName, itemQuantity, itemQuantityUnity, category}: IProps) {
  const [editing, setEditing] = useState(false);

  function toggleEditing() {
    setEditing((prev) => !prev);
  }

  return (
    <div
      className="flex bg-gray-400"
    >
      <Checkbox checked={itemBought} />
      <p
        className="text-gray-100"
      >
        {itemName}
      </p>
      <p
        className="text-gray-200"
      >
        {`${itemQuantity} ${itemQuantityUnity}`}
      </p>
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