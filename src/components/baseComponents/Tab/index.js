import {
  cloneElement,
  Fragment,
  useCallback,
  useEffect,
  useState,
} from "react";

const Tabs = ({
  defaultActiveKey,
  className,
  classNameContainer,
  classNameTitle,
  children,
  ...props
}) => {
  const [activeKey, setActiveKey] = useState(defaultActiveKey);

  const data = children.map(({ props }) => props);

  useEffect(() => {
    if (!defaultActiveKey) {
      setActiveKey(data[0].eventKey);
    }
  }, []);

  const changeTitle = useCallback((eventKey) => setActiveKey(eventKey), []);

  return (
    <div className={classNameContainer} {...props}>
      <div
        className={`flex mb-3 pt-3 pb-2 justify-around border-b-2 ${
          classNameTitle ? classNameTitle : ""
        }`}
      >
        {data.map(({ eventKey, title }) =>
          activeKey === eventKey ? (
            <div key={eventKey} className="relative">
              {title}
              <div className="absolute bottom-[-0.6rem] right-0 left-0 h-[0.15rem] rounded-full bg-yellow-400 shadow-md shadow-yellow-200" />
            </div>
          ) : (
            <div key={eventKey} onClick={changeTitle.bind(this, eventKey)}>
              {title}
            </div>
          )
        )}
      </div>
      <div className={className}>
        {children.map((child) => (
          <Fragment key={child.props.eventKey}>
            {cloneElement(child, {
              style: {
                display: activeKey === child.props.eventKey ? "unset" : "none",
              },
            })}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

const Tab = ({ eventKey, title, ...props }) => (
  <div key={eventKey} title={title} {...props} />
);

export default Tabs;
export { Tab };
