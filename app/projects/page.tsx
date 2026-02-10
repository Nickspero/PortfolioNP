const page = () => {
  return (
   <div className="flex flex-col h-[100%] p-8 gap-4">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-[44px] text-[#c64623]">My Projects</h1>
        <p className="font-bold mt-4 text-[20px] text-[#c64623]">
          Code, Design, and everything in between.
        </p>
        <div className="w-[400px] h-[1px] bg-[#c64623] mt-4 "></div>
      </div>
      <div className="flex-1 grid grid-cols-4 grid-rows-2 gap-2 bg-[#3bbad8] rounded-3xl p-2 overflow-auto">
        <figure className="row-span-2">
          <img
            src="/skinstric.png"
            className="w-full h-full object-cover rounded-2xl"
          />
        </figure>
        <figure>
          <img
            src="/nft.png"
            className="w-full h-full object-cover rounded-2xl"
          />
        </figure>
        <figure className="col-span-2">
          <img
            src="/omdb.png"
            className="w-full h-full object-cover rounded-2xl"
          />
        </figure>
        <figure>
          <img
            src="/treact.png"
            className="w-full h-full object-cover rounded-2xl"
          />
        </figure>
        <figure>
          <img
            src="/summarist.png"
            className="w-full h-full object-cover rounded-2xl"
          />
        </figure>
        <figure>
          <img
            src="/library.png"
            className="w-full h-full object-cover rounded-2xl"
          />
        </figure>
      </div>
    </div>
  )
};

export default page;
