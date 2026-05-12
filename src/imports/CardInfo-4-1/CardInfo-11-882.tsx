import svgPaths from "./svg-q1r8ssl9sr";
import { imgArrowOutward } from "./svg-4yr6r";

function Tag() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[8px] relative rounded-[32px] shrink-0" data-name="Tag">
      <div className="relative shrink-0 size-[24px]" data-name="Icons">
        <div className="absolute bottom-[26.77%] left-[22.6%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5.425px_-5px] mask-size-[24px_24px] right-1/4 top-[20.83%]" style={{ maskImage: `url('${imgArrowOutward}')` }} data-name="arrow_outward">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.575 12.575">
            <path d={svgPaths.p2cc41100} fill="var(--fill-0, #1443FF)" id="arrow_outward" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Tag1() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[8px] relative rounded-[32px] shrink-0" data-name="Tag">
      <div className="relative shrink-0 size-[24px]" data-name="Icons">
        <div className="absolute bottom-[26.77%] left-[22.6%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5.425px_-5px] mask-size-[24px_24px] right-1/4 top-[20.83%]" style={{ maskImage: `url('${imgArrowOutward}')` }} data-name="arrow_outward">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.575 12.575">
            <path d={svgPaths.p2cc41100} fill="var(--fill-0, #1443FF)" id="arrow_outward" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <div className="bg-[#9d00bf] content-stretch flex flex-col gap-[8px] items-start justify-center overflow-clip p-[16px] relative rounded-[16px] shrink-0 w-[164px]" data-name="Card/purple">
        <div className="absolute flex h-[270.428px] items-center justify-center left-[-65px] top-[-200px] w-[267.515px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="flex-none rotate-[-69.12deg]">
            <div className="h-[205.859px] relative w-[210.901px]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 210.901 205.859">
                <path d={svgPaths.p4c28540} fill="var(--fill-0, #FF7F00)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
        <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Small buttons">
          <Tag />
        </div>
        <p className="font-['Bowlby_One:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] text-white tracking-[0.48px] w-[132px]">Tus Canjes y Tus Movidas</p>
      </div>
      <div className="bg-[#76e0f3] content-stretch flex flex-col gap-[8px] items-start justify-center overflow-clip p-[16px] relative rounded-[16px] shrink-0 w-[164px]" data-name="Card/teal">
        <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Small buttons">
          <Tag1 />
        </div>
        <p className="font-['Bowlby_One:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1443ff] text-[16px] tracking-[0.48px] w-[132px]">Caprichos Pendientes</p>
        <div className="absolute flex items-center justify-center left-[62.5px] size-[139.064px] top-[-50.65px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="flex-none rotate-[32.07deg]">
            <div className="relative size-[100.89px]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100.89 100.89">
                <path d={svgPaths.p2a143280} fill="var(--fill-0, #9D00BF)" id="Vector" />
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
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative text-[#090f39]" data-name="Title">
      <p className="font-['Onest:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[20px] w-full">Status Card</p>
      <div className="font-['Onest:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[16px] w-full">
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">{`The Status Card is a versatile component designed to provide users with a quick, at-a-glance overview of key information or pending actions. It's an ideal element for a user dashboard or profile section, where it can be used to highlight important updates or statuses.`}</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <ul className="mb-0">
          <li className="list-disc ms-[24px]">
            <span className="leading-[normal]">Purpose and Functionality</span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">{`This card's primary purpose is to clearly categorize and communicate a specific status or set of actions that a user needs to take. It uses a unique color combination and concise text to draw attention to important information, encouraging the user to click to view more details.`}</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <ul className="mb-0">
          <li className="list-disc ms-[24px]">
            <span className="leading-[normal]">Elements and States</span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">The Status Card is a single component that uses color to represent its state or category, making it easily scannable within a group of similar cards.</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">Icon: An icon, such as the upward arrow, indicates that the card is interactive and leads to a new view with more details.</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">{`Title: A clear, concise title categorizes the information (e.g., "Your Redemptions" or "Pending Rewards").`}</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">{`Visual Design: The card's visual design uses a combination of solid shapes and vibrant colors from the JOY brand palette. This allows the card to be visually distinct while still maintaining a cohesive brand feel.`}</p>
        <p className="leading-[normal] whitespace-pre-wrap">​</p>
      </div>
    </div>
  );
}

export default function CardInfo() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative size-full" data-name="Card Info">
      <Frame />
      <Title />
    </div>
  );
}