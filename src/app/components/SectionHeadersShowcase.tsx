import { useState } from 'react';
import svgPaths from '../../imports/Cards-3/svg-lftmxzrc76';
import { imgArrowOutward } from '../../imports/Cards-3/svg-t2359';

// Arrow Outward Icon
function ArrowOutwardIcon({ className = "" }: { className?: string }) {
  return (
    <div className={`relative shrink-0 size-[24px] ${className}`}>
      <div className="absolute bottom-[26.77%] left-[22.6%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5.425px_-5px] mask-size-[24px_24px] right-1/4 top-[20.83%]" style={{ maskImage: `url('${imgArrowOutward}')` }}>
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.575 12.575">
          <path d={svgPaths.p2cc41100} fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}

// Feature Icon
function FeatureIcon({ backgroundColor = '#A1B4FF', iconColor = '#ECFF40' }: { backgroundColor?: string; iconColor?: string }) {
  return (
    <div className="relative rounded-[14px] shrink-0 size-[32px]" style={{ backgroundColor }}>
      <div className="absolute left-[4px] size-[24px] top-[4px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path d={svgPaths.p28a61300} fill={iconColor} />
        </svg>
      </div>
    </div>
  );
}

// Section Header Components
interface SectionHeaderProps {
  title: string;
  ctaText?: string;
  onCtaClick?: () => void;
  showIcon?: boolean;
  iconBackgroundColor?: string;
  iconColor?: string;
  variant?: 'standard' | 'urgent';
}

function SectionHeader({
  title,
  ctaText = 'Ver más',
  onCtaClick,
  showIcon = false,
  iconBackgroundColor = '#A1B4FF',
  iconColor = '#ECFF40',
  variant = 'standard'
}: SectionHeaderProps) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      {/* Title Section */}
      {variant === 'standard' ? (
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
          {showIcon && <FeatureIcon backgroundColor={iconBackgroundColor} iconColor={iconColor} />}
          <p className="font-['Onest:SemiBold',sans-serif] font-semibold leading-[1.1] relative shrink-0 text-[16px] sm:text-[20px] whitespace-nowrap" style={{ color: showIcon ? 'var(--color-gray-500)' : 'var(--color-deep-blue)' }}>
            {title}
          </p>
        </div>
      ) : (
        <div className="font-['Bowlby_One:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[20px] tracking-[0.6px] whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>
          {title.includes('\n') ? (
            title.split('\n').map((line, i) => (
              <p key={i} className="leading-[24px] mb-0">{line}</p>
            ))
          ) : (
            <p className="leading-[24px]">{title}</p>
          )}
        </div>
      )}

      {/* CTA Button */}
      <button
        onClick={onCtaClick}
        className="content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[4px] relative rounded-[24px] shrink-0 transition-opacity hover:opacity-80"
      >
        <p className="font-['Onest:SemiBold',sans-serif] font-semibold leading-[1.1] text-[14px] text-center whitespace-nowrap" style={{ color: 'var(--color-blue-500)' }}>
          {ctaText}
        </p>
        <ArrowOutwardIcon className="text-[#1443FF]" />
      </button>
    </div>
  );
}

function InteractiveDemo() {
  const [clickCounts, setClickCounts] = useState({
    header1: 0,
    header2: 0,
    header3: 0
  });

  const handleClick = (header: keyof typeof clickCounts) => {
    setClickCounts(prev => ({
      ...prev,
      [header]: prev[header] + 1
    }));
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8 border border-blue-200 mb-16">
      <h3 className="title-large font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>Interactive Demo</h3>
      <p className="body-large mb-6" style={{ color: 'var(--color-gray-500)' }}>
        Click on the CTA buttons to see interaction behavior.
      </p>

      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <SectionHeader
            title="Promos activas"
            ctaText="Ver todo"
            showIcon
            onCtaClick={() => handleClick('header1')}
          />
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <SectionHeader
            title="Canjea con código"
            onCtaClick={() => handleClick('header2')}
          />
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <SectionHeader
            title="¡Apúrate antes de\nqué se acaben!"
            variant="urgent"
            onCtaClick={() => handleClick('header3')}
          />
        </div>
      </div>

      <div className="bg-white rounded-lg p-4 border border-gray-200 mt-6">
        <p className="label-large mb-2" style={{ color: 'var(--color-deep-blue)' }}>
          Promos activas clicks: <span className="font-normal">{clickCounts.header1}</span>
        </p>
        <p className="label-large mb-2" style={{ color: 'var(--color-deep-blue)' }}>
          Canjea con código clicks: <span className="font-normal">{clickCounts.header2}</span>
        </p>
        <p className="label-large mb-2" style={{ color: 'var(--color-deep-blue)' }}>
          Urgent header clicks: <span className="font-normal">{clickCounts.header3}</span>
        </p>
        <button
          onClick={() => setClickCounts({ header1: 0, header2: 0, header3: 0 })}
          className="mt-2 text-sm underline"
          style={{ color: 'var(--color-blue-500)' }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default function SectionHeadersShowcase() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h2 className="headline-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Content Section Header</h2>
        <div className="title-large space-y-4" style={{ color: 'var(--color-deep-blue)' }}>
          <p>
            Section Header is a fundamental organizational tool used to introduce distinct content blocks or sections within the JOY application. Its primary function is to establish visual hierarchy and guide the user toward related content or actions. It is a single component that adapts its size, prominence, and features based on the context of the content it precedes.
          </p>

          <div>
            <p className="font-bold mb-2">Purpose and Functionality</p>
            <p>
              The Content Section Header clearly labels and separates different streams of information (e.g., Active Promos, urgent alerts, or utility sections). By varying the typography and optional elements, it dictates the visual priority of the content below it.
            </p>
          </div>

          <div>
            <p className="font-bold mb-2">Elements and Adaptations</p>
            <p className="mb-4">
              This component is highly flexible and defined by its ability to scale across three levels of importance:
            </p>

            <div className="ml-6 space-y-3">
              <div>
                <p className="font-semibold mb-1">Standard/Utility Header:</p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Typography: Uses a standard heading size and weight for clear, scannable labeling.</li>
                  <li>Optional Icon: Can include a Feature Icon Tag on the left to quickly categorize the section visually.</li>
                  <li>Call-to-Action (CTA): Includes a link and icon on the right, providing a direct path to the full list or detail view for the section.</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold mb-1">High-Priority/Urgency Header:</p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Typography: Utilizes a significantly larger, bolder typeface to convey immediate urgency and command the user's attention.</li>
                  <li>Purpose: This style is reserved for critical, time-sensitive alerts or limited-quantity offers, overriding the standard hierarchy to ensure maximum visibility.</li>
                  <li>CTA: Includes a "Ver más" link to immediately direct the user to the urgent offer details.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <InteractiveDemo />

      <div className="space-y-12 mb-16">
        <div>
          <h3 className="title-large font-bold mb-6" style={{ color: 'var(--color-deep-blue)' }}>Variations</h3>

          <div className="space-y-8">
            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Standard Header with Icon</p>
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <SectionHeader
                  title="Promos activas"
                  ctaText="Ver todo"
                  showIcon
                />
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Includes a feature icon tag on the left to visually categorize the section. Used for content sections that need visual identification.
              </p>
            </div>

            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Standard Header without Icon</p>
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <SectionHeader
                  title="Canjea con código"
                  ctaText="Ver más"
                />
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Simple text-based header for utility sections. Clean and scannable design for standard content areas.
              </p>
            </div>

            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>High-Priority/Urgency Header</p>
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <SectionHeader
                  title="¡Apúrate antes de\nqué se acaben!"
                  variant="urgent"
                  ctaText="Ver más"
                />
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Uses bold Bowlby One typeface for maximum impact. Reserved for critical, time-sensitive alerts or limited-quantity offers.
              </p>
            </div>

            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Custom Icon Colors</p>
              <div className="bg-white rounded-lg border border-gray-200 p-8 space-y-4">
                <SectionHeader
                  title="Custom purple icon"
                  ctaText="Ver todo"
                  showIcon
                  iconBackgroundColor="#C466D9"
                  iconColor="#FFFFFF"
                />
                <SectionHeader
                  title="Custom green icon"
                  ctaText="Ver todo"
                  showIcon
                  iconBackgroundColor="#4ADE80"
                  iconColor="#FFFFFF"
                />
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Icon background and color can be customized to match different content categories or themes.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h3 className="title-large font-bold mb-3" style={{ color: 'var(--color-deep-blue)' }}>Best Practices</h3>
        <ul className="space-y-2">
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Use feature icons to quickly categorize sections and improve scannability</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Reserve the urgent variant for truly time-sensitive or high-priority content</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Always include a CTA link to allow users to access the full content section</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Keep header text concise and action-oriented</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Use consistent CTA text across similar sections ("Ver más", "Ver todo")</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Icon colors should maintain sufficient contrast with their backgrounds</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>The arrow icon provides clear visual affordance for the clickable action</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
