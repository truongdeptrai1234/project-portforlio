import supabase from "./supabase";

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  if (error) throw new Error("Invalid user or password");
  return data;
}
export async function getCurrentUser() {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (error) return null;
  return user;
}
export async function logoutUser() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error("Failed to log out");
}
export async function singup({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { fullName, userAvatar: "" } },
  });
  if (error) throw new Error("fail to sign up");
  return data;
}
