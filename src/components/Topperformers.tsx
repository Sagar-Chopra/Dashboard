const performers = [
  {
    name: "Robin",
    email: "robin@test.com",
    image: "/profile.png",
  },
  {
    name: "Robin",
    email: "robin@test.com",
    image: "/profile.png",
  },
  {
    name: "Robin",
    email: "robin@test.com",
    image: "/profile.png",
  },
  {
    name: "Robin",
    email: "robin@test.com",
    image: "/profile.png",
  },
  {
    name: "Robin",
    email: "robin@test.com",
    image: "/profile.png",
  },
];

const TopPerformers = () => {
  return (
    <div className="bg-white rounded-2xl p-6 col-span-1">
       <h3 className="text-lg font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
        Top Performer
      </h3>
      <div className="overflow-auto">
        {performers.map((user, idx) => {
          return (
            <div
              className={`${
                idx !== performers.length - 1 ? "border-b border-gray-300" : ""
              }`}
              key={`perf-${idx}`}
            >
              <div className="flex gap-3 items-center py-3">
                <span>
                  <img
                    src={user.image}
                    className="w-12 h-12 min-w-[48px] rounded-full object-cover cursor-pointer"
                    alt={user.name}
                  />
                </span>
                <div className="flex flex-col">
                  <p className="text-gray-700 font-light">{user.name}</p>
                  <p className="text-gray-700 font-light">{user.email}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopPerformers;
