export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
          <h2 className="headline-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>
            Profile Page
          </h2>
          <p className="body-large mb-6" style={{ color: 'var(--color-gray-500)' }}>
            This is a placeholder for the profile page. Share a Figma screen to build this page with the design system components.
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 rounded-lg">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="var(--color-blue-500)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8.5 10C9.32843 10 10 9.32843 10 8.5C10 7.67157 9.32843 7 8.5 7C7.67157 7 7 7.67157 7 8.5C7 9.32843 7.67157 10 8.5 10Z" stroke="var(--color-blue-500)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 15L16 10L5 21" stroke="var(--color-blue-500)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="label-large" style={{ color: 'var(--color-deep-blue)' }}>
              Ready for Figma design
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
