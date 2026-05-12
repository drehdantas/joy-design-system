export interface IconProps {
  className?: string;
}

export default function ProfileIcon({ className = "" }: IconProps) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="currentColor" stroke="currentColor" strokeWidth="2"/>
      <circle cx="12" cy="10" r="3" stroke="white" strokeWidth="2"/>
      <path d="M6.168 18.849A4 4 0 0 1 10 16h4a4 4 0 0 1 3.834 2.855" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}
