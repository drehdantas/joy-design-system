function Group() {
  return (
    <div className="grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
      <div className="bg-[#efefef] col-1 h-[5px] ml-0 mt-0 relative rounded-[100px] row-1 w-full" />
      <div className="bg-[#ff7f00] col-1 h-[5px] ml-0 mt-0 relative rounded-[100px] row-1 w-full" />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex font-['Onest:Regular',sans-serif] font-normal gap-[2px] items-end leading-[normal] relative shrink-0 text-[#3a3f5e] text-[14px] text-center whitespace-nowrap" data-name="Content">
      <p className="relative shrink-0">2000</p>
      <p className="relative shrink-0">/</p>
      <p className="relative shrink-0">2000</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
      <div className="bg-[#efefef] col-1 h-[5px] ml-0 mt-0 relative rounded-[100px] row-1 w-full" />
      <div className="bg-[#ff7f00] col-1 h-[5px] ml-0 mt-0 relative rounded-[100px] row-1 w-[49.84%]" />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex font-['Onest:Regular',sans-serif] font-normal gap-[2px] items-end leading-[normal] relative shrink-0 text-[#3a3f5e] text-[14px] text-center whitespace-nowrap" data-name="Content">
      <p className="relative shrink-0">1000</p>
      <p className="relative shrink-0">/</p>
      <p className="relative shrink-0">2000</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
      <div className="bg-[#efefef] col-1 h-[5px] ml-0 mt-0 relative rounded-[100px] row-1 w-full" />
      <div className="bg-[#ff7f00] col-1 h-[5px] ml-0 mt-0 relative rounded-[100px] row-1 w-[5.14%]" />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex font-['Onest:Regular',sans-serif] font-normal gap-[2px] items-end leading-[normal] relative shrink-0 text-[#3a3f5e] text-[14px] text-center whitespace-nowrap" data-name="Content">
      <p className="relative shrink-0">0</p>
      <p className="relative shrink-0">/</p>
      <p className="relative shrink-0">2000</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] h-[31px] items-start justify-center relative shrink-0">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px relative w-[311px]" data-name="progress/100%">
        <Group />
        <Content />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px relative w-[311px]" data-name="progress/50%">
        <Group1 />
        <Content1 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px relative w-[311px]" data-name="progress/0%">
        <Group2 />
        <Content2 />
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative text-[#090f39]" data-name="Title">
      <p className="font-['Onest:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[20px] w-full">Progress Bar</p>
      <div className="font-['Onest:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[16px] w-full">
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">The Progress Bar component motivates user engagement by providing immediate, quantifiable feedback on their status. Its function is to transform a numerical value into an easy-to-understand visual metric, assuring the user that their actions are contributing directly toward a reward or completion.</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <ul className="mb-0">
          <li className="list-disc ms-[24px]">
            <span className="leading-[normal]">Elements and States</span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">{`This is a single component that adapts its visual state based entirely on the user's progress:`}</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">Indicator: A highly visible bar, typically colored using a vibrant Brand Color to convey energy and momentum, dynamically fills from left to right.</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <p className="leading-[normal] whitespace-pre-wrap">{`Value Display: A text element placed below the bar displays the progress numerically (e.g., "0/2000", "1000/2000", "2000/2000"). This pairing of visual and numeric data offers both quick understanding and precise detail.`}</p>
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