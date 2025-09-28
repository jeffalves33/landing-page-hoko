'use client';

import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex items-center">
      <div className="flex items-center justify-center rounded-lg">
        <Image
          src="/favicon_black_out.png"
          alt="Logo ho.ko AI.nalytics"
          width={80}
          height={80}
          className="object-contain"
        />
      </div>
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
