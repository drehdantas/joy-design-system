import svgPaths from "./svg-1d0r6ehmu8";

function Frame() {
  return (
    <div className="content-stretch flex gap-[15px] items-center relative shrink-0">
      <div className="h-[24px] overflow-clip relative shrink-0 w-[45px]" data-name="Joy/Logo/white">
        <div className="absolute inset-[0.01%_2.27%_-0.68%_2%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.0783 24.1623">
            <path d={svgPaths.p1951b000} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="h-[24px] overflow-clip relative shrink-0 w-[45px]" data-name="Joy/Logo/yellow">
        <div className="absolute inset-[0.01%_2.27%_-0.68%_2%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.0783 24.1623">
            <path d={svgPaths.p1951b000} fill="var(--fill-0, #ECFF40)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="h-[24px] overflow-clip relative shrink-0 w-[45px]" data-name="Joy/Logo/orange">
        <div className="absolute inset-[0.01%_2.27%_-0.68%_2%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.0783 24.1623">
            <path d={svgPaths.p1951b000} fill="var(--fill-0, #FF7F00)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="h-[24px] overflow-clip relative shrink-0 w-[45px]" data-name="Joy/Logo/teal">
        <div className="absolute inset-[0.01%_2.27%_-0.68%_2%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.0783 24.1623">
            <path d={svgPaths.p1951b000} fill="var(--fill-0, #76E0F3)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="h-[24px] overflow-clip relative shrink-0 w-[45px]" data-name="Joy/Logo/blue">
        <div className="absolute inset-[0.01%_2.27%_-0.68%_2%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.0783 24.1623">
            <path d={svgPaths.p1951b000} fill="var(--fill-0, #1443FF)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="h-[24px] overflow-clip relative shrink-0 w-[45px]" data-name="Joy/Logo/purple">
        <div className="absolute inset-[0.01%_2.27%_-0.68%_2%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.0783 24.1623">
            <path d={svgPaths.p1951b000} fill="var(--fill-0, #9D00BF)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="h-[24px] overflow-clip relative shrink-0 w-[45px]" data-name="Joy/Logo/dark">
        <div className="absolute inset-[0.01%_2.27%_-0.68%_2%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.0783 24.1623">
            <path d={svgPaths.p1951b000} fill="var(--fill-0, #090F39)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative text-[#090f39]" data-name="Title">
      <p className="font-['Onest:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[20px] w-full">Brand Logo Color Variations</p>
      <div className="font-['Onest:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[16px] w-full">
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">This component showcases the JOY brand logo in its various approved color applications. Its purpose is to define and standardize how the logo should appear when placed on different backgrounds throughout the application and communications.</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <ul className="mb-0">
          <li className="list-disc ms-[24px]">
            <span className="leading-[normal]">Purpose and Functionality</span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">The core function of this component is to ensure the logo maintains maximum visibility, legibility, and brand consistency regardless of the color environment. It demonstrates the flexibility of the logo across the entire JOY palette while strictly adhering to contrast rules.</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">{`Primary Identity: The logo is the most important element of the brand's visual identity.`}</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <p className="leading-[normal] whitespace-pre-wrap">{`Color Consistency: It confirms the specific color variations allowed for the logo itself, which are vital for maintaining the brand's look and feel across all digital and print materials.`}</p>
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