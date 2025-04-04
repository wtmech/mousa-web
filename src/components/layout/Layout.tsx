import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout = () => {
  const location = useLocation();
  const isLibraryRoute = location.pathname.startsWith('/library') ||
                        location.pathname.startsWith('/player');

  return (
    <div className="min-h-screen w-full bg-white dark:bg-black flex flex-col">
      <Navbar />
      <div className="flex w-full flex-grow">
        {isLibraryRoute && <Sidebar />}
        <main className={`flex-1 ${isLibraryRoute ? 'ml-64' : ''}`}>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;