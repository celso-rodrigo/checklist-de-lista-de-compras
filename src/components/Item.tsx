import menuIcon from "../assets/menuIcon.svg";

interface IProps {
  itemBought: boolean;
  itemName: string;
  itemQuantity: number;
  itemQuantityUnity: string;
}

function Item({itemBought, itemName, itemQuantity, itemQuantityUnity}: IProps) {
  return (
    <div>
      <input
        type="checkbox"
        checked={itemBought}
      />
      <p>{itemName}</p>
      <p>{`${itemQuantity} ${itemQuantityUnity}`}</p>
      {/* TAG */}
      <button
        type="button"
      >
        <img src={menuIcon} alt="Edit menu button" />
      </button>
    </div>
  )
}

export default Item