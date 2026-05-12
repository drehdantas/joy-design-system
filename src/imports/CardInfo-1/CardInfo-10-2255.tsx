import svgPaths from "./svg-b0bypo1ngj";
import imgChangeImageHere from "./df427e0af811fd3226cdb77f2f184fc4f67d4201.png";
import { imgArrowOutward, imgRocketLaunch } from "./svg-4dg3b";

function Tag() {
  return (
    <div className="bg-[#1443ff] flex-[1_0_0] h-full min-w-px relative rounded-[32px]" data-name="Tag">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[8px] relative size-full">
          <div className="relative shrink-0 size-[24px]" data-name="Icons">
            <div className="absolute bottom-[26.77%] left-[22.6%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5.425px_-5px] mask-size-[24px_24px] right-1/4 top-[20.83%]" style={{ maskImage: `url('${imgArrowOutward}')` }} data-name="arrow_outward">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.575 12.575">
                <path d={svgPaths.p2cc41100} fill="var(--fill-0, white)" id="arrow_outward" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="title">
      <p className="font-['Onest:SemiBold',sans-serif] font-semibold leading-[1.1] relative shrink-0 text-[#090f39] text-[14px] w-[82px]">{`Mando de videojuegos `}</p>
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="Small buttons">
        <Tag />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="bg-white drop-shadow-[0px_8px_6.35px_rgba(156,0,191,0.1)] relative shrink-0 w-full" data-name="content">
      <div className="flex flex-col justify-end size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-end p-[12px] relative size-full">
          <Title />
          <div className="bg-[#9d00bf] content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[4px] relative rounded-[32px] shrink-0" data-name="tags">
            <p className="font-['Onest:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#ecff40] text-[10px] text-right whitespace-nowrap">Nombre de campaña</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Favorite() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="favorite">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="favorite">
          <mask height="20" id="mask0_10_1627" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_10_1627)">
            <path d={svgPaths.p55ac230} fill="var(--fill-0, white)" id="favorite_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Tag1() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative rounded-[32px]" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[32px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[6px] relative size-full">
          <Favorite />
        </div>
      </div>
    </div>
  );
}

function Tag2() {
  return (
    <div className="bg-[#1443ff] flex-[1_0_0] h-full min-w-px relative rounded-[32px]" data-name="Tag">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[8px] relative size-full">
          <div className="relative shrink-0 size-[24px]" data-name="Icons">
            <div className="absolute bottom-[26.77%] left-[22.6%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5.425px_-5px] mask-size-[24px_24px] right-1/4 top-[20.83%]" style={{ maskImage: `url('${imgArrowOutward}')` }} data-name="arrow_outward">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.575 12.575">
                <path d={svgPaths.p2cc41100} fill="var(--fill-0, white)" id="arrow_outward" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="title">
      <p className="font-['Onest:SemiBold',sans-serif] font-semibold leading-[1.1] relative shrink-0 text-[#090f39] text-[14px] w-[82px]">{`Mando de videojuegos `}</p>
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="Small buttons">
        <Tag2 />
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="bg-white drop-shadow-[0px_8px_6.35px_rgba(156,0,191,0.1)] relative shrink-0 w-full" data-name="content">
      <div className="flex flex-col justify-end size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-end p-[12px] relative size-full">
          <Title1 />
          <div className="bg-[#9d00bf] content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[4px] relative rounded-[32px] shrink-0" data-name="tags">
            <p className="font-['Onest:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#ecff40] text-[10px] text-right whitespace-nowrap">Nombre de campaña</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Lock() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.19px)] size-[40px] top-[calc(50%-0.7px)]" data-name="lock">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="lock">
          <mask height="40" id="mask0_10_1614" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="40" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="40" id="Bounding box" width="40" />
          </mask>
          <g mask="url(#mask0_10_1614)">
            <path d={svgPaths.p3a425400} fill="var(--fill-0, #1443FF)" id="lock_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconTitles() {
  return (
    <div className="bg-[#76e0f3] relative rounded-[9px] size-[56px]" data-name="Icon/Titles">
      <Lock />
    </div>
  );
}

function Coin() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="coin">
      <div className="absolute inset-[-10%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="coin">
            <path d={svgPaths.ped7fe00} fill="var(--fill-0, #1443FF)" id="Vector" />
            <g id="Group 48095703">
              <circle cx="12" cy="12" id="Ellipse 1720" r="11" stroke="var(--stroke-0, #1443FF)" strokeWidth="2" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[25px] items-center relative shrink-0">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[16px] shrink-0 w-[162px]" data-name="Card/Default">
        <div className="bg-[#ff7f00] h-[136px] shrink-0 w-full" data-name="bg" />
        <Content />
        <div className="absolute left-[12px] size-[139px] top-[9px]" data-name="Change image here">
          <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgChangeImageHere} />
        </div>
        <div className="absolute bg-[#76e0f3] content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] right-[36px] rounded-[32px] top-[8px]" data-name="tags">
          <div className="relative shrink-0 size-[20px]" data-name="Icon/Tags">
            <div className="absolute inset-[10.6%_9.98%_7.92%_8.54%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.708px_-2.12px] mask-size-[20px_20px]" style={{ maskImage: `url('${imgRocketLaunch}')` }} data-name="rocket_launch">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2965 16.2965">
                <path d={svgPaths.p2e99c280} fill="var(--fill-0, #1443FF)" id="rocket_launch" />
              </svg>
            </div>
          </div>
          <p className="font-['Onest:SemiBold',sans-serif] font-semibold leading-[14px] relative shrink-0 text-[#1443ff] text-[14px] text-right whitespace-nowrap">200</p>
        </div>
        <div className="absolute content-stretch flex items-center justify-center left-[8px] size-[32px] top-[8px]" data-name="Small buttons">
          <Tag1 />
        </div>
      </div>
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[16px] shrink-0 w-[162px]" data-name="Card/Blocked">
        <div className="bg-[#3a3f5e] h-[136px] shrink-0 w-full" data-name="bg" />
        <Content1 />
        <div className="absolute left-[12px] size-[139px] top-[9px]" data-name="Change image here">
          <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgChangeImageHere} />
        </div>
        <div className="absolute bg-[#464a60] h-[264px] left-[-20px] opacity-80 rounded-tl-[12px] rounded-tr-[12px] top-[-20px] w-[194px]" data-name="bg" />
        <button className="-translate-x-1/2 -translate-y-1/2 absolute block cursor-pointer left-1/2 size-[82px] top-[calc(50%-3.5px)]" data-name="Lock">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[calc(50%-0.04px)] size-[57.92px] top-[calc(50%-0.04px)]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "16" } as React.CSSProperties}>
            <div className="-rotate-2 flex-none">
              <IconTitles />
            </div>
          </div>
        </button>
        <div className="-translate-x-1/2 absolute bg-[#76e0f3] content-stretch flex gap-[8px] items-center justify-center left-[calc(50%+1.5px)] p-[8px] rounded-[32px] top-[150px]" data-name="Joy/Points">
          <Coin />
          <p className="font-['Onest:SemiBold',sans-serif] font-semibold leading-[1.1] relative shrink-0 text-[#1443ff] text-[14px] whitespace-nowrap">100 JOY Coins</p>
        </div>
      </div>
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative text-[#090f39]" data-name="Title">
      <p className="font-['Onest:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[20px] w-full">Reward Card</p>
      <div className="font-['Onest:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[16px] w-full">
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">This card component is designed to present a reward or exclusive campaign, with states that clearly communicate its availability to the user. Both active and locked states use the same core card structure but with different visual cues to reflect their status.</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <ul className="mb-0">
          <li className="list-disc ms-[24px]">
            <span className="leading-[normal]">Active State</span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">{`The active state is for a reward that is available and ready to be claimed or interacted with. This state shows the full-color hero image or product visual, drawing the user's attention. It features clear interactive elements, such as a "like" icon, a value indicator (e.g., a rocket icon with "200"), and an action button at the bottom. The visual design is vibrant and energetic, consistent with the JOY brand, to encourage user engagement.`}</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <ul className="mb-0">
          <li className="list-disc ms-[24px]">
            <span className="leading-[normal]">Locked State</span>
          </li>
        </ul>
        <p className="leading-[normal] whitespace-pre-wrap">{`The locked state is for a reward that is not yet available to the user. It signals that an action is required to unlock it. This state uses a darkened, desaturated version of the hero image to visually indicate that the content is inaccessible. A prominent lock icon is placed on top of the image, immediately communicating that the reward is locked. The action button is replaced with a visual indicator of the required currency or points needed to unlock it (e.g., "100 JOY Coins"). All interactive elements are disabled, and the overall appearance is muted to prevent frustration and guide the user toward the action needed to unlock the reward.`}</p>
      </div>
    </div>
  );
}

export default function CardInfo() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative size-full" data-name="Card Info">
      <Frame />
      <Title2 />
    </div>
  );
}