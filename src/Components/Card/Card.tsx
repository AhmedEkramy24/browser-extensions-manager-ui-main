export default function Card({
  logo,
  name,
  isActive,
  description,
}: {
  logo: string;
  name: string;
  isActive: boolean;
  description: string;
}) {
  return (
    <>
      <div className="card bg-white p-3 rounded-2xl dark:bg-[#1F2535] min-h-40 flex flex-col justify-between">
        <div className="flex space-x-3">
          <img src={logo} alt={name} />
          <div className="info">
            <h3 className="text-[#0A1437] dark:text-white text-lg font-semibold">
              {name}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              {description}
            </p>
          </div>
        </div>
        <div className="tools flex justify-between items-center mt-6">
          <button className="bg-white border border-slate-200 rounded-2xl px-3 py-1">
            Remove
          </button>
          {isActive ? (
            <div className="bg-[#C3211E] w-8 h-5 rounded-2xl flex items-center justify-end cursor-pointer">
              <div className="size-4 rounded-full bg-white me-[2px]"></div>
            </div>
          ) : (
            <div className="bg-[#C6C6C7] w-8 h-5 rounded-2xl flex items-center justify-start cursor-pointer">
              <div className="size-4 rounded-full bg-white ms-[2px]"></div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
