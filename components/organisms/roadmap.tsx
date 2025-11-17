
import { roadmapItems } from "@/data/roadmap";
import { TimelineGraph } from "@/components/organisms/timeline-graph";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/atoms/card";
import { Badge } from "@/components/atoms/badge";
import { Progress } from "@/components/atoms/progress";

const Roadmap = () => (
    <section id="roadmap" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Roadmap 3 Tahun Kedepan</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Perjalanan pengembangan Drone Edukit dari 2025 hingga 2027
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Timeline Graph */}
          <TimelineGraph />

          {/* Detailed Timeline */}
          <div className="grid lg:grid-cols-3 gap-8">
            {["2025", "2026", "2027"].map((year) => {
              const yearItems = roadmapItems.filter((item) => item.year === year);
              const yearColors = {
                "2025": "border-blue-200 bg-blue-50",
                "2026": "border-purple-200 bg-purple-50",
                "2027": "border-green-200 bg-green-50",
              };
              const headerColors = {
                "2025": "from-blue-500 to-cyan-500",
                "2026": "from-purple-500 to-pink-500",
                "2027": "from-green-500 to-emerald-500",
              };

              return (
                <div key={year} className={`border-2 ${yearColors[year]} rounded-2xl p-6`}>
                  <div
                    className={`bg-gradient-to-r ${headerColors[year]} text-white rounded-xl p-4 mb-6 text-center`}
                  >
                    <h3 className="text-2xl font-bold">{year}</h3>
                    <p className="text-sm opacity-90">{yearItems.length} Milestone Utama</p>
                  </div>

                  <div className="space-y-4">
                    {yearItems.map((item, index) => (
                      <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                        <CardHeader className="pb-3">
                          <div className="flex items-center justify-between mb-2">
                            <Badge
                              variant={
                                item.status === "Selesai"
                                  ? "default"
                                  : item.status === "Berlangsung"
                                    ? "secondary"
                                    : "outline"
                              }
                              className="text-xs"
                            >
                              {item.quarter}
                            </Badge>
                            <Badge
                              variant={
                                item.status === "Selesai"
                                  ? "default"
                                  : item.status === "Berlangsung"
                                    ? "secondary"
                                    : "outline"
                              }
                            >
                              {item.status}
                            </Badge>
                          </div>
                          <CardTitle className="text-base font-semibold text-gray-800 leading-tight">
                            {item.title}
                          </CardTitle>
                          <CardDescription className="text-sm text-gray-600">{item.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="space-y-3">
                            <div className="space-y-1">
                              <div className="flex justify-between text-xs text-gray-600">
                                <span>Progress</span>
                                <span>{item.progress}%</span>
                              </div>
                              <Progress value={item.progress} className="h-1.5" />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Summary Stats */}
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Ringkasan Roadmap</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-blue-600">{roadmapItems.length}</div>
                <div className="text-sm text-gray-600">Total Milestone</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-green-600">
                  {roadmapItems.filter((item) => item.status === "Selesai").length}
                </div>
                <div className="text-sm text-gray-600">Selesai</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-orange-600">
                  {roadmapItems.filter((item) => item.status === "Berlangsung").length}
                </div>
                <div className="text-sm text-gray-600">Berlangsung</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-purple-600">3</div>
                <div className="text-sm text-gray-600">Tahun Timeline</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

export default Roadmap;
