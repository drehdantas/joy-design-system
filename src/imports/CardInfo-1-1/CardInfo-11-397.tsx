import svgPaths from "./svg-b6y7fkz3jn";
import imgChangeImageHere from "./3e88bf89392ee98ba7e782461c0c3ba94d402bd0.png";
import { imgArrowOutward } from "./svg-bb9yy";

function Image() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Image">
      <div className="col-1 h-[160px] ml-0 mt-0 relative row-1 w-[343px]" data-name="Change image here">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgChangeImageHere} />
          <div className="absolute bg-[rgba(0,0,0,0.1)] inset-0" />
        </div>
      </div>
      <div className="bg-[#76e0f3] col-1 content-stretch flex gap-[8px] h-[36px] items-center justify-center ml-[222px] mt-[12px] p-[8px] relative rounded-[32px] row-1" data-name="tags">
        <p className="font-['Onest:SemiBold',sans-serif] font-semibold leading-[14px] relative shrink-0 text-[#1443ff] text-[14px] text-right whitespace-nowrap">Lanzamientos</p>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Title">
      <p className="font-['Onest:SemiBold',sans-serif] font-semibold leading-[1.1] relative shrink-0 text-[#090f39] text-[16px] w-full">Dulce + Energía</p>
      <p className="font-['Onest:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[#3a3f5e] text-[12px] w-full">Conoce nuestra nueva linea de galletas saludables</p>
    </div>
  );
}

function Tag() {
  return (
    <div className="bg-[#1443ff] flex-[1_0_0] h-full min-w-px relative rounded-[32px]" data-name="Tag">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[6px] relative size-full">
          <div className="aspect-[24/24] flex-[1_0_0] min-w-px relative" data-name="Icons">
            <div className="absolute bottom-[26.77%] left-[22.6%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5.425px_-5px] mask-size-[24px_24px] right-1/4 top-[20.83%]" style={{ maskImage: `url('${imgArrowOutward}')` }} data-name="arrow_outward">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.4792 10.4792">
                <path d={svgPaths.p9d3f200} fill="var(--fill-0, white)" id="arrow_outward" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative text-[#090f39]" data-name="Title">
      <p className="font-['Onest:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[20px] w-full">Promotion Card</p>
      <div className="font-['Onest:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[16px] w-full">
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">The Promotion Card is a versatile component designed to showcase new products, campaigns, or special announcements. It features a prominent hero image to capture user attention and is intended to promote content that users can click to learn more about.</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <ul className="mb-0">
          <li className="list-disc ms-[24px]">
            <span className="leading-[normal]">Purpose and Functionality</span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">{`This card's primary purpose is to act as a discovery tool, inviting users to explore new, exclusive, or featured content within the JOY app. It combines a compelling visual with a clear title and description, creating a scannable element that encourages engagement. Its straightforward design ensures that the focus remains on the promotional content.`}</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <ul className="mb-0">
          <li className="list-disc ms-[24px]">
            <span className="leading-[normal]">Elements and States</span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">{`Hero Image: A visually dominant image sits at the top of the card. This is where the main promotional art, campaign visuals, or new product images are displayed to immediately attract the user's attention.`}</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">{`Tag/Label: A colored tag, such as "Lanzamientos" (Launches), can be placed in a corner of the hero image to quickly categorize the content and add visual interest.`}</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">{`Title & Description: A bold title and a concise description summarize the promotion, providing just enough information to entice a click without cluttering the card.`}</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <p className="leading-[normal] whitespace-pre-wrap">Action Icon: An icon, such as an arrow, serves as the primary call to action. It visually signals that tapping the card will lead the user to a detail page with more information, ensuring a clear and predictable user experience.</p>
      </div>
    </div>
  );
}

export default function CardInfo() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative size-full" data-name="Card Info">
      <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shadow-[0px_12px_16px_-4px_rgba(0,0,0,0.08),0px_4px_6px_-2px_rgba(0,0,0,0.03)] shrink-0 w-[343px]" data-name="Card">
        <Image />
        <div className="bg-white content-stretch flex gap-[8px] items-start pb-[16px] pt-[20px] px-[16px] relative shrink-0 w-[343px]" data-name="Card detail">
          <Title />
          <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="Small buttons">
            <Tag />
          </div>
        </div>
      </div>
      <Title1 />
    </div>
  );
}