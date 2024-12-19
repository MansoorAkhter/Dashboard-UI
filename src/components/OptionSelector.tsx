const OptionSelector = () => {
  return (
    <div className="space-x-2">
      <select
        defaultValue="5"
        id="entries"
        className="border-2 pl-4 outline-none border-gray-200 w-20 h-10 rounded-xl"
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>

      <span>Entries per page</span>
    </div>
  );
};

export default OptionSelector;
