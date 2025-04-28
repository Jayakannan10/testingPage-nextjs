'use client';

import { useEffect } from 'react';

export default function TooltipScript() {
  useEffect(() => {
    const scriptId = 'tooltip-script';
    const existing = document.getElementById(scriptId);

    // Remove old script if it exists (to ensure new one loads)
    if (existing) {
      existing.remove();
    }

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = `https://priceflows-assets.blr1.digitaloceanspaces.com/template-script/tooltip-script-6805f1c5dfd88619c2d92289.js?v=${Date.now()}`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      console.log('Tooltip script loaded and running!');
    };

    document.body.appendChild(script);
  }, []); // Run once on initial render

  return null;
}
