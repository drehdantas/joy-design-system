import { useState } from 'react';

function PlusIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function SearchIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
      <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

interface InputProps {
  label?: string;
  hint?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  error?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  type?: 'text' | 'email' | 'password' | 'number';
  showLabel?: boolean;
  showHint?: boolean;
}

function Input({
  label,
  hint,
  placeholder = 'Lorem ipsum',
  value,
  onChange,
  disabled = false,
  error,
  iconLeft,
  iconRight,
  type = 'text',
  showLabel = true,
  showHint = true,
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const getBorderColor = () => {
    if (error) return 'var(--color-error)';
    if (isFocused || value) return 'var(--color-blue-500)';
    return 'var(--color-deep-blue)';
  };

  const getBorderWidth = () => {
    if (error) return '2px';
    if (isFocused || value) return '2px';
    return '1px';
  };

  const getBackgroundColor = () => {
    if (disabled) return 'var(--color-dark-100)';
    return 'white';
  };

  const getTextColor = () => {
    if (disabled) return 'var(--color-dark-300)';
    if (value) return 'var(--color-deep-blue)';
    return 'var(--color-dark-300)';
  };

  return (
    <div className="flex flex-col gap-2 w-full max-w-md">
      {showLabel && label && (
        <label className="label-large" style={{ color: 'var(--color-deep-blue)' }}>
          {label}
        </label>
      )}

      <div className="relative">
        <div
          className="flex items-center gap-2 px-4 py-3 rounded-full transition-all"
          style={{
            backgroundColor: getBackgroundColor(),
            borderColor: getBorderColor(),
            borderWidth: getBorderWidth(),
            borderStyle: 'solid',
            boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
          }}
        >
          {iconLeft && (
            <div className="shrink-0" style={{ color: 'var(--color-dark-200)' }}>
              {iconLeft}
            </div>
          )}

          <input
            type={type}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            disabled={disabled}
            placeholder={placeholder}
            className="flex-1 bg-transparent outline-none body-large"
            style={{
              color: getTextColor(),
            }}
          />

          {isFocused && value && !iconRight && (
            <span className="body-large" style={{ color: 'var(--color-deep-blue)' }}>|</span>
          )}

          {iconRight && (
            <div className="shrink-0" style={{ color: 'var(--color-dark-200)' }}>
              {iconRight}
            </div>
          )}
        </div>
      </div>

      {showHint && (hint || error) && (
        <p className="body-small" style={{ color: error ? 'var(--color-error)' : 'var(--color-gray-500)' }}>
          {error || hint}
        </p>
      )}
    </div>
  );
}

function InputStateSection({
  title,
  description,
  children
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-12">
      <div className="mb-6">
        <h3 className="title-large font-bold mb-2" style={{ color: 'var(--color-deep-blue)' }}>{title}</h3>
        <p className="body-large" style={{ color: 'var(--color-gray-500)', fontWeight: 300 }}>{description}</p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-8">
        {children}
      </div>
    </div>
  );
}

function InteractiveDemo() {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleEmailChange = (value: string) => {
    setEmailValue(value);
    if (value && !value.includes('@')) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8 border border-blue-200 mb-16">
      <h3 className="title-large font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>Interactive Demo</h3>
      <p className="body-large mb-6" style={{ color: 'var(--color-gray-500)' }}>
        Try typing in the input fields below to see them in action.
      </p>

      <div className="space-y-6">
        <Input
          label="Basic Input"
          placeholder="Type something..."
          value={value1}
          onChange={setValue1}
          hint="This is a hint text."
        />

        <Input
          label="With Left Icon"
          placeholder="Search..."
          value={value2}
          onChange={setValue2}
          iconLeft={<SearchIcon />}
          hint="Search for anything"
        />

        <Input
          label="With Both Icons"
          placeholder="Enter value..."
          value={value3}
          onChange={setValue3}
          iconLeft={<PlusIcon />}
          iconRight={<SearchIcon />}
          hint="Icons on both sides"
        />

        <Input
          label="Email Validation"
          type="email"
          placeholder="your@email.com"
          value={emailValue}
          onChange={handleEmailChange}
          error={emailError}
          iconLeft={<SearchIcon />}
        />
      </div>
    </div>
  );
}

export default function InputsShowcase() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h2 className="headline-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Inputs</h2>
        <p className="title-large" style={{ color: 'var(--color-deep-blue)' }}>
          Input fields are fundamental for user data entry and interaction within the JOY app. This section outlines the various types, states, and specifications for our text input components, ensuring consistent and accessible data capture.
        </p>
      </div>

      <InteractiveDemo />

      <InputStateSection
        title="Standard Input"
        description="The default appearance of a text input."
      >
        <div className="space-y-6">
          <Input
            label="Lorem ipsum"
            placeholder="Lorem ipsum"
            iconLeft={<PlusIcon />}
            iconRight={<PlusIcon />}
            hint="This is a hint text."
          />
        </div>
      </InputStateSection>

      <InputStateSection
        title="Filled Input"
        description="The appearance when a user is actively interacting with the field."
      >
        <div className="space-y-6">
          <Input
            label="Lorem ipsum"
            value="Lorem ipsum "
            iconLeft={<PlusIcon />}
            iconRight={<PlusIcon />}
            hint="This is a hint text."
          />
        </div>
      </InputStateSection>

      <InputStateSection
        title="Completed Input"
        description="The default appearance of a text input that has been filled out."
      >
        <div className="space-y-6">
          <Input
            label="Lorem ipsum"
            value="Lorem ipsum"
            iconLeft={<PlusIcon />}
            iconRight={<PlusIcon />}
            hint="This is a hint text."
          />
        </div>
      </InputStateSection>

      <InputStateSection
        title="Disabled Input"
        description="Appearance when the input is not interactive (greyed out)."
      >
        <div className="space-y-6">
          <Input
            label="Lorem ipsum"
            placeholder="Lorem ipsum"
            disabled
            iconLeft={<PlusIcon />}
            iconRight={<PlusIcon />}
            hint="This is a hint text."
          />
        </div>
      </InputStateSection>

      <InputStateSection
        title="Input with Error State"
        description="Appearance when validation fails (red border, error message)."
      >
        <div className="space-y-6">
          <Input
            label="Lorem ipsum"
            value="Lorem ipsum"
            error="This is an error message."
            iconLeft={<PlusIcon />}
            iconRight={<PlusIcon />}
          />
        </div>
      </InputStateSection>

      <div className="mt-16 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h3 className="title-large font-bold mb-3" style={{ color: 'var(--color-deep-blue)' }}>Best Practices</h3>
        <ul className="space-y-2">
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Always provide clear labels for inputs to improve accessibility and usability</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Use helpful placeholder text that demonstrates the expected format</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Provide immediate validation feedback to help users correct errors</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Use hint text to provide additional context or formatting requirements</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Icons should enhance understanding, not replace clear labels</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Ensure sufficient color contrast for accessibility compliance</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
