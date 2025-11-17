
import Link from "next/link";
import { Plane } from "lucide-react";

const Header = () => (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
            <Plane className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Drone Edukit
          </span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link href="#spesifikasi" className="text-gray-600 hover:text-blue-600 transition-colors">
            Spesifikasi
          </Link>
          <Link href="#roadmap" className="text-gray-600 hover:text-blue-600 transition-colors">
            Roadmap
          </Link>
          <Link href="#manfaat" className="text-gray-600 hover:text-blue-600 transition-colors">
            Manfaat
          </Link>
          <Link href="#kontak" className="text-gray-600 hover:text-blue-600 transition-colors">
            Kontak
          </Link>
        </nav>
      </div>
    </header>
  );

export default Header;
