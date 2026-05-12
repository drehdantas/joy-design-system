import svgPaths from "./svg-abc2d14b3m";
import { imgNotifications } from "./svg-6ml6j";

function MobileSignal() {
  return (
    <div className="h-[14px] relative shrink-0 w-[21px]" data-name="Mobile Signal">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 14">
        <g id="Mobile Signal">
          <g id="Signal">
            <path clipRule="evenodd" d={svgPaths.p342c3400} fill="white" fillRule="evenodd" />
            <path d={svgPaths.p35457ef0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1d5dbe40} fill="var(--fill-0, white)" />
            <path d={svgPaths.p18019e00} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Wifi() {
  return (
    <div className="h-[14px] relative shrink-0 w-[15px]" data-name="Wifi">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 14">
        <g id="Wifi">
          <path clipRule="evenodd" d={svgPaths.pdbb0f80} fill="var(--fill-0, white)" fillRule="evenodd" id="WiâFi" />
        </g>
      </svg>
    </div>
  );
}

function LeftSide() {
  return (
    <div className="content-stretch flex gap-[4px] items-start overflow-clip relative shrink-0" data-name="Left Side">
      <MobileSignal />
      <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white tracking-[-0.05px] whitespace-nowrap">Figma</p>
      <Wifi />
    </div>
  );
}

function Battery() {
  return (
    <div className="col-1 h-[11.5px] ml-[64px] mt-[1.5px] relative row-1 w-[26.5px]" data-name="Battery">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.5 11.5">
        <g id="Battery">
          <path clipRule="evenodd" d={svgPaths.p39339f00} fill="var(--fill-0, white)" fillRule="evenodd" id="Body" opacity="0.35" />
          <path clipRule="evenodd" d={svgPaths.p2d520fc0} fill="var(--fill-0, white)" fillRule="evenodd" id="Terminal" opacity="0.4" />
          <path clipRule="evenodd" d={svgPaths.p114f1780} fill="var(--fill-0, white)" fillRule="evenodd" id="Reserve" />
        </g>
      </svg>
    </div>
  );
}

function Alarm() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[14px]" data-name="Alarm">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Alarm">
          <path d={svgPaths.p25861b40} fill="var(--fill-0, white)" id="Alarm_2" />
        </g>
      </svg>
    </div>
  );
}

function Bluetooth() {
  return (
    <div className="col-1 ml-[15px] mt-0 relative row-1 size-[14px]" data-name="Bluetooth">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Bluetooth">
          <path d={svgPaths.pa79ff00} fill="var(--fill-0, white)" id="Bluetooth_2" />
        </g>
      </svg>
    </div>
  );
}

function RightSide() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Right Side">
      <Battery />
      <p className="col-1 font-['SF_Pro_Text:Regular',sans-serif] leading-[16px] ml-[29px] mt-[0.3px] not-italic relative row-1 text-[12px] text-right text-white whitespace-nowrap">100%</p>
      <Alarm />
      <Bluetooth />
    </div>
  );
}

function StatusBarIPhone678Se() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="StatusBar / iPhone 6, 7, 8, SE">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[4px] py-[2px] relative size-full">
          <LeftSide />
          <div className="flex flex-col font-['Product_Sans_Medium:Regular',sans-serif] h-[25.6px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white w-[49px]">
            <p className="leading-[16px]">9:41 AM</p>
          </div>
          <RightSide />
        </div>
      </div>
    </div>
  );
}

function Favorite() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="favorite">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="favorite">
          <mask height="24" id="mask0_153_946" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_153_946)">
            <path d={svgPaths.p146f3700} fill="var(--fill-0, white)" id="favorite_2" />
          </g>
        </g>
      </svg>
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

function Points() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Points">
      <Favorite />
      <div className="relative shrink-0 size-[24px]" data-name="topbar/notifs">
        <div className="absolute inset-[8.33%_16.67%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4px_-2px] mask-size-[24px_24px]" style={{ maskImage: `url('${imgNotifications}')` }} data-name="notifications">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
            <path d={svgPaths.p30307600} fill="var(--fill-0, white)" id="notifications" />
          </svg>
        </div>
      </div>
      <div className="bg-[#76e0f3] content-stretch flex gap-[8px] items-center justify-center p-[8px] relative rounded-[32px] shrink-0" data-name="Joy/Points">
        <Coin />
        <p className="font-['Onest:SemiBold',sans-serif] font-semibold leading-[1.1] relative shrink-0 text-[#1443ff] text-[14px] whitespace-nowrap">100</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Content">
      <div className="h-[24px] overflow-clip relative shrink-0 w-[45px]" data-name="Joy/Logo">
        <div className="absolute inset-[0.01%_2.27%_-0.68%_2%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.0783 24.1623">
            <path d={svgPaths.p1951b000} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
      <Points />
    </div>
  );
}

function TopBar() {
  return (
    <div className="relative shrink-0 w-full" data-name="Top bar">
      <div className="content-stretch flex flex-col items-start p-[16px] relative size-full">
        <Content />
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
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[375px]" data-name="topbar">
        <StatusBarIPhone678Se />
        <TopBar />
      </div>
      <Title />
    </div>
  );
}