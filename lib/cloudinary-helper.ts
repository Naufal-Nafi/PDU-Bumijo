import cloudinary from "./cloudinary";

const FOLDER = "pdu-bumijo";

export async function uploadImage(file: File): Promise<string> {
  const buffer = Buffer.from(await file.arrayBuffer());
  const base64 = `data:${file.type};base64,${buffer.toString("base64")}`;

  const result = await cloudinary.uploader.upload(base64, {
    folder: FOLDER,
  });

  return result.secure_url;
}

function extractPublicId(url: string): string | null {
  // https://res.cloudinary.com/xxx/image/upload/v1234567/pdu-bumijo/layanan/abc123.jpg
  const match = url.match(/\/upload\/(?:v\d+\/)?(.+)\.[a-zA-Z0-9]+$/);
  return match ? match[1] : null;
}

export async function deleteImage(url: string) {
  const publicId = extractPublicId(url);
  if (!publicId) return;

  try {
    await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    // gagal hapus gambar lama gak perlu bikin operasi utama gagal, cukup dicatat
    console.error("Gagal hapus gambar Cloudinary:", error);
  }
}