import svgPaths from "./svg-zhwzdofnn6";

function Group2() {
  return (
    <div className="absolute h-[240.665px] left-[8.01px] top-[52.64px] w-[185.637px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 185.637 240.665">
        <g id="Group">
          <path d={svgPaths.p13613f30} fill="var(--fill-0, #ECFF40)" id="Vector" />
          <path d={svgPaths.p26ee7500} fill="var(--fill-0, #76E0F3)" id="Vector_2" />
          <path d={svgPaths.pa584700} fill="var(--fill-0, #FF7F00)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute h-[99.884px] left-0 top-0 w-[199.999px]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 199.999 99.8838">
        <g id="Group">
          <g id="Group_2">
            <path d={svgPaths.pa699100} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p110fce80} fill="var(--fill-0, white)" id="Vector_2" />
          </g>
          <path d={svgPaths.p151f2d00} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p2c3dfb00} fill="var(--fill-0, white)" id="Vector_4" />
          <g id="_xAE_">
            <path d={svgPaths.pbd55e80} fill="var(--fill-0, white)" id="Vector_5" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Group">
      <Group2 />
      <Group3 />
    </div>
  );
}

function Layer() {
  return (
    <div className="absolute contents inset-[7.95%_3.06%_-1.66%_84.18%]" data-name="Layer_1">
      <Group1 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[7.95%_3.06%_-1.66%_84.18%]" data-name="Group">
      <Layer />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center pb-[16px] relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#090f39] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Onest:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#090f39] text-[32px] w-full">{`Our Shadow System: Elevation & Depth`}</p>
      <p className="font-['Onest:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#090f39] text-[20px] w-full">Shadows are instrumental in creating a sense of hierarchy, depth, and interactivity within the JOY app. They visually elevate elements, guiding user attention and clarifying interaction states. Our system offers a range of predefined shadow tokens to ensure consistency and a cohesive visual language.</p>
    </div>
  );
}

function MousePointer() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="mouse-pointer 1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="mouse-pointer 1">
          <path d={svgPaths.p74b140} id="Vector" stroke="var(--stroke-0, #F2994A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M13 13L17 17" id="Vector_2" stroke="var(--stroke-0, #F2994A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Header">
      <MousePointer />
      <p className="flex-[1_0_0] font-['Onest:Regular',sans-serif] font-normal leading-[normal] min-w-px relative text-[#212529] text-[14px]">UX/UI</p>
    </div>
  );
}

function Card() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#f2994a] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center justify-center p-[12px] relative size-full">
          <Header1 />
          <p className="font-['Onest:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[#595c5f] text-[14px] w-full">Consider for very minor interactive icons, selected filters, or within densely packed areas where a strong shadow would be too heavy.</p>
        </div>
      </div>
    </div>
  );
}

function ShadowSm() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start justify-center relative shrink-0 w-[1440px]" data-name="shadow-sm">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#090f39] text-[24px] w-full">Extra Small Shadow - shadow-xsm</p>
      <div className="bg-white h-[90px] rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.06)] shrink-0 w-full" data-name="swatch" />
      <p className="font-['Onest:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#595c5f] text-[16px] w-full">Used for minimal elevation, such as subtle highlights on small interactive elements, text fields, or small badges that require a hint of depth without drawing significant attention. Ideal for conveying a slight hover state or a gentle separation from the background.</p>
      <Card />
    </div>
  );
}

function MousePointer1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="mouse-pointer 1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="mouse-pointer 1">
          <path d={svgPaths.p74b140} id="Vector" stroke="var(--stroke-0, #F2994A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M13 13L17 17" id="Vector_2" stroke="var(--stroke-0, #F2994A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Header2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Header">
      <MousePointer1 />
      <p className="flex-[1_0_0] font-['Onest:Regular',sans-serif] font-normal leading-[normal] min-w-px relative text-[#212529] text-[14px]">UX/UI</p>
    </div>
  );
}

function Card1() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#f2994a] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center justify-center p-[12px] relative size-full">
          <Header2 />
          <p className="font-['Onest:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[#595c5f] text-[14px] w-full">Likely used for standard buttons, small information cards, or individual reward items.</p>
        </div>
      </div>
    </div>
  );
}

function ShadowSm1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="shadow-sm">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#090f39] text-[24px] w-full">Small Shadow - shadow-sm</p>
      <div className="bg-white h-[90px] rounded-[8px] shadow-[0px_4px_8px_-2px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.06)] shrink-0 w-full" data-name="swatch" />
      <p className="font-['Onest:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#595c5f] text-[16px] w-full">Applied to standard interactive components like primary buttons, small cards, or individual list items. It signifies an element that is actionable or contains distinct content, providing a clear but not overly prominent sense of elevation.</p>
      <Card1 />
    </div>
  );
}

function MousePointer2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="mouse-pointer 1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="mouse-pointer 1">
          <path d={svgPaths.p74b140} id="Vector" stroke="var(--stroke-0, #F2994A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M13 13L17 17" id="Vector_2" stroke="var(--stroke-0, #F2994A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Header3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Header">
      <MousePointer2 />
      <p className="flex-[1_0_0] font-['Onest:Regular',sans-serif] font-normal leading-[normal] min-w-px relative text-[#212529] text-[14px]">UX/UI</p>
    </div>
  );
}

function Card2() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#f2994a] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center justify-center p-[12px] relative size-full">
          <Header3 />
          <p className="font-['Onest:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[#595c5f] text-[14px] w-full">Could be used for feature cards, larger interactive panels, or modals that appear above the main app content.</p>
        </div>
      </div>
    </div>
  );
}

function ShadowSm2() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[1440px]" data-name="shadow-sm">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#090f39] text-[24px] w-full">Medium Shadow - shadow-md</p>
      <div className="bg-white h-[90px] rounded-[8px] shadow-[0px_12px_16px_-4px_rgba(0,0,0,0.08),0px_4px_6px_-2px_rgba(0,0,0,0.03)] shrink-0 w-full" data-name="swatch" />
      <p className="font-['Onest:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#595c5f] text-[16px] w-full">Reserved for more significant components that contain grouped content or require a stronger visual presence, such as larger cards, modals, or dropdown menus. It clearly establishes these elements as separate layers above the main content.</p>
      <Card2 />
    </div>
  );
}

function MousePointer3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="mouse-pointer 1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="mouse-pointer 1">
          <path d={svgPaths.p74b140} id="Vector" stroke="var(--stroke-0, #F2994A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M13 13L17 17" id="Vector_2" stroke="var(--stroke-0, #F2994A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Header4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Header">
      <MousePointer3 />
      <p className="flex-[1_0_0] font-['Onest:Regular',sans-serif] font-normal leading-[normal] min-w-px relative text-[#212529] text-[14px]">UX/UI</p>
    </div>
  );
}

function Card3() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#f2994a] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center justify-center p-[12px] relative size-full">
          <Header4 />
          <p className="font-['Onest:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[#595c5f] text-[14px] w-full">Suitable for full-screen modals, important prompts, or the main Floating Action Button (if present) to ensure it stands out.</p>
        </div>
      </div>
    </div>
  );
}

function ShadowSm3() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[1440px]" data-name="shadow-sm">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#090f39] text-[24px] w-full">Large Shadow - shadow-lg</p>
      <div className="bg-white h-[90px] rounded-[8px] shadow-[0px_20px_24px_-4px_rgba(0,0,0,0.08),0px_8px_8px_-4px_rgba(0,0,0,0.03)] shrink-0 w-full" data-name="swatch" />
      <p className="font-['Onest:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#595c5f] text-[16px] w-full">Used for highly interactive or critical overlay elements that demand user focus, such as large modal dialogs, important pop-ups, or floating action buttons. This shadow effectively separates the element from the underlying content, signaling its importance.</p>
      <Card3 />
    </div>
  );
}

function MousePointer4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="mouse-pointer 1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="mouse-pointer 1">
          <path d={svgPaths.p74b140} id="Vector" stroke="var(--stroke-0, #F2994A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M13 13L17 17" id="Vector_2" stroke="var(--stroke-0, #F2994A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Header5() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Header">
      <MousePointer4 />
      <p className="flex-[1_0_0] font-['Onest:Regular',sans-serif] font-normal leading-[normal] min-w-px relative text-[#212529] text-[14px]">UX/UI</p>
    </div>
  );
}

function Card4() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#f2994a] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center justify-center p-[12px] relative size-full">
          <Header5 />
          <p className="font-['Onest:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[#595c5f] text-[14px] w-full">Use very sparingly for highly critical system alerts, onboarding walkthrough overlays, or full-screen takeovers.</p>
        </div>
      </div>
    </div>
  );
}

function ShadowSm4() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start justify-center relative shrink-0 w-[1440px]" data-name="shadow-sm">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#090f39] text-[24px] w-full">Extra Large Shadow - shadow-xl</p>
      <div className="bg-white h-[90px] rounded-[8px] shadow-[0px_24px_48px_-12px_rgba(0,0,0,0.18)] shrink-0 w-full" data-name="swatch" />
      <p className="font-['Onest:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#595c5f] text-[16px] w-full">Reserved for elements with the highest z-index that absolutely require maximum visual separation and user attention, such as critical alerts, system-level dialogs, or onboarding overlays that temporarily obscure the entire interface.</p>
      <Card4 />
    </div>
  );
}

function MousePointer5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="mouse-pointer 1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="mouse-pointer 1">
          <path d={svgPaths.p74b140} id="Vector" stroke="var(--stroke-0, #F2994A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M13 13L17 17" id="Vector_2" stroke="var(--stroke-0, #F2994A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Header6() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Header">
      <MousePointer5 />
      <p className="flex-[1_0_0] font-['Onest:Regular',sans-serif] font-normal leading-[normal] min-w-px relative text-[#212529] text-[14px]">UX/UI</p>
    </div>
  );
}

function Card5() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#f2994a] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center justify-center p-[12px] relative size-full">
          <Header6 />
          <p className="font-['Onest:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[#595c5f] text-[14px] w-full">Almost exclusively for very rare, critical, or immersive full-screen experiences that demand absolute focus and separation.</p>
        </div>
      </div>
    </div>
  );
}

function ShadowSm5() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[1440px]" data-name="shadow-sm">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#090f39] text-[24px] w-full">Double Extra Large Shadow - shadow-2xl</p>
      <div className="bg-white h-[90px] rounded-[8px] shadow-[0px_32px_64px_-12px_rgba(0,0,0,0.14)] shrink-0 w-full" data-name="swatch" />
      <p className="font-['Onest:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#595c5f] text-[16px] w-full">This shadow token indicates an element is at the very top of the visual stack, such as a major system-wide notification banner that hovers above everything else, or a very large, immersive overlay. Its use should be exceptional.</p>
      <Card5 />
    </div>
  );
}

function Shadows() {
  return (
    <div className="relative shrink-0 w-full" data-name="shadows">
      <div className="content-stretch flex flex-col gap-[90px] items-start px-[64px] py-[80px] relative size-full">
        <Header />
        <ShadowSm />
        <ShadowSm1 />
        <ShadowSm2 />
        <ShadowSm3 />
        <ShadowSm4 />
        <ShadowSm5 />
      </div>
    </div>
  );
}

export default function UiKitShadows() {
  return (
    <div className="bg-[#f6f6f6] content-stretch flex flex-col items-center overflow-clip relative rounded-[20px] size-full" data-name="✅ UI Kit/Shadows">
      <div className="bg-[#1443ff] relative shadow-[0px_2px_16px_0px_rgba(107,107,120,0.1)] shrink-0 w-full" data-name="Desktop/Ui kit header">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[24px] items-start p-[48px] relative size-full">
            <div className="flex flex-col font-['Bowlby_One:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[64px] text-white whitespace-nowrap">
              <p className="leading-[normal]">Shadows</p>
            </div>
            <p className="font-['Onest:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[24px] text-white w-[1200px]">Reinforce the visual structure with precise and elegant shadows. From subtle highlights to dramatic depths, this kit offers versatile options to define hierarchy in your design. Fine-tune each shadow for a flawless visual effect.</p>
            <Group />
          </div>
        </div>
      </div>
      <Shadows />
    </div>
  );
}