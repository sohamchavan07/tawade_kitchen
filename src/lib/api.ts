const baseUrl = (import.meta as any).env?.VITE_RAILS_BASE_URL || "";

export type ApiError = {
  status: number;
  message: string;
  errors?: unknown;
};

export async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const url = `${baseUrl}${path}`;
  const response = await fetch(url, {
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...(init?.headers || {}),
    },
    ...init,
  });

  const isJson = response.headers.get("content-type")?.includes("application/json");
  const payload = isJson ? await response.json().catch(() => undefined) : undefined;

  if (!response.ok) {
    const error: ApiError = {
      status: response.status,
      message:
        (payload && (payload.message || payload.error || payload.errors?.[0])) ||
        response.statusText ||
        "Request failed",
      errors: payload?.errors,
    };
    throw error;
  }

  return (payload as T) ?? (undefined as unknown as T);
}

export function getBaseUrl(): string {
  return baseUrl;
}


