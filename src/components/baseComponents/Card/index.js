const Card = ({ className, style, children }) => (
  <div className={`rounded-md p-3 m-4 ${className}`} style={style}>
    {children}
  </div>
);

export default Card;
