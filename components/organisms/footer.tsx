
import Link from "next/link";
import { Github, Mail, Twitter, Linkedin, Plane } from "lucide-react";

const Footer = () => (
    <footer id="kontak" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Plane className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Drone Edukit</span>
            </div>
            <p className="text-gray-400">
              Platform pembelajaran STEM berbasis drone untuk masa depan yang lebih cerdas.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Kontak Tim</h3>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>irc.ng2025@gmail.com</span>
              </div>
              {/* <div className="flex items-center space-x-2">
                <Github className="w-4 h-4" />
                <span>github.com/droneedukit</span>
              </div> */}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Dokumentasi</h3>
            <div className="space-y-2">
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                Panduan Pengguna
              </Link>
              {/* <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                API Documentation
              </Link>
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                Tutorial Video
              </Link> */}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Media Sosial</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Drone Edukit. Semua hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  );

export default Footer;
