const Layout = ({ children }) => {
  return (
    <div className="flex flex-col container mx-auto h-screen">
      <div className='py-10 text-center h-[20vh]'>
        <h1 className='text-5xl text-white'>Country Select</h1>
        <p className="text-slate-200">Select or search for a country for details. </p>
      </div>
      {children}
      <p className="py-7 text-center h-[10vh] text-slate-300">Copyright © 2023</p>
    </div>

  );
}

export default Layout;