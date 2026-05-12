import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import ExampleAppLayout from './components/ExampleAppLayout';
import PrimitivesPage from './pages/PrimitivesPage';
import ComponentsPage from './pages/ComponentsPage';
import HomePage from './pages/HomePage';
import MissionsPage from './pages/MissionsPage';
import RewardsPage from './pages/RewardsPage';
import ProfilePage from './pages/ProfilePage';

export default function App() {
  try {
    return (
      <BrowserRouter basename="/joy-design-system">
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Default redirect */}
            <Route index element={<Navigate to="/design-system/primitives" replace />} />

            {/* Design System Routes */}
            <Route path="design-system">
              <Route index element={<Navigate to="/design-system/primitives" replace />} />
              <Route path="primitives" element={<PrimitivesPage />} />
              <Route path="components" element={<ComponentsPage />} />
            </Route>

            {/* Example App Routes */}
            <Route path="app" element={<ExampleAppLayout />}>
              <Route index element={<Navigate to="/app/home" replace />} />
              <Route path="home" element={<HomePage />} />
              <Route path="missions" element={<MissionsPage />} />
              <Route path="rewards" element={<RewardsPage />} />
              <Route path="profile" element={<ProfilePage />} />
            </Route>

            {/* Catch all - redirect to primitives */}
            <Route path="*" element={<Navigate to="/design-system/primitives" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  } catch (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50">
        <div className="max-w-2xl p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error Loading App</h1>
          <pre className="text-sm bg-gray-100 p-4 rounded overflow-auto">
            {error instanceof Error ? error.message : String(error)}
          </pre>
        </div>
      </div>
    );
  }
}