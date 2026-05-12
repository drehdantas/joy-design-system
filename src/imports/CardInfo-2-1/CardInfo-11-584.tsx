import svgPaths from "./svg-qfarbdu8ck";

function Group() {
  return (
    <div className="relative shrink-0 size-[46px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
        <g id="Group 48095702">
          <g id="Group 48095698">
            <circle cx="23" cy="23" fill="var(--fill-0, #1443FF)" id="Ellipse 1717" r="23" />
          </g>
          <g id="Group 48095699">
            <path d={svgPaths.p3bccda80} fill="var(--fill-0, white)" id="Vector 1 (Stroke)" />
            <path d={svgPaths.p3cf7a300} fill="var(--fill-0, white)" id="Vector 2 (Stroke)" />
          </g>
          <path d={svgPaths.p3741e800} fill="var(--fill-0, white)" id="Vector 2 (Stroke)_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative">
      <p className="font-['Bowlby_One:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#1443ff] text-[20px] tracking-[0.6px] w-full">Saldo actual</p>
      <p className="font-['Onest:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#090f39] text-[14px] w-full">¡Juega y gana para seguir creciendo!</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Group />
      <Frame1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center px-[8px] py-[3px] relative rounded-[64px] shrink-0 w-[203px]">
      <p className="font-['Onest:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[10px] text-white whitespace-nowrap">
        <span className="leading-[11px]">20% d</span>
        <span className="leading-[11px]">{`e `}</span>
        <span className="leading-[11px] text-[#1443ff]">tu meta más cercana</span>
      </p>
    </div>
  );
}

function Coin() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="coin">
      <div className="absolute inset-[-10%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="coin">
            <path d={svgPaths.ped7fe00} fill="var(--fill-0, white)" id="Vector" />
            <g id="Group 48095703">
              <circle cx="12" cy="12" id="Ellipse 1720" r="11" stroke="var(--stroke-0, white)" strokeWidth="2" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white relative rounded-[54px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[16px] relative size-full">
          <div className="absolute bg-[#ff7f00] h-[36px] left-0 rounded-[64px] top-0 w-[60px]" />
          <Frame3 />
          <div className="bg-[#9d00bf] content-stretch flex gap-[8px] items-center justify-center p-[8px] relative rounded-[32px] shrink-0" data-name="Joy/Points">
            <Coin />
            <p className="font-['Onest:SemiBold',sans-serif] font-semibold leading-[1.1] relative shrink-0 text-[14px] text-white whitespace-nowrap">100</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Actions">
      <div className="bg-[#1443ff] content-stretch flex h-[40px] items-center justify-center px-[24px] py-[12px] relative rounded-[24px] shrink-0 w-[311px]" data-name="Button">
        <div className="flex flex-col font-['Onest:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
          <p className="leading-[1.1]">Ver catálogo de recompensas</p>
        </div>
      </div>
      <div className="h-[40px] relative rounded-[24px] shrink-0 w-full" data-name="Button">
        <div aria-hidden="true" className="absolute border border-[#1443ff] border-solid inset-0 pointer-events-none rounded-[24px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[24px] py-[12px] relative size-full">
            <div className="flex flex-col font-['Onest:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1443ff] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[1.1]">Ver catálogo de recompensas</p>
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
      <p className="font-['Onest:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[20px] w-full">Account Balance Card</p>
      <div className="font-['Onest:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[16px] w-full">
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">The Account Balance Card is a key component designed to give users a quick, high-level overview of their current points and progress within the JOY loyalty program. Its primary function is to motivate users by visually displaying their achievements and encouraging them to continue playing and earning.</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <ul className="mb-0">
          <li className="list-disc ms-[24px]">
            <span className="leading-[normal]">Purpose and Functionality</span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">{`This card's main purpose is to be the central point of a user's loyalty dashboard. It acts as a concise progress tracker, showing the user their current standing and what's needed to reach their next goal. It's a highly engaging component that transforms a simple number into a compelling call to action.`}</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <ul className="mb-0">
          <li className="list-disc ms-[24px]">
            <span className="leading-[normal]">Elements</span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">{`Header: The card's header is designed to be welcoming and informative, featuring a happy icon and a title like "Saldo actual" (Current balance), paired with a motivational phrase like "¡Juega y gana para seguir creciendo!" (Play and win to keep growing!).`}</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">{`Progress Indicator: A progress bar visually represents the user's progress toward their next milestone. A percentage (e.g., "20% de tu meta más cercana") provides a clear, numerical value of their advancement.`}</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">{`Points Display: A prominent icon and number (e.g., "100") show the user's total accumulated points, making their success immediately visible.`}</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <p className="leading-[normal] whitespace-pre-wrap">{`Call-to-Action (CTA) Buttons: Two  buttons at the bottom of the card, guide the user to the next logical step: exploring and redeeming their hard-earned rewards.`}</p>
      </div>
    </div>
  );
}

export default function CardInfo() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative size-full" data-name="Card Info">
      <div className="flex h-[261.818px] items-center justify-center relative shrink-0 w-[351.516px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "152" } as React.CSSProperties}>
        <div className="-rotate-2 flex-none">
          <div className="bg-[#ecff40] content-stretch flex flex-col gap-[16px] items-start justify-end pb-[24px] pt-[16px] px-[16px] relative rounded-[16px] w-[343px]" data-name="status">
            <Frame />
            <Frame2 />
            <Actions />
          </div>
        </div>
      </div>
      <Title />
    </div>
  );
}