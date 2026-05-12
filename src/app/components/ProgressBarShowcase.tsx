import { useState } from 'react';

// Toast Notification imports
import svgPaths from "../../imports/CardInfo-3-3/svg-xizj6dma5";
import { imgCheckCircle } from "../../imports/CardInfo-3-3/svg-6b1zd";

// Mission Tracker imports
import svgPathsMission from "../../imports/CardInfo-4-3/svg-qh63pn3w5e";

// Checkbox & Radio Button imports
import svgPathsCheckbox from "../../imports/CardInfo-3-4/svg-i1c2e7i853";
import { imgCheckBoxOutlineBlank } from "../../imports/CardInfo-3-4/svg-jzkxl";

// Progress Bar component
interface ProgressBarProps {
  current: number;
  total: number;
  barColor?: string;
  trackColor?: string;
  showLabel?: boolean;
  height?: number;
  onChange?: (value: number) => void;
}

function ProgressBar({
  current,
  total,
  barColor = '#ff7f00',
  trackColor = '#efefef',
  showLabel = true,
  height = 5,
  onChange
}: ProgressBarProps) {
  const percentage = Math.min(100, Math.max(0, (current / total) * 100));

  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative w-full">
      <div className="grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
        <div
          className="col-1 ml-0 mt-0 relative rounded-[100px] row-1 w-full"
          style={{ backgroundColor: trackColor, height: `${height}px` }}
        />
        <div
          className="col-1 ml-0 mt-0 relative rounded-[100px] row-1 transition-all duration-300 ease-out"
          style={{ backgroundColor: barColor, height: `${height}px`, width: `${percentage}%` }}
        />
      </div>
      {showLabel && (
        <div className="content-stretch flex font-['Onest:Regular',sans-serif] font-normal gap-[2px] items-end leading-[normal] relative shrink-0 text-[#3a3f5e] text-[14px] text-center whitespace-nowrap">
          <p className="relative shrink-0">{current}</p>
          <p className="relative shrink-0">/</p>
          <p className="relative shrink-0">{total}</p>
        </div>
      )}
    </div>
  );
}

// Toast Notification component
interface ToastNotificationProps {
  type: 'success' | 'info' | 'error' | 'warning';
  message: string;
  showClose?: boolean;
  onClose?: () => void;
}

function ToastNotification({ type, message, showClose = false, onClose }: ToastNotificationProps) {
  const typeConfig = {
    success: {
      bg: '#b9e4c3',
      textColor: '#115d21',
      iconColor: '#115d21',
      icon: 'check'
    },
    info: {
      bg: '#c1d7f9',
      textColor: '#1e4582',
      iconColor: '#1e4582',
      icon: 'check'
    },
    error: {
      bg: '#f1bfc1',
      textColor: '#731c1e',
      iconColor: '#731c1e',
      icon: 'error'
    },
    warning: {
      bg: '#ffeeba',
      textColor: '#8c6e12',
      iconColor: '#8c6e12',
      icon: 'error'
    }
  };

  const config = typeConfig[type];

  return (
    <div
      className="relative rounded-[16px] shrink-0 w-full"
      style={{ backgroundColor: config.bg }}
    >
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className={`content-stretch flex items-center p-[16px] relative size-full ${showClose ? 'justify-between' : 'gap-[8px]'}`}>
          {showClose ? (
            <>
              <div className="content-stretch flex gap-[6px] items-center relative flex-1 min-w-0">
                <div className="relative shrink-0 size-[24px] self-start mt-[2px]">
                  <div
                    className="absolute inset-[8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-2px] mask-size-[24px_24px]"
                    style={{ maskImage: `url('${imgCheckCircle}')` }}
                  >
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <path d={svgPaths.p35a15880} fill={config.iconColor} />
                    </svg>
                  </div>
                </div>
                <p
                  className="font-['Onest:SemiBold',sans-serif] font-semibold leading-[1.4] relative text-[14px] line-clamp-2 flex-1"
                  style={{ color: config.textColor }}
                >
                  {message}
                </p>
              </div>
              <button
                onClick={onClose}
                className="relative shrink-0 size-[24px] transition-transform hover:scale-110 self-start mt-[2px] ml-2"
                aria-label="Close notification"
              >
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <mask height="24" id={`mask_close_${type}`} maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
                    <rect fill="#D9D9D9" height="24" width="24" />
                  </mask>
                  <g mask={`url(#mask_close_${type})`}>
                    <path d={svgPaths.p308df980} fill={config.iconColor} />
                  </g>
                </svg>
              </button>
            </>
          ) : (
            <>
              <div className="relative shrink-0 size-[24px] self-start mt-[2px]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <mask height="24" id={`mask_icon_${type}`} maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
                    <rect fill="#D9D9D9" height="24" width="24" />
                  </mask>
                  <g mask={`url(#mask_icon_${type})`}>
                    <path d={config.icon === 'check' ? svgPaths.p35a15880 : svgPaths.p2c69e580} fill={config.iconColor} />
                  </g>
                </svg>
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-0 relative">
                <p
                  className="font-['Onest:SemiBold',sans-serif] font-semibold leading-[1.4] relative text-[14px] line-clamp-2 w-full"
                  style={{ color: config.textColor }}
                >
                  {message}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// Mission Tracker component
interface MissionTrackerProps {
  totalSteps: number;
  completedSteps: number;
  color?: string;
  showLabels?: boolean;
}

function MissionTracker({ totalSteps = 3, completedSteps = 0, color = '#1443ff', showLabels = false }: MissionTrackerProps) {
  const steps = Array.from({ length: totalSteps }, (_, i) => i);

  return (
    <div className="flex items-center justify-center relative">
      <div className="-rotate-2 flex-none">
        <div className="content-stretch flex h-[30px] items-center justify-between relative" style={{ width: `${totalSteps * 30 + (totalSteps - 1) * 27}px` }}>
          {steps.map((step, index) => {
            const isCompleted = step < completedSteps;
            const isLast = index === steps.length - 1;

            return (
              <div key={step} className="flex items-center">
                {/* Check Circle */}
                <div className="relative shrink-0 size-[30px]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
                    <mask height="30" id={`mask_step_${step}`} maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="30" x="0" y="0">
                      <rect fill="#D9D9D9" height="30" width="30" />
                    </mask>
                    <g mask={`url(#mask_step_${step})`}>
                      <path d={isCompleted ? svgPathsMission.p1f135680 : svgPathsMission.p3ef84b00} fill={color} />
                    </g>
                  </svg>
                </div>

                {/* Connecting Line (if not last step) */}
                {!isLast && (
                  <div className="h-0 relative shrink-0 w-[27px]">
                    <div className="absolute inset-[-1px_0_0_0]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 1">
                        <line stroke={color} strokeOpacity={isCompleted ? 1 : 0.3} x2="27" y1="0.5" y2="0.5" />
                      </svg>
                    </div>
                  </div>
                )}

                {/* Flag at the end */}
                {isLast && (
                  <>
                    <div className="h-0 relative shrink-0 w-[27px]">
                      <div className="absolute inset-[-1px_0_0_0]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 1">
                          <line stroke={color} strokeOpacity={completedSteps >= totalSteps ? 1 : 0.3} x2="27" y1="0.5" y2="0.5" />
                        </svg>
                      </div>
                    </div>
                    <div className="relative shrink-0 size-[30px]">
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
                        <mask height="30" id="mask_flag" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="30" x="0" y="0">
                          <rect fill="#D9D9D9" height="30" width="30" />
                        </mask>
                        <g mask="url(#mask_flag)">
                          <path d={svgPathsMission.p10772480} fill={color} fillOpacity={completedSteps >= totalSteps ? 1 : 0.3} />
                        </g>
                      </svg>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Carousel Indicator component
interface CarouselIndicatorProps {
  totalPages: number;
  currentPage: number;
  activeColor?: string;
  inactiveColor?: string;
  onPageClick?: (page: number) => void;
}

function CarouselIndicator({
  totalPages,
  currentPage,
  activeColor = '#1443ff',
  inactiveColor = '#9D9FAF',
  onPageClick
}: CarouselIndicatorProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i);

  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      {pages.map((page) => {
        const isActive = page === currentPage;

        return isActive ? (
          <div
            key={page}
            className="h-[10px] relative rounded-[12px] shrink-0 w-[62px] transition-all cursor-pointer"
            style={{ backgroundColor: activeColor }}
            onClick={() => onPageClick?.(page)}
          />
        ) : (
          <div
            key={page}
            className="relative shrink-0 size-[10px] cursor-pointer transition-all hover:scale-110"
            onClick={() => onPageClick?.(page)}
          >
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
              <circle cx="5" cy="5" r="4.5" stroke={inactiveColor} strokeOpacity="0.98" />
            </svg>
          </div>
        );
      })}
    </div>
  );
}

// Checkbox component
interface CheckboxProps {
  checked: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  color?: string;
  disabled?: boolean;
}

function Checkbox({ checked, onChange, label, color = '#ff7f00', disabled = false }: CheckboxProps) {
  return (
    <button
      className="flex gap-2 items-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-105"
      onClick={() => !disabled && onChange?.(!checked)}
      disabled={disabled}
      type="button"
    >
      <div className="relative shrink-0 size-[24px]">
        <div
          className="absolute inset-[12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3px_-3px] mask-size-[24px_24px]"
          style={{ maskImage: `url('${imgCheckBoxOutlineBlank}')` }}
        >
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={checked ? svgPathsCheckbox.p37fdf00 : svgPathsCheckbox.p31e38f40} fill={color} />
          </svg>
        </div>
      </div>
      {label && (
        <span className="font-['Onest:Regular',sans-serif] font-normal text-[14px] leading-[1.4] text-[#090f39]">
          {label}
        </span>
      )}
    </button>
  );
}

// Radio Button component
interface RadioButtonProps {
  checked: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  color?: string;
  disabled?: boolean;
  name?: string;
}

function RadioButton({ checked, onChange, label, color = '#4369ff', disabled = false }: RadioButtonProps) {
  return (
    <button
      className="flex gap-2 items-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-105"
      onClick={() => !disabled && onChange?.(!checked)}
      disabled={disabled}
      type="button"
    >
      <div className="relative shrink-0 size-[24px]">
        <div
          className="absolute inset-[8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-2px] mask-size-[24px_24px]"
          style={{ maskImage: `url('${imgCheckBoxOutlineBlank}')` }}
        >
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={checked ? svgPathsCheckbox.p22f8a570 : svgPathsCheckbox.p208acf00} fill={color} />
          </svg>
        </div>
      </div>
      {label && (
        <span className="font-['Onest:Regular',sans-serif] font-normal text-[14px] leading-[1.4] text-[#090f39]">
          {label}
        </span>
      )}
    </button>
  );
}

function InteractiveDemo() {
  const [progress1, setProgress1] = useState(2000);
  const [progress2, setProgress2] = useState(1000);
  const [progress3, setProgress3] = useState(100);
  const [showSuccessToast, setShowSuccessToast] = useState(true);
  const [showInfoToast, setShowInfoToast] = useState(true);
  const [missionProgress, setMissionProgress] = useState(1);
  const [carouselPage, setCarouselPage] = useState(0);
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(true);
  const [checkbox3, setCheckbox3] = useState(false);
  const [radioSelection, setRadioSelection] = useState<'option1' | 'option2' | 'option3'>('option1');

  return (
    <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-8 border border-purple-200 mb-16">
      <h3 className="title-large font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>
        Interactive Demo
      </h3>
      <p className="body-large mb-6" style={{ color: 'var(--color-gray-500)' }}>
        Adjust the progress values using the buttons below each bar.
      </p>

      <div className="space-y-8">
        {/* Progress Bar 1 - 100% Complete */}
        <div>
          <p className="label-medium mb-3" style={{ color: 'var(--color-deep-blue)' }}>
            Complete (100%)
          </p>
          <div className="bg-white p-6 rounded-lg">
            <ProgressBar current={progress1} total={2000} />
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => setProgress1(Math.max(0, progress1 - 100))}
                className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
              >
                -100
              </button>
              <button
                onClick={() => setProgress1(Math.min(2000, progress1 + 100))}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                +100
              </button>
              <button
                onClick={() => setProgress1(2000)}
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors ml-auto"
              >
                Fill
              </button>
              <button
                onClick={() => setProgress1(0)}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* Progress Bar 2 - 50% Complete */}
        <div>
          <p className="label-medium mb-3" style={{ color: 'var(--color-deep-blue)' }}>
            In Progress (50%)
          </p>
          <div className="bg-white p-6 rounded-lg">
            <ProgressBar current={progress2} total={2000} />
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => setProgress2(Math.max(0, progress2 - 100))}
                className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
              >
                -100
              </button>
              <button
                onClick={() => setProgress2(Math.min(2000, progress2 + 100))}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                +100
              </button>
              <button
                onClick={() => setProgress2(2000)}
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors ml-auto"
              >
                Fill
              </button>
              <button
                onClick={() => setProgress2(0)}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* Progress Bar 3 - Just Started */}
        <div>
          <p className="label-medium mb-3" style={{ color: 'var(--color-deep-blue)' }}>
            Just Started (5%)
          </p>
          <div className="bg-white p-6 rounded-lg">
            <ProgressBar current={progress3} total={2000} />
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => setProgress3(Math.max(0, progress3 - 100))}
                className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
              >
                -100
              </button>
              <button
                onClick={() => setProgress3(Math.min(2000, progress3 + 100))}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                +100
              </button>
              <button
                onClick={() => setProgress3(2000)}
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors ml-auto"
              >
                Fill
              </button>
              <button
                onClick={() => setProgress3(0)}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* Toast Notifications */}
        <div>
          <p className="label-medium mb-3" style={{ color: 'var(--color-deep-blue)' }}>
            Toast Notifications
          </p>
          <div className="bg-white p-6 rounded-lg space-y-4 max-w-[344px]">
            {showSuccessToast && (
              <ToastNotification
                type="success"
                message="Listo. Ya estás en camino para obtener esta recompensa"
                showClose={true}
                onClose={() => setShowSuccessToast(false)}
              />
            )}
            {showInfoToast && (
              <ToastNotification
                type="info"
                message="Ya estás participando para ganar esta recompensa"
                showClose={false}
              />
            )}
            <div className="flex gap-2 pt-2">
              {!showSuccessToast && (
                <button
                  onClick={() => setShowSuccessToast(true)}
                  className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
                >
                  Show Success Toast
                </button>
              )}
              {!showInfoToast && (
                <button
                  onClick={() => setShowInfoToast(true)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                >
                  Show Info Toast
                </button>
              )}
            </div>
          </div>
          <p className="body-small mt-2" style={{ color: 'var(--color-gray-500)' }}>
            Click the X button to dismiss the success toast
          </p>
        </div>

        {/* Mission Tracker */}
        <div>
          <p className="label-medium mb-3" style={{ color: 'var(--color-deep-blue)' }}>
            Mission Tracker
          </p>
          <div className="bg-white p-6 rounded-lg">
            <MissionTracker totalSteps={3} completedSteps={missionProgress} />
            <div className="flex gap-2 mt-6">
              <button
                onClick={() => setMissionProgress(Math.max(0, missionProgress - 1))}
                className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
                disabled={missionProgress === 0}
              >
                Previous Step
              </button>
              <button
                onClick={() => setMissionProgress(Math.min(4, missionProgress + 1))}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                disabled={missionProgress === 4}
              >
                Next Step
              </button>
              <button
                onClick={() => setMissionProgress(0)}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors ml-auto"
              >
                Reset
              </button>
              <button
                onClick={() => setMissionProgress(4)}
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
              >
                Complete
              </button>
            </div>
          </div>
          <p className="body-small mt-2" style={{ color: 'var(--color-gray-500)' }}>
            Step {missionProgress} of 4 (3 steps + final goal)
          </p>
        </div>

        {/* Carousel Indicator */}
        <div>
          <p className="label-medium mb-3" style={{ color: 'var(--color-deep-blue)' }}>
            Carousel Indicator (Paginator)
          </p>
          <div className="bg-white p-6 rounded-lg">
            <CarouselIndicator totalPages={4} currentPage={carouselPage} onPageClick={setCarouselPage} />
            <div className="flex gap-2 mt-6">
              <button
                onClick={() => setCarouselPage(Math.max(0, carouselPage - 1))}
                className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
                disabled={carouselPage === 0}
              >
                Previous
              </button>
              <button
                onClick={() => setCarouselPage(Math.min(3, carouselPage + 1))}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                disabled={carouselPage === 3}
              >
                Next
              </button>
              <button
                onClick={() => setCarouselPage(0)}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors ml-auto"
              >
                Reset
              </button>
            </div>
          </div>
          <p className="body-small mt-2" style={{ color: 'var(--color-gray-500)' }}>
            Page {carouselPage + 1} of 4 - Click on dots or use buttons to navigate
          </p>
        </div>

        {/* Checkbox & Radio Button */}
        <div>
          <p className="label-medium mb-3" style={{ color: 'var(--color-deep-blue)' }}>
            Checkbox & Radio Button
          </p>
          <div className="bg-white p-6 rounded-lg space-y-6">
            <div>
              <p className="body-medium mb-3 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                Checkboxes (Multiple Selection)
              </p>
              <div className="flex flex-col gap-3">
                <Checkbox checked={checkbox1} onChange={setCheckbox1} label="Subscribe to newsletter" />
                <Checkbox checked={checkbox2} onChange={setCheckbox2} label="I accept the terms and conditions" />
                <Checkbox checked={checkbox3} onChange={setCheckbox3} label="Enable notifications" />
              </div>
            </div>

            <div>
              <p className="body-medium mb-3 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                Radio Buttons (Single Selection)
              </p>
              <div className="flex flex-col gap-3">
                <RadioButton
                  checked={radioSelection === 'option1'}
                  onChange={() => setRadioSelection('option1')}
                  label="Standard shipping (5-7 days)"
                />
                <RadioButton
                  checked={radioSelection === 'option2'}
                  onChange={() => setRadioSelection('option2')}
                  label="Express shipping (2-3 days)"
                />
                <RadioButton
                  checked={radioSelection === 'option3'}
                  onChange={() => setRadioSelection('option3')}
                  label="Overnight shipping (1 day)"
                />
              </div>
            </div>
          </div>
          <p className="body-small mt-2" style={{ color: 'var(--color-gray-500)' }}>
            Checkboxes: {[checkbox1, checkbox2, checkbox3].filter(Boolean).length} selected | Radio: {radioSelection}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ProgressBarShowcase() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h2 className="headline-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>
          Status & Feedback
        </h2>
        <p className="title-large" style={{ color: 'var(--color-deep-blue)' }}>
          Status & Feedback includes components designed to communicate where the user stands within a process and provide immediate system responses to their actions. Elements in this group—such as progress bars, mission trackers, and alert banners—are essential for guiding user behavior, managing expectations, and assuring the user that the system is functioning correctly, whether they are tracking mission progress or confirming a successful submission.
        </p>
      </div>

      <InteractiveDemo />

      <div className="space-y-12 mb-16">
        <div>
          <h3 className="title-large font-bold mb-6" style={{ color: 'var(--color-deep-blue)' }}>
            Progress Bar
          </h3>

          <div className="space-y-8">
            <div>
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <div className="space-y-6">
                  <div>
                    <p className="body-medium mb-3 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Progress States
                    </p>
                    <div className="space-y-4">
                      <div className="w-[311px]">
                        <p className="body-small mb-2" style={{ color: 'var(--color-gray-500)' }}>
                          Complete (100%)
                        </p>
                        <ProgressBar current={2000} total={2000} />
                      </div>
                      <div className="w-[311px]">
                        <p className="body-small mb-2" style={{ color: 'var(--color-gray-500)' }}>
                          Half Complete (50%)
                        </p>
                        <ProgressBar current={1000} total={2000} />
                      </div>
                      <div className="w-[311px]">
                        <p className="body-small mb-2" style={{ color: 'var(--color-gray-500)' }}>
                          Just Started (5%)
                        </p>
                        <ProgressBar current={100} total={2000} />
                      </div>
                      <div className="w-[311px]">
                        <p className="body-small mb-2" style={{ color: 'var(--color-gray-500)' }}>
                          Not Started (0%)
                        </p>
                        <ProgressBar current={0} total={2000} />
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="body-medium mb-3 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Color Variations
                    </p>
                    <div className="space-y-4">
                      <div className="w-[311px]">
                        <p className="body-small mb-2" style={{ color: 'var(--color-gray-500)' }}>
                          Orange (Default Brand Color)
                        </p>
                        <ProgressBar current={1500} total={2000} barColor="#ff7f00" />
                      </div>
                      <div className="w-[311px]">
                        <p className="body-small mb-2" style={{ color: 'var(--color-gray-500)' }}>
                          Blue (Primary)
                        </p>
                        <ProgressBar current={1500} total={2000} barColor="#1443ff" />
                      </div>
                      <div className="w-[311px]">
                        <p className="body-small mb-2" style={{ color: 'var(--color-gray-500)' }}>
                          Teal
                        </p>
                        <ProgressBar current={1500} total={2000} barColor="#76e0f3" />
                      </div>
                      <div className="w-[311px]">
                        <p className="body-small mb-2" style={{ color: 'var(--color-gray-500)' }}>
                          Purple
                        </p>
                        <ProgressBar current={1500} total={2000} barColor="#9d00bf" />
                      </div>
                      <div className="w-[311px]">
                        <p className="body-small mb-2" style={{ color: 'var(--color-gray-500)' }}>
                          Green (Success)
                        </p>
                        <ProgressBar current={1500} total={2000} barColor="#1ea93c" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="body-medium mb-3 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Height Variations
                    </p>
                    <div className="space-y-4">
                      <div className="w-[311px]">
                        <p className="body-small mb-2" style={{ color: 'var(--color-gray-500)' }}>
                          Thin (3px)
                        </p>
                        <ProgressBar current={1200} total={2000} height={3} />
                      </div>
                      <div className="w-[311px]">
                        <p className="body-small mb-2" style={{ color: 'var(--color-gray-500)' }}>
                          Standard (5px)
                        </p>
                        <ProgressBar current={1200} total={2000} height={5} />
                      </div>
                      <div className="w-[311px]">
                        <p className="body-small mb-2" style={{ color: 'var(--color-gray-500)' }}>
                          Thick (8px)
                        </p>
                        <ProgressBar current={1200} total={2000} height={8} />
                      </div>
                      <div className="w-[311px]">
                        <p className="body-small mb-2" style={{ color: 'var(--color-gray-500)' }}>
                          Extra Thick (12px)
                        </p>
                        <ProgressBar current={1200} total={2000} height={12} />
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                    <p className="body-medium mb-3 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Purpose and Functionality
                    </p>
                    <p className="body-medium mb-4" style={{ color: 'var(--color-gray-500)' }}>
                      The Progress Bar component motivates user engagement by providing immediate, quantifiable feedback on their status. Its function is to transform a numerical value into an easy-to-understand visual metric, assuring the user that their actions are contributing directly toward a reward or completion.
                    </p>
                    <p className="body-medium mb-3 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Elements and States
                    </p>
                    <p className="body-medium mb-4" style={{ color: 'var(--color-gray-500)' }}>
                      This is a single component that adapts its visual state based entirely on the user's progress:
                    </p>
                    <ul className="space-y-2 mb-4" style={{ color: 'var(--color-gray-500)' }}>
                      <li className="body-medium flex gap-2">
                        <span>•</span>
                        <span><strong>Indicator:</strong> A highly visible bar, typically colored using a vibrant Brand Color to convey energy and momentum, dynamically fills from left to right.</span>
                      </li>
                      <li className="body-medium flex gap-2">
                        <span>•</span>
                        <span><strong>Value Display:</strong> A text element placed below the bar displays the progress numerically (e.g., "0/2000", "1000/2000", "2000/2000"). This pairing of visual and numeric data offers both quick understanding and precise detail.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                A dynamic visual indicator that fills from left to right, accompanied by a numeric display showing current progress versus total goal.
              </p>
            </div>

            {/* Toast Notification */}
            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>
                Toast Notification
              </p>
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <div className="space-y-6">
                  <div>
                    <p className="body-medium mb-3 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Toast Types
                    </p>
                    <div className="space-y-4 max-w-[344px]">
                      <div>
                        <p className="body-small mb-2" style={{ color: 'var(--color-gray-500)' }}>
                          Success Toast (with close button)
                        </p>
                        <ToastNotification
                          type="success"
                          message="Listo. Ya estás en camino para obtener esta recompensa"
                          showClose={true}
                        />
                      </div>
                      <div>
                        <p className="body-small mb-2" style={{ color: 'var(--color-gray-500)' }}>
                          Info Toast (without close button)
                        </p>
                        <ToastNotification
                          type="info"
                          message="Ya estás participando para ganar esta recompensa"
                          showClose={false}
                        />
                      </div>
                      <div>
                        <p className="body-small mb-2" style={{ color: 'var(--color-gray-500)' }}>
                          Error Toast
                        </p>
                        <ToastNotification
                          type="error"
                          message="No se pudo completar la acción. Intenta de nuevo"
                          showClose={true}
                        />
                      </div>
                      <div>
                        <p className="body-small mb-2" style={{ color: 'var(--color-gray-500)' }}>
                          Warning Toast
                        </p>
                        <ToastNotification
                          type="warning"
                          message="Esta oferta expirará en 24 horas"
                          showClose={true}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                    <p className="body-medium mb-3 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Purpose and Functionality
                    </p>
                    <p className="body-medium mb-4" style={{ color: 'var(--color-gray-500)' }}>
                      This is a non-intrusive alert designed to provide brief, timely, and contextual feedback to the user after they have performed an action within the JOY app. The Toast Notification offers immediate confirmation or informational alerts that slide into view and automatically disappear after a short duration. Its function is to assure the user of a successful action (Success Toast) or provide important, non-critical status updates (Info Toast) without interrupting the user's flow.
                    </p>
                    <p className="body-medium mb-3 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Elements and States
                    </p>
                    <p className="body-medium mb-4" style={{ color: 'var(--color-gray-500)' }}>
                      This is a single component with four distinct visual states, leveraging the Semantic Colors palette to immediately convey meaning:
                    </p>
                    <ul className="space-y-2 mb-4" style={{ color: 'var(--color-gray-500)' }}>
                      <li className="body-medium flex gap-2">
                        <span>•</span>
                        <span><strong>Success Toast:</strong> Green background (#b9e4c3) with dark green text, includes check icon. Used to confirm successful actions.</span>
                      </li>
                      <li className="body-medium flex gap-2">
                        <span>•</span>
                        <span><strong>Info Toast:</strong> Blue background (#c1d7f9) with dark blue text. Used for informational messages that don't require action.</span>
                      </li>
                      <li className="body-medium flex gap-2">
                        <span>•</span>
                        <span><strong>Error Toast:</strong> Red background (#f1bfc1) with dark red text, includes error icon. Used to communicate failures or problems.</span>
                      </li>
                      <li className="body-medium flex gap-2">
                        <span>•</span>
                        <span><strong>Warning Toast:</strong> Yellow background (#ffeeba) with dark yellow text. Used for cautionary messages or time-sensitive information.</span>
                      </li>
                    </ul>
                    <p className="body-medium mb-3 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      General Usage Guidelines
                    </p>
                    <ul className="space-y-2" style={{ color: 'var(--color-gray-500)' }}>
                      <li className="body-medium flex gap-2">
                        <span>•</span>
                        <span><strong>Placement:</strong> Toast notifications should appear prominently but briefly, usually fixed near the top or bottom of the screen, away from primary navigation.</span>
                      </li>
                      <li className="body-medium flex gap-2">
                        <span>•</span>
                        <span><strong>Content:</strong> Keep the text short, concise, and direct. They should never contain critical information that requires a decision, as they disappear quickly.</span>
                      </li>
                      <li className="body-medium flex gap-2">
                        <span>•</span>
                        <span><strong>System Feedback:</strong> Toasts are mandatory after successful completion of key user actions (e.g., accepting a challenge, redeeming points) to reinforce the positive gamified experience.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Brief, non-intrusive alerts that provide immediate feedback after user actions. Available in success, info, error, and warning variants with optional close buttons.
              </p>
            </div>

            {/* Mission Tracker */}
            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>
                Mission Tracker
              </p>
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <div className="space-y-6">
                  <div>
                    <p className="body-medium mb-3 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Progress States
                    </p>
                    <div className="space-y-6">
                      <div>
                        <p className="body-small mb-3" style={{ color: 'var(--color-gray-500)' }}>
                          Not Started (0/4)
                        </p>
                        <MissionTracker totalSteps={3} completedSteps={0} />
                      </div>
                      <div>
                        <p className="body-small mb-3" style={{ color: 'var(--color-gray-500)' }}>
                          1 Step Complete (1/4)
                        </p>
                        <MissionTracker totalSteps={3} completedSteps={1} />
                      </div>
                      <div>
                        <p className="body-small mb-3" style={{ color: 'var(--color-gray-500)' }}>
                          2 Steps Complete (2/4)
                        </p>
                        <MissionTracker totalSteps={3} completedSteps={2} />
                      </div>
                      <div>
                        <p className="body-small mb-3" style={{ color: 'var(--color-gray-500)' }}>
                          All Steps Complete (3/4)
                        </p>
                        <MissionTracker totalSteps={3} completedSteps={3} />
                      </div>
                      <div>
                        <p className="body-small mb-3" style={{ color: 'var(--color-gray-500)' }}>
                          Mission Complete - Flag Reached (4/4)
                        </p>
                        <MissionTracker totalSteps={3} completedSteps={4} />
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="body-medium mb-3 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Color Variations
                    </p>
                    <div className="space-y-4">
                      <div>
                        <p className="body-small mb-2" style={{ color: 'var(--color-gray-500)' }}>
                          Blue (Default)
                        </p>
                        <MissionTracker totalSteps={3} completedSteps={2} color="#1443ff" />
                      </div>
                      <div>
                        <p className="body-small mb-2" style={{ color: 'var(--color-gray-500)' }}>
                          Orange
                        </p>
                        <MissionTracker totalSteps={3} completedSteps={2} color="#ff7f00" />
                      </div>
                      <div>
                        <p className="body-small mb-2" style={{ color: 'var(--color-gray-500)' }}>
                          Purple
                        </p>
                        <MissionTracker totalSteps={3} completedSteps={2} color="#9d00bf" />
                      </div>
                      <div>
                        <p className="body-small mb-2" style={{ color: 'var(--color-gray-500)' }}>
                          Teal
                        </p>
                        <MissionTracker totalSteps={3} completedSteps={2} color="#76e0f3" />
                      </div>
                      <div>
                        <p className="body-small mb-2" style={{ color: 'var(--color-gray-500)' }}>
                          Green (Success)
                        </p>
                        <MissionTracker totalSteps={3} completedSteps={2} color="#1ea93c" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="body-medium mb-3 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Step Count Variations
                    </p>
                    <div className="space-y-4">
                      <div>
                        <p className="body-small mb-2" style={{ color: 'var(--color-gray-500)' }}>
                          2 Steps
                        </p>
                        <MissionTracker totalSteps={2} completedSteps={1} />
                      </div>
                      <div>
                        <p className="body-small mb-2" style={{ color: 'var(--color-gray-500)' }}>
                          3 Steps (Default)
                        </p>
                        <MissionTracker totalSteps={3} completedSteps={2} />
                      </div>
                      <div>
                        <p className="body-small mb-2" style={{ color: 'var(--color-gray-500)' }}>
                          4 Steps
                        </p>
                        <MissionTracker totalSteps={4} completedSteps={2} />
                      </div>
                      <div>
                        <p className="body-small mb-2" style={{ color: 'var(--color-gray-500)' }}>
                          5 Steps
                        </p>
                        <MissionTracker totalSteps={5} completedSteps={3} />
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                    <p className="body-medium mb-3 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Purpose and Functionality
                    </p>
                    <p className="body-medium mb-4" style={{ color: 'var(--color-gray-500)' }}>
                      This component is designed to visually communicate a user's progress through a multi-step mission, challenge, or daily sequence within the JOY app's gamification module. The Mission Tracker provides clear, immediate feedback on which steps a user has completed, which is currently active, and what remains to be done. Its sequential, line-based structure reassures the user that their actions are being logged and guides them toward the final goal, which is represented by the flag icon.
                    </p>
                    <p className="body-medium mb-3 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Elements and Progress States
                    </p>
                    <p className="body-medium mb-4" style={{ color: 'var(--color-gray-500)' }}>
                      This is a single component that dynamically updates its appearance to reflect four primary stages of completion:
                    </p>
                    <ul className="space-y-2" style={{ color: 'var(--color-gray-500)' }}>
                      <li className="body-medium flex gap-2">
                        <span>•</span>
                        <span><strong>Upcoming/Unstarted Step:</strong> Represented by an outlined circle with an outlined checkmark inside, connected by a line that is not filled. Indicates a step that is part of the mission but has not yet been started or achieved by the user.</span>
                      </li>
                      <li className="body-medium flex gap-2">
                        <span>•</span>
                        <span><strong>Completed Step:</strong> Represented by a solid filled circle with a solid filled checkmark inside, connected by a solid filled line to the next stage. Confirms successful completion of that individual task or milestone.</span>
                      </li>
                      <li className="body-medium flex gap-2">
                        <span>•</span>
                        <span><strong>Final Goal/Milestone:</strong> Represented by a flag icon at the end of the sequence. Marks the final step of the mission, signifying the point where the reward is earned or the sequence concludes.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Sequential visual tracker with checkmark circles connected by lines, leading to a flag icon that marks mission completion. Dynamically updates to show progress through multi-step challenges.
              </p>
            </div>

            {/* Carousel Indicator */}
            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>
                Carousel Indicator (Paginator)
              </p>
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <div className="space-y-6">
                  <div>
                    <p className="body-medium mb-3 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Page Positions
                    </p>
                    <div className="space-y-6">
                      <div>
                        <p className="body-small mb-3" style={{ color: 'var(--color-gray-500)' }}>
                          First Page (1/4)
                        </p>
                        <CarouselIndicator totalPages={4} currentPage={0} />
                      </div>
                      <div>
                        <p className="body-small mb-3" style={{ color: 'var(--color-gray-500)' }}>
                          Second Page (2/4)
                        </p>
                        <CarouselIndicator totalPages={4} currentPage={1} />
                      </div>
                      <div>
                        <p className="body-small mb-3" style={{ color: 'var(--color-gray-500)' }}>
                          Third Page (3/4)
                        </p>
                        <CarouselIndicator totalPages={4} currentPage={2} />
                      </div>
                      <div>
                        <p className="body-small mb-3" style={{ color: 'var(--color-gray-500)' }}>
                          Last Page (4/4)
                        </p>
                        <CarouselIndicator totalPages={4} currentPage={3} />
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="body-medium mb-3 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Page Count Variations
                    </p>
                    <div className="space-y-4">
                      <div>
                        <p className="body-small mb-2" style={{ color: 'var(--color-gray-500)' }}>
                          3 Pages
                        </p>
                        <CarouselIndicator totalPages={3} currentPage={1} />
                      </div>
                      <div>
                        <p className="body-small mb-2" style={{ color: 'var(--color-gray-500)' }}>
                          4 Pages (Default)
                        </p>
                        <CarouselIndicator totalPages={4} currentPage={1} />
                      </div>
                      <div>
                        <p className="body-small mb-2" style={{ color: 'var(--color-gray-500)' }}>
                          5 Pages
                        </p>
                        <CarouselIndicator totalPages={5} currentPage={2} />
                      </div>
                      <div>
                        <p className="body-small mb-2" style={{ color: 'var(--color-gray-500)' }}>
                          6 Pages
                        </p>
                        <CarouselIndicator totalPages={6} currentPage={3} />
                      </div>
                      <div>
                        <p className="body-small mb-2" style={{ color: 'var(--color-gray-500)' }}>
                          7 Pages (Maximum Recommended)
                        </p>
                        <CarouselIndicator totalPages={7} currentPage={3} />
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="body-medium mb-3 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Color Variations
                    </p>
                    <div className="space-y-4">
                      <div>
                        <p className="body-small mb-2" style={{ color: 'var(--color-gray-500)' }}>
                          Blue (Default)
                        </p>
                        <CarouselIndicator totalPages={4} currentPage={1} activeColor="#1443ff" />
                      </div>
                      <div>
                        <p className="body-small mb-2" style={{ color: 'var(--color-gray-500)' }}>
                          Orange
                        </p>
                        <CarouselIndicator totalPages={4} currentPage={1} activeColor="#ff7f00" />
                      </div>
                      <div>
                        <p className="body-small mb-2" style={{ color: 'var(--color-gray-500)' }}>
                          Purple
                        </p>
                        <CarouselIndicator totalPages={4} currentPage={1} activeColor="#9d00bf" />
                      </div>
                      <div>
                        <p className="body-small mb-2" style={{ color: 'var(--color-gray-500)' }}>
                          Teal
                        </p>
                        <CarouselIndicator totalPages={4} currentPage={1} activeColor="#76e0f3" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                    <p className="body-medium mb-3 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Purpose and Functionality
                    </p>
                    <p className="body-medium mb-4" style={{ color: 'var(--color-gray-500)' }}>
                      This component is a minimalist element designed to communicate the position and total count of items within a horizontal scrolling carousel or content sequence (e.g., promotional cards, image galleries). The Carousel Indicator provides essential navigational context without cluttering the interface. Its primary function is to assure the user of where they are in a series of content items and how many total items they can scroll through. This predictability is key for a smooth, intuitive user experience.
                    </p>
                    <p className="body-medium mb-3 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Elements and States
                    </p>
                    <p className="body-medium mb-4" style={{ color: 'var(--color-gray-500)' }}>
                      This is a single component that dynamically updates its appearance to reflect the user's current view:
                    </p>
                    <ul className="space-y-2 mb-4" style={{ color: 'var(--color-gray-500)' }}>
                      <li className="body-medium flex gap-2">
                        <span>•</span>
                        <span><strong>Total Items:</strong> Represented by a fixed number of small, circular shapes (dots) arranged horizontally. The total number of dots equals the total number of items in the carousel.</span>
                      </li>
                      <li className="body-medium flex gap-2">
                        <span>•</span>
                        <span><strong>Active State (Current Position):</strong> The dot corresponding to the currently viewed item is highlighted with an elongated pill shape (62px wide, 10px tall) in a vibrant brand color. This active indicator visually assures the user of their specific position within the sequence.</span>
                      </li>
                      <li className="body-medium flex gap-2">
                        <span>•</span>
                        <span><strong>Inactive State:</strong> All other dots representing items not currently in view are represented by simple, subtle outlined circles (10px diameter) in light gray.</span>
                      </li>
                    </ul>
                    <p className="body-medium mb-3 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Usage Guidelines
                    </p>
                    <ul className="space-y-2" style={{ color: 'var(--color-gray-500)' }}>
                      <li className="body-medium flex gap-2">
                        <span>•</span>
                        <span><strong>Context:</strong> Used exclusively below content modules that employ horizontal scrolling (carousels), such as promotional cards, featured rewards, or sequential introductory content.</span>
                      </li>
                      <li className="body-medium flex gap-2">
                        <span>•</span>
                        <span><strong>Predictability:</strong> The active indicator must immediately update whenever the user scrolls or navigates to the next item, providing reliable visual feedback.</span>
                      </li>
                      <li className="body-medium flex gap-2">
                        <span>•</span>
                        <span><strong>Scale:</strong> To maintain usability and clarity, this component should ideally be used for carousels with a limited number of items (3 to 7). If the content count is higher, alternative navigation should be considered.</span>
                      </li>
                      <li className="body-medium flex gap-2">
                        <span>•</span>
                        <span><strong>Non-Interactive:</strong> This indicator is primarily informative; users should navigate the carousel by swiping the content itself, though dots can optionally be clickable for direct navigation.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Minimalist dots and pill-shaped indicators that show position within a carousel. Active page is highlighted with an elongated pill, while inactive pages show as outlined circles.
              </p>
            </div>

            {/* Checkbox & Radio Button */}
            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>
                Checkbox & Radio Button
              </p>
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <div className="space-y-6">
                  <div>
                    <p className="body-medium mb-3 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Checkbox States
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Checkbox checked={false} label="Unchecked state" />
                        <span className="body-small text-gray-500">- Hollow square outline</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Checkbox checked={true} label="Checked state" />
                        <span className="body-small text-gray-500">- Filled square with checkmark</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Checkbox checked={false} disabled label="Disabled unchecked" />
                        <span className="body-small text-gray-500">- Reduced opacity</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Checkbox checked={true} disabled label="Disabled checked" />
                        <span className="body-small text-gray-500">- Reduced opacity</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="body-medium mb-3 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Radio Button States
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <RadioButton checked={false} label="Unselected state" />
                        <span className="body-small text-gray-500">- Hollow circle outline</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <RadioButton checked={true} label="Selected state" />
                        <span className="body-small text-gray-500">- Filled inner circle</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <RadioButton checked={false} disabled label="Disabled unselected" />
                        <span className="body-small text-gray-500">- Reduced opacity</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <RadioButton checked={true} disabled label="Disabled selected" />
                        <span className="body-small text-gray-500">- Reduced opacity</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="body-medium mb-3 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Color Variations
                    </p>
                    <div className="space-y-4">
                      <div>
                        <p className="body-small mb-2" style={{ color: 'var(--color-gray-500)' }}>
                          Checkbox Colors
                        </p>
                        <div className="flex gap-4 flex-wrap">
                          <Checkbox checked={true} color="#ff7f00" label="Orange (Default)" />
                          <Checkbox checked={true} color="#1443ff" label="Blue" />
                          <Checkbox checked={true} color="#9d00bf" label="Purple" />
                          <Checkbox checked={true} color="#76e0f3" label="Teal" />
                        </div>
                      </div>
                      <div>
                        <p className="body-small mb-2" style={{ color: 'var(--color-gray-500)' }}>
                          Radio Button Colors
                        </p>
                        <div className="flex gap-4 flex-wrap">
                          <RadioButton checked={true} color="#4369ff" label="Blue (Default)" />
                          <RadioButton checked={true} color="#ff7f00" label="Orange" />
                          <RadioButton checked={true} color="#9d00bf" label="Purple" />
                          <RadioButton checked={true} color="#1ea93c" label="Green" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                    <p className="body-medium mb-3 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Checkbox Component
                    </p>
                    <p className="body-medium mb-4" style={{ color: 'var(--color-gray-500)' }}>
                      The Checkbox is used for making selections where the user can choose zero, one, or multiple items from a list of options. It represents a boolean choice (on or off, yes or no) for individual items, enabling users to select multiple options concurrently or accept terms and conditions.
                    </p>
                    <p className="body-medium mb-2 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Elements and States:
                    </p>
                    <ul className="space-y-2 mb-4" style={{ color: 'var(--color-gray-500)' }}>
                      <li className="body-medium flex gap-2">
                        <span>•</span>
                        <span><strong>Unselected State (Square Outline):</strong> A hollow square outline indicates the default state before user interaction.</span>
                      </li>
                      <li className="body-medium flex gap-2">
                        <span>•</span>
                        <span><strong>Selected State (Filled Square with Checkmark):</strong> A filled square, often utilizing a vibrant Brand Color (like Orange), with a contrasting checkmark confirms that the option has been actively selected or acknowledged.</span>
                      </li>
                    </ul>

                    <p className="body-medium mb-3 font-semibold mt-6" style={{ color: 'var(--color-deep-blue)' }}>
                      Radio Button Component
                    </p>
                    <p className="body-medium mb-4" style={{ color: 'var(--color-gray-500)' }}>
                      The Radio Button is used when the user must select only one option from a mutually exclusive list. It enforces a single choice among a group of options, guiding the user to select one definitive path or setting.
                    </p>
                    <p className="body-medium mb-2 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Elements and States:
                    </p>
                    <ul className="space-y-2 mb-4" style={{ color: 'var(--color-gray-500)' }}>
                      <li className="body-medium flex gap-2">
                        <span>•</span>
                        <span><strong>Unselected State (Circle Outline):</strong> A hollow circle outline indicates that the option is available but not currently chosen.</span>
                      </li>
                      <li className="body-medium flex gap-2">
                        <span>•</span>
                        <span><strong>Selected State (Filled Circle):</strong> A filled, smaller circle inside the outline, utilizing a primary Brand Color (like Joy Blue), confirms that this single option is the user's active choice.</span>
                      </li>
                    </ul>

                    <p className="body-medium mb-2 font-semibold mt-6" style={{ color: 'var(--color-deep-blue)' }}>
                      Usage Guidelines:
                    </p>
                    <ul className="space-y-2" style={{ color: 'var(--color-gray-500)' }}>
                      <li className="body-medium flex gap-2">
                        <span>•</span>
                        <span><strong>Contextual Choice:</strong> Use Checkboxes when users can select multiple choices or when the input is an optional confirmation (e.g., subscribing to a newsletter). Use Radio Buttons when users must select only one option (e.g., choosing a single shipping method).</span>
                      </li>
                      <li className="body-medium flex gap-2">
                        <span>•</span>
                        <span><strong>Always Label:</strong> Both components must always be paired with a clear, concise text label that explains the option being selected for optimal clarity and accessibility.</span>
                      </li>
                      <li className="body-medium flex gap-2">
                        <span>•</span>
                        <span><strong>Accessibility:</strong> Ensure a generous touch target size (minimum 44×44px) is maintained around both the icon and the label to facilitate easy interaction.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Form input controls for single (radio) or multiple (checkbox) selection. Checkboxes use square shapes with checkmarks, while radio buttons use circles with filled centers.
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
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Mission Tracking:</strong> Display real-time progress toward mission completion goals, motivating users to continue engaging with tasks</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Points Accumulation:</strong> Show how many points a user has earned toward unlocking rewards or reaching the next tier</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Campaign Progress:</strong> Visualize completion status for multi-step campaigns or promotional challenges</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Streak Indicators:</strong> Track consecutive days or actions completed, encouraging daily engagement</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Receipt Scanning:</strong> Show how many receipts have been scanned toward a goal for bonus rewards</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Profile Completion:</strong> Guide users through filling out their profile by showing completion percentage</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Redemption Status:</strong> Display how close a user is to being able to redeem a specific reward</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Loading Indicators:</strong> Use for file uploads, submission processing, or other operations that have measurable progress</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Action Confirmation:</strong> Show success toasts after users complete key actions like accepting challenges, redeeming rewards, or submitting receipts</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Mission Enrollment:</strong> Display info toasts when users successfully enroll in missions or campaigns</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Error Feedback:</strong> Use error toasts to communicate failures in a non-blocking way, such as failed submissions or network errors</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Time-Sensitive Alerts:</strong> Show warning toasts for expiring offers, limited-time campaigns, or approaching deadlines</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Points Earned:</strong> Display success toasts immediately after users earn points from completed actions</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Settings Changes:</strong> Confirm profile updates, notification preference changes, or other settings modifications</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Reward Redemption:</strong> Show success toasts when rewards are successfully redeemed or added to the user's account</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Multi-Step Missions:</strong> Use Mission Tracker to show progress through sequential tasks like scanning receipts, completing challenges, and claiming rewards</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Daily Challenges:</strong> Display progress through daily task sequences where users complete multiple steps each day</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Onboarding Flows:</strong> Guide new users through account setup, profile completion, and first mission enrollment</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Campaign Milestones:</strong> Track progress through promotional campaigns with multiple achievement tiers</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Streak Tracking:</strong> Visualize consecutive days or actions completed in sequence-based gamification</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Tutorial Progress:</strong> Show users their progress through app tutorials or feature discovery flows</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Tier Unlocking:</strong> Display progress toward unlocking new reward tiers or membership levels</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Promotional Carousels:</strong> Use Carousel Indicators below featured reward carousels, promotional offers, or campaign highlights</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Image Galleries:</strong> Show position within product image galleries, reward previews, or brand showcase carousels</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Onboarding Flows:</strong> Display progress through multi-screen onboarding sequences or tutorial carousels</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Featured Content:</strong> Indicate position within horizontally scrollable sections of featured missions, rewards, or campaigns</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Story Sequences:</strong> Show progress through sequential storytelling content or achievement showcases</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Product Showcases:</strong> Display position within brand product carousels or partner brand galleries</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Reward Previews:</strong> Show position when users swipe through multiple reward options or tier previews</span>
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
            <span>Always pair the visual progress bar with a numeric display to provide both quick understanding and precise information</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Use vibrant Brand Colors (orange, blue, teal, purple) to convey energy and maintain visual consistency with the JOY brand</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Ensure smooth animations when the progress bar fills to create a satisfying, rewarding user experience</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Update progress bars in real-time as users complete actions to provide immediate feedback</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Use consistent bar colors within the same context (e.g., all mission progress bars use orange) to help users build mental models</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Set achievable intermediate goals to maintain motivation - showing "500/2000" is more motivating than "0/10000"</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Consider using green color for completed progress bars to reinforce success</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Maintain the 5px standard height for most use cases to ensure readability without overwhelming the interface</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Use thicker bars (8-12px) when the progress indicator is a primary focus of the screen</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Ensure sufficient contrast between the progress bar color and the track background for accessibility</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Celebrate milestones with animations or notifications when users reach 25%, 50%, 75%, or 100% completion</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Never show progress bars that move backward unless it's intentional (e.g., time-limited challenges)</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Place progress bars prominently on mission and reward cards to immediately communicate value and urgency</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Consider adding contextual labels above the progress bar (e.g., "Complete 5 more missions to unlock") for additional clarity</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Round the numerical values appropriately - avoid showing "1253.7/2000" when "1254/2000" is clearer</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Always use toast notifications to confirm successful completion of key user actions - this reinforces positive behavior and gamified experiences</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Keep toast messages concise - aim for one sentence maximum to ensure users can read them before they disappear</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Never use toast notifications for critical information that requires a user decision - use modals or dedicated alerts instead</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Position toast notifications consistently - typically at the top center or bottom of the screen, away from primary navigation</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Use semantic colors consistently - green for success, blue for info, red for errors, yellow for warnings</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Set appropriate auto-dismiss timers - 3-4 seconds for success/info messages, 5-6 seconds for warnings/errors</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Include a close button for error and warning toasts to give users control over dismissal</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Animate toasts in and out smoothly - slide from top or bottom with a subtle fade for professional polish</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Stack multiple toasts vertically if several appear in quick succession, displaying the most recent first</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Use success toasts liberally for positive reinforcement - every points earned, mission completed, or reward claimed deserves confirmation</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Ensure toast text is actionable and specific - "Points added to your account" is better than "Success"</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Test toast notifications on mobile devices to ensure they don't cover critical UI elements or interfere with touch interactions</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Don't show toasts for every minor interaction - reserve them for meaningful actions that deserve acknowledgment</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Include relevant icons (check mark for success, error symbol for failures) to enhance scannability and reinforce meaning</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Use Mission Tracker for sequential tasks only - if steps can be completed in any order, use a checklist instead</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Keep the number of steps between 2-5 for optimal clarity - too many steps can feel overwhelming</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Update Mission Tracker state immediately after each step completion to provide instant visual feedback</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Use vibrant brand colors (blue, orange, purple) to maintain visual energy and alignment with the JOY brand</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Always include the flag icon at the end to clearly mark the final goal and create anticipation</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Combine Mission Tracker with progress bars for comprehensive feedback - tracker shows sequence, bar shows overall progress</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Display Mission Tracker prominently on mission detail screens and campaign pages</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Use the slight rotation (-2 degrees) consistently to add visual interest and match the playful JOY brand personality</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Make completed steps visually distinct with filled circles and solid lines - the contrast reinforces achievement</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Consider adding celebratory animations when the flag is reached to maximize the satisfaction of completion</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Pair Mission Tracker with descriptive text that explains what each step represents</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Never show Mission Tracker with all steps incomplete if the user has already started - it should reflect actual progress</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Use consistent colors across related missions to help users visually categorize different types of challenges</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Ensure the tracker is responsive - consider vertical layout for mobile if horizontal space is limited</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Use Carousel Indicators for carousels with 3-7 items maximum - more than 7 dots becomes cluttered and less useful</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Always center Carousel Indicators below the carousel content for balanced visual presentation</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Update the active indicator immediately as users swipe or auto-advance through carousel items</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Use vibrant brand colors for the active indicator to ensure it stands out and provides clear feedback</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Keep inactive dots subtle with light gray outlines - they should provide context without competing for attention</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Ensure sufficient spacing (8px) between dots for easy tap targets if indicators are interactive</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Use the elongated pill shape (62px × 10px) for active indicators - it's more distinctive than a filled circle</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Position indicators with adequate padding below the carousel (16px minimum) to prevent accidental taps on carousel content</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Consider making dots tappable for direct navigation, but ensure primary navigation remains swipe-based</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Animate transitions smoothly when the active indicator moves from one position to another</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Use consistent colors across similar carousels to maintain predictable navigation patterns</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>For auto-advancing carousels, sync indicator updates with carousel transitions for seamless feedback</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Never hide indicators on interaction - they should always be visible to provide orientation context</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Test indicators on mobile devices to ensure the 10px circles are large enough to be visible and tappable</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>For very long carousels (8+ items), consider alternative navigation like numbered pages or scrollbars</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
