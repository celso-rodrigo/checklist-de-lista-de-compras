import bakeryIcon from "../assets/bakeryIcon.svg"
import drinkIcon from "../assets/drinkIcon.svg"
import fruitIcon from "../assets/fruitIcon.svg"
import meatIcon from "../assets/meatIcon.svg"
import vegetableIcon from "../assets/vegetableIcon.svg"
import { ReactSVG } from 'react-svg'
import CategoryEnum from "../enums/CategoryEnum"

interface IProps {
  category: string
}

function Tag({category}: IProps) {
  function getTagColor():string {
    if (category === CategoryEnum.padaria) return 'yellow'
    if (category === CategoryEnum.legume) return 'green'
    if (category === CategoryEnum.fruta) return 'orange'
    if (category === CategoryEnum.bebida) return 'blue'
    return 'pink'
  }

    function getTagIcon():string {
    if (category === CategoryEnum.padaria) return bakeryIcon
    if (category === CategoryEnum.legume) return vegetableIcon
    if (category === CategoryEnum.fruta) return fruitIcon
    if (category === CategoryEnum.bebida) return drinkIcon
    return meatIcon
  }

  const tagColor = getTagColor();
  const tagIcon = getTagIcon();

  return (
    <span
      className={`flex item-center justify-center p-2 px-4 gap-2
      bg-orange-dark rounded-full`}
    >
      <ReactSVG 
        src={tagIcon}
        className={`fill-${tagColor}`}
      />
      <p
        className={`text-${tagColor}`}
      >
        {category}
      </p>
    </span>
  )
}

export default Tag