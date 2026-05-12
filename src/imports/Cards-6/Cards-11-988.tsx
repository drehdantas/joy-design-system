import svgPaths from "./svg-29kqb7jjff";
import { imgArrowOutward } from "./svg-gcbzu";

function LocationIcon() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[29.952px] left-[calc(50%-0.06px)] top-1/2 w-[23.962px]" data-name="Location Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.962 29.9525">
        <g id="Location Icon">
          <path d={svgPaths.p89fad00} fill="var(--fill-0, white)" id="location_on" />
          <g clipPath="url(#clip0_11_1123)" id="Modo_de_aislamiento">
            <path d={svgPaths.pa10d600} fill="var(--fill-0, #1443FF)" id="Vector" />
            <path d={svgPaths.p1123a380} fill="var(--fill-0, #1443FF)" id="Vector_2" />
            <path d={svgPaths.p3d1eb700} fill="var(--fill-0, #1443FF)" id="Vector_3" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_11_1123">
            <rect fill="white" height="10.7258" transform="translate(4.28134 8.06039)" width="15.5915" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function InnerIconContainer() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.5px)] size-[37px] top-[calc(50%+0.5px)]" data-name="Inner Icon Container">
      <LocationIcon />
    </div>
  );
}

function ScanCardIcon() {
  return (
    <div className="bg-[#1443ff] overflow-clip relative rounded-[8px] shrink-0 size-[56px]" data-name="Scan Card Icon">
      <InnerIconContainer />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[38px] items-center justify-between min-w-px relative" data-name="title">
      <p className="flex-[1_0_0] font-['Onest:SemiBold',sans-serif] font-semibold leading-[1.1] min-w-px relative text-[#090f39] text-[20px]">Abarrotes “Lucy”</p>
    </div>
  );
}

function IconContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-end relative shrink-0 w-full" data-name="Icon Container">
      <ScanCardIcon />
      <Title />
    </div>
  );
}

function TrailLengthShort() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="trail_length_short">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="trail_length_short">
          <mask height="24" id="mask0_11_1134" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_11_1134)">
            <path d={svgPaths.pd49d6c0} fill="var(--fill-0, #9D00BF)" id="trail_length_short_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function DistanceContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Distance Container">
      <TrailLengthShort />
      <p className="font-['Onest:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[#9d00bf] text-[14px] whitespace-nowrap">A 2.6 km de distancia</p>
    </div>
  );
}

function AddressContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Address Container">
      <p className="font-['Onest:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#090f39] text-[16px] w-[311px]">59168 Dickens Garden, East Vergie 82335-5797</p>
      <DistanceContainer />
    </div>
  );
}

function Content() {
  return (
    <div className="bg-white h-[274px] relative shrink-0 w-full" data-name="content">
      <div className="flex flex-col justify-end size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-end pb-[16px] pt-[8px] px-[16px] relative size-full">
          <IconContainer />
          <AddressContainer />
          <div className="bg-[#1443ff] relative rounded-[24px] shrink-0 w-full" data-name="Button">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[12px] relative size-full">
                <div className="flex flex-col font-['Onest:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
                  <p className="leading-[1.1]">Ver detalle</p>
                </div>
                <div className="relative shrink-0 size-[24px]" data-name="Icons">
                  <div className="absolute bottom-[26.77%] left-[22.6%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5.425px_-5px] mask-size-[24px_24px] right-1/4 top-[20.83%]" style={{ maskImage: `url('${imgArrowOutward}')` }} data-name="arrow_outward">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.575 12.575">
                      <path d={svgPaths.p2cc41100} fill="var(--fill-0, white)" id="arrow_outward" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-[24px] shrink-0 w-full" data-name="Button">
            <div aria-hidden="true" className="absolute border border-[#1443ff] border-solid inset-0 pointer-events-none rounded-[24px]" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[24px] py-[12px] relative size-full">
                <div className="flex flex-col font-['Onest:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1443ff] text-[16px] text-center whitespace-nowrap">
                  <p className="leading-[1.1]">¿Cómo llegar?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LocationIcon1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[29.952px] left-[calc(50%-0.06px)] top-1/2 w-[23.962px]" data-name="Location Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.962 29.9525">
        <g id="Location Icon">
          <path d={svgPaths.p89fad00} fill="var(--fill-0, white)" id="location_on" />
          <g clipPath="url(#clip0_11_1123)" id="Modo_de_aislamiento">
            <path d={svgPaths.pa10d600} fill="var(--fill-0, #1443FF)" id="Vector" />
            <path d={svgPaths.p1123a380} fill="var(--fill-0, #1443FF)" id="Vector_2" />
            <path d={svgPaths.p3d1eb700} fill="var(--fill-0, #1443FF)" id="Vector_3" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_11_1123">
            <rect fill="white" height="10.7258" transform="translate(4.28134 8.06039)" width="15.5915" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function InnerIconContainer1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.5px)] size-[37px] top-[calc(50%+0.5px)]" data-name="Inner Icon Container">
      <LocationIcon1 />
    </div>
  );
}

function ScanCardIcon1() {
  return (
    <div className="bg-[#1443ff] overflow-clip relative rounded-[8px] shrink-0 size-[56px]" data-name="Scan Card Icon">
      <InnerIconContainer1 />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[38px] items-center justify-between min-w-px relative" data-name="title">
      <p className="flex-[1_0_0] font-['Onest:SemiBold',sans-serif] font-semibold leading-[1.1] min-w-px relative text-[#090f39] text-[20px]">Abarrotes “Lucy”</p>
    </div>
  );
}

function IconContainer1() {
  return (
    <div className="content-stretch flex gap-[8px] items-end relative shrink-0 w-full" data-name="Icon Container">
      <ScanCardIcon1 />
      <Title1 />
    </div>
  );
}

function TrailLengthShort1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="trail_length_short">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="trail_length_short">
          <mask height="24" id="mask0_11_1134" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_11_1134)">
            <path d={svgPaths.pd49d6c0} fill="var(--fill-0, #9D00BF)" id="trail_length_short_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function DistanceContainer1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Distance Container">
      <TrailLengthShort1 />
      <p className="font-['Onest:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[#9d00bf] text-[14px] whitespace-nowrap">A 2.6 km de distancia</p>
    </div>
  );
}

function AddressContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Address Container">
      <p className="font-['Onest:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#090f39] text-[16px] w-[311px]">59168 Dickens Garden, East Vergie 82335-5797</p>
      <DistanceContainer1 />
    </div>
  );
}

function Content1() {
  return (
    <div className="bg-white h-[274px] relative shrink-0 w-full" data-name="content">
      <div className="flex flex-col justify-end size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-end pb-[16px] pt-[8px] px-[16px] relative size-full">
          <IconContainer1 />
          <AddressContainer1 />
          <div className="bg-[#1443ff] relative rounded-[24px] shrink-0 w-full" data-name="Button">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[12px] relative size-full">
                <div className="flex flex-col font-['Onest:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
                  <p className="leading-[1.1]">Ver detalle</p>
                </div>
                <div className="relative shrink-0 size-[24px]" data-name="Icons">
                  <div className="absolute bottom-[26.77%] left-[22.6%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5.425px_-5px] mask-size-[24px_24px] right-1/4 top-[20.83%]" style={{ maskImage: `url('${imgArrowOutward}')` }} data-name="arrow_outward">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.575 12.575">
                      <path d={svgPaths.p2cc41100} fill="var(--fill-0, white)" id="arrow_outward" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-[24px] shrink-0 w-full" data-name="Button">
            <div aria-hidden="true" className="absolute border border-[#1443ff] border-solid inset-0 pointer-events-none rounded-[24px]" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[24px] py-[12px] relative size-full">
                <div className="flex flex-col font-['Onest:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1443ff] text-[16px] text-center whitespace-nowrap">
                  <p className="leading-[1.1]">¿Cómo llegar?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LocationIcon2() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[29.952px] left-[calc(50%-0.06px)] top-1/2 w-[23.962px]" data-name="Location Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.962 29.9525">
        <g id="Location Icon">
          <path d={svgPaths.p89fad00} fill="var(--fill-0, white)" id="location_on" />
          <g clipPath="url(#clip0_11_1123)" id="Modo_de_aislamiento">
            <path d={svgPaths.pa10d600} fill="var(--fill-0, #1443FF)" id="Vector" />
            <path d={svgPaths.p1123a380} fill="var(--fill-0, #1443FF)" id="Vector_2" />
            <path d={svgPaths.p3d1eb700} fill="var(--fill-0, #1443FF)" id="Vector_3" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_11_1123">
            <rect fill="white" height="10.7258" transform="translate(4.28134 8.06039)" width="15.5915" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function InnerIconContainer2() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.5px)] size-[37px] top-[calc(50%+0.5px)]" data-name="Inner Icon Container">
      <LocationIcon2 />
    </div>
  );
}

function ScanCardIcon2() {
  return (
    <div className="bg-[#1443ff] overflow-clip relative rounded-[8px] shrink-0 size-[56px]" data-name="Scan Card Icon">
      <InnerIconContainer2 />
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[38px] items-center justify-between min-w-px relative" data-name="title">
      <p className="flex-[1_0_0] font-['Onest:SemiBold',sans-serif] font-semibold leading-[1.1] min-w-px relative text-[#090f39] text-[20px]">Abarrotes “Lucy”</p>
    </div>
  );
}

function IconContainer2() {
  return (
    <div className="content-stretch flex gap-[8px] items-end relative shrink-0 w-full" data-name="Icon Container">
      <ScanCardIcon2 />
      <Title2 />
    </div>
  );
}

function TrailLengthShort2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="trail_length_short">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="trail_length_short">
          <mask height="24" id="mask0_11_1134" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_11_1134)">
            <path d={svgPaths.pd49d6c0} fill="var(--fill-0, #9D00BF)" id="trail_length_short_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function DistanceContainer2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Distance Container">
      <TrailLengthShort2 />
      <p className="font-['Onest:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[#9d00bf] text-[14px] whitespace-nowrap">A 2.6 km de distancia</p>
    </div>
  );
}

function AddressContainer2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Address Container">
      <p className="font-['Onest:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#090f39] text-[16px] w-[311px]">59168 Dickens Garden, East Vergie 82335-5797</p>
      <DistanceContainer2 />
    </div>
  );
}

function Content2() {
  return (
    <div className="bg-white h-[274px] relative shrink-0 w-full" data-name="content">
      <div className="flex flex-col justify-end size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-end pb-[16px] pt-[8px] px-[16px] relative size-full">
          <IconContainer2 />
          <AddressContainer2 />
          <div className="bg-[#1443ff] relative rounded-[24px] shrink-0 w-full" data-name="Button">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[12px] relative size-full">
                <div className="flex flex-col font-['Onest:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
                  <p className="leading-[1.1]">Ver detalle</p>
                </div>
                <div className="relative shrink-0 size-[24px]" data-name="Icons">
                  <div className="absolute bottom-[26.77%] left-[22.6%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5.425px_-5px] mask-size-[24px_24px] right-1/4 top-[20.83%]" style={{ maskImage: `url('${imgArrowOutward}')` }} data-name="arrow_outward">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.575 12.575">
                      <path d={svgPaths.p2cc41100} fill="var(--fill-0, white)" id="arrow_outward" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-[24px] shrink-0 w-full" data-name="Button">
            <div aria-hidden="true" className="absolute border border-[#1443ff] border-solid inset-0 pointer-events-none rounded-[24px]" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[24px] py-[12px] relative size-full">
                <div className="flex flex-col font-['Onest:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1443ff] text-[16px] text-center whitespace-nowrap">
                  <p className="leading-[1.1]">¿Cómo llegar?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LocationIcon3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[29.952px] left-[calc(50%-0.06px)] top-1/2 w-[23.962px]" data-name="Location Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.962 29.9525">
        <g id="Location Icon">
          <path d={svgPaths.p89fad00} fill="var(--fill-0, white)" id="location_on" />
          <g clipPath="url(#clip0_11_1123)" id="Modo_de_aislamiento">
            <path d={svgPaths.pa10d600} fill="var(--fill-0, #1443FF)" id="Vector" />
            <path d={svgPaths.p1123a380} fill="var(--fill-0, #1443FF)" id="Vector_2" />
            <path d={svgPaths.p3d1eb700} fill="var(--fill-0, #1443FF)" id="Vector_3" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_11_1123">
            <rect fill="white" height="10.7258" transform="translate(4.28134 8.06039)" width="15.5915" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function InnerIconContainer3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.5px)] size-[37px] top-[calc(50%+0.5px)]" data-name="Inner Icon Container">
      <LocationIcon3 />
    </div>
  );
}

function ScanCardIcon3() {
  return (
    <div className="bg-[#1443ff] overflow-clip relative rounded-[8px] shrink-0 size-[56px]" data-name="Scan Card Icon">
      <InnerIconContainer3 />
    </div>
  );
}

function Title3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[38px] items-center justify-between min-w-px relative" data-name="title">
      <p className="flex-[1_0_0] font-['Onest:SemiBold',sans-serif] font-semibold leading-[1.1] min-w-px relative text-[#090f39] text-[20px]">Abarrotes “Lucy”</p>
    </div>
  );
}

function IconContainer3() {
  return (
    <div className="content-stretch flex gap-[8px] items-end relative shrink-0 w-full" data-name="Icon Container">
      <ScanCardIcon3 />
      <Title3 />
    </div>
  );
}

function TrailLengthShort3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="trail_length_short">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="trail_length_short">
          <mask height="24" id="mask0_11_1134" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_11_1134)">
            <path d={svgPaths.pd49d6c0} fill="var(--fill-0, #9D00BF)" id="trail_length_short_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function DistanceContainer3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Distance Container">
      <TrailLengthShort3 />
      <p className="font-['Onest:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[#9d00bf] text-[14px] whitespace-nowrap">A 2.6 km de distancia</p>
    </div>
  );
}

function AddressContainer3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Address Container">
      <p className="font-['Onest:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#090f39] text-[16px] w-[311px]">59168 Dickens Garden, East Vergie 82335-5797</p>
      <DistanceContainer3 />
    </div>
  );
}

function Content3() {
  return (
    <div className="bg-white h-[274px] relative shrink-0 w-full" data-name="content">
      <div className="flex flex-col justify-end size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-end pb-[16px] pt-[8px] px-[16px] relative size-full">
          <IconContainer3 />
          <AddressContainer3 />
          <div className="bg-[#1443ff] relative rounded-[24px] shrink-0 w-full" data-name="Button">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[12px] relative size-full">
                <div className="flex flex-col font-['Onest:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
                  <p className="leading-[1.1]">Ver detalle</p>
                </div>
                <div className="relative shrink-0 size-[24px]" data-name="Icons">
                  <div className="absolute bottom-[26.77%] left-[22.6%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5.425px_-5px] mask-size-[24px_24px] right-1/4 top-[20.83%]" style={{ maskImage: `url('${imgArrowOutward}')` }} data-name="arrow_outward">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.575 12.575">
                      <path d={svgPaths.p2cc41100} fill="var(--fill-0, white)" id="arrow_outward" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-[24px] shrink-0 w-full" data-name="Button">
            <div aria-hidden="true" className="absolute border border-[#1443ff] border-solid inset-0 pointer-events-none rounded-[24px]" />
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[24px] py-[12px] relative size-full">
                <div className="flex flex-col font-['Onest:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1443ff] text-[16px] text-center whitespace-nowrap">
                  <p className="leading-[1.1]">¿Cómo llegar?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 text-[#090f39] text-center w-full">
      <p className="font-['Onest:Bold',sans-serif] font-bold leading-[normal] min-w-full relative shrink-0 text-[24px] w-[min-content]">Abarrotes “Lucy”</p>
      <div className="font-['Onest:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[16px] w-[269px] whitespace-pre-wrap">
        <p className="leading-[1.4] mb-0">{`Belisario Dominguez 608 Col `}</p>
        <p className="leading-[1.4]">{`Nápoles, CDMX `}</p>
      </div>
    </div>
  );
}

function TrailLengthShort4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="trail_length_short">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="trail_length_short">
          <mask height="24" id="mask0_11_1134" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_11_1134)">
            <path d={svgPaths.pd49d6c0} fill="var(--fill-0, #9D00BF)" id="trail_length_short_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 w-full">
      <TrailLengthShort4 />
      <p className="font-['Onest:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#090f39] text-[16px] text-center whitespace-nowrap">2 min (0.1 Km)</p>
    </div>
  );
}

function Top() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-center overflow-clip px-[24px] py-[16px] relative rounded-[16px] shrink-0" data-name="Top">
      <div className="absolute flex h-[282.189px] items-center justify-center left-[-118px] top-[-113px] w-[284.163px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[-151.07deg]">
          <div className="h-[205.859px] relative w-[210.901px]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 210.901 205.859">
              <path d={svgPaths.p4c28540} fill="var(--fill-0, #FF7F00)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-[#76e0f3] content-stretch flex gap-[8px] items-center justify-center p-[8px] relative rounded-[32px] shrink-0" data-name="Joy/Points">
        <Coin />
        <p className="font-['Onest:SemiBold',sans-serif] font-semibold leading-[1.1] relative shrink-0 text-[#1443ff] text-[14px] whitespace-nowrap">Tienda recomendada</p>
      </div>
      <Frame1 />
      <Frame />
      <div className="absolute h-[136px] left-[232px] top-[130px] w-[135px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 135 136">
          <path d={svgPaths.p31f2d480} fill="var(--fill-0, #B133CC)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

export default function Cards() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shadow-[0px_12px_16px_0px_rgba(0,0,0,0.08),0px_4px_6px_0px_rgba(0,0,0,0.03)] size-full" data-name="cards">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[16px] shrink-0 w-[343px]" data-name="Card-distancia">
        <div className="bg-[#ecff40] h-[36px] shrink-0 w-full" data-name="bg" />
        <Content />
      </div>
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[16px] shrink-0 w-[343px]" data-name="Card-distancia">
        <div className="bg-[#ff7f00] h-[36px] shrink-0 w-full" data-name="bg" />
        <Content1 />
      </div>
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[16px] shrink-0 w-[343px]" data-name="Card-distancia">
        <div className="bg-[#76e0f3] h-[36px] shrink-0 w-full" data-name="bg" />
        <Content2 />
      </div>
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[16px] shrink-0 w-[343px]" data-name="Card-distancia">
        <div className="bg-[#9d00bf] h-[36px] shrink-0 w-full" data-name="bg" />
        <Content3 />
      </div>
      <Top />
    </div>
  );
}