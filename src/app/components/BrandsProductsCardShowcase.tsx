import { useState } from 'react';
import imgCheetos from '../../imports/CardInfo-2/c977a332c8ae04b1c2b299787a2945fc27ac91ca.png';
import imgRuffles from '../../imports/CardInfo-2/c5343fc3b2363cf3341bc5309075887d586d5e22.png';
import imgDoritos from '../../imports/CardInfo-2/35b34fcfbe6705949e32daa5125a81d138802b20.png';
import imgLays from '../../imports/CardInfo-2/094c9fde64a3f8d18388e47506681e3763ed8763.png';
import imgProduct1 from '../../imports/CardInfo-2/85d4894d0e5ec39a49406a5f511bc05ef4255192.png';
import imgProduct2 from '../../imports/CardInfo-2/e52b800966ec253ff19ee609b1a36cea0437306c.png';
import imgProduct3 from '../../imports/CardInfo-2/8cb81f47ac558925c192994b3b69420c4066b2e4.png';
import imgProduct4 from '../../imports/CardInfo-2/5f056c6951a5d9b1b9b4a8d9efca679c972724f3.png';
import imgProduct5 from '../../imports/CardInfo-2/c3d0793f60c139ba2b924c3f97d3b9c5d0022262.png';
import imgProduct6 from '../../imports/CardInfo-2/bc5396dc08659694332affd3cd0161376003ba68.png';
import imgProduct7 from '../../imports/CardInfo-2/88cd8693e20bdd3f5a21bde7ccb22ed5cae557f1.png';
import imgProduct8 from '../../imports/CardInfo-2/dcfa94749bf8f4ebd9eb8c86c959539e5044bd3a.png';
import imgProduct9 from '../../imports/CardInfo-2/eea0da10e7d1f5a8311773a0a8459d9dba0a23e3.png';

interface Product {
  id: string;
  name: string;
  sku: string;
  image: string;
}

interface Brand {
  id: string;
  name: string;
  logo: string;
  products: Product[];
}

interface BrandLogoProps {
  logo: string;
  name: string;
  selected?: boolean;
  onClick?: () => void;
}

function BrandLogo({ logo, name, selected = false, onClick }: BrandLogoProps) {
  return (
    <button
      onClick={onClick}
      className="bg-white relative rounded-[18px] shrink-0 size-[56px] cursor-pointer hover:opacity-80 transition-opacity"
    >
      {selected && (
        <div
          aria-hidden="true"
          className="absolute border-4 border-solid inset-[-2px] pointer-events-none rounded-[20px]"
          style={{ borderColor: 'var(--color-blue-500)' }}
        />
      )}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          alt={name}
          className="max-w-[40px] max-h-[40px] object-contain"
          src={logo}
        />
      </div>
    </button>
  );
}

interface ProductItemProps {
  name: string;
  sku: string;
  image: string;
}

function ProductItem({ name, sku, image }: ProductItemProps) {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
          <div className="relative rounded-[12px] shrink-0 size-[40px]">
            <img
              alt={name}
              className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full"
              src={image}
            />
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-w-px relative">
            <p className="font-['Onest:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[16px] w-full" style={{ color: 'var(--color-blue-500)' }}>
              {name}
            </p>
            <p className="font-['Onest:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[12px] w-full" style={{ color: 'var(--color-deep-blue)' }}>
              SKU: {sku}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface BrandsProductsCardProps {
  brands: Brand[];
  initialSelectedBrand?: string;
}

function BrandsProductsCard({ brands, initialSelectedBrand }: BrandsProductsCardProps) {
  const [selectedBrandId, setSelectedBrandId] = useState(initialSelectedBrand || brands[0]?.id);
  const selectedBrand = brands.find(b => b.id === selectedBrandId);

  return (
    <div className="bg-[#dfe0e9] content-stretch flex flex-col gap-[16px] items-start p-[12px] relative rounded-[12px] shadow-[0px_12px_16px_0px_rgba(0,0,0,0.08),0px_4px_6px_0px_rgba(0,0,0,0.03)] shrink-0 w-full max-w-[344px]">
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex items-center relative shrink-0 w-full">
          <p className="font-['Onest:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[16px] whitespace-nowrap" style={{ color: 'var(--color-blue-500)' }}>
            Marcas y productos participantes
          </p>
        </div>

        <div className="content-stretch flex items-center justify-between relative shadow-[0px_12px_16px_0px_rgba(0,0,0,0.08),0px_4px_6px_0px_rgba(0,0,0,0.03)] shrink-0 w-full">
          {brands.map(brand => (
            <BrandLogo
              key={brand.id}
              logo={brand.logo}
              name={brand.name}
              selected={brand.id === selectedBrandId}
              onClick={() => setSelectedBrandId(brand.id)}
            />
          ))}
        </div>
      </div>

      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        {selectedBrand?.products.map(product => (
          <ProductItem
            key={product.id}
            name={product.name}
            sku={product.sku}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}

function InteractiveDemo() {
  const [clickCount, setClickCount] = useState(0);
  const [selectedBrand, setSelectedBrand] = useState('cheetos');

  const demoBrands: Brand[] = [
    {
      id: 'cheetos',
      name: 'Cheetos',
      logo: imgCheetos,
      products: [
        { id: '1', name: "Cheetos Flamin' Hot 100g", sku: '075752807874', image: imgProduct1 },
        { id: '2', name: 'Cheetos Torciditos 200g', sku: '075752807875', image: imgProduct2 },
        { id: '3', name: 'Cheetos Poffs 100g', sku: '075752807876', image: imgProduct3 },
        { id: '4', name: 'Cheetos Bolitas 100g', sku: '075752807877', image: imgProduct4 },
        { id: '5', name: 'Cheetos Colmillos Familiares', sku: '075752807878', image: imgProduct5 },
      ]
    },
    {
      id: 'ruffles',
      name: 'Ruffles',
      logo: imgRuffles,
      products: [
        { id: '6', name: 'Ruffles Original 100g', sku: '075752808001', image: imgProduct6 },
        { id: '7', name: 'Ruffles Queso 150g', sku: '075752808002', image: imgProduct7 },
      ]
    },
    {
      id: 'doritos',
      name: 'Doritos',
      logo: imgDoritos,
      products: [
        { id: '8', name: 'Doritos Nacho 100g', sku: '075752809001', image: imgProduct8 },
        { id: '9', name: 'Doritos Flamin Hot 100g', sku: '075752809002', image: imgProduct9 },
      ]
    },
    {
      id: 'lays',
      name: 'Lays',
      logo: imgLays,
      products: [
        { id: '10', name: 'Lays Classic 100g', sku: '075752810001', image: imgProduct1 },
        { id: '11', name: 'Lays Limon 100g', sku: '075752810002', image: imgProduct2 },
      ]
    },
    {
      id: 'pepsi',
      name: 'Pepsi',
      logo: imgCheetos,
      products: [
        { id: '12', name: 'Refresco Pepsi 100ml', sku: '075752811001', image: imgProduct3 },
        { id: '13', name: 'Refresco Pepsi Black 100ml', sku: '075752811002', image: imgProduct4 },
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8 border border-blue-200 mb-16">
      <h3 className="title-large font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>Interactive Demo</h3>
      <p className="body-large mb-6" style={{ color: 'var(--color-gray-500)' }}>
        Click on different brand logos to see their products. The selected brand is highlighted with a blue border.
      </p>

      <div className="flex justify-center mb-6">
        <BrandsProductsCard
          brands={demoBrands}
          initialSelectedBrand={selectedBrand}
        />
      </div>

      <div className="bg-white rounded-lg p-4 border border-gray-200">
        <p className="label-large mb-2" style={{ color: 'var(--color-deep-blue)' }}>
          Current Selection: <span className="font-normal">{demoBrands.find(b => b.id === selectedBrand)?.name}</span>
        </p>
        <p className="label-large mb-2" style={{ color: 'var(--color-deep-blue)' }}>
          Products Shown: <span className="font-normal">{demoBrands.find(b => b.id === selectedBrand)?.products.length}</span>
        </p>
        <p className="label-large" style={{ color: 'var(--color-deep-blue)' }}>
          Brand Clicks: <span className="font-normal">{clickCount}</span>
        </p>
        <button
          onClick={() => {
            setClickCount(0);
            setSelectedBrand('cheetos');
          }}
          className="mt-2 text-sm underline"
          style={{ color: 'var(--color-blue-500)' }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default function BrandsProductsCardShowcase() {
  const sampleBrands: Brand[] = [
    {
      id: 'cheetos',
      name: 'Cheetos',
      logo: imgCheetos,
      products: [
        { id: '1', name: "Cheetos Flamin' Hot 100g", sku: '075752807874', image: imgProduct1 },
        { id: '2', name: 'Cheetos Torciditos 200g', sku: '075752807875', image: imgProduct2 },
        { id: '3', name: 'Cheetos Poffs 100g', sku: '075752807876', image: imgProduct3 },
      ]
    },
    {
      id: 'ruffles',
      name: 'Ruffles',
      logo: imgRuffles,
      products: [
        { id: '4', name: 'Ruffles Original 100g', sku: '075752808001', image: imgProduct4 },
        { id: '5', name: 'Ruffles Queso 150g', sku: '075752808002', image: imgProduct5 },
      ]
    },
    {
      id: 'doritos',
      name: 'Doritos',
      logo: imgDoritos,
      products: [
        { id: '6', name: 'Doritos Nacho 100g', sku: '075752809001', image: imgProduct6 },
      ]
    },
    {
      id: 'lays',
      name: 'Lays',
      logo: imgLays,
      products: [
        { id: '7', name: 'Lays Classic 100g', sku: '075752810001', image: imgProduct7 },
      ]
    },
    {
      id: 'pepsi',
      name: 'Pepsi',
      logo: imgCheetos,
      products: [
        { id: '8', name: 'Refresco Pepsi 100ml', sku: '075752811001', image: imgProduct8 },
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h2 className="headline-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Participating Brands & Products Card</h2>
        <div className="title-large space-y-4" style={{ color: 'var(--color-deep-blue)' }}>
          <p>
            The Participating Brands & Products Card is a dynamic component designed to display brands and their corresponding products within a specific campaign or offer. This card serves as an interactive filter, allowing users to select a brand to view a curated list of its eligible products.
          </p>

          <div>
            <p className="font-bold mb-2">Purpose and Functionality</p>
            <p>
              This component's primary purpose is to provide clarity on which brands and products are part of a particular promotion. It improves usability by organizing a potentially long list of items into manageable, selectable brands. It functions as a single card component with two distinct states:
            </p>
          </div>

          <div className="ml-6 space-y-3">
            <div>
              <p className="font-semibold mb-1">Default State:</p>
              <p>
                In this state, the card displays a horizontal row of participating brand logos at the top. This provides a quick overview of all brands included in the offer. The first brand is selected by default, showing its products.
              </p>
            </div>

            <div>
              <p className="font-semibold mb-1">Selected State:</p>
              <p>
                When a user taps on a specific brand logo, the card transitions to a selected state. The brand's logo becomes visually highlighted with a blue border, and the list below dynamically updates to show only the products from that selected brand. This interactive filtering streamlines the user's experience, making it easy to find relevant products.
              </p>
            </div>
          </div>

          <p>
            This dynamic functionality ensures that users can effortlessly navigate and understand the full scope of a promotion, enhancing engagement and perceived value.
          </p>
        </div>
      </div>

      <InteractiveDemo />

      <div className="space-y-12 mb-16">
        <div>
          <h3 className="title-large font-bold mb-6" style={{ color: 'var(--color-deep-blue)' }}>States</h3>

          <div className="space-y-8">
            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Default State (First Brand Selected)</p>
              <div className="bg-white rounded-lg border border-gray-200 p-8 flex justify-center">
                <BrandsProductsCard brands={sampleBrands} initialSelectedBrand="cheetos" />
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Initial state showing the first brand's products by default.
              </p>
            </div>

            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Selected State (Different Brand)</p>
              <div className="bg-white rounded-lg border border-gray-200 p-8 flex justify-center">
                <BrandsProductsCard brands={sampleBrands} initialSelectedBrand="ruffles" />
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Card showing a different brand's products after user selection.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="title-large font-bold mb-6" style={{ color: 'var(--color-deep-blue)' }}>Variations</h3>

          <div className="space-y-8">
            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>Different Product Counts</p>
              <div className="bg-white rounded-lg border border-gray-200 p-8 flex justify-center gap-4 flex-wrap">
                <BrandsProductsCard
                  brands={[
                    {
                      id: 'brand1',
                      name: 'Brand with 2 products',
                      logo: imgCheetos,
                      products: [
                        { id: '1', name: 'Product 1', sku: '123456', image: imgProduct1 },
                        { id: '2', name: 'Product 2', sku: '123457', image: imgProduct2 },
                      ]
                    },
                    {
                      id: 'brand2',
                      name: 'Brand 2',
                      logo: imgRuffles,
                      products: [
                        { id: '3', name: 'Product 3', sku: '123458', image: imgProduct3 },
                      ]
                    },
                    {
                      id: 'brand3',
                      name: 'Brand 3',
                      logo: imgDoritos,
                      products: [
                        { id: '4', name: 'Product 4', sku: '123459', image: imgProduct4 },
                      ]
                    },
                    {
                      id: 'brand4',
                      name: 'Brand 4',
                      logo: imgLays,
                      products: [
                        { id: '5', name: 'Product 5', sku: '123460', image: imgProduct5 },
                      ]
                    },
                    {
                      id: 'brand5',
                      name: 'Brand 5',
                      logo: imgCheetos,
                      products: [
                        { id: '6', name: 'Product 6', sku: '123461', image: imgProduct6 },
                      ]
                    }
                  ]}
                />
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                The product list dynamically adjusts based on how many products each brand has.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h3 className="title-large font-bold mb-3" style={{ color: 'var(--color-deep-blue)' }}>Best Practices</h3>
        <ul className="space-y-2">
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Display all participating brands in the carousel for complete transparency</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Use clear visual feedback (blue border) to indicate the selected brand</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Ensure brand logos are high quality and easily recognizable at 56px size</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Keep product names concise and descriptive, including size/weight information</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Always display SKU numbers for product identification and verification</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Use product images that clearly show the item, cropped to 40px rounded squares</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Limit to 5 brands maximum in the carousel to prevent overcrowding</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Maintain consistent spacing (8px gaps) between product list items</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Select the first brand by default to show immediate value to the user</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
