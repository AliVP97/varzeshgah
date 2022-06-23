const FilterBar = () => {
  return (
    <div className="flex justify-between text-slate-500 font-bold bg-white m-4 px-6 py-5 rounded-2xl shadow-xl divide-x">
      <div className="inline-flex items-center gap-x-2">
        <i className="fa-solid fa-map"></i>
        <p>نقشه</p>
      </div>
      <div className="inline-flex items-center gap-x-2">
        <i className="fa-solid fa-filter"></i>
        <p>فیلتر</p>
      </div>
      <div className="inline-flex items-center gap-x-2">
        <i className="fa-solid fa-bars-sort"></i>
        <p>ترتیب</p>
      </div>
    </div>
  );
};

export default FilterBar;
