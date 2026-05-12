import { useState } from 'react';

interface ColorCardProps {
  name: string;
  value: string;
  cssVar: string;
}

function ColorCard({ name, value, cssVar }: ColorCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
      <div
        className="h-24 cursor-pointer relative group"
        style={{ backgroundColor: value }}
        onClick={() => handleCopy(value)}
      >
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity" />
        {copied && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-sm font-medium">
            Copied!
          </div>
        )}
      </div>
      <div className="p-3 bg-white">
        <p className="font-medium text-sm text-gray-900 mb-1">{name}</p>
        <button
          onClick={() => handleCopy(value)}
          className="text-xs text-gray-600 hover:text-gray-900 font-mono block mb-1"
        >
          {value}
        </button>
        <button
          onClick={() => handleCopy(cssVar)}
          className="text-xs text-blue-600 hover:text-blue-800 font-mono block"
        >
          {cssVar}
        </button>
      </div>
    </div>
  );
}

interface ColorSectionProps {
  title: string;
  colors: Array<{ name: string; value: string; cssVar: string }>;
}

function ColorSection({ title, colors }: ColorSectionProps) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {colors.map((color) => (
          <ColorCard key={color.cssVar} {...color} />
        ))}
      </div>
    </div>
  );
}

export default function ColorPalette() {
  const colorSections = [
    {
      title: 'Primary Colors',
      colors: [
        { name: 'Primary', value: '#2C45FF', cssVar: 'var(--color-primary)' },
        { name: 'Primary Light', value: '#E3E9FF', cssVar: 'var(--color-primary-light)' },
        { name: 'White', value: '#FFFFFF', cssVar: 'var(--color-white)' },
        { name: 'Deep Blue', value: '#090E35', cssVar: 'var(--color-deep-blue)' },
        { name: 'Marine Blue', value: '#316bb8', cssVar: 'var(--color-marine-blue)' },
      ],
    },
    {
      title: 'Secondary Colors',
      colors: [
        { name: 'Orange', value: '#FF7F00', cssVar: 'var(--color-orange)' },
        { name: 'Teal', value: '#76E0F3', cssVar: 'var(--color-teal)' },
        { name: 'Purple', value: '#4200D9', cssVar: 'var(--color-purple)' },
        { name: 'Neon Yellow', value: '#ECFF40', cssVar: 'var(--color-neon-yellow)' },
        { name: 'Dark Green', value: '#008553', cssVar: 'var(--color-dark-green)' },
      ],
    },
    {
      title: 'Tertiary Colors',
      colors: [
        { name: 'Dark', value: '#575F80', cssVar: 'var(--color-dark)' },
        { name: 'Medium Gray', value: '#C1BFC7', cssVar: 'var(--color-medium-gray)' },
        { name: 'Blue', value: '#ADBEFF', cssVar: 'var(--color-blue)' },
        { name: 'Dark Red', value: '#D40020', cssVar: 'var(--color-dark-red)' },
        { name: 'Green', value: '#4FD43A', cssVar: 'var(--color-green)' },
      ],
    },
    {
      title: 'Status Colors',
      colors: [
        { name: 'Success', value: '#4FC43A', cssVar: 'var(--color-success)' },
        { name: 'Warning', value: '#FFE500', cssVar: 'var(--color-warning)' },
        { name: 'Error', value: '#C12C01', cssVar: 'var(--color-error)' },
      ],
    },
    {
      title: 'Info Semantic',
      colors: [
        { name: 'Info 50', value: '#EBF2FD', cssVar: 'var(--color-info-50)' },
        { name: 'Info 100', value: '#C1D7F9', cssVar: 'var(--color-info-100)' },
        { name: 'Info 200', value: '#A3C4F6', cssVar: 'var(--color-info-200)' },
        { name: 'Info 300', value: '#78A9F2', cssVar: 'var(--color-info-300)' },
        { name: 'Info 400', value: '#5E98F0', cssVar: 'var(--color-info-400)' },
        { name: 'Info 500', value: '#367EEC', cssVar: 'var(--color-info-500)' },
        { name: 'Info 600', value: '#3173D7', cssVar: 'var(--color-info-600)' },
        { name: 'Info 700', value: '#2659A8', cssVar: 'var(--color-info-700)' },
        { name: 'Info 800', value: '#1E4582', cssVar: 'var(--color-info-800)' },
        { name: 'Info 900', value: '#173563', cssVar: 'var(--color-info-900)' },
      ],
    },
    {
      title: 'Warning Semantic',
      colors: [
        { name: 'Warning 50', value: '#FFFAE9', cssVar: 'var(--color-warning-50)' },
        { name: 'Warning 100', value: '#FFEEBA', cssVar: 'var(--color-warning-100)' },
        { name: 'Warning 200', value: '#FFE698', cssVar: 'var(--color-warning-200)' },
        { name: 'Warning 300', value: '#FEDA6A', cssVar: 'var(--color-warning-300)' },
        { name: 'Warning 400', value: '#FED34D', cssVar: 'var(--color-warning-400)' },
        { name: 'Warning 500', value: '#FEC820', cssVar: 'var(--color-warning-500)' },
        { name: 'Warning 600', value: '#E7B61D', cssVar: 'var(--color-warning-600)' },
        { name: 'Warning 700', value: '#B48E17', cssVar: 'var(--color-warning-700)' },
        { name: 'Warning 800', value: '#8C6E12', cssVar: 'var(--color-warning-800)' },
        { name: 'Warning 900', value: '#6B540D', cssVar: 'var(--color-warning-900)' },
      ],
    },
    {
      title: 'Success Semantic',
      colors: [
        { name: 'Success 50', value: '#E9F6EC', cssVar: 'var(--color-success-50)' },
        { name: 'Success 100', value: '#B9E4C3', cssVar: 'var(--color-success-100)' },
        { name: 'Success 200', value: '#98D7A5', cssVar: 'var(--color-success-200)' },
        { name: 'Success 300', value: '#68C57C', cssVar: 'var(--color-success-300)' },
        { name: 'Success 400', value: '#4BBA63', cssVar: 'var(--color-success-400)' },
        { name: 'Success 500', value: '#1EA93C', cssVar: 'var(--color-success-500)' },
        { name: 'Success 600', value: '#1B9A37', cssVar: 'var(--color-success-600)' },
        { name: 'Success 700', value: '#15782B', cssVar: 'var(--color-success-700)' },
        { name: 'Success 800', value: '#115D21', cssVar: 'var(--color-success-800)' },
        { name: 'Success 900', value: '#0D4719', cssVar: 'var(--color-success-900)' },
      ],
    },
    {
      title: 'Danger Semantic',
      colors: [
        { name: 'Danger 50', value: '#FAEBEB', cssVar: 'var(--color-danger-50)' },
        { name: 'Danger 100', value: '#F1BFC1', cssVar: 'var(--color-danger-100)' },
        { name: 'Danger 200', value: '#EAA1A3', cssVar: 'var(--color-danger-200)' },
        { name: 'Danger 300', value: '#E07679', cssVar: 'var(--color-danger-300)' },
        { name: 'Danger 400', value: '#DA5B5F', cssVar: 'var(--color-danger-400)' },
        { name: 'Danger 500', value: '#D13237', cssVar: 'var(--color-danger-500)' },
        { name: 'Danger 600', value: '#BE2E32', cssVar: 'var(--color-danger-600)' },
        { name: 'Danger 700', value: '#942427', cssVar: 'var(--color-danger-700)' },
        { name: 'Danger 800', value: '#731C1E', cssVar: 'var(--color-danger-800)' },
        { name: 'Danger 900', value: '#581517', cssVar: 'var(--color-danger-900)' },
      ],
    },
    {
      title: 'Yellow Palette',
      colors: [
        { name: 'Yellow 100', value: '#F7FFB3', cssVar: 'var(--color-yellow-100)' },
        { name: 'Yellow 200', value: '#F4FF8C', cssVar: 'var(--color-yellow-200)' },
        { name: 'Yellow 300', value: '#F0FF66', cssVar: 'var(--color-yellow-300)' },
        { name: 'Yellow 500', value: '#ECFF40', cssVar: 'var(--color-yellow-500)' },
      ],
    },
    {
      title: 'Orange Palette',
      colors: [
        { name: 'Orange 100', value: '#FFCC99', cssVar: 'var(--color-orange-100)' },
        { name: 'Orange 200', value: '#FFB266', cssVar: 'var(--color-orange-200)' },
        { name: 'Orange 300', value: '#FF9933', cssVar: 'var(--color-orange-300)' },
        { name: 'Orange 500', value: '#FF7F00', cssVar: 'var(--color-orange-500)' },
      ],
    },
    {
      title: 'Teal Palette',
      colors: [
        { name: 'Teal 100', value: '#C8F3FA', cssVar: 'var(--color-teal-100)' },
        { name: 'Teal 200', value: '#ADECF8', cssVar: 'var(--color-teal-200)' },
        { name: 'Teal 300', value: '#91E6F5', cssVar: 'var(--color-teal-300)' },
        { name: 'Teal 500', value: '#76E0F3', cssVar: 'var(--color-teal-500)' },
      ],
    },
    {
      title: 'Blue Palette',
      colors: [
        { name: 'Blue 100', value: '#A1B4FF', cssVar: 'var(--color-blue-100)' },
        { name: 'Blue 200', value: '#728EFF', cssVar: 'var(--color-blue-200)' },
        { name: 'Blue 300', value: '#4369FF', cssVar: 'var(--color-blue-300)' },
        { name: 'Blue 500', value: '#1443FF', cssVar: 'var(--color-blue-500)' },
      ],
    },
    {
      title: 'Purple Palette',
      colors: [
        { name: 'Purple 100', value: '#D899E5', cssVar: 'var(--color-purple-100)' },
        { name: 'Purple 200', value: '#C466D9', cssVar: 'var(--color-purple-200)' },
        { name: 'Purple 300', value: '#B133CC', cssVar: 'var(--color-purple-300)' },
        { name: 'Purple 500', value: '#9D00BF', cssVar: 'var(--color-purple-500)' },
      ],
    },
    {
      title: 'FIFA Brand Colors',
      colors: [
        { name: 'FIFA Lime', value: '#BAEF01', cssVar: 'var(--color-fifa-lime)' },
        { name: 'FIFA Green', value: '#51a74b', cssVar: 'var(--color-fifa-green)' },
        { name: 'FIFA Dark Gray', value: '#2f2f2f', cssVar: 'var(--color-fifa-dark-gray)' },
        { name: 'FIFA Black Texture', value: '#1b1b1b', cssVar: 'var(--color-fifa-black-texture)' },
        { name: 'FIFA Black', value: '#181818', cssVar: 'var(--color-fifa-black)' },
        { name: 'FIFA Teal', value: '#75FBD9', cssVar: 'var(--color-fifa-teal)' },
        { name: 'FIFA Orange', value: '#ea5528', cssVar: 'var(--color-fifa-orange)' },
        { name: 'FIFA Red', value: '#b52521', cssVar: 'var(--color-fifa-red)' },
        { name: 'FIFA Blue', value: '#57a1c9', cssVar: 'var(--color-fifa-blue)' },
        { name: 'FIFA Yellow', value: '#f5c242', cssVar: 'var(--color-fifa-yellow)' },
        { name: 'FIFA Purple', value: '#4c1991', cssVar: 'var(--color-fifa-purple)' },
        { name: 'FIFA Lavender', value: '#b394f6', cssVar: 'var(--color-fifa-lavender)' },
        { name: 'FIFA Maroon', value: '#761512', cssVar: 'var(--color-fifa-maroon)' },
        { name: 'FIFA Spring Green', value: '#A2ED00', cssVar: 'var(--color-fifa-spring-green)' },
        { name: 'FIFA Banner Black', value: '#2A1100', cssVar: 'var(--color-fifa-banner-black)' },
      ],
    },
    {
      title: 'Gradient Colors',
      colors: [
        { name: 'Gradient Red', value: '#E90101', cssVar: 'var(--color-gradient-red)' },
        { name: 'Gradient Purple', value: '#6A02F7', cssVar: 'var(--color-gradient-purple)' },
        { name: 'Gradient Blue', value: '#244FFE', cssVar: 'var(--color-gradient-blue)' },
        { name: 'Gradient Cyan', value: '#01FFD7', cssVar: 'var(--color-gradient-cyan)' },
        { name: 'Gradient Green', value: '#9FED01', cssVar: 'var(--color-gradient-green)' },
      ],
    },
    {
      title: 'Overlay Colors',
      colors: [
        { name: 'Light Grey', value: '#FCFCFC', cssVar: 'var(--color-overlay-light-grey)' },
        { name: 'Medium Gray', value: '#F9F9F9', cssVar: 'var(--color-overlay-medium-gray)' },
        { name: 'Dark Grey', value: '#DDDAE5', cssVar: 'var(--color-overlay-dark-grey)' },
        { name: 'Light Blue', value: '#E3E9FF', cssVar: 'var(--color-overlay-light-blue)' },
        { name: 'Medium Blue', value: '#4158FF', cssVar: 'var(--color-overlay-medium-blue)' },
        { name: 'Dark Blue', value: '#5519DD', cssVar: 'var(--color-overlay-dark-blue)' },
        { name: 'Orange', value: '#FF8C19', cssVar: 'var(--color-overlay-orange)' },
        { name: 'Teal', value: '#91E6F5', cssVar: 'var(--color-overlay-teal)' },
        { name: 'Neon Yellow', value: '#E3F53D', cssVar: 'var(--color-overlay-neon-yellow)' },
        { name: 'Green', value: '#40BE60', cssVar: 'var(--color-overlay-green)' },
        { name: 'Light Green', value: '#B3DACB', cssVar: 'var(--color-overlay-light-green)' },
        { name: 'Red', value: '#D14408', cssVar: 'var(--color-overlay-red)' },
        { name: 'Lilac', value: '#EDE7F6', cssVar: 'var(--color-overlay-lilac)' },
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <p className="text-lg text-gray-600">
          A comprehensive color palette for your application. Click any color to copy its hex or CSS variable value.
        </p>
      </div>

      {colorSections.map((section) => (
        <ColorSection key={section.title} {...section} />
      ))}
    </div>
  );
}
