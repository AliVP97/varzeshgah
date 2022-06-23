const buttons = [
  { title: "نقشه", iconClass: "fa-solid fa-map" },
  { title: "فیلتر", iconClass: "fa-solid fa-filter" },
  { title: "ترتیب", iconClass: "fa-solid fa-bars-sort" },
];

const FilterBar = ({ className }) => {
  return (
    <div
      className={`flex justify-between text-slate-500 font-bold bg-white m-4 py-5 rounded-2xl shadow-xl divide-x divide-x-reverse${
        className ? ` ${className}` : ""
      }`}
    >
      {buttons.map(({ title, iconClass }) => (
        <div
          key={title}
          className="w-1/3 inline-flex justify-center items-center gap-x-2"
        >
          <i className={iconClass}></i>
          <p>{title}</p>
        </div>
      ))}
    </div>
  );
};

export default FilterBar;
