interface TypeStyleProps {
  className: string;
  label: string;
  description: string;
  sampleText?: string;
}

function TypeStyle({ className, label, description, sampleText = 'The quick brown fox jumps over the lazy dog' }: TypeStyleProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-md transition-shadow">
      <div className="mb-3">
        <h3 className="text-sm font-semibold text-gray-900 mb-1">{label}</h3>
        <p className="text-xs text-gray-500 font-mono">{description}</p>
      </div>
      <p className={className} style={{ color: 'var(--color-dark-500)' }}>
        {sampleText}
      </p>
    </div>
  );
}

interface TypeSectionProps {
  title: string;
  styles: Array<{ className: string; label: string; description: string }>;
}

function TypeSection({ title, styles }: TypeSectionProps) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">{title}</h2>
      <div className="grid grid-cols-1 gap-6">
        {styles.map((style) => (
          <TypeStyle key={style.className} {...style} />
        ))}
      </div>
    </div>
  );
}

export default function TypographyShowcase() {
  const typeSections = [
    {
      title: 'Display Styles',
      styles: [
        {
          className: 'display-large',
          label: 'Display Large',
          description: 'font-size: 57px, font-weight: 400',
        },
        {
          className: 'display-medium',
          label: 'Display Medium',
          description: 'font-size: 45px, font-weight: 400',
        },
        {
          className: 'display-small',
          label: 'Display Small',
          description: 'font-size: 36px, font-weight: 700',
        },
      ],
    },
    {
      title: 'Headline Styles',
      styles: [
        {
          className: 'headline-large',
          label: 'Headline Large',
          description: 'font-size: 32px, font-weight: 700',
        },
        {
          className: 'headline-medium',
          label: 'Headline Medium',
          description: 'font-size: 28px, font-weight: 700',
        },
        {
          className: 'headline-small',
          label: 'Headline Small',
          description: 'font-size: 24px, font-weight: 700',
        },
      ],
    },
    {
      title: 'Title Styles',
      styles: [
        {
          className: 'title-large',
          label: 'Title Large',
          description: 'font-size: 18px, font-weight: 400',
        },
        {
          className: 'title-medium',
          label: 'Title Medium',
          description: 'font-size: 16px, font-weight: 400',
        },
        {
          className: 'title-small',
          label: 'Title Small',
          description: 'font-size: 14px, font-weight: 600',
        },
      ],
    },
    {
      title: 'Body Styles',
      styles: [
        {
          className: 'body-large',
          label: 'Body Large',
          description: 'font-size: 16px, font-weight: 400',
        },
        {
          className: 'body-medium',
          label: 'Body Medium',
          description: 'font-size: 14px, font-weight: 400',
        },
        {
          className: 'body-small',
          label: 'Body Small',
          description: 'font-size: 12px, font-weight: 400',
        },
      ],
    },
    {
      title: 'Label Styles',
      styles: [
        {
          className: 'label-large',
          label: 'Label Large',
          description: 'font-size: 14px, font-weight: 500',
        },
        {
          className: 'label-medium',
          label: 'Label Medium',
          description: 'font-size: 12px, font-weight: 500',
        },
        {
          className: 'label-small',
          label: 'Label Small',
          description: 'font-size: 11px, font-weight: 500',
        },
      ],
    },
    {
      title: 'Other Styles',
      styles: [
        {
          className: 'header',
          label: 'Header',
          description: 'font-size: 16px, font-weight: 700',
        },
        {
          className: 'display-link',
          label: 'Display Link',
          description: 'font-size: 12px, font-weight: 400, underline',
        },
        {
          className: 'display',
          label: 'Display',
          description: 'font-size: 12px, font-weight: 700',
        },
      ],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <p className="text-lg text-gray-600">
          Text styles using the Onest font family. All styles are available as CSS classes (e.g., <code className="bg-gray-200 px-2 py-1 rounded text-sm">.display-large</code>).
        </p>
      </div>

      {typeSections.map((section) => (
        <TypeSection key={section.title} {...section} />
      ))}
    </div>
  );
}
