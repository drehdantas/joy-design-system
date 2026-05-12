import { useState } from 'react';

// Icon Components
function HomeIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 22V12H15V22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function MissionsIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ScanIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
      <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
      <rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
      <rect x="14" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
      <path d="M2 12H22" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}

function GiftIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M20 12V22H4V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 7H2V12H22V7Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 22V7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C11 2 12 7 12 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 7H16.5C17.163 7 17.7989 6.73661 18.2678 6.26777C18.7366 5.79893 19 5.16304 19 4.5C19 3.83696 18.7366 3.20107 18.2678 2.73223C17.7989 2.26339 17.163 2 16.5 2C13 2 12 7 12 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ProfileIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="currentColor" stroke="currentColor" strokeWidth="2"/>
      <circle cx="12" cy="10" r="3" stroke="white" strokeWidth="2"/>
      <path d="M6.168 18.849A4 4 0 0 1 10 16h4a4 4 0 0 1 3.834 2.855" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

function NavItem({ icon, label, active = false, onClick }: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-1 px-2 py-1 rounded-2xl relative transition-all"
      style={{
        color: active ? 'var(--color-blue-500)' : 'var(--color-blue-200)',
      }}
    >
      {active && (
        <div
          className="absolute inset-0 rounded-2xl opacity-30"
          style={{ backgroundColor: 'var(--color-teal-200)' }}
        />
      )}
      <div className="relative z-10">
        {icon}
      </div>
      <span className="relative z-10 text-[10px] font-semibold leading-none">
        {label}
      </span>
    </button>
  );
}

interface ScanButtonProps {
  onClick?: () => void;
}

function ScanButton({ onClick }: ScanButtonProps) {
  return (
    <button
      onClick={onClick}
      className="absolute -top-6 left-1/2 -translate-x-1/2"
      style={{
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
      }}
    >
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center"
        style={{ backgroundColor: 'var(--color-blue-500)' }}
      >
        <ScanIcon className="text-white" />
      </div>
    </button>
  );
}

interface BottomNavBarProps {
  activeItem?: string;
  onItemClick?: (item: string) => void;
  onScanClick?: () => void;
}

function BottomNavBar({
  activeItem = 'home',
  onItemClick,
  onScanClick,
}: BottomNavBarProps) {
  return (
    <div className="relative w-full max-w-md bg-white rounded-t-3xl shadow-lg">
      <ScanButton onClick={onScanClick} />

      <div className="flex items-center justify-around px-4 py-4 pt-6">
        <NavItem
          icon={<HomeIcon />}
          label="Inicio"
          active={activeItem === 'home'}
          onClick={() => onItemClick?.('home')}
        />

        <NavItem
          icon={<MissionsIcon />}
          label="Misiones"
          active={activeItem === 'missions'}
          onClick={() => onItemClick?.('missions')}
        />

        {/* Spacer for center scan button */}
        <div className="w-12" />

        <NavItem
          icon={<GiftIcon />}
          label="Premios"
          active={activeItem === 'prizes'}
          onClick={() => onItemClick?.('prizes')}
        />

        <NavItem
          icon={<ProfileIcon />}
          label="Mi perfil"
          active={activeItem === 'profile'}
          onClick={() => onItemClick?.('profile')}
        />
      </div>
    </div>
  );
}

function InteractiveDemo() {
  const [activeItem, setActiveItem] = useState('home');
  const [scanCount, setScanCount] = useState(0);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8 border border-blue-200 mb-16">
      <h3 className="title-large font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>Interactive Demo</h3>
      <p className="body-large mb-6" style={{ color: 'var(--color-gray-500)' }}>
        Click on the navigation items to see the active state change. Try the scan button in the center.
      </p>

      <div className="flex justify-center mb-6">
        <BottomNavBar
          activeItem={activeItem}
          onItemClick={setActiveItem}
          onScanClick={() => setScanCount(scanCount + 1)}
        />
      </div>

      <div className="bg-white rounded-lg p-4 border border-gray-200">
        <p className="label-large mb-2" style={{ color: 'var(--color-deep-blue)' }}>
          Active Section: <span className="font-normal capitalize">{activeItem}</span>
        </p>
        <p className="label-large" style={{ color: 'var(--color-deep-blue)' }}>
          Scan Button Clicks: <span className="font-normal">{scanCount}</span>
        </p>
        <button
          onClick={() => {
            setActiveItem('home');
            setScanCount(0);
          }}
          className="mt-2 text-sm underline"
          style={{ color: 'var(--color-blue-500)' }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default function BottomNavShowcase() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h2 className="headline-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Bottom Navigation Bar</h2>
        <div className="title-large space-y-4" style={{ color: 'var(--color-deep-blue)' }}>
          <p>
            The Bottom Navigation Bar is the primary navigation component of the JOY app, designed to provide users with quick access to the main sections of the application from any screen. Its fixed position at the bottom ensures that core functionality is always within reach, enhancing usability and a seamless user experience.
          </p>

          <div>
            <p className="font-bold mb-2">Purpose and Functionality</p>
            <p>
              This component serves as a constant and predictable hub for users to navigate the app. It uses a combination of icons and text labels to clearly communicate each destination. The visual design is consistent across all states, making it easy for users to understand where they are and what their options are.
            </p>
          </div>

          <div>
            <p className="font-bold mb-2">Elements and States</p>
            <p className="mb-2">
              The navigation bar consists of five key elements: Home, Missions, Scan, Prizes, and My Profile. The active state is visually highlighted to provide immediate feedback on the user's current location within the app.
            </p>
            <p className="mb-2">
              <span className="font-bold">Default State:</span> In its default state, the icons and text labels are in a neutral color (light blue) to show that they are not currently selected.
            </p>
            <p className="mb-2">
              <span className="font-bold">Active State:</span> The selected element's icon and text change to a vibrant brand color (blue) to indicate the active screen. A subtle background shape highlights the active icon and text, making it easy for users to understand their current location.
            </p>
            <p>
              <span className="font-bold">Scan Button:</span> The central button, which is typically used for the scanning function, is designed to be visually prominent and distinct from the other elements. It is styled as a filled circle with a unique icon to emphasize its importance as a key call-to-action.
            </p>
          </div>
        </div>
      </div>

      <InteractiveDemo />

      <div className="space-y-12 mb-16">
        <div>
          <h3 className="title-large font-bold mb-6" style={{ color: 'var(--color-deep-blue)' }}>States</h3>

          <div className="space-y-8">
            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Home Active</p>
              <div className="bg-white rounded-lg border border-gray-200 p-8 flex justify-center">
                <BottomNavBar activeItem="home" />
              </div>
            </div>

            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Missions Active</p>
              <div className="bg-white rounded-lg border border-gray-200 p-8 flex justify-center">
                <BottomNavBar activeItem="missions" />
              </div>
            </div>

            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Prizes Active</p>
              <div className="bg-white rounded-lg border border-gray-200 p-8 flex justify-center">
                <BottomNavBar activeItem="prizes" />
              </div>
            </div>

            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Profile Active</p>
              <div className="bg-white rounded-lg border border-gray-200 p-8 flex justify-center">
                <BottomNavBar activeItem="profile" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h3 className="title-large font-bold mb-3" style={{ color: 'var(--color-deep-blue)' }}>Best Practices</h3>
        <ul className="space-y-2">
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Limit navigation items to 5 or fewer to prevent overcrowding</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Always provide both icons and text labels for clarity and accessibility</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Use clear visual distinction between active and inactive states</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>The central scan button should be the most prominent element for primary actions</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Ensure consistent placement across all screens in the app</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Maintain adequate touch target sizes (minimum 44x44px) for mobile usability</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
