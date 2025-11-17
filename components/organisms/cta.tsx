
import { Button } from "@/components/atoms/button";

const CTA = () => (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">Siap Memulai Petualangan Teknologi?</h2>
          <p className="text-xl text-blue-100 leading-relaxed">
            Bergabunglah dengan komunitas pelajar dan pendidik yang menggunakan Drone Edukit untuk eksplorasi
            teknologi masa depan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              Daftar Beta Testing
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 bg-transparent"
            >
              Download Dokumentasi
            </Button>
          </div>
        </div>
      </div>
    </section>
  );

export default CTA;
