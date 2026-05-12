import svgPaths from "./svg-i856q364ep";
import imgBg from "./266eccbab6af9e5d4121fdeae072c5f5777ffc6e.png";
import { imgCheckBoxOutlineBlank } from "./svg-fr1t7";

function Title() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="title">
      <p className="flex-[1_0_0] font-['Onest:SemiBold',sans-serif] font-semibold leading-[1.1] min-w-px relative text-[#1443ff] text-[14px]">PepsiCo Fest</p>
    </div>
  );
}

function Tag() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[32px] shrink-0 w-full" data-name="Tag">
      <p className="flex-[1_0_0] font-['Onest:Regular',sans-serif] font-normal leading-[0] min-w-px relative text-[#090f39] text-[0px]">
        <span className="leading-[normal] text-[14px]">Haz 12 check-in hasta el 1</span>
        <span className="font-['Onest:Bold',sans-serif] font-bold leading-[normal] text-[14px]">2 de julio de 2025</span>
        <span className="leading-[normal] text-[14px]">{` a las `}</span>
        <span className="font-['Onest:Bold',sans-serif] font-bold leading-[normal] text-[14px]">11:59 p. m. CST</span>
      </p>
    </div>
  );
}

function EventInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Event Info">
      <Title />
      <Tag />
    </div>
  );
}

function Content() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-w-px relative" data-name="content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[12px] relative size-full">
          <EventInfo />
        </div>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="content-stretch flex h-[136px] items-start justify-center overflow-clip relative rounded-[16px] shrink-0 w-[343px]" data-name="Card">
      <div className="h-[136px] relative shrink-0 w-[148px]" data-name="bg">
        <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgBg} />
      </div>
      <Content />
    </div>
  );
}

function TC() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 text-[12px] whitespace-nowrap" data-name="T&C">
      <p className="font-['Onest:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#090f39]">Acepto</p>
      <p className="font-['Onest:SemiBold',sans-serif] font-semibold leading-[1.1] relative shrink-0 text-[#1443ff]">Términos y condiciones</p>
    </div>
  );
}

function TCCheckbox() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="T&C-Checkbox">
      <button className="block cursor-pointer relative shrink-0 size-[24px]" data-name="check">
        <div className="absolute inset-[12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3px_-3px] mask-size-[24px_24px]" style={{ maskImage: `url('${imgCheckBoxOutlineBlank}')` }} data-name="check_box_outline_blank">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.p31e38f40} fill="var(--fill-0, #FF7F00)" id="check_box_outline_blank" />
          </svg>
        </div>
      </button>
      <TC />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="title">
      <p className="flex-[1_0_0] font-['Onest:SemiBold',sans-serif] font-semibold leading-[1.1] min-w-px relative text-[#1443ff] text-[14px]">PepsiCo Fest</p>
    </div>
  );
}

function Tag1() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[32px] shrink-0 w-full" data-name="Tag">
      <p className="flex-[1_0_0] font-['Onest:Regular',sans-serif] font-normal leading-[0] min-w-px relative text-[#090f39] text-[0px]">
        <span className="leading-[normal] text-[14px]">Haz 12 check-in hasta el 1</span>
        <span className="font-['Onest:Bold',sans-serif] font-bold leading-[normal] text-[14px]">2 de julio de 2025</span>
        <span className="leading-[normal] text-[14px]">{` a las `}</span>
        <span className="font-['Onest:Bold',sans-serif] font-bold leading-[normal] text-[14px]">11:59 p. m. CST</span>
      </p>
    </div>
  );
}

function EventInfo1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Event Info">
      <Title1 />
      <Tag1 />
    </div>
  );
}

function Content1() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-w-px relative" data-name="content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[12px] relative size-full">
          <EventInfo1 />
        </div>
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="h-[136px] relative rounded-[16px] shrink-0 w-[343px]" data-name="Card">
      <div className="content-stretch flex items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <div className="h-[136px] relative shrink-0 w-[148px]" data-name="bg">
          <img alt="" className="absolute inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgBg} />
        </div>
        <Content1 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#1443ff] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function TC1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 text-[12px] whitespace-nowrap" data-name="T&C">
      <p className="font-['Onest:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#090f39]">Acepto</p>
      <p className="font-['Onest:SemiBold',sans-serif] font-semibold leading-[1.1] relative shrink-0 text-[#1443ff]">Términos y condiciones</p>
    </div>
  );
}

function TCCheckbox1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="T&C-Checkbox">
      <button className="block cursor-pointer relative shrink-0 size-[24px]" data-name="check">
        <div className="absolute inset-[12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3px_-3px] mask-size-[24px_24px]" style={{ maskImage: `url('${imgCheckBoxOutlineBlank}')` }} data-name="check_box">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.p37fdf00} fill="var(--fill-0, #FF7F00)" id="check_box" />
          </svg>
        </div>
      </button>
      <TC1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start justify-center relative shrink-0">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[343px]" data-name="card-select/card-T&C">
        <Card />
        <TCCheckbox />
      </div>
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[343px]" data-name="card-select/card-T&C-selected">
        <Card1 />
        <TCCheckbox1 />
      </div>
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative text-[#090f39]" data-name="Title">
      <p className="font-['Onest:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[20px] w-full">Info Card</p>
      <div className="font-['Onest:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[16px] w-full">
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">The Info Card is a component designed to present key information in a scannable format while providing a direct way for a user to acknowledge or accept the content. This card is purely informative and is not intended for selecting multiple items; rather, it’s for a singular acknowledgment or action.</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <ul className="mb-0">
          <li className="list-disc ms-[24px]">
            <span className="leading-[normal]">Purpose and Functionality</span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">{`This card is used to display important details, such as a campaign, event, or offer, and includes a single, clear acceptance point. It is ideal for situations where a user needs to quickly review and confirm they've understood specific terms or dates.`}</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <ul className="mb-0">
          <li className="list-disc ms-[24px]">
            <span className="leading-[normal]">Card States</span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">The card has two primary states that visually communicate its status to the user.</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">{`Default State: This is the card's initial appearance before any user interaction. The checkbox is empty, and the card has a neutral border, indicating that the information has been presented but not yet acknowledged.`}</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <p className="leading-[normal] whitespace-pre-wrap">{`Selected State: This state is triggered when the user checks the box. The checkbox is filled, and the card's border changes to a primary brand color (e.g., blue) to provide immediate and clear visual feedback, confirming that the user has accepted or acknowledged the information.`}</p>
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