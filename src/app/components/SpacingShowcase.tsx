const spacingTokens = [
  { name: '0', size: '0px', pixels: 0, rem: '0' },
  { name: 'px', size: '1px', pixels: 1, rem: '0.0625rem' },
  { name: '0.5', size: '0.125rem', pixels: 2, rem: '0.125rem' },
  { name: '1', size: '0.25rem', pixels: 4, rem: '0.25rem' },
  { name: '1.5', size: '0.375rem', pixels: 6, rem: '0.375rem' },
  { name: '2', size: '0.5rem', pixels: 8, rem: '0.5rem' },
  { name: '2.5', size: '0.625rem', pixels: 10, rem: '0.625rem' },
  { name: '3', size: '0.75rem', pixels: 12, rem: '0.75rem' },
  { name: '3.5', size: '0.875rem', pixels: 14, rem: '0.875rem' },
  { name: '4', size: '1rem', pixels: 16, rem: '1rem' },
  { name: '5', size: '1.25rem', pixels: 20, rem: '1.25rem' },
  { name: '6', size: '1.5rem', pixels: 24, rem: '1.5rem' },
  { name: '7', size: '1.75rem', pixels: 28, rem: '1.75rem' },
  { name: '8', size: '2rem', pixels: 32, rem: '2rem' },
  { name: '9', size: '2.25rem', pixels: 36, rem: '2.25rem' },
  { name: '10', size: '2.5rem', pixels: 40, rem: '2.5rem' },
  { name: '11', size: '2.75rem', pixels: 44, rem: '2.75rem' },
  { name: '12', size: '3rem', pixels: 48, rem: '3rem' },
  { name: '14', size: '3.5rem', pixels: 56, rem: '3.5rem' },
  { name: '16', size: '4rem', pixels: 64, rem: '4rem' },
  { name: '20', size: '5rem', pixels: 80, rem: '5rem' },
  { name: '24', size: '6rem', pixels: 96, rem: '6rem' },
  { name: '28', size: '7rem', pixels: 112, rem: '7rem' },
  { name: '32', size: '8rem', pixels: 128, rem: '8rem' },
  { name: '36', size: '9rem', pixels: 144, rem: '9rem' },
  { name: '40', size: '10rem', pixels: 160, rem: '10rem' },
  { name: '44', size: '11rem', pixels: 176, rem: '11rem' },
  { name: '48', size: '12rem', pixels: 192, rem: '12rem' },
  { name: '52', size: '13rem', pixels: 208, rem: '13rem' },
  { name: '56', size: '14rem', pixels: 224, rem: '14rem' },
  { name: '60', size: '15rem', pixels: 240, rem: '15rem' },
  { name: '64', size: '16rem', pixels: 256, rem: '16rem' },
  { name: '72', size: '18rem', pixels: 288, rem: '18rem' },
  { name: '80', size: '20rem', pixels: 320, rem: '20rem' },
  { name: '96', size: '24rem', pixels: 384, rem: '24rem' },
];

interface SpacingRowProps {
  name: string;
  size: string;
  pixels: number;
}

function SpacingRow({ name, size, pixels }: SpacingRowProps) {
  return (
    <div className="grid grid-cols-[80px_120px_80px_1fr] gap-4 items-center py-2 border-b border-gray-200">
      <p className="label-large" style={{ color: 'var(--color-deep-blue)' }}>{name}</p>
      <p className="body-medium" style={{ color: 'var(--color-deep-blue)' }}>{size}</p>
      <p className="body-medium" style={{ color: 'var(--color-deep-blue)' }}>{pixels}px</p>
      <div className="flex items-center">
        <div
          className="h-4"
          style={{
            width: `${Math.min(pixels, 400)}px`,
            backgroundColor: 'var(--color-blue-500)'
          }}
        />
      </div>
    </div>
  );
}

export default function SpacingShowcase() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h2 className="headline-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Spacing</h2>
        <p className="title-large" style={{ color: 'var(--color-deep-blue)' }}>
          A consistent spacing system is crucial for creating harmonious layouts, improving readability, and maintaining visual hierarchy.
          JOY utilizes a scalable, token-based spacing system, allowing for flexible and precise control over element relationships.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="grid grid-cols-[80px_120px_80px_1fr] gap-4 mb-4 pb-2 border-b-2 border-gray-300">
          <p className="header" style={{ color: 'var(--color-deep-blue)' }}>Name</p>
          <p className="header" style={{ color: 'var(--color-deep-blue)' }}>Size</p>
          <p className="header" style={{ color: 'var(--color-deep-blue)' }}>Pixels</p>
          <p className="header" style={{ color: 'var(--color-deep-blue)' }}>Visual</p>
        </div>

        <div className="max-h-[600px] overflow-y-auto">
          {spacingTokens.map((token) => (
            <SpacingRow key={token.name} {...token} />
          ))}
        </div>
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="title-large font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>Usage Guidelines</h3>
          <ul className="space-y-3">
            <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span>Use consistent spacing tokens throughout your designs</span>
            </li>
            <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span>Prefer rem units for scalability and accessibility</span>
            </li>
            <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span>Use larger spacing values for section separation</span>
            </li>
            <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span>Use smaller values for related content grouping</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="title-large font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>Common Patterns</h3>
          <div className="space-y-4">
            <div>
              <p className="label-large mb-2" style={{ color: 'var(--color-deep-blue)' }}>Component Padding</p>
              <p className="body-small" style={{ color: 'var(--color-dark-300)' }}>4, 6, 8 (16px, 24px, 32px)</p>
            </div>
            <div>
              <p className="label-large mb-2" style={{ color: 'var(--color-deep-blue)' }}>Element Gaps</p>
              <p className="body-small" style={{ color: 'var(--color-dark-300)' }}>2, 3, 4 (8px, 12px, 16px)</p>
            </div>
            <div>
              <p className="label-large mb-2" style={{ color: 'var(--color-deep-blue)' }}>Section Margins</p>
              <p className="body-small" style={{ color: 'var(--color-dark-300)' }}>12, 16, 20, 24 (48px, 64px, 80px, 96px)</p>
            </div>
            <div>
              <p className="label-large mb-2" style={{ color: 'var(--color-deep-blue)' }}>Page Padding</p>
              <p className="body-small" style={{ color: 'var(--color-dark-300)' }}>16, 20, 24 (64px, 80px, 96px)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
