import ITag from "../interfaces/ITag";

function Tag({icon, category, style}: ITag) {
  const containerStyle = style === 'tag'
    ? "" 
    : "";

  const categoryTextStyle = style === 'tag' 
    ? "" 
    : "";

  return (
    <span 
      className={`${containerStyle}`}
    >
      <img src={icon} alt="Category icon" />
      <p className={`${categoryTextStyle}`}>
        {category}
      </p>
    </span>
  )
}

export default Tag