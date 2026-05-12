import svgPaths from "./svg-5857buhtlv";
import { imgNotifications } from "./svg-3ntaj";

function Notifs() {
  return (
    <div className="absolute bottom-[41.67%] left-1/2 right-0 top-[8.33%]" data-name="notifs">
      <div className="absolute left-0 size-[12px] top-0">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <circle cx="6" cy="6" fill="var(--fill-0, #1443FF)" id="Ellipse 39058" r="6" />
        </svg>
      </div>
      <p className="-translate-x-1/2 absolute font-['Onest:SemiBold',sans-serif] font-semibold leading-[normal] left-1/2 text-[8px] text-center text-white top-[calc(50%-5px)] w-[10px]">3</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#6c6c6c] content-stretch flex items-center justify-between p-[11px] relative rounded-[8px] shrink-0 w-[88px]">
      <div className="relative shrink-0 size-[24px]" data-name="topbar/notifs/none">
        <div className="absolute inset-[8.33%_16.67%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4px_-2px] mask-size-[24px_24px]" style={{ maskImage: `url('${imgNotifications}')` }} data-name="notifications">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
            <path d={svgPaths.p30307600} fill="var(--fill-0, white)" id="notifications" />
          </svg>
        </div>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="topbar/notifs/active">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="notifications">
            <mask height="24" id="mask0_12_404" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
              <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
            </mask>
            <g mask="url(#mask0_12_404)">
              <path d={svgPaths.p14c543b2} fill="var(--fill-0, white)" id="notifications_2" />
            </g>
          </g>
        </svg>
        <Notifs />
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative text-[#090f39]" data-name="Title">
      <p className="font-['Onest:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[20px] w-full">Notification Badge</p>
      <div className="font-['Onest:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[16px] w-full">
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">Notification Badge io used to communicate the presence and quantity of new alerts or updates to the user within the JOY app. It is essential for ensuring users stay informed about new campaigns, rewards, or activity.</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <ul className="mb-0">
          <li className="list-disc ms-[24px]">
            <span className="leading-[normal]">Purpose and Functionality</span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">{`The Notification Badge provides immediate visual feedback regarding the user's unread notifications. It serves two distinct purposes: to alert the user that there is new content to view, and to quantify the volume of that new content, encouraging prompt interaction.`}</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <ul className="mb-0">
          <li className="list-disc ms-[24px]">
            <span className="leading-[normal]">Elements and States</span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">This component is a single icon with two functional states that clearly convey its status:</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <ul className="mb-0">
          <ul>
            <li className="list-disc ms-[48px]">
              <span className="leading-[normal]">Default State (No Notifications):</span>
            </li>
          </ul>
        </ul>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">Appearance: Displays the outlined bell icon without any additional elements.</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">{`Function: Indicates that the user's notification inbox is empty or that all messages have been read. This maintains a clean and non-distracting interface.`}</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <ul className="mb-0">
          <ul>
            <li className="list-disc ms-[48px]">
              <span className="leading-[normal]">Active State (New Notifications):</span>
            </li>
          </ul>
        </ul>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">Appearance: Displays the outlined bell icon paired with a circular, filled badge (typically in a vibrant brand color, like Blue 500).</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">{`Indicator: The badge contains a number (e.g., '3') that represents the exact count of unread notifications.`}</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <p className="leading-[normal] whitespace-pre-wrap">{`Function: Signals to the user that new, unread content is available. The contrasting color and numerical value are designed to draw the user's attention and prompt a click to the notifications screen.`}</p>
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