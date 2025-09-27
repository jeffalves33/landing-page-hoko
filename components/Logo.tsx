'use client';

import { Brain } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <div className="flex flex-col">
        <span className="text-lg font-bold tracking-tight text-foreground">
          ho.ko
        </span>
        <span className="text-xs font-medium text-hoko-primary -mt-1">
          AI.nalytics
        </span>
      </div>
    </div>
  );
}