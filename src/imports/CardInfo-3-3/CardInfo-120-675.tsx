import svgPaths from "./svg-xizj6dma5";
import { imgCheckCircle } from "./svg-6b1zd";

function Main() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0 w-[258px]" data-name="main">
      <div className="relative shrink-0 size-[24px]" data-name="Alert/icons">
        <div className="absolute inset-[8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-2px] mask-size-[24px_24px]" style={{ maskImage: `url('${imgCheckCircle}')` }} data-name="check_circle">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p35a15880} fill="var(--fill-0, #115D21)" id="check_circle" />
          </svg>
        </div>
      </div>
      <p className="font-['Onest:SemiBold',sans-serif] font-semibold leading-[1.1] relative shrink-0 text-[#115d21] text-[12px] w-[228px]">Listo. Ya estás en camino para obtener esta recompensa</p>
    </div>
  );
}

function CloseSmall() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="close_small">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="close_small">
          <mask height="24" id="mask0_120_488" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_120_488)">
            <path d={svgPaths.p308df980} fill="var(--fill-0, #115D21)" id="close_small_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Error() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="error">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="error">
          <mask height="24" id="mask0_120_482" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_120_482)">
            <path d={svgPaths.p2c69e580} fill="var(--fill-0, #115D21)" id="error_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative">
      <p className="font-['Onest:SemiBold',sans-serif] font-semibold leading-[1.1] relative shrink-0 text-[#115d21] text-[12px] w-full">Ya estás participando para ganar esta recompensa</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[344px]">
      <div className="bg-[#b9e4c3] h-[58px] relative rounded-[16px] shrink-0 w-full" data-name="Alert">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-between p-[16px] relative size-full">
            <Main />
            <CloseSmall />
          </div>
        </div>
      </div>
      <div className="bg-[#b9e4c3] relative rounded-[16px] shrink-0 w-full" data-name="alert">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[16px] relative size-full">
            <Error />
            <Frame />
          </div>
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative text-[#090f39]" data-name="Title">
      <p className="font-['Onest:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[20px] w-full">Toast Notification</p>
      <div className="font-['Onest:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[16px] w-full">
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">This is a non-intrusive alert designed to provide brief, timely, and contextual feedback to the user after they have performed an action within the JOY app.</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <ul className="mb-0">
          <li className="list-disc ms-[24px]">
            <span className="leading-[normal]">Purpose and Functionality</span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">{`The Toast Notification offers immediate confirmation or informational alerts that slide into view and automatically disappear after a short duration. Its function is to assure the user of a successful action (Success Toast) or provide important, non-critical status updates (Info Toast) without interrupting the user's flow.`}</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <ul className="mb-0">
          <li className="list-disc ms-[24px]">
            <span className="leading-[normal]">Elements and States</span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">This is a single component with two distinct visual states, leveraging the Semantic Colors palette to immediately convey meaning.</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <ul className="mb-0">
          <li className="list-disc ms-[24px]">
            <span className="leading-[normal]">General Usage Guidelines</span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">Placement: Toast notifications should appear prominently but briefly, usually fixed near the top or bottom of the screen, away from primary navigation.</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">Content: Keep the text short, concise, and direct. They should never contain critical information that requires a decision, as they disappear quickly.</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <p className="leading-[normal] whitespace-pre-wrap">System Feedback: Toasts are mandatory after successful completion of key user actions (e.g., accepting a challenge, redeeming points) to reinforce the positive gamified experience.</p>
      </div>
    </div>
  );
}

export default function CardInfo() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative size-full" data-name="Card Info">
      <Frame1 />
      <Title />
    </div>
  );
}