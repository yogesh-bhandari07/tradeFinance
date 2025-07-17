// app/page.tsx (client component)
'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (token) {
      router.replace("/homepage");
    } else {
      router.replace("/homepage");
    }
  }, []);

  return null; 
}
