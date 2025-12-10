import { environment } from "@/configs/environment";
import { createServerClient } from "@supabase/ssr";
import { NextRequest, NextResponse } from "next/server";

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const { SUPABASE_URL, SUPABASE_ANON_KEY } = environment;

  const supabase = createServerClient(SUPABASE_URL!, SUPABASE_ANON_KEY!, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
        supabaseResponse = NextResponse.next({ request });
        cookiesToSet.forEach(({ name, value, options }) => supabaseResponse.cookies.set(name, value, options));
      },
    },
  });

  // ✅ Tambahan: Izinkan halaman login dan register diakses tanpa login
  const { pathname } = request.nextUrl;
  const publicRoutes = ["/login", "/register", "/login", "/register"];
  const isPublicRoute = publicRoutes.some((route) => pathname.startsWith(route));

  if (isPublicRoute) {
    // Jika route adalah halaman publik, langsung izinkan lanjut
    return supabaseResponse;
  }

  // 🔹 Ambil user dari Supabase
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // 🔒 Jika belum login dan mencoba akses halaman non-public, redirect ke login
  if (!user) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  // 🔁 Jika sudah login dan mencoba buka /login atau /register, redirect ke /
  if (user && (pathname === "/login" || pathname === "/register")) {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  // ✅ Jika user login dan halaman valid, lanjutkan request
  return supabaseResponse;
}
