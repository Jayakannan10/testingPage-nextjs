import { Check } from 'lucide-react';
import Link from 'next/link';

const plans = [
  {
    name: 'Starter',
    price: '$29',
    description: 'Perfect for small businesses and startups',
    features: [
      'Up to 5 team members',
      '5GB storage',
      'Basic analytics',
      'Email support',
      'API access',
    ],
  },
  {
    name: 'Professional',
    price: '$99',
    description: 'Ideal for growing businesses',
    features: [
      'Up to 20 team members',
      '50GB storage',
      'Advanced analytics',
      'Priority support',
      'API access',
      'Custom integrations',
      'Team collaboration tools',
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: '$299',
    description: 'For large organizations',
    features: [
      'Unlimited team members',
      'Unlimited storage',
      'Custom analytics',
      '24/7 dedicated support',
      'Advanced API access',
      'Custom integrations',
      'Team collaboration tools',
      'Custom training',
      'SLA guarantee',
    ],
  },
];

export default function PricingPlans() {
  return (
    <div className="py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-4xl text-center">
      <h2 className="text-base font-semibold leading-7 text-indigo-600">Pricing</h2>
      <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Choose the right plan for you
      </p>
    </div>
    <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 xl:gap-x-12">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`flex flex-col rounded-3xl p-8 ring-1 ring-gray-200 ${
            plan.featured
              ? 'bg-gray-900 text-white ring-gray-900'
              : 'bg-white text-gray-900'
          }`}
        >
          <h3 className="text-2xl font-bold tracking-tight">{plan.name}</h3>
          <p className="mt-4 text-sm leading-6 text-gray-400">{plan.description}</p>
          <p className="mt-6 flex items-baseline gap-x-1">
            <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
            <span className="text-sm font-semibold leading-6">/month</span>
          </p>
          <ul role="list" className="mt-8 space-y-3 text-sm leading-6 my-9">
            {plan.features.map((feature) => (
              <li key={feature} className="flex gap-x-3">
                <Check
                  className={`h-6 w-5 flex-none ${
                    plan.featured ? 'text-indigo-400' : 'text-indigo-600'
                  }`}
                  aria-hidden="true"
                />
                {feature}
              </li>
            ))}
          </ul>
          <div className="mt-auto"> {/* Added this div to contain the Link */}
            <Link
              href="#"
              className={`block rounded-md px-3.5 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                plan.featured
                  ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-indigo-600'
                  : 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-indigo-600'
              }`}
            >
              Get started today
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
  );
}