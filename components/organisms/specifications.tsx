
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/atoms/card";
import { specifications } from "@/data/specifications";

const Specifications = () => (
    <section id="spesifikasi" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Spesifikasi Drone Edukit</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Teknologi canggih yang dikemas dalam desain ramah pelajar
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specifications.map((spec, index) => {
            const Icon = spec.icon;
            return (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2"
            >
              <CardHeader className="pb-3">
                <div
                  className={`w-12 h-12 ${spec.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg font-semibold text-gray-800">{spec.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">{spec.description}</CardDescription>
              </CardContent>
            </Card>
            );
          })}
        </div>
      </div>
    </section>
  );

export default Specifications;
