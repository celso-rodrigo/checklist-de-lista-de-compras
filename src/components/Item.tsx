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

  const itemBoughtStyle = itemBought
  ? 'opacity-60'
  : 'opacity-100'

  return (
    <div
      className={`${itemBoughtStyle} flex bg-gray-400 items-center p-4 justify-between
      max-w-[720px] rounded-md`}
    >
      <div className="flex items-center gap-4">
        <Checkbox checked={itemBought} />

        <div>
          <p
            className="text-gray-100 text-sm font-bold"
          >
            {itemName}
          </p>
          <p
            className="text-gray-200 text-xs"
          >
            {`${itemQuantity} ${itemQuantityUnity}`}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Tag
          category={category}
        />

        <button
          type="button"
          onClick={toggleEditing}
        >
          <ReactSVG src={menuIcon} className="fill-purple-light" />
        </button>
      </div>

      {editing && (<EditMenu />)}
    </div>
  )
}

export default Item