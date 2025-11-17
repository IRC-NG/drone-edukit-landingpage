
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/atoms/card";
import { benefits } from "@/data/benefits";

const Benefits = () => (
    <section id="manfaat" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Manfaat & Tujuan Edukatif</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Pembelajaran STEM yang komprehensif melalui teknologi drone
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
            <Card
              key={index}
              className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                  <Icon className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-800">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {benefit.description}
                </CardDescription>
              </CardContent>
            </Card>
            );
          })}
        </div>
      </div>
    </section>
  );

export default Benefits;
