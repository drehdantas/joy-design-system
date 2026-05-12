import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ColorPalette from '../components/ColorPalette';
import TypographyShowcase from '../components/TypographyShowcase';
import IconographyShowcase from '../components/IconographyShowcase';
import SpacingShowcase from '../components/SpacingShowcase';
import ShadowsShowcase from '../components/ShadowsShowcase';
import LogoShowcase from '../components/LogoShowcase';

type PrimitiveTab = 'logo' | 'colors' | 'typography' | 'iconography' | 'spacing' | 'shadows';

export default function PrimitivesPage() {
  const location = useLocation();
  const [activePrimitive, setActivePrimitive] = useState<PrimitiveTab>('logo');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 sticky top-[73px] z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 py-4 overflow-x-auto">
            <button
              onClick={() => setActivePrimitive('logo')}
              className={`px-4 py-2 rounded-md font-medium transition-colors whitespace-nowrap ${
                activePrimitive === 'logo'
                  ? 'bg-blue-100 text-blue-900'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Logo
            </button>
            <button
              onClick={() => setActivePrimitive('colors')}
              className={`px-4 py-2 rounded-md font-medium transition-colors whitespace-nowrap ${
                activePrimitive === 'colors'
                  ? 'bg-blue-100 text-blue-900'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Colors
            </button>
            <button
              onClick={() => setActivePrimitive('typography')}
              className={`px-4 py-2 rounded-md font-medium transition-colors whitespace-nowrap ${
                activePrimitive === 'typography'
                  ? 'bg-blue-100 text-blue-900'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Typography
            </button>
            <button
              onClick={() => setActivePrimitive('iconography')}
              className={`px-4 py-2 rounded-md font-medium transition-colors whitespace-nowrap ${
                activePrimitive === 'iconography'
                  ? 'bg-blue-100 text-blue-900'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Iconography
            </button>
            <button
              onClick={() => setActivePrimitive('spacing')}
              className={`px-4 py-2 rounded-md font-medium transition-colors whitespace-nowrap ${
                activePrimitive === 'spacing'
                  ? 'bg-blue-100 text-blue-900'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Spacing
            </button>
            <button
              onClick={() => setActivePrimitive('shadows')}
              className={`px-4 py-2 rounded-md font-medium transition-colors whitespace-nowrap ${
                activePrimitive === 'shadows'
                  ? 'bg-blue-100 text-blue-900'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Shadows
            </button>
          </div>
        </div>
      </div>

      {activePrimitive === 'logo' && <LogoShowcase />}
      {activePrimitive === 'colors' && <ColorPalette />}
      {activePrimitive === 'typography' && <TypographyShowcase />}
      {activePrimitive === 'iconography' && <IconographyShowcase />}
      {activePrimitive === 'spacing' && <SpacingShowcase />}
      {activePrimitive === 'shadows' && <ShadowsShowcase />}
    </div>
  );
}
