import { useState } from 'react';
import InfoCardShowcase from './InfoCardShowcase';
import RewardCardShowcase from './RewardCardShowcase';
import BrandsProductsCardShowcase from './BrandsProductsCardShowcase';
import ProgressCardShowcase from './ProgressCardShowcase';
import RewardDetailsCardShowcase from './RewardDetailsCardShowcase';
import RedeemableCardShowcase from './RedeemableCardShowcase';
import PromotionCardShowcase from './PromotionCardShowcase';
import AccountBalanceCardShowcase from './AccountBalanceCardShowcase';
import CampaignDetailHeaderShowcase from './CampaignDetailHeaderShowcase';
import StatusCardShowcase from './StatusCardShowcase';
import B2B2CCardShowcase from './B2B2CCardShowcase';
import StepsCardShowcase from './StepsCardShowcase';

type CardType = 'info' | 'reward' | 'brands' | 'progress' | 'details' | 'redeemable' | 'promotion' | 'balance' | 'campaign' | 'status' | 'b2b2c' | 'steps';

export default function CardsShowcase() {
  const [activeCard, setActiveCard] = useState<CardType>('info');

  return (
    <div>
      <div className="bg-white border-b border-gray-200 sticky top-[73px] z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 py-4 overflow-x-auto">
            <button
              onClick={() => setActiveCard('info')}
              className={`px-4 py-2 rounded-md font-medium transition-colors whitespace-nowrap ${
                activeCard === 'info'
                  ? 'bg-blue-100 text-blue-900'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Info Card
            </button>
            <button
              onClick={() => setActiveCard('reward')}
              className={`px-4 py-2 rounded-md font-medium transition-colors whitespace-nowrap ${
                activeCard === 'reward'
                  ? 'bg-blue-100 text-blue-900'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Reward Card
            </button>
            <button
              onClick={() => setActiveCard('brands')}
              className={`px-4 py-2 rounded-md font-medium transition-colors whitespace-nowrap ${
                activeCard === 'brands'
                  ? 'bg-blue-100 text-blue-900'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Brands & Products
            </button>
            <button
              onClick={() => setActiveCard('progress')}
              className={`px-4 py-2 rounded-md font-medium transition-colors whitespace-nowrap ${
                activeCard === 'progress'
                  ? 'bg-blue-100 text-blue-900'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Progress Card
            </button>
            <button
              onClick={() => setActiveCard('details')}
              className={`px-4 py-2 rounded-md font-medium transition-colors whitespace-nowrap ${
                activeCard === 'details'
                  ? 'bg-blue-100 text-blue-900'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Reward Details
            </button>
            <button
              onClick={() => setActiveCard('redeemable')}
              className={`px-4 py-2 rounded-md font-medium transition-colors whitespace-nowrap ${
                activeCard === 'redeemable'
                  ? 'bg-blue-100 text-blue-900'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Redeemable Card
            </button>
            <button
              onClick={() => setActiveCard('promotion')}
              className={`px-4 py-2 rounded-md font-medium transition-colors whitespace-nowrap ${
                activeCard === 'promotion'
                  ? 'bg-blue-100 text-blue-900'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Promotion Card
            </button>
            <button
              onClick={() => setActiveCard('balance')}
              className={`px-4 py-2 rounded-md font-medium transition-colors whitespace-nowrap ${
                activeCard === 'balance'
                  ? 'bg-blue-100 text-blue-900'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Account Balance
            </button>
            <button
              onClick={() => setActiveCard('campaign')}
              className={`px-4 py-2 rounded-md font-medium transition-colors whitespace-nowrap ${
                activeCard === 'campaign'
                  ? 'bg-blue-100 text-blue-900'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Campaign Detail
            </button>
            <button
              onClick={() => setActiveCard('status')}
              className={`px-4 py-2 rounded-md font-medium transition-colors whitespace-nowrap ${
                activeCard === 'status'
                  ? 'bg-blue-100 text-blue-900'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Status Card
            </button>
            <button
              onClick={() => setActiveCard('b2b2c')}
              className={`px-4 py-2 rounded-md font-medium transition-colors whitespace-nowrap ${
                activeCard === 'b2b2c'
                  ? 'bg-blue-100 text-blue-900'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              B2B2C Locations
            </button>
            <button
              onClick={() => setActiveCard('steps')}
              className={`px-4 py-2 rounded-md font-medium transition-colors whitespace-nowrap ${
                activeCard === 'steps'
                  ? 'bg-blue-100 text-blue-900'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Steps Card
            </button>
          </div>
        </div>
      </div>

      {activeCard === 'info' && <InfoCardShowcase />}
      {activeCard === 'reward' && <RewardCardShowcase />}
      {activeCard === 'brands' && <BrandsProductsCardShowcase />}
      {activeCard === 'progress' && <ProgressCardShowcase />}
      {activeCard === 'details' && <RewardDetailsCardShowcase />}
      {activeCard === 'redeemable' && <RedeemableCardShowcase />}
      {activeCard === 'promotion' && <PromotionCardShowcase />}
      {activeCard === 'balance' && <AccountBalanceCardShowcase />}
      {activeCard === 'campaign' && <CampaignDetailHeaderShowcase />}
      {activeCard === 'status' && <StatusCardShowcase />}
      {activeCard === 'b2b2c' && <B2B2CCardShowcase />}
      {activeCard === 'steps' && <StepsCardShowcase />}
    </div>
  );
}
