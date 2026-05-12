import { useState } from 'react';
import svgPaths from '../../imports/CardInfo-5/svg-8jhj3a2cyo';

function CoinIcon({ className = "" }: { className?: string }) {
  return (
    <div className={`relative shrink-0 size-[20px] ${className}`}>
      <div className="absolute inset-[15%_35%_15%_30%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 14">
          <path d={svgPaths.p3b440080} fill="#1443FF" />
        </svg>
      </div>
      <div className="absolute inset-[-10%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="11" stroke="#1443FF" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}

interface RedeemableCardProps {
  title: string;
  expirationText: string;
  pointsValue: number;
  ctaText?: string;
  backgroundColor?: string;
  onRedeem?: () => void;
}

function RedeemableCard({
  title,
  expirationText,
  pointsValue,
  ctaText = '¡Canjéalo ya!',
  backgroundColor = '#9D00BF',
  onRedeem
}: RedeemableCardProps) {
  return (
    <div className="h-[231px] relative shrink-0 w-[252px]">
      <div className="absolute h-[231px] left-0 top-0 w-[252px]">
        <div className="absolute inset-[0.6%_-4.76%_-10.39%_-4.76%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 276 253.613">
            <g filter="url(#filter0_dd_redeemable)" id="Rectangle">
              <path d={svgPaths.p1b90ab80} fill={backgroundColor} />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="253.613" id="filter0_dd_redeemable" width="276" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feMorphology in="SourceAlpha" operator="erode" radius="2" result="effect1_dropShadow" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="3" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feMorphology in="SourceAlpha" operator="erode" radius="4" result="effect2_dropShadow" />
                <feOffset dy="12" />
                <feGaussianBlur stdDeviation="8" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
                <feBlend in2="effect1_dropShadow" mode="normal" result="effect2_dropShadow" />
                <feBlend in="SourceGraphic" in2="effect2_dropShadow" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>

      <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[16px] top-[106px] w-[220px]">
        {/* Title and Points */}
        <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative">
            <p className="font-['Onest:SemiBold',sans-serif] font-semibold leading-[1.1] relative shrink-0 text-[20px] text-white w-full">
              {title}
            </p>
            <p className="font-['Onest:Light',sans-serif] font-light h-[15px] leading-[normal] relative shrink-0 text-[#efefef] text-[12px] w-full">
              {expirationText}
            </p>
          </div>

          <div className="bg-[#ecff40] content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[12px] py-[8px] relative rounded-[32px] shrink-0">
            <CoinIcon />
            <p className="font-['Onest:SemiBold',sans-serif] font-semibold leading-[14px] relative shrink-0 text-[#1443ff] text-[14px] text-right whitespace-nowrap">
              {pointsValue}
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
          <button
            onClick={onRedeem}
            className="bg-white content-stretch flex h-[32px] items-center justify-center px-[24px] py-[12px] relative rounded-[24px] shrink-0 cursor-pointer hover:opacity-90 transition-opacity"
          >
            <div className="flex flex-col font-['Onest:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1443ff] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[1.1]">{ctaText}</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

function InteractiveDemo() {
  const [redeemCount, setRedeemCount] = useState(0);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8 border border-blue-200 mb-16">
      <h3 className="title-large font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>Interactive Demo</h3>
      <p className="body-large mb-6" style={{ color: 'var(--color-gray-500)' }}>
        Click "¡Canjéalo ya!" to track redemption interactions.
      </p>

      <div className="flex justify-center mb-6">
        <RedeemableCard
          title="Card title"
          expirationText="Expiration date"
          pointsValue={300}
          onRedeem={() => setRedeemCount(redeemCount + 1)}
        />
      </div>

      <div className="bg-white rounded-lg p-4 border border-gray-200">
        <p className="label-large mb-2" style={{ color: 'var(--color-deep-blue)' }}>
          Redeem Clicks: <span className="font-normal">{redeemCount}</span>
        </p>
        <button
          onClick={() => setRedeemCount(0)}
          className="text-sm underline"
          style={{ color: 'var(--color-blue-500)' }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default function RedeemableCardShowcase() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h2 className="headline-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Redeemable Card</h2>
        <div className="title-large space-y-4" style={{ color: 'var(--color-deep-blue)' }}>
          <p>
            The Redeemable Card is a component that presents a reward or offer that can be redeemed. It's designed to be a clear, simple call-to-action for users who have already earned the necessary points or are eligible for a specific prize.
          </p>

          <div>
            <p className="font-bold mb-2">Purpose and Functionality</p>
            <p>
              The main purpose of this card is to prompt the user to take action and redeem a reward. It is a visually appealing and straightforward component that highlights a single action, streamlining the process of claiming a prize. This card is perfect for loyalty program dashboards and reward sections.
            </p>
          </div>

          <div>
            <p className="font-bold mb-2">Elements</p>
            <div className="ml-6 space-y-3">
              <p>
                <span className="font-semibold">Card Title:</span> A prominent title that quickly communicates the name of the reward.
              </p>
              <p>
                <span className="font-semibold">Expiration Date:</span> A text element that displays the expiration date, creating a sense of urgency for the user to redeem the reward before it expires.
              </p>
              <p>
                <span className="font-semibold">Points Indicator:</span> A visual element that shows the value of the reward in points (e.g., 300).
              </p>
              <p>
                <span className="font-semibold">Call to Action (CTA):</span> A button with an action-oriented label like ¡Canjéalo ya! (Redeem it now!) that serves as the primary way for users to claim the reward.
              </p>
              <p>
                <span className="font-semibold">Visual Design:</span> The card uses vibrant colors from the JOY brand palette to be eye-catching and appealing, reinforcing the positive feeling of earning a reward.
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
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Standard Purple Background</p>
              <div className="bg-white rounded-lg border border-gray-200 p-8 flex justify-center">
                <RedeemableCard
                  title="Mando de videojuegos"
                  expirationText="Expira 31 Jul 2025"
                  pointsValue={300}
                />
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Default purple (#9D00BF) background with white text and lime accent.
              </p>
            </div>

            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Different Background Colors</p>
              <div className="bg-white rounded-lg border border-gray-200 p-8 flex justify-center gap-4 flex-wrap">
                <RedeemableCard
                  title="Premio especial"
                  expirationText="Expira pronto"
                  pointsValue={500}
                  backgroundColor="#1443FF"
                />
                <RedeemableCard
                  title="Recompensa premium"
                  expirationText="Válido hasta Dic 31"
                  pointsValue={1000}
                  backgroundColor="#FF7F00"
                />
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Alternative brand colors for visual variety.
              </p>
            </div>

            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Different Point Values</p>
              <div className="bg-white rounded-lg border border-gray-200 p-8 flex justify-center gap-4 flex-wrap">
                <RedeemableCard
                  title="Premio básico"
                  expirationText="Expira en 7 días"
                  pointsValue={100}
                  ctaText="Canjear ahora"
                />
                <RedeemableCard
                  title="Premio VIP"
                  expirationText="Expira en 30 días"
                  pointsValue={2500}
                  ctaText="¡Lo quiero!"
                />
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Cards with different point values and custom CTA text.
              </p>
            </div>

            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Multiple Cards Layout</p>
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
                  <RedeemableCard
                    title="Audífonos"
                    expirationText="Expira 15 Jun"
                    pointsValue={250}
                  />
                  <RedeemableCard
                    title="Gift Card $50"
                    expirationText="Expira 30 Jun"
                    pointsValue={400}
                    backgroundColor="#1443FF"
                  />
                  <RedeemableCard
                    title="Reloj deportivo"
                    expirationText="Expira 1 Jul"
                    pointsValue={750}
                    backgroundColor="#FF7F00"
                  />
                </div>
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Grid layout showing multiple redeemable rewards.
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
            <span>Use vibrant, high-contrast colors to make the card stand out and feel rewarding</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Keep the title short and descriptive to immediately communicate the reward</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Always display expiration dates to create urgency and encourage redemption</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Use the lime (#ECFF40) accent color for the points badge consistently</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Make the CTA button prominent with white background and blue text</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Use action-oriented CTA text that encourages immediate action (e.g., "¡Canjéalo ya!")</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Maintain the angled card design for visual interest and brand consistency</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Keep card dimensions consistent (252x231px) for uniform grids</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Display point values clearly to help users understand the reward's value</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Use white text on colored backgrounds for optimal readability</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Group multiple redeemable cards in grids for easy browsing of available rewards</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
