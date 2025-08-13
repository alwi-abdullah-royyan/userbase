# Next.js + Supabase CRUD API

Proyek ini adalah implementasi CRUD sederhana menggunakan **Next.js** (Pages Router) dan **Supabase** sebagai database.  
Fitur yang tersedia:

- Membuat pengguna (Create)
- Mengambil daftar semua pengguna (Read)
- Memperbarui data pengguna berdasarkan ID (Update)
- Menghapus pengguna berdasarkan ID (Delete)
- Validasi email & nomor telepon pada input

---

## 🚀 Cara Menjalankan Aplikasi

### 1. Clone Repository

```bash
git clone https://github.com/username/nama-repo.git
cd nama-repo
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Konfigurasi Environment Variables

Buat file `.env.local` di root project:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

> **Catatan:** URL dan Key bisa dilihat di dashboard Supabase → Project Settings → API.

### 4. Jalankan Aplikasi (Development Mode)

```bash
npm run dev
```

Aplikasi akan berjalan di [http://localhost:3000](http://localhost:3000)

---

## 📚 Dokumentasi API

### Base URL (Development)

```
http://localhost:3000/api/users
```

---

### 1️⃣ Create User

**Endpoint:**

```
POST /api/users
```

**Body (JSON):**

```json
{
  "nama": "Budi Santoso",
  "email": "budi.santoso@example.com",
  "nomor_telepon": "081234567890",
  "status_aktif": true,
  "departement": "IT"
}
```

**Validasi:**

- Email harus format valid
- Nomor telepon hanya angka, minimal 10 digit

**Response:**

```json
[
  {
    "id": "uuid",
    "nama": "Budi Santoso",
    "email": "budi.santoso@example.com",
    "nomor_telepon": "081234567890",
    "status_aktif": true,
    "departement": "IT",
    "created_at": "2025-08-13T07:00:00.000Z"
  }
]
```

---

### 2️⃣ Get All Users

**Endpoint:**

```
GET /api/users
```

**Response:**

```json
[
  {
    "id": "uuid",
    "nama": "Siti Rahma",
    "email": "siti.rahma@example.com",
    "nomor_telepon": "081298765432",
    "status_aktif": true,
    "departement": "HRD",
    "created_at": "2025-08-13T07:00:00.000Z"
  }
]
```

---

### 3️⃣ Update User

**Endpoint:**

```
PUT /api/users/{id}
```

**Body (JSON):**

```json
{
  "status_aktif": false,
  "departement": "Finance"
}
```

**Response:**

```json
[
  {
    "id": "uuid",
    "nama": "Siti Rahma",
    "email": "siti.rahma@example.com",
    "nomor_telepon": "081298765432",
    "status_aktif": false,
    "departement": "Finance",
    "created_at": "2025-08-13T07:00:00.000Z"
  }
]
```

---

### 4️⃣ Delete User

**Endpoint:**

```
DELETE /api/users/{id}
```

**Response:**

```json
{
  "message": "User deleted successfully"
}
```

---

## 🛠 Teknologi yang Digunakan

- [Next.js](https://nextjs.org/)
- [Supabase](https://supabase.com/)
- JavaScript (Pages Router)
- REST API

---

## 📄 Lisensi

MIT License
