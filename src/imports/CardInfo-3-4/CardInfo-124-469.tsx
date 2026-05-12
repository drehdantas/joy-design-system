import svgPaths from "./svg-i1c2e7i853";
import { imgCheckBoxOutlineBlank } from "./svg-jzkxl";

function Frame1() {
  return (
    <div className="content-stretch cursor-pointer flex gap-[16px] items-center p-[16px] relative shrink-0">
      <button className="block relative shrink-0 size-[24px]" data-name="check">
        <div className="absolute inset-[12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3px_-3px] mask-size-[24px_24px]" style={{ maskImage: `url('${imgCheckBoxOutlineBlank}')` }} data-name="check_box_outline_blank">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.p31e38f40} fill="var(--fill-0, #FF7F00)" id="check_box_outline_blank" />
          </svg>
        </div>
      </button>
      <button className="block relative shrink-0 size-[24px]" data-name="check">
        <div className="absolute inset-[12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3px_-3px] mask-size-[24px_24px]" style={{ maskImage: `url('${imgCheckBoxOutlineBlank}')` }} data-name="check_box">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.p37fdf00} fill="var(--fill-0, #FF7F00)" id="check_box" />
          </svg>
        </div>
      </button>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center p-[16px] relative shrink-0">
      <div className="relative shrink-0 size-[24px]" data-name="Radio button">
        <div className="absolute inset-[8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-2px] mask-size-[24px_24px]" style={{ maskImage: `url('${imgCheckBoxOutlineBlank}')` }} data-name="radio_button_unchecked">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p208acf00} fill="var(--fill-0, #4369FF)" id="radio_button_unchecked" />
          </svg>
        </div>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="Radio button">
        <div className="absolute inset-[8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-2px] mask-size-[24px_24px]" style={{ maskImage: `url('${imgCheckBoxOutlineBlank}')` }} data-name="radio_button_checked">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p22f8a570} fill="var(--fill-0, #4369FF)" id="radio_button_checked" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative text-[#090f39]" data-name="Title">
      <p className="font-['Onest:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[20px] w-full">{`Checkbox & Radio Button`}</p>
      <div className="font-['Onest:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[16px] w-full">
        <ul className="mb-0">
          <li className="list-disc ms-[24px]">
            <span className="leading-[normal]">Checkbox Component</span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">The Checkbox is used for making selections where the user can choose zero, one, or multiple items from a list of options.</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">Function: It represents a boolean choice (on or off, yes or no) for individual items, enabling users to select multiple options concurrently or accept terms and conditions.</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">Elements and States:</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">Unselected State (Square Outline): A hollow square outline indicates the default state before user interaction.</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">Selected State (Filled Square with Checkmark): A filled square, often utilizing a vibrant Brand Color (like Orange), with a contrasting checkmark confirms that the option has been actively selected or acknowledged.</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <ul className="mb-0">
          <li className="list-disc ms-[24px]">
            <span className="leading-[normal]">Radio Button Component</span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">The Radio Button is used when the user must select only one option from a mutually exclusive list.</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">Function: It enforces a single choice among a group of options, guiding the user to select one definitive path or setting.</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">Elements and States:</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">Unselected State (Circle Outline): A hollow circle outline indicates that the option is available but not currently chosen.</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">{`Selected State (Filled Circle): A filled, smaller circle inside the outline, utilizing a primary Brand Color (like Joy Blue), confirms that this single option is the user's active choice.`}</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <ul className="mb-0">
          <li className="list-disc ms-[24px]">
            <span className="leading-[normal]">Usage Guidelines</span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">Contextual Choice: Use Checkboxes when users can select multiple choices or when the input is an optional confirmation (e.g., subscribing to a newsletter). Use Radio Buttons when users must select only one option (e.g., choosing a single shipping method).</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">Always Label: Both components must always be paired with a clear, concise text label that explains the option being selected for optimal clarity and accessibility.</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <p className="leading-[normal] whitespace-pre-wrap">Accessibility: Ensure a generous touch target size (minimum 44x44px) is maintained around both the icon and the label to facilitate easy interaction.</p>
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