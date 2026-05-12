import { useState } from 'react';
import svgPaths from '../../imports/Cards-4/svg-27u2skxjl3';
import imgError1 from '../../imports/Cards-4/46c85d968fb6a6c49605ce739b648bbf67c97920.png';
import { imgGroup1597880764 } from '../../imports/Cards-4/svg-qhswp';

// Icon Components
function FavoritesIcon({ className = "" }: { className?: string }) {
  return (
    <div className={`h-[81px] relative w-[119px] ${className}`}>
      <div className="absolute inset-[0_0_-0.41%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 119 81.3362">
          <g>
            <path d={svgPaths.pfb52600} fill="#A1B4FF" fillOpacity="0.98" />
            <path d={svgPaths.p18901d80} fill="#A1B4FF" fillOpacity="0.98" />
            <path d={svgPaths.p36f1e700} fill="#A1B4FF" fillOpacity="0.98" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function HappyFaceIcon({ className = "" }: { className?: string }) {
  return (
    <div className={`h-[81.863px] relative shrink-0 w-[119px] ${className}`}>
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 119 81.8634">
        <g clipPath="url(#clip0_happy)">
          <path d={svgPaths.p9ca0900} fill="var(--color-blue-500)" />
          <path d={svgPaths.p27bbc070} fill="var(--color-blue-500)" />
          <path d={svgPaths.p3dd69600} fill="var(--color-blue-500)" />
        </g>
        <defs>
          <clipPath id="clip0_happy">
            <rect fill="white" height="81.8634" width="119" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LocationIconWithSparkles({ className = "" }: { className?: string }) {
  return (
    <div className={`grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 ${className}`}>
      {/* Location Pin */}
      <div className="col-1 h-[126px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-44.187px_-2.538px] mask-size-[189px_132px] ml-[44.19px] mt-[2.54px] relative row-1 w-[101px]" style={{ maskImage: `url('${imgGroup1597880764}')` }}>
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 101 126">
          <g>
            <path d={svgPaths.pb2950ca} fill="var(--color-blue-500)" />
            <g clipPath="url(#clip0_location)">
              <path d={svgPaths.p3bcfc600} fill="white" />
              <path d={svgPaths.p3f9c5e80} fill="white" />
              <path d={svgPaths.p137a4e80} fill="white" />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_location">
              <rect fill="white" height="45.12" transform="translate(18 33.9072)" width="65.5883" />
            </clipPath>
          </defs>
        </svg>
      </div>

      {/* Sparkles */}
      <div className="col-1 flex h-[25.196px] items-center justify-center ml-[136.96px] mt-[4.87px] relative row-1 w-[26.352px]">
        <div className="flex-none rotate-[20.48deg]">
          <div className="h-[19.045px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-136.955px_-4.866px] mask-size-[189px_132px] relative w-[21.016px]" style={{ maskImage: `url('${imgGroup1597880764}')` }}>
            <div className="absolute inset-[-5.25%_-4.76%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.0166 21.0454">
                <g>
                  <path d={svgPaths.p3bfbbb00} stroke="#FFB266" strokeLinecap="round" strokeWidth="2" />
                  <path d={svgPaths.p1212c748} stroke="#FFB266" strokeLinecap="round" strokeWidth="2" />
                  <path d={svgPaths.p271ee880} stroke="#FFB266" strokeLinecap="round" strokeWidth="2" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Empty State Components
interface EmptyStateProps {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  variant?: 'default' | 'error' | 'button' | 'link';
  urgentTitle?: string;
}

function EmptyState({
  icon,
  title,
  description,
  buttonText,
  onButtonClick,
  variant = 'default',
  urgentTitle
}: EmptyStateProps) {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full max-w-[343px]">
      {/* Icon */}
      {icon && (
        <div className="flex h-[92.995px] items-center justify-center relative shrink-0 w-[126.815px] mb-4">
          <div className="-rotate-6 flex-none">
            {icon}
          </div>
        </div>
      )}

      {/* Content */}
      <div className="relative rounded-[16px] shrink-0 w-full">
        <div className="flex flex-col items-center justify-center size-full">
          <div className={`content-stretch flex flex-col ${variant === 'error' ? 'gap-[12px]' : variant === 'button' ? 'gap-[8px]' : 'gap-[16px]'} items-center justify-center ${variant === 'link' ? '' : 'p-[16px]'} relative size-full`}>

            {/* Urgent Title (for error variant) */}
            {urgentTitle && variant === 'error' && (
              <div className="flex flex-col font-['Bowlby_One:Regular',sans-serif] h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-center tracking-[0.96px] w-full" style={{ color: 'var(--color-deep-blue)' }}>
                <p className="leading-[36px] font-bold font-[Inter]">{urgentTitle}</p>
              </div>
            )}

            {/* Title */}
            {title && (
              <div className="flex flex-col font-['Onest:SemiBold',sans-serif] font-semibold h-[36px] justify-center leading-[0] relative shrink-0 text-[16px] text-center w-full" style={{ color: 'var(--color-deep-blue)' }}>
                <p className="leading-[1.1] font-[Inter]">{title}</p>
              </div>
            )}

            {/* Description */}
            {description && !buttonText && (
              <div className="flex flex-col font-['Onest:Medium',sans-serif] font-medium h-[15px] justify-center relative shrink-0 text-[12px] text-center w-full" style={{ color: 'var(--color-gray-500)' }}>
                <p className="leading-[normal]">{description}</p>
              </div>
            )}

            {/* Description (with button variant) */}
            {description && buttonText && variant === 'button' && (
              <div className="flex flex-col font-['Onest:Regular',sans-serif] font-normal h-[36px] justify-center leading-[0] relative shrink-0 text-[14px] text-center w-full" style={{ color: 'var(--color-deep-blue)' }}>
                <p className="leading-[normal]">{description}</p>
              </div>
            )}

            {/* Button (filled) */}
            {buttonText && (variant === 'error' || variant === 'button') && (
              <button
                onClick={onButtonClick}
                className="relative rounded-[24px] shrink-0 w-full transition-opacity hover:opacity-90"
                style={{ backgroundColor: 'var(--color-blue-500)' }}
              >
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-center px-[24px] py-[12px] relative size-full">
                    <p className="font-['Onest:SemiBold',sans-serif] font-semibold leading-[1.1] text-[16px] text-center text-white whitespace-nowrap">
                      {buttonText}
                    </p>
                  </div>
                </div>
              </button>
            )}

            {/* Link Button */}
            {buttonText && variant === 'link' && (
              <button
                onClick={onButtonClick}
                className="content-stretch flex items-center justify-center p-[8px] relative rounded-[24px] shrink-0 transition-opacity hover:opacity-80"
              >
                <p className="font-['Onest:SemiBold',sans-serif] font-semibold leading-[1.1] text-[14px] text-center whitespace-nowrap" style={{ color: 'var(--color-blue-500)' }}>
                  {buttonText}
                </p>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function InteractiveDemo() {
  const [clickCounts, setClickCounts] = useState({
    error: 0,
    happy: 0,
    location: 0
  });

  const handleClick = (type: keyof typeof clickCounts) => {
    setClickCounts(prev => ({
      ...prev,
      [type]: prev[type] + 1
    }));
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8 border border-blue-200 mb-16">
      <h3 className="title-large font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>Interactive Demo</h3>
      <p className="body-large mb-6" style={{ color: 'var(--color-gray-500)' }}>
        Click on the buttons to see interaction behavior.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg p-6 border border-gray-200 flex justify-center">
          <EmptyState
            icon={
              <div className="h-[145px] relative shrink-0 w-[265px]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="Error illustration" className="absolute h-[209.66%] left-[-7.36%] max-w-none top-[-64.83%] w-[114.72%]" src={imgError1} />
                </div>
              </div>
            }
            urgentTitle="¡Ups!"
            title="Hubo un error en el escaneo"
            buttonText="Reintentar"
            variant="error"
            onButtonClick={() => handleClick('error')}
          />
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 flex justify-center">
          <EmptyState
            icon={<HappyFaceIcon />}
            title="¡Gracias por tu opinión!"
            description="Esto nos ayuda a mejorar y seguir creciendo"
            buttonText="Reintentar"
            variant="button"
            onButtonClick={() => handleClick('happy')}
          />
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 border border-gray-200 mt-6 flex justify-center">
        <EmptyState
          icon={<LocationIconWithSparkles />}
          title="Enciende tu ubicación para comenzar"
          buttonText="Encender ubicación"
          variant="link"
          onButtonClick={() => handleClick('location')}
        />
      </div>

      <div className="bg-white rounded-lg p-4 border border-gray-200 mt-6">
        <p className="label-large mb-2" style={{ color: 'var(--color-deep-blue)' }}>
          Error button clicks: <span className="font-normal">{clickCounts.error}</span>
        </p>
        <p className="label-large mb-2" style={{ color: 'var(--color-deep-blue)' }}>
          Happy button clicks: <span className="font-normal">{clickCounts.happy}</span>
        </p>
        <p className="label-large mb-2" style={{ color: 'var(--color-deep-blue)' }}>
          Location link clicks: <span className="font-normal">{clickCounts.location}</span>
        </p>
        <button
          onClick={() => setClickCounts({ error: 0, happy: 0, location: 0 })}
          className="mt-2 text-sm underline"
          style={{ color: 'var(--color-blue-500)' }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default function EmptyStatesShowcase() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h2 className="headline-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Empty States</h2>
        <div className="title-large space-y-4" style={{ color: 'var(--color-deep-blue)' }}>
          <p>
            The Empty States component is a crucial element for enhancing the user experience. It's designed to provide informative, encouraging, or actionable content on screens that currently have no data to display. Instead of leaving a blank, unhelpful space, empty states use clear messages and visuals to guide the user on what to do next.
          </p>

          <div>
            <p className="font-bold mb-2">Purpose and Functionality</p>
            <p>
              The main purpose of the Empty States component is to prevent user frustration by explaining why a screen is empty and providing a clear path forward. This component can be adapted to various scenarios, from a new user's first visit to a temporary error, ensuring a friendly and intuitive interface.
            </p>
          </div>

          <div>
            <p className="font-bold mb-2">Elements</p>
            <p className="mb-3">
              The Empty States component is a versatile element that combines three core features:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                <span className="font-semibold">Icon/Illustration:</span> A unique, engaging visual element that helps communicate the status. This can range from a friendly face, a simple icon, to a custom illustration that reflects the tone of the message (e.g., a slot machine for a scanning error).
              </li>
              <li>
                <span className="font-semibold">Title & Description:</span> A clear, concise title and a short description that explain the current situation. The text should be empathetic and guide the user on the next steps (e.g., "You haven't marked your favorites yet" or "An error occurred during the scan").
              </li>
              <li>
                <span className="font-semibold">Call to Action (CTA):</span> An interactive element, such as a button or a link, that provides a direct solution or next step for the user. This can be as simple as "Enable location" or "Try again."
              </li>
            </ul>
          </div>
        </div>
      </div>

      <InteractiveDemo />

      <div className="space-y-12 mb-16">
        <div>
          <h3 className="title-large font-bold mb-6" style={{ color: 'var(--color-deep-blue)' }}>Variations</h3>

          <div className="space-y-8">
            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Default Empty State</p>
              <div className="bg-white rounded-lg border border-gray-200 p-8 flex justify-center">
                <EmptyState
                  icon={<FavoritesIcon />}
                  title="Aún no has marcado tus antojos favoritos"
                  description="Navega por el catálogo y añade algunas recompensas"
                  variant="default"
                />
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Simple empty state with icon, title, and description. No action button needed.
              </p>
            </div>

            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Error Empty State</p>
              <div className="bg-white rounded-lg border border-gray-200 p-8 flex justify-center">
                <EmptyState
                  icon={
                    <div className="h-[145px] relative shrink-0 w-[265px]">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img alt="Error illustration" className="absolute h-[209.66%] left-[-7.36%] max-w-none top-[-64.83%] w-[114.72%]" src={imgError1} />
                      </div>
                    </div>
                  }
                  urgentTitle="¡Ups!"
                  title="Hubo un error en el escaneo"
                  buttonText="Reintentar"
                  variant="error"
                />
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Error state with custom illustration, urgent title in Bowlby One font, and action button to retry.
              </p>
            </div>

            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Success/Happy Empty State</p>
              <div className="bg-white rounded-lg border border-gray-200 p-8 flex justify-center">
                <EmptyState
                  icon={<HappyFaceIcon />}
                  title="¡Gracias por tu opinión!"
                  description="Esto nos ayuda a mejorar y seguir creciendo"
                  buttonText="Reintentar"
                  variant="button"
                />
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Positive feedback state with happy face icon and confirmation message.
              </p>
            </div>

            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Location Permission Empty State</p>
              <div className="bg-white rounded-lg border border-gray-200 p-8 flex justify-center">
                <EmptyState
                  icon={<LocationIconWithSparkles />}
                  title="Enciende tu ubicación para comenzar"
                  buttonText="Encender ubicación"
                  variant="link"
                />
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Permission request state with location icon, animated sparkles, and text link button.
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
            <span>Use empathetic, friendly language that explains why the screen is empty</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Provide clear next steps or actions the user can take</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Match the illustration/icon style to the message tone (playful, serious, urgent)</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Use the urgent title (Bowlby One font) sparingly for critical errors only</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Keep titles concise and descriptions brief (1-2 lines maximum)</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Always include a CTA when there's a specific action the user can take</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Use filled buttons for primary actions and text links for secondary actions</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Center-align all content for a balanced, focused layout</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
