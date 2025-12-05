// lib/api.ts
export async function apiFetch<T>(url: string, options?: RequestInit): Promise<ApiResponse<T>> {
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options?.headers || {}),
    },
  });

  if (!res.ok) {
    const errorBody = await res.text();
    throw new Error(`API error: ${res.status} - ${errorBody}`);
  }

  const json = await res.json();

  if (json.success === false) {
    throw new Error(`API response unsuccessful: ${JSON.stringify(json)}`);
  }

  return {
    payload: json.payload,
    metadata: json.metadata,
  } as ApiResponse<T>;
}

export async function normalFetch<T>(url: string, options?: RequestInit): Promise<T> {
  const res = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers || {}),
    },
  });

  if (!res.ok) {
    const errorBody = await res.text();
    throw new Error(`API error: ${res.status} - ${errorBody}`);
  }

  const json = await res.json();

  return json as T;
}

export const getSignings = async (limit?: number) => {
  const url = limit ? `/feed/signing?limit=${limit}` : "/feed/signing";
  return apiFetch<ISigning[]>(url);
};

import type ISigning from "@/types/ISigning";
