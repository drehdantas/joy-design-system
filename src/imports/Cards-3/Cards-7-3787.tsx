import svgPaths from "./svg-lftmxzrc76";
import { imgArrowOutward } from "./svg-t2359";

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center pb-[16px] relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#090f39] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Onest:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#090f39] text-[32px] w-full">Content Section Header</p>
      <div className="font-['Onest:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#090f39] text-[20px] w-full">
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">Section Header is a fundamental organizational tool used to introduce distinct content blocks or sections within the JOY application. Its primary function is to establish visual hierarchy and guide the user toward related content or actions. It is a single component that adapts its size, prominence, and features based on the context of the content it precedes.</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <ul className="mb-0">
          <li className="list-disc ms-[30px]">
            <span className="leading-[normal]">Purpose and Functionality</span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">The Content Section Header clearly labels and separates different streams of information (e.g., Active Promos, urgent alerts, or utility sections). By varying the typography and optional elements, it dictates the visual priority of the content below it.</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <ul className="mb-0">
          <li className="list-disc ms-[30px]">
            <span className="leading-[normal]">Elements and Adaptations</span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">This component is highly flexible and defined by its ability to scale across three levels of importance:</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <ul className="mb-0">
          <ul>
            <li className="list-disc ms-[60px]">
              <span className="leading-[normal]">Standard/Utility Header:</span>
            </li>
          </ul>
        </ul>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">Typography: Uses a standard heading size and weight for clear, scannable labeling.</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">Optional Icon: Can include a Feature Icon Tag on the left to quickly categorize the section visually.</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">Call-to-Action (CTA): Includes a link and icon on the right, providing a direct path to the full list or detail view for the section.</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <ul className="mb-0">
          <ul>
            <li className="list-disc ms-[60px]">
              <span className="leading-[normal]">High-Priority/Urgency Header:</span>
            </li>
          </ul>
        </ul>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">{`Typography: Utilizes a significantly larger, bolder typeface to convey immediate urgency and command the user's attention.`}</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">Purpose: This style is reserved for critical, time-sensitive alerts or limited-quantity offers, overriding the standard hierarchy to ensure maximum visibility.</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">{`CTA: Includes a "Ver más" link to immediately direct the user to the urgent offer details.`}</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <p className="leading-[normal] whitespace-pre-wrap">​</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[4px] size-[24px] top-[4px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p28a61300} fill="var(--fill-0, #ECFF40)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Title">
      <div className="bg-[rgba(161,180,255,0.98)] relative rounded-[14px] shrink-0 size-[32px]" data-name="Icon/Titles">
        <Icon />
      </div>
      <p className="font-['Onest:SemiBold',sans-serif] font-semibold leading-[1.1] relative shrink-0 text-[#3a3f5e] text-[16px] whitespace-nowrap">Promos activas</p>
    </div>
  );
}

export default function Cards() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center justify-center px-[64px] py-[90px] relative size-full" data-name="Cards">
      <Header />
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="section header">
        <Title />
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[4px] relative rounded-[24px] shrink-0" data-name="Button">
          <div className="flex flex-col font-['Onest:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1443ff] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[1.1]">{`Ver todo `}</p>
          </div>
          <div className="relative shrink-0 size-[24px]" data-name="Icons">
            <div className="absolute bottom-[26.77%] left-[22.6%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5.425px_-5px] mask-size-[24px_24px] right-1/4 top-[20.83%]" style={{ maskImage: `url('${imgArrowOutward}')` }} data-name="arrow_outward">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.575 12.575">
                <path d={svgPaths.p2cc41100} fill="var(--fill-0, #1443FF)" id="arrow_outward" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="section header">
        <p className="font-['Onest:SemiBold',sans-serif] font-semibold leading-[1.1] relative shrink-0 text-[#090f39] text-[20px] whitespace-nowrap">Canjea con código</p>
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[4px] relative rounded-[24px] shrink-0" data-name="Button">
          <div className="flex flex-col font-['Onest:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1443ff] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[1.1]">Ver más</p>
          </div>
          <div className="relative shrink-0 size-[24px]" data-name="Icons">
            <div className="absolute bottom-[26.77%] left-[22.6%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5.425px_-5px] mask-size-[24px_24px] right-1/4 top-[20.83%]" style={{ maskImage: `url('${imgArrowOutward}')` }} data-name="arrow_outward">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.575 12.575">
                <path d={svgPaths.p2cc41100} fill="var(--fill-0, #1443FF)" id="arrow_outward" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="section header">
        <div className="font-['Bowlby_One:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#090f39] text-[20px] tracking-[0.6px] whitespace-nowrap">
          <p className="leading-[24px] mb-0">¡Apúrate antes de</p>
          <p className="leading-[24px]">qué se acaben!</p>
        </div>
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[4px] relative rounded-[24px] shrink-0" data-name="Button">
          <div className="flex flex-col font-['Onest:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1443ff] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[1.1]">Ver más</p>
          </div>
          <div className="relative shrink-0 size-[24px]" data-name="Icons">
            <div className="absolute bottom-[26.77%] left-[22.6%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5.425px_-5px] mask-size-[24px_24px] right-1/4 top-[20.83%]" style={{ maskImage: `url('${imgArrowOutward}')` }} data-name="arrow_outward">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.575 12.575">
                <path d={svgPaths.p2cc41100} fill="var(--fill-0, #1443FF)" id="arrow_outward" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}