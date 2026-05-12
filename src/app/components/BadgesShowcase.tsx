import { useState } from 'react';
import imgCheetos from "../../imports/CardInfo-6/9ea84a7d86b0e331612bdb361b0fff9d29aeb064.png";
import imgDoritos from "../../imports/CardInfo-6/6fe2f3bf769c01f911a7c179e934f11b3e5ee67d.png";
import imgRuffles from "../../imports/CardInfo-6/d0bdc29fd8f2efe390ee70d4de167d18ddff0196.png";
import imgChokis from "../../imports/CardInfo-6/f1225e7edccacd7441f4ed8ffdf104cec397016c.png";
import imgEmperador from "../../imports/CardInfo-6/a984492dc82f078f1c40cd64c61b4d16a49fffa3.png";

// Product logo imports
import imgCheetos2 from "../../imports/CardInfo-1-2/c977a332c8ae04b1c2b299787a2945fc27ac91ca.png";
import imgRuffles2 from "../../imports/CardInfo-1-2/8812245b72720300d724d9836191b1294090fed8.png";
import imgQuaker from "../../imports/CardInfo-1-2/35b34fcfbe6705949e32daa5125a81d138802b20.png";
import imgDoritos2 from "../../imports/CardInfo-1-2/094c9fde64a3f8d18388e47506681e3763ed8763.png";
import imgPepsi from "../../imports/CardInfo-1-2/01f6b79f9eee1b0b1f668ba2d65f6021065e7c41.png";
import imgRufflesAlt from "../../imports/CardInfo-1-2/c5343fc3b2363cf3341bc5309075887d586d5e22.png";

// Notification badge imports
import svgPaths from "../../imports/CardInfo-2-2/svg-5857buhtlv";
import { imgNotifications } from "../../imports/CardInfo-2-2/svg-3ntaj";

// Status & Utility Icons imports
import svgPathsIcons from "../../imports/CardInfo-3-2/svg-uxlvnz0grz";
import { imgCheckCircle, imgRocketLaunch } from "../../imports/CardInfo-3-2/svg-i5bfc";

// Feature Title Icons imports
import svgPathsFeature from "../../imports/CardInfo-4-2/svg-2jklxnod4i";

// Feature Tags imports
import svgPathsTags from "../../imports/CardInfo-7/svg-jiljfpucvi";
import { imgRocketLaunch as imgTagIcon } from "../../imports/CardInfo-7/svg-tsawc";

// Brand Logo imports
import svgPathsBrandLogo from "../../imports/CardInfo-1-3/svg-1d0r6ehmu8";

// Featured Brand Tag imports
import imgFeaturedBrand from "../../imports/CardInfo-4-3/9ea84a7d86b0e331612bdb361b0fff9d29aeb064.png";

// Small Reward Type Indicators imports
import imgRewardController from "../../imports/CardInfo-1-4/df427e0af811fd3226cdb77f2f184fc4f67d4201.png";
import imgRewardGame from "../../imports/CardInfo-1-4/f9264ed5365b65a0822f0a20a53431d1587ff884.png";
import imgRewardCard from "../../imports/CardInfo-1-4/fefc50ed1235319beefe8d880f11d0db7c261c0b.png";
import imgRewardTickets from "../../imports/CardInfo-1-4/298677ba65fb05c3c78f1bbbbae25c5b5f306f89.png";
import imgRewardChips1 from "../../imports/CardInfo-1-4/3c72655267f3ab17a9488ed23dd8d0ab104129ad.png";
import imgRewardChips2 from "../../imports/CardInfo-1-4/de4474e4b7a99d55ba9030b9a93d9b70c60156b3.png";

// Featured Brand Tag component
interface FeaturedBrandTagProps {
  brandName: string;
  brandColor: string;
  logoSrc: string;
  isActive?: boolean;
  onClick?: () => void;
}

function FeaturedBrandTag({ brandName, brandColor, logoSrc, isActive = false, onClick }: FeaturedBrandTagProps) {
  return (
    <button
      onClick={onClick}
      className={`content-stretch flex gap-[8px] items-center overflow-clip p-[4px] relative rounded-[999px] shrink-0 transition-transform hover:scale-105 ${
        isActive ? 'bg-[#1443ff] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]' : 'drop-shadow-[0px_1px_1px_rgba(16,24,40,0.05)]'
      }`}
      title={`Featured ${brandName}`}
    >
      <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
        <div className="content-stretch flex flex-col items-center justify-center relative rounded-[96px] shrink-0 size-[24px]" style={{ backgroundColor: brandColor }}>
          <div className="flex h-[12.352px] items-center justify-center relative shrink-0 w-[17.114px]">
            <div className="-rotate-2 flex-none">
              <div className="h-[11.776px] relative rounded-[7.333px] w-[16.714px]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[7.333px]">
                  <img alt={brandName} className="absolute h-[193.34%] left-[-15.91%] max-w-none top-[-38.71%] w-[132.84%]" src={logoSrc} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0">
          <p className={`font-['Onest:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12px] whitespace-nowrap ${
            isActive ? 'text-white' : 'text-[#3a3f5e]'
          }`}>
            Featured
          </p>
        </div>
      </div>
      {!isActive && (
        <div aria-hidden="true" className="absolute border border-[rgba(157,159,175,0.98)] border-solid inset-0 pointer-events-none rounded-[999px]" />
      )}
    </button>
  );
}

// Brand Logo component - JOY logo color variations
interface BrandLogoProps {
  color: string;
  variant: 'white' | 'yellow' | 'orange' | 'teal' | 'blue' | 'purple' | 'dark';
}

function BrandLogo({ color, variant }: BrandLogoProps) {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-[45px]" title={`JOY Logo - ${variant}`}>
      <div className="absolute inset-[0.01%_2.27%_-0.68%_2%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.0783 24.1623">
          <path d={svgPathsBrandLogo.p1951b000} fill={color} />
        </svg>
      </div>
    </div>
  );
}

// Coin icon for points badges
function CoinIcon({ size = 20 }: { size?: number }) {
  return (
    <div className="relative shrink-0" style={{ width: `${size}px`, height: `${size}px` }}>
      <div className="absolute inset-[-10%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path d="M11.4501 8.0426C11.2488 8.04577 11.0488 8.00876 10.8618 7.93374C10.6749 7.85871 10.5047 7.74717 10.3611 7.6056C10.2176 7.46403 10.1036 7.29526 10.0258 7.10912C9.94803 6.92298 9.90796 6.7232 9.90796 6.52139C9.90796 6.31959 9.94803 6.1198 10.0258 5.93366C10.1036 5.74753 10.2176 5.57876 10.3611 5.43719C10.5047 5.29562 10.6749 5.18407 10.8618 5.10905C11.0488 5.03402 11.2488 4.99702 11.4501 5.00019C11.8486 5.00646 12.2287 5.16949 12.5083 5.45409C12.7879 5.73869 12.9446 6.12203 12.9446 6.52139C12.9446 6.92075 12.7879 7.30409 12.5083 7.58869C12.2287 7.87329 11.8486 8.03632 11.4501 8.0426ZM11.7838 9.46932C12.2414 10.1537 12.5049 10.9498 12.5461 11.7726C12.5873 12.5954 12.4047 13.4139 12.0177 14.1408C11.6307 14.8676 11.054 15.4755 10.3491 15.8994C9.64413 16.3234 8.83751 16.5474 8.01537 16.5477H8V19H8.01537C11.873 19 15 15.8663 15 12.0016C15.0019 10.8147 14.7011 9.64709 14.1261 8.60946L11.7838 9.46932Z" fill="var(--color-blue-500)" />
          <circle cx="12" cy="12" r="11" stroke="var(--color-blue-500)" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}

// Status & Utility Icons
interface StatusIconProps {
  type: 'check' | 'error' | 'copy';
  color?: string;
  size?: number;
}

function StatusIcon({ type, color = '#115D21', size = 24 }: StatusIconProps) {
  const pathMap = {
    check: svgPathsIcons.p35a15880,
    error: svgPathsIcons.p7a41b40,
    copy: svgPathsIcons.p26362000
  };

  const viewBoxMap = {
    check: '0 0 20 20',
    error: '0 0 20 20',
    copy: '0 0 24 24'
  };

  const insetMap = {
    check: 'inset-[8.33%]',
    error: 'inset-[8.33%]',
    copy: 'inset-0'
  };

  return (
    <div className="relative shrink-0" style={{ width: `${size}px`, height: `${size}px` }}>
      <div
        className={`absolute ${insetMap[type]} mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-2px] mask-size-[24px_24px]`}
        style={{ maskImage: `url('${imgCheckCircle}')` }}
      >
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox={viewBoxMap[type]}>
          <path d={pathMap[type]} fill={color} />
        </svg>
      </div>
    </div>
  );
}

interface UtilityIconProps {
  type: 'rocket' | 'gift' | 'coin' | 'barcode';
  color?: string;
  size?: number;
}

function UtilityIcon({ type, color = 'var(--color-blue-500)', size = 20 }: UtilityIconProps) {
  if (type === 'rocket') {
    return (
      <div className="relative shrink-0" style={{ width: `${size}px`, height: `${size}px` }}>
        <div
          className="absolute inset-[10.6%_9.98%_7.92%_8.54%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.708px_-2.12px] mask-size-[20px_20px]"
          style={{ maskImage: `url('${imgRocketLaunch}')` }}
        >
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2965 16.2965">
            <path d={svgPathsIcons.p2e99c280} fill={color} />
          </svg>
        </div>
      </div>
    );
  }

  if (type === 'gift') {
    return (
      <div className="relative shrink-0" style={{ width: `${size}px`, height: `${size}px` }}>
        <div
          className="-translate-y-1/2 absolute aspect-[16.66666603088379/17.5] left-[8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.667px_-0.833px] mask-size-[20px_20px] right-[8.33%] top-[calc(50%-0.42px)]"
          style={{ maskImage: `url('${imgRocketLaunch}')` }}
        >
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 17.5">
            <path d={svgPathsIcons.p17066900} fill={color} />
          </svg>
        </div>
      </div>
    );
  }

  if (type === 'coin') {
    return (
      <div className="relative shrink-0" style={{ width: '16px', height: '16px' }}>
        <div className="absolute inset-[15%_35%_15%_30%]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.6 11.2">
            <path d={svgPathsIcons.p3c52c100} fill={color} />
          </svg>
        </div>
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <circle cx="10" cy="10" r="9" stroke={color} strokeWidth="2" />
          </svg>
        </div>
      </div>
    );
  }

  if (type === 'barcode') {
    return (
      <div className="relative shrink-0" style={{ width: `${size}px`, height: `${size}px` }}>
        <div
          className="-translate-y-1/2 absolute aspect-[22/18] left-[4.17%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.833px_-2.5px] mask-size-[20px_20px] right-[4.17%] top-1/2"
          style={{ maskImage: `url('${imgRocketLaunch}')` }}
        >
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 15">
            <path d={svgPathsIcons.p1b25cf00} fill={color} />
          </svg>
        </div>
      </div>
    );
  }

  return null;
}

// Feature Title Icons
interface FeatureTitleIconProps {
  type: 'promo' | 'mission' | 'alert' | 'streak' | 'time' | 'ranking' | 'shop' | 'coin';
  backgroundColor?: string;
  onClick?: () => void;
}

function FeatureTitleIcon({ type, backgroundColor, onClick }: FeatureTitleIconProps) {
  const defaultColors = {
    promo: 'rgba(161,180,255,0.98)',
    mission: '#c8f3fa',
    alert: 'rgba(216,153,229,0.98)',
    streak: '#ff7f00',
    time: '#9d00bf',
    ranking: '#ecff40',
    shop: '#76e0f3',
    coin: '#1443ff'
  };

  const bgColor = backgroundColor || defaultColors[type];

  return (
    <button
      onClick={onClick}
      className="relative rounded-[14px] shrink-0 size-[32px] transition-transform hover:scale-110"
      style={{ backgroundColor: bgColor }}
      title={type}
    >
      {type === 'promo' && (
        <div className="absolute left-[4px] size-[24px] top-[4px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path d={svgPathsFeature.p28a61300} fill="#ECFF40" />
          </svg>
        </div>
      )}

      {type === 'mission' && (
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPathsFeature.p1574e800} fill="#1443FF" />
          </svg>
        </div>
      )}

      {type === 'alert' && (
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[22px] top-1/2">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <path d={svgPathsFeature.p1ddfec00} fill="#090F39" />
          </svg>
        </div>
      )}

      {type === 'streak' && (
        <div className="absolute left-[4px] overflow-clip rounded-[34px] size-[24px] top-[4px]">
          <div className="absolute inset-[2.08%_0_-2.08%_0]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <path d={svgPathsFeature.p365faf80} fill="white" />
            </svg>
          </div>
        </div>
      )}

      {type === 'time' && (
        <div className="absolute left-[4px] size-[24px] top-[4px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path d={svgPathsFeature.p543d680} fill="#ECFF40" />
          </svg>
        </div>
      )}

      {type === 'ranking' && (
        <div className="absolute left-[4px] size-[24px] top-[4px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path d={svgPathsFeature.p2c6c0a00} fill="#1443FF" />
          </svg>
        </div>
      )}

      {type === 'shop' && (
        <div className="absolute left-[4px] size-[24px] top-[4px]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path d={svgPathsFeature.p21487de0} fill="#9D00BF" />
          </svg>
        </div>
      )}

      {type === 'coin' && (
        <div className="absolute left-[6px] size-[20px] top-[6px]">
          <div className="absolute inset-[-10%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <path d={svgPathsFeature.ped7fe00} fill="white" />
              <circle cx="12" cy="12" r="11" stroke="white" strokeWidth="2" />
            </svg>
          </div>
        </div>
      )}
    </button>
  );
}

// Feature Tags
interface FeatureTagProps {
  label: string;
  backgroundColor: string;
  textColor: string;
  iconColor: string;
  onClick?: () => void;
}

function FeatureTag({ label, backgroundColor, textColor, iconColor, onClick }: FeatureTagProps) {
  return (
    <button
      onClick={onClick}
      className="content-stretch flex gap-[8px] h-[36px] items-center justify-center p-[8px] rounded-[32px] shrink-0 transition-transform hover:scale-105"
      style={{ backgroundColor }}
    >
      <div className="relative shrink-0 size-[20px]">
        <div
          className="absolute inset-[10.6%_9.98%_7.92%_8.54%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.708px_-2.12px] mask-size-[20px_20px]"
          style={{ maskImage: `url('${imgTagIcon}')` }}
        >
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2965 16.2965">
            <path d={svgPathsTags.p2e99c280} fill={iconColor} />
          </svg>
        </div>
      </div>
      <p
        className="font-['Onest:SemiBold',sans-serif] font-semibold leading-[14px] relative shrink-0 text-[14px] text-right whitespace-nowrap"
        style={{ color: textColor }}
      >
        {label}
      </p>
    </button>
  );
}

// Brand Logo Badge
interface BrandLogoBadgeProps {
  brandName: string;
  brandColor: string;
  logoSrc: string;
  logoStyles?: React.CSSProperties;
  onClick?: () => void;
}

function BrandLogoBadge({ brandName, brandColor, logoSrc, logoStyles, onClick }: BrandLogoBadgeProps) {
  return (
    <button
      onClick={onClick}
      className="content-stretch flex flex-col items-center justify-center relative rounded-[96px] shrink-0 size-[24px] transition-transform hover:scale-110"
      style={{ backgroundColor: brandColor }}
      title={brandName}
    >
      <div className="relative shrink-0" style={logoStyles}>
        <img alt={brandName} className="max-w-none object-cover pointer-events-none" src={logoSrc} style={logoStyles} />
      </div>
    </button>
  );
}

// Product Logo Badge
interface ProductLogoBadgeProps {
  productName: string;
  logoSrc: string;
  size?: 'small' | 'medium';
  logoWidth?: string;
  logoHeight?: string;
  onClick?: () => void;
}

function ProductLogoBadge({
  productName,
  logoSrc,
  size = 'medium',
  logoWidth,
  logoHeight,
  onClick
}: ProductLogoBadgeProps) {
  const sizeStyles = {
    small: { container: 'size-[46px] rounded-[12px]', padding: 'p-[4px]' },
    medium: { container: 'size-[56px] rounded-[18px]', padding: 'p-0' }
  };

  const { container, padding } = sizeStyles[size];

  return (
    <button
      onClick={onClick}
      className={`bg-white relative shrink-0 transition-transform hover:scale-110 ${container}`}
      title={productName}
    >
      <div
        className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2"
        style={{ width: logoWidth, height: logoHeight }}
      >
        <img
          alt={productName}
          className="absolute inset-0 max-w-none object-contain pointer-events-none size-full"
          src={logoSrc}
        />
      </div>
    </button>
  );
}

// Notification Badge
interface NotificationBadgeProps {
  count?: number;
  hasNotifications?: boolean;
  onClick?: () => void;
}

function NotificationBadge({ count = 0, hasNotifications = false, onClick }: NotificationBadgeProps) {
  const showBadge = hasNotifications && count > 0;

  return (
    <button
      onClick={onClick}
      className="relative shrink-0 size-[24px] transition-transform hover:scale-110"
      title={showBadge ? `${count} notifications` : 'No notifications'}
    >
      {/* Bell Icon */}
      <div
        className="absolute inset-[8.33%_16.67%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4px_-2px] mask-size-[24px_24px]"
        style={{ maskImage: `url('${imgNotifications}')` }}
      >
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
          <path d={svgPaths.p30307600} fill="white" />
        </svg>
      </div>

      {/* Notification Badge (when active) */}
      {showBadge && (
        <div className="absolute bottom-[41.67%] left-1/2 right-0 top-[8.33%]">
          <div className="absolute left-0 size-[12px] top-0">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
              <circle cx="6" cy="6" fill="var(--color-blue-500)" r="6" />
            </svg>
          </div>
          <p className="-translate-x-1/2 absolute font-['Onest:SemiBold',sans-serif] font-semibold leading-[normal] left-1/2 text-[8px] text-center text-white top-[calc(50%-5px)] w-[10px]">
            {count > 99 ? '99+' : count}
          </p>
        </div>
      )}
    </button>
  );
}

// Points Badge
interface PointsBadgeProps {
  points: number | string;
  size?: 'small' | 'medium' | 'large';
  backgroundColor?: string;
  textColor?: string;
  onClick?: () => void;
}

function PointsBadge({
  points,
  size = 'medium',
  backgroundColor = '#76e0f3',
  textColor = 'var(--color-blue-500)',
  onClick
}: PointsBadgeProps) {
  const sizeClasses = {
    small: 'gap-[4px] p-[6px] text-[12px]',
    medium: 'gap-[8px] p-[8px] text-[14px]',
    large: 'gap-[8px] p-[10px] text-[16px]'
  };

  const iconSizes = {
    small: 16,
    medium: 20,
    large: 24
  };

  return (
    <button
      onClick={onClick}
      className={`content-stretch flex items-center justify-center relative rounded-[32px] shrink-0 transition-transform hover:scale-105 ${sizeClasses[size]}`}
      style={{ backgroundColor }}
    >
      <CoinIcon size={iconSizes[size]} />
      <p
        className="font-['Onest:SemiBold',sans-serif] font-semibold leading-[1.1] relative shrink-0 whitespace-nowrap"
        style={{ color: textColor, fontSize: sizeClasses[size].split('text-[')[1]?.split(']')[0] }}
      >
        {points}
      </p>
    </button>
  );
}

// Status/Category Badge
interface StatusBadgeProps {
  label: string;
  variant?: 'active' | 'completed' | 'locked' | 'new' | 'limited' | 'custom';
  customColor?: string;
  customBgColor?: string;
  size?: 'small' | 'medium';
  onClick?: () => void;
}

function StatusBadge({
  label,
  variant = 'custom',
  customColor,
  customBgColor,
  size = 'medium',
  onClick
}: StatusBadgeProps) {
  const variants = {
    active: { bg: 'var(--color-blue-100)', color: 'var(--color-blue-500)' },
    completed: { bg: '#E8F5E9', color: '#2E7D32' },
    locked: { bg: 'var(--color-gray-200)', color: 'var(--color-gray-500)' },
    new: { bg: '#FFF3E0', color: '#E65100' },
    limited: { bg: '#FCE4EC', color: '#C2185B' },
    custom: { bg: customBgColor || 'var(--color-gray-100)', color: customColor || 'var(--color-deep-blue)' }
  };

  const { bg, color } = variants[variant];

  const sizeClasses = {
    small: 'px-[8px] py-[4px] text-[10px]',
    medium: 'px-[12px] py-[6px] text-[12px]'
  };

  return (
    <button
      onClick={onClick}
      className={`content-stretch flex items-center justify-center relative rounded-[32px] shrink-0 transition-transform hover:scale-105 ${sizeClasses[size]}`}
      style={{ backgroundColor: bg }}
    >
      <p
        className="font-['Onest:SemiBold',sans-serif] font-semibold leading-[1.1] relative shrink-0 whitespace-nowrap"
        style={{ color }}
      >
        {label}
      </p>
    </button>
  );
}

// Fulfillment Status Tag
interface FulfillmentStatusTagProps {
  status: 'delivered' | 'pending' | 'rejected' | 'pending-review';
  onClick?: () => void;
}

function FulfillmentStatusTag({ status, onClick }: FulfillmentStatusTagProps) {
  const statusConfig = {
    'delivered': { bg: '#1ea93c', color: '#ffffff', label: 'Entregado' },
    'pending': { bg: '#fec820', color: '#090f39', label: 'Pendiente de entrega' },
    'rejected': { bg: '#d13237', color: '#ffffff', label: 'Rechazado' },
    'pending-review': { bg: '#367eec', color: '#ffffff', label: 'Pendiente de revisión' }
  };

  const { bg, color, label } = statusConfig[status];

  return (
    <button
      onClick={onClick}
      className="content-stretch flex items-center justify-center p-[8px] relative rounded-[32px] shrink-0 transition-transform hover:scale-105"
      style={{ backgroundColor: bg }}
      title={label}
    >
      <p
        className="font-['Onest:SemiBold',sans-serif] font-semibold leading-[1.1] relative shrink-0 text-[12px] whitespace-nowrap"
        style={{ color }}
      >
        {label}
      </p>
    </button>
  );
}

// Small Reward Type Indicator
interface RewardTypeIndicatorProps {
  type: 'controller' | 'game' | 'card' | 'tickets' | 'chips';
  onClick?: () => void;
}

function RewardTypeIndicator({ type, onClick }: RewardTypeIndicatorProps) {
  const rewardConfig = {
    'controller': {
      bg: '#FF7F00',
      img: imgRewardController,
      alt: 'Game Controller',
      imgClass: 'absolute inset-0 max-w-none object-contain pointer-events-none size-full'
    },
    'game': {
      bg: '#ECFF40',
      img: imgRewardGame,
      alt: 'Video Game',
      imgClass: 'absolute h-[113.04%] left-[-3.14%] max-w-none top-0 w-[106.29%]'
    },
    'card': {
      bg: '#76E0F3',
      img: imgRewardCard,
      alt: 'Gift Card',
      imgClass: 'absolute h-[106.93%] left-[-7.5%] max-w-none top-[2.79%] w-[115%]'
    },
    'tickets': {
      bg: '#9D00BF',
      img: imgRewardTickets,
      alt: 'Event Tickets',
      imgClass: 'absolute h-[100.19%] left-[2.86%] max-w-none top-[-2.07%] w-[92.38%]'
    },
    'chips': {
      bg: '#1443FF',
      alt: 'Snack Products',
      isChips: true
    }
  };

  const config = rewardConfig[type];

  return (
    <button
      onClick={onClick}
      className="relative shrink-0 size-[40px] transition-transform hover:scale-110"
      title={config.alt}
    >
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <circle cx="20" cy="20" fill={config.bg} r="20" />
      </svg>
      {config.isChips ? (
        <div className="absolute contents left-[3.13px] top-[5px]">
          <div className="absolute flex h-[30.62px] items-center justify-center left-[3.13px] top-[5px] w-[24.993px]">
            <div className="flex-none rotate-[-20.18deg]">
              <div className="h-[26.403px] relative w-[16.925px]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[101.28%] left-[-30%] max-w-none top-[-0.64%] w-[158%]" src={imgRewardChips1} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex h-[31.917px] items-center justify-center left-[12.24px] top-[5.08px] w-[25.525px]">
            <div className="flex-none rotate-[18.57deg]">
              <div className="h-[27.757px] relative w-[17.602px]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-full left-[-26.92%] max-w-none top-0 w-[157.69%]" src={imgRewardChips2} />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : type === 'controller' ? (
        <div className="absolute inset-[9.38%]">
          <img alt={config.alt} className={config.imgClass} src={config.img} />
        </div>
      ) : type === 'game' ? (
        <div className="-translate-y-1/2 absolute aspect-[18/23] left-[18.75%] right-[18.75%] top-1/2">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt={config.alt} className={config.imgClass} src={config.img} />
          </div>
        </div>
      ) : type === 'card' ? (
        <div className="-translate-y-1/2 absolute aspect-[20/16] left-[15.63%] right-[12.5%] top-1/2">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt={config.alt} className={config.imgClass} src={config.img} />
          </div>
        </div>
      ) : (
        <div className="-translate-y-1/2 absolute aspect-[105/127] left-[15.63%] right-[12.5%] top-1/2">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt={config.alt} className={config.imgClass} src={config.img} />
          </div>
        </div>
      )}
    </button>
  );
}

// Numerical Badge
interface NumericalBadgeProps {
  count: number;
  variant?: 'default' | 'notification' | 'warning';
  size?: 'small' | 'medium';
}

function NumericalBadge({ count, variant = 'default', size = 'medium' }: NumericalBadgeProps) {
  const variants = {
    default: { bg: 'var(--color-blue-500)', color: 'white' },
    notification: { bg: '#FF3D00', color: 'white' },
    warning: { bg: '#FFA000', color: 'white' }
  };

  const { bg, color } = variants[variant];

  const sizeClasses = {
    small: 'min-w-[16px] h-[16px] px-[4px] text-[10px]',
    medium: 'min-w-[20px] h-[20px] px-[6px] text-[12px]'
  };

  return (
    <div
      className={`flex items-center justify-center relative rounded-full shrink-0 ${sizeClasses[size]}`}
      style={{ backgroundColor: bg }}
    >
      <p
        className="font-['Onest:Bold',sans-serif] font-bold leading-none relative shrink-0"
        style={{ color }}
      >
        {count > 99 ? '99+' : count}
      </p>
    </div>
  );
}

function InteractiveDemo() {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [points, setPoints] = useState(250);
  const [notificationCount, setNotificationCount] = useState(3);
  const [featuredActive, setFeaturedActive] = useState(false);
  const [fulfillmentStatus, setFulfillmentStatus] = useState<'delivered' | 'pending' | 'rejected' | 'pending-review'>('delivered');
  const [selectedReward, setSelectedReward] = useState<'controller' | 'game' | 'card' | 'tickets' | 'chips' | null>(null);

  return (
    <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-8 border border-purple-200 mb-16">
      <h3 className="title-large font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>
        Interactive Demo
      </h3>
      <p className="body-large mb-6" style={{ color: 'var(--color-gray-500)' }}>
        Click on brand or product badges to select them, or interact with notifications and points badges.
      </p>

      <div className="space-y-6">
        {/* Brand Logo */}
        <div>
          <p className="label-medium mb-3" style={{ color: 'var(--color-deep-blue)' }}>Brand Logo Color Variations (45px × 24px)</p>
          <div className="bg-white p-4 rounded-lg flex gap-[15px] items-center w-fit">
            <BrandLogo color="white" variant="white" />
            <BrandLogo color="#ECFF40" variant="yellow" />
            <BrandLogo color="#FF7F00" variant="orange" />
            <BrandLogo color="#76E0F3" variant="teal" />
            <BrandLogo color="#1443FF" variant="blue" />
            <BrandLogo color="#9D00BF" variant="purple" />
            <BrandLogo color="#090F39" variant="dark" />
          </div>
        </div>

        {/* Brand Badges */}
        <div>
          <p className="label-medium mb-3" style={{ color: 'var(--color-deep-blue)' }}>Brand Logo Badges (24px)</p>
          <div className="flex gap-[8px] items-center">
            <BrandLogoBadge
              brandName="Cheetos"
              brandColor="#ff7f00"
              logoSrc={imgCheetos}
              logoStyles={{ width: '17.114px', height: '12.352px' }}
              onClick={() => setSelectedBrand('Cheetos')}
            />
            <BrandLogoBadge
              brandName="Doritos"
              brandColor="#ed1c24"
              logoSrc={imgDoritos}
              logoStyles={{ width: '17.893px', height: '15px' }}
              onClick={() => setSelectedBrand('Doritos')}
            />
            <BrandLogoBadge
              brandName="Ruffles"
              brandColor="#00cf3b"
              logoSrc={imgRuffles}
              logoStyles={{ width: '21px', height: '10.5px' }}
              onClick={() => setSelectedBrand('Ruffles')}
            />
            <BrandLogoBadge
              brandName="Chokis"
              brandColor="#1443ff"
              logoSrc={imgChokis}
              logoStyles={{ width: '19.5px', height: '11.866px' }}
              onClick={() => setSelectedBrand('Chokis')}
            />
            <BrandLogoBadge
              brandName="Emperador"
              brandColor="#c10108"
              logoSrc={imgEmperador}
              logoStyles={{ width: '13.75px', height: '16.5px' }}
              onClick={() => setSelectedBrand('Emperador')}
            />
          </div>
        </div>

        {/* Product Badges */}
        <div>
          <p className="label-medium mb-3" style={{ color: 'var(--color-deep-blue)' }}>Product Logo Badges (56px)</p>
          <div className="flex gap-[16px] items-center">
            <ProductLogoBadge
              productName="Cheetos"
              logoSrc={imgCheetos2}
              logoWidth="40px"
              logoHeight="40px"
              onClick={() => setSelectedProduct('Cheetos')}
            />
            <ProductLogoBadge
              productName="Ruffles"
              logoSrc={imgRuffles2}
              logoWidth="40px"
              logoHeight="40px"
              onClick={() => setSelectedProduct('Ruffles')}
            />
            <ProductLogoBadge
              productName="Quaker"
              logoSrc={imgQuaker}
              logoWidth="44px"
              logoHeight="34px"
              onClick={() => setSelectedProduct('Quaker')}
            />
            <ProductLogoBadge
              productName="Doritos"
              logoSrc={imgDoritos2}
              logoWidth="42px"
              logoHeight="42px"
              onClick={() => setSelectedProduct('Doritos')}
            />
            <ProductLogoBadge
              productName="Pepsi"
              logoSrc={imgPepsi}
              logoWidth="35px"
              logoHeight="35px"
              onClick={() => setSelectedProduct('Pepsi')}
            />
          </div>
        </div>

        {/* Notification Badge */}
        <div>
          <p className="label-medium mb-3" style={{ color: 'var(--color-deep-blue)' }}>Notification Badges</p>
          <div className="flex gap-[16px] items-center bg-[#6c6c6c] p-4 rounded-lg w-fit">
            <NotificationBadge count={0} hasNotifications={false} />
            <NotificationBadge
              count={notificationCount}
              hasNotifications={notificationCount > 0}
              onClick={() => setNotificationCount(notificationCount > 0 ? 0 : 3)}
            />
            <NotificationBadge count={15} hasNotifications={true} />
          </div>
          <p className="body-small mt-2" style={{ color: 'var(--color-gray-500)' }}>
            Click the middle bell to toggle notifications (current: {notificationCount})
          </p>
        </div>

        {/* Points Badge */}
        <div>
          <p className="label-medium mb-3" style={{ color: 'var(--color-deep-blue)' }}>Points Badges</p>
          <div className="flex gap-[12px] items-center">
            <PointsBadge points={points} onClick={() => setPoints(points + 10)} />
            <PointsBadge points="2,500" size="large" />
            <PointsBadge points="50" size="small" />
          </div>
        </div>

        {/* Status Icons */}
        <div>
          <p className="label-medium mb-3" style={{ color: 'var(--color-deep-blue)' }}>Status Icons</p>
          <div className="flex gap-[8px] items-center bg-white p-4 rounded-lg w-fit">
            <StatusIcon type="check" color="#115D21" />
            <StatusIcon type="error" color="#D32F2F" />
            <StatusIcon type="copy" color="#757575" />
          </div>
        </div>

        {/* Utility Icons */}
        <div>
          <p className="label-medium mb-3" style={{ color: 'var(--color-deep-blue)' }}>Utility Icons</p>
          <div className="flex gap-[12px] items-center bg-white p-4 rounded-lg w-fit">
            <UtilityIcon type="rocket" />
            <UtilityIcon type="gift" />
            <UtilityIcon type="coin" />
            <UtilityIcon type="barcode" />
          </div>
        </div>

        {/* Feature Title Icons */}
        <div>
          <p className="label-medium mb-3" style={{ color: 'var(--color-deep-blue)' }}>Feature Title Icons (32px)</p>
          <div className="flex gap-[10px] items-center bg-white p-4 rounded-lg flex-wrap">
            <FeatureTitleIcon type="promo" />
            <FeatureTitleIcon type="mission" />
            <FeatureTitleIcon type="alert" />
            <FeatureTitleIcon type="streak" />
            <FeatureTitleIcon type="time" />
            <FeatureTitleIcon type="ranking" />
            <FeatureTitleIcon type="shop" />
            <FeatureTitleIcon type="coin" />
          </div>
        </div>

        {/* Featured Brand Tag */}
        <div>
          <p className="label-medium mb-3" style={{ color: 'var(--color-deep-blue)' }}>Featured Brand Tag</p>
          <div className="flex gap-[16px] items-center bg-white p-4 rounded-lg">
            <FeaturedBrandTag
              brandName="Cheetos"
              brandColor="#ff7f00"
              logoSrc={imgCheetos}
              isActive={featuredActive}
              onClick={() => setFeaturedActive(!featuredActive)}
            />
          </div>
          <p className="body-small mt-2" style={{ color: 'var(--color-gray-500)' }}>
            Click to toggle between default and active states (current: {featuredActive ? 'active' : 'default'})
          </p>
        </div>

        {/* Fulfillment Status Tags */}
        <div>
          <p className="label-medium mb-3" style={{ color: 'var(--color-deep-blue)' }}>Fulfillment Status Tags</p>
          <div className="flex gap-[8px] items-center bg-white p-4 rounded-lg flex-wrap">
            <FulfillmentStatusTag
              status="delivered"
              onClick={() => setFulfillmentStatus('delivered')}
            />
            <FulfillmentStatusTag
              status="pending"
              onClick={() => setFulfillmentStatus('pending')}
            />
            <FulfillmentStatusTag
              status="rejected"
              onClick={() => setFulfillmentStatus('rejected')}
            />
            <FulfillmentStatusTag
              status="pending-review"
              onClick={() => setFulfillmentStatus('pending-review')}
            />
          </div>
          <p className="body-small mt-2" style={{ color: 'var(--color-gray-500)' }}>
            Click any status tag to select it (current: {fulfillmentStatus})
          </p>
        </div>

        {/* Small Reward Type Indicators */}
        <div>
          <p className="label-medium mb-3" style={{ color: 'var(--color-deep-blue)' }}>Small Reward Type Indicators (40px)</p>
          <div className="flex gap-[12px] items-center bg-white p-4 rounded-lg">
            <RewardTypeIndicator
              type="controller"
              onClick={() => setSelectedReward('controller')}
            />
            <RewardTypeIndicator
              type="game"
              onClick={() => setSelectedReward('game')}
            />
            <RewardTypeIndicator
              type="card"
              onClick={() => setSelectedReward('card')}
            />
            <RewardTypeIndicator
              type="tickets"
              onClick={() => setSelectedReward('tickets')}
            />
            <RewardTypeIndicator
              type="chips"
              onClick={() => setSelectedReward('chips')}
            />
          </div>
          <p className="body-small mt-2" style={{ color: 'var(--color-gray-500)' }}>
            Click any reward icon to select it{selectedReward && ` (current: ${selectedReward})`}
          </p>
        </div>

        {/* Result Display */}
        {(selectedBrand || selectedProduct) && (
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            {selectedBrand && (
              <p className="label-large mb-2" style={{ color: 'var(--color-deep-blue)' }}>
                Selected Brand: <span className="font-normal">{selectedBrand}</span>
              </p>
            )}
            {selectedProduct && (
              <p className="label-large" style={{ color: 'var(--color-deep-blue)' }}>
                Selected Product: <span className="font-normal">{selectedProduct}</span>
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function BadgesShowcase() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h2 className="headline-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>
          Badges, Icons & Indicators
        </h2>
        <p className="title-large" style={{ color: 'var(--color-deep-blue)' }}>
          This comprehensive category encompasses all small, highly functional visual elements used throughout the JOY app. These components—including brand and product badges, feature title icons, status and utility icons, notification indicators, and numerical badges—are essential for enhancing scannability, communicating value, categorizing content, providing immediate feedback, and creating a cohesive visual language throughout the user experience.
        </p>
      </div>

      <InteractiveDemo />

      <div className="space-y-12 mb-16">
        <div>
          <h3 className="title-large font-bold mb-6" style={{ color: 'var(--color-deep-blue)' }}>
            Badge Types
          </h3>

          <div className="space-y-8">
            {/* Brand Logo */}
            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>
                Brand Logo
              </p>
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <div className="space-y-6">
                  <div>
                    <p className="body-medium mb-4 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Brand Logo Color Variations
                    </p>
                    <div className="content-stretch flex gap-[15px] items-center">
                      <BrandLogo color="white" variant="white" />
                      <BrandLogo color="#ECFF40" variant="yellow" />
                      <BrandLogo color="#FF7F00" variant="orange" />
                      <BrandLogo color="#76E0F3" variant="teal" />
                      <BrandLogo color="#1443FF" variant="blue" />
                      <BrandLogo color="#9D00BF" variant="purple" />
                      <BrandLogo color="#090F39" variant="dark" />
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                    <p className="body-medium mb-3 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Purpose and Functionality
                    </p>
                    <p className="body-medium mb-4" style={{ color: 'var(--color-gray-500)' }}>
                      This component showcases the JOY brand logo in its various approved color applications. Its purpose is to define and standardize how the logo should appear when placed on different backgrounds throughout the application and communications.
                    </p>
                    <p className="body-medium mb-3 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Purpose
                    </p>
                    <p className="body-medium" style={{ color: 'var(--color-gray-500)' }}>
                      The core function of this component is to ensure the logo maintains maximum visibility, legibility, and brand consistency regardless of the color environment. It demonstrates the flexibility of the logo across the entire JOY palette while strictly adhering to contrast rules.
                    </p>
                  </div>
                </div>
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                The JOY brand logo in seven approved color variations (45px × 24px). Use appropriate colors based on background to ensure visibility and brand consistency.
              </p>
            </div>

            {/* Brand Logo Badges */}
            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>
                Brand Logo Badges
              </p>
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <div className="space-y-4">
                  <div className="flex gap-[8px] items-center">
                    <BrandLogoBadge
                      brandName="Cheetos"
                      brandColor="#ff7f00"
                      logoSrc={imgCheetos}
                      logoStyles={{ width: '17.114px', height: '12.352px' }}
                    />
                    <BrandLogoBadge
                      brandName="Doritos"
                      brandColor="#ed1c24"
                      logoSrc={imgDoritos}
                      logoStyles={{ width: '17.893px', height: '15px' }}
                    />
                    <BrandLogoBadge
                      brandName="Ruffles"
                      brandColor="#00cf3b"
                      logoSrc={imgRuffles}
                      logoStyles={{ width: '21px', height: '10.5px' }}
                    />
                    <BrandLogoBadge
                      brandName="Chokis"
                      brandColor="#1443ff"
                      logoSrc={imgChokis}
                      logoStyles={{ width: '19.5px', height: '11.866px' }}
                    />
                    <BrandLogoBadge
                      brandName="Emperador"
                      brandColor="#c10108"
                      logoSrc={imgEmperador}
                      logoStyles={{ width: '13.75px', height: '16.5px' }}
                    />
                  </div>
                </div>
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Circular badges (24px) with brand logos for quick recognition of participating partners. Each brand has its distinctive color.
              </p>
            </div>

            {/* Product Logo Badges */}
            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>
                Product Logo Badges
              </p>
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <div className="space-y-4">
                  <div className="flex gap-[16px] items-center">
                    <ProductLogoBadge
                      productName="Cheetos"
                      logoSrc={imgCheetos2}
                      logoWidth="40px"
                      logoHeight="40px"
                    />
                    <ProductLogoBadge
                      productName="Ruffles"
                      logoSrc={imgRuffles2}
                      logoWidth="40px"
                      logoHeight="40px"
                    />
                    <ProductLogoBadge
                      productName="Quaker"
                      logoSrc={imgQuaker}
                      logoWidth="44px"
                      logoHeight="34px"
                    />
                    <ProductLogoBadge
                      productName="Doritos"
                      logoSrc={imgDoritos2}
                      logoWidth="42px"
                      logoHeight="42px"
                    />
                  </div>
                  <div className="flex gap-[16px] items-center">
                    <ProductLogoBadge
                      productName="Pepsi"
                      logoSrc={imgPepsi}
                      logoWidth="35px"
                      logoHeight="35px"
                    />
                    <ProductLogoBadge
                      productName="Ruffles Original"
                      logoSrc={imgRufflesAlt}
                      logoWidth="40px"
                      logoHeight="40px"
                    />
                    <ProductLogoBadge
                      productName="Quaker"
                      logoSrc={imgQuaker}
                      size="small"
                      logoWidth="38px"
                      logoHeight="30px"
                    />
                  </div>
                </div>
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Square badges with white backgrounds for product logos. Available in two sizes: 56px (medium) and 46px (small).
              </p>
            </div>

            {/* Notification Badges */}
            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>
                Notification Badges
              </p>
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <div className="space-y-4">
                  <div className="flex gap-[24px] items-center bg-[#6c6c6c] p-6 rounded-lg w-fit">
                    <div className="flex flex-col items-center gap-2">
                      <NotificationBadge count={0} hasNotifications={false} />
                      <p className="body-small text-white">No notifications</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <NotificationBadge count={3} hasNotifications={true} />
                      <p className="body-small text-white">3 new</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <NotificationBadge count={15} hasNotifications={true} />
                      <p className="body-small text-white">15 new</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <NotificationBadge count={150} hasNotifications={true} />
                      <p className="body-small text-white">99+ new</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Bell icon with optional notification count badge. Used to communicate new alerts or updates. Shows "99+" for counts over 99.
              </p>
            </div>

            {/* Points Badges */}
            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>
                Points Badges
              </p>
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <div className="space-y-4">
                  <div className="flex gap-[12px] items-center flex-wrap">
                    <PointsBadge points={250} size="small" />
                    <PointsBadge points={500} size="medium" />
                    <PointsBadge points="1,250" size="large" />
                  </div>
                  <div className="flex gap-[12px] items-center flex-wrap">
                    <PointsBadge points="Tienda recomendada" size="medium" />
                    <PointsBadge points="10 puntos" size="small" backgroundColor="#ECFF40" textColor="var(--color-deep-blue)" />
                    <PointsBadge points="500 pts" size="medium" backgroundColor="#9D00BF" textColor="white" />
                  </div>
                </div>
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Badges displaying point values with coin icon. Available in three sizes and customizable colors.
              </p>
            </div>

            {/* Status/Category Badges */}
            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>
                Status & Category Badges
              </p>
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <div className="space-y-4">
                  <div className="flex gap-[8px] items-center flex-wrap">
                    <StatusBadge label="Activa" variant="active" />
                    <StatusBadge label="Completada" variant="completed" />
                    <StatusBadge label="Bloqueada" variant="locked" />
                    <StatusBadge label="Nuevo" variant="new" />
                    <StatusBadge label="Tiempo limitado" variant="limited" />
                  </div>
                  <div className="flex gap-[8px] items-center flex-wrap">
                    <StatusBadge label="Campaña" customBgColor="var(--color-blue-100)" customColor="var(--color-blue-500)" />
                    <StatusBadge label="Recompensa" customBgColor="#FFF3E0" customColor="#E65100" />
                    <StatusBadge label="Producto" customBgColor="#E8F5E9" customColor="#2E7D32" />
                  </div>
                  <div className="flex gap-[8px] items-center flex-wrap">
                    <StatusBadge label="Popular" size="small" variant="active" />
                    <StatusBadge label="Nuevo" size="small" variant="new" />
                    <StatusBadge label="Hot" size="small" customBgColor="#FF3D00" customColor="white" />
                  </div>
                </div>
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Text-based badges for statuses, categories, and tags. Available in predefined variants or custom colors.
              </p>
            </div>

            {/* Numerical Badges */}
            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>
                Numerical Badges
              </p>
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <div className="space-y-4">
                  <div className="flex gap-[16px] items-center flex-wrap">
                    <div className="flex items-center gap-2">
                      <span className="body-medium" style={{ color: 'var(--color-deep-blue)' }}>Notificaciones</span>
                      <NumericalBadge count={3} variant="notification" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="body-medium" style={{ color: 'var(--color-deep-blue)' }}>Pendientes</span>
                      <NumericalBadge count={12} variant="warning" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="body-medium" style={{ color: 'var(--color-deep-blue)' }}>Mensajes</span>
                      <NumericalBadge count={150} variant="default" />
                    </div>
                  </div>
                  <div className="flex gap-[16px] items-center flex-wrap">
                    <NumericalBadge count={5} variant="notification" size="small" />
                    <NumericalBadge count={25} variant="default" size="small" />
                    <NumericalBadge count={99} variant="warning" size="medium" />
                    <NumericalBadge count={150} variant="notification" size="medium" />
                  </div>
                </div>
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Circular numerical indicators for counts, notifications, and unread items. Shows "99+" for values over 99.
              </p>
            </div>

            {/* Status Icons */}
            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>
                Status & Alert Icons
              </p>
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <div className="space-y-6">
                  <div>
                    <p className="body-medium mb-3 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Status Indicators (24px)
                    </p>
                    <div className="flex gap-[8px] items-center">
                      <div className="flex flex-col items-center gap-2">
                        <StatusIcon type="check" color="#115D21" />
                        <p className="body-small" style={{ color: 'var(--color-gray-500)' }}>Success</p>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <StatusIcon type="error" color="#D32F2F" />
                        <p className="body-small" style={{ color: 'var(--color-gray-500)' }}>Error</p>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <StatusIcon type="copy" color="#757575" />
                        <p className="body-small" style={{ color: 'var(--color-gray-500)' }}>Copy/File</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="body-medium mb-3 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Color Variants
                    </p>
                    <div className="flex gap-[12px] items-center flex-wrap">
                      <StatusIcon type="check" color="#115D21" />
                      <StatusIcon type="check" color="var(--color-blue-500)" />
                      <StatusIcon type="error" color="#D32F2F" />
                      <StatusIcon type="error" color="#E65100" />
                      <StatusIcon type="copy" color="#757575" />
                      <StatusIcon type="copy" color="var(--color-deep-blue)" />
                    </div>
                  </div>
                </div>
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Icons for communicating task completion, alerts, and documentation. Use semantic colors (green for success, red for errors).
              </p>
            </div>

            {/* Utility Icons */}
            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>
                Feature & Utility Icons
              </p>
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <div className="space-y-6">
                  <div>
                    <p className="body-medium mb-3 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Feature Tags (20px & 16px)
                    </p>
                    <div className="flex gap-[12px] items-center">
                      <div className="flex flex-col items-center gap-2">
                        <UtilityIcon type="rocket" />
                        <p className="body-small" style={{ color: 'var(--color-gray-500)' }}>Campaign</p>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <UtilityIcon type="gift" />
                        <p className="body-small" style={{ color: 'var(--color-gray-500)' }}>Reward</p>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <UtilityIcon type="coin" />
                        <p className="body-small" style={{ color: 'var(--color-gray-500)' }}>Points</p>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <UtilityIcon type="barcode" />
                        <p className="body-small" style={{ color: 'var(--color-gray-500)' }}>Scan</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="body-medium mb-3 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Color Variants
                    </p>
                    <div className="flex gap-[12px] items-center flex-wrap">
                      <UtilityIcon type="rocket" color="var(--color-blue-500)" />
                      <UtilityIcon type="rocket" color="#FF7F00" />
                      <UtilityIcon type="gift" color="var(--color-blue-500)" />
                      <UtilityIcon type="gift" color="#9D00BF" />
                      <UtilityIcon type="coin" color="var(--color-blue-500)" />
                      <UtilityIcon type="coin" color="#ECFF40" />
                      <UtilityIcon type="barcode" color="var(--color-blue-500)" />
                      <UtilityIcon type="barcode" color="var(--color-deep-blue)" />
                    </div>
                  </div>
                </div>
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Visual tags for campaign features, rewards, points, and scanning. Typically use brand colors (Blue 500) for high visual appeal.
              </p>
            </div>

            {/* Feature Title Icons */}
            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>
                Feature Title Icons
              </p>
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <div className="space-y-6">
                  <div>
                    <p className="body-medium mb-3 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Category Icons (32px)
                    </p>
                    <div className="flex gap-[10px] items-center flex-wrap">
                      <div className="flex flex-col items-center gap-2">
                        <FeatureTitleIcon type="promo" />
                        <p className="body-small" style={{ color: 'var(--color-gray-500)' }}>Promos</p>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <FeatureTitleIcon type="mission" />
                        <p className="body-small" style={{ color: 'var(--color-gray-500)' }}>Missions</p>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <FeatureTitleIcon type="alert" />
                        <p className="body-small" style={{ color: 'var(--color-gray-500)' }}>Alerts</p>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <FeatureTitleIcon type="streak" />
                        <p className="body-small" style={{ color: 'var(--color-gray-500)' }}>Streaks</p>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <FeatureTitleIcon type="time" />
                        <p className="body-small" style={{ color: 'var(--color-gray-500)' }}>Limited Time</p>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <FeatureTitleIcon type="ranking" />
                        <p className="body-small" style={{ color: 'var(--color-gray-500)' }}>Ranking</p>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <FeatureTitleIcon type="shop" />
                        <p className="body-small" style={{ color: 'var(--color-gray-500)' }}>Shop</p>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <FeatureTitleIcon type="coin" />
                        <p className="body-small" style={{ color: 'var(--color-gray-500)' }}>Main Mission</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="body-medium mb-3 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Custom Color Combinations
                    </p>
                    <div className="flex gap-[10px] items-center flex-wrap">
                      <FeatureTitleIcon type="mission" backgroundColor="var(--color-blue-500)" />
                      <FeatureTitleIcon type="ranking" backgroundColor="#FF7F00" />
                      <FeatureTitleIcon type="shop" backgroundColor="#9D00BF" />
                      <FeatureTitleIcon type="streak" backgroundColor="#ECFF40" />
                      <FeatureTitleIcon type="coin" backgroundColor="var(--color-blue-100)" />
                      <FeatureTitleIcon type="promo" backgroundColor="#76e0f3" />
                    </div>
                  </div>
                </div>
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Colorful 32px rounded icons for categorizing features, missions, and content types. Always paired with descriptive text labels for context.
              </p>
            </div>

            {/* Feature Tags */}
            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>
                Feature Tags
              </p>
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <div className="space-y-6">
                  <div>
                    <p className="body-medium mb-3 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Color Combinations
                    </p>
                    <div className="flex gap-[10px] items-center flex-wrap">
                      <FeatureTag label="New" backgroundColor="#ECFF40" textColor="#1443FF" iconColor="#1443FF" />
                      <FeatureTag label="Limited" backgroundColor="#ECFF40" textColor="#9D00BF" iconColor="#9D00BF" />
                      <FeatureTag label="Featured" backgroundColor="#FF7F00" textColor="white" iconColor="white" />
                      <FeatureTag label="Trending" backgroundColor="#76E0F3" textColor="#1443FF" iconColor="#1443FF" />
                      <FeatureTag label="Popular" backgroundColor="#76E0F3" textColor="#9D00BF" iconColor="#9D00BF" />
                      <FeatureTag label="Hot" backgroundColor="#9D00BF" textColor="#ECFF40" iconColor="#ECFF40" />
                    </div>
                  </div>
                  <div>
                    <p className="body-medium mb-3 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Additional Variants
                    </p>
                    <div className="flex gap-[10px] items-center flex-wrap">
                      <FeatureTag label="Exclusive" backgroundColor="#9D00BF" textColor="white" iconColor="white" />
                      <FeatureTag label="Bonus" backgroundColor="#9D00BF" textColor="#ADECF8" iconColor="#ADECF8" />
                      <FeatureTag label="Reward" backgroundColor="#1443FF" textColor="white" iconColor="white" />
                      <FeatureTag label="Special" backgroundColor="#1443FF" textColor="#ECFF40" iconColor="#ECFF40" />
                      <FeatureTag label="Promo" backgroundColor="#1443FF" textColor="#76E0F3" iconColor="#76E0F3" />
                    </div>
                  </div>
                </div>
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Pill-shaped tags with icon and text for categorizing content. Use vibrant color combinations from the brand palette for high visual differentiation.
              </p>
            </div>

            {/* Featured Brand Tag */}
            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>
                Featured Brand Tag
              </p>
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <div className="space-y-6">
                  <div>
                    <p className="body-medium mb-3 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      States
                    </p>
                    <div className="flex gap-[16px] items-center flex-wrap">
                      <div className="flex flex-col items-center gap-2">
                        <FeaturedBrandTag brandName="Cheetos" brandColor="#ff7f00" logoSrc={imgCheetos} isActive={false} />
                        <p className="body-small" style={{ color: 'var(--color-gray-500)' }}>Default</p>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <FeaturedBrandTag brandName="Cheetos" brandColor="#ff7f00" logoSrc={imgCheetos} isActive={true} />
                        <p className="body-small" style={{ color: 'var(--color-gray-500)' }}>Active</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="body-medium mb-3 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Brand Variations
                    </p>
                    <div className="flex gap-[12px] items-center flex-wrap">
                      <FeaturedBrandTag brandName="Cheetos" brandColor="#ff7f00" logoSrc={imgCheetos} />
                      <FeaturedBrandTag brandName="Doritos" brandColor="#ed1c24" logoSrc={imgDoritos} />
                      <FeaturedBrandTag brandName="Ruffles" brandColor="#00cf3b" logoSrc={imgRuffles} />
                      <FeaturedBrandTag brandName="Chokis" brandColor="#1443ff" logoSrc={imgChokis} />
                      <FeaturedBrandTag brandName="Emperador" brandColor="#c10108" logoSrc={imgEmperador} />
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                    <p className="body-medium mb-3 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Purpose and Functionality
                    </p>
                    <p className="body-medium mb-4" style={{ color: 'var(--color-gray-500)' }}>
                      The Featured Brand Tag provides immediate visual recognition of promotional content. Its function is to draw the user's eye to high-priority, exclusive, or limited-time offers, using a clear visual style that integrates the brand's logo directly into the tag.
                    </p>
                    <p className="body-medium mb-3 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Usage Guidelines
                    </p>
                    <p className="body-medium" style={{ color: 'var(--color-gray-500)' }}>
                      This tag should only be used for high-value campaigns or specific promotional products that are intended to be showcased prominently. The component is mandatory when an item is featured and is explicitly tied to a single brand.
                    </p>
                  </div>
                </div>
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Specialized tag highlighting featured content in partnership with specific brands. Available in default and active states with integrated brand logo.
              </p>
            </div>

            {/* Fulfillment Status Tags */}
            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>
                Fulfillment Status Tags
              </p>
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <div className="space-y-6">
                  <div>
                    <p className="body-medium mb-3 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Status States
                    </p>
                    <div className="flex gap-[8px] items-center flex-wrap">
                      <div className="flex flex-col items-center gap-2">
                        <FulfillmentStatusTag status="delivered" />
                        <p className="body-small" style={{ color: 'var(--color-gray-500)' }}>Delivered</p>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <FulfillmentStatusTag status="pending" />
                        <p className="body-small" style={{ color: 'var(--color-gray-500)' }}>Pending</p>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <FulfillmentStatusTag status="rejected" />
                        <p className="body-small" style={{ color: 'var(--color-gray-500)' }}>Rejected</p>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <FulfillmentStatusTag status="pending-review" />
                        <p className="body-small" style={{ color: 'var(--color-gray-500)' }}>Pending Review</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                    <p className="body-medium mb-3 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Purpose and Functionality
                    </p>
                    <p className="body-medium mb-4" style={{ color: 'var(--color-gray-500)' }}>
                      This component is a crucial part of the Status & Feedback category, designed to clearly communicate the current fulfillment status of a reward, redemption, or submission within the JOY app's loyalty system. It provides immediate, color-coded feedback to eliminate uncertainty, reduce user anxiety (especially regarding delivery), and clearly categorize items in a list. It uses the Semantic Colors palette to ensure instant comprehension of the status.
                    </p>
                    <p className="body-medium mb-3 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Elements and States
                    </p>
                    <ul className="space-y-2 mb-4" style={{ color: 'var(--color-gray-500)' }}>
                      <li className="body-medium flex gap-2">
                        <span>•</span>
                        <span><strong>Entregado (Delivered):</strong> Green background (#1ea93c) with white text - indicates successful completion</span>
                      </li>
                      <li className="body-medium flex gap-2">
                        <span>•</span>
                        <span><strong>Pendiente de entrega (Pending Delivery):</strong> Yellow background (#fec820) with dark text - indicates item is awaiting delivery</span>
                      </li>
                      <li className="body-medium flex gap-2">
                        <span>•</span>
                        <span><strong>Rechazado (Rejected):</strong> Red background (#d13237) with white text - indicates rejection or failure</span>
                      </li>
                      <li className="body-medium flex gap-2">
                        <span>•</span>
                        <span><strong>Pendiente de revisión (Pending Review):</strong> Blue background (#367eec) with white text - indicates item is under review</span>
                      </li>
                    </ul>
                    <p className="body-medium mb-3 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Usage Guidelines
                    </p>
                    <p className="body-medium" style={{ color: 'var(--color-gray-500)' }}>
                      Use these tags to display the current state of transactions, rewards, redemptions, or submissions. The semantic color system ensures users can quickly scan and understand status at a glance, reducing cognitive load and improving the user experience.
                    </p>
                  </div>
                </div>
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Status tags using semantic colors to communicate the fulfillment state of rewards, redemptions, and submissions with instant visual clarity.
              </p>
            </div>

            {/* Small Reward Type Indicators */}
            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>
                Small Reward Type Indicators
              </p>
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <div className="space-y-6">
                  <div>
                    <p className="body-medium mb-3 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Reward Types
                    </p>
                    <div className="flex gap-[12px] items-center flex-wrap">
                      <div className="flex flex-col items-center gap-2">
                        <RewardTypeIndicator type="controller" />
                        <p className="body-small" style={{ color: 'var(--color-gray-500)' }}>Tech/Gaming</p>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <RewardTypeIndicator type="game" />
                        <p className="body-small" style={{ color: 'var(--color-gray-500)' }}>Video Games</p>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <RewardTypeIndicator type="card" />
                        <p className="body-small" style={{ color: 'var(--color-gray-500)' }}>Gift Cards</p>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <RewardTypeIndicator type="tickets" />
                        <p className="body-small" style={{ color: 'var(--color-gray-500)' }}>Events</p>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <RewardTypeIndicator type="chips" />
                        <p className="body-small" style={{ color: 'var(--color-gray-500)' }}>Products</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                    <p className="body-medium mb-3 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Purpose and Functionality
                    </p>
                    <p className="body-medium mb-4" style={{ color: 'var(--color-gray-500)' }}>
                      This component is a collection of high-impact visual icons designed to represent the diverse range of prizes and rewards a user can win within the JOY application. The Reward Type Indicators serve as immediate visual tags for the nature of the prize, enhancing the visual appeal of reward catalogs and campaigns while quickly communicating the category of the prize (e.g., tech, cash, experiences). This distinction helps users quickly filter and prioritize rewards based on their personal interests.
                    </p>
                    <p className="body-medium mb-3 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Elements and Use
                    </p>
                    <p className="body-medium mb-4" style={{ color: 'var(--color-gray-500)' }}>
                      Each indicator consists of a simplified graphic of a prize set against a bold, solid-color circle from the Brand Colors palette. This approach maximizes visual clarity and aligns with the app's energetic aesthetic. The 40px circular format ensures consistency across all reward types while maintaining high visual impact.
                    </p>
                    <p className="body-medium mb-3 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Color Associations
                    </p>
                    <ul className="space-y-2" style={{ color: 'var(--color-gray-500)' }}>
                      <li className="body-medium flex gap-2">
                        <span>•</span>
                        <span><strong>Orange (#FF7F00):</strong> Tech and gaming accessories (controllers, devices)</span>
                      </li>
                      <li className="body-medium flex gap-2">
                        <span>•</span>
                        <span><strong>Neon Yellow (#ECFF40):</strong> Video games and digital entertainment</span>
                      </li>
                      <li className="body-medium flex gap-2">
                        <span>•</span>
                        <span><strong>Teal (#76E0F3):</strong> Gift cards and monetary rewards</span>
                      </li>
                      <li className="body-medium flex gap-2">
                        <span>•</span>
                        <span><strong>Purple (#9D00BF):</strong> Event tickets and experiences</span>
                      </li>
                      <li className="body-medium flex gap-2">
                        <span>•</span>
                        <span><strong>Blue (#1443FF):</strong> Physical products and snacks</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Circular 40px icons with brand-colored backgrounds representing different prize categories. Use to visually categorize rewards and enhance scannability in reward catalogs.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="title-large font-bold mb-6" style={{ color: 'var(--color-deep-blue)' }}>
            Use Cases
          </h3>
          <ul className="space-y-3">
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Brand Identity:</strong> Display the JOY logo in the appropriate color variation to maintain visibility and brand consistency across different backgrounds and themes</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Brand Recognition:</strong> Use brand logo badges to quickly identify participating partners in campaigns and rewards</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Product Identification:</strong> Display product logos in white-background badges for clean, consistent product representation</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Points Display:</strong> Show point values, rewards, and recommendations with points badges</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Status Communication:</strong> Indicate campaign status, completion state, or availability with status badges</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Notification Alerts:</strong> Use notification badges to communicate new alerts, updates, or unread content within the app</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Numerical Indicators:</strong> Display unread counts, pending actions, or alerts with numerical badges</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Interactive Filtering:</strong> Use brand badges as clickable filters to show related products or content</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Status Communication:</strong> Use status icons to indicate success, errors, or documentation across the app</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Feature Tagging:</strong> Apply utility icons to cards and lists to visually identify campaigns, rewards, points, and scan features</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Content Categorization:</strong> Use feature title icons alongside headers to visually distinguish different content sections like missions, rankings, or limited-time offers</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Navigation Headers:</strong> Pair feature title icons with descriptive text in section headers for quick visual identification</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Content Labeling:</strong> Use feature tags to quickly categorize missions, rewards, and campaigns with labels like "New", "Limited", or "Trending"</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Visual Emphasis:</strong> Apply feature tags to draw attention to special offers, exclusive content, or time-sensitive opportunities</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Featured Brand Promotion:</strong> Use Featured Brand Tags to highlight high-value campaigns or promotional products tied to specific partner brands</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Interactive Filtering:</strong> Make Featured Brand Tags clickable to filter content by featured brand or navigate to dedicated promotional sections</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Fulfillment Tracking:</strong> Use Fulfillment Status Tags to display the delivery or processing state of rewards, redemptions, and submissions</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Order History:</strong> Display Fulfillment Status Tags in transaction lists to help users quickly understand the current state of their orders</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Submission Feedback:</strong> Use status tags to communicate the review state of user-submitted content or claims within campaigns</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Reward Categorization:</strong> Use Small Reward Type Indicators to visually tag different prize categories in reward catalogs and campaign listings</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Visual Filtering:</strong> Display reward type icons to help users quickly scan and identify rewards that match their interests</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Prize Preview:</strong> Use reward indicators as compact visual previews on reward cards, mission completions, and promotional banners</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Category Identification:</strong> Apply reward type indicators to quickly distinguish between tech prizes, experiences, gift cards, and physical products</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h3 className="title-large font-bold mb-3" style={{ color: 'var(--color-deep-blue)' }}>
          Best Practices
        </h3>
        <ul className="space-y-2">
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Select brand logo color variations based on background contrast - use white on dark backgrounds, dark on light backgrounds, and vibrant colors for special emphasis</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Maintain the approved color palette for the JOY logo to ensure brand consistency across all touchpoints</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Use consistent badge sizes within the same context to maintain visual hierarchy</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Keep badge text concise - aim for 1-3 words maximum for status badges</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Ensure sufficient color contrast between badge background and text for readability</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Use brand logo badges in groups to show multiple participating partners at once</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Display product logo badges with consistent sizing to maintain visual balance in product grids</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Show notification badges only when there are actual unread items to maintain credibility</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Place notification count badges in the top-right corner of bell icons for consistent positioning</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Reserve numerical badges for truly important or urgent items to avoid notification fatigue</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Use hover states on interactive badges to indicate clickability</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Maintain brand colors for brand logo badges to ensure instant recognition</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Use points badges to highlight value and create engagement in gamified experiences</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Clear notification badges immediately when the user views their notifications to maintain accuracy</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Use semantic colors for status icons - green for success, red for errors, gray for neutral states</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Apply utility icons consistently to identify specific features like campaigns (rocket), rewards (gift), or scanning (barcode)</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Use brand colors (Blue 500) for utility icons to maintain visual energy and alignment with the JOY brand</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Pair icons with text labels when first introducing a feature to establish the visual language</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Always display feature title icons alongside descriptive text - never use them as standalone navigational elements</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Maintain consistent icon-to-color mappings throughout the app so users quickly learn to associate visual cues with specific features</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Use feature title icons in section headers, mission lists, and areas where content needs clear visual categorization</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Leverage the modular design - both the icon graphic and background color can be customized for new features while maintaining size consistency</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Use vibrant colors from the secondary brand palette to make each feature category instantly recognizable and engaging</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Reserve Featured Brand Tags exclusively for high-priority promotional content - overuse will diminish their special status</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Use the active state (blue background) for Featured Brand Tags when the user has selected or interacted with the featured content</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Maintain brand logo colors within Featured Brand Tags to ensure instant brand recognition and visual consistency</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Use Fulfillment Status Tags consistently across all transaction and order-related interfaces to maintain a predictable user experience</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Never modify the semantic colors of Fulfillment Status Tags - green always means delivered/success, yellow means pending, red means rejected/error, and blue means under review</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Update fulfillment status tags in real-time when the status changes to keep users informed of progress</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Pair Fulfillment Status Tags with additional context (dates, tracking numbers) when displaying detailed order information</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Use Small Reward Type Indicators consistently - maintain the same color-to-category mapping across the entire app (orange for tech, yellow for games, etc.)</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Display reward type indicators prominently on reward cards to help users quickly identify prize categories without reading detailed descriptions</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Keep the 40px size consistent across all reward type indicators to maintain visual balance and hierarchy</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Use reward type indicators in grids and lists to create visual variety while maintaining categorical clarity</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Never modify the brand color palette for reward indicators - the color associations help users build mental models of prize categories</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Combine reward type indicators with points badges and status badges to provide comprehensive reward information at a glance</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
