import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#030303] text-[#e4ded7] flex flex-col items-center justify-center p-6 text-center border-grid">
      <h1 className="text-8xl font-extrabold font-mono mb-4 text-[#e4ded7]">404</h1>
      <h2 className="text-xl font-bold uppercase tracking-widest mb-4">PAGE NOT FOUND</h2>
      <p className="text-[#a3a3a3] text-xs font-mono max-w-md mb-8">
        The requested path does not exist on this server shell.
      </p>
      <Link
        href="/"
        className="px-6 py-3 border border-[#e4ded7] bg-[#e4ded7] text-[#030303] text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2 hover:bg-transparent hover:text-[#e4ded7] transition-all"
      >
        <ArrowLeft size={16} />
        <span>RETURN TO HOME</span>
      </Link>
    </div>
  );
}

