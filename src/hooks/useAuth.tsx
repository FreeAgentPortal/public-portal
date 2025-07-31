// app/auth-handler.tsx
"use client";

import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function useAuth() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const token = searchParams.get("token") || localStorage.getItem("token");
    const url = new URL(window.location.href);
    const urlToken = url.searchParams.get("token");

    if (token && urlToken) {
      localStorage.setItem("token", token);
      const url = new URL(window.location.href);
      url.searchParams.delete("token");
      router.replace(url.pathname + url.search);
    }
  }, [searchParams, router]);

  return null;
}
