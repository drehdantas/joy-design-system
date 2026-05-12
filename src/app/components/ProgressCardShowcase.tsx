import { useState } from 'react';
import svgPaths from '../../imports/CardInfo-3/svg-k7z74yj6z8';

function CoinIcon({ className = "" }: { className?: string }) {
  return (
    <div className={`relative shrink-0 size-[20px] ${className}`}>
      <div className="absolute inset-[15%_35%_15%_30%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 14">
          <path d={svgPaths.p3b440080} fill="white" />
        </svg>
      </div>
      <div className="absolute inset-[-10%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="11" stroke="white" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}

interface ProgressCardProps {
  title: string;
  description: string;
  rewardValue: number;
  currentProgress: number;
  maxProgress: number;
  ctaText?: string;
  expirationText?: string;
  onAccept?: () => void;
}

function ProgressCard({
  title,
  description,
  rewardValue,
  currentProgress,
  maxProgress,
  ctaText = '¡Acepto el reto!',
  expirationText = 'Expiration date',
  onAccept
}: ProgressCardProps) {
  const progressPercentage = Math.min((currentProgress / maxProgress) * 100, 100);

  return (
    <div className="bg-white content-stretch flex flex-col h-[280px] items-start justify-end px-[16px] py-[24px] relative rounded-[12px] shadow-[0px_12px_16px_0px_rgba(0,0,0,0.08),0px_4px_6px_0px_rgba(0,0,0,0.03)] shrink-0 w-full max-w-[343px]">
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
        {/* Title and Reward */}
        <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative">
            <p className="font-['Onest:SemiBold',sans-serif] font-semibold leading-[1.1] relative shrink-0 text-[20px] whitespace-nowrap" style={{ color: 'var(--color-blue-500)' }}>
              {title}
            </p>
            <p className="font-['Onest:Light',sans-serif] font-light leading-[normal] min-w-full relative shrink-0 text-[12px] w-[min-content]" style={{ color: 'var(--color-gray-600)' }}>
              {description}
            </p>
          </div>

          <div className="bg-[#9d00bf] content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[12px] py-[8px] relative rounded-[32px] shrink-0">
            <CoinIcon />
            <p className="font-['Onest:SemiBold',sans-serif] font-semibold leading-[14px] relative shrink-0 text-[14px] text-right text-white whitespace-nowrap">
              {rewardValue}
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
          <div className="grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
            <div className="bg-[#efefef] col-1 h-[5px] ml-0 mt-0 rounded-[100px] row-1 w-full" />
            <div
              className="bg-[#ff7f00] col-1 h-[5px] ml-0 mt-0 rounded-[100px] row-1 transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>

          <div className="content-stretch flex font-['Onest:Regular',sans-serif] font-normal gap-[2px] items-end leading-[normal] relative shrink-0 text-[14px] text-center whitespace-nowrap" style={{ color: 'var(--color-gray-600)' }}>
            <p className="relative shrink-0">{currentProgress}</p>
            <p className="relative shrink-0">/</p>
            <p className="relative shrink-0">{maxProgress}</p>
          </div>
        </div>

        {/* Actions and Expiration */}
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          <button
            onClick={onAccept}
            className="bg-[#1443ff] content-stretch flex h-[40px] items-center justify-center px-[24px] py-[12px] relative rounded-[24px] shrink-0 cursor-pointer hover:opacity-90 transition-opacity"
          >
            <div className="flex flex-col font-['Onest:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
              <p className="leading-[1.1]">{ctaText}</p>
            </div>
          </button>

          <p className="font-['Onest:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[12px] whitespace-nowrap" style={{ color: 'var(--color-gray-600)' }}>
            {expirationText}
          </p>
        </div>
      </div>
    </div>
  );
}

function InteractiveDemo() {
  const [progress, setProgress] = useState(0);
  const [acceptCount, setAcceptCount] = useState(0);
  const maxProgress = 2000;

  const handleAccept = () => {
    setAcceptCount(acceptCount + 1);
    setProgress(Math.min(progress + 200, maxProgress));
  };

  const handleReset = () => {
    setProgress(0);
    setAcceptCount(0);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8 border border-blue-200 mb-16">
      <h3 className="title-large font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>Interactive Demo</h3>
      <p className="body-large mb-6" style={{ color: 'var(--color-gray-500)' }}>
        Click "¡Acepto el reto!" to increase progress. Watch the progress bar fill up as you go.
      </p>

      <div className="flex justify-center mb-6">
        <ProgressCard
          title="Card title"
          description="Card description"
          rewardValue={300}
          currentProgress={progress}
          maxProgress={maxProgress}
          expirationText="Expiration date"
          onAccept={handleAccept}
        />
      </div>

      <div className="bg-white rounded-lg p-4 border border-gray-200">
        <p className="label-large mb-2" style={{ color: 'var(--color-deep-blue)' }}>
          Progress: <span className="font-normal">{progress} / {maxProgress} ({Math.round((progress / maxProgress) * 100)}%)</span>
        </p>
        <p className="label-large mb-2" style={{ color: 'var(--color-deep-blue)' }}>
          Accept Clicks: <span className="font-normal">{acceptCount}</span>
        </p>
        <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>
          Status: <span className="font-normal">{progress >= maxProgress ? 'Completed!' : 'In Progress'}</span>
        </p>
        <button
          onClick={handleReset}
          className="text-sm underline"
          style={{ color: 'var(--color-blue-500)' }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default function ProgressCardShowcase() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h2 className="headline-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Progress Card</h2>
        <div className="title-large space-y-4" style={{ color: 'var(--color-deep-blue)' }}>
          <p>
            The Progress Card is a versatile component designed to display a challenge or task with a clear visual indicator of the user's progress. This card is ideal for gamification and loyalty modules, motivating users by showing them how close they are to achieving a goal.
          </p>

          <div>
            <p className="font-bold mb-2">Purpose and Functionality</p>
            <p>
              This card serves as a compact overview of a specific challenge or mission. Its primary purpose is to provide users with a quick glance at their status, the value of the reward, and the main action required. It's a key element in driving user engagement and participation in the app's loyalty programs.
            </p>
          </div>

          <div>
            <p className="font-bold mb-2">Elements and States</p>
            <div className="ml-6 space-y-3">
              <p>
                <span className="font-semibold">Card Title & Description:</span> The card features a clear title and a short description to introduce the challenge to the user.
              </p>
              <p>
                <span className="font-semibold">Progress Bar:</span> A horizontal progress bar visually communicates the user's current standing towards completing the challenge. It shows the numeric progress (e.g., 0/2000) below the bar. This element is crucial for motivating users.
              </p>
              <p>
                <span className="font-semibold">Reward Indicator:</span> An icon and a value (e.g., 300) indicate the reward for completing the challenge, immediately communicating the incentive to the user.
              </p>
              <p>
                <span className="font-semibold">Call to Action (CTA):</span> A prominent button, often with a clear, action-oriented label like ¡Acepto el reto!, invites the user to begin or continue the challenge.
              </p>
              <p>
                <span className="font-semibold">Expiration Date:</span> This text informs the user about the timeline for the challenge, creating a sense of urgency.
              </p>
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
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Not Started (0% Progress)</p>
              <div className="bg-white rounded-lg border border-gray-200 p-8 flex justify-center">
                <ProgressCard
                  title="Summer Challenge"
                  description="Complete 12 check-ins to win"
                  rewardValue={300}
                  currentProgress={0}
                  maxProgress={2000}
                  expirationText="Expires Jul 31, 2025"
                />
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Initial state with no progress made yet.
              </p>
            </div>

            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>In Progress (50%)</p>
              <div className="bg-white rounded-lg border border-gray-200 p-8 flex justify-center">
                <ProgressCard
                  title="Summer Challenge"
                  description="Complete 12 check-ins to win"
                  rewardValue={300}
                  currentProgress={1000}
                  maxProgress={2000}
                  expirationText="Expires Jul 31, 2025"
                />
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Progress bar showing 50% completion.
              </p>
            </div>

            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Near Completion (90%)</p>
              <div className="bg-white rounded-lg border border-gray-200 p-8 flex justify-center">
                <ProgressCard
                  title="Summer Challenge"
                  description="Complete 12 check-ins to win"
                  rewardValue={300}
                  currentProgress={1800}
                  maxProgress={2000}
                  expirationText="Expires Jul 31, 2025"
                />
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Nearly complete, encouraging the user to finish.
              </p>
            </div>

            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Completed (100%)</p>
              <div className="bg-white rounded-lg border border-gray-200 p-8 flex justify-center">
                <ProgressCard
                  title="Summer Challenge"
                  description="Complete 12 check-ins to win"
                  rewardValue={300}
                  currentProgress={2000}
                  maxProgress={2000}
                  expirationText="Expires Jul 31, 2025"
                />
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Fully completed progress bar.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="title-large font-bold mb-6" style={{ color: 'var(--color-deep-blue)' }}>Variations</h3>

          <div className="space-y-8">
            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Different Reward Values</p>
              <div className="bg-white rounded-lg border border-gray-200 p-8 flex justify-center gap-4 flex-wrap">
                <ProgressCard
                  title="Basic Challenge"
                  description="Easy mission"
                  rewardValue={100}
                  currentProgress={50}
                  maxProgress={100}
                  expirationText="Expires soon"
                />
                <ProgressCard
                  title="Premium Challenge"
                  description="Hard mission"
                  rewardValue={1000}
                  currentProgress={300}
                  maxProgress={500}
                  expirationText="Expires Dec 31"
                />
              </div>
            </div>

            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Different Content</p>
              <div className="bg-white rounded-lg border border-gray-200 p-8 flex justify-center gap-4 flex-wrap">
                <ProgressCard
                  title="Scan Products"
                  description="Scan 50 products to earn points"
                  rewardValue={500}
                  currentProgress={25}
                  maxProgress={50}
                  ctaText="Start Scanning"
                  expirationText="Ends in 7 days"
                />
                <ProgressCard
                  title="Daily Check-ins"
                  description="Check in 30 days in a row"
                  rewardValue={750}
                  currentProgress={15}
                  maxProgress={30}
                  ctaText="Check In Now"
                  expirationText="No expiration"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h3 className="title-large font-bold mb-3" style={{ color: 'var(--color-deep-blue)' }}>Best Practices</h3>
        <ul className="space-y-2">
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Keep the title short and action-oriented to immediately communicate the challenge</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Use the description to provide context about what's required to complete the challenge</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Display the reward value prominently to motivate users</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Ensure the progress bar provides smooth visual feedback with transitions</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Always show both current and maximum progress values for clarity</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Use action-oriented CTA text that encourages engagement (e.g., "¡Acepto el reto!")</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Include expiration dates to create urgency and encourage timely participation</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Use the orange progress bar color (#FF7F00) consistently for brand recognition</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Keep the card height consistent at 280px for uniform layouts</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Celebrate completion by showing the full progress bar at 100%</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
