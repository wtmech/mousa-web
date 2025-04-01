import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = () => {
  const location = useLocation();
  const isLibraryRoute = location.pathname.startsWith('/library') ||
                        location.pathname.startsWith('/player');

  return (
    <div className="min-h-screen w-full bg-white dark:bg-black">
      <Navbar />
      <div className="flex w-full">
        {isLibraryRoute && <Sidebar />}
        <main className={`flex-1 md:p-8 ${isLibraryRoute ? 'ml-64' : ''}`}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;