const DataTable = ({
  columns = [],
  data = [],
  emptyMessage = "No data available",
  className = "",
}) => {
  return (
    <div className={`overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700 ${className}`}>
      <table className="w-full text-sm text-left">
        <thead className="bg-slate-50 text-slate-600 dark:bg-slate-800 dark:text-slate-400">
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                className="px-4 py-3 font-medium"
                style={{ width: column.width }}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="px-4 py-12 text-center text-slate-500 dark:text-slate-400"
              >
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="bg-white hover:bg-slate-50 dark:bg-slate-800/50 dark:hover:bg-slate-800 transition"
              >
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className="px-4 py-3">
                    {column.render
                      ? column.render(row[column.key], row)
                      : row[column.key]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
