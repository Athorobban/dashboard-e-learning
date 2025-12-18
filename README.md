# 📘 Dashboard E-Learning — Next.js + TypeScript + Tailwindcss + Supabase

![Next.js](https://img.shields.io/badge/Next.js-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?logo=typescript)
![Supabase](https://img.shields.io/badge/Supabase-Database%20%2B%20Storage-3ECF8E?logo=supabase&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![ShadCN](https://img.shields.io/badge/ShadCN-UI-black)
![Tailwind](https://img.shields.io/badge/TailwindCSS-38B2AC?logo=tailwindcss)
![Status](https://img.shields.io/badge/Status-Active-brightgreen)

Sistem **Dashboard E-Learning** yang dikembangkan menggunakan **Next.js**, **TypeScript**, **Supabase**.  
Project ini dibangun untuk mendukung digitalisasi pembelajaran di Sekolah Dasar, termasuk fitur manajemen materi, tugas, kuis, dan dashboard role-based untuk Admin, Guru, dan Siswa.

---

## 🚀 Tech Stack

- **Next.js (App Router)**
- **TypeScript**
- **Supabase (Database + Storage)**
- **Supabase Authentication**
- **React Hook Form**
- **TanStack Query**
- **ShadCN UI**
- **TailwindCSS**
- **Zod Validator**

---

## ✨ Fitur Utama

### 👨‍💼 Role-Based Dashboard

Setiap pengguna mendapatkan akses berbeda sesuai peran:

| Role      | Akses                                                             |
| --------- | ----------------------------------------------------------------- |
| **Admin** | Kelola pengguna (guru & siswa), lihat statistik, manajemen sistem |
| **Guru**  | CRUD materi, tugas, nilai, dan kuis                               |
| **Siswa** | Lihat materi, kerjakan tugas & kuis, lihat nilai                  |

---

### 📚 Manajemen Materi Pembelajaran

- Upload file materi (PDF, Word, PowerPoint, dsb.)
- Edit dan hapus materi
- Integrasi Supabase Storage
- Tampilan daftar materi per pertemuan

---

### 📝 Manajemen Tugas

- Guru membuat tugas lengkap dengan file pendukung
- Siswa mengumpulkan tugas secara online
- Guru memberikan nilai & feedback
- Data tersimpan otomatis di Supabase

---

### ❓ Modul Kuis (Quiz System)

- Soal pilihan ganda
- CRUD soal dan jawaban
- Penilaian otomatis ketika siswa submit
- Riwayat dan analytics skor siswa

---

### 🔐 Autentikasi Pengguna

- Login menggunakan Supabase Auth
- Sistem role tersimpan di Supabase
- Proteksi halaman menggunakan middleware
- Redirect otomatis berdasarkan role

---
