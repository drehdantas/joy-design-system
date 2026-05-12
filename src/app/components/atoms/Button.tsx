export interface ButtonProps {
  variant?: 'filled' | 'outlined' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Button({
  variant = 'filled',
  size = 'md',
  disabled = false,
  iconLeft,
  iconRight,
  children,
  onClick
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center gap-2 font-semibold transition-all rounded-full';

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variantClasses = {
    filled: disabled
      ? 'cursor-not-allowed'
      : 'bg-[var(--color-blue-500)] text-white hover:bg-[var(--color-blue-300)] active:bg-[var(--color-blue-300)] cursor-pointer',
    outlined: disabled
      ? 'cursor-not-allowed'
      : 'border-2 border-[var(--color-blue-500)] text-[var(--color-blue-500)] hover:bg-[var(--color-blue-100)] active:bg-[var(--color-blue-200)] cursor-pointer',
    tertiary: disabled
      ? 'cursor-not-allowed'
      : 'text-[var(--color-blue-500)] hover:bg-[var(--color-blue-100)] active:bg-[var(--color-blue-200)] cursor-pointer',
  };

  const disabledStyles = disabled ? {
    backgroundColor: variant === 'filled' ? 'var(--color-dark-100)' : 'transparent',
    borderColor: variant === 'outlined' ? 'var(--color-dark-100)' : undefined,
    color: 'var(--color-dark-200)',
  } : {};

  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${variant === 'outlined' && !disabled ? 'border-2' : ''}`}
      style={disabledStyles}
      disabled={disabled}
      onClick={onClick}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
