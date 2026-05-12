export interface IconProps {
  className?: string;
}

export default function FilterIcon({ className = "" }: IconProps) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M3 7H21M6 12H18M9 17H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}
