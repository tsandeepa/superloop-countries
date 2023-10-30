const CountriesLoading = () => {
  return (
    <div className="flex flex-col gap-4">
      {
        Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className='flex animate-pulse py-2 bg-slate-950'>
            <div className='flex justify-center w-28'>
              <div className="w-[60px] h-[60px] rounded-full bg-slate-800"></div>
            </div>
            <div className='flex flex-1 items-center '>
              <div className="p-1 w-[60%] bg-slate-800 rounded-md"></div>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default CountriesLoading;
