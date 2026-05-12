function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0">
      <div className="bg-[#1ea93c] content-stretch flex items-center justify-center p-[8px] relative rounded-[32px] shrink-0" data-name="entrega/Entregado">
        <p className="font-['Onest:SemiBold',sans-serif] font-semibold leading-[1.1] relative shrink-0 text-[12px] text-white whitespace-nowrap">Entregado</p>
      </div>
      <div className="bg-[#fec820] content-stretch flex items-center justify-center p-[8px] relative rounded-[32px] shrink-0" data-name="entrega/Pendiente">
        <p className="font-['Onest:SemiBold',sans-serif] font-semibold leading-[1.1] relative shrink-0 text-[#090f39] text-[12px] whitespace-nowrap">Pendiente de entrega</p>
      </div>
      <div className="bg-[#d13237] content-stretch flex items-center justify-center p-[8px] relative rounded-[32px] shrink-0" data-name="entrega/Rejected">
        <p className="font-['Onest:SemiBold',sans-serif] font-semibold leading-[1.1] relative shrink-0 text-[12px] text-white whitespace-nowrap">Rechazado</p>
      </div>
      <div className="bg-[#367eec] content-stretch flex items-center justify-center p-[8px] relative rounded-[32px] shrink-0" data-name="entrega/Pending review">
        <p className="font-['Onest:SemiBold',sans-serif] font-semibold leading-[1.1] relative shrink-0 text-[12px] text-white whitespace-nowrap">Pendiente de revisión</p>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative text-[#090f39]" data-name="Title">
      <p className="font-['Onest:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[20px] w-full">Fulfillment Status Tags</p>
      <div className="font-['Onest:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[16px] w-full">
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">{`This component is a crucial part of the Status & Feedback category, designed to clearly communicate the current fulfillment status of a reward, redemption, or submission within the JOY app's loyalty system.`}</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <ul className="mb-0">
          <li className="list-disc ms-[24px]">
            <span className="leading-[normal]">Purpose and Functionality</span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">The Fulfillment Status Tag provides immediate, color-coded feedback to the user regarding the state of their transaction or claim. Its main purpose is to eliminate uncertainty, reduce user anxiety (especially regarding delivery), and clearly categorize items in a list. It uses the Semantic Colors palette to ensure instant comprehension of the status.</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <ul className="mb-0">
          <li className="list-disc ms-[24px]">
            <span className="leading-[normal]">Elements and States</span>
          </li>
        </ul>
        <p className="leading-[normal] whitespace-pre-wrap">This is a single component that adapts its color and label to reflect four distinct stages in the fulfillment process.</p>
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