import { useState } from 'react';
import svgPaths from '../../imports/CardInfo-1-1/svg-b6y7fkz3jn';
import imgPromo from '../../imports/CardInfo-1-1/3e88bf89392ee98ba7e782461c0c3ba94d402bd0.png';
import { imgArrowOutward } from '../../imports/CardInfo-1-1/svg-bb9yy';

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <div className={`aspect-[24/24] flex-[1_0_0] min-w-px relative ${className}`}>
      <div
        className="absolute bottom-[26.77%] left-[22.6%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5.425px_-5px] mask-size-[24px_24px] right-1/4 top-[20.83%]"
        style={{ maskImage: `url('${imgArrowOutward}')` }}
      >
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.4792 10.4792">
          <path d={svgPaths.p9d3f200} fill="white" />
        </svg>
      </div>
    </div>
  );
}

interface PromotionCardProps {
  title: string;
  description: string;
  image: string;
  tag?: string;
  tagColor?: string;
  onClick?: () => void;
}

function PromotionCard({
  title,
  description,
  image,
  tag,
  tagColor = '#76E0F3',
  onClick
}: PromotionCardProps) {
  return (
    <button
      onClick={onClick}
      className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(0,0,0,0.08),0px_4px_6px_-2px_rgba(0,0,0,0.03)] shrink-0 w-full max-w-[343px] cursor-pointer hover:shadow-lg transition-shadow text-left"
    >
      {/* Image Section */}
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
        <div className="col-1 h-[160px] ml-0 mt-0 relative row-1 w-[343px]">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <img alt={title} className="absolute max-w-none object-cover size-full" src={image} />
            <div className="absolute bg-[rgba(0,0,0,0.1)] inset-0" />
          </div>
        </div>

        {tag && (
          <div
            className="col-1 content-stretch flex gap-[8px] h-[36px] items-center justify-center ml-[222px] mt-[12px] p-[8px] relative rounded-[32px] row-1"
            style={{ backgroundColor: tagColor }}
          >
            <p className="font-['Onest:SemiBold',sans-serif] font-semibold leading-[14px] relative shrink-0 text-[14px] text-right whitespace-nowrap" style={{ color: 'var(--color-blue-500)' }}>
              {tag}
            </p>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="bg-white content-stretch flex gap-[8px] items-start pb-[16px] pt-[20px] px-[16px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative">
          <p className="font-['Onest:SemiBold',sans-serif] font-semibold leading-[1.1] relative shrink-0 text-[16px] w-full" style={{ color: 'var(--color-blue-500)' }}>
            {title}
          </p>
          <p className="font-['Onest:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[12px] w-full" style={{ color: 'var(--color-gray-600)' }}>
            {description}
          </p>
        </div>

        <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]">
          <div className="bg-[#1443ff] flex-[1_0_0] h-full min-w-px relative rounded-[32px]">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center p-[6px] relative size-full">
                <ArrowIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}

function InteractiveDemo() {
  const [clickCount, setClickCount] = useState(0);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8 border border-blue-200 mb-16">
      <h3 className="title-large font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>Interactive Demo</h3>
      <p className="body-large mb-6" style={{ color: 'var(--color-gray-500)' }}>
        Click on the promotion card to track interactions.
      </p>

      <div className="flex justify-center mb-6">
        <PromotionCard
          title="Dulce + Energía"
          description="Conoce nuestra nueva linea de galletas saludables"
          image={imgPromo}
          tag="Lanzamientos"
          onClick={() => setClickCount(clickCount + 1)}
        />
      </div>

      <div className="bg-white rounded-lg p-4 border border-gray-200">
        <p className="label-large mb-2" style={{ color: 'var(--color-deep-blue)' }}>
          Card Clicks: <span className="font-normal">{clickCount}</span>
        </p>
        <button
          onClick={() => setClickCount(0)}
          className="text-sm underline"
          style={{ color: 'var(--color-blue-500)' }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default function PromotionCardShowcase() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h2 className="headline-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Promotion Card</h2>
        <div className="title-large space-y-4" style={{ color: 'var(--color-deep-blue)' }}>
          <p>
            The Promotion Card is a versatile component designed to showcase new products, campaigns, or special announcements. It features a prominent hero image to capture user attention and is intended to promote content that users can click to learn more about.
          </p>

          <div>
            <p className="font-bold mb-2">Purpose and Functionality</p>
            <p>
              This card's primary purpose is to act as a discovery tool, inviting users to explore new, exclusive, or featured content within the JOY app. It combines a compelling visual with a clear title and description, creating a scannable element that encourages engagement. Its straightforward design ensures that the focus remains on the promotional content.
            </p>
          </div>

          <div>
            <p className="font-bold mb-2">Elements and States</p>
            <div className="ml-6 space-y-3">
              <p>
                <span className="font-semibold">Hero Image:</span> A visually dominant image sits at the top of the card. This is where the main promotional art, campaign visuals, or new product images are displayed to immediately attract the user's attention.
              </p>
              <p>
                <span className="font-semibold">Tag/Label:</span> A colored tag, such as "Lanzamientos" (Launches), can be placed in a corner of the hero image to quickly categorize the content and add visual interest.
              </p>
              <p>
                <span className="font-semibold">Title & Description:</span> A bold title and a concise description summarize the promotion, providing just enough information to entice a click without cluttering the card.
              </p>
              <p>
                <span className="font-semibold">Action Icon:</span> An icon, such as an arrow, serves as the primary call to action. It visually signals that tapping the card will lead the user to a detail page with more information, ensuring a clear and predictable user experience.
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
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>With Tag</p>
              <div className="bg-white rounded-lg border border-gray-200 p-8 flex justify-center">
                <PromotionCard
                  title="Dulce + Energía"
                  description="Conoce nuestra nueva linea de galletas saludables"
                  image={imgPromo}
                  tag="Lanzamientos"
                />
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Promotion card with a category tag in the top-right corner.
              </p>
            </div>

            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Without Tag</p>
              <div className="bg-white rounded-lg border border-gray-200 p-8 flex justify-center">
                <PromotionCard
                  title="PepsiCo Fest 2025"
                  description="Participa en nuestro festival de verano y gana premios increíbles"
                  image={imgPromo}
                />
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Clean design without a category tag for simpler promotions.
              </p>
            </div>

            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Different Tag Colors</p>
              <div className="bg-white rounded-lg border border-gray-200 p-8 flex justify-center gap-4 flex-wrap">
                <PromotionCard
                  title="Nuevo Producto"
                  description="Descubre nuestra última innovación"
                  image={imgPromo}
                  tag="Nuevo"
                  tagColor="#76E0F3"
                />
                <PromotionCard
                  title="Oferta Especial"
                  description="Por tiempo limitado solamente"
                  image={imgPromo}
                  tag="Oferta"
                  tagColor="#ECFF40"
                />
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Different tag colors for various promotion types.
              </p>
            </div>

            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Multiple Cards Grid</p>
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <PromotionCard
                    title="Summer Campaign"
                    description="Join our summer festival and win amazing prizes"
                    image={imgPromo}
                    tag="Destacado"
                  />
                  <PromotionCard
                    title="New Flavors"
                    description="Try our latest snack collection"
                    image={imgPromo}
                    tag="Nuevo"
                    tagColor="#ECFF40"
                  />
                  <PromotionCard
                    title="Double Points"
                    description="Earn 2x points on all purchases this week"
                    image={imgPromo}
                    tag="Promo"
                  />
                  <PromotionCard
                    title="Exclusive Event"
                    description="VIP members get early access"
                    image={imgPromo}
                  />
                </div>
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Grid layout showcasing multiple promotions.
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
            <span>Use high-quality, eye-catching images that represent the promotion clearly</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Keep titles short and impactful (under 30 characters when possible)</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Write descriptions that provide context without overwhelming the user</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Use tags to categorize promotions (Nuevo, Oferta, Lanzamientos, etc.)</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Position tags in the top-right corner to avoid covering important image content</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Choose tag colors that contrast well with the hero image</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Apply a subtle dark overlay (10% black) to hero images for text readability</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Use the arrow icon consistently to indicate that the card is clickable</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Maintain 343px width for consistency in mobile layouts</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Set hero image height to 160px for optimal visual balance</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Ensure images are optimized for fast loading without quality loss</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Group multiple promotion cards in grids for browsing multiple offers</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
