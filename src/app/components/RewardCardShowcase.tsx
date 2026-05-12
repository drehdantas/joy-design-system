import { useState } from 'react';
import svgPaths from '../../imports/CardInfo-1/svg-b0bypo1ngj';
import imgProduct from '../../imports/CardInfo-1/df427e0af811fd3226cdb77f2f184fc4f67d4201.png';
import { imgArrowOutward, imgRocketLaunch } from '../../imports/CardInfo-1/svg-4dg3b';

function FavoriteIcon({ className = "" }: { className?: string }) {
  return (
    <div className={`relative shrink-0 size-[20px] ${className}`}>
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <path d={svgPaths.p55ac230} fill="white" />
      </svg>
    </div>
  );
}

function ArrowButton({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-[#1443ff] flex items-center justify-center size-[32px] relative rounded-[32px] cursor-pointer"
    >
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
    </button>
  );
}

function FavoriteButton({ onClick, filled = false }: { onClick?: () => void; filled?: boolean }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center size-[32px] relative rounded-[32px] cursor-pointer border border-solid border-white"
    >
      <FavoriteIcon />
    </button>
  );
}

function LockIcon({ className = "" }: { className?: string }) {
  return (
    <div className={`relative size-[40px] ${className}`}>
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <path d={svgPaths.p3a425400} fill="#1443FF" />
      </svg>
    </div>
  );
}

function CoinIcon({ className = "" }: { className?: string }) {
  return (
    <div className={`relative shrink-0 size-[20px] ${className}`}>
      <div className="absolute inset-[-10%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path d={svgPaths.ped7fe00} fill="#1443FF" />
          <circle cx="12" cy="12" r="11" stroke="#1443FF" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}

interface RewardCardProps {
  title: string;
  campaignName: string;
  points: number;
  unlockCost?: number;
  locked?: boolean;
  backgroundColor?: string;
  productImage?: string;
  onAction?: () => void;
  onFavorite?: () => void;
}

function RewardCard({
  title,
  campaignName,
  points,
  unlockCost = 100,
  locked = false,
  backgroundColor = '#FF7F00',
  productImage = imgProduct,
  onAction,
  onFavorite
}: RewardCardProps) {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[16px] shrink-0 w-[162px]">
      <div
        className="h-[136px] shrink-0 w-full relative"
        style={{ backgroundColor: locked ? '#3a3f5e' : backgroundColor }}
      >
        <div className="absolute left-[12px] size-[139px] top-[9px]">
          <img
            alt={title}
            className="absolute inset-0 max-w-none object-contain pointer-events-none size-full"
            src={productImage}
          />
        </div>

        {!locked && (
          <>
            <div className="absolute bg-[#76e0f3] content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] right-[36px] rounded-[32px] top-[8px]">
              <div className="relative shrink-0 size-[20px]">
                <div
                  className="absolute inset-[10.6%_9.98%_7.92%_8.54%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.708px_-2.12px] mask-size-[20px_20px]"
                  style={{ maskImage: `url('${imgRocketLaunch}')` }}
                >
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2965 16.2965">
                    <path d={svgPaths.p2e99c280} fill="#1443FF" />
                  </svg>
                </div>
              </div>
              <p className="font-['Onest:SemiBold',sans-serif] font-semibold leading-[14px] relative shrink-0 text-[#1443ff] text-[14px] text-right whitespace-nowrap">
                {points}
              </p>
            </div>

            <div className="absolute content-stretch flex items-center justify-center left-[8px] size-[32px] top-[8px]">
              <FavoriteButton onClick={onFavorite} />
            </div>
          </>
        )}

        {locked && (
          <>
            <div className="absolute bg-[#464a60] h-[264px] left-[-20px] opacity-80 rounded-tl-[12px] rounded-tr-[12px] top-[-20px] w-[194px]" />

            <div className="absolute left-1/2 size-[82px] top-[calc(50%-3.5px)]" style={{ transform: 'translate(-50%, -50%)' }}>
              <div className="absolute flex items-center justify-center left-[calc(50%-0.04px)] size-[57.92px] top-[calc(50%-0.04px)]" style={{ transform: 'translate(-50%, -50%)' }}>
                <div style={{ transform: 'rotate(-2deg)' }}>
                  <div className="bg-[#76e0f3] relative rounded-[9px] size-[56px] flex items-center justify-center">
                    <LockIcon />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="bg-white drop-shadow-[0px_8px_6.35px_rgba(156,0,191,0.1)] relative shrink-0 w-full">
        <div className="flex flex-col justify-end size-full">
          <div className="content-stretch flex flex-col gap-[8px] items-start justify-end p-[12px] relative size-full">
            <div className="content-stretch flex items-end justify-between relative shrink-0 w-full">
              <p className="flex-[1_0_0] font-['Onest:SemiBold',sans-serif] font-semibold leading-[1.1] min-w-px relative text-[14px]" style={{ color: 'var(--color-blue-500)' }}>
                {title}
              </p>
              {!locked && (
                <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]">
                  <ArrowButton onClick={onAction} />
                </div>
              )}
            </div>

            <div className="bg-[#9d00bf] content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[4px] relative rounded-[32px] shrink-0">
              <p className="font-['Onest:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#ecff40] text-[10px] text-right whitespace-nowrap">
                {campaignName}
              </p>
            </div>
          </div>
        </div>
      </div>

      {locked && (
        <div
          className="absolute bg-[#76e0f3] content-stretch flex gap-[8px] items-center justify-center p-[8px] rounded-[32px] top-[150px]"
          style={{ left: '50%', transform: 'translateX(-50%)' }}
        >
          <CoinIcon />
          <p className="font-['Onest:SemiBold',sans-serif] font-semibold leading-[1.1] relative shrink-0 text-[#1443ff] text-[14px] whitespace-nowrap">
            {unlockCost} JOY Coins
          </p>
        </div>
      )}
    </div>
  );
}

function InteractiveDemo() {
  const [locked, setLocked] = useState(true);
  const [favoriteCount, setFavoriteCount] = useState(0);
  const [actionCount, setActionCount] = useState(0);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8 border border-blue-200 mb-16">
      <h3 className="title-large font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>Interactive Demo</h3>
      <p className="body-large mb-6" style={{ color: 'var(--color-gray-500)' }}>
        Toggle between locked and active states to see the different visual treatments.
      </p>

      <div className="flex justify-center mb-6">
        <RewardCard
          title="Mando de videojuegos"
          campaignName="Nombre de campaña"
          points={200}
          unlockCost={100}
          locked={locked}
          onAction={() => setActionCount(actionCount + 1)}
          onFavorite={() => setFavoriteCount(favoriteCount + 1)}
        />
      </div>

      <div className="bg-white rounded-lg p-4 border border-gray-200">
        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={() => setLocked(!locked)}
            className="px-4 py-2 rounded-md font-medium"
            style={{
              backgroundColor: locked ? 'var(--color-blue-500)' : 'var(--color-gray-200)',
              color: locked ? 'white' : 'var(--color-deep-blue)'
            }}
          >
            {locked ? 'Locked' : 'Active'}
          </button>
          <span className="label-medium" style={{ color: 'var(--color-gray-500)' }}>
            Click to toggle state
          </span>
        </div>

        <div className="space-y-2">
          <p className="label-large" style={{ color: 'var(--color-deep-blue)' }}>
            Favorite clicks: <span className="font-normal">{favoriteCount}</span>
          </p>
          <p className="label-large" style={{ color: 'var(--color-deep-blue)' }}>
            Action clicks: <span className="font-normal">{actionCount}</span>
          </p>
          <button
            onClick={() => {
              setFavoriteCount(0);
              setActionCount(0);
              setLocked(true);
            }}
            className="text-sm underline"
            style={{ color: 'var(--color-blue-500)' }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default function RewardCardShowcase() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h2 className="headline-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Reward Card</h2>
        <div className="title-large space-y-4" style={{ color: 'var(--color-deep-blue)' }}>
          <p>
            This card component is designed to present a reward or exclusive campaign, with states that clearly communicate its availability to the user. Both active and locked states use the same core card structure but with different visual cues to reflect their status.
          </p>

          <div>
            <p className="font-bold mb-2">Active State</p>
            <p>
              The active state is for a reward that is available and ready to be claimed or interacted with. This state shows the full-color hero image or product visual, drawing the user's attention. It features clear interactive elements, such as a "like" icon, a value indicator (e.g., a rocket icon with "200"), and an action button at the bottom. The visual design is vibrant and energetic, consistent with the JOY brand, to encourage user engagement.
            </p>
          </div>

          <div>
            <p className="font-bold mb-2">Locked State</p>
            <p>
              The locked state is for a reward that is not yet available to the user. It signals that an action is required to unlock it. This state uses a darkened, desaturated version of the hero image to visually indicate that the content is inaccessible. A prominent lock icon is placed on top of the image, immediately communicating that the reward is locked. The action button is replaced with a visual indicator of the required currency or points needed to unlock it (e.g., "100 JOY Coins"). All interactive elements are disabled, and the overall appearance is muted to prevent frustration and guide the user toward the action needed to unlock the reward.
            </p>
          </div>
        </div>
      </div>

      <InteractiveDemo />

      <div className="space-y-12 mb-16">
        <div>
          <h3 className="title-large font-bold mb-6" style={{ color: 'var(--color-deep-blue)' }}>States</h3>

          <div className="space-y-8">
            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Active State</p>
              <div className="bg-white rounded-lg border border-gray-200 p-8 flex justify-center">
                <RewardCard
                  title="Mando de videojuegos"
                  campaignName="Nombre de campaña"
                  points={200}
                  locked={false}
                />
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Active reward with vibrant colors, favorite button, points badge, and action button.
              </p>
            </div>

            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Locked State</p>
              <div className="bg-white rounded-lg border border-gray-200 p-8 flex justify-center">
                <RewardCard
                  title="Mando de videojuegos"
                  campaignName="Nombre de campaña"
                  points={200}
                  unlockCost={100}
                  locked={true}
                />
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Locked reward with darkened background, lock icon, and unlock requirement displayed.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="title-large font-bold mb-6" style={{ color: 'var(--color-deep-blue)' }}>Variations</h3>

          <div className="space-y-8">
            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Different Background Colors</p>
              <div className="bg-white rounded-lg border border-gray-200 p-8 flex justify-center gap-4 flex-wrap">
                <RewardCard
                  title="Producto A"
                  campaignName="Campaña especial"
                  points={150}
                  locked={false}
                  backgroundColor="#FF7F00"
                />
                <RewardCard
                  title="Producto B"
                  campaignName="Campaña premium"
                  points={300}
                  locked={false}
                  backgroundColor="#9D00BF"
                />
                <RewardCard
                  title="Producto C"
                  campaignName="Campaña exclusiva"
                  points={250}
                  locked={false}
                  backgroundColor="#1443FF"
                />
              </div>
            </div>

            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Different Unlock Costs</p>
              <div className="bg-white rounded-lg border border-gray-200 p-8 flex justify-center gap-4 flex-wrap">
                <RewardCard
                  title="Premio básico"
                  campaignName="Nivel 1"
                  points={100}
                  unlockCost={50}
                  locked={true}
                />
                <RewardCard
                  title="Premio medio"
                  campaignName="Nivel 2"
                  points={200}
                  unlockCost={100}
                  locked={true}
                />
                <RewardCard
                  title="Premio premium"
                  campaignName="Nivel 3"
                  points={500}
                  unlockCost={250}
                  locked={true}
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
            <span>Use vibrant background colors for active rewards to draw attention and create excitement</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Always display the lock icon prominently on locked rewards to set clear expectations</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Show the unlock cost (JOY Coins) clearly so users know what's required to access the reward</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Disable interactive elements (favorite, action buttons) in the locked state to prevent confusion</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Use high-quality product images that are recognizable even with the darkened overlay</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Display point values with the rocket icon to emphasize the reward's value</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Keep campaign names short and descriptive to fit within the compact tag space</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Maintain consistent card dimensions (162px width) for grid layouts</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
