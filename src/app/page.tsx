'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Card } from './components/card';
import { SharePopup } from './components/SharePopup';
import { FiShare2 } from 'react-icons/fi';

export default function Home() {
  const [showShare, setShowShare] = useState(false);
  const siteUrl = 'https://manajemenkkn2025.vercel.app/';

  return (
    <main className="min-h-screen mt-0 bg-gray-200 px-4 py-8 relative">
      {/* Share Icon Top Right */}
      <button
        onClick={() => setShowShare(true)}
        className="absolute top-6 right-6 bg-white rounded-full p-2 shadow hover:bg-gray-100 transition"
        aria-label="Share"
      >
        <FiShare2 size={30} className="text-gray-600" />
      </button>

      {/* Share Popup */}
      {showShare && <SharePopup url={siteUrl} onClose={() => setShowShare(false)} />}

      {/* Content */}
      <div className="flex flex-col mt-20 items-center justify-center">
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
          <Card icon="📁" text="file spreadsheet" link="https://drive.google.com/" />
          <Card icon="📄" text="file docs" link="https://docs.google.com/" />
          <Card icon="📄" text="file docs" link="https://docs.google.com/" />
        </div>
      </div>
    </main>
  );
}
