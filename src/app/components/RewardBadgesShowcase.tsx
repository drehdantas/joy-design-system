import { useState } from 'react';
import svgPaths from '../../imports/CardInfo-4-4/svg-fh25e0fczg';
import imgBgBlur from '../../imports/CardInfo-4-4/8ac6b916b0036419e9ce5f324056429418a4d325.png';
import imgChangeImageHere from '../../imports/CardInfo-4-4/7d165549f87081314cc82169d92850f829cd2f28.png';
import RewardCategoryBannersComponent from '../../imports/CardInfo-1-6/CardInfo-140-384';
import MissionRewardBannerComponent from '../../imports/CardInfo-1-7/CardInfo-141-414';

interface UserRankingBadgeProps {
  rank: number;
  userName: string;
  points: number;
  profileImage?: string;
  accentColor?: string;
}

function UserRankingBadge({
  rank,
  userName,
  points,
  profileImage = imgChangeImageHere,
  accentColor = '#ECFF40'
}: UserRankingBadgeProps) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[162px]">
      <div className="h-[136px] relative shrink-0 w-full">
        <div className="-translate-x-1/2 absolute left-[calc(50%+5px)] opacity-35 size-[120px] top-[2px]">
          <div className="absolute inset-[-13.33%]">
            <img alt="" className="block max-w-none size-full" height="152" src={imgBgBlur} width="152" />
          </div>
        </div>
        <div className="-translate-x-1/2 absolute left-[calc(50%+7px)] size-[120px] top-0">
          <img alt="" className="absolute block inset-0 max-w-none size-full" height="120" src={profileImage} width="120" />
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Bowlby_One:Regular',sans-serif] justify-center leading-[0] left-[47px] not-italic text-[80px] text-[transparent] text-center top-[96px] whitespace-nowrap">
          <p className="leading-[96px]" style={{ WebkitTextStroke: `2px ${accentColor}` }}>{rank}</p>
        </div>
        <div className="absolute contents inset-[36.03%_86.11%_51.12%_4.32%]" style={{ containerType: "size" }}>
          <div className="absolute flex inset-[40.16%_90.14%_56.63%_6.42%] items-center justify-center" style={{ containerType: "size" }}>
            <div className="flex-none h-[hypot(-10.7782cqw,18.3002cqh)] rotate-[38.09deg] skew-x-[1.17deg] w-[hypot(100cqw,100cqh)]">
              <div className="relative size-full">
                <div className="absolute inset-[-1px_-14.12%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.08155 2">
                    <path d="M1 1H8.08155" stroke={accentColor} strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex inset-[36.03%_86.11%_58.81%_12.99%] items-center justify-center" style={{ containerType: "size" }}>
            <div className="flex-none h-[hypot(-67.0944cqw,3.01324cqh)] rotate-[78.28deg] skew-x-[0.49deg] w-[hypot(100cqw,100cqh)]">
              <div className="relative size-full">
                <div className="absolute inset-[-1px_-13.95%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.16998 2">
                    <path d="M1 1H8.16998" stroke={accentColor} strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex inset-[48.55%_91.35%_51.12%_4.32%] items-center justify-center" style={{ containerType: "size" }}>
            <div className="flex-none h-[hypot(-0.88882cqw,219.818cqh)] rotate-[3.71deg] skew-x-[0.13deg] w-[hypot(100cqw,100cqh)]">
              <div className="relative size-full">
                <div className="absolute inset-[-1px_-14.23%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.02625 2">
                    <path d="M1 1H8.02625" stroke={accentColor} strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full">
        <p className="font-['Onest:SemiBold',sans-serif] font-semibold leading-[1.1] min-w-full relative shrink-0 text-[16px] text-center text-white w-[min-content]">{userName}</p>
        <div className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[32px] shrink-0">
          <div className="relative shrink-0 size-[12px]">
            <div className="absolute inset-[-12.5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                <g>
                  <path d={svgPaths.p18037700} fill="#EFEFEF" />
                  <circle cx="7.5" cy="7.5" r="6.75" stroke="#EFEFEF" strokeWidth="1.5" />
                </g>
              </svg>
            </div>
          </div>
          <p className="font-['Onest:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#efefef] text-[14px] whitespace-nowrap">{points.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}

export default function RewardBadgesShowcase() {
  const [selectedRank, setSelectedRank] = useState(1);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h2 className="headline-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>
          Reward Badges
        </h2>
        <p className="title-large" style={{ color: 'var(--color-deep-blue)' }}>
          The Reward Badges category comprises high-impact visual components designed to elevate the presentation of prizes and rewards within the JOY application. These components are essential in the gamification and loyalty modules because they instantly communicate the value proposition and category of the reward (e.g., cash, tech, coupons) through vibrant color, custom graphics, and bold typography. They are instrumental in driving user engagement and celebrating achievements by transforming simple prize details into exciting, visually distinct calls-to-action.
        </p>
      </div>

      <div className="space-y-12 mb-16">
        <div>
          <h3 className="title-large font-bold mb-6" style={{ color: 'var(--color-deep-blue)' }}>
            Badge Types
          </h3>

          <div className="space-y-8">
            {/* User Ranking Badge */}
            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>
                User Ranking Badge
              </p>
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <div className="space-y-6">
                  {/* Interactive Demo */}
                  <div>
                    <p className="body-medium mb-4 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Interactive Demo
                    </p>
                    <div className="bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg p-8">
                      <div className="flex items-center justify-center gap-8 flex-wrap">
                        <UserRankingBadge
                          rank={selectedRank}
                          userName="Joy Martin"
                          points={15000}
                          accentColor="#ECFF40"
                        />
                      </div>

                      <div className="mt-6 flex justify-center">
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                          <label className="block text-white body-medium font-medium mb-2">Select Rank:</label>
                          <div className="flex gap-2">
                            {[1, 2, 3, 4, 5].map((rank) => (
                              <button
                                key={rank}
                                onClick={() => setSelectedRank(rank)}
                                className={`px-4 py-2 rounded-md body-medium font-medium transition-colors ${
                                  selectedRank === rank
                                    ? 'bg-white text-purple-600'
                                    : 'bg-white/20 text-white hover:bg-white/30'
                                }`}
                              >
                                {rank}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                    <p className="body-medium mb-3 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Purpose and Functionality
                    </p>
                    <p className="body-medium mb-4" style={{ color: 'var(--color-gray-500)' }}>
                      The Ranking Badge is a specialized profile display designed to showcase a user's ranking or placement within a competition or loyalty program (e.g., a weekly ranking). The User Ranking Badge serves as a motivational and status indicator. Its primary function is to immediately communicate a user's success or standing to them, fostering engagement and a competitive spirit. It visually elevates the user's profile picture, merging it with the achievement status.
                    </p>
                    <p className="body-medium mb-3 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Elements and Use
                    </p>
                    <div className="space-y-3">
                      <div>
                        <p className="body-medium font-semibold" style={{ color: 'var(--color-deep-blue)' }}>Profile Integration:</p>
                        <p className="body-medium" style={{ color: 'var(--color-gray-500)' }}>The user's profile picture is prominently displayed within a circular frame with soft, rounded edges, giving it a playful, modern aesthetic.</p>
                      </div>
                      <div>
                        <p className="body-medium font-semibold" style={{ color: 'var(--color-deep-blue)' }}>Ranking Number:</p>
                        <p className="body-medium" style={{ color: 'var(--color-gray-500)' }}>A large, stylized number (e.g., '1' for the top rank) is visually integrated with the profile image, using a subtle, outlined effect. This ensures the rank is immediately noticeable.</p>
                      </div>
                      <div>
                        <p className="body-medium font-semibold" style={{ color: 'var(--color-deep-blue)' }}>Highlight Accent:</p>
                        <p className="body-medium" style={{ color: 'var(--color-gray-500)' }}>The use of bright lines or a subtle light glow around the number adds an extra element of visual flair and energy, signifying achievement.</p>
                      </div>
                      <div>
                        <p className="body-medium font-semibold" style={{ color: 'var(--color-deep-blue)' }}>User Identification:</p>
                        <p className="body-medium" style={{ color: 'var(--color-gray-500)' }}>The user's name is clearly displayed below the image (e.g., "Joy Martin") to personalize the ranking.</p>
                      </div>
                      <div>
                        <p className="body-medium font-semibold" style={{ color: 'var(--color-deep-blue)' }}>Usage:</p>
                        <p className="body-medium" style={{ color: 'var(--color-gray-500)' }}>This component is typically used in leaderboards, profile headers, or congratulatory screens where the user's current ranking is the most important piece of information to convey.</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="body-medium mb-4 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Component Variants
                    </p>
                    <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg p-6">
                      <div className="flex gap-6 flex-wrap justify-center">
                        <div className="text-center">
                          <UserRankingBadge rank={1} userName="Top Rank" points={25000} accentColor="#ECFF40" />
                          <p className="mt-2 text-white body-small">1st Place - Yellow Accent</p>
                        </div>
                        <div className="text-center">
                          <UserRankingBadge rank={2} userName="Second Best" points={18000} accentColor="#FF6B00" />
                          <p className="mt-2 text-white body-small">2nd Place - Orange Accent</p>
                        </div>
                        <div className="text-center">
                          <UserRankingBadge rank={3} userName="Third Star" points={12000} accentColor="#1443FF" />
                          <p className="mt-2 text-white body-small">3rd Place - Blue Accent</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                User ranking badge displaying profile picture, ranking number, user name, and points. Used in leaderboards and competitive features.
              </p>
            </div>

            {/* Reward Category Banners */}
            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>
                Reward Category Banners
              </p>
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <div className="space-y-6">
                  <div className="flex justify-center items-center w-full">
                    <RewardCategoryBannersComponent />
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                    <p className="body-medium mb-3 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Purpose and Functionality
                    </p>
                    <p className="body-medium mb-4" style={{ color: 'var(--color-gray-500)' }}>
                      This is a collection of high-impact visual banners, designed to represent and promote the specific prize categories a user can win within the JOY application. They are used to inject energy and clarity into the reward presentation. The Reward Category Banners serve to immediately communicate the type and value of the prize available in a highly engaging and visual format. Their primary function is to draw the user's attention to the reward catalog, making the different prize types instantly recognizable and desirable through the use of vibrant colors, custom graphics, and clear text.
                    </p>
                    <p className="body-medium mb-3 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Elements and Use
                    </p>
                    <p className="body-medium" style={{ color: 'var(--color-gray-500)' }}>
                      Each banner uses a distinct Brand Color circle as its primary background, paired with custom graphics and text to define the reward category. This structure reinforces the visual theme of the gamification module.
                    </p>
                  </div>
                </div>
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Circular reward banners (153px) showcasing different prize categories with vibrant backgrounds, custom graphics, and clear value text. Categories include cash ($50 MXN), tech prizes, JOY coins ($300), and coupons (2x1).
              </p>
            </div>

            {/* Mission Reward Banner */}
            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>
                Mission Reward Banner
              </p>
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <div className="space-y-6">
                  <div className="flex justify-center">
                    <MissionRewardBannerComponent />
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                    <p className="body-medium mb-3 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Purpose and Functionality
                    </p>
                    <p className="body-medium mb-4" style={{ color: 'var(--color-gray-500)' }}>
                      This component is a specialized, high-impact banner designed to explicitly communicate the reward associated with completing a specific mission within the JOY app's gamification module. It clearly ties user effort (mission completion) directly to the benefit (the prize). The Mission Reward Banner serves to motivate and inform the user by prominently displaying the reward and its value. It ensures clarity regarding the exchange—"if you complete the mission, you receive this reward." It is a key element in promotional and mission-tracking interfaces.
                    </p>
                    <p className="body-medium mb-3 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Elements and Integration
                    </p>
                    <p className="body-medium" style={{ color: 'var(--color-gray-500)' }}>
                      This component combines a clear, text-based description with a vibrant visual element (the Reward Category Banner component) to maximize engagement. Reward Label: A bold, colored label clearly identifies the context of the prize, distinguishing it from general offers or purchases. Description: The core text details the specific reward, including the type, value, and platform. This ensures the user understands the exact utility of the prize. Visual Integration (Reward Category Banner): The graphic on the right utilizes the Reward Category Banner component (specifically the Digital Wallet/Cash variation). This component is interchangeable based on the prize type.
                    </p>
                  </div>
                </div>
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Combined banner component featuring text description on the left and a circular reward badge on the right, used to promote mission rewards and clearly communicate the value proposition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
