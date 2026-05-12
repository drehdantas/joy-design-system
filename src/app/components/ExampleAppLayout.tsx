import { Link, Outlet, useLocation } from 'react-router-dom';

export default function ExampleAppLayout() {
  const location = useLocation();

  const navItems = [
    { path: '/app/home', label: 'Home' },
    { path: '/app/missions', label: 'Missions' },
    { path: '/app/rewards', label: 'Rewards' },
    { path: '/app/profile', label: 'Profile' },
  ];

  return (
    <div>
      {/* Sub Navigation for Example App */}
      <div className="bg-white border-b border-gray-200 sticky top-[73px] z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 py-4 overflow-x-auto">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-md font-medium transition-colors whitespace-nowrap ${
                  location.pathname === item.path
                    ? 'bg-blue-100 text-blue-900'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Page Content */}
      <Outlet />
    </div>
  );
}
