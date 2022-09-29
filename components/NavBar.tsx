import * as React from 'react';
import { Link, useLocation, Location } from 'react-router-dom';
import { routes } from '../constants/Navigation';

const NavBar = () => {
  const location: Location = useLocation();

  React.useEffect(() => {
    console.log(location);
  }, []);

  return (
    <div className="container mx-auto flex space-x-4">
      {routes.map((route) => (
        <div
          className={`rounded-xl shadow p-2 hover:bg-red-700 ${
            location.pathname === route.path ? 'bg-red-800' : 'bg-black '
          }`}
        >
          <Link to={route.path}>
            <div className="text-gray-200 text-lg">{route.name}</div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NavBar;
