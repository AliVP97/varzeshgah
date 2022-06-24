const Card = ({ className, children, ...props }) => (
  <div className={`rounded-2xl p-3 ${className}`} {...props}>
    {children}
  </div>
);

export default Card;
