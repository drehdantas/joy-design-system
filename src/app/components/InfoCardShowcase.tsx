import { useState } from 'react';
import svgPaths from '../../imports/CardInfo/svg-i856q364ep';
import imgBg from '../../imports/CardInfo/266eccbab6af9e5d4121fdeae072c5f5777ffc6e.png';
import { imgCheckBoxOutlineBlank } from '../../imports/CardInfo/svg-fr1t7';

// Checkbox Components
function CheckboxUnchecked({ className = "" }: { className?: string }) {
  return (
    <div className={`relative shrink-0 size-[24px] ${className}`}>
      <div className="absolute inset-[12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3px_-3px] mask-size-[24px_24px]" style={{ maskImage: `url('${imgCheckBoxOutlineBlank}')` }}>
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPaths.p31e38f40} fill="#FF7F00" />
        </svg>
      </div>
    </div>
  );
}

function CheckboxChecked({ className = "" }: { className?: string }) {
  return (
    <div className={`relative shrink-0 size-[24px] ${className}`}>
      <div className="absolute inset-[12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3px_-3px] mask-size-[24px_24px]" style={{ maskImage: `url('${imgCheckBoxOutlineBlank}')` }}>
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPaths.p37fdf00} fill="#FF7F00" />
        </svg>
      </div>
    </div>
  );
}

// Info Card Component
interface InfoCardProps {
  title: string;
  description: string;
  backgroundImage?: string;
  selected?: boolean;
  onToggle?: () => void;
  termsText?: string;
  termsLinkText?: string;
}

function InfoCard({
  title,
  description,
  backgroundImage = imgBg,
  selected = false,
  onToggle,
  termsText = 'Acepto',
  termsLinkText = 'Términos y condiciones'
}: InfoCardProps) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full max-w-[343px]">
      {/* Card */}
      <div className={`h-[136px] relative rounded-[16px] shrink-0 w-full ${selected ? '' : ''}`}>
        <div className="content-stretch flex items-start justify-center overflow-clip relative rounded-[inherit] size-full">
          {/* Background Image */}
          <div className="h-[136px] relative shrink-0 w-[148px]">
            <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={backgroundImage} />
          </div>

          {/* Content */}
          <div className="bg-white flex-[1_0_0] h-full min-w-px relative">
            <div className="flex flex-col justify-center size-full">
              <div className="content-stretch flex flex-col items-start justify-center p-[12px] relative size-full">
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                  {/* Title */}
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                    <p className="flex-[1_0_0] font-['Onest:SemiBold',sans-serif] font-semibold leading-[1.1] min-w-px relative text-[14px]" style={{ color: 'var(--color-blue-500)' }}>
                      {title}
                    </p>
                  </div>

                  {/* Description */}
                  <div className="content-stretch flex items-center justify-center relative rounded-[32px] shrink-0 w-full">
                    <p className="flex-[1_0_0] font-['Onest:Regular',sans-serif] font-normal leading-[normal] min-w-px relative text-[14px]" style={{ color: 'var(--color-deep-blue)' }}>
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Selected Border */}
        {selected && (
          <div aria-hidden="true" className="absolute border-2 border-solid inset-0 pointer-events-none rounded-[16px]" style={{ borderColor: 'var(--color-blue-500)' }} />
        )}
      </div>

      {/* Terms & Conditions Checkbox */}
      <button
        onClick={onToggle}
        className="content-stretch flex gap-[4px] items-center relative shrink-0 cursor-pointer"
      >
        {selected ? <CheckboxChecked /> : <CheckboxUnchecked />}
        <div className="content-stretch flex gap-[4px] items-center relative shrink-0 text-[12px] whitespace-nowrap">
          <p className="font-['Onest:Regular',sans-serif] font-normal leading-[normal] relative shrink-0" style={{ color: 'var(--color-deep-blue)' }}>
            {termsText}
          </p>
          <p className="font-['Onest:SemiBold',sans-serif] font-semibold leading-[1.1] relative shrink-0" style={{ color: 'var(--color-blue-500)' }}>
            {termsLinkText}
          </p>
        </div>
      </button>
    </div>
  );
}

function InteractiveDemo() {
  const [selected, setSelected] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleToggle = () => {
    setSelected(!selected);
    setClickCount(clickCount + 1);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8 border border-blue-200 mb-16">
      <h3 className="title-large font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>Interactive Demo</h3>
      <p className="body-large mb-6" style={{ color: 'var(--color-gray-500)' }}>
        Click the checkbox to accept terms and see the selected state.
      </p>

      <div className="flex justify-center">
        <InfoCard
          title="PepsiCo Fest"
          description="Haz 12 check-in hasta el 12 de julio de 2025 a las 11:59 p. m. CST"
          selected={selected}
          onToggle={handleToggle}
        />
      </div>

      <div className="bg-white rounded-lg p-4 border border-gray-200 mt-6">
        <p className="label-large mb-2" style={{ color: 'var(--color-deep-blue)' }}>
          Status: <span className="font-normal">{selected ? 'Accepted' : 'Not Accepted'}</span>
        </p>
        <p className="label-large" style={{ color: 'var(--color-deep-blue)' }}>
          Toggle Count: <span className="font-normal">{clickCount}</span>
        </p>
        <button
          onClick={() => {
            setSelected(false);
            setClickCount(0);
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

export default function InfoCardShowcase() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h2 className="headline-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Info Card</h2>
        <div className="title-large space-y-4" style={{ color: 'var(--color-deep-blue)' }}>
          <p>
            The Info Card is a component designed to present key information in a scannable format while providing a direct way for a user to acknowledge or accept the content. This card is purely informative and is not intended for selecting multiple items; rather, it's for a singular acknowledgment or action.
          </p>

          <div>
            <p className="font-bold mb-2">Purpose and Functionality</p>
            <p>
              This card is used to display important details, such as a campaign, event, or offer, and includes a single, clear acceptance point. It is ideal for situations where a user needs to quickly review and confirm they've understood specific terms or dates.
            </p>
          </div>

          <div>
            <p className="font-bold mb-2">Card States</p>
            <p className="mb-3">
              The card has two primary states that visually communicate its status to the user.
            </p>

            <div className="ml-6 space-y-3">
              <div>
                <p className="font-semibold mb-1">Default State:</p>
                <p>
                  This is the card's initial appearance before any user interaction. The checkbox is empty, and the card has a neutral border, indicating that the information has been presented but not yet acknowledged.
                </p>
              </div>

              <div>
                <p className="font-semibold mb-1">Selected State:</p>
                <p>
                  This state is triggered when the user checks the box. The checkbox is filled, and the card's border changes to a primary brand color (e.g., blue) to provide immediate and clear visual feedback, confirming that the user has accepted or acknowledged the information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <InteractiveDemo />

      <div className="space-y-12 mb-16">
        <div>
          <h3 className="title-large font-bold mb-6" style={{ color: 'var(--color-deep-blue)' }}>States</h3>

          <div className="space-y-8">
            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Default State</p>
              <div className="bg-white rounded-lg border border-gray-200 p-8 flex justify-center">
                <InfoCard
                  title="PepsiCo Fest"
                  description="Haz 12 check-in hasta el 12 de julio de 2025 a las 11:59 p. m. CST"
                  selected={false}
                />
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Initial state with unchecked checkbox and neutral border.
              </p>
            </div>

            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Selected State</p>
              <div className="bg-white rounded-lg border border-gray-200 p-8 flex justify-center">
                <InfoCard
                  title="PepsiCo Fest"
                  description="Haz 12 check-in hasta el 12 de julio de 2025 a las 11:59 p. m. CST"
                  selected={true}
                />
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Selected state with checked checkbox and blue border indicating acceptance.
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
            <span>Use for singular acknowledgment or acceptance, not for multi-select scenarios</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Keep title and description concise and scannable</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Use high-quality background images that support the content</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Provide clear visual feedback when the card is selected (blue border)</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Ensure the terms and conditions link is clearly distinguishable</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Use consistent checkbox styling with orange accent color</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>The background image should occupy approximately 40% of the card width</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
