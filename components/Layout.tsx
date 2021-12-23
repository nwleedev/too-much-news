const Layout = ({ children }: { children: JSX.Element[] | JSX.Element }) => {
  return (
    <div className="md:mx-auto md:container pt-16">
      <div
        className="fixed top-0 right-0 left-0 h-12 z-50"
        style={{
          backgroundColor: '#d4cdbf',
          textShadow: '0.8px 0.8px 1px black',
        }}
        onClick={(e) => {
          e.preventDefault();
          document.documentElement.scrollTop = 0;
        }}
      >
        <div className="md:mx-auto md:container h-12 flex items-center">
          <h1 className="text-white ml-6 text-xl font-bold text-shadow">
            Too Much
          </h1>
        </div>
      </div>
      <>{children}</>
    </div>
  );
};

export default Layout;
