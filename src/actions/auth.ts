"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { siteConfig } from "@/config/site-config";
import { schema } from "@/schema/email-form";

export type FormState = {
  message: string;
};

export async function signInWithEmail(request: FormData) {
  const formData = Object.fromEntries(request);
  const parsed = schema.safeParse(formData);

  if (!parsed.success) {
    return {
      message: "Invalid email",
    };
  }

  const supabase = createClient();

  const { data, error } = await supabase.auth.signInWithOtp({
    email: formData.email as string,
    options: {
      shouldCreateUser: false,
    }
  });

  console.log(data);

  if (error) {
    redirect('/error');
  }

  // revalidatePath('/', 'layout');
  // redirect('/');

  console.log(formData);

  return { message: "Form success!" };
}

export async function signUpWithEmail(data: FormData) {
  const formData = Object.fromEntries(data);
  const parsed = schema.safeParse(formData);

  if (!parsed) {
    return { message: "Invalid data", error: 400 };
  }


}

export async function verifyOTP(formData: FormData) {}
