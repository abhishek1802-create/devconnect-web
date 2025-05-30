const FeedCard = ({ user }) => {
  const { firstName, lastName, about } = user;

  return (
    <div className="flex flex-col bg-white border border-gray-200 shadow-md rounded-xl w-full max-w-[300px] mx-auto transition-transform hover:scale-[1.02]">
      <img
        className="w-full h-48 object-cover rounded-t-xl"
        src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
        alt="Card"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">
          {firstName} {lastName}
        </h3>
        <p className="mt-1 text-gray-600 text-sm">{about}</p>

        <div className="flex justify-between mt-4 gap-2">
          <button className="flex-1 py-2 px-3 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors">
            Interested
          </button>
          <button className="flex-1 py-2 px-3 text-sm font-medium rounded-lg bg-pink-600 text-white hover:bg-pink-700 transition-colors">
            Ignore
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
