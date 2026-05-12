import { useState } from 'react';
import svgPaths from '../../imports/CardInfo-3-1/svg-tdlh2osn28';

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

function ApprovalIcon({ className = "" }: { className?: string }) {
  return (
    <div className={`relative shrink-0 size-[16px] ${className}`}>
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <path d={svgPaths.pbc72e00} fill="#6B6F86" />
      </svg>
    </div>
  );
}

function GiftIcon({ className = "" }: { className?: string }) {
  return (
    <div className={`relative shrink-0 size-[16px] ${className}`}>
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <path d={svgPaths.p83d7980} fill="#6B6F86" />
      </svg>
    </div>
  );
}

function CalendarIcon({ className = "" }: { className?: string }) {
  return (
    <div className={`relative shrink-0 size-[16px] ${className}`}>
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <path d={svgPaths.p3b243500} fill="#6B6F86" />
      </svg>
    </div>
  );
}

function CrownIcon({ className = "" }: { className?: string }) {
  return (
    <div className={`relative shrink-0 size-[16px] ${className}`}>
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <path d={svgPaths.p12bfb980} fill="#6B6F86" />
      </svg>
    </div>
  );
}

interface DetailItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function DetailItem({ icon, label, value }: DetailItemProps) {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0">
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
        {icon}
        <p className="font-['Onest:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[12px] whitespace-nowrap" style={{ color: 'var(--color-gray-500)' }}>
          {label}
        </p>
      </div>
      <p className="font-['Onest:Medium',sans-serif] font-medium leading-[11px] relative shrink-0 text-[10px] w-full" style={{ color: 'var(--color-blue-500)' }}>
        {value}
      </p>
    </div>
  );
}

interface CampaignDetailHeaderProps {
  title: string;
  pointsValue: number;
  available: string;
  howToWin: string;
  expirationDate: string;
  whoApplies: string;
  campaignTag: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

function CampaignDetailHeader({
  title,
  pointsValue,
  available,
  howToWin,
  expirationDate,
  whoApplies,
  campaignTag,
  buttonText = 'Redimir premio',
  onButtonClick
}: CampaignDetailHeaderProps) {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start justify-end p-[16px] relative rounded-[16px] shrink-0 w-full max-w-[343px]">
      {/* Title and Points */}
      <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
        <div className="flex-[1_0_0] font-['Bowlby_One:Regular',sans-serif] leading-[0] min-w-px not-italic relative text-[20px] tracking-[0.6px] whitespace-pre-wrap" style={{ color: 'var(--color-blue-500)' }}>
          <p className="leading-[24px]">{title}</p>
        </div>

        <div className="bg-[#76e0f3] content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[12px] py-[8px] relative rounded-[32px] shrink-0">
          <CoinIcon />
          <p className="font-['Onest:SemiBold',sans-serif] font-semibold leading-[14px] relative shrink-0 text-[#1443ff] text-[14px] text-right whitespace-nowrap">
            {pointsValue}
          </p>
        </div>
      </div>

      {/* Details Grid */}
      <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full">
        <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
          <DetailItem
            icon={<ApprovalIcon />}
            label="Disponibles"
            value={available}
          />
          <DetailItem
            icon={<GiftIcon />}
            label="¿Cómo ganar?"
            value={howToWin}
          />
          <DetailItem
            icon={<CalendarIcon />}
            label="Vencimiento"
            value={expirationDate}
          />
        </div>

        <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
          <DetailItem
            icon={<CrownIcon />}
            label="Quién aplica"
            value={whoApplies}
          />

          <div className="bg-[#9d00bf] content-stretch flex gap-[8px] h-[36px] items-center justify-center p-[8px] relative rounded-[32px] shrink-0">
            <p className="font-['Onest:SemiBold',sans-serif] font-semibold leading-[14px] relative shrink-0 text-[10px] text-right text-white whitespace-nowrap">
              {campaignTag}
            </p>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <button
        onClick={onButtonClick}
        className="bg-[#1443ff] content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[24px] shrink-0 w-full cursor-pointer hover:opacity-90 transition-opacity"
      >
        <div className="flex flex-col font-['Onest:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
          <p className="leading-[1.1]">{buttonText}</p>
        </div>
      </button>
    </div>
  );
}

function InteractiveDemo() {
  const [buttonClicks, setButtonClicks] = useState(0);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8 border border-blue-200 mb-16">
      <h3 className="title-large font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>Interactive Demo</h3>
      <p className="body-large mb-6" style={{ color: 'var(--color-gray-500)' }}>
        Click the button to track CTA interactions.
      </p>

      <div className="flex justify-center mb-6">
        <CampaignDetailHeader
          title="Consola de videojuegos"
          pointsValue={300}
          available="10"
          howToWin="Solo ranking"
          expirationDate="Hasta 15/06"
          whoApplies="Top 10"
          campaignTag="Nombre de campaña"
          onButtonClick={() => setButtonClicks(buttonClicks + 1)}
        />
      </div>

      <div className="bg-white rounded-lg p-4 border border-gray-200">
        <p className="label-large mb-2" style={{ color: 'var(--color-deep-blue)' }}>
          Button Clicks: <span className="font-normal">{buttonClicks}</span>
        </p>
        <button
          onClick={() => setButtonClicks(0)}
          className="text-sm underline"
          style={{ color: 'var(--color-blue-500)' }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default function CampaignDetailHeaderShowcase() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h2 className="headline-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Campaign Detail Header</h2>
        <div className="title-large space-y-4" style={{ color: 'var(--color-deep-blue)' }}>
          <p>
            This component is designed to serve as the header for a campaign's detail page. It provides a quick, scannable summary of the most important information, helping users decide whether to participate without having to read a long-form description. This component is key for guiding users into a campaign and managing their expectations.
          </p>

          <div>
            <p className="font-bold mb-2">Purpose and Functionality</p>
            <p>
              The Campaign Detail Header provides a high-level overview of an offer, focusing on the core details that matter most to a user. Its primary purpose is to clearly and concisely communicate the value proposition, eligibility, and timeline of a campaign. This component is ideal for use at the top of a campaign's detail screen, acting as a dynamic and informative entry point.
            </p>
          </div>

          <div>
            <p className="font-bold mb-2">Elements</p>
            <div className="ml-6 space-y-3">
              <p>
                <span className="font-semibold">Title:</span> A prominent title that clearly states the main reward of the campaign.
              </p>
              <p>
                <span className="font-semibold">Key Details:</span> The component includes a series of icons with labels that provide crucial at-a-glance information about the campaign:
              </p>
              <ul className="ml-6 space-y-1">
                <li>"Disponibles" (Available): Shows the quantity of the prize.</li>
                <li>"¿Cómo ganar?" (How to win?): Explains the method of winning, such as "Solo ranking" (Ranking only).</li>
                <li>"Vencimiento" (Expiration): Clearly displays the expiration date of the campaign.</li>
                <li>"Quién aplica" (Who applies): Outlines the eligibility criteria, such as "Top 10".</li>
              </ul>
              <p>
                <span className="font-semibold">Call-to-Action (CTA):</span> A prominent button, often with a dynamic label, guides the user to the next step of the campaign's journey, which could be entering the contest or viewing more details.
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
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Standard Campaign Header</p>
              <div className="bg-white rounded-lg border border-gray-200 p-8 flex justify-center">
                <CampaignDetailHeader
                  title="Consola de videojuegos"
                  pointsValue={300}
                  available="10"
                  howToWin="Solo ranking"
                  expirationDate="Hasta 15/06"
                  whoApplies="Top 10"
                  campaignTag="Nombre de campaña"
                />
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Complete campaign header with all key details displayed.
              </p>
            </div>

            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Different Win Methods</p>
              <div className="bg-white rounded-lg border border-gray-200 p-8 flex justify-center gap-4 flex-wrap">
                <CampaignDetailHeader
                  title="Audífonos Premium"
                  pointsValue={200}
                  available="50"
                  howToWin="Check-ins"
                  expirationDate="Hasta 30/06"
                  whoApplies="Todos"
                  campaignTag="Campaña de verano"
                />
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Campaign with check-ins as the winning method, open to all participants.
              </p>
            </div>

            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Limited Availability</p>
              <div className="bg-white rounded-lg border border-gray-200 p-8 flex justify-center">
                <CampaignDetailHeader
                  title="Viaje a Cancún"
                  pointsValue={1000}
                  available="1"
                  howToWin="Sorteo"
                  expirationDate="Hasta 31/12"
                  whoApplies="VIP"
                  campaignTag="Premio exclusivo"
                  buttonText="Participar ahora"
                />
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                High-value prize with limited availability and VIP eligibility.
              </p>
            </div>

            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Different Button Text</p>
              <div className="bg-white rounded-lg border border-gray-200 p-8 flex justify-center gap-4 flex-wrap">
                <CampaignDetailHeader
                  title="Gift Card $50"
                  pointsValue={150}
                  available="100"
                  howToWin="Puntos"
                  expirationDate="Sin vencimiento"
                  whoApplies="Todos"
                  campaignTag="Siempre disponible"
                  buttonText="Canjear ahora"
                />
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Campaign with custom button text and no expiration date.
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
            <span>Use Bowlby One font for the title to maintain brand consistency and create impact</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Keep titles concise and clear (2-4 words maximum when possible)</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Display point values prominently with the cyan badge (#76E0F3)</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Use consistent icons for each detail type to aid quick scanning</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Show availability numbers clearly to create urgency when quantities are low</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Be explicit about how to win (ranking, check-ins, points, etc.)</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Always display expiration dates to set clear expectations</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Clearly communicate eligibility criteria (Top 10, VIP, Todos, etc.)</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Use the purple campaign tag (#9D00BF) for campaign identification</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Make the CTA button action-oriented and specific to the campaign type</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Place this header at the top of campaign detail screens</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Ensure all information is accurate and up-to-date</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
