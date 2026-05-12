import svgPaths from "./svg-k7z74yj6z8";

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative">
      <p className="font-['Onest:SemiBold',sans-serif] font-semibold leading-[1.1] relative shrink-0 text-[#090f39] text-[20px] whitespace-nowrap">Card title</p>
      <p className="font-['Onest:Light',sans-serif] font-light leading-[normal] min-w-full relative shrink-0 text-[#3a3f5e] text-[12px] w-[min-content]">Card description</p>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Title">
      <Frame1 />
      <div className="bg-[#9d00bf] content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[12px] py-[8px] relative rounded-[32px] shrink-0" data-name="tags">
        <div className="relative shrink-0 size-[20px]" data-name="Icon/Tags">
          <div className="absolute inset-[15%_35%_15%_30%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 14">
              <path d={svgPaths.p3b440080} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[-10%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g id="Group 48095703">
                <circle cx="12" cy="12" id="Ellipse 1720" r="11" stroke="var(--stroke-0, white)" strokeWidth="2" />
              </g>
            </svg>
          </div>
        </div>
        <p className="font-['Onest:SemiBold',sans-serif] font-semibold leading-[14px] relative shrink-0 text-[14px] text-right text-white whitespace-nowrap">300</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
      <div className="bg-[#efefef] col-1 h-[5px] ml-0 mt-0 rounded-[100px] row-1 w-full" />
      <div className="bg-[#ff7f00] col-1 h-[5px] ml-0 mt-0 rounded-[100px] row-1 w-[5.14%]" />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex font-['Onest:Regular',sans-serif] font-normal gap-[2px] items-end leading-[normal] relative shrink-0 text-[#3a3f5e] text-[14px] text-center whitespace-nowrap" data-name="Content">
      <p className="relative shrink-0">0</p>
      <p className="relative shrink-0">/</p>
      <p className="relative shrink-0">2000</p>
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Actions">
      <div className="bg-[#1443ff] content-stretch flex h-[40px] items-center justify-center px-[24px] py-[12px] relative rounded-[24px] shrink-0" data-name="Button">
        <div className="flex flex-col font-['Onest:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
          <p className="leading-[1.1]">¡Acepto el reto!</p>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Actions />
      <p className="font-['Onest:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[#3a3f5e] text-[12px] whitespace-nowrap">Expiration date</p>
    </div>
  );
}

function CardContent() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[311px]" data-name="Card_content">
      <Title />
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[311px]" data-name="progress">
        <Group />
        <Content />
      </div>
      <Frame />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative text-[#090f39]" data-name="Title">
      <p className="font-['Onest:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[20px] w-full">Progress Card</p>
      <div className="font-['Onest:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[16px] w-full">
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">{`The Progress Card is a versatile component designed to display a challenge or task with a clear visual indicator of the user's progress. This card is ideal for gamification and loyalty modules, motivating users by showing them how close they are to achieving a goal.`}</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <ul className="mb-0">
          <li className="list-disc ms-[24px]">
            <span className="leading-[normal]">Purpose and Functionality</span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">{`This card serves as a compact overview of a specific challenge or mission. Its primary purpose is to provide users with a quick glance at their status, the value of the reward, and the main action required. It's a key element in driving user engagement and participation in the app's loyalty programs.`}</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <ul className="mb-0">
          <li className="list-disc ms-[24px]">
            <span className="leading-[normal]">Elements and States</span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">{`Card Title & Description: The card features a clear title and a short description to introduce the challenge to the user.`}</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">{`Progress Bar: A horizontal progress bar visually communicates the user's current standing towards completing the challenge. It shows the numeric progress (e.g., 0/2000) below the bar. This element is crucial for motivating users.`}</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">Reward Indicator: An icon and a value (e.g., 300) indicate the reward for completing the challenge, immediately communicating the incentive to the user.</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">Call to Action (CTA): A prominent button, often with a clear, action-oriented label like ¡Acepto el reto!, invites the user to begin or continue the challenge.</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <p className="leading-[normal] whitespace-pre-wrap">Expiration Date: This text informs the user about the timeline for the challenge, creating a sense of urgency.</p>
      </div>
    </div>
  );
}

export default function CardInfo() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative size-full" data-name="Card Info">
      <div className="bg-white content-stretch flex flex-col h-[280px] items-start justify-end px-[16px] py-[24px] relative rounded-[12px] shadow-[0px_12px_16px_0px_rgba(0,0,0,0.08),0px_4px_6px_0px_rgba(0,0,0,0.03)] shrink-0 w-[343px]" data-name="mediumcard/info">
        <CardContent />
      </div>
      <Title1 />
    </div>
  );
}