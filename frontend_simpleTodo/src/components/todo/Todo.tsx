const Todo = ({ title }) => {
  const dummy = () => { alert('not yet'); };

  return (
    <>
      <tr className="flex flex-col md:flex-row hover:bg-gray-100 text-lg">
        <th className="w-3/4">{title}{title}{title}</th>
        <td className="flex items-center ml-auto">
            <button className="btn btn-xs btn-primary btn-outline" onClick={dummy}>
              Done
            </button>
            <button className="btn btn-xs btn-success btn-outline mx-2" onClick={dummy}>
              Edit
            </button>
            <button className="btn btn-xs btn-error btn-outline" onClick={dummy}>
              Delete
            </button>
        </td>
      </tr>
    </>
  );
};

export default Todo;