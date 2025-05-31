import Image from 'next/image';
import { Card } from './components/card';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-8">
      <Image
        src="/logo-unima.png"
        alt="Logo UNIMA"
        width={100}
        height={100}
        className="mb-4"
      />
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
        Manajemen KKN 2025
      </h1>
      <p className="text-gray-600 text-center mb-8">
        Link monitoring Jurusan Manajemen untuk kegiatan KKN Tahun 2025
      </p>

      <div className="space-y-4 w-full max-w-md">
        <Card
          icon="📁"
          text="Masterfile Manajemen - KKN 2025"
          link="https://drive.google.com/"
        />
        <Card
          icon="📄"
          text="Lembar Penilaian DPL - Konversi KKN MBKM [New]"
          link="https://docs.google.com/"
        />
        <Card
          icon="📄"
          text="Lembar LPKS - IA KKN MBKM 2025 [New]"
          link="https://docs.google.com/"
        />
      </div>
    </main>
  );
}
