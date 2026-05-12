import svgPaths from "./svg-vdmznwesbs";

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center pb-[16px] relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#090f39] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Onest:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#090f39] text-[32px] w-full">Search Bar</p>
      <div className="font-['Onest:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#090f39] text-[20px] w-full">
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">The Search Bar is a crucial component that allows users to find content within the JOY app. It is a single component with two distinct visual states: normal and filled. This ensures a clear and intuitive user experience by providing immediate feedback on the interaction.</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <ul className="mb-0">
          <li className="list-disc ms-[30px]">
            <span className="leading-[normal]">Purpose and Functionality</span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">The Search Bar component provides a simple, direct entry point for users to search for campaigns, products, or other content. Its minimalist design reduces visual clutter while making it clear to the user that they can begin a search at any time.</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <ul className="mb-0">
          <li className="list-disc ms-[30px]">
            <span className="leading-[normal]">Elements and States</span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">{`Normal State: The default appearance of the search bar. The text inside the input field serves as a placeholder to guide the user (e.g., "¿Qué se te antoja hoy?"). The icons on either side are a neutral color, indicating a ready-to-use state.`}</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <p className="leading-[normal] whitespace-pre-wrap">Filled State: The appearance of the search bar when the user has entered text. The text changes to a bold, dark color, and the icons become a vibrant brand color (e.g., blue) to provide immediate visual feedback. This state signals that the user has successfully entered a search query and is ready to proceed.</p>
      </div>
    </div>
  );
}

function ArrowBack() {
  return (
    <div className="absolute left-[0.5px] size-[24px] top-0" data-name="arrow_back">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow_back">
          <mask height="24" id="mask0_7_2320" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_7_2320)">
            <path d={svgPaths.p38ded900} fill="var(--fill-0, white)" id="arrow_back_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[342px]" data-name="Container">
      <div className="flex flex-col font-['Bowlby_One:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-center text-white tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[24px]">Tu lista de antojos</p>
      </div>
      <ArrowBack />
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="search">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="search">
          <mask height="24" id="mask0_7_2312" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_7_2312)">
            <path d={svgPaths.p11fee800} fill="var(--fill-0, #CECFD7)" fillOpacity="0.980392" id="search_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Tune() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="tune">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="tune">
          <mask height="24" id="mask0_7_2316" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_7_2316)">
            <path d={svgPaths.p2715fa80} fill="var(--fill-0, #CECFD7)" fillOpacity="0.980392" id="tune_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Content">
      <Search />
      <p className="flex-[1_0_0] font-['Onest:Regular',sans-serif] font-normal leading-[normal] min-w-px relative text-[16px] text-[rgba(206,207,215,0.98)]">¿Que se te antoja hoy?</p>
      <Tune />
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-[44px] relative rounded-[999px] shrink-0 w-[343px]" data-name="Input">
      <div className="content-stretch flex gap-[8px] items-center overflow-clip px-[14px] py-[10px] relative rounded-[inherit] size-full">
        <Content />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(157,159,175,0.98)] border-solid inset-0 pointer-events-none rounded-[999px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function InputWithLabel() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
      <Input />
    </div>
  );
}

function Inputs() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[343px]" data-name="Inputs">
      <InputWithLabel />
    </div>
  );
}

function ArrowBack1() {
  return (
    <div className="absolute left-[0.5px] size-[24px] top-0" data-name="arrow_back">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow_back">
          <mask height="24" id="mask0_7_2320" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_7_2320)">
            <path d={svgPaths.p38ded900} fill="var(--fill-0, white)" id="arrow_back_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[342px]" data-name="Container">
      <div className="flex flex-col font-['Bowlby_One:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-center text-white tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[24px]">Tu lista de antojos</p>
      </div>
      <ArrowBack1 />
    </div>
  );
}

function Search1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="search">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="search">
          <mask height="24" id="mask0_7_2308" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_7_2308)">
            <path d={svgPaths.p11fee800} fill="var(--fill-0, #1443FF)" id="search_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Tune1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="tune">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="tune">
          <mask height="24" id="mask0_7_2304" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_7_2304)">
            <path d={svgPaths.p2715fa80} fill="var(--fill-0, #1443FF)" id="tune_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Content">
      <Search1 />
      <p className="flex-[1_0_0] font-['Onest:Regular',sans-serif] font-normal leading-[normal] min-w-px relative text-[#090f39] text-[16px]">¿Que se te antoja hoy?</p>
      <Tune1 />
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white h-[44px] relative rounded-[999px] shrink-0 w-[343px]" data-name="Input">
      <div className="content-stretch flex gap-[8px] items-center overflow-clip px-[14px] py-[10px] relative rounded-[inherit] size-full">
        <Content1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(157,159,175,0.98)] border-solid inset-0 pointer-events-none rounded-[999px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function InputWithLabel1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
      <Input1 />
    </div>
  );
}

function Inputs1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[343px]" data-name="Inputs">
      <InputWithLabel1 />
    </div>
  );
}

export default function Cards() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center justify-center px-[64px] py-[90px] relative size-full" data-name="Cards">
      <Header />
      <div className="content-stretch flex flex-col gap-[16px] h-[84px] items-start justify-end relative shrink-0 w-[343px]" data-name="search/Default">
        <Container />
        <Inputs />
      </div>
      <div className="content-stretch flex flex-col gap-[16px] h-[84px] items-start justify-end relative shrink-0 w-[343px]" data-name="search/Active">
        <Container1 />
        <Inputs1 />
      </div>
    </div>
  );
}