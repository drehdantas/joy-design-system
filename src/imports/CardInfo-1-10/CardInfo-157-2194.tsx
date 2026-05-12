function Tag() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[32px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[32px]" />
      <p className="font-['Onest:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12px] text-white whitespace-nowrap">Descubre que puedes ganar con tus JOY Coins</p>
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
      <div className="content-stretch flex flex-col gap-[24px] items-start justify-end relative shrink-0 w-[343px] p-[16px]" data-name="title">
        <div className="font-['Bowlby_One:Regular',sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[40px] text-white tracking-[1.2px] w-[min-content]">
          <p className="leading-[44px] mb-0">Top</p>
          <p className="leading-[44px]">Enjoyers</p>
        </div>
        <Tag />
      </div>
      <Title />
    </div>
  );
}