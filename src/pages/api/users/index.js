import { supabase } from "@/lib/supabaseClient";

// Fungsi validasi email
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Fungsi validasi nomor telepon
function isValidPhone(phone) {
  return /^[0-9]{10,}$/.test(phone); // minimal 10 angka
}

export default async function handler(req, res) {
  // CREATE USER
  if (req.method === "POST") {
    const { nama, email, nomor_telepon, status_aktif, departement } = req.body;

    // Validasi input
    if (!nama || !email || !nomor_telepon) {
      return res.status(400).json({ error: "Nama, email, dan nomor telepon wajib diisi" });
    }
    if (!isValidEmail(email)) {
      return res.status(400).json({ error: "Format email tidak valid" });
    }
    if (!isValidPhone(nomor_telepon)) {
      return res.status(400).json({ error: "Nomor telepon hanya boleh angka & minimal 10 digit" });
    }

    // Insert ke Supabase
    const { data, error } = await supabase
      .from("users")
      .insert([{ nama, email, nomor_telepon, status_aktif, departement }])
      .select();

    if (error) return res.status(500).json({ error: error.message });
    return res.status(201).json(data);
  }

  // READ ALL USERS
  if (req.method === "GET") {
    const { data, error } = await supabase.from("users").select("*").order("created_at", { ascending: false });

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }

  res.status(405).json({ error: "Method not allowed" });
}
