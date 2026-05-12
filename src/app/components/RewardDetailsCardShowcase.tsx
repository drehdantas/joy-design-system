import { useState } from 'react';

interface RewardDetailsCardProps {
  title?: string;
  description: string;
  disclaimer?: string;
  termsText?: string;
  onTermsClick?: () => void;
}

function RewardDetailsCard({
  title = 'Sobre el premio',
  description,
  disclaimer = '*La imagen de recompensa solo hace referencia a la categoría de recompensa y no garantiza una marca, estilo o configuración específicos. La recompensa final se confirmará una vez finalizado el período de validez',
  termsText = 'Términos y condiciones de la promo',
  onTermsClick
}: RewardDetailsCardProps) {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start justify-end p-[16px] relative rounded-[16px] shrink-0 w-full max-w-[343px]">
      <div className="flex flex-col font-['Onest:SemiBold',sans-serif] font-semibold h-[18px] justify-center leading-[0] min-w-full relative shrink-0 text-[16px] w-[min-content]" style={{ color: 'var(--color-blue-500)' }}>
        <p className="leading-[1.1]">{title}</p>
      </div>

      <div className="flex flex-col font-['Onest:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[12px] w-[min-content]" style={{ color: 'var(--color-gray-600)' }}>
        <p className="leading-[normal]">{description}</p>
      </div>

      <div className="flex flex-col font-['Onest:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[10px] w-[min-content]" style={{ color: 'var(--color-gray-500)' }}>
        <p className="leading-[11px]">{disclaimer}</p>
      </div>

      <button
        onClick={onTermsClick}
        className="content-stretch flex items-center justify-center p-[8px] relative rounded-[24px] shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
      >
        <div className="flex flex-col font-['Onest:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-center whitespace-nowrap" style={{ color: 'var(--color-blue-500)' }}>
          <p className="leading-[1.1]">{termsText}</p>
        </div>
      </button>
    </div>
  );
}

function InteractiveDemo() {
  const [termsClickCount, setTermsClickCount] = useState(0);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8 border border-blue-200 mb-16">
      <h3 className="title-large font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>Interactive Demo</h3>
      <p className="body-large mb-6" style={{ color: 'var(--color-gray-500)' }}>
        Click on "Términos y condiciones de la promo" to track link interactions.
      </p>

      <div className="flex justify-center mb-6">
        <RewardDetailsCard
          description="Lorem ipsum dolor sit amet consectetur. Placerat porta lorem morbi quisque est venenatis. In in fermentum dui at lorem tortor ultrices pharetra porttitor."
          onTermsClick={() => setTermsClickCount(termsClickCount + 1)}
        />
      </div>

      <div className="bg-white rounded-lg p-4 border border-gray-200">
        <p className="label-large mb-2" style={{ color: 'var(--color-deep-blue)' }}>
          Terms Link Clicks: <span className="font-normal">{termsClickCount}</span>
        </p>
        <button
          onClick={() => setTermsClickCount(0)}
          className="text-sm underline"
          style={{ color: 'var(--color-blue-500)' }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default function RewardDetailsCardShowcase() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h2 className="headline-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Reward Details Card</h2>
        <div className="title-large space-y-4" style={{ color: 'var(--color-deep-blue)' }}>
          <p>
            This component is designed to provide comprehensive information about a specific reward or prize within the JOY app. It is a detail view element, intended to be used on a dedicated screen where a user can learn everything they need to know about an offer.
          </p>

          <div>
            <p className="font-bold mb-2">Purpose and Functionality</p>
            <p>
              The Reward Details Component serves as the single source of truth for a reward. Its purpose is to build trust and provide clarity by answering all potential user questions regarding a prize, its terms, and eligibility.
            </p>
          </div>

          <div>
            <p className="font-bold mb-2">Elements</p>
            <div className="ml-6 space-y-3">
              <p>
                <span className="font-semibold">Header:</span> The component is headed by a clear title, such as "Sobre el premio," which immediately informs the user about the content of the section.
              </p>
              <p>
                <span className="font-semibold">Description:</span> A full-length text block provides all the necessary details about the reward. This is where the long-form content, which is too verbose for a card view, is displayed.
              </p>
              <p>
                <span className="font-semibold">Disclaimer:</span> A small-font disclaimer clarifies that the image is for illustrative purposes only and does not guarantee a specific brand, style, or configuration. This is crucial for managing user expectations.
              </p>
              <p>
                <span className="font-semibold">Terms and Conditions Link:</span> This element, presented as a clickable link, provides a clear path for users to access the full terms and conditions of the promotion.
              </p>
            </div>
          </div>
        </div>
      </div>

      <InteractiveDemo />

      <div className="space-y-12 mb-16">
        <div>
          <h3 className="title-large font-bold mb-6" style={{ color: 'var(--color-deep-blue)' }}>Examples</h3>

          <div className="space-y-8">
            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Standard Reward Details</p>
              <div className="bg-white rounded-lg border border-gray-200 p-8 flex justify-center">
                <RewardDetailsCard
                  description="Lorem ipsum dolor sit amet consectetur. Placerat porta lorem morbi quisque est venenatis. In in fermentum dui at lorem tortor ultrices pharetra porttitor."
                />
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Standard layout with all elements: title, description, disclaimer, and terms link.
              </p>
            </div>

            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Detailed Product Reward</p>
              <div className="bg-white rounded-lg border border-gray-200 p-8 flex justify-center">
                <RewardDetailsCard
                  title="Sobre el premio"
                  description="Gana un mando de videojuegos premium compatible con todas las consolas principales. Este premio incluye tecnología inalámbrica de última generación, batería de larga duración y diseño ergonómico para sesiones de juego prolongadas. El ganador será contactado por correo electrónico dentro de 48 horas después del cierre de la promoción."
                />
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                More detailed description for a complex reward.
              </p>
            </div>

            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Campaign Information</p>
              <div className="bg-white rounded-lg border border-gray-200 p-8 flex justify-center">
                <RewardDetailsCard
                  title="Acerca de la campaña"
                  description="Participa en el PepsiCo Fest 2025 completando 12 check-ins antes del 12 de julio. Cada check-in te acerca más a premios increíbles y experiencias exclusivas. Los check-ins se pueden realizar en cualquier tienda participante escaneando productos elegibles."
                  disclaimer="*La participación está sujeta a términos y condiciones. Los premios están sujetos a disponibilidad."
                  termsText="Ver términos completos"
                />
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Adapted for campaign information with custom title and terms text.
              </p>
            </div>

            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Short Description</p>
              <div className="bg-white rounded-lg border border-gray-200 p-8 flex justify-center">
                <RewardDetailsCard
                  description="Participa y gana. Es así de simple. Completa los desafíos y acumula puntos para canjear por premios increíbles."
                />
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Works well with shorter, more concise descriptions.
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
            <span>Use clear, descriptive titles that immediately communicate the section's purpose</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Provide comprehensive descriptions that answer common user questions</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Always include a disclaimer to manage expectations about reward variations</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Make the terms and conditions link clearly visible and easy to tap</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Keep disclaimer text concise but legally compliant</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Use appropriate text hierarchy: title (16px), description (12px), disclaimer (10px)</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Ensure the description provides enough detail to build trust and transparency</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Place this component on detail/info screens, not on card listing views</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Write descriptions in plain language that's easy to understand</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Maintain consistent spacing (8px gaps) between all elements</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
