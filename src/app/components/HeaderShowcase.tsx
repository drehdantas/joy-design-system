import AppHeaderComponent from '../../imports/CardInfo-1-8/CardInfo-153-888';
import DetailViewHeaderComponent from '../../imports/CardInfo-1-9/CardInfo-154-2058';
import FeaturedContentHeaderComponent from '../../imports/CardInfo-1-10/CardInfo-157-2194';

export default function HeaderShowcase() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h2 className="headline-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>
          Headers
        </h2>
        <p className="title-large" style={{ color: 'var(--color-deep-blue)' }}>
          Headers provide essential navigation and context at the top of application screens. They maintain brand presence, display critical information, and offer quick access to key features while guiding users through different levels of content hierarchy.
        </p>
      </div>

      <div className="space-y-12 mb-16">
        <div>
          <h3 className="title-large font-bold mb-6" style={{ color: 'var(--color-deep-blue)' }}>
            Header Types
          </h3>

          <div className="space-y-8">
            {/* App Header */}
            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>
                App Header (Default State)
              </p>
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <div className="space-y-6">
                  <div>
                    <p className="body-medium mb-4 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Header Display
                    </p>
                    <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg overflow-hidden inline-block">
                      <AppHeaderComponent />
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                    <p className="body-medium mb-3 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Purpose and Functionality
                    </p>
                    <p className="body-medium mb-4" style={{ color: 'var(--color-gray-500)' }}>
                      This component is the primary navigational bar fixed at the top of the application screen. It serves as the brand's constant presence and provides quick access to high-priority utility features and status indicators. The App Header maintains a strong, minimalist brand identity while offering essential utility. Its function is to clearly anchor the user on every screen and provide immediate visibility of critical status information (such as points balance and notifications) and key user actions (like favorites).
                    </p>
                    <p className="body-medium mb-3 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Elements and Use
                    </p>
                    <div className="space-y-3">
                      <p className="body-medium" style={{ color: 'var(--color-gray-500)' }}>
                        The header is composed of three core, distinct action zones:
                      </p>
                      <div>
                        <p className="body-medium font-semibold" style={{ color: 'var(--color-deep-blue)' }}>Brand Identity (Left):</p>
                        <p className="body-medium" style={{ color: 'var(--color-gray-500)' }}>Element: The JOY logo is prominently displayed. Function: Reinforces brand recognition and serves as a potential navigational shortcut back to the main Home screen.</p>
                      </div>
                      <div>
                        <p className="body-medium font-semibold" style={{ color: 'var(--color-deep-blue)' }}>Utility Actions (Center-Right):</p>
                        <p className="body-medium" style={{ color: 'var(--color-gray-500)' }}>Element: High-priority, universally understood Icon Buttons (e.g., Heart for Favorites, Bell for Notifications). Function: Provides one-tap access to secondary utility screens. The bell icon typically uses a Notification Badge overlay to indicate unread alerts.</p>
                      </div>
                      <div>
                        <p className="body-medium font-semibold" style={{ color: 'var(--color-deep-blue)' }}>Status Indicator (Far Right):</p>
                        <p className="body-medium" style={{ color: 'var(--color-gray-500)' }}>Element: The Points Value Badge (e.g., "100" with the JOY Coin icon) is shown in a high-contrast style. Function: Provides continuous, real-time feedback on the user's current point balance. This is a critical element for motivating engagement within the loyalty program.</p>
                      </div>
                    </div>
                    <p className="body-medium mt-4 mb-3 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Usage Guidelines
                    </p>
                    <div className="space-y-2">
                      <p className="body-medium" style={{ color: 'var(--color-gray-500)' }}>
                        <span className="font-semibold">Fixed Position:</span> The header must remain fixed at the top of the viewport on all primary screens of the application.
                      </p>
                      <p className="body-medium" style={{ color: 'var(--color-gray-500)' }}>
                        <span className="font-semibold">Minimalism:</span> Due to its continuous presence, the header maintains a clean and simple design, reserved only for the most critical actions and statuses.
                      </p>
                      <p className="body-medium" style={{ color: 'var(--color-gray-500)' }}>
                        <span className="font-semibold">Color Adaptation:</span> While displayed here on a dark background (making the icons white), the header's color palette should adapt its icons for legibility based on the screen's background color (e.g., Dark icons on a white background).
                      </p>
                      <p className="body-medium" style={{ color: 'var(--color-gray-500)' }}>
                        <span className="font-semibold">Hierarchy:</span> The points status is given the strongest visual treatment (using color and a badge) to emphasize its importance to the user experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Fixed navigation bar displaying brand logo, favorites icon, notification bell, and points balance badge. Essential for maintaining brand presence and providing quick access to key features.
              </p>
            </div>

            {/* Detail View Header */}
            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>
                Detail View Header
              </p>
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <div className="space-y-6">
                  <div>
                    <p className="body-medium mb-4 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Detail View Header
                    </p>
                    <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg overflow-hidden inline-block">
                      <DetailViewHeaderComponent />
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                    <p className="body-medium mb-3 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Purpose and Functionality
                    </p>
                    <p className="body-medium mb-4" style={{ color: 'var(--color-gray-500)' }}>
                      This component is the navigational bar fixed at the top of any detail screen (e.g., a specific campaign, reward, or user profile). It prioritizes navigation back to the previous screen while providing contextual actions. The Detail View Header facilitates seamless navigation, allowing users to exit the detailed content easily. Its key function is to anchor utility actions (like favoriting or ranking) directly within the context of the content being viewed, without cluttering the main screen space.
                    </p>
                    <p className="body-medium mb-3 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Elements and Use
                    </p>
                    <div className="space-y-3">
                      <p className="body-medium" style={{ color: 'var(--color-gray-500)' }}>
                        The header is composed of three primary functional elements:
                      </p>
                      <div>
                        <p className="body-medium font-semibold" style={{ color: 'var(--color-deep-blue)' }}>Back Navigation (Left):</p>
                        <p className="body-medium" style={{ color: 'var(--color-gray-500)' }}>Element: A circular, filled button (typically Joy Blue) containing a back arrow icon. Function: Serves as the universal control for returning to the previous screen or list view. This placement ensures easy one-handed operation.</p>
                      </div>
                      <div>
                        <p className="body-medium font-semibold" style={{ color: 'var(--color-deep-blue)' }}>Contextual Tag/Filter (Center-Right):</p>
                        <p className="body-medium" style={{ color: 'var(--color-gray-500)' }}>Element: A pill-shaped Tag (e.g., "Ranking") using a secondary brand color (e.g., Teal) and white text. Function: Communicates the current category, status, or filter applied to the content. It can also function as a quick-switch filter if the user is viewing a segmented section (e.g., toggling between a Ranking view and a Prizes view).</p>
                      </div>
                      <div>
                        <p className="body-medium font-semibold" style={{ color: 'var(--color-deep-blue)' }}>Utility Action (Far Right):</p>
                        <p className="body-medium" style={{ color: 'var(--color-gray-500)' }}>Element: A small, circular Icon Button (e.g., an outlined Heart icon). Function: Provides immediate access to a key utility action relevant to the content, such as favoriting the item or sharing it. This ensures that the most frequent actions are always accessible.</p>
                      </div>
                    </div>
                    <p className="body-medium mt-4 mb-3 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Usage Guidelines
                    </p>
                    <div className="space-y-2">
                      <p className="body-medium" style={{ color: 'var(--color-gray-500)' }}>
                        <span className="font-semibold">Navigation Priority:</span> The back button should always be the leftmost element and clearly visible for easy access.
                      </p>
                      <p className="body-medium" style={{ color: 'var(--color-gray-500)' }}>
                        <span className="font-semibold">Context Awareness:</span> The header should adapt to the content being viewed, showing relevant actions and status indicators.
                      </p>
                      <p className="body-medium" style={{ color: 'var(--color-gray-500)' }}>
                        <span className="font-semibold">Visual Consistency:</span> Maintain consistent spacing and sizing with the main app header for a cohesive navigation experience.
                      </p>
                      <p className="body-medium" style={{ color: 'var(--color-gray-500)' }}>
                        <span className="font-semibold">Action Accessibility:</span> Key actions like favoriting should be immediately accessible without requiring additional taps or navigation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Secondary navigation bar for detail screens with back button, contextual actions, and status indicators. Enables easy navigation while maintaining access to key utilities.
              </p>
            </div>

            {/* Featured Content Header */}
            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>
                Featured Content Header
              </p>
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <div className="space-y-6">
                  <div>
                    <p className="body-medium mb-4 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Featured Content Header
                    </p>
                    <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg overflow-hidden inline-block">
                      <FeaturedContentHeaderComponent />
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                    <p className="body-medium mb-3 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Purpose and Functionality
                    </p>
                    <p className="body-medium mb-4" style={{ color: 'var(--color-gray-500)' }}>
                      This component is a bold, high-impact header designed to introduce and highlight key, exclusive, or featured content sections within the JOY application. Its purpose is to immediately capture user attention and guide them towards high-value content. The Featured Content Header is primarily used to elevate specific content blocks, such as leaderboards or exclusive reward sections, giving them maximum visual prominence. It functions as an engaging entry point that uses playful, brand-aligned terminology (like "Top Enjoyers") to encourage exploration.
                    </p>
                    <p className="body-medium mb-3 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Elements and Use
                    </p>
                    <div className="space-y-3">
                      <p className="body-medium" style={{ color: 'var(--color-gray-500)' }}>
                        The header is composed of two key elements:
                      </p>
                      <div>
                        <p className="body-medium font-semibold" style={{ color: 'var(--color-deep-blue)' }}>Main Title:</p>
                        <p className="body-medium" style={{ color: 'var(--color-gray-500)' }}>Element: Large, bold, and prominent typography (e.g., "Top Enjoyers"). Function: Clearly labels the featured content block, establishing immediate visual hierarchy.</p>
                      </div>
                      <div>
                        <p className="body-medium font-semibold" style={{ color: 'var(--color-deep-blue)' }}>Call-to-Action (CTA) Pill:</p>
                        <p className="body-medium" style={{ color: 'var(--color-gray-500)' }}>Element: A secondary text link housed within a pill-shaped container (e.g., "Descubre que puedes ganar con tus JOY Coins"). Function: Acts as a contextual CTA, inviting the user to tap and explore the content block in more detail. The pill shape gives it a distinct, interactive affordance.</p>
                      </div>
                      <div>
                        <p className="body-medium font-semibold" style={{ color: 'var(--color-deep-blue)' }}>Visual Hierarchy:</p>
                        <p className="body-medium" style={{ color: 'var(--color-gray-500)' }}>The use of large text for the title and smaller text within the interactive pill establishes a clear reading order: first, identify the section (Title), then, understand the value proposition (CTA).</p>
                      </div>
                    </div>
                    <p className="body-medium mt-4 mb-3 font-semibold" style={{ color: 'var(--color-deep-blue)' }}>
                      Usage Guidelines
                    </p>
                    <div className="space-y-2">
                      <p className="body-medium" style={{ color: 'var(--color-gray-500)' }}>
                        <span className="font-semibold">High Impact:</span> Use this header for premium or exclusive content that deserves maximum visual attention and user engagement.
                      </p>
                      <p className="body-medium" style={{ color: 'var(--color-gray-500)' }}>
                        <span className="font-semibold">Brand Voice:</span> Leverage playful, brand-aligned language that resonates with the JOY personality and creates an emotional connection.
                      </p>
                      <p className="body-medium" style={{ color: 'var(--color-gray-500)' }}>
                        <span className="font-semibold">Clear CTA:</span> The pill-shaped CTA should clearly communicate the value of exploring the featured content section.
                      </p>
                      <p className="body-medium" style={{ color: 'var(--color-gray-500)' }}>
                        <span className="font-semibold">Visual Prominence:</span> The large typography and bold styling should create immediate visual hierarchy and draw user attention to featured content areas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Bold, high-impact header for featured content sections with large title and contextual CTA pill. Designed to capture attention and drive engagement with premium content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
