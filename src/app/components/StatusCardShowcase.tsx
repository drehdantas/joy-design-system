import { useState } from 'react';
import svgPaths from "../../imports/CardInfo-4-1/svg-q1r8ssl9sr";
import { imgArrowOutward } from "../../imports/CardInfo-4-1/svg-4yr6r";

interface StatusCardProps {
  title: string;
  backgroundColor: string;
  textColor?: string;
  shapeColor: string;
  shapeRotation?: number;
  onClick?: () => void;
}

function StatusCard({
  title,
  backgroundColor,
  textColor = 'white',
  shapeColor,
  shapeRotation = -69.12,
  onClick
}: StatusCardProps) {
  return (
    <button
      onClick={onClick}
      className="bg-white content-stretch flex flex-col gap-[8px] items-start justify-center overflow-clip p-[16px] relative rounded-[16px] shrink-0 w-[164px] transition-transform hover:scale-105"
      style={{ backgroundColor }}
    >
      {/* Decorative Shape */}
      <div className="absolute flex h-[270.428px] items-center justify-center left-[-65px] top-[-200px] w-[267.515px]">
        <div className="flex-none" style={{ transform: `rotate(${shapeRotation}deg)` }}>
          <div className="h-[205.859px] relative w-[210.901px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 210.901 205.859">
              <path d={svgPaths.p4c28540} fill={shapeColor} />
            </svg>
          </div>
        </div>
      </div>

      {/* Arrow Icon Tag */}
      <div className="bg-white content-stretch flex items-center justify-center p-[8px] relative rounded-[32px] shrink-0 z-10">
        <div className="relative shrink-0 size-[24px]">
          <div
            className="absolute bottom-[26.77%] left-[22.6%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5.425px_-5px] mask-size-[24px_24px] right-1/4 top-[20.83%]"
            style={{ maskImage: `url('${imgArrowOutward}')` }}
          >
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.575 12.575">
              <path d={svgPaths.p2cc41100} fill="var(--color-blue-500)" />
            </svg>
          </div>
        </div>
      </div>

      {/* Title */}
      <p
        className="font-['Bowlby_One:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] tracking-[0.48px] w-[132px] z-10"
        style={{ color: textColor }}
      >
        {title}
      </p>
    </button>
  );
}

function InteractiveDemo() {
  const [clickedCard, setClickedCard] = useState<string | null>(null);

  const handleCardClick = (cardName: string) => {
    setClickedCard(cardName);
    setTimeout(() => setClickedCard(null), 2000);
  };

  return (
    <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-8 border border-purple-200 mb-16">
      <h3 className="title-large font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>
        Interactive Demo
      </h3>
      <p className="body-large mb-6" style={{ color: 'var(--color-gray-500)' }}>
        Click on any status card to see the interaction. These cards typically lead to dedicated detail pages.
      </p>

      <div className="flex gap-[16px] flex-wrap justify-center">
        <StatusCard
          title="Tus Canjes y Tus Movidas"
          backgroundColor="#9d00bf"
          textColor="white"
          shapeColor="#FF7F00"
          shapeRotation={-69.12}
          onClick={() => handleCardClick('redemptions')}
        />
        <StatusCard
          title="Caprichos Pendientes"
          backgroundColor="#76e0f3"
          textColor="var(--color-blue-500)"
          shapeColor="#9D00BF"
          shapeRotation={32.07}
          onClick={() => handleCardClick('pending')}
        />
      </div>

      {clickedCard && (
        <div className="bg-white rounded-lg p-4 border border-gray-200 mt-6 text-center">
          <p className="label-large" style={{ color: 'var(--color-deep-blue)' }}>
            Clicked: <span className="font-normal">{clickedCard === 'redemptions' ? 'Tus Canjes y Tus Movidas' : 'Caprichos Pendientes'}</span>
          </p>
        </div>
      )}
    </div>
  );
}

export default function StatusCardShowcase() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h2 className="headline-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>
          Status Card
        </h2>
        <p className="title-large" style={{ color: 'var(--color-deep-blue)' }}>
          The Status Card is a versatile component designed to provide users with a quick, at-a-glance overview of key information or pending actions. It's an ideal element for a user dashboard or profile section, where it can be used to highlight important updates or statuses.
        </p>
      </div>

      <InteractiveDemo />

      <div className="space-y-12 mb-16">
        <div>
          <h3 className="title-large font-bold mb-6" style={{ color: 'var(--color-deep-blue)' }}>
            Purpose and Functionality
          </h3>
          <p className="body-large mb-6" style={{ color: 'var(--color-gray-500)' }}>
            This card's primary purpose is to clearly categorize and communicate a specific status or set of actions that a user needs to take. It uses a unique color combination and concise text to draw attention to important information, encouraging the user to click to view more details.
          </p>
        </div>

        <div>
          <h3 className="title-large font-bold mb-6" style={{ color: 'var(--color-deep-blue)' }}>
            Variations
          </h3>

          <div className="space-y-8">
            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>
                Standard Examples
              </p>
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <div className="flex gap-[16px] flex-wrap justify-center">
                  <StatusCard
                    title="Tus Canjes y Tus Movidas"
                    backgroundColor="#9d00bf"
                    textColor="white"
                    shapeColor="#FF7F00"
                    shapeRotation={-69.12}
                  />
                  <StatusCard
                    title="Caprichos Pendientes"
                    backgroundColor="#76e0f3"
                    textColor="var(--color-blue-500)"
                    shapeColor="#9D00BF"
                    shapeRotation={32.07}
                  />
                </div>
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Default status cards with contrasting color schemes for visual distinction.
              </p>
            </div>

            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>
                Alternative Color Schemes
              </p>
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <div className="flex gap-[16px] flex-wrap justify-center">
                  <StatusCard
                    title="Campañas Activas"
                    backgroundColor="var(--color-blue-500)"
                    textColor="white"
                    shapeColor="#ECFF40"
                    shapeRotation={-45}
                  />
                  <StatusCard
                    title="Puntos Acumulados"
                    backgroundColor="#ECFF40"
                    textColor="var(--color-deep-blue)"
                    shapeColor="#9D00BF"
                    shapeRotation={25}
                  />
                  <StatusCard
                    title="Recompensas Disponibles"
                    backgroundColor="#FF7F00"
                    textColor="white"
                    shapeColor="var(--color-blue-500)"
                    shapeRotation={-60}
                  />
                </div>
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Additional color combinations using the JOY brand palette for different status categories.
              </p>
            </div>

            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>
                Dashboard Layout Example
              </p>
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <div className="grid grid-cols-2 gap-4 max-w-[360px] mx-auto">
                  <StatusCard
                    title="Mis Canjes"
                    backgroundColor="#9d00bf"
                    textColor="white"
                    shapeColor="#FF7F00"
                    shapeRotation={-69.12}
                  />
                  <StatusCard
                    title="Pendientes"
                    backgroundColor="#76e0f3"
                    textColor="var(--color-blue-500)"
                    shapeColor="#9D00BF"
                    shapeRotation={32.07}
                  />
                  <StatusCard
                    title="Favoritos"
                    backgroundColor="var(--color-blue-500)"
                    textColor="white"
                    shapeColor="#ECFF40"
                    shapeRotation={-45}
                  />
                  <StatusCard
                    title="Historial"
                    backgroundColor="#FF7F00"
                    textColor="white"
                    shapeColor="var(--color-blue-500)"
                    shapeRotation={20}
                  />
                </div>
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Status cards arranged in a 2-column grid for dashboard or profile sections.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="title-large font-bold mb-6" style={{ color: 'var(--color-deep-blue)' }}>
            Elements and States
          </h3>
          <p className="body-large mb-4" style={{ color: 'var(--color-gray-500)' }}>
            The Status Card is a single component that uses color to represent its state or category, making it easily scannable within a group of similar cards.
          </p>
          <ul className="space-y-3">
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Icon:</strong> An icon, such as the upward arrow, indicates that the card is interactive and leads to a new view with more details.</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Title:</strong> A clear, concise title categorizes the information (e.g., "Your Redemptions" or "Pending Rewards").</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Visual Design:</strong> The card's visual design uses a combination of solid shapes and vibrant colors from the JOY brand palette. This allows the card to be visually distinct while still maintaining a cohesive brand feel.</span>
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
            <span>Use distinct color combinations to differentiate between status categories</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Keep titles short and action-oriented (max 2-3 words per line)</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Ensure text color has sufficient contrast with background color for readability</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Use the arrow icon consistently to indicate the card is clickable and leads to more details</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Maintain consistent card dimensions (164px width) when displaying multiple cards together</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Reserve status cards for high-level category navigation, not detailed content</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Group related status cards together in dashboard or profile sections</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Use the decorative shapes to add visual interest while maintaining brand consistency</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
