"use client";

import { useRouter } from "next/navigation";
import { ROUTES } from "@app/shared";
import logo from "@app/shared/assets/loyso-logo.png";
import Image from "next/image";

export function Header() {
  const router = useRouter();

  return (
    <header className="w-full bg-white/10 backdrop-blur-lg border-b border-white/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div
            className="flex items-center space-x-3 gap-2 cursor-pointer"
            onClick={() => router.push(ROUTES.profile)}
          >
            <div className="size-16">
              <Image src={logo} alt="logo" />
            </div>
          </div>
          <div className="flex-1 flex justify-center"></div>
        </div>
      </div>
    </header>
  );
}
