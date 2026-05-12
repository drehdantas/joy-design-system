import { useState } from 'react';
import svgPaths from '../../imports/Cards-2/svg-5rznzqbln3';
import imgImage112 from '../../imports/Cards-2/c977a332c8ae04b1c2b299787a2945fc27ac91ca.png';

// Ticket Icons
function CheckCircle({ className = "" }: { className?: string }) {
  return (
    <div className={`relative shrink-0 size-[30px] ${className}`}>
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g>
          <mask height="30" id="mask0_check" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="30" x="0" y="0">
            <rect fill="#D9D9D9" height="30" width="30" />
          </mask>
          <g mask="url(#mask0_check)">
            <path d={svgPaths.p1f135680} fill="var(--color-blue-500)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function FlagIcon({ className = "" }: { className?: string }) {
  return (
    <div className={`relative shrink-0 size-[30px] ${className}`}>
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g>
          <mask height="30" id="mask0_flag" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="30" x="0" y="0">
            <rect fill="#D9D9D9" height="30" width="30" />
          </mask>
          <g mask="url(#mask0_flag)">
            <path d={svgPaths.p10772480} fill="var(--color-blue-500)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function JoyIcon({ className = "" }: { className?: string }) {
  return (
    <div className={`relative size-[46px] ${className}`}>
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
        <g>
          <circle cx="23" cy="23" fill="var(--color-blue-500)" r="23" />
          <g>
            <path d={svgPaths.p3a463e80} fill="white" />
            <path d={svgPaths.p19f582c0} fill="white" />
          </g>
          <path d={svgPaths.p3c875980} fill="white" />
        </g>
      </svg>
    </div>
  );
}

// Ticket Components
interface TicketProgressProps {
  userName?: string;
  greeting?: string;
  days?: number;
  backgroundColor?: string;
}

function TicketProgress({
  userName = 'Madelyn',
  greeting = '¡Que bueno verte!',
  days = 30,
  backgroundColor = '#ECFF40'
}: TicketProgressProps) {
  return (
    <div className="h-[162px] relative shrink-0 w-[343px]">
      {/* Ticket Background */}
      <div className="absolute flex inset-0 items-center justify-center" style={{ containerType: "size" }}>
        <div className="-scale-x-100 flex-none h-[hypot(1.49987cqw,92.5853cqh)] rotate-[-2.04deg] skew-x-[0.07deg] w-[hypot(-98.5001cqw,7.41469cqh)]">
          <div className="relative size-full">
            <div className="absolute inset-[0_-5.92%_-26.65%_-5.92%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 378.069 190.076">
                <g filter="url(#filter0_progress)" id="Vector">
                  <path d={svgPaths.p9ea04f0} fill={backgroundColor} />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="190.076" id="filter0_progress" width="378.069" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feMorphology in="SourceAlpha" operator="erode" radius="4" result="effect1_dropShadow" />
                    <feOffset dy="8" />
                    <feGaussianBlur stdDeviation="4" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0" />
                    <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feMorphology in="SourceAlpha" operator="erode" radius="4" result="effect2_dropShadow" />
                    <feOffset dy="20" />
                    <feGaussianBlur stdDeviation="12" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
                    <feBlend in2="effect1_dropShadow" mode="normal" result="effect2_dropShadow" />
                    <feBlend in="SourceGraphic" in2="effect2_dropShadow" mode="normal" result="shape" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="-translate-y-1/2 absolute flex h-[129.499px] items-center justify-center left-[17px] top-[calc(50%+2.75px)] w-[221.126px]">
        <div className="-rotate-2 flex-none">
          <div className="content-stretch flex flex-col gap-[8px] h-[122px] items-start relative">
            {/* Header */}
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
              <div className="flex items-center justify-center relative shrink-0 size-[49.646px]">
                <div className="flex-none rotate-2">
                  <div className="relative size-[48px]">
                    <div className="absolute flex items-center justify-center left-0 size-[47.577px] top-0">
                      <div className="-rotate-2 flex-none">
                        <div className="bg-white rounded-[12px] size-[46px]" />
                      </div>
                    </div>
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[40px] top-1/2">
                      <img alt="Joy Logo" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage112} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" style={{ color: 'var(--color-blue-500)' }}>
                <p className="font-['Onest:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] w-full text-[#ffffff]">{greeting}</p>
                <p className="font-['Bowlby_One:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[24px] tracking-[0.72px] w-full">{userName}</p>
              </div>
            </div>

            {/* Tag */}
            <div className="bg-white content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative rounded-[32px] shrink-0">
              <div className="bg-[#090f39] overflow-clip relative rounded-[80px] shrink-0 size-[18px]">
                <p className="absolute font-['Bowlby_One:Regular',sans-serif] leading-[16px] left-[calc(50%-4.5px)] not-italic text-[12px] text-white top-[calc(50%-7px)] tracking-[0.36px] whitespace-nowrap">3</p>
              </div>
              <p className="font-['Onest:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#090f39] text-[12px] whitespace-nowrap">inicio de sesión y subes de nivel</p>
            </div>

            {/* Progress Steps */}
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-[202px]">
              <CheckCircle />
              <div className="h-0 relative shrink-0 w-[27px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 1">
                  <line stroke="var(--color-blue-500)" x2="27" y1="0.5" y2="0.5" />
                </svg>
              </div>
              <CheckCircle />
              <div className="h-0 relative shrink-0 w-[27px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 1">
                  <line stroke="var(--color-blue-500)" x2="27" y1="0.5" y2="0.5" />
                </svg>
              </div>
              <CheckCircle />
              <div className="h-0 relative shrink-0 w-[27px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 1">
                  <line stroke="var(--color-blue-500)" x2="27" y1="0.5" y2="0.5" />
                </svg>
              </div>
              <FlagIcon />
            </div>
          </div>
        </div>
      </div>

      {/* Vertical Divider */}
      <div className="-translate-y-1/2 absolute flex h-[121.926px] items-center justify-center left-[73.73%] right-[25.05%] top-[calc(50%-3.01px)]" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(23.884cqw,-0.0291257cqh)] rotate-[-91.97deg] skew-x-[0.07deg] w-[hypot(-100cqw,-100cqh)]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 121.998 1">
            <line stroke="var(--color-blue-500)" strokeDasharray="6 6" x2="121.998" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>

      {/* Days Counter */}
      <div className="-translate-y-1/2 absolute flex items-center justify-center left-[77.5%] right-[3.36%] top-[calc(50%-5.56px)]" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(5.74699cqw,98.0392cqh)] rotate-[-2.04deg] skew-x-[-0.07deg] w-[hypot(94.253cqw,-1.96075cqh)]">
          <div className="content-stretch flex flex-col gap-[8px] items-center relative w-full">
            <div className="content-stretch flex flex-col font-['Bowlby_One:Regular',sans-serif] items-center not-italic relative shrink-0 text-center w-full" style={{ color: 'var(--color-blue-500)' }}>
              <p className="leading-[44px] relative shrink-0 text-[40px] tracking-[1.2px] w-full">{days}</p>
              <p className="leading-[16px] relative shrink-0 text-[12px] tracking-[0.36px] w-full">DÍAS DE</p>
              <p className="leading-[16px] relative shrink-0 text-[12px] tracking-[0.36px] w-full">RACHA</p>
            </div>
            <div className="h-[26px] overflow-clip relative shrink-0 w-[63px]">
              <div className="absolute bg-[#1443ff] inset-[-2.01%_97.8%_-1.33%_0.61%]" />
              <div className="absolute bg-[#1443ff] inset-[-2.01%_85.15%_-1.33%_13.27%]" />
              <div className="absolute bg-[#1443ff] inset-[-2.01%_81.98%_-1.33%_16.44%]" />
              <div className="absolute bg-[#1443ff] inset-[-2.01%_88.31%_-1.33%_3.78%]" />
              <div className="absolute bg-[#1443ff] inset-[-2.01%_75.65%_-1.33%_19.6%]" />
              <div className="absolute bg-[#1443ff] inset-[-2.01%_72.49%_-1.33%_25.93%]" />
              <div className="absolute bg-[#1443ff] inset-[-2.01%_59.83%_-1.33%_38.58%]" />
              <div className="absolute bg-[#1443ff] inset-[-2.01%_56.67%_-1.33%_41.75%]" />
              <div className="absolute bg-[#1443ff] inset-[-2.01%_63%_-1.33%_29.09%]" />
              <div className="absolute bg-[#1443ff] inset-[-2.01%_50.34%_-1.33%_44.91%]" />
              <div className="absolute bg-[#1443ff] inset-[-2.01%_47.18%_-1.33%_51.24%]" />
              <div className="absolute bg-[#1443ff] inset-[-2.01%_34.52%_-1.33%_63.9%]" />
              <div className="absolute bg-[#1443ff] inset-[-2.01%_31.36%_-1.33%_67.06%]" />
              <div className="absolute bg-[#1443ff] inset-[-2.01%_37.68%_-1.33%_54.4%]" />
              <div className="absolute bg-[#1443ff] inset-[-2.01%_25.03%_-1.34%_70.23%]" />
              <div className="absolute bg-[#1443ff] inset-[-2.01%_21.86%_-1.33%_76.55%]" />
              <div className="absolute bg-[#1443ff] inset-[-2.01%_9.21%_-1.33%_89.21%]" />
              <div className="absolute bg-[#1443ff] inset-[-2.01%_6.04%_-1.33%_92.38%]" />
              <div className="absolute bg-[#1443ff] inset-[-2.01%_12.37%_-1.33%_79.72%]" />
              <div className="absolute bg-[#1443ff] inset-[-2.01%_-0.28%_-1.33%_95.54%]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface TicketSimpleProps {
  userName?: string;
  greeting?: string;
  showIcon?: boolean;
  backgroundColor?: string;
}

function TicketSimple({
  userName = 'Madelyn',
  greeting = '¡Que bueno verte!',
  showIcon = false,
  backgroundColor = '#ECFF40'
}: TicketSimpleProps) {
  return (
    <div className="h-[101px] relative shrink-0 w-[341px]">
      {/* Ticket Background */}
      <div className="absolute flex inset-[0_0.03%_0.43%_0] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-scale-x-100 flex-none h-[hypot(0.891043cqw,88.0562cqh)] rotate-[-2.04deg] skew-x-[0.07deg] w-[hypot(-99.109cqw,11.9438cqh)]">
          <div className="relative size-full">
            <div className="absolute inset-[0_-5.92%_-45.14%_-5.92%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 378.069 128.61">
                <g filter="url(#filter0_simple)" id="Vector">
                  <path d={svgPaths.p3f06dd00} fill={backgroundColor} />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="128.61" id="filter0_simple" width="378.069" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feMorphology in="SourceAlpha" operator="erode" radius="4" result="effect1_dropShadow" />
                    <feOffset dy="8" />
                    <feGaussianBlur stdDeviation="4" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0" />
                    <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feMorphology in="SourceAlpha" operator="erode" radius="4" result="effect2_dropShadow" />
                    <feOffset dy="20" />
                    <feGaussianBlur stdDeviation="12" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
                    <feBlend in2="effect1_dropShadow" mode="normal" result="effect2_dropShadow" />
                    <feBlend in="SourceGraphic" in2="effect2_dropShadow" mode="normal" result="shape" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="-translate-y-1/2 absolute flex h-[55.291px] items-center justify-center left-[24px] top-[calc(50%-0.85px)] w-[203.562px]">
        <div className="-rotate-2 flex-none">
          <div className="content-stretch flex flex-col h-[48.27px] items-start relative w-[202px]">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
              {showIcon && (
                <div className="flex items-center justify-center relative shrink-0 size-[49.646px]">
                  <div className="flex-none rotate-2">
                    <div className="relative size-[48px]">
                      <div className="absolute flex items-center justify-center left-0 size-[47.577px] top-0">
                        <div className="-rotate-2 flex-none">
                          <div className="bg-white rounded-[12px] size-[46px]" />
                        </div>
                      </div>
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[40px] top-1/2">
                        <img alt="Joy Logo" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage112} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" style={{ color: 'var(--color-blue-500)' }}>
                <p className="font-['Onest:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] w-full font-[Inter]">{greeting}</p>
                <p className="font-['Bowlby_One:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[24px] tracking-[0.72px] w-full font-[Inter] font-bold">{userName}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vertical Divider */}
      <div className="-translate-y-1/2 absolute flex h-[63.973px] items-center justify-center left-[74.16%] right-[25.22%] top-[calc(50%-1.49px)]" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(47.3579cqw,-0.0515401cqh)] rotate-[-91.89deg] w-[hypot(-100cqw,-100cqh)]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64.0075 1">
            <line stroke="var(--color-blue-500)" strokeDasharray="6 6" x2="64.0075" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>

      {/* Joy Icon */}
      <div className="absolute flex items-center justify-center left-[274px] size-[47.577px] top-[22px]">
        <div className="-rotate-2 flex-none">
          <JoyIcon />
        </div>
      </div>
    </div>
  );
}

interface TicketCTAProps {
  userName?: string;
  greeting?: string;
  message?: string;
  buttonText?: string;
  backgroundColor?: string;
  onButtonClick?: () => void;
}

function TicketCTA({
  userName = 'Madelyn',
  greeting = '¡Que bueno verte!',
  message = 'Te damos la bienvenida a Joy',
  buttonText = 'Regístrate ahora',
  backgroundColor = '#ECFF40',
  onButtonClick
}: TicketCTAProps) {
  return (
    <div className="h-[130px] relative shrink-0 w-[343px]">
      {/* Ticket Background */}
      <div className="absolute flex inset-0 items-center justify-center" style={{ containerType: "size" }}>
        <div className="-scale-x-100 flex-none h-[hypot(1.49987cqw,92.5853cqh)] rotate-[-1.63deg] skew-x-[-0.81deg] w-[hypot(-98.5001cqw,7.41469cqh)]">
          <div className="relative size-full">
            <div className="absolute inset-[0_-5.92%_-33.2%_-5.92%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 377.993 160.471">
                <g filter="url(#filter0_cta)" id="Vector">
                  <path d={svgPaths.p2553c6c0} fill={backgroundColor} />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="160.471" id="filter0_cta" width="377.993" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feMorphology in="SourceAlpha" operator="erode" radius="4" result="effect1_dropShadow" />
                    <feOffset dy="8" />
                    <feGaussianBlur stdDeviation="4" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0" />
                    <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feMorphology in="SourceAlpha" operator="erode" radius="4" result="effect2_dropShadow" />
                    <feOffset dy="20" />
                    <feGaussianBlur stdDeviation="12" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
                    <feBlend in2="effect1_dropShadow" mode="normal" result="effect2_dropShadow" />
                    <feBlend in="SourceGraphic" in2="effect2_dropShadow" mode="normal" result="shape" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="-translate-y-1/2 absolute flex h-[103.991px] items-center justify-center left-[24px] top-[calc(50%-0.51px)] w-[205.262px]">
        <div className="-rotate-2 flex-none">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative w-[202px]">
            <div className="content-stretch flex items-center relative shrink-0 w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" style={{ color: 'var(--color-blue-500)' }}>
                <p className="font-['Onest:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] w-full">{message}</p>
                <p className="font-['Bowlby_One:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[20px] tracking-[0.6px] w-full">{greeting}</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <button
                onClick={onButtonClick}
                className="bg-[#1443ff] relative rounded-[24px] shrink-0 w-full transition-opacity hover:opacity-90"
              >
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-center px-[24px] py-[4px] relative size-full">
                    <p className="font-['Onest:SemiBold',sans-serif] font-semibold leading-[1.1] text-[14px] text-center text-white whitespace-nowrap">
                      {buttonText}
                    </p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Vertical Divider */}
      <div className="-translate-y-1/2 absolute flex h-[104px] items-center justify-center left-[73.76%] right-[25.36%] top-[calc(50%-3px)]" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(33.3195cqw,-0.0277252cqh)] rotate-[-91.65deg] w-[hypot(-100cqw,-100cqh)]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104.043 1">
            <line stroke="var(--color-blue-500)" strokeDasharray="6 6" x2="104.043" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>

      {/* Joy Icon */}
      <div className="absolute flex items-center justify-center left-[274.87px] size-[47.577px] top-[36px]">
        <div className="-rotate-2 flex-none">
          <JoyIcon />
        </div>
      </div>
    </div>
  );
}

function InteractiveDemo() {
  const [clickCount, setClickCount] = useState(0);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8 border border-blue-200 mb-16">
      <h3 className="title-large font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>Interactive Demo</h3>
      <p className="body-large mb-6" style={{ color: 'var(--color-gray-500)' }}>
        Click the button on the welcome ticket to see interaction behavior.
      </p>

      <div className="flex justify-center mb-6">
        <TicketCTA
          message="Te damos la bienvenida a Joy"
          greeting="¡Que bueno verte por acá!"
          buttonText="Regístrate ahora"
          onButtonClick={() => setClickCount(clickCount + 1)}
        />
      </div>

      <div className="bg-white rounded-lg p-4 border border-gray-200">
        <p className="label-large" style={{ color: 'var(--color-deep-blue)' }}>
          Button Clicks: <span className="font-normal">{clickCount}</span>
        </p>
        <button
          onClick={() => setClickCount(0)}
          className="mt-2 text-sm underline"
          style={{ color: 'var(--color-blue-500)' }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default function TicketsShowcase() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h2 className="headline-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Ticket Component</h2>
        <div className="title-large space-y-4" style={{ color: 'var(--color-deep-blue)' }}>
          <p>
            The Ticket Component is a specialized, high-impact element designed to resemble a ticket or coupon, primarily used to welcome users and display mission-based progress or daily streaks within the gamification module of the JOY app.
          </p>

          <div>
            <p className="font-bold mb-2">Purpose and Functionality</p>
            <p>
              The Ticket Component serves as a motivational tool, offering a fun and tangible visual representation of a user's current status and achievements. Its main purpose is to drive daily retention and engagement by showing personalized progress and celebrating successful interactions.
            </p>
          </div>

          <div>
            <p className="font-bold mb-2">Elements and Variations</p>
            <p>
              This component uses a consistent base shape (the ticket/coupon outline) but adapts its content based on the level of information required. The ticket shape features a distinctive angled design with a perforated divider line, creating an authentic ticket-like appearance.
            </p>
          </div>
        </div>
      </div>

      <InteractiveDemo />

      <div className="space-y-12 mb-16">
        <div>
          <h3 className="title-large font-bold mb-6" style={{ color: 'var(--color-deep-blue)' }}>Variations</h3>

          <div className="space-y-8">
            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Progress Ticket (Yellow)</p>
              <div className="bg-white rounded-lg border border-gray-200 p-8 flex justify-center">
                <TicketProgress days={30} />
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Displays user progress with mission steps and streak counter. Used for daily login tracking and gamification.
              </p>
            </div>

            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Simple Ticket with Icon (Yellow)</p>
              <div className="bg-white rounded-lg border border-gray-200 p-8 flex justify-center">
                <TicketSimple showIcon />
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Basic welcome ticket with user greeting and Joy branding icon.
              </p>
            </div>

            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Simple Ticket without Icon (Yellow)</p>
              <div className="bg-white rounded-lg border border-gray-200 p-8 flex justify-center">
                <TicketSimple showIcon={false} />
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Minimal greeting ticket focusing on the user's name and welcome message.
              </p>
            </div>

            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Welcome CTA Ticket (Yellow)</p>
              <div className="bg-white rounded-lg border border-gray-200 p-8 flex justify-center">
                <TicketCTA
                  message="Te damos la bienvenida a Joy"
                  greeting="¡Que bueno verte por acá!"
                  buttonText="Regístrate ahora"
                />
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Onboarding ticket with call-to-action button for new user registration.
              </p>
            </div>

            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Birthday Ticket (Purple)</p>
              <div className="bg-white rounded-lg border border-gray-200 p-8 flex justify-center">
                <TicketProgress
                  days={24}
                  greeting="¡Feliz cumpleaños!"
                  backgroundColor="#C466D9"
                />
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Special occasion ticket in purple, celebrating user birthdays with limited-time offers.
              </p>
            </div>

            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Birthday Simple Ticket (Purple)</p>
              <div className="bg-white rounded-lg border border-gray-200 p-8 flex justify-center">
                <TicketSimple
                  greeting="¡Que bueno verte!"
                  showIcon={false}
                  backgroundColor="#C466D9"
                />
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Simple birthday-themed ticket with purple background.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h3 className="title-large font-bold mb-3" style={{ color: 'var(--color-deep-blue)' }}>Best Practices</h3>
        <ul className="space-y-2">
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Use the progress ticket variant to show daily login streaks and mission completion</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Reserve purple tickets for special occasions like birthdays or limited-time events</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Keep messaging concise and personalized with the user's name</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Use CTA tickets for onboarding flows and important user actions</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>The angled design and perforated divider create a playful, authentic ticket aesthetic</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Maintain consistent color coding: yellow for standard interactions, purple for special events</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
