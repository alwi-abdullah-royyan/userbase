import { supabase } from "@/lib/supabaseClient";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
  return /^[0-9]{10,}$/.test(phone);
}

export default async function handler(req, res) {
  const { id } = req.query;

  // UPDATE USER
  if (req.method === "PUT") {
    const { nama, email, nomor_telepon, status_aktif, departement } = req.body;

    // Validasi input
    if (email && !isValidEmail(email)) {
      return res.status(400).json({ error: "Format email tidak valid" });
    }
    if (nomor_telepon && !isValidPhone(nomor_telepon)) {
      return res.status(400).json({ error: "Nomor telepon hanya boleh angka & minimal 10 digit" });
    }

    const { data, error } = await supabase
      .from("users")
      .update({ nama, email, nomor_telepon, status_aktif, departement })
      .eq("id", id)
      .select();

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json(data);
  }

  // DELETE USER
  if (req.method === "DELETE") {
    const { error } = await supabase.from("users").delete().eq("id", id);

    if (error) return res.status(500).json({ error: error.message, reason: "gagal menghapus user" });
    return res.status(200).json({ message: "User deleted successfully" });
  }

  res.status(405).json({ error: "Method not allowed" });
}
