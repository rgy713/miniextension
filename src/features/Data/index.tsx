import { useSelector } from "react-redux";

export const Data: React.FC<{ logout(): void }> = ({ logout }) => {
  const user = useSelector((state: Types.State) => state.app.user);
  const classes = useSelector((state: Types.State) => state.app.classes);

  return (
    <div className="flex h-screen w-screen flex-col items-start gap-3 px-10 py-6">
      <div className="flex w-full items-center justify-between gap-2 py-2">
        <span className="text-sm text-gray-800">Logged in as {user}</span>
        <button onClick={logout} className="rounded bg-gray-500 py-2 px-5 text-sm text-white hover:bg-gray-600">
          Logout
        </button>
      </div>
      <div className="flex w-full shrink-0 grow flex-col flex-wrap items-center justify-center gap-8">
        {classes?.map((item) => (
          <div key={item.name} className="w-[22.5rem] min-w-max shrink-0 rounded p-4 ring-2 ring-gray-500">
            <h5 className="text-sm font-bold tracking-wide text-gray-600">Name</h5>
            <div className="mb-2 text-gray-800">{item.name}</div>
            <h5 className="text-sm font-bold tracking-wide text-gray-600">Students</h5>
            <div className="text-gray-800">{item.students.join(", ")}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
