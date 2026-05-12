import { useState } from 'react';

interface ButtonProps {
  variant?: 'filled' | 'outlined' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
}

function Button({
  variant = 'filled',
  size = 'md',
  disabled = false,
  iconLeft,
  iconRight,
  children,
  onClick
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center gap-2 font-semibold transition-all rounded-full';

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variantClasses = {
    filled: disabled
      ? 'cursor-not-allowed'
      : 'bg-[var(--color-blue-500)] text-white hover:bg-[var(--color-blue-300)] active:bg-[var(--color-blue-300)] cursor-pointer',
    outlined: disabled
      ? 'cursor-not-allowed'
      : 'border-2 border-[var(--color-blue-500)] text-[var(--color-blue-500)] hover:bg-[var(--color-blue-100)] active:bg-[var(--color-blue-200)] cursor-pointer',
    tertiary: disabled
      ? 'cursor-not-allowed'
      : 'text-[var(--color-blue-500)] hover:bg-[var(--color-blue-100)] active:bg-[var(--color-blue-200)] cursor-pointer',
  };

  const disabledStyles = disabled ? {
    backgroundColor: variant === 'filled' ? 'var(--color-dark-100)' : 'transparent',
    borderColor: variant === 'outlined' ? 'var(--color-dark-100)' : undefined,
    color: 'var(--color-dark-200)',
  } : {};

  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${variant === 'outlined' && !disabled ? 'border-2' : ''}`}
      style={disabledStyles}
      disabled={disabled}
      onClick={onClick}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}

function ChevronDownIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ButtonVariantSection({
  title,
  description,
  variant
}: {
  title: string;
  description: string;
  variant: 'filled' | 'outlined' | 'tertiary';
}) {
  return (
    <div className="mb-16">
      <div className="mb-8">
        <h3 className="title-large font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>{title}</h3>
        <p className="body-large" style={{ color: 'var(--color-gray-500)', fontWeight: 300 }}>{description}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div>
          <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Enabled</p>
          <div className="space-y-4 bg-white p-6 rounded-lg border border-gray-200">
            <Button variant={variant}>Button</Button>
            <Button variant={variant} iconRight={<ChevronDownIcon />}>Button</Button>
            <Button variant={variant} iconLeft={<ChevronDownIcon />}>Button</Button>
            <Button variant={variant} iconLeft={<ChevronDownIcon />} iconRight={<ChevronDownIcon />}>
              Button
            </Button>
          </div>
          <p className="body-small mt-2" style={{ color: 'var(--color-gray-500)' }}>
            The default interactive state. Clearly visible and inviting interaction.
          </p>
        </div>

        <div>
          <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Pressed</p>
          <div className="space-y-4 bg-white p-6 rounded-lg border border-gray-200">
            <Button variant={variant}>Button</Button>
            <Button variant={variant} iconRight={<ChevronDownIcon />}>Button</Button>
            <Button variant={variant} iconLeft={<ChevronDownIcon />}>Button</Button>
            <Button variant={variant} iconLeft={<ChevronDownIcon />} iconRight={<ChevronDownIcon />}>
              Button
            </Button>
          </div>
          <p className="body-small mt-2" style={{ color: 'var(--color-gray-500)' }}>
            Provides immediate visual feedback when a user taps/clicks, confirming the interaction.
          </p>
        </div>

        <div>
          <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Disabled</p>
          <div className="space-y-4 bg-white p-6 rounded-lg border border-gray-200">
            <Button variant={variant} disabled>Button</Button>
            <Button variant={variant} disabled iconRight={<ChevronDownIcon />}>Button</Button>
            <Button variant={variant} disabled iconLeft={<ChevronDownIcon />}>Button</Button>
            <Button variant={variant} disabled iconLeft={<ChevronDownIcon />} iconRight={<ChevronDownIcon />}>
              Button
            </Button>
          </div>
          <p className="body-small mt-2" style={{ color: 'var(--color-gray-500)' }}>
            Indicates an action is currently unavailable. Visually greyed out and non-interactive.
          </p>
        </div>
      </div>
    </div>
  );
}

function InteractiveDemo() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8 border border-blue-200">
      <h3 className="title-large font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>Interactive Demo</h3>
      <p className="body-large mb-6" style={{ color: 'var(--color-gray-500)' }}>
        Try out the different button variants and see how they respond to interaction.
      </p>

      <div className="flex flex-wrap gap-4 mb-6">
        <Button variant="filled" onClick={() => setCount(count + 1)}>
          Filled Button
        </Button>
        <Button variant="outlined" onClick={() => setCount(count + 1)}>
          Outlined Button
        </Button>
        <Button variant="tertiary" onClick={() => setCount(count + 1)}>
          Tertiary Button
        </Button>
        <Button variant="filled" iconRight={<ChevronDownIcon />} onClick={() => setCount(count + 1)}>
          With Icon
        </Button>
        <Button variant="filled" disabled>
          Disabled
        </Button>
      </div>

      <div className="bg-white rounded-lg p-4 border border-gray-200">
        <p className="label-large" style={{ color: 'var(--color-deep-blue)' }}>
          Clicks: <span className="text-2xl font-bold" style={{ color: 'var(--color-blue-500)' }}>{count}</span>
        </p>
        <button
          onClick={() => setCount(0)}
          className="mt-2 text-sm underline"
          style={{ color: 'var(--color-blue-500)' }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default function ButtonsShowcase() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h2 className="headline-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Buttons</h2>
        <p className="title-large" style={{ color: 'var(--color-deep-blue)' }}>
          Buttons are key interactive elements that trigger actions within the JOY app. This section details our primary, secondary, and tertiary button styles, along with their various states, ensuring consistent user interaction and clear calls-to-action.
        </p>
      </div>

      <InteractiveDemo />

      <div className="mt-16">
        <ButtonVariantSection
          title="Filled"
          description="Used for the most important actions on a screen or within a section. There should typically be only one primary button per screen to guide the user towards the main goal (e.g., 'Submit', 'Next Step', 'Purchase')."
          variant="filled"
        />

        <ButtonVariantSection
          title="Outlined"
          description="Used for less critical, alternative, or tertiary actions that are still important but should not compete with the primary action (e.g., 'Cancel', 'Learn More', 'View Details')."
          variant="outlined"
        />

        <ButtonVariantSection
          title="Tertiary"
          description="These are for the least prominent actions that a user may need to access. They have the lowest visual emphasis and are typically used for less critical or lesser-performed actions, such as 'Cancel', 'Skip', or 'View Details'."
          variant="tertiary"
        />
      </div>

      <div className="mt-16 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h3 className="title-large font-bold mb-3" style={{ color: 'var(--color-deep-blue)' }}>Best Practices</h3>
        <ul className="space-y-2">
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Use only one primary (filled) button per screen to maintain clear hierarchy</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Button labels should be clear and action-oriented (e.g., "Save Changes" vs "OK")</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Provide visual feedback for all interactive states (hover, pressed, disabled)</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Icons should enhance meaning, not replace clear text labels</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Maintain sufficient spacing between buttons to prevent accidental taps</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
