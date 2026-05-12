import { Link, Outlet, useLocation } from 'react-router-dom';

export default function Layout() {
  const location = useLocation();
  const isPrimitives = location.pathname.startsWith('/design-system/primitives');
  const isComponents = location.pathname.startsWith('/design-system/components');
  const isExampleApp = location.pathname.startsWith('/app');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <h1 className="text-2xl font-bold text-gray-900">JOY Design System</h1>
            <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
              <Link
                to="/design-system/primitives"
                className={`px-6 py-2 rounded-md font-semibold transition-colors ${
                  isPrimitives
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Primitives
              </Link>
              <Link
                to="/design-system/components"
                className={`px-6 py-2 rounded-md font-semibold transition-colors ${
                  isComponents
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Components
              </Link>
              <Link
                to="/app/home"
                className={`px-6 py-2 rounded-md font-semibold transition-colors ${
                  isExampleApp
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Example App
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <Outlet />
    </div>
  );
}
