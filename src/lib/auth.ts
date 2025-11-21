import { apiFetch } from "@/lib/api";

type SignInResponse = {
  user?: { id: string | number; email: string; name?: string };
  message?: string;
};

type SignUpResponse = SignInResponse;

export async function signIn(email: string, password: string): Promise<SignInResponse> {
  return apiFetch<SignInResponse>("/users/sign_in", {
    method: "POST",
    body: JSON.stringify({ user: { email, password } }),
  });
}

export async function signUp(name: string, email: string, password: string): Promise<SignUpResponse> {
  return apiFetch<SignUpResponse>("/users", {
    method: "POST",
    body: JSON.stringify({ user: { name, email, password } }),
  });
}

export async function signOut(): Promise<void> {
  await apiFetch("/users/sign_out", { method: "DELETE" });
}


