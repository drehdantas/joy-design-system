import { useState } from 'react';
import svgPaths from '../../imports/CardInfo-2-1/svg-qfarbdu8ck';

function SmileyIcon({ className = "" }: { className?: string }) {
  return (
    <div className={`relative shrink-0 size-[46px] ${className}`}>
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
        <circle cx="23" cy="23" fill="#1443FF" r="23" />
        <path d={svgPaths.p3bccda80} fill="white" />
        <path d={svgPaths.p3cf7a300} fill="white" />
        <path d={svgPaths.p3741e800} fill="white" />
      </svg>
    </div>
  );
}

function CoinIcon({ className = "" }: { className?: string }) {
  return (
    <div className={`relative shrink-0 size-[20px] ${className}`}>
      <div className="absolute inset-[-10%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path d={svgPaths.ped7fe00} fill="white" />
          <circle cx="12" cy="12" r="11" stroke="white" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}

interface AccountBalanceCardProps {
  title?: string;
  subtitle?: string;
  currentPoints: number;
  progressPercent: number;
  progressText?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

function AccountBalanceCard({
  title = 'Saldo actual',
  subtitle = '¡Juega y gana para seguir creciendo!',
  currentPoints,
  progressPercent,
  progressText = 'de tu meta más cercana',
  primaryButtonText = 'Ver catálogo de recompensas',
  secondaryButtonText = 'Ver catálogo de recompensas',
  onPrimaryClick,
  onSecondaryClick
}: AccountBalanceCardProps) {
  return (
    <div className="flex items-center justify-center relative shrink-0" style={{ transform: 'rotate(-2deg)' }}>
      <div className="bg-[#ecff40] content-stretch flex flex-col gap-[16px] items-start justify-end pb-[24px] pt-[16px] px-[16px] relative rounded-[16px] w-full max-w-[343px]">
        {/* Header */}
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
          <SmileyIcon />
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative">
            <p className="font-['Bowlby_One:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[20px] tracking-[0.6px] w-full" style={{ color: 'var(--color-blue-500)' }}>
              {title}
            </p>
            <p className="font-['Onest:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[14px] w-full" style={{ color: 'var(--color-blue-500)' }}>
              {subtitle}
            </p>
          </div>
        </div>

        {/* Progress Bar and Points */}
        <div className="bg-white relative rounded-[54px] shrink-0 w-full">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[24px] items-center px-[16px] relative size-full">
              <div
                className="absolute bg-[#ff7f00] h-[36px] left-0 rounded-[64px] top-0 transition-all duration-300"
                style={{ width: `${Math.min(progressPercent, 100)}%` }}
              />

              <div className="content-stretch flex items-center px-[8px] py-[3px] relative rounded-[64px] shrink-0 w-[203px]">
                <p className="font-['Onest:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[10px] text-white whitespace-nowrap z-10">
                  <span className="leading-[11px]">{progressPercent}% </span>
                  <span className="leading-[11px] text-[#1443ff]">{progressText}</span>
                </p>
              </div>

              <div className="bg-[#9d00bf] content-stretch flex gap-[8px] items-center justify-center p-[8px] relative rounded-[32px] shrink-0 z-10">
                <CoinIcon />
                <p className="font-['Onest:SemiBold',sans-serif] font-semibold leading-[1.1] relative shrink-0 text-[14px] text-white whitespace-nowrap">
                  {currentPoints}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <button
            onClick={onPrimaryClick}
            className="bg-[#1443ff] content-stretch flex h-[40px] items-center justify-center px-[24px] py-[12px] relative rounded-[24px] shrink-0 w-full cursor-pointer hover:opacity-90 transition-opacity"
          >
            <div className="flex flex-col font-['Onest:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
              <p className="leading-[1.1]">{primaryButtonText}</p>
            </div>
          </button>

          <button
            onClick={onSecondaryClick}
            className="h-[40px] relative rounded-[24px] shrink-0 w-full cursor-pointer hover:bg-blue-50 transition-colors"
          >
            <div aria-hidden="true" className="absolute border border-[#1443ff] border-solid inset-0 pointer-events-none rounded-[24px]" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[24px] py-[12px] relative size-full">
                <div className="flex flex-col font-['Onest:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1443ff] text-[14px] text-center whitespace-nowrap">
                  <p className="leading-[1.1]">{secondaryButtonText}</p>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

function InteractiveDemo() {
  const [points, setPoints] = useState(100);
  const [progress, setProgress] = useState(20);
  const [primaryClicks, setPrimaryClicks] = useState(0);
  const [secondaryClicks, setSecondaryClicks] = useState(0);

  const addPoints = () => {
    setPoints(points + 50);
    setProgress(Math.min(progress + 10, 100));
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8 border border-blue-200 mb-16">
      <h3 className="title-large font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>Interactive Demo</h3>
      <p className="body-large mb-6" style={{ color: 'var(--color-gray-500)' }}>
        Click "Add Points" to simulate earning more points and increasing progress.
      </p>

      <div className="flex justify-center mb-6">
        <AccountBalanceCard
          currentPoints={points}
          progressPercent={progress}
          onPrimaryClick={() => setPrimaryClicks(primaryClicks + 1)}
          onSecondaryClick={() => setSecondaryClicks(secondaryClicks + 1)}
        />
      </div>

      <div className="bg-white rounded-lg p-4 border border-gray-200">
        <p className="label-large mb-2" style={{ color: 'var(--color-deep-blue)' }}>
          Current Points: <span className="font-normal">{points}</span>
        </p>
        <p className="label-large mb-2" style={{ color: 'var(--color-deep-blue)' }}>
          Progress: <span className="font-normal">{progress}%</span>
        </p>
        <p className="label-large mb-2" style={{ color: 'var(--color-deep-blue)' }}>
          Primary Button Clicks: <span className="font-normal">{primaryClicks}</span>
        </p>
        <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>
          Secondary Button Clicks: <span className="font-normal">{secondaryClicks}</span>
        </p>
        <div className="flex gap-2">
          <button
            onClick={addPoints}
            className="px-4 py-2 rounded-md text-sm font-medium text-white"
            style={{ backgroundColor: 'var(--color-blue-500)' }}
          >
            Add Points
          </button>
          <button
            onClick={() => {
              setPoints(100);
              setProgress(20);
              setPrimaryClicks(0);
              setSecondaryClicks(0);
            }}
            className="px-4 py-2 rounded-md text-sm font-medium underline"
            style={{ color: 'var(--color-blue-500)' }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AccountBalanceCardShowcase() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h2 className="headline-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Account Balance Card</h2>
        <div className="title-large space-y-4" style={{ color: 'var(--color-deep-blue)' }}>
          <p>
            The Account Balance Card is a key component designed to give users a quick, high-level overview of their current points and progress within the JOY loyalty program. Its primary function is to motivate users by visually displaying their achievements and encouraging them to continue playing and earning.
          </p>

          <div>
            <p className="font-bold mb-2">Purpose and Functionality</p>
            <p>
              This card's main purpose is to be the central point of a user's loyalty dashboard. It acts as a concise progress tracker, showing the user their current standing and what's needed to reach their next goal. It's a highly engaging component that transforms a simple number into a compelling call to action.
            </p>
          </div>

          <div>
            <p className="font-bold mb-2">Elements</p>
            <div className="ml-6 space-y-3">
              <p>
                <span className="font-semibold">Header:</span> The card's header is designed to be welcoming and informative, featuring a happy icon and a title like "Saldo actual" (Current balance), paired with a motivational phrase like "¡Juega y gana para seguir creciendo!" (Play and win to keep growing!).
              </p>
              <p>
                <span className="font-semibold">Progress Indicator:</span> A progress bar visually represents the user's progress toward their next milestone. A percentage (e.g., "20% de tu meta más cercana") provides a clear, numerical value of their advancement.
              </p>
              <p>
                <span className="font-semibold">Points Display:</span> A prominent icon and number (e.g., "100") show the user's total accumulated points, making their success immediately visible.
              </p>
              <p>
                <span className="font-semibold">Call-to-Action (CTA) Buttons:</span> Two buttons at the bottom of the card guide the user to the next logical step: exploring and redeeming their hard-earned rewards.
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
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Standard Layout (20% Progress)</p>
              <div className="bg-white rounded-lg border border-gray-200 p-8 flex justify-center">
                <AccountBalanceCard
                  currentPoints={100}
                  progressPercent={20}
                />
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Starting state with low progress showing motivation to earn more.
              </p>
            </div>

            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Mid Progress (50%)</p>
              <div className="bg-white rounded-lg border border-gray-200 p-8 flex justify-center">
                <AccountBalanceCard
                  currentPoints={500}
                  progressPercent={50}
                />
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Halfway to the goal with visible progress bar.
              </p>
            </div>

            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Near Completion (90%)</p>
              <div className="bg-white rounded-lg border border-gray-200 p-8 flex justify-center">
                <AccountBalanceCard
                  currentPoints={900}
                  progressPercent={90}
                />
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Almost at the goal, encouraging final push.
              </p>
            </div>

            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Custom Button Text</p>
              <div className="bg-white rounded-lg border border-gray-200 p-8 flex justify-center">
                <AccountBalanceCard
                  currentPoints={250}
                  progressPercent={35}
                  primaryButtonText="Explorar recompensas"
                  secondaryButtonText="Ver mi historial"
                />
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Custom button labels for different actions.
              </p>
            </div>

            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>High Points User</p>
              <div className="bg-white rounded-lg border border-gray-200 p-8 flex justify-center">
                <AccountBalanceCard
                  title="¡Eres VIP!"
                  subtitle="Sigue acumulando para desbloquear premios exclusivos"
                  currentPoints={2500}
                  progressPercent={75}
                  progressText="para premio exclusivo"
                />
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Customized messaging for high-value users.
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
            <span>Use the bright lime background (#ECFF40) to make the card visually distinctive</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Apply the -2 degree rotation for playful, dynamic visual interest</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Include the smiley face icon to create a positive, welcoming tone</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Use Bowlby One font for the title to maintain brand consistency</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Show progress percentage clearly to motivate users toward their goal</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Animate the progress bar fill (#FF7F00) for engaging visual feedback</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Display current points prominently with the purple badge (#9D00BF)</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Provide two clear CTAs: primary (filled) and secondary (outline)</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Use motivational language in the subtitle to encourage engagement</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Place this card prominently on the dashboard as the central focus</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Update progress in real-time as users earn more points</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Celebrate milestones by updating the messaging when goals are reached</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
