"use client";

import { useThemeStore } from "@/store";
import { ReactNode, useEffect, useState } from "react";
import { SessionProvider } from "next-auth/react";

export default function Hydrate({ children }: { children: ReactNode }) {
  const [isHydrated, setIsHydrated] = useState(false);
  const themeStore = useThemeStore();
  //Wait till Nextjs rehydration completes
  useEffect(() => {
    setIsHydrated(true);
  }, []);
  return (
    <SessionProvider>
      {isHydrated ? (
        <body className="font-roboto" data-theme={themeStore.mode}>
          {children}
        </body>
      ) : (
        <body></body>
      )}
    </SessionProvider>
  );
}
