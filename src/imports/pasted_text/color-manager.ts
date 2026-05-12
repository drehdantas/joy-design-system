export class ColorManager {
  // Colors as per the Hi-fi design system
  // Primary Colors
  static readonly primary = '#2C45FF';
  static readonly primaryColorLight = '#E3E9FF';
  static readonly white = '#FFFFFF';
  static readonly deepBlue = '#090E35';
  static readonly marineBlue = '#316bb8';

  // Secondary Colors
  static readonly orange = '#FF7F00';
  static readonly teal = '#76E0F3';
  static readonly purple = '#4200D9';
  static readonly neonYellow = '#ECFF40';
  static readonly darkGreen = '#008553';

  // Tertiary Colors
  static readonly dark = '#575F80';
  static readonly mediumGray = '#C1BFC7';
  static readonly blue = '#ADBEFF';
  static readonly darkRed = '#D40020';
  static readonly green = '#4FD43A';

  // Overlays
  static readonly overlayLightGrey = '#FCFCFC';
  static readonly overlayMediumGray = '#F9F9F9';
  static readonly overlayDarkGrey = '#DDDAE5';
  static readonly overlayLightBlue = '#E3E9FF';
  static readonly overlayMediumBlue = '#4158FF';
  static readonly overlayDarkBlue = '#5519DD';
  static readonly overlayOrange = '#FF8C19';
  static readonly overlayTeal = '#91E6F5';
  static readonly overlayNeonYellow = '#E3F53D';
  static readonly overlayGreen = '#40BE60';
  static readonly overlayLightGreen = '#B3DACB';
  static readonly overlayRed = '#D14408';
  static readonly overlayLilac = '#EDE7F6';
  static readonly overlayTransparentBlue = 'rgba(44, 69, 255, 0.4)';
  static readonly overlayTransparentDark = 'rgba(0, 0, 0, 0.5)';

  // Status
  static readonly success = '#4FC43A';
  static readonly warning = '#FFE500';
  static readonly error = '#C12C01';

  // Colors are need to remove from the design system
  static readonly darkGrey = '#747474';

  // Tertiary Colors
  static readonly gray = '#DDDAE5';
  static readonly lightGray = '#D9D9D9';
  static readonly lighterGrey = '#767680';
  static readonly deepGray = '#747474';
  static readonly darkGray = '#9E9E9E';

  static readonly red = '#FF3D0D';

  // Standard Colors
  static readonly black = '#000000';
  static readonly darkBlack = '#121212';
  static readonly transparent = 'transparent';
  static readonly yellow = '#FFEB3B';
  static readonly eclipse = '#303030';
  static readonly lightBlack = '#181818';

  // Other Colors
  static readonly shimmerBaseColor = '#E0E0E0';
  static readonly shimmerHighlightColor = '#F5F5F5';
  static readonly silver = '#C0C0C0';
  static readonly primarySelected = '#E3E9FF';
  static readonly cardShadow = '#0E424F';
  static readonly arrowBlack = '#001226';
  static readonly secondaryCardColor = '#E2F5FF';
  static readonly iconAlternativeColor = '#565E66';
  static readonly iconAlternativeColor2 = '#007B8B';
  static readonly expiredColor = '#F2B3BC';
  static readonly timerBackground = '#F3F7FD';
  static readonly timerBorder = '#D7E5F8';
  static readonly timerRedBorder = '#E56679';
  static readonly timerRedBackground = '#FBE6E9';

  // Color Palette
  static readonly yellow100 = '#F7FFB3';
  static readonly yellow200 = '#F4FF8C';
  static readonly yellow300 = '#F0FF66';
  static readonly yellow500 = '#ECFF40';
  static readonly orange100 = '#FFCC99';
  static readonly orange200 = '#FFB266';
  static readonly orange300 = '#FF9933';
  static readonly orange500 = '#FF7F00';
  static readonly teal100 = '#C8F3FA';
  static readonly teal200 = '#ADECF8';
  static readonly teal300 = '#91E6F5';
  static readonly teal500 = '#76E0F3';
  static readonly blue100 = '#A1B4FFFA';
  static readonly blue200 = '#728EFF';
  static readonly blue300 = '#4369FF';
  static readonly blue500 = '#1443FF';
  static readonly purple100 = '#D899E5FA';
  static readonly purple200 = '#C466D9';
  static readonly purple300 = '#B133CC';
  static readonly purple500 = '#9D00BF';

  // Semantic Colors
  static readonly info50 = '#EBF2FD';
  static readonly info100 = '#C1D7F9';
  static readonly info200 = '#A3C4F6';
  static readonly info300 = '#78A9F2';
  static readonly info400 = '#5E98F0';
  static readonly info500 = '#367EEC';
  static readonly info600 = '#3173D7';
  static readonly info700 = '#2659A8';
  static readonly info800 = '#1E4582';
  static readonly info900 = '#173563';
  static readonly warning50 = '#FFFAE9';
  static readonly warning100 = '#FFEEBA';
  static readonly warning200 = '#FFE698';
  static readonly warning300 = '#FEDA6A';
  static readonly warning400 = '#FED34D';
  static readonly warning500 = '#FEC820';
  static readonly warning600 = '#E7B61D';
  static readonly warning700 = '#B48E17';
  static readonly warning800 = '#8C6E12';
  static readonly warning900 = '#6B540D';
  static readonly success50 = '#E9F6EC';
  static readonly success100 = '#B9E4C3';
  static readonly success200 = '#98D7A5';
  static readonly success300 = '#68C57C';
  static readonly success400 = '#4BBA63';
  static readonly success500 = '#1EA93C';
  static readonly success600 = '#1B9A37';
  static readonly success700 = '#15782B';
  static readonly success800 = '#115D21';
  static readonly success900 = '#0D4719';
  static readonly danger50 = '#FAEBEB';
  static readonly danger100 = '#F1BFC1';
  static readonly danger200 = '#EAA1A3';
  static readonly danger300 = '#E07679';
  static readonly danger400 = '#DA5B5F';
  static readonly danger500 = '#D13237';
  static readonly danger600 = '#BE2E32';
  static readonly danger700 = '#942427';
  static readonly danger800 = '#731C1E';
  static readonly danger900 = '#581517';

  // Text Colors
  static readonly dark100 = '#CECFD7';
  static readonly dark200 = '#9D9FAF';
  static readonly dark300 = '#6B6F86';
  static readonly dark400 = '#3A3F5E';
  static readonly dark500 = '#090F39';

  static readonly gray100 = '#EFEFEF';
  static readonly gray200 = '#272727';
  static readonly gray300 = '#656565';
  static readonly gray400 = '#A2A2A2';
  static readonly gray500 = '#667085';
  static readonly gray700 = '#4b4b4b';
  static readonly gray800 = '#1D1D1D';
  static readonly black100 = '#CECFD7FA';

  // FIFA
  static readonly fifaLime = '#BAEF01';
  static readonly fifaGreen = '#51a74b';
  static readonly fifaDarkGray = '#2f2f2f';
  static readonly fifaBlackTexture = '#1b1b1b';
  static readonly fifaBlack = '#181818';
  static readonly fifaTeal = '#75FBD9';
  static readonly fifaOrange = '#ea5528';
  static readonly fifaRed = '#b52521';
  static readonly fifaBlue = '#57a1c9';
  static readonly fifaYellow = '#f5c242';
  static readonly fifaPurple = '#4c1991';
  static readonly fifaLavender = '#b394f6';
  static readonly fifaMaroon = '#761512';
  static readonly fifaSpringGreen = '#A2ED00';
  static readonly fifaBannerBlack = '#2A1100';

  // Gradient Colors
  static readonly gradiendRed = '#E90101';
  static readonly gradiendPurple = '#6A02F7';
  static readonly gradiendBlue = '#244FFE';
  static readonly gradiendCyan = '#01FFD7';
  static readonly gradiendGreen = '#9FED01';

  static readonly blackLock = '#484848';

  static readonly fifaSpecial: string[] = [
    '#b72a2f', // Red
    '#7115cd', // Purple
    '#3c35f1', // Blue
    '#62d4de', // Teal
    '#85f37d', // Green
    '#8fcb4a', // Yellow
  ];

  static readonly crimsonRed = '#CE3A2B';
  static readonly darkMaroon = '#360000';

  static readonly skyBlue = '#33ABF0';
  static readonly navyBlue = '#022B5F';
  static readonly gradientGoldenBrown = '#A97E12';
  static readonly gradientLightYellow = '#FFF699';

  static readonly deepTealBlue = '#092538';
  static readonly steelBlue = '#25506D';

  static readonly brightRed = '#ED1C24';
  static readonly burntOrange = '#E65E25';
  static readonly brightGreen = '#43B02A';
  static readonly deepGreen = '#046A38';
  static readonly lightPink = '#F2B3BC';
  static readonly charcoalBlack = '#131313';
  static readonly textGrey = '#9D9FAFFA';
}