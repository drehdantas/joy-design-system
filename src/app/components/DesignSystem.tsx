import { useState } from 'react';
import ColorPalette from './ColorPalette';
import TypographyShowcase from './TypographyShowcase';
import IconographyShowcase from './IconographyShowcase';
import SpacingShowcase from './SpacingShowcase';
import ShadowsShowcase from './ShadowsShowcase';
import ButtonsShowcase from './ButtonsShowcase';
import IconButtonsShowcase from './IconButtonsShowcase';
import InputsShowcase from './InputsShowcase';
import SearchBarShowcase from './SearchBarShowcase';
import BottomNavShowcase from './BottomNavShowcase';
import TicketsShowcase from './TicketsShowcase';
import SectionHeadersShowcase from './SectionHeadersShowcase';
import EmptyStatesShowcase from './EmptyStatesShowcase';
import CardsShowcase from './CardsShowcase';
import BadgesShowcase from './BadgesShowcase';

type Section = 'primitives' | 'components';
type PrimitiveTab = 'colors' | 'typography' | 'iconography' | 'spacing' | 'shadows';
type ComponentTab = 'buttons' | 'iconButtons' | 'inputs' | 'searchBar' | 'bottomNav' | 'tickets' | 'sectionHeaders' | 'emptyStates' | 'cards' | 'badges';

export default function DesignSystem() {
  const [activeSection, setActiveSection] = useState<Section>('primitives');
  const [activePrimitive, setActivePrimitive] = useState<PrimitiveTab>('colors');
  const [activeComponent, setActiveComponent] = useState<ComponentTab>('buttons');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6 border-b border-gray-200">
            <h1 className="text-3xl font-bold text-gray-900">Design System</h1>
            <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setActiveSection('primitives')}
                className={`px-8 py-2 rounded-md font-semibold transition-colors ${
                  activeSection === 'primitives'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Primitives
              </button>
              <button
                onClick={() => setActiveSection('components')}
                className={`px-8 py-2 rounded-md font-semibold transition-colors ${
                  activeSection === 'components'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Components
              </button>
            </div>
          </div>

          {activeSection === 'primitives' && (
            <div className="flex gap-1 py-4 overflow-x-auto">
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
          )}

          {activeSection === 'components' && (
            <div className="flex gap-1 py-4 overflow-x-auto">
              <button
                onClick={() => setActiveComponent('buttons')}
                className={`px-4 py-2 rounded-md font-medium transition-colors whitespace-nowrap ${
                  activeComponent === 'buttons'
                    ? 'bg-blue-100 text-blue-900'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Buttons
              </button>
              <button
                onClick={() => setActiveComponent('iconButtons')}
                className={`px-4 py-2 rounded-md font-medium transition-colors whitespace-nowrap ${
                  activeComponent === 'iconButtons'
                    ? 'bg-blue-100 text-blue-900'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Icon Buttons
              </button>
              <button
                onClick={() => setActiveComponent('inputs')}
                className={`px-4 py-2 rounded-md font-medium transition-colors whitespace-nowrap ${
                  activeComponent === 'inputs'
                    ? 'bg-blue-100 text-blue-900'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Inputs
              </button>
              <button
                onClick={() => setActiveComponent('searchBar')}
                className={`px-4 py-2 rounded-md font-medium transition-colors whitespace-nowrap ${
                  activeComponent === 'searchBar'
                    ? 'bg-blue-100 text-blue-900'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Search Bar
              </button>
              <button
                onClick={() => setActiveComponent('bottomNav')}
                className={`px-4 py-2 rounded-md font-medium transition-colors whitespace-nowrap ${
                  activeComponent === 'bottomNav'
                    ? 'bg-blue-100 text-blue-900'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Bottom Nav
              </button>
              <button
                onClick={() => setActiveComponent('tickets')}
                className={`px-4 py-2 rounded-md font-medium transition-colors whitespace-nowrap ${
                  activeComponent === 'tickets'
                    ? 'bg-blue-100 text-blue-900'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Tickets
              </button>
              <button
                onClick={() => setActiveComponent('sectionHeaders')}
                className={`px-4 py-2 rounded-md font-medium transition-colors whitespace-nowrap ${
                  activeComponent === 'sectionHeaders'
                    ? 'bg-blue-100 text-blue-900'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Section Headers
              </button>
              <button
                onClick={() => setActiveComponent('emptyStates')}
                className={`px-4 py-2 rounded-md font-medium transition-colors whitespace-nowrap ${
                  activeComponent === 'emptyStates'
                    ? 'bg-blue-100 text-blue-900'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Empty States
              </button>
              <button
                onClick={() => setActiveComponent('cards')}
                className={`px-4 py-2 rounded-md font-medium transition-colors whitespace-nowrap ${
                  activeComponent === 'cards'
                    ? 'bg-blue-100 text-blue-900'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Cards
              </button>
              <button
                onClick={() => setActiveComponent('badges')}
                className={`px-4 py-2 rounded-md font-medium transition-colors whitespace-nowrap ${
                  activeComponent === 'badges'
                    ? 'bg-blue-100 text-blue-900'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Badges
              </button>
            </div>
          )}
        </div>
      </div>

      {activeSection === 'primitives' && (
        <>
          {activePrimitive === 'colors' && <ColorPalette />}
          {activePrimitive === 'typography' && <TypographyShowcase />}
          {activePrimitive === 'iconography' && <IconographyShowcase />}
          {activePrimitive === 'spacing' && <SpacingShowcase />}
          {activePrimitive === 'shadows' && <ShadowsShowcase />}
        </>
      )}

      {activeSection === 'components' && (
        <>
          {activeComponent === 'buttons' && <ButtonsShowcase />}
          {activeComponent === 'iconButtons' && <IconButtonsShowcase />}
          {activeComponent === 'inputs' && <InputsShowcase />}
          {activeComponent === 'searchBar' && <SearchBarShowcase />}
          {activeComponent === 'bottomNav' && <BottomNavShowcase />}
          {activeComponent === 'tickets' && <TicketsShowcase />}
          {activeComponent === 'sectionHeaders' && <SectionHeadersShowcase />}
          {activeComponent === 'emptyStates' && <EmptyStatesShowcase />}
          {activeComponent === 'cards' && <CardsShowcase />}
          {activeComponent === 'badges' && <BadgesShowcase />}
        </>
      )}
    </div>
  );
}
