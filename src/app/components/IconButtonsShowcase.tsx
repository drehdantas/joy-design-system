import { useState } from 'react';

// Icon Components
function ArrowOutwardIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M6 6H18V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ChevronDownIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function AddIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function EditIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.5 2.5C18.8978 2.10217 19.4374 1.87868 20 1.87868C20.5626 1.87868 21.1022 2.10217 21.5 2.5C21.8978 2.89782 22.1213 3.43739 22.1213 4C22.1213 4.56261 21.8978 5.10217 21.5 5.5L12 15L8 16L9 12L18.5 2.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ArrowBackIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function RefreshIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M21.5 2V8H15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.5 22V16H8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.51 9C5.15839 7.28565 6.33971 5.81718 7.87545 4.8006C9.41119 3.78401 11.2267 3.26498 13.0686 3.31326C14.9106 3.36154 16.6944 3.97488 18.1739 5.07085C19.6534 6.16682 20.7587 7.69133 21.34 9.43" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.49 15C18.8416 16.7143 17.6603 18.1828 16.1245 19.1994C14.5888 20.216 12.7733 20.735 10.9314 20.6867C9.08943 20.6385 7.30563 20.0251 5.82614 18.9292C4.34665 17.8332 3.24132 16.3087 2.66 14.57" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function MapIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
      <path d="M12 2C8.13401 2 5 5.13401 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13401 15.866 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

interface IconButtonProps {
  icon: React.ReactNode;
  variant?: 'standard' | 'filled';
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  ariaLabel: string;
}

function IconButton({
  icon,
  variant = 'standard',
  disabled = false,
  size = 'md',
  onClick,
  ariaLabel
}: IconButtonProps) {
  const sizeClasses = {
    sm: 'p-1',
    md: 'p-2',
    lg: 'p-3',
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  };

  const baseClasses = 'inline-flex items-center justify-center rounded-full transition-all';

  const variantClasses = {
    standard: disabled
      ? 'cursor-not-allowed'
      : 'hover:bg-gray-100 active:bg-gray-200 cursor-pointer',
    filled: disabled
      ? 'cursor-not-allowed'
      : 'cursor-pointer hover:opacity-90 active:opacity-80',
  };

  const disabledStyles = disabled ? {
    backgroundColor: variant === 'filled' ? 'var(--color-dark-100)' : 'transparent',
    color: 'var(--color-dark-200)',
  } : variant === 'filled' ? {
    backgroundColor: 'var(--color-blue-500)',
    color: 'white',
  } : {
    color: 'var(--color-gray-700)',
  };

  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]}`}
      style={disabledStyles}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <div className={iconSizes[size]}>
        {icon}
      </div>
    </button>
  );
}

function TopLevelActionsDemo() {
  return (
    <div className="mb-16">
      <h3 className="title-large font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>Top-Level Actions</h3>
      <p className="body-large mb-6" style={{ color: 'var(--color-gray-500)', fontWeight: 300 }}>
        This component is a collection of icon-only buttons used for primary actions or navigation within a specific screen or context. Ideal for grouping a set of related, top-level actions that a user might perform, such as adding content, navigating back, or refreshing data.
      </p>

      <div className="bg-white rounded-lg border border-gray-200 p-8">
        <div className="flex flex-wrap gap-4 items-center">
          <IconButton icon={<ArrowOutwardIcon />} ariaLabel="Go" />
          <IconButton icon={<ChevronDownIcon />} ariaLabel="Dropdown" />
          <IconButton icon={<AddIcon />} ariaLabel="Add" />
          <IconButton icon={<EditIcon />} ariaLabel="Edit" />
          <IconButton icon={<ArrowBackIcon />} ariaLabel="Back" />
          <IconButton icon={<RefreshIcon />} ariaLabel="Refresh" />
          <IconButton icon={<MapIcon />} ariaLabel="Map" />
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="label-large mb-3" style={{ color: 'var(--color-deep-blue)' }}>Different Sizes</p>
          <div className="flex flex-wrap gap-4 items-center">
            <IconButton icon={<AddIcon />} size="sm" ariaLabel="Add small" />
            <IconButton icon={<AddIcon />} size="md" ariaLabel="Add medium" />
            <IconButton icon={<AddIcon />} size="lg" ariaLabel="Add large" />
          </div>
        </div>
      </div>
    </div>
  );
}

function PrimaryIconButtonsDemo() {
  return (
    <div className="mb-16">
      <h3 className="title-large font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>Primary Icon Buttons</h3>
      <p className="body-large mb-6" style={{ color: 'var(--color-gray-500)', fontWeight: 300 }}>
        These components represent a single, high-priority action and are designed to stand out. They are typically used for a single call-to-action on a screen or within a component. Well-suited for a Floating Action Button (FAB) or as a clear CTA in a card.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Enabled</p>
          <div className="bg-white rounded-lg border border-gray-200 p-8 flex justify-center">
            <IconButton icon={<ArrowOutwardIcon />} variant="filled" ariaLabel="Go" />
          </div>
        </div>

        <div>
          <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Pressed</p>
          <div className="bg-white rounded-lg border border-gray-200 p-8 flex justify-center">
            <IconButton icon={<ArrowOutwardIcon />} variant="filled" ariaLabel="Go" />
          </div>
          <p className="body-small mt-2" style={{ color: 'var(--color-gray-500)' }}>
            Hover or click to see the pressed state
          </p>
        </div>

        <div>
          <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Disabled</p>
          <div className="bg-white rounded-lg border border-gray-200 p-8 flex justify-center">
            <IconButton icon={<ArrowOutwardIcon />} variant="filled" disabled ariaLabel="Go disabled" />
          </div>
        </div>
      </div>
    </div>
  );
}

function InteractiveDemo() {
  const [count, setCount] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8 border border-blue-200 mb-16">
      <h3 className="title-large font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>Interactive Demo</h3>
      <p className="body-large mb-6" style={{ color: 'var(--color-gray-500)' }}>
        Try clicking the icon buttons below to see them in action.
      </p>

      <div className="flex flex-wrap gap-4 items-center mb-6">
        <IconButton
          icon={<AddIcon />}
          variant="filled"
          onClick={() => setCount(count + 1)}
          ariaLabel="Increment"
        />
        <IconButton
          icon={<EditIcon />}
          onClick={() => setCount(count + 1)}
          ariaLabel="Edit"
        />
        <IconButton
          icon={<RefreshIcon />}
          onClick={() => setCount(0)}
          ariaLabel="Reset"
        />
        <IconButton
          icon={<ArrowBackIcon />}
          onClick={() => setCount(Math.max(0, count - 1))}
          ariaLabel="Decrement"
        />
        <IconButton
          icon={<MapIcon />}
          variant="filled"
          disabled
          ariaLabel="Map disabled"
        />
      </div>

      <div className="bg-white rounded-lg p-4 border border-gray-200">
        <p className="label-large" style={{ color: 'var(--color-deep-blue)' }}>
          Clicks: <span className="text-2xl font-bold" style={{ color: 'var(--color-blue-500)' }}>{count}</span>
        </p>
      </div>
    </div>
  );
}

export default function IconButtonsShowcase() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h2 className="headline-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Icon Buttons</h2>
        <p className="title-large" style={{ color: 'var(--color-deep-blue)' }}>
          Icon buttons are used for actions that are universally recognized, or when space is limited. They provide clear visual cues for user interaction, enhancing the app's clean and intuitive interface.
        </p>
      </div>

      <InteractiveDemo />
      <TopLevelActionsDemo />
      <PrimaryIconButtonsDemo />

      <div className="mt-16 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h3 className="title-large font-bold mb-3" style={{ color: 'var(--color-deep-blue)' }}>Best Practices</h3>
        <ul className="space-y-2">
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>All icons should be of a consistent size and style to maintain visual harmony</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Pair icon buttons with tooltips or labels for accessibility when meaning isn't immediately obvious</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Use standard icons for universal actions (add, edit, delete, back, refresh)</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Maintain adequate touch target size (minimum 44x44px) for mobile accessibility</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Use filled variant for primary floating action buttons (FAB)</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
