const Card = ({ className, style, children }) => (
  <div className={`rounded-2xl p-3 ${className}`} style={style}>
    {children}
  </div>
);

export default Card;
