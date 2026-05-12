import imgCapturaDePantalla20250625ALaS1336421 from "./9ea84a7d86b0e331612bdb361b0fff9d29aeb064.png";
import imgImage802 from "./6fe2f3bf769c01f911a7c179e934f11b3e5ee67d.png";
import imgImage803 from "./d0bdc29fd8f2efe390ee70d4de167d18ddff0196.png";
import imgImage804 from "./f1225e7edccacd7441f4ed8ffdf104cec397016c.png";
import imgImage805 from "./a984492dc82f078f1c40cd64c61b4d16a49fffa3.png";

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="bg-[#ff7f00] content-stretch flex flex-col items-center justify-center relative rounded-[96px] shrink-0 size-[24px]" data-name="Logos/Cheetos">
        <div className="flex h-[12.352px] items-center justify-center relative shrink-0 w-[17.114px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="-rotate-2 flex-none">
            <div className="h-[11.776px] relative rounded-[7.333px] w-[16.714px]" data-name="Captura de Pantalla 2025-06-25 a la(s) 13.36.42 1">
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[7.333px]">
                <img alt="" className="absolute h-[193.34%] left-[-15.91%] max-w-none top-[-38.71%] w-[132.84%]" src={imgCapturaDePantalla20250625ALaS1336421} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#ed1c24] content-stretch flex flex-col items-center justify-center relative rounded-[96px] shrink-0 size-[24px]" data-name="Logos/Doritos">
        <div className="h-[15px] relative shrink-0 w-[17.893px]" data-name="image 802">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage802} />
        </div>
      </div>
      <div className="bg-[#00cf3b] content-stretch flex flex-col items-center justify-center relative rounded-[96px] shrink-0 size-[24px]" data-name="Logos/Ruffles">
        <div className="h-[10.5px] relative shrink-0 w-[21px]" data-name="image 803">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage803} />
        </div>
      </div>
      <div className="bg-[#1443ff] content-stretch flex flex-col items-center justify-center relative rounded-[96px] shrink-0 size-[24px]" data-name="Logos/Chokis">
        <div className="h-[11.866px] relative shrink-0 w-[19.5px]" data-name="image 804">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage804} />
        </div>
      </div>
      <div className="bg-[#c10108] content-stretch flex flex-col items-center justify-center relative rounded-[96px] shrink-0 size-[24px]" data-name="Logos/emperador">
        <div className="absolute h-[16.5px] left-[6px] top-[3px] w-[13.75px]" data-name="image 805">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[252.59%] left-[-138.57%] max-w-none top-[-48.31%] w-[377.14%]" src={imgImage805} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative text-[#090f39]" data-name="Title">
      <p className="font-['Onest:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[20px] w-full">Brand Logo Badges</p>
      <div className="font-['Onest:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[16px] w-full">
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">{`The Brand Logo Badges component provides quick, visual recognition of the partners associated with a campaign or reward. Its primary function is to build trust and immediately inform the user which products or companies are involved in a promotion. The circular, colorful format ensures that each brand's logo is distinct and visually appealing, consistent with the vibrant JOY aesthetic.`}</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <ul className="mb-0">
          <li className="list-disc ms-[24px]">
            <span className="leading-[normal]">Recognition: Quickly identifies participating brands like Cheetos, Doritos, Ruffles, and Chokis at a glance.</span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <ul className="mb-0">
          <li className="list-disc ms-[24px]">
            <span className="leading-[normal]">{`Endorsement: When used in a cobranding context, the presence of these logos acts as an endorsement, reinforcing the offer's credibility.`}</span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <ul>
          <li className="list-disc ms-[24px]">
            <span className="leading-[normal]">{`Filtering/Mapping: In certain instances (e.g., the Participating Brands & Products Card), these badges function as interactive filters, allowing the user to select a brand to view its associated products.`}</span>
          </li>
        </ul>
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