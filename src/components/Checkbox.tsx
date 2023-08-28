import { ReactSVG } from "react-svg"
import checkmark from "../assets/checkmark.svg"

interface IProps {
  checked: boolean
}

function Checkbox({checked}: IProps) {
  const checkboxStyle = checked
  ? 'border-sucess bg-sucess hover:border-sucess-light hover:bg-sucess-light'
  : 'border-purple-light hover:bg-purple hover:border-purple-light'

  return (
    <label className="flex items-center relative w-6 h-6">
      <input
        className={`${checkboxStyle} appearance-none w-6 h-6 border-2 transition-all rounded-sm`}
        type="checkbox"
        checked={checked}
        onChange={() => console.log("WIP")}
      />
      {checked && (
        <ReactSVG 
          src={checkmark}
          className="absolute left-1/2 transform -translate-x-1/2 pointer-events-none fill-gray-100"
        />
      )}
    </label>
  )
}

export default Checkbox