'use client';
import MaxWidth from '../ui/max-width';
import roadmapBg from '@/assets/roadmap-bg.svg';
import { cn } from '@/lib/utils';
import { ChevronUp } from 'lucide-react';

const phases = [
  {
    num: '01',
    label: 'Phase 1',
    title: 'Legal & Structural Foundation',
    badge: 'NOW',
    items: [
      'Jurisdiction selection (SPV / foundation)',
      'AML & sanctions framework',
      'Custody & administration partners',
    ],
  },
  {
    num: '02',
    label: 'Phase 2',
    title: 'Token Architecture & Audit',
    // badge: 'NOW',
    items: [
      'SPL token deployment',
      'Multisig treasury programs',
      'Independent security audits',
    ],
  },
  {
    num: '03',
    label: 'Phase 3',
    title: 'Pilot & Treasury Reporting',
    // badge: 'NEXT',
    items: [
      'Phased public rollout',
      'Reserve dashboards & oracles',
      'Wallet transparency systems',
    ],
  },
  {
    num: '04',
    label: 'Phase 4',
    title: 'Ecosystem Activation',
    // badge: 'MID',
    items: [
      'Solana-native staking',
      'Governance portal launch',
      'Diaspora partnerships & tokenized access',
    ],
  },
];

export function Roadmap() {
  return (
    <section className='relative py-20 sm:py-28 overflow-hidden'>
      {/* Background */}
      <div className='absolute inset-0 z-0'>
        <img
          src={roadmapBg}
          alt='roadmap'
          className='w-full h-full object-cover'
        />
      </div>

      <MaxWidth className='relative z-10 overflow-hidden'>
        {/* Header */}
        <div className='flex flex-col items-center mb-20'>
          <div className='text-xs tracking-[0.3em] text-primary mb-4 bg-[#00EB81]/15 rounded-full px-4 py-2'>
            ROADMAP
          </div>

          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-center'>
            Roadmap
          </h2>

          <p className='mt-4 text-base sm:text-lg text-muted-foreground text-center'>
            A measured path from{' '}
            <span className='text-cedar-gradient font-semibold'>structure</span>{' '}
            to <span className='text-cedar-gradient font-semibold'>scale.</span>
          </p>
        </div>

        {/* ================= MOBILE (STACK) ================= */}
        <div className='flex flex-col gap-8 lg:hidden'>
          {phases.map((phase, i) => (
            <div
              key={i}
              className='w-full max-w-[360px] mx-auto'
            >
              <Card phase={phase} />
            </div>
          ))}
        </div>

        {/* ================= DESKTOP (TIMELINE) ================= */}
        <div className='hidden lg:block relative'>
          {/* Center line */}
          <div className='absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[4px] bg-gradient-to-r from-[#F4A261] via-[#00EB81] to-[#F4A261]' />

          <div className='flex justify-between -space-x-40'>
            {phases.map((phase, i) => {
              const isEven = i % 2 === 0;

              return (
                <div
                  key={i}
                  className={cn(
                    'relative flex flex-col items-center',
                    isEven ? 'mt-0' : 'mt-[344px]',
                  )}
                >
                  {/* TOP connector */}
                  {!isEven && (
                    <Connector
                      type='top'
                      label={phase.label}
                    />
                  )}

                  {/* Card */}
                  <div className='w-[340px] sm:w-[378px]'>
                    <Card phase={phase} />
                  </div>

                  {/* BOTTOM connector */}
                  {isEven && (
                    <Connector
                      type='bottom'
                      label={phase.label}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </MaxWidth>
    </section>
  );
}

/* ================= CARD ================= */
function Card({ phase }: any) {
  return (
    <div className='bg-[#D9D9D9] rounded-[8px] p-3'>
      <div className='bg-[#001718] rounded-b-2xl rounded-t-[80px] p-6'>
        <div className='flex justify-between mb-4 px-6'>
          <span className='text-[#01C853] text-xs'>Phase {phase.num}</span>

          {phase?.badge && (
            <span className='text-[10px] text-[#00EB81] bg-[#00EB81]/20 px-2 py-0.5 rounded-full'>
              {phase.badge}
            </span>
          )}
        </div>

        <h3 className='text-[#00EB81] text-lg font-bold mb-3'>{phase.title}</h3>

        <ul className='space-y-2'>
          {phase.items.map((item: string, i: number) => (
            <li
              key={i}
              className='flex gap-2 text-sm text-gray-400'
            >
              <span className='h-1.5 w-1.5 bg-gray-400 rounded-full mt-1' />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ================= CONNECTOR ================= */
function Connector({ type, label }: any) {
  const isTop = type === 'top';

  return (
    <div
      className={cn('relative flex justify-center', isTop ? 'mb-3' : 'mt-3')}
    >
      <div className='h-[110px] w-[2px] bg-[#FFF03B]' />

      <ChevronUp
        size={26}
        className={cn(
          'text-[#FFF03B] absolute left-1/2 -translate-x-1/2',
          isTop
            ? 'bottom-0 translate-y-1/2 rotate-180'
            : 'top-0 -translate-y-1/2',
        )}
      />

      <div
        className={cn(
          'w-[32px] h-[32px] bg-[#00EB81] border-[6px] border-[#E5A841] rounded-full absolute left-1/2 -translate-x-1/2',
          isTop ? 'top-0 -translate-y-1/2' : 'bottom-0 translate-y-1/2',
        )}
      />

      <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black bg-[#00EB81] h-[32px] w-[101px] flex items-center justify-center rounded-[12px] text-sm'>
        {label}
      </p>
    </div>
  );
}
