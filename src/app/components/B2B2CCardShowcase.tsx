import { useState } from 'react';
import svgPaths from "../../imports/Cards-6/svg-29kqb7jjff";
import { imgArrowOutward } from "../../imports/Cards-6/svg-gcbzu";

function LocationIcon() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[29.952px] left-[calc(50%-0.06px)] top-1/2 w-[23.962px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.962 29.9525">
        <g>
          <path d={svgPaths.p89fad00} fill="white" />
          <g clipPath="url(#clip0_11_1123)">
            <path d={svgPaths.pa10d600} fill="var(--color-blue-500)" />
            <path d={svgPaths.p1123a380} fill="var(--color-blue-500)" />
            <path d={svgPaths.p3d1eb700} fill="var(--color-blue-500)" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_11_1123">
            <rect fill="white" height="10.7258" transform="translate(4.28134 8.06039)" width="15.5915" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DistanceIcon() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <mask height="24" id="mask0_distance" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
          <rect fill="#D9D9D9" height="24" width="24" />
        </mask>
        <g mask="url(#mask0_distance)">
          <path d={svgPaths.pd49d6c0} fill="#9D00BF" />
        </g>
      </svg>
    </div>
  );
}

function CoinIcon() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute inset-[-10%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path d={svgPaths.ped7fe00} fill="var(--color-blue-500)" />
          <circle cx="12" cy="12" r="11" stroke="var(--color-blue-500)" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}

interface LocationCardProps {
  businessName: string;
  address: string;
  distance: string;
  accentColor?: string;
  onViewDetail?: () => void;
  onGetDirections?: () => void;
}

function LocationCard({
  businessName,
  address,
  distance,
  accentColor = '#ECFF40',
  onViewDetail,
  onGetDirections
}: LocationCardProps) {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[16px] shrink-0 w-[343px] shadow-[0px_12px_16px_0px_rgba(0,0,0,0.08),0px_4px_6px_0px_rgba(0,0,0,0.03)]">
      {/* Colored Top Bar */}
      <div className="h-[36px] shrink-0 w-full" style={{ backgroundColor: accentColor }} />

      {/* Content */}
      <div className="bg-white h-[274px] relative shrink-0 w-full">
        <div className="flex flex-col justify-end size-full">
          <div className="content-stretch flex flex-col gap-[16px] items-start justify-end pb-[16px] pt-[8px] px-[16px] relative size-full">
            {/* Icon and Title */}
            <div className="content-stretch flex gap-[8px] items-end relative shrink-0 w-full">
              <div className="bg-[#1443ff] overflow-clip relative rounded-[8px] shrink-0 size-[56px]">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.5px)] size-[37px] top-[calc(50%+0.5px)]">
                  <LocationIcon />
                </div>
              </div>
              <div className="content-stretch flex flex-[1_0_0] h-[38px] items-center justify-between min-w-px relative">
                <p className="flex-[1_0_0] font-['Onest:SemiBold',sans-serif] font-semibold leading-[1.1] min-w-px relative text-[20px]" style={{ color: 'var(--color-deep-blue)' }}>
                  {businessName}
                </p>
              </div>
            </div>

            {/* Address and Distance */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
              <p className="font-['Onest:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] w-[311px]" style={{ color: 'var(--color-deep-blue)' }}>
                {address}
              </p>
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                <DistanceIcon />
                <p className="font-['Onest:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[#9d00bf] text-[14px] whitespace-nowrap">
                  {distance}
                </p>
              </div>
            </div>

            {/* Primary Button */}
            <button
              onClick={onViewDetail}
              className="bg-[#1443ff] relative rounded-[24px] shrink-0 w-full transition-transform hover:scale-[1.02]"
            >
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[12px] relative size-full">
                  <div className="flex flex-col font-['Onest:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
                    <p className="leading-[1.1]">Ver detalle</p>
                  </div>
                  <div className="relative shrink-0 size-[24px]">
                    <div
                      className="absolute bottom-[26.77%] left-[22.6%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5.425px_-5px] mask-size-[24px_24px] right-1/4 top-[20.83%]"
                      style={{ maskImage: `url('${imgArrowOutward}')` }}
                    >
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.575 12.575">
                        <path d={svgPaths.p2cc41100} fill="white" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </button>

            {/* Secondary Button */}
            <button
              onClick={onGetDirections}
              className="relative rounded-[24px] shrink-0 w-full transition-transform hover:scale-[1.02]"
            >
              <div aria-hidden="true" className="absolute border border-[#1443ff] border-solid inset-0 pointer-events-none rounded-[24px]" />
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center px-[24px] py-[12px] relative size-full">
                  <div className="flex flex-col font-['Onest:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1443ff] text-[16px] text-center whitespace-nowrap">
                    <p className="leading-[1.1]">¿Cómo llegar?</p>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface RecommendedStoreCardProps {
  businessName: string;
  address: string;
  distance: string;
  onClick?: () => void;
}

function RecommendedStoreCard({
  businessName,
  address,
  distance,
  onClick
}: RecommendedStoreCardProps) {
  return (
    <button
      onClick={onClick}
      className="bg-white content-stretch flex flex-col gap-[16px] items-center overflow-clip px-[24px] py-[16px] relative rounded-[16px] shrink-0 w-[343px] shadow-[0px_12px_16px_0px_rgba(0,0,0,0.08),0px_4px_6px_0px_rgba(0,0,0,0.03)] transition-transform hover:scale-[1.02]"
    >
      {/* Orange Decorative Shape - Top Left */}
      <div className="absolute flex h-[282.189px] items-center justify-center left-[-118px] top-[-113px] w-[284.163px]">
        <div className="flex-none" style={{ transform: 'rotate(-151.07deg)' }}>
          <div className="h-[205.859px] relative w-[210.901px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 210.901 205.859">
              <path d={svgPaths.p4c28540} fill="#FF7F00" />
            </svg>
          </div>
        </div>
      </div>

      {/* Purple Decorative Shape - Bottom Right */}
      <div className="absolute h-[136px] left-[232px] top-[130px] w-[135px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 136">
          <path d={svgPaths.p31f2d480} fill="#B133CC" />
        </svg>
      </div>

      {/* Recommended Badge */}
      <div className="bg-[#76e0f3] content-stretch flex gap-[8px] items-center justify-center p-[8px] relative rounded-[32px] shrink-0 z-10">
        <CoinIcon />
        <p className="font-['Onest:SemiBold',sans-serif] font-semibold leading-[1.1] relative shrink-0 text-[#1443ff] text-[14px] whitespace-nowrap">
          Tienda recomendada
        </p>
      </div>

      {/* Business Name and Address */}
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-center w-full z-10" style={{ color: 'var(--color-deep-blue)' }}>
        <p className="font-['Onest:Bold',sans-serif] font-bold leading-[normal] min-w-full relative shrink-0 text-[24px] w-[min-content]">
          {businessName}
        </p>
        <div className="font-['Onest:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[16px] w-full whitespace-pre-wrap">
          <p className="leading-[1.4]">{address}</p>
        </div>
      </div>

      {/* Distance */}
      <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 w-full z-10">
        <DistanceIcon />
        <p className="font-['Onest:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[16px] text-center whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>
          {distance}
        </p>
      </div>
    </button>
  );
}

function InteractiveDemo() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [action, setAction] = useState<string>('');

  const handleCardAction = (cardName: string, actionType: string) => {
    setSelectedCard(cardName);
    setAction(actionType);
    setTimeout(() => {
      setSelectedCard(null);
      setAction('');
    }, 2000);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg p-8 border border-blue-200 mb-16">
      <h3 className="title-large font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>
        Interactive Demo
      </h3>
      <p className="body-large mb-6" style={{ color: 'var(--color-gray-500)' }}>
        Click on cards to interact. Location cards have two actions: view details or get directions.
      </p>

      <div className="flex gap-6 flex-wrap justify-center">
        <LocationCard
          businessName='Abarrotes "Lucy"'
          address="59168 Dickens Garden, East Vergie 82335-5797"
          distance="A 2.6 km de distancia"
          accentColor="#ECFF40"
          onViewDetail={() => handleCardAction('Lucy', 'Ver detalle')}
          onGetDirections={() => handleCardAction('Lucy', 'Directions')}
        />
        <RecommendedStoreCard
          businessName='Abarrotes "Lucy"'
          address="Belisario Dominguez 608 Col Nápoles, CDMX"
          distance="2 min (0.1 Km)"
          onClick={() => handleCardAction('Recommended', 'Clicked')}
        />
      </div>

      {selectedCard && (
        <div className="bg-white rounded-lg p-4 border border-gray-200 mt-6 text-center">
          <p className="label-large" style={{ color: 'var(--color-deep-blue)' }}>
            Action: <span className="font-normal">{selectedCard} - {action}</span>
          </p>
        </div>
      )}
    </div>
  );
}

export default function B2B2CCardShowcase() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h2 className="headline-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>
          B2B2C Location Cards
        </h2>
        <p className="title-large" style={{ color: 'var(--color-deep-blue)' }}>
          B2B2C cards help users discover participating retail locations where they can engage with campaigns and redeem rewards. These cards provide essential location information and actionable next steps.
        </p>
      </div>

      <InteractiveDemo />

      <div className="space-y-12 mb-16">
        <div>
          <h3 className="title-large font-bold mb-6" style={{ color: 'var(--color-deep-blue)' }}>
            Card Types
          </h3>

          <div className="space-y-8">
            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>
                Standard Location Cards
              </p>
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <div className="flex gap-6 flex-wrap justify-center">
                  <LocationCard
                    businessName='Abarrotes "Lucy"'
                    address="59168 Dickens Garden, East Vergie 82335-5797"
                    distance="A 2.6 km de distancia"
                    accentColor="#ECFF40"
                  />
                  <LocationCard
                    businessName='Tienda "El Sol"'
                    address="123 Avenida Principal, Col. Centro"
                    distance="A 1.2 km de distancia"
                    accentColor="#FF7F00"
                  />
                </div>
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Standard cards with colored top bars for quick visual identification. Each includes location icon, business name, address, distance, and dual CTAs.
              </p>
            </div>

            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>
                Color Variations
              </p>
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <LocationCard
                    businessName='Supermercado "Norte"'
                    address="456 Calle Reforma, Col. Juarez"
                    distance="A 3.5 km de distancia"
                    accentColor="#76E0F3"
                  />
                  <LocationCard
                    businessName='Minisuper "La Esquina"'
                    address="789 Insurgentes Sur, Col. Del Valle"
                    distance="A 0.8 km de distancia"
                    accentColor="#9D00BF"
                  />
                </div>
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Use different accent colors to categorize stores by type, region, or promotion status.
              </p>
            </div>

            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>
                Recommended Store Card
              </p>
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <div className="flex justify-center">
                  <RecommendedStoreCard
                    businessName='Abarrotes "Lucy"'
                    address="Belisario Dominguez 608 Col Nápoles, CDMX"
                    distance="2 min (0.1 Km)"
                  />
                </div>
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Featured card with decorative shapes and "Tienda recomendada" badge. Used to highlight the nearest or most relevant location.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="title-large font-bold mb-6" style={{ color: 'var(--color-deep-blue)' }}>
            Use Cases
          </h3>
          <div className="space-y-8">
            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>
                Store Locator List
              </p>
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <div className="space-y-4 max-w-md mx-auto">
                  <LocationCard
                    businessName='Tienda A'
                    address="Calle 1, Col. Centro"
                    distance="A 0.5 km de distancia"
                    accentColor="#ECFF40"
                  />
                  <LocationCard
                    businessName='Tienda B'
                    address="Calle 2, Col. Norte"
                    distance="A 1.2 km de distancia"
                    accentColor="#FF7F00"
                  />
                  <LocationCard
                    businessName='Tienda C'
                    address="Calle 3, Col. Sur"
                    distance="A 2.8 km de distancia"
                    accentColor="#76E0F3"
                  />
                </div>
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Vertical stack of location cards sorted by distance, ideal for "Find a Store" screens.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="title-large font-bold mb-6" style={{ color: 'var(--color-deep-blue)' }}>
            Component Structure
          </h3>
          <p className="body-large mb-4" style={{ color: 'var(--color-gray-500)' }}>
            Each location card consists of several key elements:
          </p>
          <ul className="space-y-3">
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Accent Bar:</strong> Colored top bar (36px height) for quick visual categorization</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Location Icon:</strong> Blue rounded square (56px) with white location pin icon</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Business Name:</strong> Semibold 20px title using Onest font</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Address:</strong> Regular 16px text with full street address</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Distance:</strong> Purple icon with light 14px text showing proximity</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Primary CTA:</strong> Filled blue button with "Ver detalle" and arrow icon</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Secondary CTA:</strong> Outline button with "¿Cómo llegar?" for navigation</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h3 className="title-large font-bold mb-3" style={{ color: 'var(--color-deep-blue)' }}>
          Best Practices
        </h3>
        <ul className="space-y-2">
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Always display distance information to help users make informed decisions</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Sort location cards by proximity (nearest first) in list views</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Use accent colors consistently to categorize store types or regions</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Feature the recommended store card at the top of search results when relevant</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Include complete addresses to build trust and provide clarity</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Provide both detail and navigation CTAs to support different user intents</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Update distance information dynamically when user location changes</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Use the 343px card width consistently for mobile layouts</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Apply subtle shadows to create depth and separation from background</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
