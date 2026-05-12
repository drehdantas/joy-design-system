import svgPaths from "./svg-tdlh2osn28";

function Frame2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <div className="flex-[1_0_0] font-['Bowlby_One:Regular',sans-serif] leading-[0] min-w-px not-italic relative text-[#090f39] text-[20px] tracking-[0.6px] whitespace-pre-wrap">
        <p className="leading-[24px] mb-0">{`Consola `}</p>
        <p className="leading-[24px]">de videojuegos</p>
      </div>
      <div className="bg-[#76e0f3] content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[12px] py-[8px] relative rounded-[32px] shrink-0" data-name="tags">
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

function ApprovalDelegation() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="approval_delegation">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="approval_delegation">
          <mask height="16" id="mask0_11_796" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_11_796)">
            <path d={svgPaths.pbc72e00} fill="var(--fill-0, #6B6F86)" id="approval_delegation_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Tag() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Tag">
      <ApprovalDelegation />
      <p className="font-['Onest:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#6b6f86] text-[12px] whitespace-nowrap">Disponibles</p>
    </div>
  );
}

function Data() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0 w-[86px]" data-name="data">
      <Tag />
      <p className="font-['Onest:Medium',sans-serif] font-medium leading-[11px] relative shrink-0 text-[#090f39] text-[10px] w-full">10</p>
    </div>
  );
}

function FeaturedSeasonalAndGifts() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="featured_seasonal_and_gifts">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="featured_seasonal_and_gifts">
          <mask height="16" id="mask0_11_792" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_11_792)">
            <path d={svgPaths.p83d7980} fill="var(--fill-0, #6B6F86)" id="featured_seasonal_and_gifts_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Tag1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Tag">
      <FeaturedSeasonalAndGifts />
      <p className="font-['Onest:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#6b6f86] text-[12px] whitespace-nowrap">¿Cómo ganar?</p>
    </div>
  );
}

function Data1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0 w-[101px]" data-name="data">
      <Tag1 />
      <p className="font-['Onest:Medium',sans-serif] font-medium leading-[11px] relative shrink-0 text-[#090f39] text-[10px] w-full">Solo ranking</p>
    </div>
  );
}

function CalendarMonth() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="calendar_month">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="calendar_month">
          <mask height="16" id="mask0_11_800" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_11_800)">
            <path d={svgPaths.p3b243500} fill="var(--fill-0, #6B6F86)" id="calendar_month_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Tag2() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Tag">
      <CalendarMonth />
      <p className="font-['Onest:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#6b6f86] text-[12px] whitespace-nowrap">Vencimiento</p>
    </div>
  );
}

function Data2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0 w-[90px]" data-name="data">
      <Tag2 />
      <p className="font-['Onest:Medium',sans-serif] font-medium leading-[11px] relative shrink-0 text-[#090f39] text-[10px] w-full">Hasta 15/06</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Data />
      <Data1 />
      <Data2 />
    </div>
  );
}

function Crown() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="crown">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="crown">
          <mask height="16" id="mask0_11_788" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_11_788)">
            <path d={svgPaths.p12bfb980} fill="var(--fill-0, #6B6F86)" id="crown_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Tag3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Tag">
      <Crown />
      <p className="font-['Onest:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#6b6f86] text-[12px] whitespace-nowrap">Quién aplica</p>
    </div>
  );
}

function Data3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center justify-center relative shrink-0" data-name="data">
      <Tag3 />
      <p className="font-['Onest:Medium',sans-serif] font-medium leading-[11px] min-w-full relative shrink-0 text-[#090f39] text-[10px] w-[min-content]">Top 10</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Data3 />
      <div className="bg-[#9d00bf] content-stretch flex gap-[8px] h-[36px] items-center justify-center p-[8px] relative rounded-[32px] shrink-0" data-name="tags">
        <p className="font-['Onest:SemiBold',sans-serif] font-semibold leading-[14px] relative shrink-0 text-[10px] text-right text-white whitespace-nowrap">Nombre de campaña</p>
      </div>
    </div>
  );
}

function Options() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="options">
      <Frame />
      <Frame1 />
    </div>
  );
}

function Description() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="description">
      <Options />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative text-[#090f39]" data-name="Title">
      <p className="font-['Onest:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[20px] w-full">Campaign Detail Header</p>
      <div className="font-['Onest:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[16px] w-full">
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">{`This component is designed to serve as the header for a campaign's detail page. It provides a quick, scannable summary of the most important information, helping users decide whether to participate without having to read a long-form description. This component is key for guiding users into a campaign and managing their expectations.`}</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <ul className="mb-0">
          <li className="list-disc ms-[24px]">
            <span className="leading-[normal]">Purpose and Functionality</span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">{`The Campaign Detail Header provides a high-level overview of an offer, focusing on the core details that matter most to a user. Its primary purpose is to clearly and concisely communicate the value proposition, eligibility, and timeline of a campaign. This component is ideal for use at the top of a campaign's detail screen, acting as a dynamic and informative entry point.`}</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <ul className="mb-0">
          <li className="list-disc ms-[24px]">
            <span className="leading-[normal]">Elements</span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">Title: A prominent title that clearly states the main reward of the campaign.</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">Key Details: The component includes a series of icons with labels that provide crucial at-a-glance information about the campaign:</p>
        <ul className="mb-0">
          <ul className="list-disc">
            <li className="mb-0 ms-[48px]">
              <span className="leading-[normal]">{`"Disponibles" (Available): Shows the quantity of the prize.`}</span>
            </li>
            <li className="mb-0 ms-[48px]">
              <span className="leading-[normal]">{`"¿Cómo ganar?" (How to win?): Explains the method of winning, such as "Solo ranking" (Ranking only).`}</span>
            </li>
            <li className="mb-0 ms-[48px]">
              <span className="leading-[normal]">{`"Vencimiento" (Expiration): Clearly displays the expiration date of the campaign.`}</span>
            </li>
            <li className="mb-0 ms-[48px]">
              <span className="leading-[normal]">{`"Quién aplica" (Who applies): Outlines the eligibility criteria, such as "Top 10."`}</span>
            </li>
            <li className="ms-[48px]">
              <span className="leading-[normal] text-[16px]">​</span>
            </li>
          </ul>
        </ul>
        <p className="leading-[normal] whitespace-pre-wrap">{`Call-to-Action (CTA): A prominent button, often with a dynamic label guides the user to the next step of the campaign's journey, which could be entering the contest or viewing more details.`}</p>
      </div>
    </div>
  );
}

export default function CardInfo() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative size-full" data-name="Card Info">
      <div className="bg-white content-stretch flex flex-col gap-[16px] items-start justify-end p-[16px] relative rounded-[16px] shrink-0 w-[343px]" data-name="card">
        <Frame2 />
        <Description />
        <div className="bg-[#1443ff] content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[24px] shrink-0 w-[311px]" data-name="Button">
          <div className="flex flex-col font-['Onest:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
            <p className="leading-[1.1]">Redimir premio</p>
          </div>
        </div>
      </div>
      <Title />
    </div>
  );
}