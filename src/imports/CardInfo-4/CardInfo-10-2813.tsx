function Title() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative text-[#090f39]" data-name="Title">
      <p className="font-['Onest:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[20px] w-full">Reward Details Card</p>
      <div className="font-['Onest:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[16px] w-full">
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">This component is designed to provide comprehensive information about a specific reward or prize within the JOY app. It is a detail view element, intended to be used on a dedicated screen where a user can learn everything they need to know about an offer.</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <ul className="mb-0">
          <li className="list-disc ms-[24px]">
            <span className="leading-[normal]">Purpose and Functionality</span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">The Reward Details Component serves as the single source of truth for a reward. Its purpose is to build trust and provide clarity by answering all potential user questions regarding a prize, its terms, and eligibility.</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <ul className="mb-0">
          <li className="list-disc ms-[24px]">
            <span className="leading-[normal]">Elements</span>
          </li>
        </ul>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">{`Header: The component is headed by a clear title, such as "Sobre el premio," which immediately informs the user about the content of the section.`}</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">Description: A full-length text block provides all the necessary details about the reward. This is where the long-form content, which is too verbose for a card view, is displayed.</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">Disclaimer: A small-font disclaimer clarifies that the image is for illustrative purposes only and does not guarantee a specific brand, style, or configuration. This is crucial for managing user expectations.</p>
        <p className="leading-[normal] mb-0 whitespace-pre-wrap">​</p>
        <p className="leading-[normal] whitespace-pre-wrap">Terms and Conditions Link: This element, presented as a clickable link, provides a clear path for users to access the full terms and conditions of the promotion.</p>
      </div>
    </div>
  );
}

export default function CardInfo() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative size-full" data-name="Card Info">
      <div className="bg-white content-stretch flex flex-col gap-[8px] items-start justify-end p-[16px] relative rounded-[16px] shrink-0 w-[343px]" data-name="card">
        <div className="flex flex-col font-['Onest:SemiBold',sans-serif] font-semibold h-[18px] justify-center leading-[0] min-w-full relative shrink-0 text-[#090f39] text-[16px] w-[min-content]">
          <p className="leading-[1.1]">Sobre el premio</p>
        </div>
        <div className="flex flex-col font-['Onest:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#3a3f5e] text-[12px] w-[min-content]">
          <p className="leading-[normal]">Lorem ipsum dolor sit amet consectetur. Placerat porta lorem morbi quisque est venenatis. In in fermentum dui at lorem tortor ultrices pharetra porttitor.</p>
        </div>
        <div className="flex flex-col font-['Onest:Medium',sans-serif] font-medium h-[44px] justify-center leading-[0] min-w-full relative shrink-0 text-[#6b6f86] text-[10px] w-[min-content]">
          <p className="leading-[11px]">*La imagen de recompensa solo hace referencia a la categoría de recompensa y no garantiza una marca, estilo o configuración específicos. La recompensa final se confirmará una vez finalizado el período de validez</p>
        </div>
        <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[24px] shrink-0" data-name="Button">
          <div className="flex flex-col font-['Onest:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1443ff] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[1.1]">Términos y condiciones de la promo</p>
          </div>
        </div>
      </div>
      <Title />
    </div>
  );
}