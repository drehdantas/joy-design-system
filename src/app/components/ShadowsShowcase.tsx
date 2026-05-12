import svgPaths from "../../imports/✅UiKitShadows/svg-zhwzdofnn6";

const shadowTokens = [
  {
    name: 'Extra Small Shadow',
    token: 'shadow-xsm',
    value: '0px 1px 3px 0px rgba(0,0,0,0.1), 0px 1px 2px 0px rgba(0,0,0,0.06)',
    description: 'Used for minimal elevation, such as subtle highlights on small interactive elements, text fields, or small badges that require a hint of depth without drawing significant attention. Ideal for conveying a slight hover state or a gentle separation from the background.',
    usage: 'Consider for very minor interactive icons, selected filters, or within densely packed areas where a strong shadow would be too heavy.',
  },
  {
    name: 'Small Shadow',
    token: 'shadow-sm',
    value: '0px 4px 8px -2px rgba(0,0,0,0.1), 0px 2px 4px -2px rgba(0,0,0,0.06)',
    description: 'Applied to standard interactive components like primary buttons, small cards, or individual list items. It signifies an element that is actionable or contains distinct content, providing a clear but not overly prominent sense of elevation.',
    usage: 'Likely used for standard buttons, small information cards, or individual reward items.',
  },
  {
    name: 'Medium Shadow',
    token: 'shadow-md',
    value: '0px 12px 16px -4px rgba(0,0,0,0.08), 0px 4px 6px -2px rgba(0,0,0,0.03)',
    description: 'Reserved for more significant components that contain grouped content or require a stronger visual presence, such as larger cards, modals, or dropdown menus. It clearly establishes these elements as separate layers above the main content.',
    usage: 'Could be used for feature cards, larger interactive panels, or modals that appear above the main app content.',
  },
  {
    name: 'Large Shadow',
    token: 'shadow-lg',
    value: '0px 20px 24px -4px rgba(0,0,0,0.08), 0px 8px 8px -4px rgba(0,0,0,0.03)',
    description: 'Used for highly interactive or critical overlay elements that demand user focus, such as large modal dialogs, important pop-ups, or floating action buttons. This shadow effectively separates the element from the underlying content, signaling its importance.',
    usage: 'Suitable for full-screen modals, important prompts, or the main Floating Action Button (if present) to ensure it stands out.',
  },
  {
    name: 'Extra Large Shadow',
    token: 'shadow-xl',
    value: '0px 24px 48px -12px rgba(0,0,0,0.18)',
    description: 'Reserved for elements with the highest z-index that absolutely require maximum visual separation and user attention, such as critical alerts, system-level dialogs, or onboarding overlays that temporarily obscure the entire interface.',
    usage: 'Use very sparingly for highly critical system alerts, onboarding walkthrough overlays, or full-screen takeovers.',
  },
  {
    name: 'Double Extra Large Shadow',
    token: 'shadow-2xl',
    value: '0px 32px 64px -12px rgba(0,0,0,0.14)',
    description: 'This shadow token indicates an element is at the very top of the visual stack, such as a major system-wide notification banner that hovers above everything else, or a very large, immersive overlay. Its use should be exceptional.',
    usage: 'Almost exclusively for very rare, critical, or immersive full-screen experiences that demand absolute focus and separation.',
  },
];

function MousePointer() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path d={svgPaths.p74b140} stroke="#F2994A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M13 13L17 17" stroke="#F2994A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

interface ShadowCardProps {
  name: string;
  token: string;
  value: string;
  description: string;
  usage: string;
}

function ShadowCard({ name, token, value, description, usage }: ShadowCardProps) {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start">
      <p className="headline-small" style={{ color: 'var(--color-deep-blue)' }}>{name} - {token}</p>

      <div
        className="bg-white h-[90px] rounded-[8px] w-full"
        style={{ boxShadow: value }}
      />

      <p className="body-large" style={{ color: 'var(--color-gray-500)' }}>
        {description}
      </p>

      <div className="relative rounded-[6px] w-full border border-[#f2994a]">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col gap-[8px] items-center justify-center p-[12px]">
            <div className="content-stretch flex gap-[10px] items-center w-full">
              <MousePointer />
              <p className="flex-1 label-large text-[#212529]">UX/UI</p>
            </div>
            <p className="body-medium w-full" style={{ color: 'var(--color-gray-500)', fontWeight: 300 }}>
              {usage}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ShadowsShowcase() {
  return (
    <div className="bg-[#f6f6f6] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h2 className="headline-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Shadows</h2>
          <p className="title-large" style={{ color: 'var(--color-deep-blue)' }}>
            Reinforce the visual structure with precise and elegant shadows. From subtle highlights to dramatic depths, this kit offers versatile options to define hierarchy in your design. Fine-tune each shadow for a flawless visual effect.
          </p>
        </div>
        <div className="flex flex-col gap-[90px]">
          {shadowTokens.map((shadow) => (
            <ShadowCard key={shadow.token} {...shadow} />
          ))}
        </div>
      </div>
    </div>
  );
}
