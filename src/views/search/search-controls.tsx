type Props = {
  search: string;
  position: string;
  updateQuery: (updates: Record<string, string>) => void;
};

const SearchControls = (props: Props) => {
  return (
    <div className='flex flex-col md:flex-row gap-4'>
      <input
        type='text'
        placeholder='Search for athletes'
        defaultValue={props.search}
        onChange={(e) =>
          props.updateQuery({ search: e.target.value, page: "1" })
        }
        className='input input-bordered w-full md:max-w-md'
      />
      <select
        className='select select-bordered'
        value={props.position}
        onChange={(e) =>
          props.updateQuery({ position: e.target.value, page: "1" })
        }
      >
        <option value=''>All Positions</option>
        <option>Guard</option>
        <option>Forward</option>
        <option>Center</option>
      </select>
    </div>
  );
};

export default SearchControls;
