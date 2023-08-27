import bakeryIcon from "../assets/bakeryIcon.svg"
import drinkIcon from "../assets/drinkIcon.svg"
import fruitIcon from "../assets/fruitIcon.svg"
import meatIcon from "../assets/meatIcon.svg"
import vegetableIcon from "../assets/vegetableIcon.svg"
import { ReactSVG } from 'react-svg'
import CategoryEnum from "../enums/CategoryEnum"

interface IProps {
  category: CategoryEnum
}

function Tag({category}: IProps) {
    // Obtain the correct tag icon based on the category
    function getTagIcon():string {
    if (category === CategoryEnum.padaria) return bakeryIcon
    if (category === CategoryEnum.legume) return vegetableIcon
    if (category === CategoryEnum.fruta) return fruitIcon
    if (category === CategoryEnum.bebida) return drinkIcon
    return meatIcon
  }

  const tagIcon = getTagIcon();

    // Obtain the correct Tailwind class based on the category
  const tagColors: Record<CategoryEnum, string> = {
    [CategoryEnum.padaria]: 'text-yellow fill-yellow',
    [CategoryEnum.legume]: 'text-green fill-green',
    [CategoryEnum.fruta]: 'text-orange fill-orange',
    [CategoryEnum.bebida]: 'text-blue fill-blue',
    [CategoryEnum.carne]: 'text-pink fill-pink',
  };

  const bgColors: Record<CategoryEnum, string> = {
    [CategoryEnum.padaria]: 'bg-yellow-dark',
    [CategoryEnum.legume]: 'bg-green-dark',
    [CategoryEnum.fruta]: 'bg-orange-dark',
    [CategoryEnum.bebida]: 'bg-blue-dark',
    [CategoryEnum.carne]: 'bg-pink-dark',
  };

  return (
    <span
      className={`${bgColors[category]} flex item-center justify-center p-2 gap-2
      rounded-full font-semibold md:px-4`}
    >
      <ReactSVG 
        src={tagIcon}
        className={`${tagColors[category]}`}
      />
      <p
        className={`${tagColors[category]} hidden md:block`}
      >
        {category}
      </p>
    </span>
  )
}

export default Tag