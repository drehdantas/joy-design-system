import svgPathsWhite from "../../imports/JoyLogoWhite/svg-aeucu8acxw";
import svgPathsYellow from "../../imports/JoyLogoYellow/svg-3ejtfqfui2";
import svgPathsOrange from "../../imports/JoyLogoOrange/svg-r306qr2h3";
import svgPathsTeal from "../../imports/JoyLogoTeal/svg-67grxlhuiq";
import svgPathsBlue from "../../imports/JoyLogoBlue/svg-p7v9kfb8kc";
import svgPathsPurple from "../../imports/JoyLogoPurple/svg-54uquxqvxu";
import svgPathsDark from "../../imports/JoyLogoDark/svg-3m13uvpjrw";
import svgPathsWordmark from "../../imports/Vector/svg-z77j9tz5pf";
import svgPathsFace from "../../imports/FaceLogo/svg-znfwkycxwr";

interface JoyLogoProps {
  colorName: string;
  svgPaths: any;
  bgColor?: string;
}

function JoyLogo({ colorName, svgPaths, bgColor }: JoyLogoProps) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className="p-6 rounded-lg"
        style={{ backgroundColor: bgColor || 'var(--color-gray-100)' }}
      >
        <div className="relative h-[48px] w-[90px] overflow-clip">
          <div className="absolute inset-[0.01%_2.27%_-0.68%_2%]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.0783 24.1623">
              <path d={svgPaths.p1951b000} />
            </svg>
          </div>
        </div>
      </div>
      <p className="body-small text-center" style={{ color: 'var(--color-gray-500)' }}>
        {colorName}
      </p>
    </div>
  );
}

function FaceLogoComponent() {
  return (
    <div className="relative h-[163.726px] w-[238px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 119 81.8634">
        <g clipPath="url(#clip0_12_932)">
          <path d={svgPathsFace.p9ca0900} fill="#4369FF" />
          <path d={svgPathsFace.p27bbc070} fill="#4369FF" />
          <path d={svgPathsFace.p3dd69600} fill="#4369FF" />
        </g>
        <defs>
          <clipPath id="clip0_12_932">
            <rect fill="white" height="81.8634" width="119" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function WordmarkLogo() {
  return (
    <div className="relative h-[173.876px] w-[310px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 155 86.9383">
        <path d={svgPathsWordmark.p1937b00} fill="var(--color-blue-500)" />
      </svg>
    </div>
  );
}

export default function LogoShowcase() {
  const logoVariants = [
    { colorName: 'White', svgPaths: svgPathsWhite, bgColor: 'var(--color-deep-blue)' },
    { colorName: 'Yellow', svgPaths: svgPathsYellow },
    { colorName: 'Orange', svgPaths: svgPathsOrange },
    { colorName: 'Teal', svgPaths: svgPathsTeal },
    { colorName: 'Blue', svgPaths: svgPathsBlue },
    { colorName: 'Purple', svgPaths: svgPathsPurple },
    { colorName: 'Dark', svgPaths: svgPathsDark },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h2 className="headline-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>
          Logo
        </h2>
        <p className="title-large" style={{ color: 'var(--color-deep-blue)' }}>
          The JOY brand identity includes the wordmark logo and the distinctive face mascot. These elements are core to the brand's playful and engaging personality.
        </p>
      </div>

      <div className="space-y-16">
        {/* JOY Wordmark */}
        <div>
          <h3 className="title-large font-bold mb-6" style={{ color: 'var(--color-deep-blue)' }}>
            JOY Wordmark
          </h3>
          <p className="body-large mb-6" style={{ color: 'var(--color-gray-500)' }}>
            The JOY wordmark logo is available in multiple color variants to accommodate different backgrounds and use cases. Always maintain proper spacing and sizing.
          </p>

          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <div className="flex gap-8 items-start flex-wrap justify-center">
              {logoVariants.map((variant) => (
                <JoyLogo
                  key={variant.colorName}
                  colorName={variant.colorName}
                  svgPaths={variant.svgPaths}
                  bgColor={variant.bgColor}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Face Mascot */}
        <div>
          <h3 className="title-large font-bold mb-6" style={{ color: 'var(--color-deep-blue)' }}>
            Face Mascot
          </h3>
          <p className="body-large mb-6" style={{ color: 'var(--color-gray-500)' }}>
            The JOY face mascot adds personality and playfulness to the brand. Use it to create friendly, welcoming experiences throughout the app.
          </p>

          <div className="bg-white rounded-lg border border-gray-200 p-12">
            <div className="flex justify-center">
              <FaceLogoComponent />
            </div>
          </div>
        </div>

        {/* Full Wordmark */}
        <div>
          <h3 className="title-large font-bold mb-6" style={{ color: 'var(--color-deep-blue)' }}>
            Full Wordmark
          </h3>
          <p className="body-large mb-6" style={{ color: 'var(--color-gray-500)' }}>
            The complete JOY wordmark with extended letterforms. Use this for larger placements like hero sections or splash screens.
          </p>

          <div className="bg-white rounded-lg border border-gray-200 p-12">
            <div className="flex justify-center">
              <WordmarkLogo />
            </div>
          </div>
        </div>

        {/* Usage Guidelines */}
        <div>
          <h3 className="title-large font-bold mb-6" style={{ color: 'var(--color-deep-blue)' }}>
            Usage Guidelines
          </h3>
          <ul className="space-y-3">
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Minimum Size:</strong> The logo should never be smaller than 24px in height to maintain legibility</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Clear Space:</strong> Always maintain adequate clear space around the logo equal to the height of the "J"</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Color Selection:</strong> Use white logo on dark backgrounds, dark logo on light backgrounds, and colored variants for accent placements</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Proportions:</strong> Never stretch, compress, or distort the logo - always maintain original aspect ratio</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Face Mascot:</strong> Use the face mascot to add personality in empty states, onboarding, or celebration moments</span>
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
            <span>Always use the provided logo files - never recreate or modify the logo</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Ensure sufficient contrast between the logo and its background</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Use the blue variant (primary brand color) as the default when in doubt</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>The face mascot works best at larger sizes where facial details are visible</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Reserve the full wordmark for high-impact placements like app loading screens</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Never apply filters, gradients, or effects to the logo</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
