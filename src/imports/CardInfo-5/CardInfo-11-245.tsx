import svgPaths from "./svg-8jhj3a2cyo";

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative">
      <p className="font-['Onest:SemiBold',sans-serif] font-semibold leading-[1.1] relative shrink-0 text-[20px] text-white w-full">Card title</p>
      <p className="font-['Onest:Light',sans-serif] font-light h-[15px] leading-[normal] relative shrink-0 text-[#efefef] text-[12px] w-full">Expiration date</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Frame />
      <div className="bg-[#ecff40] content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[12px] py-[8px] relative rounded-[32px] shrink-0" data-name="tags">
        <div className="relative shrink-0 size-[20px]" data-name="Icon/Tags">
          <div className="absolute inset-[15%_35%_15%_30%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 14">
              <path d={svgPaths.p3b440080} fill="var(--fill-0, #1443FF)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[-10%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="Group 48095703">
                <circle cx="12" cy="12" id="Ellipse 1720" r="11" stroke="var(--stroke-0, #1443FF)" strokeWidth="2" />
              </g>
            </svg>
          </div>
        </div>
        <p className="font-['Onest:SemiBold',sans-serif] font-semibold leading-[14px] relative shrink-0 text-[#1443ff] text-[14px] text-right whitespace-nowrap">300</p>
      </div>
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Actions">
      <div className="bg-white content-stretch flex h-[32px] items-center justify-center px-[24px] py-[12px] relative rounded-[24px] shrink-0" data-name="Button">
        <div className="flex flex-col font-['Onest:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1443ff] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[1.1]">¡Canjéalo ya!</p>
        </div>
      </div>
    </div>
  );
}

function CardContent() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[16px] top-[106px] w-[220px]" data-name="Card_content">
      <Frame1 />
      <Actions />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative text-[#090f39]" data-name="Title">
      <p className="font-['Onest:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[20px] w-full">Redeemable Card</p>
      <div className="font-['Onest:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[16px] w-full">
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">{`The Redeemable Card is a component that presents a reward or offer that can be redeemed. It's designed to be a clear, simple call-to-action for users who have already earned the necessary points or are eligible for a specific prize.`}</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <ul className="mb-0">
          <li className="list-disc ms-[24px]">
            <span className="leading-[normal]">Purpose and Functionality</span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">The main purpose of this card is to prompt the user to take action and redeem a reward. It is a visually appealing and straightforward component that highlights a single action, streamlining the process of claiming a prize. This card is perfect for loyalty program dashboards and reward sections.</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <ul className="mb-0">
          <li className="list-disc ms-[24px]">
            <span className="leading-[normal]">Elements</span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">Card Title: A prominent title that quickly communicates the name of the reward.</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">Expiration Date: A text element that displays the expiration date, creating a sense of urgency for the user to redeem the reward before it expires.</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">Points Indicator: A visual element that shows the value of the reward in points (e.g., 300).</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">Call to Action (CTA): A button with an action-oriented label like ¡Canjéalo ya! (Redeem it now!) that serves as the primary way for users to claim the reward.</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <p className="leading-[normal] whitespace-pre-wrap">Visual Design: The card uses vibrant colors from the JOY brand palette to be eye-catching and appealing, reinforcing the positive feeling of earning a reward.</p>
      </div>
    </div>
  );
}

export default function CardInfo() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative size-full" data-name="Card Info">
      <div className="h-[231px] relative shrink-0 w-[252px]" data-name="smallcard/info">
        <div className="absolute h-[231px] left-0 top-0 w-[252px]">
          <div className="absolute inset-[0.6%_-4.76%_-10.39%_-4.76%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 276 253.613">
              <g filter="url(#filter0_dd_11_284)" id="Rectangle 161124316">
                <path d={svgPaths.p1b90ab80} fill="#9D00BF" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="253.613" id="filter0_dd_11_284" width="276" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feMorphology in="SourceAlpha" operator="erode" radius="2" result="effect1_dropShadow_11_284" />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="3" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_11_284" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feMorphology in="SourceAlpha" operator="erode" radius="4" result="effect2_dropShadow_11_284" />
                  <feOffset dy="12" />
                  <feGaussianBlur stdDeviation="8" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
                  <feBlend in2="effect1_dropShadow_11_284" mode="normal" result="effect2_dropShadow_11_284" />
                  <feBlend in="SourceGraphic" in2="effect2_dropShadow_11_284" mode="normal" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <CardContent />
      </div>
      <Title />
    </div>
  );
}