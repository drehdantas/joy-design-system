import { useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonsShowcase from '../components/ButtonsShowcase';
import IconButtonsShowcase from '../components/IconButtonsShowcase';
import InputsShowcase from '../components/InputsShowcase';
import SearchBarShowcase from '../components/SearchBarShowcase';
import BottomNavShowcase from '../components/BottomNavShowcase';
import TicketsShowcase from '../components/TicketsShowcase';
import SectionHeadersShowcase from '../components/SectionHeadersShowcase';
import EmptyStatesShowcase from '../components/EmptyStatesShowcase';
import CardsShowcase from '../components/CardsShowcase';
import BadgesShowcase from '../components/BadgesShowcase';
import ProgressBarShowcase from '../components/ProgressBarShowcase';
import RewardBadgesShowcase from '../components/RewardBadgesShowcase';
import HeaderShowcase from '../components/HeaderShowcase';
import IllustrationsShowcase from '../components/IllustrationsShowcase';

type ComponentTab = 'buttons' | 'iconButtons' | 'inputs' | 'searchBar' | 'bottomNav' | 'tickets' | 'sectionHeaders' | 'emptyStates' | 'cards' | 'badges' | 'statusFeedback' | 'rewardBadges' | 'header' | 'illustrations';

export default function ComponentsPage() {
  const [activeComponent, setActiveComponent] = useState<ComponentTab>('buttons');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 sticky top-[73px] z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <button
              onClick={() => setActiveComponent('statusFeedback')}
              className={`px-4 py-2 rounded-md font-medium transition-colors whitespace-nowrap ${
                activeComponent === 'statusFeedback'
                  ? 'bg-blue-100 text-blue-900'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Status & Feedback
            </button>
            <button
              onClick={() => setActiveComponent('rewardBadges')}
              className={`px-4 py-2 rounded-md font-medium transition-colors whitespace-nowrap ${
                activeComponent === 'rewardBadges'
                  ? 'bg-blue-100 text-blue-900'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Reward Badges
            </button>
            <button
              onClick={() => setActiveComponent('header')}
              className={`px-4 py-2 rounded-md font-medium transition-colors whitespace-nowrap ${
                activeComponent === 'header'
                  ? 'bg-blue-100 text-blue-900'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Headers
            </button>
            <button
              onClick={() => setActiveComponent('illustrations')}
              className={`px-4 py-2 rounded-md font-medium transition-colors whitespace-nowrap ${
                activeComponent === 'illustrations'
                  ? 'bg-blue-100 text-blue-900'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Illustrations
            </button>
          </div>
        </div>
      </div>

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
      {activeComponent === 'statusFeedback' && <ProgressBarShowcase />}
      {activeComponent === 'rewardBadges' && <RewardBadgesShowcase />}
      {activeComponent === 'header' && <HeaderShowcase />}
      {activeComponent === 'illustrations' && <IllustrationsShowcase />}
    </div>
  );
}
