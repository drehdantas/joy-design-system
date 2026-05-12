import svgPaths from "./svg-6cqy2o6ma7";
import { imgArrowBack } from "./svg-xzd1y";

function Tag() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[32px] shrink-0 bg-[#ecff40]" data-name="Tag">
      <div className="relative shrink-0 size-[24px]" data-name="Icons">
        <div className="absolute inset-[18.44%_16.67%_18.38%_18.44%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4.425px_-4.422px] mask-size-[24px_24px]" style={{ maskImage: `url('${imgArrowBack}')` }} data-name="arrow_back">
          <svg className="absolute block inset-0 size-full bg-[#1443ff00]" fill="none" preserveAspectRatio="none" viewBox="0 0 15.575 15.163"><path></path><path d={svgPaths.p1226db00} fill="#1443FF" id="arrow_back" /></svg>
        </div>
      </div>
    </div>
  );
}

function Favorite() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="favorite">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="favorite">
          <mask height="20" id="mask0_154_2105" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_154_2105)">
            <path d={svgPaths.p55ac230} fill="var(--fill-0, white)" id="favorite_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Tag1() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative rounded-[32px]" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[32px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[6px] relative size-full">
          <Favorite />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="Small buttons">
        <Tag1 />
      </div>
    </div>
  );
}

function Coin() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="coin">
      <div className="absolute inset-[-10%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="coin">
            <path d={svgPaths.ped7fe00} fill="var(--fill-0, #1443FF)" id="Vector" />
            <g id="Group 48095703">
              <circle cx="12" cy="12" id="Ellipse 1720" r="11" stroke="var(--stroke-0, #1443FF)" strokeWidth="2" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0">
      <Frame />
      <div className="bg-[#ecff40] content-stretch flex gap-[8px] items-center justify-center p-[8px] relative rounded-[32px] shrink-0" data-name="Joy/Points">
        <Coin />
        <p className="font-['Onest:SemiBold',sans-serif] font-semibold leading-[1.1] relative shrink-0 text-[#1443ff] text-[14px] whitespace-nowrap">100</p>
      </div>
    </div>
  );
}

function Title() {
  return (
    null
  );
}

export default function CardInfo() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative size-full" data-name="Card Info">
      <div className="content-stretch flex h-[40px] items-center justify-between relative shrin py-[0px]k-0 w-[343px] p-[16px] mx-[0px] my-[16px]" data-name="back/ranking">
        <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Small buttons">
          <Tag />
        </div>
        <Frame1 />
      </div>
      <Title />
    </div>
  );
}