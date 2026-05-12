import { useState } from 'react';
import svgPaths from "../../imports/StepsCard/svg-zk5zro02l7";

interface Step {
  title: string;
  description: string;
}

interface StepsCardProps {
  heading: string;
  steps: Step[];
  helpText?: string;
  onHelpClick?: () => void;
}

function SupportIcon() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <mask height="24" id="mask0_support" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
          <rect fill="#D9D9D9" height="24" width="24" />
        </mask>
        <g mask="url(#mask0_support)">
          <path d={svgPaths.p49e2200} fill="var(--color-blue-500)" />
        </g>
      </svg>
    </div>
  );
}

function StepsCard({ heading, steps, helpText = "Necesito ayuda", onHelpClick }: StepsCardProps) {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start justify-center p-[16px] relative rounded-[16px] w-[343px]">
      {/* Heading */}
      <div className="content-stretch flex items-center relative shrink-0 w-full">
        <div className="flex flex-col font-['Onest:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] whitespace-nowrap" style={{ color: 'var(--color-deep-blue)' }}>
          <p className="leading-[1.1]">{heading}</p>
        </div>
      </div>

      {/* Steps with connector */}
      <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
        {/* Step content */}
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          {steps.map((step, index) => (
            <div key={index} className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
              {/* Step number */}
              <div className="flex flex-col items-center shrink-0 w-[25px]">
                <div className="bg-[#1443ff] relative rounded-[64px] shrink-0 w-full">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center p-[4px] relative size-full">
                      <div className="flex flex-col font-['Onest:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">
                        <p className="leading-[1.1]">{index + 1}</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="bg-[#1443ff] flex-1 min-h-[16px] rounded-[64px] w-[2px] mt-[8px]" />
                )}
              </div>

              {/* Step text content */}
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 flex-1">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  <p className="font-['Onest:SemiBold',sans-serif] font-semibold leading-[1.1] relative shrink-0 text-[#1443ff] text-[12px] w-full">
                    {step.title}
                  </p>
                </div>
                <div className="flex flex-col font-['Onest:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[12px] w-full" style={{ color: 'var(--color-deep-blue)' }}>
                  <p className="leading-[normal]">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Help link */}
      {helpText && (
        <button
          onClick={onHelpClick}
          className="content-stretch flex gap-[4px] items-center relative shrink-0 transition-opacity hover:opacity-70"
        >
          <SupportIcon />
          <div className="content-stretch flex items-center justify-center p-[4px] relative shrink-0">
            <div aria-hidden="true" className="absolute border-[#1443ff] border-b border-solid inset-0 pointer-events-none" />
            <div className="flex flex-col font-['Onest:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1443ff] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[1.1]">{helpText}</p>
            </div>
          </div>
        </button>
      )}
    </div>
  );
}

function InteractiveDemo() {
  const [helpClicked, setHelpClicked] = useState(false);

  const handleHelpClick = () => {
    setHelpClicked(true);
    setTimeout(() => setHelpClicked(false), 2000);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 border border-blue-200 mb-16">
      <h3 className="title-large font-bold mb-4" style={{ color: 'var(--color-deep-blue)' }}>
        Interactive Demo
      </h3>
      <p className="body-large mb-6" style={{ color: 'var(--color-gray-500)' }}>
        Click the help link to see the interaction.
      </p>

      <div className="flex justify-center">
        <StepsCard
          heading="¿Cómo participo?"
          steps={[
            {
              title: "Encuentra ubicaciones participantes",
              description: "Lorem ipsum dolor sit amet consectetur. Placerat porta lorem morbi quisque est venenatis. In in fermentum dui at lorem tortor ultrices pharetra porttitor."
            },
            {
              title: "Identifica el código en el lugar",
              description: "Lorem ipsum dolor sit amet consectetur. Placerat porta lorem morbi quisque est venenatis. In in fermentum dui at lorem tortor ultrices pharetra porttitor."
            },
            {
              title: "Escanea el código QR",
              description: "Lorem ipsum dolor sit amet consectetur. Placerat porta lorem morbi quisque est venenatis. In in fermentum dui at lorem tortor ultrices pharetra porttitor."
            }
          ]}
          onHelpClick={handleHelpClick}
        />
      </div>

      {helpClicked && (
        <div className="bg-white rounded-lg p-4 border border-gray-200 mt-6 text-center">
          <p className="label-large" style={{ color: 'var(--color-deep-blue)' }}>
            Help requested! <span className="font-normal">User would be directed to support</span>
          </p>
        </div>
      )}
    </div>
  );
}

function DynamicStepsDemo() {
  const [steps, setSteps] = useState<Step[]>([
    {
      title: "Encuentra ubicaciones participantes",
      description: "Lorem ipsum dolor sit amet consectetur. Placerat porta lorem morbi quisque est venenatis."
    },
    {
      title: "Identifica el código en el lugar",
      description: "Lorem ipsum dolor sit amet consectetur. Placerat porta lorem morbi quisque est venenatis."
    },
    {
      title: "Escanea el código QR",
      description: "Lorem ipsum dolor sit amet consectetur. Placerat porta lorem morbi quisque est venenatis."
    }
  ]);

  const addStep = () => {
    const newStep = {
      title: `Nuevo paso ${steps.length + 1}`,
      description: "Descripción del nuevo paso. Agrega los detalles necesarios para completar esta acción."
    };
    setSteps([...steps, newStep]);
  };

  const removeLastStep = () => {
    if (steps.length > 1) {
      setSteps(steps.slice(0, -1));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-center gap-4">
        <button
          onClick={addStep}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg font-['Onest:SemiBold',sans-serif] font-semibold text-[14px] hover:bg-blue-600 transition-colors"
          disabled={steps.length >= 6}
        >
          + Agregar paso
        </button>
        <button
          onClick={removeLastStep}
          className="px-4 py-2 bg-red-500 text-white rounded-lg font-['Onest:SemiBold',sans-serif] font-semibold text-[14px] hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={steps.length <= 1}
        >
          - Eliminar último paso
        </button>
      </div>

      <div className="flex justify-center">
        <StepsCard
          heading="¿Cómo participo?"
          steps={steps}
        />
      </div>

      <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
        <p className="label-large" style={{ color: 'var(--color-deep-blue)' }}>
          Pasos actuales: <span className="font-normal">{steps.length}</span>
        </p>
      </div>
    </div>
  );
}

export default function StepsCardShowcase() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h2 className="headline-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>
          Steps Card
        </h2>
        <p className="title-large" style={{ color: 'var(--color-deep-blue)' }}>
          The Steps Card presents sequential instructions in a clear, visually organized format. It guides users through multi-step processes with numbered steps connected by vertical lines.
        </p>
      </div>

      <InteractiveDemo />

      <div className="space-y-12 mb-16">
        <div>
          <h3 className="title-large font-bold mb-6" style={{ color: 'var(--color-deep-blue)' }}>
            Variations
          </h3>

          <div className="space-y-8">
            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>
                Standard 3-Step Process
              </p>
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <div className="flex justify-center">
                  <StepsCard
                    heading="¿Cómo participo?"
                    steps={[
                      {
                        title: "Encuentra ubicaciones participantes",
                        description: "Lorem ipsum dolor sit amet consectetur. Placerat porta lorem morbi quisque est venenatis."
                      },
                      {
                        title: "Identifica el código en el lugar",
                        description: "Lorem ipsum dolor sit amet consectetur. Placerat porta lorem morbi quisque est venenatis."
                      },
                      {
                        title: "Escanea el código QR",
                        description: "Lorem ipsum dolor sit amet consectetur. Placerat porta lorem morbi quisque est venenatis."
                      }
                    ]}
                  />
                </div>
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Standard format with three sequential steps and help link.
              </p>
            </div>

            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>
                2-Step Process
              </p>
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <div className="flex justify-center">
                  <StepsCard
                    heading="Cómo canjear tus puntos"
                    steps={[
                      {
                        title: "Elige tu recompensa",
                        description: "Navega por el catálogo de recompensas disponibles y selecciona la que más te guste."
                      },
                      {
                        title: "Confirma el canje",
                        description: "Revisa los detalles y confirma tu canje. Recibirás una notificación cuando esté listo."
                      }
                    ]}
                    helpText="¿Necesitas ayuda?"
                  />
                </div>
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Simplified process with only two steps.
              </p>
            </div>

            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>
                4-Step Process
              </p>
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <div className="flex justify-center">
                  <StepsCard
                    heading="Completa tu perfil"
                    steps={[
                      {
                        title: "Información básica",
                        description: "Ingresa tu nombre, correo electrónico y número de teléfono."
                      },
                      {
                        title: "Sube una foto",
                        description: "Agrega una foto de perfil para personalizar tu cuenta."
                      },
                      {
                        title: "Preferencias",
                        description: "Selecciona tus categorías favoritas y preferencias de notificación."
                      },
                      {
                        title: "Verificación",
                        description: "Verifica tu correo electrónico para activar todas las funciones."
                      }
                    ]}
                    helpText="Soporte técnico"
                  />
                </div>
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Extended process with four steps for more complex workflows.
              </p>
            </div>

            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>
                Without Help Link
              </p>
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <div className="flex justify-center">
                  <StepsCard
                    heading="Pasos para ganar"
                    steps={[
                      {
                        title: "Completa 5 compras",
                        description: "Realiza cinco compras en tiendas participantes durante el mes."
                      },
                      {
                        title: "Acumula 100 puntos",
                        description: "Cada compra te otorgará puntos. Alcanza 100 puntos para participar."
                      },
                      {
                        title: "Espera el sorteo",
                        description: "Al final del mes se realizará el sorteo entre todos los participantes elegibles."
                      }
                    ]}
                    helpText=""
                  />
                </div>
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Steps card without the help link for simpler use cases.
              </p>
            </div>

            <div>
              <p className="label-large mb-4" style={{ color: 'var(--color-deep-blue)' }}>
                Dynamic Steps (Add/Remove)
              </p>
              <div className="bg-white rounded-lg border border-gray-200 p-8">
                <DynamicStepsDemo />
              </div>
              <p className="body-medium mt-2" style={{ color: 'var(--color-gray-500)' }}>
                Interactive demo showing how steps can be dynamically added or removed.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="title-large font-bold mb-6" style={{ color: 'var(--color-deep-blue)' }}>
            Component Structure
          </h3>
          <p className="body-large mb-4" style={{ color: 'var(--color-gray-500)' }}>
            The Steps Card consists of several key elements:
          </p>
          <ul className="space-y-3">
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Heading:</strong> Semibold 16px title asking the key question (e.g., "¿Cómo participo?")</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Step Numbers:</strong> Blue circular badges (25px) with white numbers, connected by vertical 2px lines</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Step Title:</strong> Semibold 12px blue text describing the action</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Step Description:</strong> Medium 12px text providing detailed instructions</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Help Link:</strong> Optional support icon with underlined text link at the bottom</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="title-large font-bold mb-6" style={{ color: 'var(--color-deep-blue)' }}>
            Use Cases
          </h3>
          <ul className="space-y-3">
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Campaign participation:</strong> Guide users through the steps to join a campaign or promotion</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Redemption process:</strong> Explain how to redeem points or rewards</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Onboarding:</strong> Walk new users through account setup or profile completion</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>QR code scanning:</strong> Instruct users how to find and scan physical codes at locations</span>
            </li>
            <li className="body-large flex gap-3" style={{ color: 'var(--color-gray-500)' }}>
              <span style={{ color: 'var(--color-blue-500)' }}>•</span>
              <span><strong style={{ color: 'var(--color-deep-blue)' }}>Contest entry:</strong> Detail the requirements and steps to enter a contest or sweepstakes</span>
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
            <span>Keep steps sequential and linear - avoid branching or conditional paths</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Limit to 2-5 steps to maintain clarity and prevent overwhelming users</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Use action verbs in step titles (e.g., "Encuentra", "Escanea", "Confirma")</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Keep descriptions concise - aim for 1-2 sentences per step</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Include the help link for processes that may need additional support</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Use the heading to clearly state the goal or question being answered</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Maintain consistent 343px width for mobile-optimized layouts</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Place steps cards on detail pages or FAQs where users need guidance</span>
          </li>
          <li className="body-medium flex gap-3" style={{ color: 'var(--color-dark-400)' }}>
            <span style={{ color: 'var(--color-blue-500)' }}>•</span>
            <span>Test step descriptions with real users to ensure clarity</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
