interface IProps {
  checked: boolean
}

function Checkbox({checked}: IProps) {
  const checkboxStyle = checked
  ? 'border-sucess bg-sucess hover:border-sucess-light hover:bg-sucess-light'
  : 'border-purple-light hover:bg-purple hover:border-purple-light'

  return (
    <>
      <label className="flex items-center relative">
        <input
          className={`${checkboxStyle} appearance-none w-4 h-4 border-2 transition-all rounded-sm`}
          type="checkbox"
          checked={checked}
          onChange={() => console.log("WIP")}
        />
        {checked && (
          <svg
            className="w-3 h-3 left-0.5 absolute"
            width="10"
            height="7"
            viewBox="0 0 10 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8.43071 0.342093L4.09877 4.67403L1.6163 2.19156L0.780396 3.02747L4.09877 6.34584L9.26661 1.178L8.43071 0.342093Z" fill="#FBF9FE"/>
          </svg>
        )}
      </label>
    </>
  )
}

export default Checkbox