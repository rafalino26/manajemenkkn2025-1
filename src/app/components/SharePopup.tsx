'use client';
import { FaFacebookF, FaXTwitter, FaWhatsapp, FaTelegram, FaDiscord, FaLink } from 'react-icons/fa6';
import { MdClose } from 'react-icons/md';
import { QRCodeCanvas } from 'qrcode.react';

type Props = {
  url: string;
  onClose: () => void;
};

export const SharePopup = ({ url, onClose }: Props) => {
  const handleCopy = async () => {
    await navigator.clipboard.writeText(url);
    alert('Link disalin!');
  };

  return (
    <div className="fixed inset-0 bg-transparent backdrop-blur-sm z-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl shadow-xl relative w-[300px] text-center">
        <button onClick={onClose} className="absolute top-2 right-2 text-xl text-gray-600 hover:text-black">
          <MdClose />
        </button>

        <QRCodeCanvas value={url} size={180} className="mx-auto" />
        <p className="mt-2 text-sm break-all">{url}</p>
        <a
          href={`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(url)}&size=200x200`}
          download="qrcode.png"
          className="bg-red-600 text-white mt-3 inline-block py-1 px-4 rounded-md"
        >
          Download
        </a>

        <div className="mt-4 flex flex-wrap justify-center gap-3 text-white">
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} target="_blank" className="bg-blue-600 p-2 rounded-full">
            <FaFacebookF />
          </a>
          <a href={`https://twitter.com/intent/tweet?url=${url}`} target="_blank" className="bg-black p-2 rounded-full">
            <FaXTwitter />
          </a>
          <a href={`https://wa.me/?text=${url}`} target="_blank" className="bg-green-500 p-2 rounded-full">
            <FaWhatsapp />
          </a>
          <a href={`https://t.me/share/url?url=${url}`} target="_blank" className="bg-blue-400 p-2 rounded-full">
            <FaTelegram />
          </a>
          <a href={`https://discord.com/channels/@me`} target="_blank" className="bg-indigo-600 p-2 rounded-full">
            <FaDiscord />
          </a>
          <button onClick={handleCopy} className="bg-gray-400 p-2 rounded-full">
            <FaLink />
          </button>
        </div>
      </div>
    </div>
  );
};
