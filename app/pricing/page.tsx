'use client';


import {useEffect} from 'react';
import Navbar from '@/components/Navbar';
import PricingPlans from '@/components/pricing/PricingPlans';

export default function Pricing() {

  useEffect (() => {
    const script = document.createElement('script');
    script.src = 'https://priceflows-assets.blr1.digitaloceanspaces.com/template-script/tooltip-script-6805f1c5dfd88619c2d92289.js';
    script.async = true;
    document.body.appendChild(script);
  }, [])

  return (
    <main>
      <Navbar />
      <PricingPlans />
    </main>
  );
}