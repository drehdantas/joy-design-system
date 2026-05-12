import svgPaths from "./svg-uxlvnz0grz";
import { imgCheckCircle, imgRocketLaunch } from "./svg-i5bfc";

function FileCopy() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[24px_24px]" style={{ maskImage: `url('${imgCheckCircle}')` }} data-name="file_copy">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="file_copy">
          <mask height="24" id="mask0_12_515" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_12_515)">
            <path d={svgPaths.p26362000} fill="var(--fill-0, #115D21)" id="file_copy_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[24px]" data-name="Alert/icons/check">
        <div className="absolute inset-[8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-2px] mask-size-[24px_24px]" style={{ maskImage: `url('${imgCheckCircle}')` }} data-name="check_circle">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p35a15880} fill="var(--fill-0, #115D21)" id="check_circle" />
          </svg>
        </div>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="Alert/icons/alert">
        <div className="absolute inset-[8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-2px] mask-size-[24px_24px]" style={{ maskImage: `url('${imgCheckCircle}')` }} data-name="error">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p7a41b40} fill="var(--fill-0, #115D21)" id="error" />
          </svg>
        </div>
      </div>
      <div className="relative shrink-0 size-[24px]" data-name="Alert/icons/copy">
        <FileCopy />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[20px]" data-name="Icon/Tags/rocket">
        <div className="absolute inset-[10.6%_9.98%_7.92%_8.54%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.708px_-2.12px] mask-size-[20px_20px]" style={{ maskImage: `url('${imgRocketLaunch}')` }} data-name="rocket_launch">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2965 16.2965">
            <path d={svgPaths.p2e99c280} fill="var(--fill-0, #1443FF)" id="rocket_launch" />
          </svg>
        </div>
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="Icon/Tags/gift">
        <div className="-translate-y-1/2 absolute aspect-[16.66666603088379/17.5] left-[8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.667px_-0.833px] mask-size-[20px_20px] right-[8.33%] top-[calc(50%-0.42px)]" style={{ maskImage: `url('${imgRocketLaunch}')` }} data-name="featured_seasonal_and_gifts">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 17.5">
            <path d={svgPaths.p17066900} fill="var(--fill-0, #1443FF)" id="featured_seasonal_and_gifts" />
          </svg>
        </div>
      </div>
      <div className="relative shrink-0 size-[16px]" data-name="Icon/Tags/coin">
        <div className="absolute inset-[15%_35%_15%_30%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.6 11.2">
            <path d={svgPaths.p3c52c100} fill="var(--fill-0, #1443FF)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g id="Group 48095703">
              <circle cx="10" cy="10" id="Ellipse 1720" r="9" stroke="var(--stroke-0, #1443FF)" strokeWidth="2" />
            </g>
          </svg>
        </div>
      </div>
      <div className="relative shrink-0 size-[20px]" data-name="Icon/Tags/code">
        <div className="-translate-y-1/2 absolute aspect-[22/18] left-[4.17%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.833px_-2.5px] mask-size-[20px_20px] right-[4.17%] top-1/2" style={{ maskImage: `url('${imgRocketLaunch}')` }} data-name="barcode_scanner">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 15">
            <path d={svgPaths.p1b25cf00} fill="var(--fill-0, #1443FF)" id="barcode_scanner" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start justify-center relative shrink-0">
      <Frame />
      <Frame1 />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative text-[#090f39]" data-name="Title">
      <p className="font-['Onest:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[20px] w-full">{`Status & Utility Icons`}</p>
      <div className="font-['Onest:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[16px] w-full">
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">This category includes small, functional icons used throughout the JOY app to communicate status, alerts, and key concepts in a highly visual and scannable manner.</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <ul className="mb-0">
          <li className="list-disc ms-[24px]">
            <span className="leading-[normal]">Status and Alert Indicators (Top Row)</span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">These icons are primarily used to communicate the successful completion of a task, signal an alert, or reference documentation/records. They leverage the Semantic Colors palette to convey immediate meaning.</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <ul className="mb-0">
          <li className="list-disc ms-[24px]">
            <span className="leading-[normal]">Feature and Utility Tags (Bottom Row)</span>
          </li>
        </ul>
        <p className="leading-[normal] whitespace-pre-wrap">These icons function as visual tags or quick references to specific features and mechanics within the JOY app, commonly seen on cards, detail views, or in lists. They are generally colored using the Brand Colors palette (Blue 500) to maintain high visual appeal and energy.</p>
      </div>
    </div>
  );
}

export default function CardInfo() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative size-full" data-name="Card Info">
      <Frame2 />
      <Title />
    </div>
  );
}