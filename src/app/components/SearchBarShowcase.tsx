import { useState } from 'react';

function SearchIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
      <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

function FilterIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M3 7H21M6 12H18M9 17H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onFilterClick?: () => void;
  showFilter?: boolean;
}

function SearchBar({
  placeholder = '¿Que se te antoja hoy?',
  value,
  onChange,
  onFilterClick,
  showFilter = true,
}: SearchBarProps) {
  const [isFocused, setIsFocused] = useState(false);
  const isActive = isFocused || (value && value.length > 0);

  const iconColor = isActive ? 'var(--color-blue-500)' : 'var(--color-dark-100)';
  const textColor = isActive ? 'var(--color-deep-blue)' : 'var(--color-dark-100)';
  const borderColor = 'var(--color-dark-200)';

  return (
    <div className="w-full max-w-md">
      <div
        className="flex items-center gap-2 px-4 py-3 rounded-full transition-all bg-white"
        style={{
          borderColor: borderColor,
          borderWidth: '1px',
          borderStyle: 'solid',
          boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
        }}
      >
        <div className="shrink-0" style={{ color: iconColor }}>
          <SearchIcon />
        </div>

        <input
          type="text"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="flex-1 bg-transparent outline-none body-large"
          style={{
            color: textColor,
          }}
        />

        {showFilter && (
          <button
            onClick={onFilterClick}
            className="shrink-0 transition-colors"
            style={{ color: iconColor }}
            aria-label="Filter"
          >
            <FilterIcon />
          </button>
        )}
      </div>
    </div>
  );
}

function InteractiveDemo() {
  const [searchValue, setSearchValue] = useState('');
  const [filterCount, setFilterCount] = useState(0);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8 border border-blue-200 mb-16">
      <h3 className="title-large font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>Interactive Demo</h3>
      <p className="body-large mb-6" style={{ color: 'var(--color-gray-500)' }}>
        Try typing in the search bar to see it change from the normal to active state.
      </p>

      <div className="space-y-6">
        <SearchBar
          placeholder="Search for anything..."
          value={searchValue}
          onChange={setSearchValue}
          onFilterClick={() => setFilterCount(filterCount + 1)}
        />

        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <p className="label-large mb-2" style={{ color: 'var(--color-deep-blue)' }}>
            Search Query: <span className="font-normal">{searchValue || '(empty)'}</span>
          </p>
          <p className="label-large" style={{ color: 'var(--color-deep-blue)' }}>
            Filter Clicks: <span className="font-normal">{filterCount}</span>
          </p>
          <button
            onClick={() => {
              setSearchValue('');
              setFilterCount(0);
            }}
            className="mt-2 text-sm underline"
            style={{ color: 'var(--color-blue-500)' }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

function StateSection({
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

      <div className="bg-white rounded-lg border border-gray-200 p-8 flex justify-center">
        {children}
      </div>
    </div>
  );
}

export default function SearchBarShowcase() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h2 className="headline-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Search Bar</h2>
        <div className="title-large space-y-4" style={{ color: 'var(--color-deep-blue)' }}>
          <p>
            The Search Bar is a crucial component that allows users to find content within the JOY app. It is a single component with two distinct visual states: normal and filled. This ensures a clear and intuitive user experience by providing immediate feedback on the interaction.
          </p>

          <div>
            <p className="font-bold mb-2">Purpose and Functionality</p>
            <p>
              The Search Bar component provides a simple, direct entry point for users to search for campaigns, products, or other content. Its minimalist design reduces visual clutter while making it clear to the user that they can begin a search at any time.
            </p>
          </div>

          <div>
            <p className="font-bold mb-2">Elements and States</p>
            <p className="mb-2">
              <span className="font-bold">Normal State:</span> The default appearance of the search bar. The text inside the input field serves as a placeholder to guide the user (e.g., "¿Qué se te antoja hoy?"). The icons on either side are a neutral color, indicating a ready-to-use state.
            </p>
            <p>
              <span className="font-bold">Filled State:</span> The appearance of the search bar when the user has entered text. The text changes to a bold, dark color, and the icons become a vibrant brand color (e.g., blue) to provide immediate visual feedback. This state signals that the user has successfully entered a search query and is ready to proceed.
            </p>
          </div>
        </div>
      </div>

      <InteractiveDemo />

      <StateSection
        title="Normal State"
        description="The default appearance of the search bar with neutral grey icons and placeholder text."
      >
        <SearchBar placeholder="¿Que se te antoja hoy?" />
      </StateSection>

      <StateSection
        title="Active/Filled State"
        description="The appearance when the user has entered text. Icons change to brand blue color to provide visual feedback."
      >
        <SearchBar value="¿Que se te antoja hoy?" />
      </StateSection>

      <div className="mb-12">
        <h3 className="title-large font-bold mb-6" style={{ color: 'var(--color-deep-blue)' }}>Variations</h3>

        <div className="space-y-6 bg-white rounded-lg border border-gray-200 p-8">
          <div>
            <p className="label-large mb-3" style={{ color: 'var(--color-deep-blue)' }}>Standard Search Bar</p>
            <SearchBar placeholder="Search..." />
          </div>

          <div>
            <p className="label-large mb-3" style={{ color: 'var(--color-deep-blue)' }}>Without Filter Icon</p>
            <SearchBar placeholder="Search without filter..." showFilter={false} />
          </div>

          <div>
            <p className="label-large mb-3" style={{ color: 'var(--color-deep-blue)' }}>Custom Placeholder</p>
            <SearchBar placeholder="Find your next adventure..." />
          </div>
        </div>
      </div>

      <div className="mt-16 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h3 className="title-large font-bold mb-3" style={{ color: 'var(--color-deep-blue)' }}>Best Practices</h3>
        <ul className="space-y-2">
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Use clear, contextual placeholder text that guides users on what they can search for</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Provide immediate visual feedback when users interact with the search bar</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Place the search bar prominently where users expect to find it (headers, toolbars)</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Keep the design minimal to avoid visual clutter and maintain focus</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Use the filter icon only when filtering options are available</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Ensure the search bar is large enough for touch targets on mobile devices</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
