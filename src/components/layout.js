const Layout = ({ children }) => {
  return (
    <div className="flex flex-col container mx-auto h-screen">
      {children}
    </div>
  );
}

export default Layout;