interface IProps {
  icon: string;
  category: string;
  style: 'tag' | 'select';
}

function Tag({icon, category, style}: IProps) {
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