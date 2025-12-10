"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useActionState } from "react";
import Link from "next/link";

import { createUserSchema } from "@/validations/auth-validation";
import { register } from "../actions";
import { INITIAL_STATE_CREATE_USER, ROLE_LIST } from "@/constants/auth-constant";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

export default function RegisterForm() {
  const [state, formAction] = useActionState(register, INITIAL_STATE_CREATE_USER);

  const form = useForm({
    resolver: zodResolver(createUserSchema),
    defaultValues: { name: "", email: "", password: "", role: "", avatar_url: "" },
  });

  return (
    <div className="flex flex-col justify-center w-full max-w-md mx-auto bg-white dark:bg-neutral-900 shadow-md rounded-xl p-6">
      <h1 className="text-2xl font-semibold text-center mb-4">Daftar Akun</h1>

      {state.status === "error" && state.errors?._form && <div className="text-sm text-red-600 border border-red-300 rounded-md p-3 mb-3">{state.errors._form.join(", ")}</div>}

      <Form {...form}>
        <form action={formAction} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nama Lengkap</FormLabel>
                <FormControl>
                  <Input placeholder="Nama Anda" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="email@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Minimal 6 karakter" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Peran</FormLabel>
                <FormControl>
                  <select {...field} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                    <option value="">Pilih peran</option>
                    <option value="Guru">Guru</option>
                    <option value="Siswa">Siswa</option>
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Daftar
          </Button>
        </form>
      </Form>

      <p className="text-sm text-center text-muted-foreground mt-4">
        Sudah punya akun?{" "}
        <Link href="/login" className="text-primary hover:underline">
          Masuk sekarang
        </Link>
      </p>
    </div>
  );
}
